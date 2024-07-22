'use client'
import Link from "next/link";
import React, { useState } from "react";

const ServiceNav = () => {
  const [displayBlock, setDisplayBlock] = useState(false);
  return (
    <li className="px-3 text-lg relative">
      <p
        className="hover:text-linkhover cursor-pointer"
        onMouseEnter={() => setDisplayBlock(true)}
        
      >
        Services
      </p>
      {displayBlock && (
        <ul className="absolute top-16 right-0 w-52 bg-darkgray py-2 px-10 block" onMouseLeave={() => setDisplayBlock(false)}>
          <li className="py-1 text-base hover:text-linkhover">
            <Link href="/services/business">Business</Link>
          </li>
          <li className="py-1 text-base hover:text-linkhover">
            <Link href="/services/real-estate">Real Estate</Link>
          </li>
          <li className="py-1 text-base hover:text-linkhover">
            <Link href="/services/estates">Estates</Link>
          </li>
          <li className="py-1 text-base hover:text-linkhover">
            <Link href="/services/ai-governance">AI Governance</Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default ServiceNav;
