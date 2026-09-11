# ORBIT — FINAL BRAND MIGRATION

Brand is now locked as: ORBIT
Do not use ProofLayer or the old PL monogram in visible UI.

## Replace/add
- app/components/RotatingGlobe.tsx
- app/components/rotating-globe.css
- public/orbit-logo.svg

## globals.css
Add once:
@import "./components/rotating-globe.css";

## page.tsx
Add:
import RotatingGlobe from "@/app/components/RotatingGlobe";

Use `<RotatingGlobe />` for the hero Earth.

Replace the old PL Trust Layer mark with:
<img src="/orbit-logo.svg" alt="ORBIT" className="orbit-premium-logo" />

## Brand text
Replace visible ProofLayer references with ORBIT.
Suggested hero:
"Make real assets provable."

Suggested trust line:
"Real-world value. One connected orbit."

## Important
Keep internal repository folder names temporarily if needed; this package focuses on the visible product brand and components. Before public launch, also update metadata, README, contract comments, environment labels, and any remaining ProofLayer strings.

## Future coin
Use the same `orbit-logo.svg` symbol as the coin identity. The mark is deliberately recognizable without the word ORBIT.
