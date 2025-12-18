"use client";
import { motion } from "framer-motion";
import { LuRedo, LuCircleCheck } from "react-icons/lu";

export default function WhatisSalesforce() {
  const features = [
    "Personalized Patient Engagement",
    "Care Team Collaboration",
    "Clinical & Non-Clinical Data Integration",
    "Automation for Administrative Tasks",
    "Remote and Preventive Care Capabilities",
  ];

  return (
    <section className="py-20 px-4 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12 items-start">
        {/* Left Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            What is Salesforce Health Cloud?
          </h2>
          <p className="font-semibold text-gray-700 text-lg md:text-xl max-w-md">
            Salesforce Health Cloud is a HIPAA-compliant platform that unifies
            patient data from EHRs, wearables, and claims into a single,
            actionable view.
          </p>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <div className="flex items-center gap-2">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
              It enables:
            </h3>
            <LuRedo className="w-8 h-8 rotate-90" />
          </div>

          <ul className="grid grid-cols-1 gap-4 font-semibold text-gray-600 text-base md:text-lg">
            {features.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <LuCircleCheck className="text-primary w-5 h-5 mt-1" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
