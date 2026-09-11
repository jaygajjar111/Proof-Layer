import React from "react";

export default function RotatingGlobe() {
  return (
    <div className="rotatingGlobe" aria-label="ORBIT rotating Earth">
      <div className="rotatingGlobe__sphere">
        <div className="rotatingGlobe__map" />
        <div className="rotatingGlobe__grid" />
        <div className="rotatingGlobe__shine" />
        <div className="rotatingGlobe__edge" />
      </div>
      <div className="rotatingGlobe__orbit rotatingGlobe__orbit--one" />
      <div className="rotatingGlobe__orbit rotatingGlobe__orbit--two" />
      <div className="rotatingGlobe__dot rotatingGlobe__dot--one" />
      <div className="rotatingGlobe__dot rotatingGlobe__dot--two" />
    </div>
  );
}
