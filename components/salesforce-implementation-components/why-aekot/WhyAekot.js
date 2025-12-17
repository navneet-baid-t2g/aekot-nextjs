"use client";
import { motion } from "framer-motion";

const whyChooseData = [
    {
        id: 1,
        title: "Proven Experience",
        text: `AEKOT brings years of hands-on Salesforce delivery experience across multiple industries. Our knowledge comes from real project exposure where we've solved complex challenges and built tailored solutions that support enterprise-level operations. From implementation to optimization, our Salesforce consulting services are shaped by what actually works in fast-moving business environments.`,
        img: "/images/placeholder-724.png",
    },
    {
        id: 2,
        title: "Global Service Delivery",
        text: `We support clients across regions with a delivery model built for consistency and reliability. Our global experience helps us understand varied operational structures, compliance expectations, and user needs. Whether your teams operate in one location or across continents, we ensure your Salesforce landscape remains aligned, unified, and ready to support scale.`,
        img: "/images/placeholder-724.png",
    },
    {
        id: 3,
        title: "Flexible Engagement Models",
        text: `Every enterprise operates differently, so we adapt our engagement approach to match your pace, priorities, and internal capabilities. From full-cycle implementation to specialized support, we provide models that fit both immediate goals and long-term strategies. Our flexibility ensures you receive the right level of expertise when you need it.`,
        img: "/images/placeholder-724.png",
    },
    {
        id: 4,
        title: "Reliability & Commitment",
        text: `AEKOT is structured around dependable delivery and consistent communication. We stay closely involved throughout the project lifecycle and beyond, ensuring challenges are addressed quickly and progress is always clear. Our commitment is simple: deliver results that reinforce trust and create a Salesforce environment your teams can depend on every day.`,
        img: "/images/placeholder-724.png",
    },
    {
        id: 5,
        title: "Salesforce Service Expertise",
        text: `Our team is composed of experienced consultants, architects, and certified specialists who bring deep technical understanding and business-focused insight. We deliver Salesforce consulting services that help enterprises maximize automation, strengthen customer engagement, and extract real value from every feature within the platform.`,
        img: "/images/placeholder-724.png",
    },
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
                <h2 className="text-primary font-bold xs:text-3xl text-2xl  md:text-3xl lg:text-4xl">
                    Why choose Aekot for Salesforce consulting services?
                </h2>
                <h3 className="font-bold xs:text-1xl text-1xl  md:text-1xl lg:text-2xl">
                    Why Enterprises Trust AEKOT
                </h3>
                <p className="text-sm xs:text-xl sm:text-xl  md:text-base">
                    Enterprises choose AEKOT for our technical depth, transparent approach, and long-term commitment. We refine automation, integrate complex systems, and manage full Salesforce rollouts as an extension of your team. Backed by an expert Salesforce marketing cloud consultant, our Salesforce consulting services for enterprises deliver scalable solutions that improve efficiency and customer experience.
                </p><br />
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