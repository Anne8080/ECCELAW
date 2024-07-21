"use client";
import Link from "next/link";
import React, { useState } from "react";

const QuestionNav = () => {
  const [displayBlock, setDisplayBlock] = useState(false);
  return (
    <li className="px-3 text-lg relative">
      <Link
        href="common-questions"
        className="hover:text-linkhover cursor-pointer"
        onMouseEnter={() => setDisplayBlock(true)}
      >
        Common Questions
      </Link>
      {displayBlock && (
        <ul
          className="absolute top-16 right-0 w-60 bg-darkgray py-2 px-10 block"
          onMouseLeave={() => setDisplayBlock(false)}
        >
          <li className="py-1 text-base hover:text-linkhover">
            <Link href="/faq-business">FAQ - Business</Link>
          </li>
          <li className="py-1 text-base hover:text-linkhover">
            <Link href="/faq-estates">FAQ - Estates</Link>
          </li>
          <li className="py-1 text-base hover:text-linkhover">
            <Link href="/faq-ai-governance">FAQ - AI Governance</Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default QuestionNav;
