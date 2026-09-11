 "use client";
import {useState} from "react";

const categories=["Vehicle","Real Estate","Equipment","Agriculture","Energy","Collectibles"];
const icons=["🚗","🏠","🏗️","🌾","⚡","⌚"];

export default function Home(){
 const [dash,setDash]=useState(false);
 if(dash) return <Dashboard onHome={()=>setDash(false)}/>;
 return <div className="shell">
  <header className="top"><a className="brand" href="#"><span className="mark">◇</span>ProofLayer</a><nav className="nav"><a href="#assets">Assets</a><a href="#works">How It Works</a><a href="#research">Research</a><a href="#about">About</a></nav><div><button className="btn" onClick={()=>setDash(true)}>Login</button> <button className="btn primary" onClick={()=>setDash(true)}>Sign Up</button></div></header>
  <section className="hero"><div><div className="eyebrow">REAL WORLD ASSETS, A MORE OPEN TOMORROW</div><h1>Turn Real-World<br/>Assets Into<br/><span>Verifiable Digital Assets.</span></h1><p>Tokenize, verify, and transfer digital representations of real-world assets with transparency, security, and trust.</p><div className="actions"><button className="btn primary" onClick={()=>setDash(true)}>Tokenize Your Asset →</button><a className="btn" href="#assets">Explore Marketplace</a></div></div><div className="earth"><div className="ball"/></div></section>
  <section className="section" id="assets"><h2>Explore Asset Categories</h2><p className="muted">Start with vehicles and expand into broader real-world asset classes.</p><div className="grid">{categories.map((x,i)=><div className="asset" key={x} onClick={()=>setDash(true)}><div className="pic">{icons[i]}</div><b>{x}</b></div>)}</div></section>
  <section className="section" id="works"><h2>How It Works</h2><p className="muted">Create → Verify → Tokenize → Transfer → Record</p><div className="card"><p><b>1. Create</b> asset details and evidence.</p><p><b>2. Verify</b> identity, documents and asset evidence.</p><p><b>3. Tokenize</b> a unique digital representation.</p><p><b>4. Transfer</b> through a controlled buyer/seller workflow.</p><p><b>5. Record</b> immutable lifecycle events.</p></div></section>
  <section className="section" id="research"><div className="card"><div className="eyebrow">THE TRUST LAYER</div><h2>Real assets. Real evidence. Real history.</h2><p className="muted">ProofLayer separates sensitive documents from public blockchain records while preserving verifiable hashes and lifecycle events.</p><button className="btn primary" onClick={()=>setDash(true)}>Open MVP →</button></div></section>
  <footer className="footer" id="about">© 2026 ProofLayer · Prototype / MVP · Real Assets. Real Trust.</footer>
 </div>
}

function Dashboard({onHome}:{onHome:()=>void}){
 const [tab,setTab]=useState("dashboard");
 const [created,setCreated]=useState<string|null>(null);
 const [kyc,setKyc]=useState(false);
 const [name,setName]=useState("");
 async function create(){
   const res=await fetch("/api/assets",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({asset_type:"Vehicle",name:name||"Honda City",declared_value_inr:1000000})});
   const data=await res.json(); setCreated(data.asset_code||"API_NOT_CONFIGURED");
 }
 return <div className="shell"><header className="top"><a className="brand" href="#" onClick={e=>{e.preventDefault();onHome()}}><span className="mark">◇</span>ProofLayer</a><button className="btn" onClick={onHome}>← Home</button></header>
 <main className="dashboard"><h1>ProofLayer Dashboard</h1><p className="muted">V3 real-MVP foundation: API + database schema + verification + blockchain contract scaffold.</p>
 <div className="tabs">{["dashboard","assets","identity","tokenize","marketplace","transfers","activity"].map(x=><button key={x} onClick={()=>setTab(x)}>{x}</button>)}</div>
 {tab==="dashboard"&&<><div className="cards"><div className="card">My Assets<div className="num">3</div></div><div className="card">Verified<div className="num">2</div></div><div className="card">Transfers<div className="num">1</div></div></div><div className="card" style={{marginTop:15}}><h2>Build status</h2><p className="status">✓ Frontend</p><p className="status">✓ API route</p><p className="status">✓ Database schema</p><p className="status">✓ Verification workflow scaffold</p><p className="status">✓ ERC-721 contract scaffold</p></div></>}
 {tab==="assets"&&<div className="card"><h2>My Assets</h2><div className="row"><span><b>PL-DEMO-001</b><br/><small className="muted">2021 Honda City · ₹10,00,000</small></span><span className="status">Verified</span><button className="btn" onClick={()=>setTab("transfers")}>Transfer</button></div></div>}
 {tab==="identity"&&<div className="card"><h2>Identity Verification</h2><p className="muted">Production: connect a KYC provider and store only required verification state.</p><div className="field"><label>Full name</label><input value={name} onChange={e=>setName(e.target.value)} placeholder="Your legal name"/></div><button className="btn primary" onClick={()=>setKyc(true)}>Submit Verification</button>{kyc&&<div className="success">✓ Submitted. Status: Pending review.</div>}</div>}
 {tab==="tokenize"&&<div className="card"><h2>Create Asset Record</h2><div className="form"><div className="field"><label>Asset name</label><input value={name} onChange={e=>setName(e.target.value)} placeholder="2021 Honda City"/></div><div className="field"><label>Declared value INR</label><input placeholder="1000000"/></div><div className="field wide"><label>Ownership/document reference</label><input placeholder="Registration / invoice reference"/></div></div><div className="notice">Documents should be stored off-chain. Production blockchain record should contain hashes and lifecycle events, not raw personal documents.</div><button className="btn primary" onClick={create}>Create Asset Record →</button>{created&&<div className="success">✓ Created asset code: <b>{created}</b></div>}</div>}
 {tab==="marketplace"&&<div className="card"><h2>Marketplace</h2><div className="row"><span><b>2021 Honda City</b><br/><small className="muted">PL-DEMO-001 · Verified</small></span><b>₹10,00,000</b><button className="btn primary" onClick={()=>setTab("transfers")}>View & Accept</button></div></div>}
 {tab==="transfers"&&<div className="card"><h2>Transfer Workflow</h2><p>Seller request → Buyer review → Payment settlement → Legal/RTO steps → Digital record update.</p><div className="notice">Prototype payment is not real. Legal ownership is not established by a token transfer alone.</div><button className="btn primary" onClick={()=>setTab("activity")}>Complete Demo Transfer →</button></div>}
 {tab==="activity"&&<div className="card"><h2>Asset Activity</h2><p>Asset record created</p><p>Ownership evidence submitted</p><p>Verification status updated</p><p>Blockchain anchor queued</p><p>Transfer request created</p></div>}
 </main></div>
}