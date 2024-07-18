import React from "react";
import Link from "next/link";

const ContactCard = () => {
  return (
    <div className="text-center py-32 px-52 items-center flex flex-col">
      <Link href="">
        <img src="./eccelogo.png" alt="Logo" className="h-28 w-24" />
      </Link>
      <Link href="">
        <h1 className="text-[#800D1F] text-5xl pt-14 px-14">
          I JUST NEED A SIMPLE WILL
        </h1>
      </Link>
      <p className=" py-5 text-xl">
        I WILL ASSESS YOUR SITUATION AND GIVE PROPER ADVICE SO YOU CAN LEAVE A
        CLEAR AND STRAIGHTFORWARD WILL FOR YOUR LOVED ONES.
      </p>
      <Link href="/contact">
        <button className="py-2 px-10 border-2 border-[#800D1F] bg-[#800D1F] bg-fixed text-[#FFEBEE]">
          CONTACT US TO LEARN MORE
        </button>
      </Link>
    </div>
  );
};

export default ContactCard;
