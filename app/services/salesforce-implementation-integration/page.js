import Button from "@/components/Button";
import Faq from "@/components/Faq";
import ContactCTA from "@/components/ContactCTA";

import { FaRobot, FaSitemap, FaCogs, FaDatabase, FaUsersCog, FaCloud, FaNetworkWired } from 'react-icons/fa';


const servicecarddata = [
    {
        title: "Discovery & Requirement Mapping",
        desc: "We begin by understanding your processes, challenges, and goals through workshops and assessments. This helps us identify gaps, define priorities, and build a clear Salesforce roadmap aligned with your business, guided by an expert consultant.",
        img: "/images/serviceImages/strategy-and-advisory.webp",
    },
    {
        title: "Solution Architecture Planning",
        desc: "We design a scalable Salesforce architecture tailored to your needs, defining data models, workflows, and integration patterns. Our Salesforce consulting services ensure flexibility, stability, and a future-ready foundation for enterprise growth.",
        img: "/images/serviceImages/Design-and-Development.webp",
    },
    {
        title: "Configuration & Custom Development",
        desc: "We configure Salesforce to match your workflows and develop custom components when needed. From layouts to automation, every element is tailored for usability and efficiency, powered by enterprise-focused Salesforce consulting services.",
        img: "/images/serviceImages/Advanced-AI-Capabilities.webp",
    },
    {
        title: "Integration Blueprint & Execution",
        desc: "We design and execute a robust integration blueprint that connects Salesforce with your essential systems. Using secure APIs and middleware, we ensure reliable data flow and improved productivity, guided by expert integration specialists.",
        img: "/images/serviceImages/Integration.webp",
    },
    {
        title: "QA, Testing & Validation",
        desc: "We thoroughly test workflows, integrations, and data accuracy to ensure reliability and stability. Our enterprise-grade QA process minimizes risks and prepares your Salesforce environment for a seamless and successful go-live.",
        img: "/images/serviceImages/Customization.webp",
    },
    {
        title: "Deployment & Transition",
        desc: "We manage a controlled Salesforce deployment with minimal disruption. Our team handles migration, validation, training, and documentation to ensure a smooth transition and confident adoption across all departments.",
        img: "/images/serviceImages/Automation.webp",
    },
    {
        title: "Ongoing Support & Optimization",
        desc: "We provide continuous support to enhance performance, refine automations, and align Salesforce with evolving business needs. With expert guidance, your Salesforce environment remains optimized and prepared for long-term growth.",
        img: "/images/serviceImages/Security-and-Compliance.webp",
    }
];

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

export const agentforceFeatures = [
    {
        id: 1,
        title: 'Salesforce Platform Implementation',
        description:
            'AEKOT delivers structured and business-aligned Salesforce implementations that help enterprises adopt the platform with confidence. Our team studies your processes, pain points, and long-term goals to design the right setup from day one. We configure Sales Cloud, Service Cloud, and custom modules to ensure teams work smarter and faster. With our Salesforce consulting services, you gain a strong foundation that supports automation, improves reporting, and enhances customer interactions across departments. Every implementation is managed with clarity and collaboration, ensuring your organization receives a scalable and future-ready Salesforce environment.',
        icon: 'FaRobot',
    },
    {
        id: 2,
        title: 'Salesforce Marketing Cloud Setup & Optimization',
        description:
            'We help enterprises unlock the full capabilities of Marketing Cloud with strategic planning and hands-on execution. From personalized journeys to automation, segmentation, and data integration, we ensure every component works in your favor. As an expert Salesforce consultant, we focus on creating campaigns that resonate, nurture leads, and support long-term customer retention. Whether you’re starting fresh or refining an existing setup, our team optimizes processes to improve ROI and deliver consistent, targeted communication that scales with your growth strategy.',
        icon: 'FaCloud',
    },
    {
        id: 3,
        title: 'System Integration & API Connectivity',
        description:
            'AEKOT specializes in seamless Salesforce integrations that bring your business systems together for unified data and streamlined operations. We connect ERPs, CRMs, financial tools, custom applications, and third-party platforms using secure, scalable integration frameworks. Our Salesforce consulting services for enterprises ensure data flows accurately between systems, reducing manual work and eliminating information gaps. With strong API expertise, we create connections that improve decision-making, support automation, and enhance platform reliability. The result is a well-connected ecosystem that responds quickly to business demands and customer needs.',
        icon: 'FaNetworkWired',
    },
    {
        id: 4,
        title: 'Data Migration & Security Governance',
        description:
            'Migrating data into Salesforce requires planning, accuracy, and strong governance-and that’s where AEKOT excels. We evaluate your existing datasets, clean inconsistencies, and map everything effectively into the Salesforce environment. Our approach prioritizes compliance, security, and reliability, ensuring your data remains protected at every step. As part of our Salesforce consulting services, we establish rules and practices that promote long-term data integrity. Whether you’re transitioning from legacy systems or upgrading within Salesforce, we make the process smooth, controlled, and error-free.',
        icon: 'FaDatabase',
    },
    {
        id: 5,
        title: 'Automation & Workflow Engineering',
        description:
            'We design intelligent workflows and automation strategies that help enterprises reduce manual tasks and improve team productivity. From approval processes to complex logic and cross-department automation, we configure Salesforce to handle repetitive work efficiently. Guided by the expertise of an experienced Salesforce consultant, we ensure your automation aligns with business objectives and drives measurable value. Our solutions strengthen internal collaboration, minimize delays, and boost operational consistency. With AEKOT, your Salesforce environment becomes a foundation for smarter, faster execution.',
        icon: 'FaCogs',
    },
    {
        id: 6,
        title: 'User Training & Post-Go-Live Support',
        description:
            'Successful Salesforce adoption goes beyond configuration—it relies on user confidence. AEKOT provides structured training programs designed to help teams understand the platform and use it effectively in daily operations. From role-based walkthroughs to ongoing assistance, we make sure every user gains clarity and comfort. Our Salesforce consulting services include continuous improvement, system monitoring, refinement, and long-term support. We stay with you beyond go-live to ensure your Salesforce environment evolves with business needs and continues delivering meaningful results.',
        icon: 'FaUsersCog',
    },
];

const WhyChoose = [
    {
        id: 1,
        title: "Proven Experience",
        text: `AEKOT brings years of hands-on Salesforce delivery experience across multiple industries. Our knowledge comes from real project exposure where we've solved complex challenges and built tailored solutions that support enterprise-level operations. From implementation to optimization, our Salesforce consulting services are shaped by what actually works in fast-moving business environments.`,
        img: "/images/placeholder-724.png",
    },
    {
        id: 2,
        title: "Global Service Delivery",
        text: `We support clients across regions with a delivery model built for consistency and reliability. Our global experience helps us understand varied operational structures, compliance expectations, and user needs. Whether your teams operate in one location or across continents, we ensure your Salesforce landscape remains aligned, unified, and ready to support scale.`,
        img: "/images/placeholder-724.png",
    },
    {
        id: 3,
        title: "Flexible Engagement Models",
        text: `Every enterprise operates differently, so we adapt our engagement approach to match your pace, priorities, and internal capabilities. From full-cycle implementation to specialized support, we provide models that fit both immediate goals and long-term strategies. Our flexibility ensures you receive the right level of expertise when you need it.`,
        img: "/images/placeholder-724.png",
    },
    {
        id: 4,
        title: "Reliability & Commitment",
        text: `AEKOT is structured around dependable delivery and consistent communication. We stay closely involved throughout the project lifecycle and beyond, ensuring challenges are addressed quickly and progress is always clear. Our commitment is simple: deliver results that reinforce trust and create a Salesforce environment your teams can depend on every day.`,
        img: "/images/placeholder-724.png",
    },
    {
        id: 5,
        title: "Salesforce Service Expertise",
        text: `Our team is composed of experienced consultants, architects, and certified specialists who bring deep technical understanding and business-focused insight. We deliver Salesforce consulting services that help enterprises maximize automation, strengthen customer engagement, and extract real value from every feature within the platform.`,
        img: "/images/placeholder-724.png",
    },
];

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

            <section className="flex flex-col md:flex-row items-center justify-between pt-16 py-8 bg-white max-w-7xl mx-auto pt-32 md:pt-32">
                {/* Left Content */}
                <div className="max-w-xl text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        <span className="text-[#e52b50]">Salesforce Implementation</span> & Integration for Modern Enterprises
                    </h1>
                    <p className="text-gray-600 mt-4 leading-relaxed">
                        We assist businesses to discover the maximum potential of Salesforce with a smooth implementation, intelligent integration, and expert advice of trusted Salesforce professionals.
                    </p>

                    <div className="mt-6 flex justify-center md:justify-start">
                        <Button text="Get Started" path="/contact" />
                    </div>
                </div>

                {/* Right Image */}
                <div className="mt-10 md:mt-0 md:ml-10 flex justify-center">
                    <img
                        src="/images/serviceImages/implementImg.jpg"
                        alt="alesforce Implementation & Integration for Modern Enterprises"
                        className="w-82 md:w-106 object-contain rounded-lg"
                    />
                </div>
            </section>

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
                            Transforming Care with Healthcloud
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

            <section id="whycompany" className="py-12 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-6">
                        <h2 className="text-primary font-bold xs:text-3xl text-2xl  md:text-3xl lg:text-4xl">
                            Expert Salesforce Services That Deliver Results
                        </h2>
                        <h3 className="font-bold xs:text-1xl text-1xl  md:text-1xl lg:text-2xl">
                            Comprehensive Salesforce Consulting Services
                        </h3>
                        <p>We provide tailored Salesforce solutions that streamline processes, enhance customer engagement, and guide enterprises through every stage of their digital transformation.</p><br />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {agentforceFeatures.map((item) => (
                            <div
                                key={item.id}
                                className="p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition duration-300 bg-white"
                            >
                                <div className="w-16 h-16 mb-5 text-primary text-5xl">
                                    {item.id === 1 && <FaRobot />}
                                    {item.id === 2 && <FaSitemap />}
                                    {item.id === 3 && <FaCogs />}
                                    {item.id === 4 && <FaDatabase />}
                                    {item.id === 5 && <FaUsersCog />}
                                    {item.id === 6 && <FaCloud />}
                                    {item.id === 7 && <FaNetworkWired />}
                                </div>


                                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm"
                                    dangerouslySetInnerHTML={{ __html: item.description }} />
                            </div>
                        ))}
                    </div>


                </div>
            </section>

            <ContactCTA heading="Looking for Expert Salesforce Developers?" />

            <section className="pt-16 px-6 md:px-20 py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-gray-900">
                            <span className="text-[#e52b50]">Our Expertise in Salesforce clouds</span>
                        </h2><br />
                        <h3 className="font-bold xs:text-1xl text-1xl  md:text-1xl lg:text-2xl"> Our Implementation Approach</h3>
                    </div>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicecarddata.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                            >
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-60 object-cover"
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
            <ContactCTA heading="Looking for Expert Salesforce Developers?" />

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="space-y-6">
                    <h2 className="text-primary font-bold xs:text-3xl text-2xl  md:text-3xl lg:text-4xl">
                        Why choose Aekot for Salesforce consulting services?
                    </h2>
                    <h3 className="font-bold xs:text-1xl text-1xl  md:text-1xl lg:text-2xl">
                        Why Enterprises Trust AEKOT
                    </h3>
                    <p className="text-sm xs:text-xl sm:text-xl  md:text-base">
                        Enterprises choose AEKOT for our technical depth, transparent approach, and long-term commitment. We refine automation, integrate complex systems, and manage full Salesforce rollouts as an extension of your team. Backed by an expert Salesforce marketing cloud consultant, our Salesforce consulting services for enterprises deliver scalable solutions that improve efficiency and customer experience.
                    </p><br />
                    <br />

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                    {WhyChoose.map((s) => (
                        <article
                            key={s.id}
                            className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm"
                        >
                            <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-pink-50 text-primary text-lg font-medium mb-4">
                                {`0${s.id}`}
                            </span>

                            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                                {s.title}
                            </h3>

                            <p
                                className="text-gray-600 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: s.text }}
                            />
                        </article>
                    ))}
                </div>
            </section>

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
