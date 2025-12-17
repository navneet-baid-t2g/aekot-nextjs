'use client';

import { motion } from 'framer-motion';
import {
    FaRobot,
    FaChartPie,
    FaBook,
    FaMagic,
    FaShareAlt,
    FaLightbulb,
} from 'react-icons/fa';

export default function ExpertServices({ agentforceFeatures }) {
    return (
        <section id="whycompany" className="py-12 px-6 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* Headings & Text */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-primary font-bold xs:text-3xl text-2xl md:text-3xl lg:text-4xl">
                        Expert Salesforce Services That Deliver Results
                    </h2>

                    <h3 className="font-bold xs:text-1xl text-1xl md:text-1xl lg:text-2xl">
                        Comprehensive Salesforce Capabilities for Enterprise Growth
                    </h3>

                    <p>
                        Our Salesforce capabilities empower enterprises to streamline operations, enhance customer experiences, and scale efficiently through strategic guidance and advanced platform expertise.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                    {agentforceFeatures.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition duration-300 bg-white"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: 'easeOut',
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                        >
                            <div className="w-16 h-16 mb-5 text-primary text-5xl">
                                {item.id === 1 && <FaRobot />}
                                {item.id === 2 && <FaChartPie />}
                                {item.id === 3 && <FaBook />}
                                {item.id === 4 && <FaMagic />}
                                {item.id === 5 && <FaShareAlt />}
                                {item.id === 6 && <FaLightbulb />}
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                {item.title}
                            </h3>

                            <p
                                className="text-gray-600 leading-relaxed text-sm"
                                dangerouslySetInnerHTML={{ __html: item.description }}
                            />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
