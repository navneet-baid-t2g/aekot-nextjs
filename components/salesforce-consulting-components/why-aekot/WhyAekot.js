"use client";
import { motion } from "framer-motion";

const whyChooseData = [
    {
        id: 1,
        title: 'Proven Enterprise Experience',
        text: `With years of hands-on expertise across industries, AEKOT brings deep understanding to every Salesforce engagement. Our specialists leverage insights from <strong>Salesforce consulting services for enterprises</strong> to craft strategies that solve complex challenges. From large-scale transformations to focused optimization projects, our experience enables us to anticipate risks early, streamline execution, and ensure your Salesforce environment supports long-term growth and operational excellence.`,
        img: '/images/placeholder-724.png',
    },
    {
        id: 2,
        title: 'Global Delivery Capability',
        text: `AEKOT’s global service delivery model ensures consistent execution, flexible engagement options, and round-the-clock project continuity. Our experts deliver scalable solutions that meet enterprise standards across geographies. Our global presence enables rapid deployment, multi-region support, and seamless coordination — ensuring your Salesforce initiatives run smoothly no matter where your operations are located.`,
        img: '/images/placeholder-724.png',
    },
    {
        id: 3,
        title: 'Flexible & Adaptive Engagement Models',
        text: `Every enterprise is unique, which is why AEKOT offers engagement models designed for evolving needs. Whether you require dedicated teams, outcome-based delivery, or agile support, we tailor our approach to fit your environment. We ensure efficient collaboration, transparent communication, and solution designs that grow with your business.`,
        img: '/images/placeholder-724.png',
    },
    {
        id: 4,
        title: 'Commitment to Long-Term Success',
        text: `We view every project as a long-term partnership. AEKOT is committed to ongoing success through continuous optimization, proactive improvements, and knowledge-sharing initiatives. Our teams work closely with your stakeholders, ensuring sustained adoption and platform excellence. We help your enterprise maintain momentum and stay competitive.`,
        img: '/images/placeholder-724.png',
    },
    {
        id: 5,
        title: 'Industry-Focused Service Expertise',
        text: `AEKOT brings specialized domain knowledge across industries such as healthcare, finance, retail, manufacturing, and technology. Our cross-sector insights inform solution design, allowing us to build Salesforce environments tailored to regulatory, operational, and customer needs. With broad skills in <strong>Salesforce consulting services for enterprises</strong>, we deliver industry-ready configurations, integrations, and workflows that elevate performance and support digital advancement.`,
        img: '/images/placeholder-724.png',
    }
];

export default function WhyAekot() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-6"
            >
                <h2 className="text-primary font-bold text-2xl xs:text-3xl md:text-3xl lg:text-4xl">
                    Why AEKOT for Salesforce Agentforce
                </h2>

                <h3 className="font-bold text-xl md:text-xl lg:text-2xl">
                    Why Businesses Choose AEKOT for Salesforce Agentforce Success
                </h3>

                <p className="text-gray-600 text-sm sm:text-xl md:text-base">
                    AEKOT is a trusted partner for businesses looking to modernize service
                    operations with Salesforce Agentforce. We blend strategic insight with
                    tailored implementations to simplify processes and enhance customer
                    experiences. Through our Agentforce consulting services, we design practical
                    solutions that improve efficiency and reduce complexity. Our Salesforce
                    Agentforce consulting experts ensure every workflow, automation, and
                    integration supports your long-term service goals. Backed by skilled
                    Agentforce integration specialists, we create connected service ecosystems
                    that help agents work smarter, and customers receive faster, more consistent
                    support. AEKOT delivers dependable innovation built for growth.
                </p>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mt-12">
                {whyChooseData.map((item, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <motion.article
                            key={item.id}
                            initial={{
                                opacity: 0,
                                x: isEven ? -60 : 60, // left for odd, right for even
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                            className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm"
                        >
                            <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-pink-50 text-primary text-lg font-medium mb-4">
                                {`0${item.id}`}
                            </span>

                            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                                {item.title}
                            </h3>

                            <p
                                className="text-gray-600 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: item.text }}
                            />
                        </motion.article>
                    );
                })}
            </div>
        </section>
    );
}