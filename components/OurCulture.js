'use client';

import React from 'react';
import Slider from 'react-slick';
import { IoLocationSharp } from "react-icons/io5";

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

  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
      { breakpoint: 420, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="max-w-full mx-auto md:mx-20 my-8 px-4">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2 relative">
            <div className="bg-white p-4 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out relative overflow-hidden">
              <img
                src={image.src}
                alt={`Our culture ${index}`}
                className="object-contain w-full rounded-md h-56"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center space-x-2">
                  <IoLocationSharp className="h-5 w-5 text-white" />
                  <p className="text-white text-md font-medium">{image.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurCulture;
