"use client";
import {useState} from "react";
import {createClient} from "@/lib/supabase/browser";

export default function Login(){
 const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [msg,setMsg]=useState("");
 async function submit(){
  const supabase=createClient();
  const {error}=await supabase.auth.signInWithPassword({email,password});
  setMsg(error?error.message:"Logged in. Add protected-route middleware next.");
 }
 return <main style={{maxWidth:480,margin:"80px auto",padding:24}}><a href="/">← ProofLayer</a><div className="card" style={{marginTop:25}}><h1>Welcome back</h1><div className="field"><label>Email</label><input value={email} onChange={e=>setEmail(e.target.value)}/></div><div className="field"><label>Password</label><input type="password" value={password} onChange={e=>setPassword(e.target.value)}/></div><button className="btn primary" onClick={submit}>Login →</button>{msg&&<div className="success">{msg}</div>}</div></main>
}