"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import MockData from "@/data/MOCK_DATA_LOGOS.json";
import { motion } from "framer-motion";

const ClientsCarousel = () => {
  const desktopSettings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    cssEase: "linear",
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
    ],
  };

  const mobileSettings = {
    infinite: true,
    speed: 2500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    cssEase: "linear",
    arrows: false,
    dots: false,
    pauseOnHover: false,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative flex h-full"
    >
      <div className="container max-w-screen-xl mx-auto relative overflow-x-hidden">
        
        {/* Desktop / Tablet Carousel */}
        <div className="hidden md:block">
          <Slider {...desktopSettings}>
            {MockData.map((image, index) => (
              <div key={index} className="px-4">
                <Image
                  src={image.logo}
                  alt={image.alt}
                  width={200}
                  height={200}
                  className="rounded-2xl border border-white/20 object-contain mx-auto"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Mobile-only Duplicate Carousel */}
        <div className="block md:hidden">
          <Slider {...mobileSettings}>
            {MockData.map((image, index) => (
              <div key={`mobile-${index}`} className="px-3">
                <Image
                  src={image.logo}
                  alt={image.alt}
                  width={160}
                  height={160}
                  className="rounded-xl border border-white/20 object-contain mx-auto"
                />
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </motion.div>
  );
};

export default ClientsCarousel;
