"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/browser";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setMsg("");
    setLoading(true);
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setMsg(error.message);
      else router.push("/");
    } catch (err) {
      setMsg(err instanceof Error ? err.message : "Login failed. Check your Supabase configuration.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="authPage">
      <div className="authGlow" />
      <div className="authShell">
        <Link className="brand" href="/"><span className="brandMark"><span /></span><span>Proof<span className="brandAccent">Layer</span></span></Link>
        <div className="authCard">
          <div className="eyebrow">SECURE ACCESS</div>
          <h1>Welcome back.</h1>
          <p className="muted">Sign in to manage your verified asset records.</p>
          <form onSubmit={submit} className="authForm">
            <div className="field"><label>Email</label><input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" /></div>
            <div className="field"><label>Password</label><input type="password" required value={password} onChange={e=>setPassword(e.target.value)} placeholder="Your password" /></div>
            <button className="btn primary big full" disabled={loading}>{loading ? "Signing in…" : "Log in →"}</button>
          </form>
          {msg && <div className="authMessage">{msg}</div>}
          <p className="authSwitch">New to ProofLayer? <Link href="/auth/sign-up">Create an account</Link></p>
        </div>
        <Link className="backHome" href="/">← Back to ProofLayer</Link>
      </div>
    </main>
  );
}
