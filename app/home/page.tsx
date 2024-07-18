import Link from "next/link";
import ServiceCard from "../components/ServiceCard";
import { FormatQuoteOutlined } from "@mui/icons-material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar/>

      {/* header */}
      <header className="px-32 pt-28 ">
        <div className="bg-[#a30d1f5d] bg-fixed h-screen relative">
          <div className="text-center flex items-center flex-col pt-10 py-5">
            <Image src="./eccelogo.png" alt="ECCE" className="h-28 w-24" />
            <p className="text-8xl font-semibold py-4 text-[#A30D1F]">
              BEHOLD!
            </p>
            <p className="text-lg pb-4">AN ALLY COMMITTED TO YOUR</p>
            <p className="text-6xl">SUCCESS</p>
          </div>
          <div className="absolute bg-[#bb0d1e] bottom-[-15%] rounded-xl text-center py-5 px-10 w-3/4 left-36">
            <h3 className="text-[#FFEBEE] text-2xl py-2">
              WE ARE PASSIONATE ABOUT HELPING CLIENTS
            </h3>
            <p className="text-[#FFEBEE]">
              Ecce law stands for commitment to professionalism and quality
              service. We aim to simplify the complexities of law for you,
              providing you with high quality legal services. By focusing on our
              strengths in specific areas of law, we are able to deliver
              excellent work, making us a dependable firm dedicated to your
              success.
              <Link
                href="/about"
                className="text-[#ff939e] underline text-center"
              >
                See more...
              </Link>
            </p>
          </div>
        </div>
      </header>

      {/* services section */}
      <section className="py-40 pt-52 px-10 text-center" id="services">
        <h1 className="text-5xl text-[#A30D1F] py-2" >SERVICES</h1>
        <ServiceCard />
      </section>

      {/* owner section */}
      <section className="px-32">
        <div className="bg-[#a30d1f5d] bg-fixed h-screen relative flex justify-end items-center">
          <div className="h-[110vh] bg-[#800D1F] p-10 absolute bottom-20 left-5 w-[35vw]">
            <Image src="" alt="Image goes here" className="h-full" />
          </div>
          <div className="w-1/2 p-10 pr-20 text-center ">
            <h1 className="text-[#A30D1F] ">
              <FormatQuoteOutlined className="text-9xl" />
            </h1>
            <p className="italic text-[#231F20] text-xl">
              Dealing with the loss of a loved one is often emotional and
              challenging and we strive to provide a professional, practical,
              and compassionate approach when assisting clients who are
              navigating this difficult time.
            </p>
            <p className="text-[#231F20] text-xl pb-16 pt-7">
              - KRISTA EVANISKY
            </p>
            <Link href="/about">
              <button className="py-2 px-10 border-2 border-[#800D1F] bg-[#FFEBEE] bg-fixed text-[#BB0D1F]">
                MEET KRISTA
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* contact us */}
      <section className="px-32">
        <div className="text-center py-32 px-52 items-center flex flex-col">
          <Link href="">
            <Image src="./eccelogo.png" alt="Logo" className="h-50 w-40" />
          </Link>
          <Link href="">
            <h1 className="text-[#800D1F] text-5xl pt-14 px-14">
              I JUST NEED A SIMPLE WILL
            </h1>
          </Link>
          <p className=" py-5 text-xl">
            I'LL ASSESS YOUR SITUATION AND GIVE PROPER ADVICE SO YOU CAN LEAVE A
            CLEAR AND STRAIGHTFORWARD WILL FOR YOUR LOVED ONES.
          </p>
          <Link href="/contact">
            <button className="py-2 px-10 border-2 border-[#800D1F] bg-[#800D1F] bg-fixed text-[#FFEBEE]">
              CONTACT US TO LEARN MORE
            </button>
          </Link>
        </div>
      </section>
      {/* testimonials carousel */}
      {/* footer */}
      <Footer/>
    </div>
  );
};

export default HomePage;
