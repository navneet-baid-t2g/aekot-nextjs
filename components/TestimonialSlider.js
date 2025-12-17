"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import JSONDATATESTIMONIALS from "@/data/MOCK_DATA_TESTIMONIAL.json";
import Image from "next/image";
import { motion } from "framer-motion";

const TestimonialSlider = () => {
  const desktopSettings = {
    className: "center",
    centerPadding: "50px",
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
  };

  const mobileSettings = {
    className: "center",
    centerPadding: "20px",
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    arrows: true,
  };

  const Card = ({ testimonial }) => (
    <div className="border w-full min-h-[20rem] rounded-2xl flex flex-col p-4 md:p-8 gap-4 pt-8 relative">
      <div className="flex flex-col md:flex-row justify-between w-full items-start">
        <div className="flex items-center">
          <Image
            src={testimonial.img}
            alt={testimonial.name}
            width={80}
            height={80}
            className="rounded-full border-4 border-gray-200"
          />
          <div className="flex flex-col ml-4">
            <header className="font-bold text-base md:text-lg text-left">
              {testimonial.name}
              <br />
              <span className="text-sm font-medium">{testimonial.designation}</span>
              <br />
              <p className="text-sm font-medium">{testimonial.company}</p>
            </header>
          </div>
        </div>

        <Image
          src={testimonial.logo}
          alt="Logo"
          width={96}
          height={80}
          className="md:w-24 md:h-20 mt-4 md:mt-0"
        />
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <p className="text-sm md:text-md text-left">{testimonial.review}</p>
        <div className="flex gap-1 items-center">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-yellow-500" />
          ))}
        </div>
      </div>

      {testimonial.link && testimonial.link.trim() !== "" && (
        <div className="absolute bottom-6 right-6">
          <a href={testimonial.link} target="_blank" rel="noopener noreferrer">
            <span className="flex items-center text-sm font-semibold text-gray-600 hover:text-primary">
              Read the Case Study <MdArrowOutward className="ml-2" />
            </span>
          </a>
        </div>
      )}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="p-4 md:p-16"
    >
      {/* Desktop / Tablet */}
      <div className="hidden md:block">
        <Slider {...desktopSettings}>
          {JSONDATATESTIMONIALS.map((testimonial, index) => (
            <Card key={index} testimonial={testimonial} />
          ))}
        </Slider>
      </div>

      {/* Mobile Only */}
      <div className="block md:hidden">
        <Slider {...mobileSettings}>
          {JSONDATATESTIMONIALS.map((testimonial, index) => (
            <Card key={`mobile-${index}`} testimonial={testimonial} />
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default TestimonialSlider;