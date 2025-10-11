"use client";

import ReCAPTCHA from "react-google-recaptcha";
import { FaArrowRight } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const onChange = () => {};

  const handleSubmit = (e) => {
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
  };

  return (
    <>

        {/* Main Form */}
          <form
            action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="oid" value="00D2w00000BbjNJ" />
            <input type="hidden" name="Campaign_ID" value="7012w000000ZEJxAAO" />
            <input type="hidden" name="retURL" value="https://www.aekot.com" />
            <input type="hidden" name="lead_source" value="AekotWeb" />

            {/* Name */}
            <div className="p-[6.4px] border border-black rounded-lg">
              <input
                type="text"
                id="last_name"
                name="last_name"
                className="h-9 w-full outline-none"
                placeholder="Name*"
                required
              />
            </div>

            {/* Email */}
            <div className="p-[6.4px] border border-black rounded-lg">
              <input
                type="email"
                id="email"
                name="email"
                className="h-9 w-full outline-none"
                placeholder="Email*"
                required
              />
            </div>

            {/* Phone */}
            <div className="p-[6.4px] border border-black rounded-lg">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                className="h-9 w-full outline-none"
              />
            </div>

            {/* Project Description */}
            <div className="p-[6.4px] border border-black rounded-lg">
              <textarea
                id="description"
                name="description"
                className="h-44 w-full outline-none"
                placeholder="Tell us about your query"
              />
            </div>

            {/* Recaptcha */}
            <ReCAPTCHA
              sitekey="6LdWrl4dAAAAAMvV8xsShqMP_mxBbfTMaYFFoG_P"
              onChange={onChange}
            />

            <button
              type="submit"
              className="ghost-button inline-block w-5/6 sm:w-44 md:w-48 py-2 pl-2 font-semibold text-center text-light border-2 border-primary bg-primary hover:bg-primary/90 rounded-md transition-colors flex items-center justify-center gap-2"
              style={{ transition: "transform 0.2s ease-in-out" }}
            >
              Send <FaArrowRight className="text-xs" />
            </button>
          </form>

      <ToastContainer />
    </>
  );
};

export default ContactForm;
