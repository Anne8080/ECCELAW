import React from "react";
import FAQBusiness from "../components/FAQBusiness";
import QuestionsHero from "../components/QuestionsHero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CMContact from "../components/CMContact";
import Testimonials from "../components/Testimonials";

const FAQBusinessPage = () => {
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

      {/* testimonial */}
      {/* <Testimonials/> */}

      {/* footer */}
      <Footer />
    </div>
  );
};

export default FAQBusinessPage;
