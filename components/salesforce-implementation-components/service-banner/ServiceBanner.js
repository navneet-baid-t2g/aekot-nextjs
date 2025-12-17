'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function ServiceBanner() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between pt-16 py-8 bg-white max-w-7xl mx-auto pt-32 md:pt-32">

            {/* Left Content */}
            <motion.div
                className="max-w-xl text-center md:text-left"
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    <span className="text-[#e52b50]">Salesforce Implementation</span> & Integration for Modern Enterprises
                </h1>
                <p className="text-gray-600 mt-4 leading-relaxed">
                    We assist businesses to discover the maximum potential of Salesforce with a smooth implementation, intelligent integration, and expert advice of trusted Salesforce professionals.
                </p>

                <div className="mt-6 flex justify-center md:justify-start">
                    <Button text="Get Started" path="/contact" />
                </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
                className="mt-10 md:mt-0 md:ml-10 flex justify-center"
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            >
                <img
                    src="/images/serviceImages/implementImg.jpg"
                    alt="alesforce Implementation & Integration for Modern Enterprises"
                    className="w-82 md:w-106 object-contain rounded-lg"
                />
            </motion.div>
        </section>
    );
}
