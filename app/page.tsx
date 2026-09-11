"use client";

import Link from "next/link";
import { useState } from "react";
import RotatingGlobe from "@/app/components/RotatingGlobe";

const categories = [
  ["01", "Vehicles", "Verified ownership & history", "🚗"],
  ["02", "Real Estate", "Evidence-backed property records", "⌂"],
  ["03", "Equipment", "Machines with trusted provenance", "◈"],
  ["04", "Agriculture", "Traceable real-world assets", "✦"],
  ["05", "Energy", "Infrastructure & generation assets", "ϟ"],
  ["06", "Collectibles", "Authenticity & lifecycle proof", "◇"],
];

const steps = [
  ["01", "Create", "Register the real-world asset and its evidence."],
  ["02", "Verify", "Validate identity, documents and asset data."],
  ["03", "Represent", "Create a unique digital representation."],
  ["04", "Transfer", "Run a controlled buyer / seller workflow."],
  ["05", "Record", "Keep a tamper-evident lifecycle history."],
];

const particles = Array.from({ length: 34 }, (_, i) => i);

export default function Home() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <main className="site">
      <div className="starfield" aria-hidden="true">
        {particles.map((i) => <i key={i} style={{ ["--i" as string]: i } as React.CSSProperties} />)}
      </div>
      <div className="ambient ambientOne" />
      <div className="ambient ambientTwo" />
      <div className="topGlow" />

      <header className="topbar">
        <Link className="brand" href="/" aria-label="ORBIT home">
          <img src="/orbit-logo.svg" alt="" className="brandLogo" />
          <span>ORBIT</span>
        </Link>
        <nav className="nav">
          <a href="#assets">Assets</a>
          <a href="#how">How It Works</a>
          <a href="#trust">Trust Layer</a>
          <a href="#about">About</a>
        </nav>
        <div className="navActions">
          <Link className="btn ghost" href="/auth/login">Log in</Link>
          <Link className="btn primary" href="/auth/sign-up">Sign up <span>↗</span></Link>
        </div>
      </header>

      <section className="hero">
        <div className="heroCopy">
          <div className="eyebrow"><i /> ORBIT · REAL-WORLD ASSET INFRASTRUCTURE</div>
          <h1>Make real assets<br /><span>provable.</span></h1>
          <p className="heroLead">
            ORBIT creates trusted digital records for real-world assets — connecting
            ownership evidence, verification and lifecycle history in one intelligent layer.
          </p>
          <div className="heroActions">
            <Link className="btn primary big" href="/auth/sign-up">Create an Asset <span>→</span></Link>
            <a className="btn glass big" href="#how">Explore ORBIT <span>↓</span></a>
          </div>
          <div className="proofStats">
            <div><strong>01</strong><span>Identity</span></div>
            <div><strong>02</strong><span>Evidence</span></div>
            <div><strong>03</strong><span>Lifecycle</span></div>
          </div>
        </div>

        <div className="heroVisual" aria-label="ORBIT digital Earth visualization">
          <div className="visualLabel labelA"><span className="signal" /> GLOBAL ASSET NETWORK</div>
          <div className="orbit orbitA" /><div className="orbit orbitB" /><div className="orbit orbitC" />
          <div className="orbit orbitD" />
          <div className="glowCore" />
          <div className="assetSphere">
            <div className="globeAtmosphere" />
            <img className="worldGlobe" src="/earth-globe.png" alt="" />
            <div className="sphereGrid" />
            <div className="sphereShine" />
            <div className="sphereEdge" />
            <div className="sphereDot d1" /><div className="sphereDot d2" /><div className="sphereDot d3" />
          </div>
          <div className="nodeLine lineOne"><span /><b>VERIFIED</b></div>
          <div className="nodeLine lineTwo"><span /><b>RECORDED</b></div>
          <div className="floatingCard cardTop"><span className="miniIcon">✓</span><div><b>Asset verified</b><small>Evidence matched</small></div></div>
          <div className="floatingCard cardBottom"><span className="pulseDot" /><div><b>Lifecycle record</b><small>Immutable event trail</small></div></div>
          <div className="scanLine" />
        </div>
      </section>

      <section className="ticker" aria-label="ORBIT principles">
        <span>VERIFY</span><b>✦</b><span>REPRESENT</span><b>✦</b><span>TRANSFER</span><b>✦</b><span>RECORD</span><b>✦</b><span>CONNECT</span>
      </section>

      <section className="section" id="assets">
        <div className="sectionHead">
          <div><div className="eyebrow">ONE INFRASTRUCTURE</div><h2>One orbit.<br /><span>Many asset worlds.</span></h2></div>
          <p>Start with vehicles, then extend the same trust infrastructure across the physical economy.</p>
        </div>
        <div className="assetGrid">
          {categories.map(([n, title, desc, icon]) => (
            <button className={`assetTile ${active === title ? "selected" : ""}`} key={title} onClick={() => setActive(title)} type="button">
              <span className="tileNumber">{n}</span><span className="tileIcon">{icon}</span>
              <b>{title}</b><small>{desc}</small><span className="tileArrow">↗</span>
            </button>
          ))}
        </div>
        {active && <div className="selection">Selected: <b>{active}</b><span>·</span> Sign up to create a real asset record.</div>}
      </section>

      <section className="section process" id="how">
        <div className="eyebrow">THE ORBIT LAYER</div>
        <h2>From physical reality<br /><span>to trusted digital history.</span></h2>
        <div className="steps">
          {steps.map(([n, title, text]) => <div className="step" key={n}><span className="stepNo">{n}</span><div className="stepLine" /><h3>{title}</h3><p>{text}</p></div>)}
        </div>
      </section>

      <section className="trustSection" id="trust">
        <div className="trustVisual">
          <div className="trustStars" />
          <div className="ring ring1" /><div className="ring ring2" /><div className="ring ring3" />
          <div className="trustCore"><img src="/orbit-logo.svg" alt="ORBIT" /></div>
          <div className="trustOrbitalDot" />
        </div>
        <div className="trustCopy">
          <div className="eyebrow">TRUST BY DESIGN</div>
          <h2>Private evidence.<br /><span>Provable history.</span></h2>
          <p>Personal data and raw documents stay off-chain. ORBIT can anchor hashes, verification states and lifecycle events to create a tamper-evident history.</p>
          <div className="trustList">
            <div><b>✓</b><span>Evidence-first asset records</span></div>
            <div><b>✓</b><span>Controlled transfer workflow</span></div>
            <div><b>✓</b><span>Blockchain-ready verification anchors</span></div>
          </div>
          <Link className="btn primary" href="/auth/sign-up">Build your first record →</Link>
        </div>
      </section>

      <section className="cta" id="about">
        <div className="ctaGrid" /><div className="ctaGlow" /><div className="ctaOrbit" />
        <div className="eyebrow">ORBIT · BUILDING THE NEXT ASSET LAYER</div>
        <h2>Bring the real world<br /><span>into a trusted orbit.</span></h2>
        <p>Real assets. Real evidence. Real history.</p>
        <Link className="btn primary big" href="/auth/sign-up">Get started <span>↗</span></Link>
      </section>

      <footer className="footer">
        <Link className="brand" href="/"><img src="/orbit-logo.svg" alt="" className="brandLogo" /><span>ORBIT</span></Link>
        <span>© 2026 ORBIT · Prototype / MVP</span>
        <div><Link href="/auth/login">Login</Link><Link href="/auth/sign-up">Sign up</Link></div>
      </footer>
    </main>
  );
}
