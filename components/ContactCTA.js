"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactCTA({ heading = "Need Professional Salesforce Integration Services?" }) {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    const name = e.target.last_name.value.trim();
    const email = e.target.email.value.trim();
    const newErrors = {};

    // ✅ Validate name
    if (!name) {
      newErrors.name = "Please enter your full name";
    }

    // ✅ Validate email
    if (!email) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);

    // ❌ Stop submission if errors
    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
      return;
    }

    // ✅ Show success toast after validation passes
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
    <section className="bg-primary py-12 px-6 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">{heading}</h2>

        <form
          className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-3xl mx-auto"
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="oid" value="00D2w00000BbjNJ" />
          <input type="hidden" name="Campaign_ID" value="7012w000000ZEJxAAO" />
          <input type="hidden" name="retURL" value="https://www.aekot.com/thank-you" />
          <input type="hidden" name="lead_source" value="AekotWeb" />

          <div className="w-full md:w-1/4 flex flex-col text-left">
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Full Name"
              className={`bg-transparent border-b ${errors.name ? "border-red-500" : "border-gray-300"
                } text-white placeholder-gray-200 focus:outline-none focus:border-white transition`}
            />
            {errors.name && <span className="text-yellow-200 text-sm mt-1">{errors.name}</span>}
          </div>

          <div className="w-full md:w-1/4 flex flex-col text-left">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Work Email"
              className={`bg-transparent border-b ${errors.email ? "border-red-500" : "border-gray-300"
                } text-white placeholder-gray-200 focus:outline-none focus:border-white transition`}
            />
            {errors.email && <span className="text-yellow-200 text-sm mt-1">{errors.email}</span>}
          </div>

          <button
            type="submit"
            className="bg-white hover:bg-gray-200 text-black font-semibold px-6 py-2 rounded-full transition duration-300"
          >
            Submit
          </button>
        </form>

        {/* ✅ Toast Container */}
        <ToastContainer />
      </div>
    </section>
  );
}
