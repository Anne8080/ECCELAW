import React from "react";
import FAQBusiness from "../../components/FAQ/FAQBusiness";
import QuestionsHero from "../../components/QuestionsHero";
import Navbar from "../../components/quicklinks/Navbar";
import Footer from "../../components/quicklinks/Footer";
import CMContact from "../../components/CMContact";
import Testimonials from "../../components/Testimonials";

const FAQBusinessPage = () => {
  return (
    <div className="bg-lightgray">
      {/* navbar */}
      <Navbar />

      {/* header */}
      <QuestionsHero />

      {/* faq */}
      <FAQBusiness />

      {/* contact */}
      <CMContact />

      {/* testimonial */}
      <Testimonials />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default FAQBusinessPage;
