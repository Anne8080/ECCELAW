import React from "react";
import Navbar from "../components/Navbar";
import QuestionsHero from "../components/QuestionsHero";
import CMContact from "../components/CMContact";
import Footer from "../components/Footer";
import FAQAI from "../components/FAQAI";

const FAQAIPage = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />

      {/* header */}
      <QuestionsHero />

      {/* faq */}
      <FAQAI />

      {/* contact */}
      <CMContact />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default FAQAIPage;
