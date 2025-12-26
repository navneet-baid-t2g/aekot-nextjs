"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LuExternalLink } from "react-icons/lu";

const blogs = [
  {
    title:
      "How Health Cloud Is Powering the New Era of Personalized Healthcare",
    description:
      "Learn how AI is enhancing service efficiency and automation in Salesforce.",
    link: "https://blog.aekot.com/how-health-cloud-is-powering-the-new-era-of-personalized-healthcare/",
    img: "/images/healthcloud/healthBlog1.png",
  },
  {
    title: "Salesforce for Life Sciences: Accelerating Trials & Compliance",
    description:
      "Discover how AI agents are transforming customer interactions and workflows.",
    link: "https://blog.aekot.com/salesforce-for-life-sciences-accelerating-trials-compliance/",
    img: "/images/healthcloud/healthBlog2.png",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function HealthBlogs() {
  return (
    <section className="flex justify-center mt-12">
      <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
        {blogs.map((blog, index) => (
          <motion.a
            key={index}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.15 }}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
          >
            <Image
              src={blog.img}
              alt={blog.title}
              width={300}
              height={200}
              className="w-72 h-52 object-cover"
            />

            <h3 className="text-lg font-semibold mt-4">
              {blog.title}
            </h3>

            <p className="text-sm text-gray-500 mt-2 flex-grow">
              {blog.description}
            </p>

            <div className="mt-4 text-primary flex items-center">
              Read More <LuExternalLink size={18} className="ml-2" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}