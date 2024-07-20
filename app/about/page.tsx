import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";
import ContactCard from "../components/ContactCard";

const AboutPage = () => {
  return (
    <div className="bg-lightgray">
      {/* navbar */}
      <Navbar />

      {/* header */}
      <header className="px-20 pt-28 ">
        {/* replace with image */}
        <div className="bg-[#a30d1f5d] bg-fixed h-[185vh] relative">
          <div className="text-center flex items-center flex-col pt-10 py-5 bg-darkred">
            <img src="./vertical.png" alt="ECCE" className="h-52 w-44 mb-10" />
            <p className="text-sm py-7 px-60 text-white">
              Our professional, practical, and caring approach to interacting
              with clients is what sets us apart. We know that most people
              don&apos;t deal with legal matters every day, but we do. We also
              know that being satisfied with legal services results from being
              heard and understood. We work both with you and for you, to
              complete your matter in an efficient and appropriate fashion.
              Because we focus on specific areas of the law, we provide clients
              with high-quality work.
            </p>
          </div>
          <div className="bg-darkred text-center text-white pt-28 pb-40 px-20 w-[50vw] absolute right-8 bottom-[-15vh]">
            <p className="text-2xl">WE ARE</p>
            <h1 className="text-5xl font-bold py-2">PASSIONATE</h1>
            <p className="text-2xl">ABOUT HELPING CLIENTS</p>
            <p className="pt-10 pb-20 text-sm text-left">
              ECCE LAW is known for its client-centric approach and unwavering
              commitment to professionalism. We pride ourselves on delivering
              excellent and <b>satisfactory legal service</b>. We are dedicated
              to providing <b>timely and transparent services</b>, ensuring that
              clients are always well-informed and confident throughout their
              legal journey. We understand that every client and case is unique,
              which is why we approach each situation with <b>empathy</b>,
              taking the time to listen and tailor our solutions to meet
              individual needs. At ECCE LAW, innovation is at the heart of our
              practice. We leverage the latest legal technologies and
              methodologies to deliver <b>innovative</b> solutions that set us
              apart from others. Our focus on <b>excellent work</b> and
              <b>expertise</b> ensures that we consistently achieve the best
              possible outcomes for our clients.
            </p>
            <ul className="flex justify-between items-center">
              <li className="">
                <Link
                  href="/home#services"
                  className="py-3 px-16 border-2 border-white bg-white bg-fixed text-lightred hover:bg-transparent hover:text-white"
                >
                  Our Services
                </Link>
              </li>
              <li className="">
                <Link
                  href="/contact"
                  className="py-3 px-16 border-2 border-white bg-transparent bg-fixed text-white hover:bg-white  hover:text-lightred"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <section className="px-20 pt-40 pb-56 ">
        <div className="flex justify-center items-end">
          <div className="">
            {/* insert image */}
            <img src="" alt="image goes here" className="" />
          </div>
          <div className="w-1/2 p-20 text-left">
            <p className="italic text-xl">KEMI TOSIN</p>
            <p className="pt-3 text-sm">TEP | Founder | Lawyer</p>
            <p className="pt-5 text-sm">
              Krista Evanisky is the founder of Clarity Law. She is a member of
              the Society of Trust and Estate Practitioners (STEP) and holds her
              Trust and Estate Practitioner (TEP) designation. She loves getting
              to know her clients so that she can provide just the right advice
              for their specific needs. Krista has sat on the board of directors
              for several non-profit organizations including the Saskatoon
              Estate Planning Council, Regina Estate Planning Council, and
              Family Service Regina. When Krista is not practicing law, she
              loves spending time with her two small boys, husband, and dog. She
              is a frequent baker and loves to spend most of her time outside in
              the summer.
            </p>
          </div>
        </div>
      </section>
      <section className="px-20 ">
        {/* replace with image */}
        <div className="bg-[#a30d1f5d] bg-fixed h-screen relative">
          <div className="bg-darkred px-20 pt-28 pb-10 w-[50vw] absolute top-[-20vh] right-7 text-white">
            <h1 className="italic text-xl">Services</h1>
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
                  className="py-2 px-14 border-2 border-white bg-white bg-fixed text-lightred hover:bg-transparent hover:text-white"
                >
                  Common Questions
                </Link>
              </li>
              <li className="">
                <Link
                  href="/home#services"
                  className="py-2 px-14 border-2 border-white bg-transparent bg-fixed text-white hover:bg-white  hover:text-lightred"
                >
                  Learn More
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="px-20">
        <ContactCard />
      </section>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
