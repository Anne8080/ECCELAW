import Link from "next/link";
import ServiceCard from "../components/ServiceCard";
import { FormatQuoteOutlined } from "@mui/icons-material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";

const HomePage = () => {
  return (
    <div className="bg-lightgray">
      {/* navbar */}
      <Navbar />

      {/* main */}
      <main className="bg-darkgray">
        {/* replace with image */}
          <div className="text-center justify-center flex items-center pt-52 pb-32 h-screen px-20">
            <div className="w-1/2 pl-10">
              <p className="text-9xl font-semibold py-4 pt-14 text-red">
                BEHOLD!
              </p>
              <p className="text-lg pb-4 text-white">AN ALLY COMMITTED TO YOUR</p>
              <p className="text-6xl text-white">SUCCESS</p>
            </div>
            <div className="w-1/2 flex justify-center">
              <img src="./eccelogo.png" alt="ECCE" className="h-80 w-72" />
            </div>
        </div>
        
      </main>

      
{/* about section */}
      <section className="px-32 py-20 ">
        <div className=" bg-darkred rounded-xl text-center py-5 px-10 ">
          <h3 className="text-white text-2xl py-2">
            WE ARE PASSIONATE ABOUT HELPING CLIENTS
          </h3>
          <p className="text-white">
            Ecce law stands for commitment to professionalism and quality
            service. We aim to simplify the complexities of law for you,
            providing you with high quality legal services. By focusing on our
            strengths in specific areas of law, we are able to deliver excellent
            work, making us a dependable firm dedicated to your success.&nbsp;
            <Link
              href="/about"
              className="text-[#ff939e] underline text-center"
            >
              See more...
            </Link>
          </p>
        </div>
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
          <div className="h-[110vh] bg-darkred p-10 absolute bottom-20 right-5 w-[35vw]">
            {/* insert image */}
            <img src="" alt="image goes here" className="h-full" />
          </div>
        </div>
      </section>

      {/* testimonials carousel */}

      {/* contact us */}
      <section className="px-32">
        <ContactCard />
      </section>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
