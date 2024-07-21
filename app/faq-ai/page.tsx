import React from "react";
import Navbar from "../components/Navbar";
import QuestionsHero from "../components/QuestionsHero";
import FAQBusiness from "../components/FAQBusiness";
import CMContact from "../components/CMContact";
import Footer from "../components/Footer";

const FAQAIPage = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />

      {/* header */}
      <QuestionsHero />

      {/* faq */}
      <FAQBusiness />

      {/* contact */}
      <CMContact />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default FAQAIPage;
