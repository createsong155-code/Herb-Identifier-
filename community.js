// community.js
// Online logic: list posts, create post to Supabase, sync queued posts
// Relies on supabase-client.js and offline-community.js

// Initialize supabase when needed
function ensureSupabase() {
  const client = initSupabaseClient();
  if (!client) throw new Error("Supabase client not initialized");
  return client;
}

// Create a remote post on Supabase
async function createRemotePost(post) {
  try {
    const client = ensureSupabase();
    // If post contains imageDataUrl, you should upload to Supabase Storage first
    let image_url = null;
    if (post.imageDataUrl) {
      // Image is a data URL: convert to blob and upload
      const blob = dataURLtoBlob(post.imageDataUrl);
      const fileName = `community/${Date.now()}_${Math.random().toString(36).slice(2,9)}.png`;
      const { data: uploadData, error: uploadError } = await client.storage.from("community-images").upload(fileName, blob, { contentType: "image/png" });
      if (uploadError) {
        console.warn("image upload error", uploadError);
      } else {
        const { data: publicData } = client.storage.from("community-images").getPublicUrl(fileName);
        image_url = publicData.publicUrl;
      }
    }

    const row = {
      author: post.author,
      text: post.text,
      image_url,
      created_at: new Date().toISOString()
    };

    const { data, error } = await client.from("community_posts").insert([row]).select().single();
    if (error) {
      console.error("Supabase insert error", error);
      return { success: false, error };
    }
    return { success: true, id: data.id, data };
  } catch (err) {
    console.error("createRemotePost error", err);
    return { success: false, error: err };
  }
}

// Utility: convert dataURL to Blob
function dataURLtoBlob(dataurl) {
  const arr = dataurl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) u8arr[n] = bstr.charCodeAt(n);
  return new Blob([u8arr], { type: mime });
}

// Get latest posts from Supabase
async function fetchRemotePosts(limit = 50) {
  try {
    const client = ensureSupabase();
    const { data, error } = await client.from("community_posts").select("*").order("created_at", { ascending: false }).limit(limit);
    if (error) {
      console.error("fetchRemotePosts error", error);
      return [];
    }
    return data || [];
  } catch (err) {
    console.error(err);
    return [];
  }
}

// Public sync function used by offline-community.js
async function syncPostToRemote(post) {
  // returns {success:true, id: remoteId} or {success:false, error}
  const result = await createRemotePost(post);
  return result;
}

// Expose as global so offline-community auto-caller can use it
window.__communitySyncFunction = syncPostToRemote;
