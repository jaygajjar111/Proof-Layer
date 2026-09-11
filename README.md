# ProofLayer V4 — Vehicle-first Real MVP

This is the next step after V3.

## What changed
- Supabase browser/server client helpers
- Real Sign Up page using Supabase Auth
- Real Login page using Supabase Auth
- Vehicle-only asset creation API
- Vehicle-specific registration reference fields
- Inspection and legal-transfer status fields
- Asset activity/event model
- Private document-storage recommendation

## Recommended deployment path
1. Put this project in a GitHub repository.
2. Create a Supabase project and run `supabase/schema.sql`.
3. Create a private Storage bucket named `asset-documents`.
4. Configure environment variables in Vercel.
5. Deploy the Next.js app.
6. Test signup/login and vehicle creation.
7. Add authenticated middleware/protected dashboard.
8. Add secure document upload + SHA-256 hashing.
9. Add admin verification console.
10. Add EVM testnet anchoring only after verification.

## Do not upload secrets
Never commit `.env.local`, service-role keys, private keys, seed phrases, passwords or KYC documents to GitHub.
