import Link from "next/link";
import React from "react";

const CMContact = () => {
  return (
    <div>
      <section className="px-32">
        <div className="text-center py-32 px-52 items-center flex flex-col">
          <Link href="">
            <img src="./eccelogo.png" alt="Logo" className="h-28 w-24" />
          </Link>
          <Link href="">
            <h1 className="text-darkred text-5xl pt-14 px-0">
              MORE QUESTIONS?
            </h1>
          </Link>
          <Link href="/contact">
            <p className=" py-5 px-16 text-xl">CONTACT US NOW</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CMContact;
