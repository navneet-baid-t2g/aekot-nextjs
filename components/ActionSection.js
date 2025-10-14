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
            "We have very deep expertise in Salesforce with over 10 years of experience in CRM systems, serving startups to Fortune 500 companies, with over 40 projects. Our expertise in Sales Cloud, Service Cloud, Marketing Cloud and more ensures customised solutions for various industries.",
        ],
    },
    {
        title: "Global service delivery",
        icon: <FaGlobeAmericas size={36} className="text-green-600" />,
        description: [
            "Aekot supports global clients with localised strategies to ensure cultural and operational alignment. We operate in multiple regions across North America and the UAE and provide smooth delivery across the regions.",
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
            "Aekot focuses on full customer satisfaction and acts as a strategic partner involved in client success. We build long-term partnerships and earn trust through our consistent results. Clients have appreciated our dedication and transparent communication with them.",
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

export default function ActionSection () {
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
                    Aekot is a Salesforce Consulting Services provider known for our experience, global service delivery, adaptable engagement models, commitments and service expertise in Salesforce CRM consulting.
                </p>
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
