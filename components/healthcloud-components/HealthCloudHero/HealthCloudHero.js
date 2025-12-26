"use client";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function HealthCloudHero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-8 md:px-20 overflow-hidden">
      {/* Text Section */}
      <motion.div
        className="text-left md:w-1/2"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-700 leading-tight">
          Elevate Your Business with
          <br /> Aekot&apos;s{" "}
          <span className="text-primary">Health Cloud</span> Expertise
        </h1>

        <p className="font-semibold text-lg md:text-xl text-gray-800 mt-6">
          Empowering Healthcare Innovation with Salesforce Health Cloud.
        </p>

        <p className="text-md text-gray-600 mt-4">
          At Aekot, we help healthcare organizations redefine care delivery
          through Salesforce Health Cloud — a powerful CRM platform built
          specifically for the healthcare and life sciences sector. Our tailored
          implementations ensure better outcomes, stronger engagement, and
          seamless operations.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="ghost-button inline-block w-5/6 sm:w-32 md:w-32 lg:w-32 xl:w-44 py-2 pl-2 ml-2 font-semibold text-center text-light border-2 border-primary bg-primary hover:bg-primary/90 rounded-md transition-colors" target="_blank"
          >
            Contact Us <FaLongArrowAltRight className="inline-block fa-arrow-right-long text-xs" />
          </Link>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8, ease: "easeOut"
        }}
      >
        <img
          src="/images/healthcloud/HealthHero.png"
          className="w-full max-w-xl"
          alt="Health Cloud Illustration"
        />
      </motion.div>
    </div>
  );
}
