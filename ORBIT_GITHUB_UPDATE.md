# ORBIT — GitHub update checklist

Replace/add the files from this package in your existing `jaygajjar111/Proof-Layer` repo.

### Replace
- `app/page.tsx`
- `app/globals.css`
- `app/layout.tsx`
- `app/auth/login/page.tsx`
- `app/auth/sign-up/page.tsx`
- `app/api/assets/route.ts`
- `supabase/schema.sql`
- `package.json`
- `.env.example`

### Add
- `app/components/OrbitLogo.tsx`
- `app/components/RotatingGlobe.tsx`
- `app/components/OrbitCoin.tsx`
- `app/auth/callback/route.ts`
- `app/api/auth/username-login/route.ts`
- `contracts/OrbitAsset.sol`

### Keep
Keep your existing `lib/`, `tsconfig.json`, and other working files unless this package explicitly replaces them.

## Vercel environment variables
Add these to Vercel Project Settings → Environment Variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server-only)
- your existing chain/RPC variables when needed

## Supabase Auth
1. Run `supabase/schema.sql` in SQL Editor.
2. Enable Email provider.
3. Enable Google provider and configure OAuth credentials.
4. Add your production callback URL: `https://YOUR-DOMAIN/auth/callback`.
5. Enable Phone provider and configure an SMS provider.
6. Create a PRIVATE Storage bucket named `asset-documents`.

## Login options now designed
- Email + password
- ORBIT username + password (server resolves username without exposing email)
- Mobile number + OTP
- Google / Gmail OAuth

## Important security
Do NOT put `SUPABASE_SERVICE_ROLE_KEY`, wallet private keys, seed phrases, passwords, KYC files or private document data in GitHub.

## ORBIT Coin
The site includes an animated ORBIT Coin concept section. It is intentionally described as a future token layer, not a live investment offer. Do not publish token-sale, returns, supply or exchange claims until legal/compliance and token-economics work is complete.
