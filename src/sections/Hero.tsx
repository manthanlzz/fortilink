"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ArrowIcon from "@/assets/arrow-right.svg";

type HeroProps = {
  onHeroOutOfView?: () => void;
};

export const Hero = ({ onHeroOutOfView }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

    tl.from(h1Ref.current, { y: 50, opacity: 0 })
      .from(h2Ref.current, { y: 50, opacity: 0 }, "-=0.7")
      .from(pRef.current, { y: 50, opacity: 0 }, "-=0.6")
      .from(buttonRef.current, { y: 30, opacity: 0 }, "-=0.5");
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full pt-[140px] pb-[300px] md:pt-[140px] md:pb-[350px] shadow-xl overflow-hidden overflow-x-clip"
      style={{
        background:
          "linear-gradient(to bottom, #000000 0%, #0B001E 10%, #4C23C3 30%, white 50%, white 100%)",
      }}
    >
      <div className="max-w-screen-xl mx-auto w-full px-4 md:px-8">
        <div className="md:flex items-center">
          <div className="md:w-full">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 w-full">
              <h1
                ref={h1Ref}
                className="text-4xl md:text-3xl lg:text-3xl font-medium tracking-tighter lg:w-[500px] sm:w-[300px] text-white mt-6"
              >
                Fortilink is an agency that powers creativity
              </h1>

              <div className="flex justify-end w-full pt-6">
                <h2
                  ref={h2Ref}
                  className="text-white/50 text-base md:text-lg text-right w-[200px] sm:w-[250px] md:w-full lg:w-[350px] lg:ml-auto"
                >
                  We know how to make any product effective and beautiful
                </h2>
              </div>
            </div>

            <p
              ref={pRef}
              className="text-4xl text-black tracking-tight mt-6 sm:mt-[400px] lg:mt-[400px] lg:w-[750px]"
            >
              Fortilink delivers professional social media marketing through{" "}
              <span className="text-black/50">
                flexible monthly subscriptions. Trusted by clients for measurable growth and
                consistent results—“Effective and dependable,” says one.
              </span>
            </p>

            <div ref={buttonRef} className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-text gap-1">
                <span>Learn More</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            {/* Add image or visual here if needed */}
          </div>
        </div>
      </div>
    </section>
  );
};
