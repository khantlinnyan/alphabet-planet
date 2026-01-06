"use client";

import { Button } from "../../ui/button";
import { Heading, Text } from "../../ui/typography";

type HeroCopyProps = {
  eyebrowRef: React.RefObject<HTMLParagraphElement | null>;
  headlineRefs: React.MutableRefObject<(HTMLSpanElement | null)[]>;
  subRef: React.RefObject<HTMLParagraphElement | null>;
  ctaRef: React.RefObject<HTMLDivElement | null>;
  trustRef: React.RefObject<HTMLParagraphElement | null>;
  primaryBtnRef: React.RefObject<HTMLButtonElement | null>;
  secondaryBtnRef: React.RefObject<HTMLButtonElement | null>;
};

const HeroCopy = ({
  eyebrowRef,
  headlineRefs,
  subRef,
  ctaRef,
  trustRef,
  primaryBtnRef,
  secondaryBtnRef,
}: HeroCopyProps) => {
  return (
    <div className="relative w-full max-w-[350px] text-center md:max-w-[420px] md:text-left xl:max-w-[560px]">
      <div className="pointer-events-none absolute -left-3 -top-6 h-[320px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(246,248,252,0.14),transparent_70%)] md:-left-6 md:-top-10 md:h-[420px] md:w-[420px] xl:-left-8 xl:-top-16 xl:h-[520px] xl:w-[520px]" />
      <Text ref={eyebrowRef} variant="eyebrow">
        IGNITION / PHONICS PROGRAMME / AGES 2–5
      </Text>
      <Heading as="h1" className="mt-[12px] leading-[1.05]">
        {["Alphabet Planet", "launches kids into", "joyful phonics."].map(
          (line, index) => (
            <span key={line} className="block overflow-hidden">
              <span
                ref={(el) => {
                  headlineRefs.current[index] = el;
                }}
                className="block"
              >
                {line}
              </span>
            </span>
          )
        )}
      </Heading>
      <Text ref={subRef} variant="subhead" className="mt-[18px] max-w-[46ch]">
        Stories, songs, movement, and play—built to help kids remember letter
        sounds fast.
      </Text>
      <div
        ref={ctaRef}
        className="mt-[26px] flex flex-col items-center gap-3 md:flex-row md:items-start"
      >
        <Button ref={primaryBtnRef} className="w-full md:w-auto">
          Shop the Books
        </Button>
        <Button
          ref={secondaryBtnRef}
          variant="secondary"
          className="w-full md:w-auto"
        >
          Get a Free Sample
        </Button>
      </div>
      <Text ref={trustRef} variant="trust" className="mt-[14px]">
        Created by Teacher Terry • 18+ years experience
      </Text>
    </div>
  );
};

export default HeroCopy;
