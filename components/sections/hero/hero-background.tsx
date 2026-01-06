"use client";

import Galaxy from "../../Galaxy";

const HeroBackground = () => {
  return (
    <>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Galaxy transparent />
      </div>
      <div className="absolute inset-0">
        <div className="absolute -left-[120px] -top-[140px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(110,123,255,0.12),transparent_70%)]" />
        <div className="absolute right-[-160px] top-[-120px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(180,140,255,0.1),transparent_70%)]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0),rgba(0,0,0,0.12))]" />
    </>
  );
};

export default HeroBackground;
