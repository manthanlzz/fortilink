"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";
import backgroundImage from "@/assets/background.png";


type HeroProps = {
  onHeroOutOfView?: () => void;
};

export const Hero = ({ onHeroOutOfView }: HeroProps) => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"], // only trigger when hero ends
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 1 && onHeroOutOfView) {
      onHeroOutOfView();
    }
  });

  return (
 <section
  ref={heroRef}
  className="w-full pt-[140px] pb-[300px] md:pt-[140px] md:pb-[350px] shadow-xl overflow-hidden overflow-x-clip"
  style={{
    background: "linear-gradient(to bottom, #000000 0%, #0B001E 10%, #4C23C3 30%, white 50%, white 100%)",
  }}
>

      <div className="max-w-screen-xl mx-auto w-full px-4 md:px-8">
        <div className="md:flex items-center">
          <div className="md:w-full">
           
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 w-full">
  <h1 className="text-4xl md:text-3xl lg:text-3xl font-medium tracking-tighter lg:w-[500px] sm:w-[300px]  text-white mt-6">
    Fortilink is an agency that powers creativity
  </h1>

  <h2 className="text-white/50 text-base md:text-lg mt-2 lg:mt-6 lg:ml-auto lg:text-right  w-[350px]">
    We know how to make any product effective and beautiful
  </h2>
</div>



            <p className="text-4xl text-black tracking-tight mt-6 sm:mt-[400px] lg:mt-[400px] lg:w-[750px]">
              Fortilink delivers professional social media marketing through <span className="text-black/50">flexible monthly subscriptions. Trusted by clients for measurable growth and consistent results—“Effective and dependable,” says one.</span>
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-text gap-1">
                <span>Learn More</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
          
            
          </div>
        </div>
      </div>
    </section>
  );
};
