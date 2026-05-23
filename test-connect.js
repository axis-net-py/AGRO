const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// Helper to parse .env file without external dependencies
function parseEnv() {
    const envPath = path.join(__dirname, '.env');
    const config = {
        VITE_SUPABASE_URL: "https://hfybdsvaymsgycqapgaw.supabase.co",
        VITE_SUPABASE_ANON_KEY: "sb_publishable_2NP2PoV9aC-ntr5ifhPJlQ_dRgblCMV"
    };

    if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf-8');
        envContent.split('\n').forEach(line => {
            const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
            if (match) {
                const key = match[1];
                let value = match[2] || '';
                if (value.length > 0 && value.charAt(0) === '"' && value.charAt(value.length - 1) === '"') {
                    value = value.replace(/^"|"\s*$/g, '');
                }
                config[key] = value.trim();
            }
        });
    }
    return config;
}

const env = parseEnv();
const url = env.VITE_SUPABASE_URL;
const key = env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(url, key);

async function run() {
    console.log("\x1b[36m==================================================\x1b[0m");
    console.log("\x1b[36m   AURELIUS DATABASE DIAGNOSTICS & SETUP TEST     \x1b[0m");
    console.log("\x1b[36m==================================================\x1b[0m");
    console.log(`Connecting to: \x1b[33m${url}\x1b[0m\n`);

    try {
        const startTime = Date.now();
        const { data, error } = await supabase.from('agrimanage_data').select('*').limit(1);
        const duration = Date.now() - startTime;

        if (error) {
            if (error.code === 'PGRST205' || error.code === '42P01') {
                console.log("\x1b[31m❌ Connection Test: DATABASE TABLE MISSING!\x1b[0m");
                console.log("\x1b[33mThe Supabase endpoint is reachable, but the 'agrimanage_data' table does not exist in the public schema.\x1b[0m\n");
                console.log("\x1b[32m👉 INSTRUCTIONS TO RESOLVE THIS:\x1b[0m");
                console.log("Please execute the following SQL migration script in your Supabase SQL Editor:");
                console.log("\x1b[34m--------------------------------------------------\x1b[0m");
                console.log(`
-- 1. Create table for managing Aurelius data records
create table if not exists public.agrimanage_data (
    user_id uuid references auth.users(id) on delete cascade not null primary key,
    data jsonb not null default '{}'::jsonb,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Enable Row Level Security (RLS) on the table
alter table public.agrimanage_data enable row level security;

-- 3. Create granular RLS policies for user authentication
create policy "Allow users to read their own data"
on public.agrimanage_data for select to authenticated
using (auth.uid() = user_id);

create policy "Allow users to insert their own data"
on public.agrimanage_data for insert to authenticated
with check (auth.uid() = user_id);

create policy "Allow users to update their own data"
on public.agrimanage_data for update to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Allow users to delete their own data"
on public.agrimanage_data for delete to authenticated
using (auth.uid() = user_id);

-- 4. Create trigger to automatically manage updated_at timestamps
create or replace function public.handle_updated_at()
returns trigger as $$
begin
    new.updated_at = timezone('utc'::text, now());
    return new;
end;
$$ language plpgsql security definer;

create or replace trigger on_agrimanage_data_updated
    before update on public.agrimanage_data
    for each row execute function public.handle_updated_at();
                `);
                console.log("\x1b[34m--------------------------------------------------\x1b[0m");
            } else {
                console.log("\x1b[31m❌ Connection Test Failed!\x1b[0m");
                console.error("Error Code:", error.code);
                console.error("Error Message:", error.message);
                console.error("Details:", error.details);
            }
        } else {
            console.log("\x1b[32m✔ Connection Test: SUCCESS!\x1b[0m");
            console.log(`Successfully query completed in ${duration}ms.`);
            console.log("Response data:", data);
        }
    } catch (e) {
        console.log("\x1b[31m❌ Exception occurred during connection attempt!\x1b[0m");
        console.error(e);
    }
    console.log("\x1b[36m==================================================\x1b[0m");
}

run();
