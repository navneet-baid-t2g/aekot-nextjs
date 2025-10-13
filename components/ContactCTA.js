import React from "react";

export default function ContactCTA({ heading = "Need Professional Salesforce Integration Services?" }) {
  return (
    <section className="bg-primary py-12 px-6 text-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Dynamic Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8">{heading}</h2>

        {/* Form */}
        <form className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full md:w-1/4 bg-transparent border-b border-gray-300 text-white placeholder-gray-200 focus:outline-none focus:border-white transition"
          />
          <input
            type="email"
            placeholder="Work Email"
            className="w-full md:w-1/4 bg-transparent border-b border-gray-300 text-white placeholder-gray-200 focus:outline-none focus:border-white transition"
          />
          <button
            type="submit"
            className="bg-white hover:bg-grey text-black font-semibold px-6 py-2 rounded-full transition duration-300"
          >
            Submit
          </button>
        </form>

        {/* Privacy Policy Note */}
        <p className="text-sm text-gray-200 mt-4">
          By submitting this form, you agree to{" "}
          <a
            href="#"
            className="underline hover:text-white transition"
          >
            Aekot's Privacy Policy
          </a>
        </p>
      </div>
    </section>
  );
}
