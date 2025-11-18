"use client";
import { useState } from "react";
import { FaMinus, FaPlus, FaGlobeAmericas, FaHandshake, FaCogs } from "react-icons/fa";
import { CgBriefcase } from "react-icons/cg";
import { LuLayers } from "react-icons/lu";

const actionSections = [
    {
        title: "Experience",
        icon: <CgBriefcase size={36} className="text-blue-600" />,
        description: [
            "Aekot has over 100 years of collective experience in Salesforce CRM systems, with our leaders having served startups to Fortune 500 firms to public sector companies. Aekot’s expertise in Sales Cloud, Service Cloud, Marketing Cloud and other products and services across 40 projects with a CSAT of 4.9/5 ensures excellency in solutions across industries and Salesforce products.",
        ],
    },
    {
        title: "Global service delivery",
        icon: <FaGlobeAmericas size={36} className="text-green-600" />,
        description: [
            "Aekot supports global clients with localised strategies to ensure cultural and operational alignment. We operate in multiple regions across North America, Europe, the UAE and India and provide smooth delivery across the regions.",
        ],
    },
    {
        title: "Adaptable engagement models",
        icon: <LuLayers size={36} className="text-purple-600" />,
        description: [
            "Our Salesforce consulting services offer adaptable engagement models according to clients’ needs that include project-based, ongoing support and hybrid approaches. Our models adapt to evolving project needs with responsive and flexible workflows.",
        ],
    },
    {
        title: "Commitment",
        icon: <FaHandshake size={36} className="text-orange-600" />,
        description: [
            "Aekot focuses on full customer satisfaction and acts as a strategic partner involved in client success. We build long-term partnerships and earn trust through our consistent results. Clients have always appreciated our dedication and transparent communication with them.",
        ],
    },
    {
        title: "Service expertise",
        icon: <FaCogs size={36} className="text-red-600" />,
        description: [
            "We deliver end-to-end Salesforce CRM consulting services which range from strategy and implementation to training and support. It covers customisation, integration and support across Salesforce platforms. Our team excels in AI integration, automation and industry-specific solutions and keeps our clients in front of current trends.",
        ],
    },
];

export default function ActionSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            className="py-16 bg-white text-gray-900 flex flex-col md:flex-row gap-12 md:items-start max-w-7xl mx-auto"
        >
            <div className="md:w-1/2 flex flex-col self-start min-h-[300px]">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                    Why choose Aekot for Salesforce consulting services?
                </h2>
                <p className="text-gray-800 mt-4 max-w-3xl text-md md:text-md">
                    Aekot is a <a href='https://aekot-nextjs.vercel.app/services/salesforce-consulting-services' class='text-primary'>Salesforce Consulting Services</a> provider known for our experience, global service delivery, adaptable engagement models, commitments and service expertise in Salesforce CRM consulting.
                </p>
                <div className="mt-16 w-40 md:w-60 transition-transform duration-300 hover:scale-105 hover:drop-shadow-lg">
                    <img
                        src="/assets/salesforce.svg"
                        alt="Salesforce"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>

            <div className="md:w-1/2 space-y-6">
                {actionSections.map((section, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 p-4 rounded-2xl shadow-md"
                    >
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleSection(index)}
                        >
                            <div className="flex items-center gap-4">
                                {section.icon}
                                <h3 className="text-md md:text-lg font-semibold">
                                    {section.title}
                                </h3>
                            </div>
                            {openIndex === index ? <FaMinus size={24} /> : <FaPlus size={24} />}
                        </div>

                        {openIndex === index && (
                            <div className="mt-4">
                                {section.description.map((text, i) => (
                                    <p key={i} className="text-gray-700 mt-2 text-sm">
                                        {text}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
