import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://pyidliikcfflnlotxddx.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseAccessKey = import.meta.env.VITE_SUPABASE_SERVICE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const admin = createClient(supabaseUrl, supabaseAccessKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

export const adminAuth = admin.auth.admin;

export default supabase;
