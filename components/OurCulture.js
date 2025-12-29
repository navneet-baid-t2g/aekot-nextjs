'use client';

import React from 'react';
import Slider from 'react-slick';
import { IoLocationSharp } from 'react-icons/io5';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurCulture = () => {
  const images = [
    { src: '/images/cultureImg/Img2.png', location: 'Rishikesh, India' },
    { src: '/images/cultureImg/Img3.jpg', location: 'ITPL, Bengaluru, India' },
    { src: '/images/cultureImg/Img4.png', location: 'Goa, India' },
    { src: '/images/cultureImg/Img5.png', location: 'ITPL, Bengaluru, India' },
    { src: '/images/cultureImg/Img1.png', location: 'Delhi, India' },
    { src: '/images/cultureImg/Img6.png', location: 'Bengaluru, India' },
  ];

  const desktopSettings = {
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
  };

  const tabletSettings = {
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
  };

  const mobileSettings = {
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <div className="max-w-full mx-auto md:mx-20 my-8 px-4">

      {/* Desktop */}
      <div className="hidden lg:block">
        <Slider {...desktopSettings}>
          {images.map((image, index) => (
            <div key={`desktop-${index}`} className="px-2">
              <CultureCard image={image} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Tablet */}
      <div className="hidden md:block lg:hidden">
        <Slider {...tabletSettings}>
          {images.map((image, index) => (
            <div key={`tablet-${index}`} className="px-2">
              <CultureCard image={image} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <Slider {...mobileSettings}>
          {images.map((image, index) => (
            <div key={`mobile-${index}`} className="px-2">
              <CultureCard image={image} />
            </div>
          ))}
        </Slider>
      </div>

    </div>
  );
};

/* ---------------- Reusable Card ---------------- */
const CultureCard = ({ image }) => (
  <div className="bg-white p-4 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out relative overflow-hidden">
    <img
      src={image.src}
      alt={image.location}
      className="object-contain w-full rounded-md h-56"
      loading="lazy"
    />

    <div className="absolute inset-0 bg-black/50 flex items-end justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-md">
      <div className="flex items-center gap-2 mb-6">
        <IoLocationSharp className="h-5 w-5 text-white" />
        <p className="text-white text-md font-medium">
          {image.location}
        </p>
      </div>
    </div>
  </div>
);


export default OurCulture;