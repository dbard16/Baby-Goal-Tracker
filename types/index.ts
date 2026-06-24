export type AgeCheckpoint = 2 | 4 | 6 | 9 | 12 | 18 | 24 | 36 | 48 | 60;

export type DevelopmentalDomain =
  | 'social_emotional'
  | 'language_communication'
  | 'cognitive'
  | 'movement_physical';

export interface Milestone {
  id: string;
  ageMonths: AgeCheckpoint;
  domain: DevelopmentalDomain;
  description: string;
  source: string;
  warning: string;
}

export interface Activity {
  id: string;
  milestoneId: string;
  title: string;
  description: string;
  howTo: string;
  source: string;
  ageRangeMonths: [number, number];
  materials?: string[];
}

// snake_case matches Supabase column names directly
export interface Child {
  id: string;
  name: string;
  date_of_birth: string; // ISO date "YYYY-MM-DD"
  parent_id: string;
  created_at?: string;
}

export interface MilestoneRecord {
  id: string;
  child_id: string;
  milestone_id: string;
  status: 'not_started' | 'in_progress' | 'achieved';
  achieved_at?: string | null;
  notes?: string;
  created_at?: string;
  updated_at?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string; // local display field
  child_id?: string;
  audio_url?: string;
}
