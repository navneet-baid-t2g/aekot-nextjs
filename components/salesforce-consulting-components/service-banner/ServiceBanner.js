'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function ServiceBanner() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between py-8 pt-32 bg-white max-w-7xl mx-auto px-8 md:px-0">

            {/* Left Content */}
            <motion.div
                className="max-w-xl text-center md:text-left"
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    <span className="text-[#e52b50]">Salesforce Consulting</span> & Strategy Excellence
                </h1>
                <p className="text-gray-600 mt-4 leading-relaxed">
                    <strong>Reimagining Enterprise Success with Salesforce Expertise</strong><br />
                    Turn your company around with smart Salesforce solutions, fully integrated offerings, and consulting services led by experts to drive rapid growth, productivity, and customer experience.
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
                    src="/images/serviceImages/strategyImg.jpg"
                    alt="Salesforce Consulting & Strategy Excellence"
                    className="w-82 md:w-106 object-contain rounded-lg"
                />
            </motion.div>
        </section>
    );
}
