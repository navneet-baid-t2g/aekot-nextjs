import Link from "next/link";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

export default function ThankYou() {
    return (
        <section className="w-full p-2.5">
            <div className="hero-section  bg-center bg-no-repeat">
                <article className="max-w-screen-xl flex items-center justify-center flex-col mx-auto mt-24 space-y-6 md:space-y-10">
                    <div className="items-center flex flex-col ">
                        <FaCheckCircle className="text-8xl text-primary  sm:mt-24 mt-20" />
                        <h1 className="fade-in-head text-center text-primary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:leading-normal px-12  sm:mt-4 mt-4">
                            Thank You For
                            Contacting Us
                        </h1>
                        <p className="fade-in-subhead font-semibold text-lg md:text-xl  px-6 text-center mt-4">
                            Our team will get back to you within 1 business day.
                        </p>
                        <p className="fade-in-subhead font-semibold text-lg md:text-xl px-6 text-center">
                            Please check your junk e-mail folder and your voicemail box to ensure our communication is not blocked.
                        </p>
                    </div>

                    <div role="alert" className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-800 rounded-md px-4 py-3">
                        <p className="text-sm text-center sm:text-left">
                            If you do not hear from us within 1 business day, please send an email to<br />
                            <strong><a href="mailto:contact@aekot.com" className="underline font-semibold text-green-700">contact@aekot.com</a></strong>.
                            We will attend to you at the earliest.
                        </p>
                    </div>


                    <div className="flex justify-center items-center w-full text-right md:mt-0 md:ml-4 pb-8">
                        <Link
                            href="/contact"
                            className="ghost-button inline-block w-full sm:w-44 md:w-48 lg:w-48 py-2 pl-2 font-semibold text-center text-light border-2 border-primary bg-primary rounded-lg transition-colors flex items-center justify-center gap-2"
                            style={{ transition: "transform 0.2s ease-in-out" }}
                        >Find out more about our services
                        </Link>
                    </div>
                </article>
            </div>
        </section>

    );
};  