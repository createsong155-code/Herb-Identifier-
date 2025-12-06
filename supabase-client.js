// supabase-client.js
// Minimal supabase client loader. We recommend including supabase-js via CDN in community.html
// Replace these placeholders with your Supabase project info BEFORE deploying.

const SUPABASE_URL = "https://your-project-ref.supabase.co"; // <-- replace
const SUPABASE_ANON_KEY = "YOUR_ANON_KEY"; // <-- replace

// If using supabase-js v2 via CDN:
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js/dist/umd/supabase.min.js"></script>
// then this will create a global supabase client:
let supabase = null;
function initSupabaseClient() {
  if (!window.supabase) {
    console.error("Supabase library not loaded. Include supabase-js in community.html with CDN.");
    return null;
  }
  if (!supabase) {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return supabase;
}
