import React from "react";
import Link from "next/link";

const ServiceCard = ({head, title, text, link}) => {
  return (
    <div className="w-1/4 m-3 p-10 pb-20 h-[80vh] bg-[#bb0d1e2f] relative">
      <h1 className="underline text-4xl text-[#231F20] italic font-medium">
        {head}
      </h1>
      <h3 className="text-2xl pb-5 pt-10 text-[#231F20]">{title}</h3>
      <p className="py-7 text-[#231F20] text-sm">
        {text}
      </p>
      <p className="text-lg italic text-[#231F20] text-center absolute bottom-14">
        <Link href={link}>learn more</Link>
      </p>
    </div>
  );
};

export default ServiceCard;
