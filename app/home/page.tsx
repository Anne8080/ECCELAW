import React from "react";
import Link from "next/link";
import ServiceCard from "../components/ServiceCard";

const HomePage = () => {
  return (
    <div>
      <header className="px-32">
        <div className="bg-[#a30d1f5d] bg-fixed h-screen relative">
          <div className="text-center flex items-center flex-col py-5">
            <img src="./vertical.png" alt="ECCE" className="h-50 w-40" />
            <p className="text-8xl font-semibold py-4 text-[#A30D1F]">
              BEHOLD!
            </p>
            <p className="text-5xl">AN ALLY</p>
            <p className="text-xl py-4">COMMITTED TO YOUR</p>
            <p className="text-6xl">SUCCESS</p>
          </div>
          <div className="absolute bg-[#bb0d1e] bottom-[-15%] rounded-b-xl text-center py-5 px-10">
            <h3 className="text-[#FFEBEE] text-2xl py-2">
              WE ARE PASSIONATE ABOUT HELPING CLIENTS
            </h3>
            <p className="text-[#FFEBEE]">
              Ecce law stands for commitment to professionalism and quality
              service. We aim to simplify the complexities of law for you,
              providing you with high quality legal services. By focusing on our
              strengths in specific areas of law, we are able to deliver
              excellent work, making us a dependable firm dedicated to your
              success.{" "}
              <Link href="/about" className="text-[#ff939e] underline text-center">
                See more...
              </Link>{" "}
            </p>
          </div>
        </div>
      </header>
      {/* services section */}
      <section className="py-40 px-10 text-center">
        <h1 className="text-5xl text-[#A30D1F] py-10">SERVICES</h1>
        <div className="flex justify-center items-center">
          <ServiceCard
            head="01."
            title="BUSINESS"
            text="We provide comprehensive support for business incorporation and reorganization, ensuring that your business is set up for success from the start. Our team assists with entity selection, structuring, and compliance to facilitate smooth and efficient operations."
            link=""
          />
          <ServiceCard
            head="02."
            title="REAL ESTATE"
            text="Our commercial real estate services cover all aspects of commercial property transactions, including acquisitions, dispositions, leasing, and financing. We provide expert legal advice to ensure your commercial real estate deals are successful."
            link=""
          />
          <ServiceCard
            head="03."
            title="ESTATES"
            text="We help clients draft and update wills to ensure that their final wishes are clearly expressed and legally binding. Our services include estate planning and ensure smooth asset distribution."
            link=""
          />
          <ServiceCard
            head="04."
            title="AI GOVERNANCE"
            text="As pioneers in the evolving field of AI governance, we provide cutting-edge legal insights and strategies to help organizations harness the power of artificial intelligence responsibly."
            link=""
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
