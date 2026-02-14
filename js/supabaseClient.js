import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://aavycxkhfbbpnnxdpbse.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhdnljeGtoZmJicG5ueGRwYnNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwODMxMjQsImV4cCI6MjA4NjY1OTEyNH0.tYV9_EzMj339oDnuonMTvcTnd3EL8Xr3FjmY1uI__mc'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
