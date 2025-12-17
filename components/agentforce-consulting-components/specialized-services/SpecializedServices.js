"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const servicecarddata = [
  {
    title: "Agentforce Implementation Strategy",
    desc: "AEKOT delivers a focused Salesforce Agentforce consulting approach that maps your processes, identifies automation opportunities, and builds a scalable rollout plan. Guided by an Agentforce integration expert, we manage configuration, data preparation, and deployment, ensuring a smooth, goal-aligned implementation that supports long-term service transformation.",
    img: "/images/serviceImages/strategy-and-advisory.webp",
  },
  {
    title: "Custom Workflow Engineering",
    desc: "Our team designs intelligent workflows using Salesforce Agentforce to streamline operations and eliminate inefficiencies. Through our Agentforce consulting services, we create automated routing, escalations, and task sequences tailored to your service model. Each workflow is integrated by an experienced Agentforce integration expert for reliable end-to-end performance.",
    img: "/images/serviceImages/Design-and-Development.webp",
  },
  {
    title: "Enterprise-Grade Integration Architecture",
    desc: "AEKOT builds secure, high-performance integration frameworks centered on Salesforce Agentforce. Our Salesforce Agentforce consulting services create unified data flows across CRMs, communication tools, analytics platforms, and external systems. An Agentforce integration expert ensures seamless connectivity, enabling better visibility, reduced redundancies, and stronger cross-department collaboration.",
    img: "/images/serviceImages/Advanced-AI-Capabilities.webp",
  },
  {
    title: "Conversational AI Development",
    desc: "We develop conversational AI powered by Salesforce Agentforce, including virtual assistants, automated chats, and intelligent self-service modules. Using our Agentforce consulting services, we design natural interaction flows while an Agentforce integration expert connects AI to your CRM and knowledge systems for a unified support experience.",
    img: "/images/serviceImages/Integration.webp",
  },
  {
    title: "Cloud Migration for Agentforce",
    desc: "AEKOT guides organizations through secure cloud migration into Salesforce Agentforce. Our Agentforce consulting services include planning, data preparation, and execution with minimal disruption. Supported by an Agentforce integration expert, we ensure platforms remain connected while optimizing your new environment for speed, scalability, and long-term service performance.",
    img: "/images/serviceImages/Customization.webp",
  },
  {
    title: "Quality Assurance & Optimization",
    desc: "We maintain peak system performance through continuous testing, tuning, and workflow evaluations. With our Salesforce Agentforce consulting expertise, we refine automation, data structures, and configurations. Each integration is validated by an Agentforce integration expert, ensuring stable operations and long-term service quality across your Agentforce ecosystem.",
    img: "/images/serviceImages/Automation.webp",
  },
  {
    title: "Continuous Support & Enhancement",
    desc: "AEKOT provides ongoing support to keep your Salesforce Agentforce environment evolving. Our Agentforce consulting services include updates, enhancements, performance checks, and strategic improvements. Backed by an Agentforce integration expert, we maintain reliable integrations and help your service operations adopt new features and expand automation over time.",
    img: "/images/serviceImages/Security-and-Compliance.webp",
  },
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
            <span className="text-[#e52b50]">
              Our Specialized Agentforce Consulting Services
            </span>
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
