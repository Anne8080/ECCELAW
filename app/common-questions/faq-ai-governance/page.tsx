import React from "react";
import Navbar from "../../components/quicklinks/Navbar";
import QuestionsHero from "../../components/QuestionsHero";
import CMContact from "../../components/CMContact";
import Footer from "../../components/quicklinks/Footer";
import FAQAI from "../../components/FAQ/FAQAI";
import Testimonials from "../../components/Testimonials";

const FAQAIPage = () => {
  return (
    <div className="bg-lightgray">
      {/* navbar */}
      <Navbar />

      {/* header */}
      <QuestionsHero />

      {/* faq */}
      <FAQAI />

      {/* contact */}
      <CMContact />

      {/* testimonial */}
      <Testimonials />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default FAQAIPage;
