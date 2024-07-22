import React from "react";
import Footer from "../../components/quicklinks/Footer";
import Navbar from "../../components/quicklinks/Navbar";
import Link from "next/link";
import Testimonials from "../../components/Testimonials";

const AiPage = () => {
  return (
    <div className="bg-lightgray">
      {/* navbar */}
      <Navbar />

      {/* header */}
      <header className="px-20 pt-28 ">
        {/* replace with image */}
        <main className="bg-[url('/missing-piece.png')] bg-cover bg-center bg-no-repeat h-[135vh] bg-fixed">
        <div className="bg-pink py-20 px-36 ">
          <div className="flex items-center justify-between ">
            <div className="w-1/2">
              <h1 className="text-5xl pb-10">AI GOVERNANCE</h1>
              <p className="text-sm text-justify">
                As pioneers in the evolving field of AI governance, we provide
                cutting-edge legal insights and strategies to help organizations
                harness the power of artificial intelligence responsibly. Our
                services include advising on regulatory compliance, ethical
                considerations, and risk management related to AI technologies.
                We help businesses navigate the complexities of AI governance to
                ensure that their AI initiatives are legally sound and ethically
                aligned.
              </p>
            </div>
            <div className="px-40">
              <img src="/logolaw.png" alt="Logo" className="h-40 w-24" />
            </div>
          </div>
        </div>
        </main>
      </header>

      {/* contact section */}
      <section className="px-32">
        <div className="text-center py-32 px-52 items-center flex flex-col">
          <Link href="">
            <img src="/eccelogo.png" alt="Logo" className="h-28 w-24" />
          </Link>
          <Link href="">
            <h1 className="text-darkred text-5xl pt-14 px-14">
              BUYING AND SELLING
            </h1>
          </Link>
          <p className=" py-5 px-32 text-xl">
            WE ARE HERE TO HELP
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
      <Testimonials/>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default AiPage;
