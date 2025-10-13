"use client";
import { useState } from "react";
import { CgBriefcase } from "react-icons/cg";
import { FaMinus, FaPlus } from "react-icons/fa";
import { LuMessageSquare, LuWorkflow } from "react-icons/lu";
const actionSections = [
    {
        title: "Applications",
        icon: <CgBriefcase size={36} className="text-blue-600" />,
        description: [
            "Natively integrated with Salesforce Customer 360, Agentforce allows AI-driven actions within Sales, Service, Commerce, and Marketing.",
            "Example: An agent can analyze engagement data to identify an upsell opportunity and generate a personalized email.",
        ],
    },
    {
        title: "Conversations",
        icon: <LuMessageSquare size={36} className="text-green-600" />,
        description: [
            "Embedded across web and mobile chat, email, SMS, and Slack to provide seamless customer interactions.",
            "Example: A customer chats with an AI agent for troubleshooting, receiving best practices before escalating the case.",
        ],
    },
    {
        title: "Workflows",
        icon: <LuWorkflow size={36} className="text-purple-600" />,
        description: [
            "AI-powered automation with prebuilt Flows that streamline business operations and increase efficiency.",
            "Example: An agent runs a Flow to automatically escalate a customer case ticket based on urgency.",
        ],
    },
];
export default function () {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (

        <section
            className="py-16 bg-white text-gray-900 flex flex-col md:flex-row gap-12 items-center md:items-start mt-12 md:mt-32 px-8 md:px-20 max-w-7xl"
        >
            <div
                className="md:w-1/2 flex flex-col justify-center self-start min-h-[300px]"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                    Agentforce Takes Action Across Your Enterprise
                </h2>
                <p className="text-gray-800 mt-4 max-w-3xl text-md md:text-md">
                    Harness the power of AI automation to accelerate operations,
                    transform interactions, and streamline workflows—driving efficiency
                    and innovation across your business.
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
                            <div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                className="mt-4"
                            >
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
        </section >

    )
}