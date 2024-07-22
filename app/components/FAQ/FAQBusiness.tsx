"use client";
import React, { useState } from "react";

const data = [
  {
    number: 1,
    question: "How to register on Telserve?",
    answer:
      "1. Unplug the power and Ethernet cables from the modem. Some modems have backup batteries that need to be removed too. 2. Wait 2-3 minutes for the modem to fully power off. All the lights on the modem should be off. 3. Reconnect the power and Ethernet cables to the modem. 4. Wait for the Ethernet light to turn solid, then check if the internet is working properly.",
  },
  {
    number: 2,
    question: "What is dedicated Internet?",
    answer:
      "1. Unplug the power and Ethernet cables from the modem. Some modems have backup batteries that need to be removed too. 2. Wait 2-3 minutes for the modem to fully power off. All the lights on the modem should be off. 3. Reconnect the power and Ethernet cables to the modem. 4. Wait for the Ethernet light to turn solid, then check if the internet is working properly.",
  },
  {
    number: 3,
    question: "How to restart the modem?",
    answer:
      "1. Unplug the power and Ethernet cables from the modem. Some modems have backup batteries that need to be removed too. 2. Wait 2-3 minutes for the modem to fully power off. All the lights on the modem should be off. 3. Reconnect the power and Ethernet cables to the modem. 4. Wait for the Ethernet light to turn solid, then check if the internet is working properly.",
  },
  {
    number: 4,
    question: "How to pay for internet with myTelserve?",
    answer:
      "1. Unplug the power and Ethernet cables from the modem. Some modems have backup batteries that need to be removed too. 2. Wait 2-3 minutes for the modem to fully power off. All the lights on the modem should be off. 3. Reconnect the power and Ethernet cables to the modem. 4. Wait for the Ethernet light to turn solid, then check if the internet is working properly.",
  },
];

const FAQBusiness = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (i:number) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="pt-96 px-40 pb-10 text-center bg-gray text-darkred">
      <h1 className="text-5xl pt-20 font-thin mt-5">
        FREQUENTLY ASKED QUESTIONS
      </h1>
      <h3 className="text-2xl font-normal mt-5 text-left">BUSINESS</h3>
      {data.map((item, i) => (
        <div className="bg-gray mb-1 py-3 px-5 text-base " key={i}>
          <div
            className={
              selected === i
                ? "flex justify-between items-center cursor-pointer py-4 px-8  text-black bg-pink shadow-none"
                : "flex justify-between items-center cursor-pointer py-4 px-8 shadow-xl"
            }
            onClick={() => toggle(i)}
          >
            <div className="flex items-center">
              <span className="px-5 py-3 text-2xl bg-pink">{item.number}</span>
              <h2 className="px-5 text-2xl">{item.question}</h2>
            </div>
            <span className="text-5xl">{selected === i ? "-" : "+"}</span>
          </div>
          <div className={selected === i ? "px-10 py-5" : "hidden"}>
            {item.answer}
          </div>
        </div>
      ))}

      {/* FEEL FREE TO ADD MORE DATA ABOVE IN INCREASE THE AMOUNT OF QUESTIONS THAT WILL BE ANSWERED */}
    </div>
  );
};

export default FAQBusiness;
