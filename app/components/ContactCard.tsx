import React from "react";
import Link from "next/link";

const ContactCard = () => {
  return (
    <div className="text-center py-32 px-52 items-center flex flex-col">
      <Link href="">
        <img src="./eccelogo.png" alt="Logo" className="h-28 w-24" />
      </Link>
      <Link href="">
        <h1 className="text-darkred text-5xl pt-14 px-14">
          SUBSCRIBE HEADING
        </h1>
      </Link>
      <p className=" py-5 text-xl">
        I WILL ASSESS YOUR SITUATION AND GIVE PROPER ADVICE SO YOU CAN LEAVE A
        CLEAR AND STRAIGHTFORWARD WILL FOR YOUR LOVED ONES.
      </p>
      <Link href="/contact">
        <button className="py-2 px-20 border-2 border-darkred bg-darkred bg-fixed text-white hover:text-darkred hover:bg-transparent">
          SEND US AN EMAIL
        </button>
      </Link>
    </div>
  );
};

export default ContactCard;
