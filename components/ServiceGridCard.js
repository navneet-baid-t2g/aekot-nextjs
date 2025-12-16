"use client";

import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const ServiceGridCard = ({ imageSrc, title, additionalInfo, alignRight }) => {
  const generateServicePath = (name) => {
    return `/services/${name.toLowerCase().replace(/ & | /g, "-").replace(/--+/g, "-")}`;
  };

  return (
    <a
      href={title === "Agentforce Implementation" ? "/services/agentforce-consulting-services" : generateServicePath(title)}
      className="block"
    >
      <div
        className={`relative w-full md:w-[750px] lg:w-[950px] border border-gray-300 rounded-lg overflow-hidden shadow-lg my-4 group transition-all duration-700 ease-in-out mb-6 ${
          alignRight ? "md:ml-auto" : "md:mr-auto"
        }`}
      >
        <div className="flex flex-col md:flex-row w-full">
          {/* Image Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/3 h-48 md:h-auto flex items-center justify-center"
          >
            <img
              src={imageSrc}
              alt={title}
              className="object-cover w-full h-full max-w-[250px] md:max-w-full md:max-h-[200px] rounded-lg p-4"
            />
          </motion.div>

          {/* Content Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-2/3 p-6 flex flex-col justify-between bg-white group-hover:bg-opacity-50 text-center md:text-left"
          >
            <div className="flex flex-col justify-center h-full px-4">
              <h2 className="text-xl font-bold mb-2 text-primary">{title}</h2>
              {additionalInfo && (
                <div className="mt-2">
                  <h3 className="text-md font-semibold mb-2">{additionalInfo.headline}</h3>
                  <p className="text-gray-600 mb-2 text-sm">{additionalInfo.subheading}</p>
                  <a href={additionalInfo.link}>
                    <p className="text-sm ghost-button font-semibold text-primary mt-2 hover:underline flex items-center gap-2">
                      {additionalInfo.cta}{" "}
                      {additionalInfo.linktext && (
                        <span className="flex items-center gap-1">
                          {additionalInfo.linktext} <MdArrowOutward />
                        </span>
                      )}
                    </p>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </a>
  );
};

export default ServiceGridCard;
