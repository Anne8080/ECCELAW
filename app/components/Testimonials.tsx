// carousels/Responsive.tsx
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

interface TestimonialItem {
  id: number;
  title: string;
  text: string;
  name: string;
}

const items: TestimonialItem[] = [
  {
    id: 3,
    title: "What Our Clients Say",
    text: "“Thank you so much for your service that we received. Indeed, it was excellent all the way. We will for sure contact you again for any legal work needed.”",
    name: "Sally & Jake",
  },
  {
    id: 2,
    title: "What Our Clients Say",
    text: "“ We had the pleasure of working with Atty Kemi for our business franchise purchase, and we couldn’t be happier with the experience. She was incredibly thorough and approachable, ensuring we understood every step of the process. Her explanations were clear, and she was always accommodating to our needs. What stood out most was her responsiveness; she always replied promptly to our inquiries. We highly recommend Atty Kemi to anyone seeking legal assistance with franchise purchases and Real estate transactions. She truly exceeded our expectations.”",
    name: "Napoleon Ebonite",
  },
  {
    id: 1,
    title: "What Our Clients Say",
    text: "“ You can tell how successful a project will be by the quality of its foundation. This heralds ECCE Law at its infancy. From our initial booking, to meeting the Principal one-on-one where she tutored us meticulously about the various legal documents we would be signing, until the beautiful morning our realtor presented our home key to us as scheduled, ECCE law gave us timely correspondences with clear and detailed instructions. It was over-and-beyond personalized services that helped us complete our mortgage transaction within a really short timeframe. Communication was professional and she made it very easy to review documents on the go/electronically. On top of it, she sealed our working relationship with thoughtful gifts. Highly recommend” ",
    name: "Bisi & Wole Olabanji",
  },
  {
    id: 4,
    title: "What Our Clients Say",
    text: "“ Oh wow! It was such a fantastic experience. Despite the fact  receiving our  mortgage documentation from the lenders late, our lawyer made sure we got the keys to our new home on our possession day without any hitch. The entire process was handled with high professionalism. We recommend their services to everyone. Great job!” ",
    name: "Olufisayo & Tosin",
  },
];

interface ArrowProps {
  onClick?: () => void;
}

const SampleNextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <span
      className="text-black text-xl absolute top-[30%] right-0 cursor-pointer"
      onClick={onClick}
    >
      <ArrowForwardIos className="text-3xl" />
    </span>
  );
};

const SamplePrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <span
      className="text-black text-xl absolute top-[30%] cursor-pointer z-10"
      onClick={onClick}
    >
      <ArrowBackIosNew className="text-3xl" />
    </span>
  );
};

const Testimonials: React.FC = () => {
  var settings = {
    infinite: true,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    <div className="py-10 px-52 bg-pink">
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="py-5 px-20">
              <h3 className="text-xl text-left pb-10 italic">{item.title}</h3>
              <p className="text-base pb-10" key={item.id}>{item.text}</p>
              <p className="text-right text-xl">{item.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
