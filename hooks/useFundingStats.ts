'use client';

import { useState, useEffect } from 'react';
import { supabase, FundingStats } from '@/lib/supabase';

export function useFundingStats() {
  const [stats, setStats] = useState<FundingStats>({
    total_backers: 237,
    super_early_bird_remaining: 3,
    early_bird_remaining: 150,
    funding_percentage: 49.4
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if Supabase is properly configured
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || supabaseUrl === 'https://example.supabase.co' || 
        !supabaseKey || supabaseKey === 'example-key') {
      console.warn('Supabase not configured, using mock data');
      setLoading(false);
      return;
    }

    // Fetch initial stats
    const fetchStats = async () => {
      try {
        const { data, error } = await supabase
          .from('funding_stats')
          .select('*')
          .single();

        if (error) {
          console.error('Error fetching stats:', error);
          setError(error.message);
          return;
        }

        if (data) {
          setStats(data);
        }
      } catch (err) {
        console.error('Error:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();

    // Set up real-time subscription
    const subscription = supabase
      .channel('funding_applications_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'funding_applications'
        },
        () => {
          fetchStats(); // Refetch stats when applications change
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return {
    ...stats,
    loading,
    error
  };
}