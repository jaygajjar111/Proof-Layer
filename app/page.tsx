"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  ["🚗", "Vehicles", "Verified ownership & history"],
  ["🏠", "Real Estate", "Evidence-backed property records"],
  ["🏗️", "Equipment", "Machines with trusted provenance"],
  ["🌾", "Agriculture", "Traceable real-world assets"],
  ["⚡", "Energy", "Infrastructure & generation assets"],
  ["⌚", "Collectibles", "Authenticity & lifecycle proof"],
];

const steps = [
  ["01", "Create", "Register the real-world asset and its evidence."],
  ["02", "Verify", "Validate identity, documents and asset data."],
  ["03", "Tokenize", "Create a unique digital representation."],
  ["04", "Transfer", "Run a controlled buyer / seller workflow."],
  ["05", "Record", "Keep a tamper-evident lifecycle history."],
];

export default function Home() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <main className="site">
      <div className="ambient ambientOne" />
      <div className="ambient ambientTwo" />

      <header className="topbar">
        <Link className="brand" href="/">
          <span className="brandMark"><span /></span>
          <span>Proof<span className="brandAccent">Layer</span></span>
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
          <div className="eyebrow"><i /> REAL-WORLD ASSETS · VERIFIABLE INFRASTRUCTURE</div>
          <h1>Make real assets<br /><span>provable.</span></h1>
          <p className="heroLead">
            ProofLayer creates trusted digital records for real-world assets —
            connecting ownership evidence, verification and lifecycle history.
          </p>

          <div className="heroActions">
            <Link className="btn primary big" href="/auth/sign-up">Tokenize an Asset <span>→</span></Link>
            <a className="btn glass big" href="#how">See how it works <span>↓</span></a>
          </div>

          <div className="proofStats">
            <div><strong>01</strong><span>Asset identity</span></div>
            <div><strong>02</strong><span>Evidence layer</span></div>
            <div><strong>03</strong><span>Lifecycle record</span></div>
          </div>
        </div>

        <div className="heroVisual" aria-label="ProofLayer digital asset visualization">
          <div className="orbit orbitA" />
          <div className="orbit orbitB" />
          <div className="orbit orbitC" />
          <div className="glowCore" />
          <div className="assetSphere">
            <div className="globeHalo" />
            <img className="worldGlobe" src="/earth-globe.png" alt="Digital globe representing verified real-world assets" />
            <div className="sphereGrid" />
            <div className="sphereShine" />
            <div className="sphereDot d1" />
            <div className="sphereDot d2" />
            <div className="sphereDot d3" />
          </div>
          <div className="floatingCard cardTop">
            <span className="miniIcon">✓</span>
            <div><b>Asset verified</b><small>Evidence matched</small></div>
          </div>
          <div className="floatingCard cardBottom">
            <span className="pulseDot" />
            <div><b>Lifecycle record</b><small>Immutable event trail</small></div>
          </div>
          <div className="scanLine" />
        </div>
      </section>

      <section className="ticker" aria-label="ProofLayer principles">
        <span>VERIFY</span><b>✦</b><span>REPRESENT</span><b>✦</b><span>TRANSFER</span><b>✦</b><span>RECORD</span><b>✦</b><span>VERIFY</span>
      </section>

      <section className="section" id="assets">
        <div className="sectionHead">
          <div><div className="eyebrow">START WITH VEHICLES</div><h2>One proof layer.<br /><span>Many asset classes.</span></h2></div>
          <p>Begin with vehicles, then expand the same verification infrastructure across the physical economy.</p>
        </div>

        <div className="assetGrid">
          {categories.map(([icon, title, desc], i) => (
            <button
              className={`assetTile ${active === title ? "selected" : ""}`}
              key={title}
              onClick={() => setActive(title)}
              type="button"
            >
              <span className="tileNumber">0{i + 1}</span>
              <span className="tileIcon">{icon}</span>
              <b>{title}</b>
              <small>{desc}</small>
              <span className="tileArrow">↗</span>
            </button>
          ))}
        </div>
        {active && <div className="selection">Selected: <b>{active}</b> <span>·</span> Sign up to create a real asset record.</div>}
      </section>

      <section className="section process" id="how">
        <div className="eyebrow">THE PROOF LAYER</div>
        <h2>From physical reality<br /><span>to trusted digital history.</span></h2>
        <div className="steps">
          {steps.map(([n, title, text]) => (
            <div className="step" key={n}>
              <span className="stepNo">{n}</span>
              <div className="stepLine" />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="trustSection" id="trust">
        <div className="trustVisual">
          <div className="ring ring1" /><div className="ring ring2" /><div className="ring ring3" />
          <div className="trustCore">PL</div>
        </div>
        <div className="trustCopy">
          <div className="eyebrow">TRUST BY DESIGN</div>
          <h2>Keep sensitive evidence private.<br /><span>Make verification provable.</span></h2>
          <p>
            Personal data and raw documents stay off-chain. ProofLayer can anchor
            hashes, verification states and lifecycle events to create a tamper-evident history.
          </p>
          <div className="trustList">
            <div><b>✓</b><span>Evidence-first asset records</span></div>
            <div><b>✓</b><span>Controlled transfer workflow</span></div>
            <div><b>✓</b><span>Blockchain-ready verification anchors</span></div>
          </div>
          <Link className="btn primary" href="/auth/sign-up">Build your first record →</Link>
        </div>
      </section>

      <section className="cta" id="about">
        <div className="ctaGlow" />
        <div className="eyebrow">PROOFLAYER · MVP</div>
        <h2>Tokenize today.<br /><span>Build a more open tomorrow.</span></h2>
        <p>Real assets. Real evidence. Real history.</p>
        <Link className="btn primary big" href="/auth/sign-up">Get started <span>↗</span></Link>
      </section>

      <footer className="footer">
        <Link className="brand" href="/"><span className="brandMark"><span /></span><span>Proof<span className="brandAccent">Layer</span></span></Link>
        <span>© 2026 ProofLayer · Prototype / MVP</span>
        <div><Link href="/auth/login">Login</Link><Link href="/auth/sign-up">Sign up</Link></div>
      </footer>
    </main>
  );
}
