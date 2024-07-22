"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroImage = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const textX = useTransform(scrollYProgress, [0.1, 1], ["0%", "-100%"]);
  const opacitySection = useTransform(scrollYProgress, [0.1, 1], [1, 0.5]);
  const textY = useTransform(scrollYProgress, [0.1, 1], ["0%", "100%"]);
  const opacitySectionY = useTransform(scrollYProgress, [0.1, 1], [1, 0.5]);
  return (
    <div className="text-center justify-center flex items-center pt-52 pb-32 h-screen px-20">
      <motion.div
        className="w-1/2 "
        style={{ x: textY, opacity: opacitySectionY }}
      >
        <p className="text-9xl font-semibold py-4 text-red">BEHOLD!</p>
        <p className="text-lg pb-4 text-white">AN ALLY COMMITTED TO YOUR</p>
        <p className="text-6xl text-white">SUCCESS</p>
      </motion.div>
      <motion.div
        className="w-1/2 flex justify-center pl-10"
        style={{ x: textX, opacity: opacitySection }}
      >
        <img src="./eccelogo.png" alt="ECCE" className="h-80 w-72" />
      </motion.div>
    </div>
  );
};

export default HeroImage;
