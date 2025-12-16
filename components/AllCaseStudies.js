"use client";

import JsoncaseStudyData from "@/data/MOCK_DATA_ALLCASESTUDIES.json";
import CaseStudyCard from "@/components/CaseStudyCard";
import { motion } from "framer-motion";

export default function AllCaseStudies() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="px-4 pt-32 md:pt-36 lg:mx-20"
    >
      <div className="space-y-4 text-center">
        <h2 className="text-primary font-bold xs:text-3xl text-2xl md:text-3xl xl:text-4xl">
          Case Studies
        </h2>
        <p className="fade-in-subhead max-w-screen-sm mx-auto font-semibold text-lg md:text-xl">
          Delivering Success: Real Results, Real Clients
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-12 text-center">
        {JsoncaseStudyData.map((card) => (
          <CaseStudyCard key={card.id} card={card} />
        ))}
      </div>
    </motion.section>
  );
}
