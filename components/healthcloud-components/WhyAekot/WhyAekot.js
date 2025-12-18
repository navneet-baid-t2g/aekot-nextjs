"use client";
import { motion } from "framer-motion";
import { LuCircleCheck } from "react-icons/lu";

const reasons = [
  {
    title: "Salesforce-Certified Experts",
    desc: "Salesforce-Certified Experts you can trust.",
  },
  {
    title: "Experience Across Healthcare Segments",
    desc: "Proven impact through intelligent healthcare solutions with Salesforce.",
  },
  {
    title: "Compliance-Ready Implementation",
    desc: "Secure, compliant, and ready from day one.",
  },
  {
    title: "Rapid Time-to-Value",
    desc: "Accelerated outcomes with faster implementations.",
  },
  {
    title: "Scalable, Patient-Centric Solutions",
    desc: "Flexible solutions designed around patient needs.",
  },
];

export default function WhyAekot() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-12 overflow-hidden">
      {/* Left Content */}
      <motion.div
        className="flex flex-col space-y-6 md:w-1/2"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-left text-gray-700">
          <span className="text-primary">Why Choose Aekot?</span> <br />
          Your Trusted Healthcloud Partner
        </h2>

        <p className="text-md text-gray-800 text-left">
          At Aekot, we bring together deep domain expertise, technical excellence,
          and a client-first approach to help healthcare organizations thrive on
          Salesforce.
        </p>

        <div className="space-y-4">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0">
                <LuCircleCheck className="text-primary" size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm md:text-base leading-snug break-words">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-xs md:text-sm leading-snug break-words">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="mt-10 md:mt-0 md:w-1/3 flex justify-center"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        <img
          src="/images/healthcloud/whychooseus.png"
          alt="Aekot Healthcloud Partner"
          className="max-w-full h-auto"
        />
      </motion.div>
    </section>
  );
}
