import Link from "next/link";
import ServiceCard from "../components/services/ServiceCard";
import { FormatQuoteOutlined } from "@mui/icons-material";
import Navbar from "../components/quicklinks/Navbar";
import Footer from "../components/quicklinks/Footer";
import ContactCard from "../components/ContactCard";
import Testimonials from "../components/Testimonials";
import HeroImage from "../components/animation/home/HeroImage";
import About from "../components/animation/home/About";
import Owner from "../components/animation/home/Owner";


const HomePage = () => {
  
  return (
    <div className="bg-lightgray">
      {/* navbar */}
      <Navbar />

      {/* main */}
      <main className="bg-darkgray">
        {/* replace with image */}
        <div >
          
          <HeroImage/>
        </div>
      </main>

      {/* about section */}
      <section className="px-32 py-20 ">
        <About/>
      </section>
      {/* services section */}
      <section className="py-40 pt-10 px-10 text-center" id="services">
        <h1 className="text-5xl text-darkred py-2">SERVICES</h1>
        <ServiceCard />
      </section>

      {/* owner section */}
      <section className="px-32">
        {/* replace with image */}
        <div className="bg-[#a30d1f5d] bg-fixed h-screen relative flex justify-start items-center">
          <div className="w-1/2 p-10 pl-20 text-center ">
            <h1 className="text-red ">
              <FormatQuoteOutlined className="text-8xl" />
            </h1>
            <p className="italic text-black text-xl">
              Dealing with the loss of a loved one is often emotional and
              challenging and we strive to provide a professional, practical,
              and compassionate approach when assisting clients who are
              navigating this difficult time.
            </p>
            <p className="text-black text-xl pb-16 pt-7">- KEMI TOSIN</p>
            <Link href="/about">
              <button className="py-2 px-10 border-2 border-darkred bg-white bg-fixed text-lightred hover:bg-darkred hover:text-white">
                MEET KEMI
              </button>
            </Link>
          </div>
          <Owner/>
        </div>
      </section>

      {/* contact us */}
      <section className="px-32">
        <ContactCard />
      </section>

      {/* testimonials carousel */}
      <Testimonials />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
