"use client";
import { useState, useEffect } from "react";
import { GoHome } from "react-icons/go";
import { GrServices } from "react-icons/gr";
import { CgMoreR } from "react-icons/cg";
import { GrCatalogOption } from "react-icons/gr";
import { AiOutlineTeam } from "react-icons/ai";
import { GrChatOption } from "react-icons/gr";
import { RiBloggerLine, RiCloseLine, RiMenuFill } from "react-icons/ri";
import { MdOutlineContactPage } from "react-icons/md";
import Link from "next/link";
import { FaChevronDown, FaLongArrowAltRight } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

    // Banner state
    const [bannerVisible, setBannerVisible] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScroll(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => window.scrollTo(0, 0);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleBannerClose = () => setBannerVisible(false);
    const handleModalOpen = (e) => {
        e.preventDefault();
        setModalOpen(true);
    };
    const handleModalClose = () => setModalOpen(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Thank you for contacting us!", {
            position: "top-right",
            autoClose: 3000,
            closeButton: false,
        });
        setTimeout(() => setModalOpen(false), 3100);
    };
    const onChange = () => { };

    return (
        <>
            <section className="bg-light sticky top-0 left-0 right-0 z-[9999]">
                {/* =================== GITEX BANNER =================== */}
                {bannerVisible && (
                    <div
                        className="sticky top-0 left-0 right-0 w-full text-white px-4 py-6 text-center text-md font-medium shadow-md z-[10000]"
                        style={{
                            backgroundImage: "-webkit-linear-gradient(0deg, #e52b50 0%, #000000 100%)",
                        }}
                    >

                        <p className="max-w-4xl mx-auto">
                            We&apos;re excited to announce that <strong>Aekot</strong> will be at Global AI Show in <strong>Abu Dhabi, UAE on December 8th 2025</strong>
                        </p>
                        <a
                            href="#"
                            onClick={handleModalOpen}
                            className="underline ml-1 hover:text-gray-200"
                        >
                            Come see us there
                        </a>
                        <button
                            onClick={handleBannerClose}
                            className="absolute right-4 top-3 text-white hover:text-gray-300"
                            aria-label="Close banner"
                        >
                            <RiCloseLine size={18} />
                        </button>

                        {/* Modal */}
                        {modalOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                                <div className="bg-white rounded-lg shadow-xl w-full max-w-lg max-h-screen overflow-y-auto">
                                    <div className="flex justify-between items-center px-6 py-4 border-b">
                                        <h2 className="text-lg md:text-xl font-semibold text-gray-600">
                                            Contact Us
                                        </h2>
                                        <button
                                            onClick={handleModalClose}
                                            className="text-gray-500 hover:text-gray-700"
                                        >
                                            <RiCloseLine size={18} />
                                        </button>
                                    </div>
                                    <div className="p-8">
                                        <form
                                            action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
                                            method="POST"
                                            className="space-y-4"
                                            onSubmit={handleSubmit}
                                        >
                                            <input type="hidden" name="oid" value="00D2w00000BbjNJ" />
                                            <input type="hidden" name="Campaign_ID" value="7012w000000ZEJxAAO" />
                                            <input type="hidden" name="retURL" value="https://www.aekot.com" />
                                            <input type="hidden" name="lead_source" value="AekotWeb" />

                                            <div className="p-2 border border-gray-300 rounded-lg text-sm">
                                                <input type="text" name="last_name" placeholder="Name*" required className="h-6 outline-none w-full" />
                                            </div>
                                            <div className="p-2 border border-gray-300 rounded-lg text-sm">
                                                <input type="email" name="email" placeholder="Email*" required className="h-9 outline-none w-full" />
                                            </div>
                                            <div className="p-2 border border-gray-300 rounded-lg text-sm">
                                                <input type="tel" name="phone" placeholder="Phone" className="h-9 outline-none w-full" />
                                            </div>
                                            <div className="p-2 border border-gray-300 rounded-lg text-sm">
                                                <textarea name="description" className="h-44 outline-none w-full" placeholder="Tell us about your query" />
                                            </div>

                                            <ReCAPTCHA
                                                sitekey="6LdWrl4dAAAAAMvV8xsShqMP_mxBbfTMaYFFoG_P"
                                                onChange={onChange}
                                            />

                                            <div className="flex space-x-4 justify-between">
                                                <button type="submit" className="ghost-button w-44 py-2 font-semibold text-light border-2 border-primary bg-primary rounded-md">
                                                    Send
                                                </button>
                                                <button type="button" onClick={handleModalClose} className="w-44 py-2 font-semibold border-2 border-gray-400 rounded-md">
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )}
                        <ToastContainer />
                    </div>
                )}

                {/* =================== NAVBAR =================== */}
                <nav
                    className={`max-w-screen2xl mx-auto px-6 sm:px-2 lg:px-6 font-medium lg:flex justify-between items-center gap-6 md:gap-12 xl:gap-36 transition-all duration-400 ease-in
    ${scroll ? "bg-light shadow-2xl" : "bg-light"}
  `}
                >
                    <div className="max-w-7xl mx-auto lg:py-2 px-4 md:px-0 font-medium lg:flex justify-between items-center gap-6 md:gap-12 xl:gap-36">
                        <section
                            className="max-w-screen-2xl mx-auto py-4 flex justify-between items-center gap-6 xl:gap-32 transition-all duration-400 ease-in"
                        >
                            <article id="logo" className="">
                                <Link href="/">
                                    <img
                                        src="/assets/aekot_logo.svg"
                                        alt="Aekot Logo"
                                        className="w-40 sm:w-40 lg:w-52 hover:scale-95 transition-transform"
                                        onClick={handleClick}
                                    />
                                </Link>
                            </article>

                            {/* Desktop Menu */}
                            <article className="nav-links xs:hidden sm:hidden lg:block">
                                <div className="flex flex-col md:flex-row md:gap-6 lg:gap-12">
                                    <Link
                                        href="/"
                                        className="hover:text-primary transition-colors"
                                        onClick={handleClick}
                                    >
                                        Home
                                    </Link>
                                    <aside className="link-container">
                                        <div className="dropdown relative inline-block">
                                            <Link href="/services" className="dropbtn hover:text-primary transition-colors">
                                                Services{" "}
                                                <FaChevronDown className="inline-block fa-chevron-down text-xs translate-x-1" />
                                            </Link>
                                            <div className="bg-light dropdown-content p-4 hidden absolute rounded-lg z-10" style={{ minWidth: "300px" }}>
                                                <Link
                                                    href="/services/agentforce-consulting-services"
                                                    className="py-2 block hover:text-primary hover:translate-x-1 transition-all"
                                                    onClick={handleClick}
                                                >
                                                    Agentforce Implementation
                                                </Link>

                                                <Link
                                                    href="/services/salesforce-consulting-services"
                                                    className="py-2 block hover:text-primary hover:translate-x-1 transition-all"
                                                    onClick={handleClick}
                                                >
                                                    Salesforce Consulting & Strategy
                                                </Link>

                                                <Link
                                                    href="/services/salesforce-implementation-integration"
                                                    className="py-2 block hover:text-primary hover:translate-x-1 transition-all"
                                                    onClick={handleClick}
                                                >
                                                    Salesforce Implementation & Integration
                                                </Link>
                                                <Link
                                                    href="/services/salesforce-support-managed-services"
                                                    className="py-2 block hover:text-primary hover:translate-x-1 transition-all"
                                                    onClick={handleClick}
                                                >
                                                    Salesforce Support & Managed Services
                                                </Link>
                                                <Link
                                                    href="/services/salesforce-training-adoption"
                                                    className="py-2 block hover:text-primary hover:translate-x-1 transition-all"
                                                    onClick={handleClick}
                                                >
                                                    Salesforce Training & Adoption
                                                </Link>
                                                <Link
                                                    href="/services/data-migration-management"
                                                    className="py-2 block hover:text-primary hover:translate-x-1 transition-all"
                                                    onClick={handleClick}
                                                >
                                                    Data Migration & Management
                                                </Link>
                                            </div>
                                        </div>
                                    </aside>
                                    <aside className="link-container">
                                        <div className="dropdown relative inline-block">
                                            <button className="dropbtn hover:text-primary transition-colors">
                                                Company{" "}
                                                <FaChevronDown className="inline-block fa-chevron-down text-xs translate-x-1" />
                                            </button>
                                            <div className="bg-light dropdown-content p-4 hidden absolute rounded-lg z-10">
                                                <Link
                                                    href="/about"
                                                    className="py-2 block hover:text-primary hover:translate-x-1 transition-all"
                                                    onClick={handleClick}
                                                >
                                                    About Us
                                                </Link>

                                                <Link
                                                    href="/careers"
                                                    className="py-2 block hover:text-primary hover:translate-x-1 transition-all"
                                                    onClick={handleClick}
                                                >
                                                    Careers
                                                </Link>

                                                <Link
                                                    href="/ourTeam"
                                                    className="py-2 block hover:text-primary hover:translate-x-1 transition-all"
                                                    onClick={handleClick}
                                                >
                                                    Our Team
                                                </Link>
                                                <Link
                                                    href="/case-studies"
                                                    className="py-2 block hover:text-primary hover:translate-x-1 transition-all"
                                                    onClick={handleClick}
                                                >
                                                    Case Studies
                                                </Link>
                                            </div>
                                        </div>
                                    </aside>

                                    <Link
                                        href="/blogs"
                                        className="hover:text-primary"
                                        onClick={handleClick}
                                    >
                                        Blogs
                                    </Link>
                                </div>
                            </article>

                            {/* Hamburger */}
                            <article className="lg:hidden text-2xl py-1">
                                {isMenuOpen ? (
                                    <RiCloseLine
                                        className="fa-solid fa-xmark flex justify-right items-right cursor-pointer"
                                        onClick={toggleMenu}
                                    />
                                ) : (
                                    <RiMenuFill
                                        className="fa-solid fa-bars flex justify-right items-right cursor-pointer"
                                        onClick={toggleMenu}
                                    />
                                )}
                            </article>
                        </section>
                        {/* Mobile Menu (Hidden by default, toggled via state) */}
                        <section
                            className={`phone-menu lg:hidden fixed left-0 top-16 h-full w-full transform transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                                } p-6`}
                        >
                            <div className="flex flex-col gap-3 rounded-xl bg-[#ededed] px-6 pt-4 pb-6 text-left font-semibold text-md">
                                <Link
                                    href="/"
                                    className="flex items-center gap-2 hover:text-primary transition-colors"
                                    onClick={() => {
                                        handleClick();
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    <span className="icon"><GoHome className="mr-6 text-xl" /></span> Home
                                </Link>
                                <hr className="" />
                                <Link
                                    href="/services"
                                    className="flex items-center gap-2 hover:text-primary transition-colors"
                                    onClick={() => {
                                        handleClick();
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    <span className="icon"><GrServices className="mr-6 text-xl" /></span> Services
                                </Link>
                                <hr className="" />
                                <Link
                                    href="/about"
                                    className="flex items-center gap-2 hover:text-primary transition-colors"
                                    onClick={() => {
                                        handleClick();
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    <span className="icon"><CgMoreR className="mr-6 text-xl" /></span> About Us
                                </Link>
                                <hr className="" />
                                <Link
                                    href="/careers"
                                    className="flex items-center gap-2 hover:text-primary transition-colors"
                                    onClick={() => {
                                        handleClick();
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    <span className="icon"><GrCatalogOption className="mr-6 text-xl" /></span> Careers
                                </Link>
                                <hr className="" />
                                <Link
                                    href="/ourTeam"
                                    className="flex items-center gap-2 hover:text-primary transition-colors"
                                    onClick={() => {
                                        handleClick();
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    <span className="icon"><AiOutlineTeam className="mr-6 text-xl" /></span> Our Team
                                </Link>
                                <hr className="" />
                                <Link
                                    href="/case-studies"
                                    className="flex items-center gap-2 hover:text-primary transition-colors"
                                    onClick={() => {
                                        handleClick();
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    <span className="icon"><GrChatOption className="mr-6 text-xl" /></span> Case Studies
                                </Link>
                                <hr className="" />
                                <Link
                                    href="/blogs"
                                    className="flex items-center gap-2 hover:text-primary transition-colors"
                                    onClick={() => {
                                        handleClick();
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    <span className="icon"><RiBloggerLine className="mr-6 text-xl" /></span> Blogs
                                </Link>
                                <hr className="" />
                                <Link
                                    href="/contact"
                                    className="flex items-center gap-2 hover:text-primary transition-colors"
                                    onClick={() => {
                                        handleClick();
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    <span className="icon"><MdOutlineContactPage className="mr-6 text-xl" /></span> Contact Us
                                </Link>
                            </div>
                        </section>

                        <section
                            className={
                                scroll
                                    ? "max-w-screen-2xl mx-auto hidden lg:block py-0 space-y-0 sm:space-x-2 2xl:space-x-6 transition-all duration-400 ease-in"
                                    : "max-w-screen-2xl mx-auto hidden lg:block py-6 space-y-0 sm:space-x-2 2xl:space-x-6 transition-all duration-400 ease-in"
                            }
                        >
                            {/* LOGIN BUTTON MODAL IS INSIDE THE CHILDREN PROPERTY */}
                            <button className="link-container text-left">
                                <div className="dropdown relative inline-block">
                                    <a href="https://talent.aekot.com" target="_blank"><div className="dropbtn ghost-button inline-block w-5/6 sm:w-32 md:w-32 lg:w-32 xl:w-44 py-2 pl-2 font-semibold text-center text-primary border-2 border-primary rounded-md hover:bg-primary/5">
                                        Login <FaLongArrowAltRight className="inline-block fa-arrow-right-long text-xs" />
                                    </div></a>
                                </div>
                            </button>
                            <Link
                                href="/contact"
                                className="ghost-button inline-block w-5/6 sm:w-32 md:w-32 lg:w-32 xl:w-44 py-2 pl-2 ml-2 font-semibold text-center text-light border-2 border-primary bg-primary hover:bg-primary/90 rounded-md transition-colors"
                            >
                                Contact Us <FaLongArrowAltRight className="inline-block fa-arrow-right-long text-xs" />
                            </Link>
                        </section>
                    </div>
                </nav>
            </section>
        </>
    );
};

export default Navbar;
