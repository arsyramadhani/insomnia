import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseSR = process.env.REACT_APP_SUPABASE_SERVICE_ROLE;

const REACT_APP_SUPABASE_URL = 'https://opmdapizldpzeylobaik.supabase.co';
const REACT_APP_SUPABASE_ANON_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wbWRhcGl6bGRwemV5bG9iYWlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0MTM4MDcsImV4cCI6MTk1OTk4OTgwN30.wrxXxtmlZCwazb-3I1QB_vWiq9Exoogp4nj_i80uPHY';

export const supabase = createClient(
    REACT_APP_SUPABASE_URL,
    REACT_APP_SUPABASE_ANON_KEY
);
