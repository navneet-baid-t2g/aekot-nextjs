"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const successStories = [
  {
    title: "Redwood",
    description:
      "Seamless integration of clinical systems into Salesforce Health Cloud for a unified patient view.",
    img: "/images/caseStudyImages/RedwoodCSImg.png",
    readMore: "/case-studies/redwood-health-cloud",
  },
  {
    title: "Diabetes Management Co.",
    description:
      "Streamlined onboarding and unified operations through tailored Salesforce Health Cloud integration.",
    img: "/images/caseStudyImages/DiathriveCSImg.png",
    readMore: "/case-studies/diabetes-management-health-cloud",
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

export default function SuccessStories() {
  return (
    <section className="py-12">
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-2xl mx-auto">
        {successStories.map((story, index) => (
          <motion.div
            key={story.title}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.15 }}
            className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="relative h-48 w-full mb-4">
              <Image
                src={story.img}
                alt={story.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2">
              {story.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {story.description}
            </p>

            <Link
              href={story.readMore}
              className="inline-flex items-center text-blue-600 font-medium hover:underline"
            >
              Read more →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}