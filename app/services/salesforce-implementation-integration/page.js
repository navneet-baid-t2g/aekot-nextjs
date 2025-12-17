import Button from "@/components/Button";
import Faq from "@/components/Faq";
import ContactCTA from "@/components/ContactCTA";

import { FaRobot, FaSitemap, FaCogs, FaDatabase, FaUsersCog, FaCloud, FaNetworkWired } from 'react-icons/fa';
import ServiceBanner from "@/components/salesforce-implementation-components/service-banner/ServiceBanner";
import SpecializedServices from "@/components/salesforce-implementation-components/specialized-services/SpecializedServices";
import WhyAekot from "@/components/salesforce-implementation-components/why-aekot/WhyAekot";
import ExpertServices from "@/components/salesforce-implementation-components/expert-services/ExpertServices";



// const otherservices = [
//     {
//         title: "Salesforce Consulting Services",
//         icon: <FaUsers />,
//         desc: "Expert guidance to maximize your Salesforce ecosystem.",
//     },
//     {
//         title: "Certified Salesforce CRM Consulting",
//         icon: <FaUserShield />,
//         desc: "Certified experts helping you optimize CRM workflows.",
//     },
//     {
//         title: "Salesforce Implementation Service",
//         icon: <FaCogs />,
//         desc: "Seamless setup and deployment of Salesforce solutions.",
//     },
//     {
//         title: "Salesforce Marketing Cloud Training",
//         icon: <FaChalkboardTeacher />,
//         desc: "Comprehensive training to master Marketing Cloud tools.",
//     },
//     {
//         title: "Salesforce Integration Services",
//         icon: <FaNetworkWired />,
//         desc: "Connect Salesforce with your business applications easily.",
//     },
//     {
//         title: "Salesforce Agentforce Consulting",
//         icon: <FaHandshake />,
//         desc: "Custom Agentforce solutions to enhance agent performance.",
//     },
//     {
//         title: "Agentforce Integration Expert",
//         icon: <FaLayerGroup />,
//         desc: "Integrate Agentforce with your existing Salesforce setup.",
//     },
//     {
//         title: "Salesforce Managed Services",
//         icon: <FaTools />,
//         desc: "Ongoing support to ensure Salesforce runs seamlessly.",
//     },
//     {
//         title: "Salesforce Data Migration",
//         icon: <FaServer />,
//         desc: "Accurate, secure migration of Salesforce data assets.",
//     },
//     {
//         title: "Expert Salesforce Marketing Cloud Consultant",
//         icon: <FaRocket />,
//         desc: "Get expert advice to boost Marketing Cloud performance.",
//     },
//     {
//         title: "Salesforce Marketing Cloud Consultant",
//         icon: <FaBriefcase />,
//         desc: "Consulting for targeted and data-driven marketing success.",
//     },
//     {
//         title: "Managed Services for Salesforce",
//         icon: <FaTasks />,
//         desc: "Proactive monitoring and maintenance for Salesforce apps.",
//     },
//     {
//         title: "Salesforce Consulting Services for Enterprises",
//         icon: <FaClipboardList />,
//         desc: "Enterprise-level Salesforce solutions to scale operations.",
//     },
//     {
//         title: "Best Salesforce Implementation Service Provider",
//         icon: <FaLaptopCode />,
//         desc: "Trusted partner for efficient Salesforce implementations.",
//     },
//     {
//         title: "Certified Salesforce Implementation Service Experts",
//         icon: <FaUserShield />,
//         desc: "Certified specialists delivering top-tier Salesforce builds.",
//     },
//     {
//         title: "Salesforce CRM Consulting Services",
//         icon: <FaChartBar />,
//         desc: "Tailored CRM consulting to align Salesforce with goals.",
//     },
//     {
//         title: "Agentforce Consulting Services",
//         icon: <FaRegLightbulb />,
//         desc: "Strategic Agentforce solutions for smarter operations.",
//     },
//     {
//         title: "Expert Salesforce Consulting Services",
//         icon: <FaChartLine />,
//         desc: "High-impact consulting to accelerate Salesforce success.",
//     },
// ];



const faqs = [
    {
        question: "What makes AEKOT different from other Salesforce consulting partners?",
        answer:
            "AEKOT focuses on practical, business-driven solutions rather than one-size-fits-all implementations. We take the time to understand how your teams actually work and design Salesforce around real processes-not assumptions. Our combination of technical depth and genuine collaboration sets us apart.",
    },
    {
        question:
            "Do you support both new Salesforce implementations and existing org improvements?",
        answer:
            "Yes. We help enterprises starting from scratch as well as organizations that need to clean up, restructure, or upgrade their current Salesforce environment. Our team works efficiently in both scenarios.",
    },
    {
        question:
            "Can you integrate Salesforce with our existing ERP, finance, or custom systems?",
        answer:
            "Absolutely. Integration is one of our core strengths. We connect Salesforce with ERPs, accounting systems, marketing tools, custom apps, and more to ensure data flows smoothly across your ecosystem.",
    },
    {
        question: "How do you ensure data security during implementation or migration?",
        answer:
            "We follow strict data governance practices, use secure transfer methods, and validate every data set before deployment. Your information remains protected at every stage of the project.",
    },
    {
        question: "Do you offer Salesforce Marketing Cloud services?",
        answer:
            "Yes. Our experts handle everything from setup to journey creation, segmentation, automation, and ongoing optimization to support your marketing strategy.",
    },
    {
        question: "How long does a typical Salesforce implementation take?",
        answer:
            "Timelines vary based on project size and complexity. A simple implementation may take a few weeks, while a full enterprise rollout may require several months. We provide a clear timeline during the planning phase.",
    },
    {
        question: "Will you train our team after the implementation is complete?",
        answer:
            "Yes. We offer role-based training, documentation, and hands-on sessions to ensure every user feels confident using the system. Post-go-live support is also available.",
    },
    {
        question: "What if our requirements change during the project?",
        answer:
            "We expect evolution. Our approach includes checkpoints where we validate priorities and adjust the roadmap if needed—without compromising overall project stability.",
    },
    {
        question:
            "Can you help us improve our existing automations and workflows?",
        answer:
            "Definitely. We review your current processes, remove unnecessary complexity, and rebuild automations that support efficiency and clarity across departments.",
    },
    {
        question: "Do you offer long-term Salesforce support?",
        answer:
            "Yes. Many enterprises continue working with us for ongoing enhancements, system monitoring, new feature adoption, and periodic optimization to keep the platform aligned with business growth.",
    },
    {
        question:
            "Are your services suitable for large and distributed enterprise teams?",
        answer:
            "Absolutely. Our Salesforce consulting services for enterprises are designed to support large, multi-department, and multi-region structures with scalable architectures and governance models.",
    },
    {
        question: "How do we get started with AEKOT?",
        answer:
            "It starts with a conversation. Share your goals, challenges, or current Salesforce issues, and we’ll guide you through a clear roadmap. There’s no pressure—just practical insight to help you move forward.",
    },
];

export const metadata = {
    title: "Salesforce Implementation Integration | Aekot",
    description: "Unlock your business potential with Aekot’s Salesforce Integration and Implementation services. We provide expert setup, customization, and seamless system integration to streamline operations, enhance customer relationships, and deliver secure, scalable solutions that grow with your business.",
    keywords: [
        "Salesforce consulting services",
        "Salesforce implementation",
        "Salesforce customization",
        "Salesforce integration",
        "Salesforce CRM",
        "Salesforce App Development",
        "Agentforce consulting",
        "CRM migration",
        "Salesforce support and maintenance",
        "Salesforce consulting for enterprises"
    ],
    canonical: "https://www.aekot.com/services/salesforce-implementation-integration",
    openGraph: {
        title: "Salesforce Consulting Services | Aekot",
        description: "Unlock your business potential with Aekot’s Salesforce Integration and Implementation services. We provide expert setup, customization, and seamless system integration to streamline operations, enhance customer relationships, and deliver secure, scalable solutions that grow with your business.",
        url: "https://www.aekot.com/services/salesforce-implementation-integration",
        siteName: "Aekot",
        locale: "en_IN",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Salesforce Implementation Integration | Aekot",
        description: "Unlock your business potential with Aekot’s Salesforce Integration and Implementation services. We provide expert setup, customization, and seamless system integration to streamline operations, enhance customer relationships, and deliver secure, scalable solutions that grow with your business.",
    },
    other: {
        faqSchema: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(faq => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
        }),
    },
};

export default function ServiceSingle() {
    return (
        <>

            <ServiceBanner />

            <section className="py-16 relative bg-gradient-to-b from-white via-red-100 to-white px-8 md:px-20 ">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                    {/* Left Content */}
                    <div className="flex flex-col space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-left text-primary">
                            Driving business success through Salesforce
                        </h2>
                        <h3 className="font-bold xs:text-1xl text-1xl  md:text-1xl lg:text-2xl">Modern Salesforce Solutions Built for Enterprise Growth</h3>

                        <p className="text-md text-gray-800 text-left">
                            AEKOT provides end-to-end Salesforce implementation and integration services to business organizations that seek to transform operations and improve customer experiences. Our team combines extensive technical expertise and business experience and the practical experience of a knowledgeable sales force of selling cloud-computing expert to make each project a success in planning to implementation.
                        </p>

                        <p className="text-md text-gray-800 text-left">
                            We take you through marketing automation, multifaceted cross-platform integrations, and with clarity, transparency, and practical experience. Enterprises are turning to AEKOT to find reliable solutions to achieve results and integrate the best of Salesforce technology into their daily business.
                        </p>

                    </div>
                </div>
            </section>

            <section className="py-16 relative px-8 md:px-20 ">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                    {/* Left Content */}
                    <div className="flex flex-col space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-left text-primary">
                            Salesforce Implementation and Integration for Scalable Growth
                        </h2>

                        <div className="space-y-16">
                            <div className="flex flex-col md:flex-row gap-5">
                                <div className="w-full md:w-1/2 flex-shrink-0">
                                    <h3 className="font-bold xs:text-1xl text-1xl  md:text-1xl lg:text-2xl">Salesforce Implementation Excellence</h3>
                                    <p className="mt-4">Our Salesforce implementation approach is built around precision, collaboration, and business value. We combine proven methodology with the experience of an expert Salesforce marketing cloud consultant to deliver solutions that work seamlessly across teams. Every configuration, workflow, and automation is tailored to your operational needs and long-term strategy. With AEKOT, enterprises gain more than technology setup-they receive reliable Salesforce consulting services that support adoption, simplify processes, and accelerate digital transformation across departments.</p>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h3 className="font-bold xs:text-1xl text-1xl  md:text-1xl lg:text-2xl">Salesforce Integration for Scalable Growth </h3>
                                    <p className="mt-4">AEKOT ensures your Salesforce platform connects effortlessly with the systems that power your business. From ERP and finance tools to marketing platforms and custom applications, we design integrations that operate securely, consistently, and at scale. Our Salesforce consulting services for enterprises focus on building stable data flows, reducing manual work, and improving decision-making through unified information. With the guidance of a seasoned Salesforce consultants, you gain a connected ecosystem that grows with your organization.</p>
                                </div>
                            </div></div>

                    </div>
                </div>
            </section>

            <ExpertServices/>

            <ContactCTA heading="Looking for Expert Salesforce Developers?" />

            <SpecializedServices/>

            <ContactCTA heading="Looking for Expert Salesforce Developers?" />

            <WhyAekot/>

            <section className="py-12 px-6">
                <div className="w-full max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        <span className="text-[#e52b50]">Frequently Asked Questions</span>
                    </h2>

                    {/* Split FAQs into two halves */}
                    {(() => {
                        const mid = Math.ceil(faqs.length / 2);
                        const firstHalf = faqs.slice(0, mid);
                        const secondHalf = faqs.slice(mid);

                        return (
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Left column */}
                                <div className="flex-1 space-y-4">
                                    {firstHalf.map((faq, index) => (
                                        <Faq key={index} question={faq.question} answer={faq.answer} />
                                    ))}
                                </div>

                                {/* Right column */}
                                <div className="flex-1 space-y-4">
                                    {secondHalf.map((faq, index) => (
                                        <Faq key={index} question={faq.question} answer={faq.answer} />
                                    ))}
                                </div>
                            </div>
                        );
                    })()}
                </div>
            </section>
            {/* Call to Action */}
            <section className="px-6 pt-12">
                <div className=" max-w-screen-xl mx-auto shadow-[0_0_5px_rgba(0,0,0,0.25)] rounded-2xl px-8 md:px-12 py-8  text-center space-y-6">
                    <p className="font-semibold text-xl">
                        Get Started with Aekot Today!
                        <span style={{ color: "#e52b50" }}> #AekotAdvantage.</span>
                    </p>
                    <p className="text-md text-gray-700 leading-relaxed">
                        Take the next step toward AI-powered transformation. Partner with
                        Aekot to implement Agentforce and stay ahead of the competition.
                        <br />
                        <span className="font-semibold">Schedule a Free Consultation !</span>
                    </p>
                    <div className="flex justify-center">
                        <Button text={"Contact Us"} path={"/contact"} />
                    </div>

                </div>
            </section>
            {/* Call to Action */}

        </>
    );
}
