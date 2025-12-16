"use client";
import Link from "next/link";
import { motion } from "motion/react"
import {
  FaBuilding,
  FaEnvelope,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaYoutube
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-screen-xl mx-auto mt-24 md:pb-8 py-6 px-6 space-y-12"
    >
      {/* LINKS */}
      <section className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:justify-items-center text-sm">
        
        {/* Locations */}
        <article className="space-y-4">
          <header className="text-primary font-semibold xs:text-3xl text-xl">
            Locations
          </header>
          <p className="flex text-black">
            <FaBuilding className="text-3xl pr-2" /> Delaware, USA
          </p>
          <p className="flex text-black">
            <FaBuilding className="text-3xl pr-2" /> Bengaluru, IND
          </p>
          <p className="flex text-black">
            <FaBuilding className="text-3xl pr-2" /> Dubai, UAE
          </p>
        </article>

        {/* Contacts */}
        <article className="space-y-4">
          <header className="text-primary font-semibold xs:text-3xl text-xl">
            Contacts
          </header>
          <p className="flex text-black">
            <FaPhoneAlt className="text-3xl pr-2" />
            <a href="tel:+14158003212">+1 415 800 3212</a>
          </p>
          <p className="flex text-black">
            <FaPhoneAlt className="text-3xl pr-2" />
            <a href="tel:+918049669587">+91 8049669587</a>
          </p>
          <p className="flex text-black">
            <FaPhoneAlt className="text-3xl pr-2" />
            <a href="tel:+971569037989">+971 569037989</a>
          </p>
          <p className="flex text-black">
            <FaEnvelope className="text-3xl pr-2" />
            <a href="mailto:contact@aekot.com">contact@aekot.com</a>
          </p>
        </article>

        {/* Quick Links */}
        <article className="space-y-4">
          <header className="text-primary font-semibold xs:text-3xl text-xl">
            Quick Links
          </header>
          <div className="grid grid-cols-2 gap-4 text-black">
            {[
              ["Home", "/"],
              ["Case Studies", "/case-studies"],
              ["About", "/about"],
              ["Careers", "/careers"],
              ["Services", "/services"],
              ["Our Team", "/ourTeam"]
            ].map(([label, path]) => (
              <Link
                key={label}
                href={path}
                className="hover:text-primary hover:translate-x-1 transition-all"
              >
                {label}
              </Link>
            ))}
          </div>
        </article>
      </section>

      {/* Social Links */}
      <section className="flex justify-center space-x-8 text-3xl text-dark">
        <a href="https://www.facebook.com/aekotinc" target="_blank">
          <FaFacebookSquare className="text-xl hover:text-primary transition-colors" />
        </a>
        <a href="https://www.linkedin.com/company/aekot/" target="_blank">
          <FaLinkedin className="text-xl hover:text-primary transition-colors" />
        </a>
        <a href="https://twitter.com/aekotinc" target="_blank">
          <FaXTwitter className="text-xl hover:text-primary transition-colors" />
        </a>
        <a href="https://www.instagram.com/aekotinc/" target="_blank">
          <FaInstagram className="text-xl hover:text-primary transition-colors" />
        </a>
        <a href="https://www.youtube.com/@aekot" target="_blank">
          <FaYoutube className="text-xl hover:text-primary transition-colors" />
        </a>
      </section>

      {/* Copyright */}
      <section className="text-center">
        <hr className="border-dark/50" />
        <p className="pt-6">
          Copyright © {new Date().getFullYear()} All rights reserved
        </p>
      </section>
    </motion.footer>
  );
};

export default Footer;
