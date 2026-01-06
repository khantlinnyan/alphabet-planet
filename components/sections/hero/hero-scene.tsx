"use client";

import Image from "next/image";

type HeroSceneProps = {
  sceneRef: React.RefObject<HTMLDivElement | null>;
  orbitPathRef: React.RefObject<SVGPathElement | null>;
  earthRef: React.RefObject<HTMLDivElement | null>;
  rocketRef: React.RefObject<HTMLDivElement | null>;
  rocketGlowRef: React.RefObject<HTMLDivElement | null>;
  planetRef: React.RefObject<HTMLDivElement | null>;
  planetGlowRef: React.RefObject<HTMLDivElement | null>;
  astronautRef: React.RefObject<HTMLDivElement | null>;
};

const HeroScene = ({
  sceneRef,
  orbitPathRef,
  earthRef,
  rocketRef,
  rocketGlowRef,
  planetRef,
  planetGlowRef,
  astronautRef,
}: HeroSceneProps) => {
  return (
    <div className="relative mt-12 flex w-full items-center justify-center md:mt-0 md:justify-end">
      <div
        ref={sceneRef}
        className="relative h-[280px] w-[280px] md:h-[380px] md:w-[380px] xl:h-[540px] xl:w-[540px]"
      >
        <div className="pointer-events-none absolute -left-[20px] -top-[25px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(110,123,255,0.22),transparent_70%)] opacity-[0.14] md:-left-[25px] md:-top-[30px] md:h-[440px] md:w-[440px] md:opacity-[0.16] xl:-left-[40px] xl:-top-[45px] xl:h-[640px] xl:w-[640px] xl:opacity-[0.18]" />

        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 540 540">
          <defs>
            <linearGradient id="orbitGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
          <path
            ref={orbitPathRef}
            d="M190 300 C 270 200 360 160 445 115"
            stroke="url(#orbitGradient)"
            strokeWidth="1"
            strokeDasharray="6 10"
            fill="none"
            opacity="0.2"
          />
        </svg>

        <div
          ref={earthRef}
          className="absolute left-[40px] top-[105px] h-[150px] w-[150px] md:left-[70px] md:top-[140px] md:h-[190px] md:w-[190px] xl:left-[110px] xl:top-[190px] xl:h-[260px] xl:w-[260px]"
        >
          <Image
            src="/illustrations/earth.png"
            alt="Earth illustration"
            fill
            sizes="(min-width: 1280px) 260px, (min-width: 768px) 190px, 150px"
            className="object-contain opacity-80"
          />
        </div>

        <div
          ref={rocketRef}
          className="absolute left-[120px] top-[130px] h-[100px] w-[100px] -rotate-[14deg] md:left-[160px] md:top-[175px] md:h-[120px] md:w-[120px] md:-rotate-[16deg] xl:left-[230px] xl:top-[240px] xl:h-[170px] xl:w-[170px] xl:-rotate-[18deg]"
        >
          <div
            ref={rocketGlowRef}
            className="absolute -bottom-2 left-1/2 h-6 w-4 -translate-x-1/2 rounded-full bg-[#9bb0ff] opacity-40 blur-[10px]"
          />
          <Image
            src="/illustrations/rocket.png"
            alt="Rocket illustration"
            fill
            sizes="(min-width: 1280px) 170px, (min-width: 768px) 120px, 100px"
            className="object-contain"
          />
        </div>

        <div
          ref={planetRef}
          className="absolute left-[205px] top-[45px] h-[85px] w-[85px] md:left-[275px] md:top-[60px] md:h-[115px] md:w-[115px] xl:left-[390px] xl:top-[75px] xl:h-[150px] xl:w-[150px]"
        >
          <div
            ref={planetGlowRef}
            className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(180,140,255,0.2),transparent_70%)] opacity-[0.14] md:h-[200px] md:w-[200px] xl:h-[220px] xl:w-[220px]"
          />
          <Image
            src="/illustrations/planet.png"
            alt="Planet illustration"
            fill
            sizes="(min-width: 1280px) 150px, (min-width: 768px) 115px, 85px"
            className="object-contain"
          />
        </div>

        <div
          ref={astronautRef}
          className="absolute left-[195px] top-[195px] h-[70px] w-[70px] md:left-[255px] md:top-[250px] md:h-[90px] md:w-[90px] xl:left-[345px] xl:top-[350px] xl:h-[120px] xl:w-[120px]"
        >
          <Image
            src="/illustrations/astronaut.png"
            alt="Astronaut illustration"
            fill
            sizes="(min-width: 1280px) 120px, (min-width: 768px) 90px, 70px"
            className="object-contain opacity-95"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroScene;
