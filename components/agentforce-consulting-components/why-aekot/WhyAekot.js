"use client";
import { motion } from "framer-motion";

const whyChooseData = [
    {
        id: 1,
        title: "Extensive Industry Experience",
        text: `AEKOT brings years of hands-on experience implementing and optimizing <strong>Salesforce Agentforce</strong> for organizations across multiple industries. Our background in <strong>Salesforce Agentforce consulting</strong> allows us to understand diverse service challenges and build solutions that fit real-world workflows. From enterprise-scale operations to fast-growing teams, we apply proven best practices that ensure smooth adoption, stronger performance, and long-term success. Every project benefits from our strategic insights and practical implementation expertise.`,
    },
    {
        id: 2,
        title: "Global Delivery Framework",
        text: `With a globally distributed delivery model, AEKOT provides 24/7 support and implementation coverage for organizations operating across regions. Our <strong>Agentforce consulting services</strong> follow a disciplined framework that balances speed, quality, and scalability. By combining global talent with centralized oversight, we ensure consistent delivery standards and reliable project execution. Supported by an <strong>Agentforce integration expert</strong> team, businesses receive seamless deployments regardless of location or technical complexity.`,
    },
    {
        id: 3,
        title: "Flexible Engagement Models",
        text: `AEKOT offers adaptable engagement models that fit your unique operational needs—whether you require full-scale transformation, phased adoption, or dedicated consulting support. Our <strong>Salesforce Agentforce consulting</strong> team works closely with stakeholders to design the right approach for your timeline and budget. With flexibility at the center of our delivery philosophy, businesses can scale support, add capabilities, or modify priorities without disruption.`,
    },
    {
        id: 4,
        title: "Commitment to Client Success",
        text: `Our commitment extends beyond implementation—we support your organization with ongoing guidance, optimization, and proactive improvements. Through strategic Agentforce consulting services, we help ensure your platform continues delivering value as your service environment evolves. Every initiative is backed by accountability, transparency, and a results-driven mindset. With deep platform knowledge and strong customer focus, AEKOT becomes a long-term partner dedicated to your success.`,
    },
    {
        id: 5,
        title: "Deep Service Expertise",
        text: `AEKOT’s team excels in translating complex service requirements into powerful, automated solutions using <strong>Salesforce Agentforce</strong>. Our specialists blend technical mastery with real operational experience, delivering systems that enhance agent productivity and elevate customer experiences. Guided by certified <strong>Agentforce integration experts</strong>, we ensure every component—from workflows to data flows—works together flawlessly. This strong functional and technical expertise drives superior service performance for every client.`,
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