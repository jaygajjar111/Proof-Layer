"use client";
import {useState} from "react";
import Link from "next/link";
import RotatingGlobe from "./components/RotatingGlobe";
import {OrbitLogo} from "./components/OrbitLogo";
import {OrbitCoin} from "./components/OrbitCoin";

const assets=["Vehicles","Real Estate","Equipment","Agriculture","Energy","Collectibles"];
const steps=[
 ["01","Create","Register the real asset and its evidence."],
 ["02","Verify","Validate identity, documents and asset evidence."],
 ["03","Tokenize","Create a unique digital representation."],
 ["04","Transfer","Move the digital record through controlled workflows."],
 ["05","Record","Preserve a tamper-evident lifecycle history."]
];

export default function Home(){
 const [modal,setModal]=useState<"login"|"signup"|"asset"|null>(null);
 return <div className="shell"><div className="stars"/>
  <header className="top">
   <a href="#top"><OrbitLogo/></a>
   <nav className="nav"><a href="#assets">Assets</a><a href="#works">How It Works</a><a href="#trust">Trust Layer</a><a href="#coin">ORBIT Coin</a><a href="#about">About</a></nav>
   <div className="top-actions"><Link className="btn" href="/auth/login">Log in</Link><Link className="btn primary" href="/auth/sign-up">Sign up</Link></div>
  </header>
  <main id="top">
   <section className="hero">
    <div className="hero-copy">
     <div className="eyebrow">REAL-WORLD ASSET INFRASTRUCTURE · ORBIT</div>
     <h1>Make real assets <em>provable.</em></h1>
     <p>ORBIT builds a trusted digital layer for real-world assets — connecting identity, evidence, verification, lifecycle records and future on-chain settlement.</p>
     <div className="actions"><button className="btn primary" onClick={()=>setModal("asset")}>Register an Asset →</button><a className="btn" href="#assets">Explore the platform</a></div>
     <div className="hero-proof"><div className="metric"><strong>01</strong>Vehicle-first MVP</div><div className="metric"><strong>5-step</strong>Verification lifecycle</div><div className="metric"><strong>On + Off</strong>chain architecture</div></div>
    </div>
    <RotatingGlobe/>
   </section>

   <section className="section" id="assets"><div className="section-head"><span className="pill">ASSET UNIVERSE</span><h2>One infrastructure. Many real-world assets.</h2><p className="muted">We start with vehicles because ownership, documentation and transfers are tangible. The same verification architecture can expand to other asset classes.</p></div>
    <div className="asset-grid">{assets.map((x,i)=><article className="asset-card" key={x}><div className="asset-art"/><span className="pill">0{i+1}</span><h3>{x}</h3><small>{i===0?"MVP focus · Registration · Inspection":"Expansion layer · Coming later"}</small></article>)}</div>
   </section>

   <section className="section" id="works"><div className="section-head"><span className="pill">THE ORBIT FLOW</span><h2>From physical proof to a digital lifecycle.</h2><p className="muted">Every step is designed around evidence first. Blockchain is an integrity layer — not a replacement for legal ownership procedures.</p></div>
    <div className="steps">{steps.map(([n,t,d])=><article className="step" key={n}><div className="step-no">{n}</div><h3>{t}</h3><p className="muted">{d}</p></article>)}</div>
   </section>

   <section className="section" id="trust"><div className="trust"><div className="trust-visual"><div className="trust-node">Identity verified</div><div className="trust-node">Document integrity</div><div className="trust-node">Asset evidence</div><div className="trust-node">Lifecycle event</div><div className="line" style={{left:"22%",top:"35%",width:"55%",transform:"rotate(12deg)"}}/><div className="line" style={{left:"32%",top:"60%",width:"45%",transform:"rotate(-22deg)"}}/></div><div><span className="pill">TRUST LAYER</span><h2>Trust is the product.</h2><p className="muted">Sensitive identity and documents stay off-chain. ORBIT can anchor hashes, asset identifiers, verification states and lifecycle events so the public record can be checked without exposing private evidence.</p><div className="notice">Legal note: a blockchain token transfer does not by itself transfer legal ownership of a vehicle or other regulated asset. Required government, RTO and contractual processes remain separate.</div><button className="btn primary" onClick={()=>setModal("asset")}>See the asset flow →</button></div></div></section>

   <section className="section" id="coin"><div className="coin-section"><OrbitCoin/><div><span className="pill">FUTURE TOKEN LAYER</span><h2>ORBIT Coin.</h2><p className="muted">A future ORBIT token can become the network's utility and settlement layer — for platform services, verification workflows, ecosystem incentives and on-chain operations, subject to legal, regulatory and economic design.</p><div className="notice"><b>Concept, not a live investment offer.</b><br/>The ORBIT Coin shown here is a product/brand concept. Supply, utility, chain, launch and legal classification will be decided only after technical, legal and compliance work.</div><div className="hero-proof"><div className="metric"><strong>O</strong>Earth / Orbit identity</div><div className="metric"><strong>∞</strong>Network utility concept</div><div className="metric"><strong>1</strong>Unified brand system</div></div></div></div></section>

   <section className="cta"><span className="pill">BUILDING THE ORBIT NETWORK</span><h2>Real assets deserve a digital record people can trust.</h2><p className="muted">Start with one verified vehicle. Build toward a global asset infrastructure layer.</p><div className="actions"><button className="btn primary" onClick={()=>setModal("asset")}>Start with a vehicle →</button><Link className="btn" href="/auth/sign-up">Create ORBIT account</Link></div></section>
  </main>
  <footer className="footer" id="about"><span><OrbitLogo compact/> © 2026 ORBIT. Prototype / MVP.</span><span>Real assets · Real evidence · Real history</span></footer>
  {modal&&<Modal type={modal} close={()=>setModal(null)}/>}</div>
}

function Modal({type,close}:{type:"login"|"signup"|"asset",close:()=>void}){
 const title=type==="asset"?"Register a real asset":type==="login"?"Welcome to ORBIT":"Create your ORBIT account";
 return <div className="modal-backdrop" onMouseDown={close}><div className="modal" onMouseDown={e=>e.stopPropagation()}><div className="modal-head"><OrbitLogo compact/><button className="close" onClick={close}>×</button></div><h2>{title}</h2><p className="muted">{type==="asset"?"Prototype entry point — production flow will use authenticated ORBIT accounts.":"Choose your preferred sign-in method on the dedicated auth page."}</p>{type==="asset"?<><div className="field"><label>Asset name</label><input placeholder="2022 Honda City"/></div><div className="field"><label>Registration reference</label><input placeholder="Vehicle registration / document reference"/></div><button className="btn primary" onClick={()=>location.href="/auth/login"}>Continue to secure login →</button></>:<div className="actions"><Link className="btn primary" href={type==="login"?"/auth/login":"/auth/sign-up"}>{type==="login"?"Open Login":"Open Sign up"} →</Link></div>}</div></div>
}
