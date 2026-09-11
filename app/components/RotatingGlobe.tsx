import {OrbitLogo} from "./OrbitLogo";

export default function RotatingGlobe(){
  return <div className="globe-stage" aria-label="Animated ORBIT Earth">
    <div className="globe-aura"/>
    <div className="orbit-ring ring-a"><i/></div>
    <div className="orbit-ring ring-b"><i/></div>
    <div className="orbit-ring ring-c"><i/></div>
    <div className="earth-sphere">
      <div className="earth-texture"/>
      <div className="earth-grid"/>
      <div className="earth-shade"/>
      <div className="earth-gloss"/>
    </div>
    <div className="globe-pin pin-one"><span/>Asset verified</div>
    <div className="globe-pin pin-two"><span/>Lifecycle recorded</div>
    <div className="globe-pin pin-three"><span/>Global infrastructure</div>
    <div className="globe-core"><OrbitLogo compact/></div>
  </div>
}
