"use client";
import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {createClient} from "@/lib/supabase/browser";
import {OrbitLogo} from "../../components/OrbitLogo";
import RotatingGlobe from "../../components/RotatingGlobe";

type Method="email"|"username"|"phone";
export default function Login(){
 const [method,setMethod]=useState<Method>("email"); const [email,setEmail]=useState(""); const [username,setUsername]=useState(""); const [phone,setPhone]=useState(""); const [password,setPassword]=useState(""); const [otp,setOtp]=useState(""); const [sent,setSent]=useState(false); const [msg,setMsg]=useState(""); const [busy,setBusy]=useState(false); const router=useRouter();
 const google=async()=>{setMsg("");const s=createClient();const {error}=await s.auth.signInWithOAuth({provider:"google",options:{redirectTo:`${window.location.origin}/auth/callback`}});if(error)setMsg(error.message)};
 const submit=async()=>{setBusy(true);setMsg("");const s=createClient();
  try{
   if(method==="phone"&&!sent){const {error}=await s.auth.signInWithOtp({phone,options:{shouldCreateUser:false}});if(error)throw error;setSent(true);setMsg("OTP sent. Check your phone.");return}
   if(method==="phone"&&sent){const {error}=await s.auth.verifyOtp({phone,token:otp,type:"sms"});if(error)throw error;router.push("/");return}
   if(method==="username"){const r=await fetch("/api/auth/username-login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username,password})});const d=await r.json();if(!r.ok)throw new Error(d.error||"Login failed");const {error}=await s.auth.setSession(d.session);if(error)throw error;router.push("/");return}
   const {error}=await s.auth.signInWithPassword({email,password});if(error)throw error;router.push("/");
  }catch(e){setMsg(e instanceof Error?e.message:String(e))}finally{setBusy(false)}
 };
 return <main className="auth-page"><div className="auth-visual"><RotatingGlobe/></div><div className="auth-card"><Link href="/"><OrbitLogo/></Link><h1>Welcome back.</h1><p className="muted">Access your ORBIT asset workspace.</p><div className="method-tabs">{(["email","username","phone"] as Method[]).map(x=><button className={method===x?"active":""} key={x} onClick={()=>{setMethod(x);setSent(false);setMsg("")}}>{x==="email"?"Email":x==="username"?"Username":"Mobile"}</button>)}</div>
 {method==="email"&&<><div className="field"><label>Email</label><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/></div><div className="field"><label>Password</label><input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••"/></div></>}
 {method==="username"&&<><div className="field"><label>ORBIT username</label><input value={username} onChange={e=>setUsername(e.target.value.toLowerCase())} placeholder="jay_orbit"/></div><div className="field"><label>Password</label><input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••"/></div><div className="notice">Username login keeps the underlying auth email private from the UI.</div></>}
 {method==="phone"&&<><div className="field"><label>Mobile number</label><input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="+91 98XXXXXXXX"/></div>{sent&&<div className="field"><label>OTP</label><input value={otp} onChange={e=>setOtp(e.target.value)} placeholder="6-digit code" inputMode="numeric"/></div>}</>}
 <button className="btn primary" style={{width:"100%"}} disabled={busy} onClick={submit}>{busy?"Please wait…":method==="phone"&&!sent?"Send OTP →":"Log in →"}</button><button className="btn google" onClick={google}>Continue with Google / Gmail</button>{msg&&<div className={msg.toLowerCase().includes("sent")?"success":"error"}>{msg}</div>}<p className="muted" style={{fontSize:12,marginTop:18}}>New here? <Link className="auth-link" href="/auth/sign-up">Create an ORBIT account</Link></p></div></main>
}
