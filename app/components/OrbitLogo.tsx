export function OrbitLogo({compact=false}:{compact?:boolean}){
  return <div className={`orbit-brand ${compact?"compact":""}`} aria-label="ORBIT">
    <svg className="orbit-logo-svg" viewBox="0 0 74 74" role="img">
      <defs>
        <radialGradient id="og" cx="35%" cy="30%"><stop offset="0"/><stop offset="1"/></radialGradient>
        <linearGradient id="ocean" x1="0" x2="1"><stop offset="0"/><stop offset=".55"/><stop offset="1"/></linearGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <clipPath id="earthClip"><circle cx="37" cy="37" r="22"/></clipPath>
      </defs>
      <circle className="logo-halo" cx="37" cy="37" r="28" fill="none"/>
      <g className="logo-orbit" filter="url(#glow)"><ellipse cx="37" cy="37" rx="32" ry="13" fill="none"/><circle cx="66" cy="36" r="2.4"/></g>
      <circle cx="37" cy="37" r="22" fill="url(#og)" stroke="rgba(255,255,255,.25)"/>
      <g clipPath="url(#earthClip)" className="logo-earth">
        <rect x="15" y="15" width="44" height="44" fill="url(#ocean)"/>
        <path d="M20 27l8-6 7 2 2 5-5 3-3 6-7-2-3-5zm21-8l7 2 5 6-5 4-1 7-7-2-3-7 3-4zm-7 22l8-4 7 4-2 8-8 5-5-4zM18 47l7-2 6 5-3 7-8-2z" fill="rgba(190,230,255,.78)"/>
        <path d="M16 36h42M20 24h34M20 50h34" stroke="rgba(120,210,255,.35)" strokeWidth=".8" fill="none"/>
      </g>
      <circle cx="37" cy="37" r="22" fill="none" stroke="rgba(255,255,255,.28)"/>
    </svg>
    {!compact && <span>ORBIT</span>}
  </div>
}
