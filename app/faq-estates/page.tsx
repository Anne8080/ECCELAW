import React from "react";
import Navbar from "../components/Navbar";
import QuestionsHero from "../components/QuestionsHero";
import CMContact from "../components/CMContact";
import Footer from "../components/Footer";
import FAQEstate from "../components/FAQEstate";

const FAQEstatesPage = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />

      {/* header */}
      <QuestionsHero />

      {/* faq */}
      <FAQEstate />

      {/* contact */}
      <CMContact />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default FAQEstatesPage;
