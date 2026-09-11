create extension if not exists pgcrypto;

create table if not exists profiles(
 id uuid primary key references auth.users(id) on delete cascade,
 full_name text,
 created_at timestamptz default now()
);

create table if not exists assets(
 id uuid primary key default gen_random_uuid(),
 asset_code text unique not null,
 owner_id uuid references auth.users(id),
 asset_type text not null,
 name text not null,
 description text,
 declared_value_inr numeric,
 verification_status text not null default 'pending'
   check (verification_status in ('pending','under_review','verified','rejected')),
 document_hash text,
 token_contract text,
 token_id text,
 created_at timestamptz default now(),
 updated_at timestamptz default now()
);

create table if not exists asset_documents(
 id uuid primary key default gen_random_uuid(),
 asset_id uuid not null references assets(id) on delete cascade,
 storage_path text not null,
 sha256 text not null,
 document_type text,
 verification_status text default 'pending',
 created_at timestamptz default now()
);

create table if not exists asset_events(
 id uuid primary key default gen_random_uuid(),
 asset_id uuid not null references assets(id) on delete cascade,
 actor_id uuid references auth.users(id),
 event_type text not null,
 metadata jsonb default '{}'::jsonb,
 created_at timestamptz default now()
);

create table if not exists transfer_requests(
 id uuid primary key default gen_random_uuid(),
 asset_id uuid not null references assets(id),
 seller_id uuid not null references auth.users(id),
 buyer_id uuid references auth.users(id),
 price_inr numeric,
 status text not null default 'requested'
   check(status in ('requested','accepted','payment_pending','settled','legal_pending','completed','cancelled')),
 created_at timestamptz default now(),
 updated_at timestamptz default now()
);

alter table assets enable row level security;
alter table asset_documents enable row level security;
alter table asset_events enable row level security;
alter table transfer_requests enable row level security;

create policy "owners can view assets" on assets for select
using (auth.uid()=owner_id);
create policy "users can create own assets" on assets for insert
with check (auth.uid()=owner_id);

-- Storage bucket and policies should be configured after the project is created.
-- Never expose SUPABASE_SERVICE_ROLE_KEY to the browser.

-- Vehicle-first MVP extension
alter table assets add column if not exists registration_ref text;
alter table assets add column if not exists vin_or_chassis_ref text;
alter table assets add column if not exists inspection_status text default 'not_started';
alter table assets add column if not exists legal_transfer_status text default 'not_started';

create index if not exists assets_owner_idx on assets(owner_id);
create index if not exists assets_code_idx on assets(asset_code);
create index if not exists events_asset_idx on asset_events(asset_id);

-- Recommended Storage bucket:
-- create a private bucket named "asset-documents".
-- Keep raw RC/identity documents private; expose only through authenticated server routes.
