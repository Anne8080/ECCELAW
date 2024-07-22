"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className=" bg-darkred rounded-xl text-center py-5 px-10 "
      initial={{ y: "100%" }}
      whileInView={{ y: "0" }}
    >
      <h3 className="text-white text-2xl py-2">
        WE ARE PASSIONATE ABOUT HELPING CLIENTS
      </h3>
      <p className="text-white">
        Ecce law stands for commitment to professionalism and quality service.
        We aim to simplify the complexities of law for you, providing you with
        high quality legal services. By focusing on our strengths in specific
        areas of law, we are able to deliver excellent work, making us a
        dependable firm dedicated to your success.&nbsp;
        <Link href="/about" className="text-[#ff939e] underline text-center">
          See more...
        </Link>
      </p>
    </motion.div>
  );
};

export default About;
