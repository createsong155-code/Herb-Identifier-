// offline-db.js
// Minimal IndexedDB helper for the herb app and offline community queue.

const DB_NAME = "herb-app-db";
const DB_VERSION = 1;
const STORE_HERBS = "herbs";
const STORE_META = "meta";
const STORE_COMMUNITY = "community_posts";

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_HERBS)) {
        db.createObjectStore(STORE_HERBS, { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains(STORE_META)) {
        db.createObjectStore(STORE_META, { keyPath: "key" });
      }
      if (!db.objectStoreNames.contains(STORE_COMMUNITY)) {
        const store = db.createObjectStore(STORE_COMMUNITY, { keyPath: "localId" });
        store.createIndex("synced", "synced", { unique: false });
        store.createIndex("created_at", "created_at", { unique: false });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function idbPut(storeName, value) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);
    const req = store.put(value);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function idbGet(storeName, key) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readonly");
    const store = tx.objectStore(storeName);
    const req = store.get(key);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function idbGetAll(storeName, indexName, query) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readonly");
    const store = tx.objectStore(storeName);
    let request;
    if (indexName) {
      const idx = store.index(indexName);
      request = idx.getAll(query);
    } else {
      request = store.getAll();
    }
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function idbDelete(storeName, key) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);
    const req = store.delete(key);
    req.onsuccess = () => resolve(true);
    req.onerror = () => reject(req.error);
  });
}

/* Public functions used elsewhere */
const OfflineDB = {
  // herbs store
  saveHerb: (herb) => idbPut(STORE_HERBS, herb),
  getHerb: (id) => idbGet(STORE_HERBS, id),
  getAllHerbs: () => idbGetAll(STORE_HERBS),

  // metadata store
  setMeta: (key, value) => idbPut(STORE_META, { key, value }),
  getMeta: (key) => idbGet(STORE_META, key),

  // community queue store
  saveCommunityPost: (post) => {
    // ensure localId and created_at exist
    if (!post.localId) post.localId = "local_" + Date.now() + "_" + Math.random().toString(36).slice(2, 9);
    post.synced = post.synced || false;
    post.created_at = post.created_at || new Date().toISOString();
    return idbPut(STORE_COMMUNITY, post);
  },
  getCommunityPost: (localId) => idbGet(STORE_COMMUNITY, localId),
  getAllCommunityPosts: () => idbGetAll(STORE_COMMUNITY),
  getUnsyncedCommunityPosts: () => idbGetAll(STORE_COMMUNITY, "synced", false),
  markCommunityPostSynced: async (localId, remoteId) => {
    const post = await idbGet(STORE_COMMUNITY, localId);
    if (!post) return null;
    post.synced = true;
    post.remoteId = remoteId || null;
    post.synced_at = new Date().toISOString();
    await idbPut(STORE_COMMUNITY, post);
    return post;
  },
  deleteCommunityPost: (localId) => idbDelete(STORE_COMMUNITY, localId)
};
