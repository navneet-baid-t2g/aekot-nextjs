import { FaArrowRight } from "react-icons/fa";
import { MdSupportAgent, MdShoppingBasket, MdCalendarMonth, MdCampaign } from "react-icons/md";
import { FaChalkboardTeacher, FaUserTie } from "react-icons/fa";
import Button from "@/components/Button";
import Faq from "@/components/Faq";
import ContactCTA from "@/components/ContactCTA";
import ScrollingLogos from "@/components/ScrollingLogos";

import { FaRobot, FaChartPie, FaBook, FaMagic, FaShareAlt, FaLightbulb } from 'react-icons/fa';
import { MdBuild } from "react-icons/md";
import { FaStore, FaUserCheck } from "react-icons/fa";
import Service from "@/components/ServiceCard";
import Link from "next/link";


const servicecarddata = [
    {
        title: "Agentforce Implementation Strategy ",
        desc: "AEKOT delivers a focused Salesforce Agentforce consulting approach that maps your processes, identifies automation opportunities, and builds a scalable rollout plan. Guided by an Agentforce integration expert, we manage configuration, data preparation, and deployment, ensuring a smooth, goal-aligned implementation that supports long-term service transformation.",
        img: "/images/serviceImages/strategy-and-advisory.webp",
    },
    {
        title: "Custom Workflow Engineering",
        desc: "Our team designs intelligent workflows using Salesforce Agentforce to streamline operations and eliminate inefficiencies. Through our Agentforce consulting services, we create automated routing, escalations, and task sequences tailored to your service model. Each workflow is integrated by an experienced Agentforce integration expert for reliable end-to-end performance.",
        img: "/images/serviceImages/Design-and-Development.webp",
    },
    {
        title: "Enterprise-Grade Integration Architecture",
        desc: "AEKOT builds secure, high-performance integration frameworks centered on Salesforce Agentforce. Our Salesforce Agentforce consulting services create unified data flows across CRMs, communication tools, analytics platforms, and external systems. An Agentforce integration expert ensures seamless connectivity, enabling better visibility, reduced redundancies, and stronger cross-department collaboration.",
        img: "/images/serviceImages/Advanced-AI-Capabilities.webp",
    },
    {
        title: "Conversational AI Development",
        desc: "We develop conversational AI powered by Salesforce Agentforce, including virtual assistants, automated chats, and intelligent self-service modules. Using our Agentforce consulting services, we design natural interaction flows while an Agentforce integration expert connects AI to your CRM and knowledge systems for a unified support experience.",
        img: "/images/serviceImages/Integration.webp",
    },
    {
        title: "Cloud Migration for Agentforce",
        desc: "AEKOT guides organizations through secure cloud migration into Salesforce Agentforce. Our Agentforce consulting services include planning, data preparation, and execution with minimal disruption. Supported by an Agentforce integration expert, we ensure platforms remain connected while optimizing your new environment for speed, scalability, and long-term service performance.",
        img: "/images/serviceImages/Customization.webp",
    },
    {
        title: "Quality Assurance & Optimization",
        desc: "We maintain peak system performance through continuous testing, tuning, and workflow evaluations. With our Salesforce Agentforce consulting expertise, we refine automation, data structures, and configurations. Each integration is validated by an Agentforce integration expert, ensuring stable operations and long-term service quality across your Agentforce ecosystem.",
        img: "/images/serviceImages/Automation.webp",
    },
    {
        title: "Continuous Support & Enhancement",
        desc: "AEKOT provides ongoing support to keep your Salesforce Agentforce environment evolving. Our Agentforce consulting services include updates, enhancements, performance checks, and strategic improvements. Backed by an Agentforce integration expert, we maintain reliable integrations and help your service operations adopt new features and expand automation over time.",
        img: "/images/serviceImages/Security-and-Compliance.webp",
    },
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

const agentforceFeatures = [
    {
        id: 1,
        title: 'AI-Powered Agent Assist',
        description:
            'AEKOT helps businesses leverage the intelligence of Salesforce Agentforce to empower agents with real-time guidance, automated recommendations, and contextual insights. Through our Agentforce consulting services, we design AI-powered workflows that reduce manual work and enable faster resolutions. Agents gain instant access to knowledge, customer history, and next best actions, ensuring consistent, high-quality service delivery. With support from an Agentforce integration expert, we ensure AI assistance is fully synchronized with your CRM, communication tools, and case systems. The result is enhanced accuracy, reduced handling time, and improved customer satisfaction across every interaction.',
        icon: '/icons/ai-assist.svg',
    },
    {
        id: 2,
        title: 'Data-Driven Customer Insights',
        description:
            'Our solutions capture interaction data across all channels, giving agents and leaders a unified view of customer behavior, sentiment, and needs. With our Agentforce consulting services, we build dashboards and reporting models that support smarter decision-making. Integrations handled by an Agentforce integration expert ensure these insights are available in real time, improving forecasting, service planning, and operational efficiency. Businesses achieve stronger customer relationships through personalized, data-informed support strategies.',
        icon: '/icons/data-insight.svg',
    },
    {
        id: 3,
        title: 'Unified Knowledge Engine',
        description:
            'Through a centralized knowledge ecosystem powered by Salesforce Agentforce, AEKOT helps businesses deliver faster, more accurate answers to customers and agents. Our Agentforce consulting services include building dynamic knowledge repositories that surface relevant articles, troubleshooting steps, and product information instantly. This unified system ensures consistent customer responses across channels. With support from our  certified Agentforce integration expert, we connect knowledge data with chatbots, portals, and agent consoles to streamline search and update processes. Companies benefit from reduced escalations, improved agent onboarding, and stronger self-service adoption.',
        icon: '/icons/knowledge.svg',
    },
    {
        id: 4,
        title: 'Scalable Process Automation',
        description:
            'AEKOT specializes in designing scalable automation frameworks using Salesforce Agentforce consulting to eliminate repetitive tasks and accelerate case management. Our automated workflows handle routing, classification, approvals, escalations, and notifications, dramatically reducing manual workload. With our Agentforce consulting services, businesses gain the flexibility to continuously optimize and expand automation as service demands evolve. Every process is built with precision and integrated by an Agentforce integration expert to ensure seamless performance across your existing tech stack. This scalable approach boosts efficiency, accuracy, and long-term operational resilience.',
        icon: '/icons/automation.svg',
    },
    {
        id: 5,
        title: 'Multi-System Agentforce Integration',
        description:
            'Our team ensures your technology ecosystem works in perfect harmony through robust integrations powered by Salesforce Agentforce. We connect CRMs, telephony platforms, knowledge systems, analytics tools, and third-party applications to create a unified service environment. With deep expertise in Salesforce Agentforce consulting, AEKOT builds secure data flows that improve visibility and reduce silos. Every integration is engineered by our  Agentforce integration expert to ensure reliability, scalability, and real-time synchronization. The result is seamless collaboration across systems, eliminating duplicate data, boosting agent productivity, and strengthening the quality of customer interactions.',
        icon: '/icons/integration.svg',
    },
    {
        id: 6,
        title: 'Proactive Customer Resolution Framework',
        description:
            'AEKOT helps organizations move from reactive to proactive service using Agentforce consulting services that predict customer needs before issues arise. Leveraging AI models and behavioral data from Salesforce Agentforce, we design early-warning systems, automated alerts, and proactive outreach workflows. Agents receive guidance on potential issues, enabling faster resolutions and improved customer loyalty. With integrations handled by our  Agentforce integration experts, these proactive systems operate seamlessly across email, chat, ticketing, and telephony. Businesses gain a competitive edge by resolving problems early and offering consistently better support experiences.',
        icon: '/icons/proactive.svg',
    },
]

const WhyChoose = [
    {
        id: 1,
        title: 'Extensive Industry Experience',
        text: `AEKOT brings years of hands-on experience implementing and optimizing Salesforce Agentforce for organizations across multiple industries. Our background in Salesforce Agentforce consulting allows us to understand diverse service challenges and build solutions that fit real-world workflows. From enterprise-scale operations to fast-growing teams, we apply proven best practices that ensure smooth adoption, stronger performance, and long-term success. Every project benefits from our strategic insights and practical implementation expertise.`,
        img: '/images/placeholder-724.png',
    },
    {
        id: 2,
        title: 'Global Delivery Framework',
        text: `With a globally distributed delivery model, AEKOT provides 24/7 support and implementation coverage for organizations operating across regions. Our Agentforce consulting services follow a disciplined framework that balances speed, quality, and scalability. By combining global talent with centralized oversight, we ensure consistent delivery standards and reliable project execution. Supported by an Agentforce integration expert team, businesses receive seamless deployments regardless of location or technical complexity.`,
        img: '/images/placeholder-724.png',
    },
    {
        id: 3,
        title: 'Flexible Engagement Models',
        text: `AEKOT offers adaptable engagement models that fit your unique operational needs—whether you require full-scale transformation, phased adoption, or dedicated consulting support. Our Salesforce Agentforce consulting team works closely with stakeholders to design the right approach for your timeline and budget. With flexibility at the center of our delivery philosophy, businesses can scale support, add capabilities, or modify priorities without disruption.`,
        img: '/images/placeholder-724.png',
    },
    {
        id: 4,
        title: 'Commitment to Client Success',
        text: `Our commitment extends beyond implementation—we support your organization with ongoing guidance, optimization, and proactive improvements. Through strategic Agentforce consulting services, we help ensure your platform continues delivering value as your service environment evolves. Every initiative is backed by accountability, transparency, and a results-driven mindset. With deep platform knowledge and strong customer focus, AEKOT becomes a long-term partner dedicated to your success.`,
        img: '/images/placeholder-724.png',
    },
    {
        id: 5,
        title: 'Deep Service Expertise',
        text: `AEKOT’s team excels in translating complex service requirements into powerful, automated solutions using Salesforce Agentforce. Our specialists blend technical mastery with real operational experience, delivering systems that enhance agent productivity and elevate customer experiences. Guided by certified Agentforce integration experts, we ensure every component—from workflows to data flows—works together flawlessly. This strong functional and technical expertise drives superior service performance for every client.`,
        img: '/images/placeholder-724.png',
    },
]

const faqs = [
    {
        question: "What is Salesforce Agentforce and how can it help my service team?",
        answer: "Salesforce Agentforce is an AI-driven platform designed to streamline customer service by automating tasks, guiding agents with real-time recommendations, and creating more personalized support experiences. With the right setup, it reduces manual work, speeds up resolutions, and gives your team better visibility into customer needs. AEKOT helps organizations unlock these benefits through strategic Salesforce Agentforce consulting and tailored implementations.",
    },
    {
        question: "How do AEKOT’s Agentforce consulting services work?",
        answer: "AEKOT begins by analyzing your current service processes, identifying gaps, and mapping out opportunities for automation and AI-driven improvements. Our Agentforce consulting services include planning, configuration, workflow engineering, and ongoing optimization. We work closely with your teams to ensure every feature aligns with your goals. The result is a smooth, guided transformation that strengthens productivity and customer satisfaction.",
    },
    {
        question: "Can Agentforce integrate with our existing tools and systems?",
        answer: "Yes. Salesforce Agentforce integrates with CRMs, telephony, chat tools, knowledge systems, analytics platforms, and third-party applications. AEKOT’s Agentforce integration expert team ensures secure, seamless connectivity so data flows accurately across systems. This eliminates silos, improves reporting, and creates a unified service environment where agents can access all information they need without switching tools constantly.",
    },
    {
        question: "How long does an Agentforce implementation usually take?",
        answer: "Implementation timelines vary depending on your goals, the number of workflows, required customizations, and integration complexity. Smaller deployments may take a few weeks, while enterprise-level projects can span several months. AEKOT follows a structured Salesforce Agentforce consulting approach that ensures predictable timelines, transparent planning, and minimal operational disruptions during rollout.",
    },
    {
        question: "Will our team need training to use Salesforce Agentforce effectively?",
        answer: "Yes. Agentforce introduces new tools, dashboards, and automated workflows, so training is essential. AEKOT provides hands-on workshops, documentation, and role-based guidance tailored to your agents, supervisors, and administrators. Our goal is to help your team feel confident using every feature, ensuring strong adoption and maximizing the return on your Agentforce investment.",
    },
    {
        question: "Can Agentforce automation replace human agents?",
        answer: "Agentforce isn’t built to replace agents—it’s designed to empower them. Automation handles repetitive tasks, organizes information, and provides intelligent suggestions, allowing your team to focus on complex, high-value interactions. With the right Salesforce Agentforce consulting, your agents gain tools that make their work easier, faster, and more accurate, ultimately improving both job satisfaction and customer experiences.",
    },
    {
        question: "Does AEKOT offer ongoing support after implementation?",
        answer: "Absolutely. AEKOT provides continuous support through monitoring, updates, optimization, and enhancements to ensure your Salesforce Agentforce environment evolves with your business. Our long-term engagement model includes performance checks, new feature rollouts, integration maintenance, and strategic guidance. We stay connected even after deployment to ensure lasting value from your investment.",
    },
    {
        question: "Does Salesforce Agentforce support omnichannel service operations?",
        answer: "Yes. Salesforce Agentforce connects email, chat, voice, social media, self-service, and other channels to create a unified customer journey. With omnichannel routing and real-time insights, your team can deliver consistent, personalized service across every touchpoint. AEKOT helps configure and optimize these channels to ensure a smooth, integrated experience for both agents and customers.",
    },
    {
        question: "How secure is Salesforce Agentforce for enterprise-level operations",
        answer: "Salesforce Agentforce uses robust enterprise-grade security principles including encryption, multi-factor authentication, permission controls, and strict compliance standards. AEKOT ensures your setup follows best practices for data protection and regulatory requirements. We also evaluate integrations and workflows to maintain a secure, stable environment as your service operations grow.",
    },
    {
        question: "Can AEKOT customize workflows to match our unique processes?",
        answer: "Yes. Every organization has its own service structure, and AEKOT specializes in customizing workflows that fit your exact needs. Through Salesforce Agentforce consulting, we design automation rules, routing logic, escalation paths, and AI-driven recommendations tailored to your processes. This ensures your service operations become more efficient without forcing you to change the way your team works.",
    },
    {
        question: "Does Agentforce offer advanced reporting and customer insights?",
        answer: "Yes. Agentforce provides detailed analytics, performance dashboards, and predictive insights that help leaders make data-driven decisions. You can track customer behavior, service trends, agent performance, and workflow efficiency in real time. AEKOT configures these dashboards to match your KPIs, ensuring you gain meaningful visibility into every part of your service operations.",
    },
    {
        question: "What makes AEKOT different from other Agentforce consulting partners?",
        answer: "AEKOT combines deep technical expertise with practical service-operations experience. Our team includes certified specialists and seasoned Agentforce integration experts who deliver high-quality, scalable solutions. We prioritize clarity, collaboration, and measurable results. Unlike generic consultants, we tailor every workflow, integration, and automation specifically to your business, ensuring long-term value and consistent service excellence.",
    },

];
export const metadata = {
    title: "Salesforce Agentforce Consulting Services | Aekot",
    description: "Unlock the full potential of Salesforce Agentforce with Aekot. We provide strategy, deployment, AI integration, customization, automation, and 24/7 support to help your business grow.",
    keywords: [
        "Salesforce Agentforce consulting",
        "Salesforce consulting services",
        "Agentforce AI integration",
        "Salesforce implementation",
        "CRM automation",
        "AI service agents",
        "Salesforce training",
        "Managed Salesforce services"
    ],
    canonical: "https://www.aekot.com/services/agentforce-consulting-services",
    openGraph: {
        title: "Salesforce Agentforce Consulting Services | Aekot",
        description: "Partner with Aekot for expert Salesforce Agentforce consulting. We design, deploy, integrate, and manage AI-powered service agents to boost your business efficiency.",
        url: "https://www.aekot.com/services/agentforce-consulting-services",
        siteName: "Aekot",
        locale: "en_IN",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Salesforce Agentforce Consulting Services | Aekot",
        description: "Leverage AI-powered Salesforce Agentforce with Aekot. Expert consulting, strategy, automation, training, and 24/7 support for businesses."
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
                        <span className="text-[#e52b50]">Crafting </span> Salesforce{" "}
                    </h1>
                    <h4 className="text-gray-900 mt-4 font-extrabold text-2xl  leading-relaxed">Accelerate Customer Service Excellence with Salesforce Agentforce
                    </h4>
                    <p className="text-gray-600 mt-4 leading-relaxed">
                        Transform your service operations with intelligent Salesforce Agentforce solutions designed to enhance productivity, automate support tasks, and deliver exceptional customer experiences.
                    </p>

                    <div className="mt-6 flex justify-center md:justify-start">
                        <Button text="Get Started" path="/contact" />
                    </div>
                </div>

                {/* Right Image */}
                <div className="mt-10 md:mt-0 md:ml-10 flex justify-center">
                    <img
                        src="/images/serviceImages/Salesforce-Agentforce.webp"
                        alt="Salesforce Agentforce consulting services"
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

                        <p className="text-md text-gray-800 text-left">
                            AEKOT equips organizations to transform service delivery workflow execution with modern Salesforce Agentforce features that transform the way support and customer-facing teams work. We provide intelligent automation, smarter workflows, and linked service experiences in our Agentforce consulting services to promote efficiency and customer satisfaction. We assist businesses in ensuring that Agentforce is integrated and scaled without inconvenience and all functions are relevant to actual business requirements and quantifiable results.
                        </p>

                        <p className="text-md text-gray-800 text-left">
                            AEKOT will give your teams more resolutions, smarter interactions, and service excellence.
                        </p>

                        <p className="text-md text-gray-800 text-left">
                            <strong>Core Agentforce Capabilities That Power Your Service Transformation</strong>
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
                                    <h3 className="font-bold xs:text-1xl text-1xl  md:text-1xl lg:text-2xl">AI Automation & Smart Agent Enablement</h3>
                                    <p className="mt-4">AEKOT helps organizations streamline service operations using AI-driven automation powered by Salesforce Agentforce. Our Agentforce consulting services are designed to enhance agent performance through predictive recommendations, automated case handling, and structured workflows that eliminate inefficiencies. By integrating Agentforce across your support systems, we enable faster responses and more accurate resolutions. Supported by our  Agentforce  experts, our solutions ensure centralized data, connected processes, and smarter engagement—giving your agents the tools they need to deliver consistently exceptional service.</p>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h3 className="font-bold xs:text-1xl text-1xl  md:text-1xl lg:text-2xl">Omnichannel Engagement & Connected Service Journeys</h3>
                                    <p className="mt-4">Our specialized Salesforce Agentforce consulting services help businesses build seamless customer journeys across chat, email, social, voice, and self-service channels. AEKOT focuses on creating unified interaction experiences powered by Agentforce intelligence, enabling personalized engagement at every touchpoint. Using advanced AI insights, we help your teams provide proactive and consistent support. With guidance from our certified Salesforce and Agentforce integration experts, we ensure every channel is synchronized, every interaction is informed, and every service moment reflects your brand’s commitment to customer satisfaction.</p>
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
                            Transform Your Support Operations with Salesforce Agentforce
                        </h3>
                        <p>AEKOT empowers customer service teams with Salesforce Agentforce solutions that streamline workflows, enhance automation, and create intelligent, data-driven support operations.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {agentforceFeatures.map((item) => (
                            <div
                                key={item.id}
                                className="p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition duration-300 bg-white"
                            >
                                <div className="w-16 h-16 mb-5 text-primary text-5xl">
                                    {item.id === 1 && <FaRobot />}
                                    {item.id === 2 && <FaChartPie />}
                                    {item.id === 3 && <FaBook />}
                                    {item.id === 4 && <FaMagic />}
                                    {item.id === 5 && <FaShareAlt />}
                                    {item.id === 6 && <FaLightbulb />}
                                </div>


                                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
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
                            <span className="text-[#e52b50]">Our Specialized Agentforce Consulting Services</span>
                        </h2>
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
                        Why AEKOT for Salesforce Agentforce
                    </h2>
                    <h3 className="font-bold xs:text-1xl text-1xl  md:text-1xl lg:text-2xl">
                        Why Businesses Choose AEKOT for Salesforce Agentforce Success
                    </h3>
                    <p className="text-sm xs:text-xl sm:text-xl  md:text-base">
                        AEKOT is a trusted partner for businesses looking to modernize service operations with Salesforce Agentforce. We blend strategic insight with tailored implementations to simplify processes and enhance customer experiences. Through our Agentforce consulting services, we design practical solutions that improve efficiency and reduce complexity. Our Salesforce Agentforce consulting experts ensure every workflow, automation, and integration supports your long-term service goals. Backed by skilled Agentforce integration specialists, we create connected service ecosystems that help agents work smarter, and customers receive faster, more consistent support. AEKOT delivers dependable innovation built for growth.
                    </p><br /><br />
                </div>

                <div className="space-y-16">
                    {WhyChoose.map((s, idx) => {
                        const isReversed = idx % 2 === 1
                        return (
                            <article
                                key={s.id}
                                className={`flex flex-col md:flex-row ${isReversed ? 'md:flex-row-reverse' : ''} items-center gap-8`}
                            >
                                {/* Image column */}
                                <div className="w-full md:w-1/2 flex-shrink-0">
                                    {/* Use next/image for automatic optimization. Replace srcs or add images to /public/images */}
                                    <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                                        <img
                                            src={s.img}
                                            alt={s.title}
                                            className="object-cover"
                                            priority={idx < 2}
                                        />
                                    </div>
                                </div>


                                {/* Content column */}
                                <div className="w-full md:w-1/2">
                                    <div className="bg-white rounded-2xl">
                                        <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4">{`0${s.id}`}</span>
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">{s.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{s.text}</p>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
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
