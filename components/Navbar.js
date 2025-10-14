"use client";
import { useState, useEffect } from "react";
import { GoHome } from "react-icons/go";
import { GrServices } from "react-icons/gr";
import { CgMoreR } from "react-icons/cg";
import { GrCatalogOption } from "react-icons/gr";
import { AiOutlineTeam } from "react-icons/ai";
import { GrChatOption } from "react-icons/gr";
import { RiBloggerLine, RiCloseLine, RiMenu2Line, RiMenuFill } from "react-icons/ri";
import { MdOutlineContactPage } from "react-icons/md";
import GitexBanner from "./GitexBanner";
import Link from "next/link";
import { FaChevronDown, FaLongArrowAltRight } from "react-icons/fa";
import Button from "./Button";


const Navbar = ({ onParentModalClose }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scroll, setScroll] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <section className={`fixed top-0 right-0 left-0 z-[9999] `}>
                <GitexBanner onParentModalClose={onParentModalClose} />
                <nav
                    id="navbar"
                    className={
                        scroll
                            ? "bg-light z-20 max-w-screen2xl mxauto lg:py-2 px-6 sm:px-2 lg:px-6 font-medium lg:flex justify-between items-center gap-6 md:gap-12 xl:gap-36 transition-all duration-400 ease-in shadow-2xl"
                            : "max-w-screen2xl mxauto fixed right-0 z-20 left-0 lg:py-2 px-6 sm:px-2 lg:px-6 font-medium lg:flex justify-between items-center gap-6 md:gap-12 xl:gap-36 transition-all duration-400 ease-in"
                    }
                >
                    <section
                        className={
                            scroll
                                ? "max-w-screen-2xl mx-auto py-4 flex justify-between items-center gap-6 xl:gap-32 transition-all duration-400 ease-in"
                                : "max-w-screen-2xl mx-auto py-8 flex justify-between items-center gap-6 xl:gap-32 transition-all duration-400 ease-in"
                        }
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
                                                href="/Services/agentforce"
                                                className="py-2 block hover:text-primary hover:translate-x-1 transition-all"
                                                onClick={handleClick}
                                            >
                                                Agentforce Implementation
                                            </Link>

                                            <Link
                                                href="/services/salesforce-consulting-strategy"
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
                                                href="/our-team"
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
                        <article className="md:hidden text-2xl py-1">
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
                                href="/our-team"
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
                                <a href="https://talent.aekot.com"><div className="dropbtn ghost-button inline-block w-5/6 sm:w-32 md:w-32 lg:w-32 xl:w-44 py-2 pl-2 font-semibold text-center text-primary border-2 border-primary rounded-md hover:bg-primary/5">
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
                </nav>
            </section>
        </>
    );
};

export default Navbar;
