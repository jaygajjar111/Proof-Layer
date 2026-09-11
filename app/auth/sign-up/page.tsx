"use client";
import {useState} from "react";
import {createClient} from "@/lib/supabase/browser";

export default function SignUp(){
 const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [msg,setMsg]=useState("");
 async function submit(){
  const supabase=createClient();
  const {error}=await supabase.auth.signUp({email,password});
  setMsg(error?error.message:"Account created. Check your email if confirmation is enabled.");
 }
 return <main style={{maxWidth:480,margin:"80px auto",padding:24}}><a href="/">← ProofLayer</a><div className="card" style={{marginTop:25}}><h1>Create account</h1><p className="muted">Real Supabase Auth will be used when environment variables are configured.</p><div className="field"><label>Email</label><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/></div><div className="field"><label>Password</label><input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Minimum 6 characters"/></div><button className="btn primary" onClick={submit}>Create Account →</button>{msg&&<div className="success">{msg}</div>}</div></main>
}