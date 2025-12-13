import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

// debug: check CWD and file existence
const envPath = path.resolve(process.cwd(), '.env');
console.log(`[Supabase Init] CWD: ${process.cwd()}`);
console.log(`[Supabase Init] Expected .env path: ${envPath}`);
const fileExists = fs.existsSync(envPath);
console.log(`[Supabase Init] .env exists? ${fileExists}`);

if (fileExists) {
    // Force load specifically this file
    const result = dotenv.config({ path: envPath });
    if (result.error) {
        console.error('[Supabase Init] Error parsing .env:', result.error);
    } else {
        console.log('[Supabase Init] dotenv loaded successfully.');
    }
} else {
    console.warn('[Supabase Init] .env file NOT found at expected path.');
}

// Try to get variables from all possible sources
const getEnvVar = (key: string) => {
    // Check various sources
    const val = process.env[key] || (import.meta.env && import.meta.env[key]);
    return val || "";
};

const supabaseUrl = getEnvVar("PUBLIC_SUPABASE_URL") || getEnvVar("SUPABASE_URL");
const supabaseAnonKey = getEnvVar("PUBLIC_SUPABASE_ANON_KEY") || getEnvVar("SUPABASE_ANON_KEY");

console.log("--- Supabase Client Initialization ---");
console.log(`Supabase URL found: ${supabaseUrl ? "YES" : "NO"} (${supabaseUrl ? supabaseUrl.substring(0, 10) + '...' : ''})`);
console.log(`Supabase Key found: ${supabaseAnonKey ? "YES" : "NO"} key length: ${supabaseAnonKey?.length}`);
console.log("--------------------------------------");

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('ERROR: Supabase credentials still missing.');
}

// Fallback to prevent crash, but requests will fail if variables are invalid
export const supabase = createClient(
    supabaseUrl || "https://placeholder.supabase.co",
    supabaseAnonKey || "placeholder"
);
