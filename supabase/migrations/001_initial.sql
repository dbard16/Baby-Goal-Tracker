-- Enable pgvector for future RAG embeddings
-- create extension if not exists vector;

-- ── Profiles (extends auth.users) ──────────────────────────────────────────
create table profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  full_name text,
  created_at timestamptz default now()
);

alter table profiles enable row level security;

create policy "Users can view own profile"
  on profiles for select using (auth.uid() = id);

create policy "Users can update own profile"
  on profiles for update using (auth.uid() = id);

create policy "Users can insert own profile"
  on profiles for insert with check (auth.uid() = id);

-- Auto-create profile on signup
create or replace function handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into profiles (id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();

-- ── Children ───────────────────────────────────────────────────────────────
create table children (
  id uuid default gen_random_uuid() primary key,
  parent_id uuid references profiles(id) on delete cascade not null,
  name text not null,
  date_of_birth date not null,
  created_at timestamptz default now()
);

alter table children enable row level security;

create policy "Parents can manage their own children"
  on children for all using (auth.uid() = parent_id);

-- ── Milestone records ──────────────────────────────────────────────────────
-- milestone_id references the id field in data/milestones.ts (client-side data)
create table milestone_records (
  id uuid default gen_random_uuid() primary key,
  child_id uuid references children(id) on delete cascade not null,
  milestone_id text not null,
  status text check (status in ('not_started', 'in_progress', 'achieved')) not null default 'not_started',
  achieved_at timestamptz,
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique (child_id, milestone_id)
);

alter table milestone_records enable row level security;

create policy "Parents can manage milestone records for their children"
  on milestone_records for all
  using (
    exists (
      select 1 from children
      where children.id = milestone_records.child_id
      and children.parent_id = auth.uid()
    )
  );

-- keep updated_at current
create or replace function set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger milestone_records_updated_at
  before update on milestone_records
  for each row execute function set_updated_at();

-- ── Chat messages (coach history per child) ────────────────────────────────
create table chat_messages (
  id uuid default gen_random_uuid() primary key,
  child_id uuid references children(id) on delete cascade not null,
  role text check (role in ('user', 'assistant')) not null,
  content text not null,
  created_at timestamptz default now()
);

alter table chat_messages enable row level security;

create policy "Parents can manage chat messages for their children"
  on chat_messages for all
  using (
    exists (
      select 1 from children
      where children.id = chat_messages.child_id
      and children.parent_id = auth.uid()
    )
  );
