create extension if not exists pgcrypto;

create table if not exists profiles(
 id uuid primary key references auth.users(id) on delete cascade,
 username text unique,
 full_name text,
 avatar_url text,
 created_at timestamptz default now()
);

create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles(id, username, full_name, avatar_url)
  values (
    new.id,
    nullif(lower(new.raw_user_meta_data->>'username'),''),
    nullif(new.raw_user_meta_data->>'full_name',''),
    nullif(new.raw_user_meta_data->>'avatar_url','')
  )
  on conflict (id) do update set
    username=coalesce(excluded.username,profiles.username),
    full_name=coalesce(excluded.full_name,profiles.full_name),
    avatar_url=coalesce(excluded.avatar_url,profiles.avatar_url);
  return new;
end; $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
for each row execute procedure public.handle_new_user();

alter table profiles add column if not exists username text unique;
alter table profiles add column if not exists full_name text;
alter table profiles add column if not exists avatar_url text;

create table if not exists assets(
 id uuid primary key default gen_random_uuid(), asset_code text unique not null,
 owner_id uuid references auth.users(id), asset_type text not null, name text not null,
 description text, declared_value_inr numeric,
 verification_status text not null default 'pending' check (verification_status in ('pending','under_review','verified','rejected')),
 document_hash text, token_contract text, token_id text, registration_ref text,
 vin_or_chassis_ref text, inspection_status text default 'not_started', legal_transfer_status text default 'not_started',
 created_at timestamptz default now(), updated_at timestamptz default now()
);

create table if not exists asset_documents(
 id uuid primary key default gen_random_uuid(), asset_id uuid not null references assets(id) on delete cascade,
 storage_path text not null, sha256 text not null, document_type text,
 verification_status text default 'pending', created_at timestamptz default now()
);
create table if not exists asset_events(
 id uuid primary key default gen_random_uuid(), asset_id uuid not null references assets(id) on delete cascade,
 actor_id uuid references auth.users(id), event_type text not null, metadata jsonb default '{}'::jsonb,
 created_at timestamptz default now()
);
create table if not exists transfer_requests(
 id uuid primary key default gen_random_uuid(), asset_id uuid not null references assets(id),
 seller_id uuid not null references auth.users(id), buyer_id uuid references auth.users(id), price_inr numeric,
 status text not null default 'requested' check(status in ('requested','accepted','payment_pending','settled','legal_pending','completed','cancelled')),
 created_at timestamptz default now(), updated_at timestamptz default now()
);

alter table profiles enable row level security;
alter table assets enable row level security;
alter table asset_documents enable row level security;
alter table asset_events enable row level security;
alter table transfer_requests enable row level security;

drop policy if exists "profiles are visible by username" on profiles;
drop policy if exists "users update own profile" on profiles;
drop policy if exists "owners can view assets" on assets;
drop policy if exists "users can create own assets" on assets;
drop policy if exists "owners can update assets" on assets;
drop policy if exists "owners can view documents" on asset_documents;
drop policy if exists "owners can view events" on asset_events;
create policy "profiles are visible by username" on profiles for select using (true);
create policy "users update own profile" on profiles for update using (auth.uid()=id);
create policy "owners can view assets" on assets for select using (auth.uid()=owner_id);
create policy "users can create own assets" on assets for insert with check (auth.uid()=owner_id);
create policy "owners can update assets" on assets for update using (auth.uid()=owner_id);
create policy "owners can view documents" on asset_documents for select using (exists(select 1 from assets where assets.id=asset_documents.asset_id and assets.owner_id=auth.uid()));
create policy "owners can view events" on asset_events for select using (exists(select 1 from assets where assets.id=asset_events.asset_id and assets.owner_id=auth.uid()));

create index if not exists profiles_username_idx on profiles(username);
create index if not exists assets_owner_idx on assets(owner_id);
create index if not exists assets_code_idx on assets(asset_code);
create index if not exists events_asset_idx on asset_events(asset_id);

-- Create a PRIVATE Storage bucket named asset-documents in Supabase Storage.
-- Never expose SUPABASE_SERVICE_ROLE_KEY to the browser.
-- Google/Gmail OAuth: enable Google provider and add https://YOUR-DOMAIN/auth/callback as redirect URL.
-- Mobile OTP: enable Phone provider and configure an SMS provider.
