import React from "react";
import Slider from "react-slick";

function Testimonials() {
  var settings = {
    infinite: true,
    speed: 2000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <div className="px-20 py-10 bg-pink text-black">
        <Slider {...settings}>
          <div>
            <h3 className="text-xl pb-10">What Our Clients Say</h3>
            <p className="text-sm pb-10">
              &quot;ECCE was responsive, reliable, and informative. They took
              great care of our needs, provided all the information we required
              and offered useful and relevant advice. In less time than we
              expected, we were provided with a complete will package, and Kemi
              took the time with us to explain and make sure we understood all
              of the details and nuances we needed to, ensuring our will is
              thorough and accurate.&quot;
            </p>
            <p className="text-right text-xl">L.H. and D.H</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
