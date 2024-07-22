import React from "react";
import Navbar from "../../components/quicklinks/Navbar";
import Footer from "../../components/quicklinks/Footer";
import Link from "next/link";
import ServiceImage from "../../components/services/ServiceImage";
import Testimonials from "../../components/Testimonials";

const BusinessPage = () => {
  return (
    <div className="bg-lightgray">
      {/* navbar */}
      <Navbar />

      {/* header */}
      <header className="px-20 pt-28 ">
        <div className="bg-pink relative py-20 px-36">
          <div className="flex items-center justify-between">
            <div className="w-1/2">
              <h1 className="text-5xl pb-10">BUSINESS</h1>
              <p className="text-sm text-justify">
                We provide comprehensive support for business incorporation and
                reorganization, ensuring that your business is set up for
                success from the start. Our team assists with entity selection,
                structuring, and compliance to facilitate smooth and efficient
                operations.
              </p>
            </div>
            <div className="px-40">
              <img src="/logolaw.png" alt="Logo" className="h-40 w-24" />
            </div>
          </div>
          <div className="bg-darkred px-20 pt-28 pb-10 w-[45vw] absolute top-[90%] right-32 text-white">
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
      <div className="pt-60">
        <ServiceImage />
      </div>

      {/* contact section */}
      <section className="px-32">
        <div className="text-center py-32 px-52 items-center flex flex-col">
          <Link href="">
            <img src="/eccelogo.png" alt="Logo" className="h-28 w-24" />
          </Link>
          <Link href="">
            <h1 className="text-darkred text-5xl pt-14 px-14">
              IF YOU&apos;RE WAITING FOR THE RIGHT TIME
            </h1>
          </Link>
          <p className=" py-5 px-32 text-xl">
            IT MAY NOT COME, BUT WE MAKE IT AS EASY AND PAINLESS AS POSSIBLE
          </p>
          <ul className="flex justify-between items-center py-10 px-20 w-full">
            <Link href="/home#services" className="mr-2 w-1/2">
              <li className=" py-2 border-2 border-darkred bg-darkred bg-fixed text-white hover:bg-transparent hover:text-darkred">
                Common Questions
              </li>
            </Link>
            <Link href="/contact" className="ml-2 w-1/2">
              <li className="py-2 px-10 border-2 border-darkred bg-transparent bg-fixed text-darkred hover:bg-darkred  hover:text-white">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
      </section>

      {/* testimonial */}
      <Testimonials />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default BusinessPage;
