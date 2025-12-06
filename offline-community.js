// offline-community.js
// Handles saving user-created posts locally while offline and exposing an API to read queued posts

// Save a new offline post (text + optional local image data URL)
async function queueOfflinePost({ author = "Anonymous", text = "", imageDataUrl = null }) {
  const post = {
    author,
    text,
    imageDataUrl,
    synced: false,
    created_at: new Date().toISOString()
  };
  const saved = await OfflineDB.saveCommunityPost(post);
  // dispatch a DOM event so UI can update live
  window.dispatchEvent(new CustomEvent("offline-post-saved", { detail: saved }));
  return saved;
}

// Get queued (unsynced) posts
async function getQueuedPosts() {
  return await OfflineDB.getUnsyncedCommunityPosts();
}

// Try to re-sync everything when online
async function trySyncQueuedPosts(syncFunction) {
  // syncFunction is provided by community.js (handles upload to server)
  const unsynced = await getQueuedPosts();
  const results = [];
  for (const post of unsynced) {
    try {
      const remote = await syncFunction(post); // expected to return { success:true, id: remoteId }
      if (remote && remote.success) {
        await OfflineDB.markCommunityPostSynced(post.localId, remote.id);
        results.push({ localId: post.localId, remoteId: remote.id, ok: true });
        window.dispatchEvent(new CustomEvent("offline-post-synced", { detail: { localId: post.localId, remoteId: remote.id } }));
      } else {
        results.push({ localId: post.localId, ok: false, error: remote });
      }
    } catch (err) {
      results.push({ localId: post.localId, ok: false, error: err });
    }
  }
  return results;
}

// Listen to connectivity change and auto-trigger sync if online
window.addEventListener("online", () => {
  // Try to call a global sync function if defined
  if (window.__communitySyncFunction) {
    trySyncQueuedPosts(window.__communitySyncFunction);
  }
});
