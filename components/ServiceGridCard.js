"use client";

import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

const ServiceGridCard = ({ imageSrc, title, additionalInfo, alignRight }) => {
  const generateServicePath = (name) => {
    return `/services/${name
      .toLowerCase()
      .replace(/ & | /g, "-")
      .replace(/--+/g, "-")}`;
  };

  const href =
    title === "Agentforce Implementation"
      ? "/services/agentforce-consulting-services"
      : generateServicePath(title);

  return (
    <Link href={href} className="block w-full">
      {/* Card */}
      <div
        className={`relative w-full max-w-[100vw] mx-auto
          md:max-w-[750px] lg:max-w-[950px]
          border border-gray-300 rounded-lg
          overflow-hidden
          shadow-md md:shadow-lg
          my-4 mb-6
          group transition-all duration-500 ease-in-out
          ${alignRight ? "md:ml-auto" : "md:mr-auto"}
        `}
      >
        <div className="flex flex-col md:flex-row w-full">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full md:w-1/3 flex items-center justify-center p-4"
          >
            <img
              src={imageSrc}
              alt={title}
              loading="lazy"
              className="w-full max-w-full h-auto rounded-md object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full md:w-2/3
              p-4 md:p-6
              flex flex-col justify-center
              bg-white
              text-center md:text-left"
          >
            <div className="space-y-3">

              <h2 className="text-xl font-bold text-primary">
                {title}
              </h2>

              {additionalInfo && (
                <div className="space-y-2">
                  <h3 className="text-md font-semibold">
                    {additionalInfo.headline}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    {additionalInfo.subheading}
                  </p>

                  <a href={additionalInfo.link} className="inline-block">
                    <span className="inline-flex items-center gap-2
                      text-sm font-semibold text-primary
                      hover:underline"
                    >
                      {additionalInfo.cta}
                      {additionalInfo.linktext && (
                        <>
                          {additionalInfo.linktext}
                          <MdArrowOutward />
                        </>
                      )}
                    </span>
                  </a>
                </div>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </Link>
  );
};

export default ServiceGridCard;
