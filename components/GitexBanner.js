"use client";
import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { RiCloseLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function GitexBanner({ onParentModalClose }) {
    const [visible, setVisible] = useState(true);
    const [scroll, setScroll] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    // Detect scroll position
    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClose = () => {
        setVisible(false);
        if (onParentModalClose) {
            onParentModalClose();
        }
    };

    const handleModalOpen = (e) => {
        e.preventDefault();
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Thank you for contacting us!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            closeButton: false,
        });
        setTimeout(() => {
            setModalOpen(false);
            // window.location.href = "https://www.aekot.com/";
        }, 3100);
    };

    const onChange = () => { };

    if (!visible) return null;

    return (
        <>
            <div
                className={`w-full text-white px-4 py-6 text-center text-md font-medium shadow-md z-50 
        }`}
                style={{
                    backgroundImage:
                        "-webkit-linear-gradient(0deg, #e52b50 0%, #000000 100%)",
                }}
            >
                <p className="max-w-4xl mx-auto">
                    We're excited to announce that <strong>Aekot</strong> will be attending Dreamforce in{" "}
                    <strong>
                        San Francisco on Oct 14th-16th 2025 <br />
                    </strong>{" "}
                </p>
                <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-center font-normal">
                    {/*<p>Hall: 6.2</p>
          <p>Booth: H6.2-D09, H6.2-D10</p>
          <p>Dates: 21st - 23rd May</p>*/}
                </div>
                <a
                    href="#"
                    onClick={handleModalOpen}
                    className="underline ml-1 hover:text-gray-200"
                >
                    Come see us there
                </a>
                <button
                    onClick={handleClose}
                    className="absolute right-4 top-3 text-white hover:text-gray-300"
                    aria-label="Close banner"
                >
                    <RiCloseLine size={18} />
                </button>
            </div>

            {/* Contact Form Modal */}
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
                            {/* Contact Form */}
                            <form
                                action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
                                method="POST"
                                className="space-y-4"
                                onSubmit={handleSubmit}
                            >
                                <input type="hidden" name="oid" value="00D2w00000BbjNJ" />
                                <input
                                    type="hidden"
                                    name="Campaign_ID"
                                    value="7012w000000ZEJxAAO"
                                />
                                <input
                                    type="hidden"
                                    name="retURL"
                                    value="https://www.aekot.com"
                                />
                                <input type="hidden" name="lead_source" value="AekotWeb" />

                                {/* Name */}
                                <div className="p-2 border border-gray-300 rounded-lg text-sm">
                                    <label className="flex flex-col">
                                        <input
                                            type="text"
                                            id="last_name"
                                            name="last_name"
                                            className="h-6 outline-none"
                                            placeholder="Name*"
                                            required
                                        />
                                    </label>
                                </div>

                                {/* Email */}
                                <div className="p-2 border border-gray-300 rounded-lg text-sm">
                                    <label htmlFor="email" className="flex flex-col flex-grow">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="h-9 outline-none"
                                            placeholder="Email*"
                                            required
                                        />
                                    </label>
                                </div>

                                {/* Phone */}
                                <div className="p-2 border border-gray-300 rounded-lg text-sm">
                                    <label htmlFor="phone" className="flex flex-col flex-grow">
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="Phone"
                                            className="h-9 outline-none"
                                        />
                                    </label>
                                </div>

                                {/* Project Description */}
                                <div className="p-2 border border-gray-300 rounded-lg text-sm">
                                    <label htmlFor="description" className="flex flex-col">
                                        <textarea
                                            id="description"
                                            name="description"
                                            className="h-44 focus:border-secondary outline-none"
                                            placeholder="Tell us about your query"
                                        />
                                    </label>
                                </div>

                                <ReCAPTCHA
                                    sitekey="6LdWrl4dAAAAAMvV8xsShqMP_mxBbfTMaYFFoG_P"
                                    onChange={onChange}
                                />

                                <div className="flex space-x-4 justify-between">
                                    <button
                                        type="submit"
                                        className="ghost-button inline-block w-5/6 sm:w-44 md:w-48 lg:w-48 py-2 pl-2 font-semibold text-center text-light border-2 border-primary bg-primary rounded-md transition-colors"
                                        style={{ transition: "transform 0.2s ease-in-out" }}
                                    >
                                        Send{" "}
                                        <i className="fa-solid fa-arrow-right-long text-xs"></i>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleModalClose}
                                        className="inline-block w-full md:w-48 py-2 font-semibold text-center text-gray-600 border-2 border-gray-400 rounded-md hover:bg-gray-100 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer />
        </>
    );
}
