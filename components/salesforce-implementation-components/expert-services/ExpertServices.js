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

const agentforceFeatures = [
    {
        id: 1,
        title: 'Salesforce Platform Implementation',
        description:
            'AEKOT delivers structured and business-aligned Salesforce implementations that help enterprises adopt the platform with confidence. Our team studies your processes, pain points, and long-term goals to design the right setup from day one. We configure Sales Cloud, Service Cloud, and custom modules to ensure teams work smarter and faster. With our Salesforce consulting services, you gain a strong foundation that supports automation, improves reporting, and enhances customer interactions across departments. Every implementation is managed with clarity and collaboration, ensuring your organization receives a scalable and future-ready Salesforce environment.',
        icon: 'FaRobot',
    },
    {
        id: 2,
        title: 'Salesforce Marketing Cloud Setup & Optimization',
        description:
            'We help enterprises unlock the full capabilities of Marketing Cloud with strategic planning and hands-on execution. From personalized journeys to automation, segmentation, and data integration, we ensure every component works in your favor. As an expert Salesforce consultant, we focus on creating campaigns that resonate, nurture leads, and support long-term customer retention. Whether you’re starting fresh or refining an existing setup, our team optimizes processes to improve ROI and deliver consistent, targeted communication that scales with your growth strategy.',
        icon: 'FaCloud',
    },
    {
        id: 3,
        title: 'System Integration & API Connectivity',
        description:
            'AEKOT specializes in seamless Salesforce integrations that bring your business systems together for unified data and streamlined operations. We connect ERPs, CRMs, financial tools, custom applications, and third-party platforms using secure, scalable integration frameworks. Our Salesforce consulting services for enterprises ensure data flows accurately between systems, reducing manual work and eliminating information gaps. With strong API expertise, we create connections that improve decision-making, support automation, and enhance platform reliability. The result is a well-connected ecosystem that responds quickly to business demands and customer needs.',
        icon: 'FaNetworkWired',
    },
    {
        id: 4,
        title: 'Data Migration & Security Governance',
        description:
            'Migrating data into Salesforce requires planning, accuracy, and strong governance-and that’s where AEKOT excels. We evaluate your existing datasets, clean inconsistencies, and map everything effectively into the Salesforce environment. Our approach prioritizes compliance, security, and reliability, ensuring your data remains protected at every step. As part of our Salesforce consulting services, we establish rules and practices that promote long-term data integrity. Whether you’re transitioning from legacy systems or upgrading within Salesforce, we make the process smooth, controlled, and error-free.',
        icon: 'FaDatabase',
    },
    {
        id: 5,
        title: 'Automation & Workflow Engineering',
        description:
            'We design intelligent workflows and automation strategies that help enterprises reduce manual tasks and improve team productivity. From approval processes to complex logic and cross-department automation, we configure Salesforce to handle repetitive work efficiently. Guided by the expertise of an experienced Salesforce consultant, we ensure your automation aligns with business objectives and drives measurable value. Our solutions strengthen internal collaboration, minimize delays, and boost operational consistency. With AEKOT, your Salesforce environment becomes a foundation for smarter, faster execution.',
        icon: 'FaCogs',
    },
    {
        id: 6,
        title: 'User Training & Post-Go-Live Support',
        description:
            'Successful Salesforce adoption goes beyond configuration—it relies on user confidence. AEKOT provides structured training programs designed to help teams understand the platform and use it effectively in daily operations. From role-based walkthroughs to ongoing assistance, we make sure every user gains clarity and comfort. Our Salesforce consulting services include continuous improvement, system monitoring, refinement, and long-term support. We stay with you beyond go-live to ensure your Salesforce environment evolves with business needs and continues delivering meaningful results.',
        icon: 'FaUsersCog',
    },
];

export default function ExpertServices() {
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
                         Comprehensive Salesforce Consulting Services
                    </h3>

                    <p>
                        We provide tailored Salesforce solutions that streamline processes, enhance customer engagement, and guide enterprises through every stage of their digital transformation.
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
