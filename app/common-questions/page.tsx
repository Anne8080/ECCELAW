import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QuestionsHero from "../components/QuestionsHero";

const QuestionsPage = () => {
  return (
    <div className="bg-lightgray">
      {/* navbar */}
      <Navbar />
      {/* header */}
      <QuestionsHero/>

      <section className="pt-96 px-20 pb-10 text-center">
        <h1 className="text-5xl pt-20 pb-5 px-72">
          LEARN MORE ABOUT OUR SERVICES
        </h1>

      </section>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default QuestionsPage;
