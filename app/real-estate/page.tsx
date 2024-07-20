import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceContactCard from "../components/ServiceContactCard";
import Link from "next/link";
import ServiceImage from "../components/ServiceImage";

const RealEstatePage = () => {
  return (
    <div className="bg-lightgray">
      {/* navbar */}
      <Navbar />

      {/* header */}
      <header className="px-20 pt-28 ">
        <div className="bg-pink py-20 pb-5 px-36 flex flex-col items-end">
          <div className="flex items-center justify-between ">
            <div className="w-1/2">
              <h1 className="text-5xl pb-10">REAL ESTATE</h1>
              <p className="text-sm text-justify">
                We provide comprehensive support for business incorporation and
                reorganization, ensuring that your business is set up for
                success from the start. Our team assists with entity selection,
                structuring, and compliance to facilitate smooth and efficient
                operations.
              </p>
            </div>
            <div className="px-40">
            <img src="./logolaw.png" alt="Logo" className="h-40 w-24" />
            </div>
          </div>
          <div className="bg-darkred px-20 pt-16 pb-10 mr-0 w-[45vw] text-white">
            <h1 className="text-2xl py-5">ESTATE PLANNING</h1>
            <p className="text-sm pt-5">
              We help clients draft and update wills to ensure that their final
              wishes are clearly expressed and legally binding. Our services
              include estate planning and ensure smooth asset distribution.
            </p>
            <ul className="flex justify-between items-center py-20">
              <li className="">
                <Link
                  href="/home#services"
                  className="py-2 px-10 border-2 border-white bg-white bg-fixed text-lightred hover:bg-transparent hover:text-white"
                >
                  Common Questions
                </Link>
              </li>
              <li className="">
                <Link
                  href="/home#services"
                  className="py-2 px-10 border-2 border-white bg-transparent bg-fixed text-white hover:bg-white  hover:text-lightred"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* image section */}
      <ServiceImage/>

      {/* contact section */}
      <ServiceContactCard />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default RealEstatePage;
