"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const servicecarddata = [
  {
    title: "Cloud Advisory & Digital Roadmapping",
    desc: "AEKOT guides enterprises through Salesforce transformation with tailored digital roadmaps. We define goals, reduce risks, and create a scalable modernization journey that accelerates cloud adoption and long-term innovation.",
    img: "/images/serviceImages/strategy-and-advisory.webp",
  },
  {
    title: "Custom App Development Excellence",
    desc: "We build custom Salesforce applications that solve enterprise challenges and enhance productivity. Our solutions fit seamlessly into your ecosystem, improving efficiency, scalability, and workflow performance across departments.",
    img: "/images/serviceImages/Design-and-Development.webp",
  },
  {
    title: "Advanced Analytics & Insight Delivery",
    desc: "AEKOT delivers analytics solutions that enhance forecasting, intelligence, and real-time decision-making. We improve segmentation, campaign analytics, and data visibility, helping enterprises uncover opportunities and drive sustained growth.",
    img: "/images/serviceImages/Advanced-AI-Capabilities.webp",
  },
  {
    title: "CRM Optimization & Adoption Programs",
    desc: "We improve Salesforce adoption with training, workflow enhancements, and user-focused optimization. AEKOT streamlines processes, reduces friction, and empowers employees to fully leverage Salesforce for better productivity and collaboration.",
    img: "/images/serviceImages/Integration.webp",
  },
  {
    title: "Performance Measurement & Continuous Improvement",
    desc: "AEKOT monitors key metrics and implements continuous enhancements to keep Salesforce aligned with business goals. We ensure your ecosystem evolves with market needs while maintaining speed, reliability, and high performance.",
    img: "/images/serviceImages/Customization.webp",
  },
  {
    title: "Multi-Cloud Expansion Strategy",
    desc: "We support enterprises expanding into new Salesforce clouds through structured, scalable strategies. AEKOT aligns data, processes, and user experiences, improving visibility, collaboration, and governance across multi-cloud environments.",
    img: "/images/serviceImages/Automation.webp",
  },
  {
    title: "Innovation-Driven Technology Enablement",
    desc: "AEKOT helps enterprises adopt AI, automation, and advanced Salesforce technologies confidently. We enhance personalization, agility, and engagement, creating a future-ready environment that supports continuous innovation.",
    img: "/images/serviceImages/Security-and-Compliance.webp",
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function SpecializedServices() {
  return (
    <section className="pt-16 px-6 md:px-20 py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900">
            <span className="text-[#e52b50]">Our Expertise in Salesforce clouds</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {servicecarddata.map((service, index) => (
            <motion.article
              key={index}
              variants={fadeUp}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <div className="relative w-full h-60">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
