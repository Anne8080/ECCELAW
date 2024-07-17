"use client"
import React, { useState } from "react";
import Link from "next/link";

const ServiceCard = () => {
  const [servicecards, setServiceCards] = useState([
    {
      id: 1,
      headtitle: "01.",
      title: "BUSINESS",
      text: "We provide comprehensive support for business incorporation and reorganization, ensuring that your business is set up for success from the start. Our team assists with entity selection, structuring, and compliance to facilitate smooth and efficient operations.",
      link: "",
    },
    {
      id: 2,
      headtitle: "02.",
      title: "REAL ESTATE",
      text: "Our commercial real estate services cover all aspects of commercial property transactions, including acquisitions, dispositions, leasing, and financing. We provide expert legal advice to ensure your commercial real estate deals are successful.",
      link: "",
    },
    {
      id: 3,
      headtitle: "03.",
      title: "ESTATES",
      text: "We help clients draft and update wills to ensure that their final wishes are clearly expressed and legally binding. Our services include estate planning and ensure smooth asset distribution.",
      link: "",
    },
    {
      id: 4,
      headtitle: "04.",
      title: "AI GOVERNANCE",
      text: "As pioneers in the evolving field of AI governance, we provide cutting-edge legal insights and strategies to help organizations harness the power of artificial intelligence responsibly.",
      link: "",
    },
  ]);

  return (
    <div className="flex justify-center items-center py-10">
      {servicecards.map((servicecard) => (
      <div className="w-1/4 m-3 p-10 pb-20 h-[85vh] bg-[#bb0d1e2f] relative" key={servicecard.id}>
        <h1 className="underline text-4xl text-[#231F20] italic font-medium">
          {servicecard.headtitle}
        </h1>
        <h3 className="text-2xl pb-5 pt-10 text-[#231F20]">{servicecard.title}</h3>
        <p className="py-7 text-[#231F20] text-sm">
          {servicecard.text}
        </p>
        <p className="text-lg italic text-[#231F20] text-center absolute bottom-20">
          <Link href={servicecard.link}>learn more</Link>
        </p>
      </div>
      
      ) )}
    </div>
  );
};

export default ServiceCard;
