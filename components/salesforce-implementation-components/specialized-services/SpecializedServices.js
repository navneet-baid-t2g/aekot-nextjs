"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const servicecarddata = [
  {
        title: "Discovery & Requirement Mapping",
        desc: "We begin by understanding your processes, challenges, and goals through workshops and assessments. This helps us identify gaps, define priorities, and build a clear Salesforce roadmap aligned with your business, guided by an expert consultant.",
        img: "/images/serviceImages/strategy-and-advisory.webp",
    },
    {
        title: "Solution Architecture Planning",
        desc: "We design a scalable Salesforce architecture tailored to your needs, defining data models, workflows, and integration patterns. Our Salesforce consulting services ensure flexibility, stability, and a future-ready foundation for enterprise growth.",
        img: "/images/serviceImages/Design-and-Development.webp",
    },
    {
        title: "Configuration & Custom Development",
        desc: "We configure Salesforce to match your workflows and develop custom components when needed. From layouts to automation, every element is tailored for usability and efficiency, powered by enterprise-focused Salesforce consulting services.",
        img: "/images/serviceImages/Advanced-AI-Capabilities.webp",
    },
    {
        title: "Integration Blueprint & Execution",
        desc: "We design and execute a robust integration blueprint that connects Salesforce with your essential systems. Using secure APIs and middleware, we ensure reliable data flow and improved productivity, guided by expert integration specialists.",
        img: "/images/serviceImages/Integration.webp",
    },
    {
        title: "QA, Testing & Validation",
        desc: "We thoroughly test workflows, integrations, and data accuracy to ensure reliability and stability. Our enterprise-grade QA process minimizes risks and prepares your Salesforce environment for a seamless and successful go-live.",
        img: "/images/serviceImages/Customization.webp",
    },
    {
        title: "Deployment & Transition",
        desc: "We manage a controlled Salesforce deployment with minimal disruption. Our team handles migration, validation, training, and documentation to ensure a smooth transition and confident adoption across all departments.",
        img: "/images/serviceImages/Automation.webp",
    },
    {
        title: "Ongoing Support & Optimization",
        desc: "We provide continuous support to enhance performance, refine automations, and align Salesforce with evolving business needs. With expert guidance, your Salesforce environment remains optimized and prepared for long-term growth.",
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
