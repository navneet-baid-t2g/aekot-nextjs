"use client";
import { motion } from "framer-motion";

const steps = [
  "Discovery and Analysis",
  "Solution Architecture",
  "Customization and Integration",
  "Data Migration and Security",
  "User Training and Adoption",
  "Continuous Support and Optimization",
];

export default function ImplementationApproach() {
  return (
    <section className="px-4 md:px-10 py-16 overflow-hidden">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Our Implementation Approach
      </motion.h2>

      <div className="relative flex flex-col items-center md:flex-row md:justify-between md:items-start gap-16 md:gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center text-center w-44"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
          >
            {/* Vertical connector (mobile) */}
            {index !== 0 && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-[#E52B50]/60 md:hidden" />
            )}

            {/* Horizontal connector (desktop) */}
            {index !== 0 && (
              <div className="hidden md:block absolute -left-10 top-5 w-20 h-1 bg-[#E52B50]/60" />
            )}

            <div className="w-12 h-12 rounded-full bg-[#E52B50] text-white font-bold flex items-center justify-center shadow-lg z-10">
              {index + 1}
            </div>

            <div className="mt-4 px-2 py-3 bg-white dark:bg-gray-700 shadow-md rounded-xl border border-[#E52B50]/30">
              <p className="text-sm font-medium text-gray-800 dark:text-white">
                {step}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
