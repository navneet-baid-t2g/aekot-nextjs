"use client";

import { useState } from "react";

import { CgChevronDown, CgChevronUp } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";

const certificationImages = [
  { src: "/images/Certifications/C22.png" },
  { src: "/images/Certifications/C23.png" },
  { src: "/images/Certifications/C8.png" },
];

const servicecarddata = [
    {
        title: "Strategy and Advisory",
        desc: "We will do a full assessment of what your business needs, find out new opportunities and create steps to adjust Agentforce according to your business goals.",
        img: "/images/serviceImages/strategy-and-advisory.webp",
    },
    {
        title: "Design and Deployment",
        desc: "We will design and deploy Agentforce service agents as per your business needs. We can build them based on already existing agents like sales agents or build entirely new ones with the help of Agent builder.",
        img: "/images/serviceImages/strategy-and-advisory.webp",
    },
    {
        title: "Advanced AI Capabilities",
        desc: "We use Agentforce’s Atlas Reasoning Engine and multimodal AI to build Agentforce service agents that can process texts, voice, images and documents to give better services.",
        img: "/images/serviceImages/strategy-and-advisory.webp",
    },
    {
        title: "Integration",
        desc: "Our teams are Agentforce integration experts and can make the integration process with Salesforce CRM Data Cloud and third-party systems very smooth.",
        img: "/images/serviceImages/strategy-and-advisory.webp",
    },
    {
        title: "Customisation",
        desc: "Our team will make sure that every agent is created according to your business goals. Every agent that we will create is tuned with low-code tools to make customisation easy.",
        img: "/images/serviceImages/strategy-and-advisory.webp",
    },
    {
        title: "Automation",
        desc: "We create AI tools that perform daily tasks such as campaigning, generating leads, etc. to relieve teams so they can focus on more important and productive activities.",
        img: "/images/serviceImages/strategy-and-advisory.webp",
    },
    {
        title: "Security & Compliance",
        desc: "We use the Einstein Trust layer to make sure that Agentforce holds up data privacy regulations and saves sensitive data with a governance framework.",
        img: "/images/serviceImages/strategy-and-advisory.webp",
    },
    {
        title: "Training & Enablement",
        desc: "We will provide complete training programs that allow your teams to manage and optimise Agentforce AI tools easily and confidently.",
        img: "/images/serviceImages/strategy-and-advisory.webp",
    },
    {
        title: "Support & Managed Services",
        desc: "Our expert Agentforce consulting services provide full support 24/7, monitor performance, and help scale Agentforce as per your business needs.",
        img: "/images/serviceImages/strategy-and-advisory.webp",
    },
];



const otherservices = [
    "Salesforce Consulting Services",
    "Certified Salesforce CRM Consulting",
    "Salesforce Implementation Service",
    "Salesforce Training",
    "Salesforce Marketing Cloud Training",
    "Salesforce Integration Services",
    "CRM Migration",
    "Salesforce Agentforce Consulting",
    "Agentforce Integration Expert",
    "Salesforce Managed Services",
    "Salesforce Data Migration",
    "Expert Salesforce Marketing Cloud Consultant",
    "Salesforce Marketing Cloud Consultant",
    "Managed Services for Salesforce",
    "Salesforce Consulting Services for Enterprises",
    "Best Salesforce Implementation Service Provider",
    "Certified Salesforce Implementation Service Experts",
    "Salesforce CRM Consulting Services",
    "Agentforce Consulting Services",
    "Expert Salesforce Consulting Services",
];


const faqs = [
    {
        question: "How long does an Agentforce implementation take?",
        answer:
            "The implementation timeline varies based on business complexity and customization needs. On average, it takes 4-12 weeks, including assessment, setup, integration, and training.",
    },
    {
        question: "What industries can benefit the most?",
        answer:
            "Agentforce is beneficial across multiple industries, including finance, healthcare, retail, e-commerce, real estate, and technology, by enhancing automation, customer interactions, and decision-making.",
    },
    {
        question:
            "How does Agentforce integrate with existing Salesforce solutions?",
        answer:
            "Agentforce seamlessly integrates with Sales Cloud, Service Cloud, Marketing Cloud, and other Salesforce products, ensuring smooth data flow, automation, and AI-driven insights across your CRM ecosystem.",
    },
    {
        question: "What's the cost of implementation?",
        answer:
            "The cost depends on the scope, customization, and complexity of the implementation. Contact us for a personalized quote tailored to your business needs.",
    },
];




export default function ServiceSingle() {
    const [openFAQ, setOpenFAQ] = useState(null);
    return (
        <>

            <section className="flex flex-col md:flex-row items-center justify-between pt-16 px-6 md:px-16 py-16 bg-white max-w-7xl mx-auto pt-32 md:pt-32">
                {/* Left Content */}
                <div className="max-w-xl text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        <span className="text-[#e52b50]">Salesforce Agentforce</span> consulting service{" "}
                    </h1>

                    <p className="text-gray-600 mt-4 leading-relaxed">
                        Aekot's Salesforce Agentforce consulting services have the right expertise you need to unlock Agentforce's
                        full potential. We have the experience and skills to create strategies that will help you integrate
                        Agentforce's AI tools into your business.
                    </p>

                    <button className="mt-8 px-6 py-3 bg-[#e52b50] text-white rounded-md font-medium hover:bg-[#d81b60] transition duration-300">
                        Contact Us
                    </button>
                </div>

                {/* Right Image */}
                <div className="mt-10 md:mt-0 md:ml-10 flex justify-center">
                    <img
                        src="/images/agentforceNews/benefits1.webp"
                        alt="AI Robot"
                        className="w-82 md:w-106 object-contain rounded-lg"
                    />
                </div>
            </section>

            <section className="py-16 relative bg-gradient-to-b from-white via-red-100 to-white px-8 md:px-20 ">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Left Content */}
                <div className="flex flex-col space-y-6 md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-left">
                        Why should you go for <span className="text-primary">Aekot’s Salesforce Agentforce</span>  consulting services?
                    </h2>

                    <p className="text-md text-gray-800 text-left">
                       Aekot is well known for its Salesforce Agentforce consulting services. We have a skilled team who have high experience in AI technologies. Our track record shows that we have delivered AI solutions that were customised according to the business objectives. We provide full support from start to end and make sure that your business achieves its goals quickly and efficiently.
                    </p>

                    <p className="text-md text-gray-800 text-left">
                       Our skills and dedication to your projects makes us the right partner for Salesforce Agentforce consulting services. We don't just solve current issues but we also prepare for tomorrow's opportunities.

                    </p>

                    <p className="text-md text-gray-800 text-left">
                       With Aekot's expert Agentforce consulting services, businesses can get reliable AI solutions which will maximise your teams' efficiency, improve customer experience and bring our clients growth. 
                    </p>

                </div>

                {/* Right Scrolling Logos */}
                <div className="relative h-[400px] w-1/3 overflow-hidden flex justify-center mt-12">
                    <div className="flex flex-col gap-8 animate-scroll">
                        {certificationImages.concat(certificationImages).map((src, i) => (
                            <img
                                key={i}
                                src={src.src}
                                alt={`Certification ${i + 1}`}
                                className="h-[102px] w-[102px] object-contain"
                            />
                        ))}
                    </div>
                </div>
                </div>
            </section>

            <section className="pt-16 px-6 md:px-20 py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-gray-900">
                            <span className="text-[#e52b50]">Our Services</span>
                        </h2>
                    </div>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicecarddata.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                            >
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="other-services" className="py-12 px-6 bg-gradient-to-b from-white via-red-100 to-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        <span className="text-[#e52b50]"> Other Services</span>
                    </h2>
                    <p className="text-gray-600 mb-4">
                        We not only provide <strong>Salesforce Consulting Services</strong> but
                        also offer a wide range of specialized services that help companies
                        maximize their Salesforce potential. Our expertise spans strategy,
                        implementation, automation, AI, and continuous support. We assist
                        businesses with consulting, integration, training, data movement, and
                        managed services.
                    </p>
                    <p className="text-gray-600 mb-8">
                        Whether your organization requires a complete implementation, CRM
                        migration, AI functionality, AppExchange support, or platform
                        training, our extensive portfolio of Salesforce services ensures
                        precise and scalable solutions.
                    </p>

                    <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {otherservices.map((service, index) => (
                            <li
                                key={index}
                                className="flex items-center text-gray-700 hover:text-primary transition"
                            >
                                <FaArrowRight className="mr-2 text-primary" />
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section>
                <div class="w-full max-w-2xl mx-auto">
                    <h2 class="text-3xl font-bold text-center mb-8"><span className="text-[#e52b50]">Frequently Asked  Questions</span></h2>

                    <div className="mt-6 space-y-4 max-w-2xl mx-auto">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                                <button
                                    className="flex justify-between items-center w-full text-left"
                                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                                >
                                    <span className="text-md font-semibold">{faq.question}</span>
                                    {openFAQ === index ? (
                                        <CgChevronUp size={24} />
                                    ) : (
                                        <CgChevronDown size={24} />
                                    )}
                                </button>
                                {openFAQ === index && (
                                    <p className="mt-2 text-gray-700 text-sm">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </>
    );
}