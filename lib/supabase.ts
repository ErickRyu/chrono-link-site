import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://example.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'example-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface FundingApplication {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  package_type: string;
  price: string;
  message?: string;
  language: string;
  status?: 'pending' | 'confirmed' | 'shipped';
}

export interface FundingStats {
  total_backers: number;
  super_early_bird_remaining: number;
  early_bird_remaining: number;
  funding_percentage: number;
  total_raised?: number;
}