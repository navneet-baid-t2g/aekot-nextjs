"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";

const Service = ({ icon, name, text, path, isHome = false }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mx-auto w-fit"
    >
      <div className="flex flex-col items-center text-center px-6 py-8 group shadow-xl h-full">
        <div
          className={`flex flex-col  justify-between items-center text-center gap-4 h-full mx-auto ${isHome ? "w-full" : "w-5/6"
            }`}
        >
          <div className="flex justify-center items-center rounded-full bg-white shadow w-14 h-14 p-4">
            <img src={icon} alt="Icon" className="object-center" />
          </div>

          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            <Link href={path} className="hover:text-primary transition-colors">
              {name}
            </Link>
          </h2>

          <hr className="w-full border-2 border-secondary rounded-xl" />

          <p
            className="text-sm text-gray-600 leading-relaxed mb-6"
            dangerouslySetInnerHTML={{ __html: text }}
          />

          <Link
            href={path}
            className="ghost-button inline-block w-5/6 sm:w-32 md:w-32 lg:w-32 xl:w-44 py-2 pl-2 ml-2 font-semibold text-center text-light border-2 border-primary bg-primary hover:bg-primary/90 rounded-md transition-colors"
          >
            Know More <FaLongArrowAltRight className="inline-block fa-arrow-right-long text-xs" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default Service;