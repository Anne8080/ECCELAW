"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Owner = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const textX = useTransform(scrollYProgress, [0.1, 1], ["10%", "-10%"]);
  return (
    <motion.div className="h-[110vh] bg-darkred p-10 absolute bottom-20 right-5 w-[35vw]" style={{ x: textX}}>
      {/* insert image */}
      <img src="" alt="image goes here" className="h-full" />
    </motion.div>
  );
};

export default Owner;
