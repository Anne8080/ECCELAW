import React from "react";
import Navbar from "../../components/quicklinks/Navbar";
import QuestionsHero from "../../components/QuestionsHero";
import CMContact from "../../components/CMContact";
import Footer from "../../components/quicklinks/Footer";
import FAQEstate from "../../components/FAQ/FAQEstate";
import Testimonials from "../../components/Testimonials";

const FAQEstatesPage = () => {
  return (
    <div className="bg-lightgray">
      {/* navbar */}
      <Navbar />

      {/* header */}
      <QuestionsHero />

      {/* faq */}
      <FAQEstate />

      {/* contact */}
      <CMContact />

      {/* testimonial */}
      <Testimonials />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default FAQEstatesPage;
