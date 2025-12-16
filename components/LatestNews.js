"use client";
import MOCKDATANEWS from "@/data/MOCK_DATA_NEWS.json";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";

const LatestNews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const carouselRef = useRef(null);

    const MockNewsData = Array(10).fill(MOCKDATANEWS).flat();
    const totalCards = MockNewsData.length;

    useEffect(() => {
        const handleResize = () => {
            setCardsToShow(window.innerWidth < 768 ? 1 : 3); 
        };

        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNext = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prev) => {
                const newIndex = prev + 1;
                return newIndex >= totalCards - cardsToShow ? 0 : newIndex;
            });
        }
    };

    const handlePrev = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prev) => {
                const newIndex = prev - 1;
                return newIndex < 0 ? totalCards - cardsToShow : newIndex;
            });
        }
    };

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
    };

    return (
        <motion.article
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:max-w-screen-xl mx-auto pt-28 space-y-12 px-4"
        >
            <div className="space-y-6 text-center">
                <h2 className="text-primary font-bold xs:text-3xl text-2xl md:text-3xl lg:text-4xl">
                    Aekot in the News
                </h2>
            </div>

            <div className="relative">
                <div
                    ref={carouselRef}
                    className="overflow-hidden"
                    onTransitionEnd={handleTransitionEnd}
                >
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`
                        }}
                    >
                        {MockNewsData.map((news, index) => (
                            <section
                                key={index}
                                className="flex-shrink-0"
                                style={{ width: `${100 / cardsToShow}%` }} 
                            >
                                <div className="mx-auto ">
                                    <a href={news.link} target="_blank" rel="noopener noreferrer">
                                        <article className="flex mx-1 md:mx-6 flex-col overflow-hidden border-2 h-[28rem] w-74 rounded-2xl transition-transform duration-300 relative">
                                            <div className='hover:scale-105 transition-transform duration-200 h-full flex flex-col'>
                                                <div className="h-[18rem]">
                                                    <img
                                                        src={news.img}
                                                        alt="Blog Poster"
                                                        className="object-fit w-full h-full transition-transform duration-1000"
                                                    />
                                                </div>
                                            </div>
                                            <div className='absolute bottom-0 w-full px-4 bg-white mb-2 transition-transform duration-200 space-y-4'>
                                                <div className='flex flex-col justify-center items-center py4'>
                                                    <h2
                                                        style={{ lineHeight: "1.5" }}
                                                        className="py-2 font-semibold md:text-sm lg:text-[16px]"
                                                    >
                                                        {news.title}
                                                    </h2>
                                                </div>
                                                <p className='text-md text-gray-600'>{news.reporter}</p>
                                                <span className='text-sm text-gray-500'>{news.read}</span>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                            </section>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4 mt-4">
                    <div className="flex gap-4">
                        <button
                            onClick={handlePrev}
                            className="bg-white rounded-full p-2 shadow-lg"
                            disabled={isTransitioning}
                        >
                            <FaChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="bg-white rounded-full p-2 shadow-lg"
                            disabled={isTransitioning}
                        >
                            <FaChevronRight className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

export default LatestNews;