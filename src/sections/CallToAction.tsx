'use client';

import ArrowRight from '@/assets/arrow-right.svg';
import starImage from'@/assets/star.png';
import springImage from '@/assets/spring.png';
import { motion, useScroll, useTransform} from "framer-motion";
import React, { useRef } from 'react';

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
   target: sectionRef,
   offset:[ 'start end', 'end start'],

  });

const translateY= useTransform(scrollYProgress, [0,1],[150, -150]);
  return(
    <section ref={sectionRef} 
      className="bg-white py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
        <h2 className="section-title text-5xl pb-6">
          Sign up for free
        </h2>
        <p className="section-description mt-5">
         Celebrate the joy of accomplisment with our agency designed to fulfil your needs and elivate your efforts
  
        </p>
        <motion.img
        src={starImage.src}
        alt="Star Image"
        width={360}
        className="absolute -left-[350px] -top-[137px] "
        style={{
          translateY
        }}
        />
        <motion.img
        src={springImage.src}
        alt="Spring Image"
        width={360}
        className="absolute -right-[331px] -top-[19px]"
        style={{
          translateY
        }}
        />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1"> 
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5"/>
            </button>
        </div>
      </div>
    </section>
  );
};
