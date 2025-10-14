import Link from "next/link";
import { FaBuilding, FaEnvelope, FaFacebook, FaInstagram, FaLinkedinIn, FaPhone, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {

    return (
        <footer className="max-w-screen-xl mx-auto mt-24 md:pb-8 py-6 px-6 space-y-12">
            {/* LINKS */}
            <section

                className={` grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:justify-items-center text-sm`}
            >
                {/* Info about Aekot */}
                {/* Company Location Info */}
                <article className="space-y-4">
                    <header className="text-primary font-semibold xs:text-3xl text-xl">Locations</header>
                    <p className="flex ">
                        <FaBuilding className="text-3xl pr-2" />
                        <span className="leading-4">
                            Delaware, USA
                        </span>
                    </p>
                    <p className="flex">
                        <FaBuilding className="text-3xl pr-2" />
                        <span className="leading-4">
                            Bengaluru, IND
                        </span>
                    </p>
                    <p className="flex">
                        <FaBuilding className="text-3xl pr-2" />
                        <span className="leading-4">
                            Dubai, UAE
                        </span>
                    </p>
                </article>


                {/* Contact Info */}
                <article className="space-y-4">
                    <header className="text-primary font-semibold xs:text-3xl text-xl">Contacts</header>
                    <p className="flex ">
                        <FaPhoneAlt className="text-3xl pr-2" />
                        <a href="tel:+1 415 800 3212">+1 415 800 3212</a>
                    </p>
                    <p className="flex ">
                        <FaPhoneAlt className="text-3xl pr-2" />
                        <a href="tel:+91 80 49669587">+91 8049669587</a>
                    </p>
                    <p className="flex ">
                        <FaPhoneAlt className="text-3xl pr-2" />
                        <a href="tel:+971 569037989">+971 569037989</a>
                    </p>
                    <p className="flex ">
                        <FaEnvelope className="text-3xl pr-2" />
                        <a href="mailto:contact@aekot.com">contact@aekot.com</a>
                    </p>
                </article>


                {/* Quick Links */}
                <article className="space-y-4">
                    <header className="text-primary font-semibold xs:text-3xl text-xl">Quick Links</header>
                    <div className="grid grid-cols-2 gap-4">
                        <Link
                            href="/"
                            className="block hover:text-primary hover:translate-x-1 transition-all"

                        >
                            Home
                        </Link>
                        <Link
                            href="/case-studies"
                            className="block hover:text-primary hover:translate-x-1 transition-all"

                        >
                            Case Studies
                        </Link>
                        <Link
                            href="/about"
                            className="block hover:text-primary hover:translate-x-1 transition-all"

                        >
                            About
                        </Link>
                        <Link
                            href="/careers"
                            className="block hover:text-primary hover:translate-x-1 transition-all"

                        >
                            Careers
                        </Link>
                        <Link
                            href="/services"
                            className="block hover:text-primary hover:translate-x-1 transition-all"

                        >
                            Services
                        </Link>

                        <Link
                            href="/our-team"
                            className="block hover:text-primary hover:translate-x-1 transition-all"

                        >
                            Our Team
                        </Link>
                    </div>
                </article>
            </section>


            {/* Social Links */}
            <section
                className={`flex justify-center  text-center space-x-8 text-3xl text-dark`}
            >
                <a
                    href="https://www.facebook.com/aekotinc"
                    target="_blank"
                    className=" hover:text-primary transition-colors"
                >
                    <FaFacebook className="text-xl" />
                </a>
                <a
                    href="https://www.linkedin.com/company/aekot/"
                    target="_blank"
                    className=" hover:text-primary transition-colors"
                >
                    <FaLinkedinIn className="text-xl" />
                </a>

                <a
                    href="https://twitter.com/aekotinc"
                    target="_blank"
                    className=" hover:text-primary transition-colors"
                >
                    <FaTwitter className="text-xl" />
                </a>
                <a
                    href="https://www.instagram.com/aekotinc/"
                    target="_blank"
                    className=" hover:text-primary transition-colors"
                >
                    <FaInstagram className="text-xl" />
                </a>
                <a
                    href="https://www.youtube.com/@aekot"
                    target="_blank"
                    className=" hover:text-primary transition-colors">
                    <FaYoutube className="text-xl" />
                </a>

            </section>


            {/* Copyright Mark */}
            <section
                className={` text-center`}
            >
                <hr className="border-dark/50" />
                <p className="pt-6">
                    Copyright © {new Date().getFullYear()} All rights reserved
                </p>

            </section>
        </footer>
    );
};

export default Footer;
