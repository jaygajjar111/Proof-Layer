# ORBIT — GitHub replacement package

This package is designed so you do NOT have to manually merge CSS or JSX.

## Replace these files in the existing repo
- `app/page.tsx`
- `app/globals.css`
- `app/layout.tsx`
- `app/auth/login/page.tsx`
- `app/auth/sign-up/page.tsx`

## Add these files
- `app/components/RotatingGlobe.tsx`
- `app/components/rotating-globe.css`
- `public/orbit-logo.svg`
- `public/earth-globe.png`

Do not delete your existing `lib/`, `contracts/`, `supabase/`, API routes, package.json, tsconfig.json, or environment files.

## Commit
`Finalize ORBIT premium website, Earth animation and brand`

Vercel should deploy automatically from `main`.

## Notes
- ORBIT is the visible brand name.
- The old PL monogram is removed from the Trust section.
- The ORBIT symbol is used in the header, footer, auth pages and Trust section.
- The same symbol is intended as the future coin identity.
- The hero Earth and orbital system are continuously animated; reduced-motion users get a static fallback.
