import { useEffect, useState } from 'react';
import { supabase } from './supabase';
import type { Child } from '../types';

const isDemoMode = !process.env.EXPO_PUBLIC_SUPABASE_URL;

// Demo child is 9 months old — hits a nice active milestone window
const DEMO_CHILD: Child = {
  id: 'demo',
  name: 'Baby',
  date_of_birth: new Date(Date.now() - 9 * 30.44 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0],
  parent_id: 'demo',
};

export function useChild() {
  const [child, setChild] = useState<Child | null>(isDemoMode ? DEMO_CHILD : null);
  const [loading, setLoading] = useState(!isDemoMode);

  useEffect(() => {
    if (isDemoMode) return;

    async function fetchFirstChild() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { setLoading(false); return; }

      const { data } = await supabase
        .from('children')
        .select('*')
        .eq('parent_id', user.id)
        .order('created_at', { ascending: true })
        .limit(1)
        .single();

      setChild(data ?? null);
      setLoading(false);
    }

    fetchFirstChild();
  }, []);

  const ageMonths = child
    ? Math.floor((Date.now() - new Date(child.date_of_birth).getTime()) / (1000 * 60 * 60 * 24 * 30.44))
    : null;

  return { child, ageMonths, loading, isDemoMode };
}
