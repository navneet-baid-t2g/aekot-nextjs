import Button from "@/components/Button";
import Faq from "@/components/Faq";
import ContactCTA from "@/components/ContactCTA";

import { FaRobot, FaChartPie, FaBook, FaMagic, FaShareAlt, FaLightbulb, FaLongArrowAltRight } from 'react-icons/fa';
import ScrollingLogos from "@/components/ScrollingLogos";
import WhyAekot from "@/components/agentforce-consulting-components/why-aekot/WhyAekot";
import SpecializedServices from "@/components/agentforce-consulting-components/specialized-services/SpecializedServices";
import ServiceBanner from "@/components/agentforce-consulting-components/service-banner/ServiceBanner";
import ExpertServices from "@/components/agentforce-consulting-components/expert-services/ExpertServices";
import Link from "next/link";


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
            'AEKOT helps businesses leverage the intelligence of <strong>Salesforce Agentforce</strong> to empower agents with real-time guidance, automated recommendations, and contextual insights. Through our <strong>Agentforce consulting services</strong>, we design AI-powered workflows that reduce manual work and enable faster resolutions. Agents gain instant access to knowledge, customer history, and next best actions, ensuring consistent, high-quality service delivery. With support from an <strong>Agentforce integration expert</strong>, we ensure AI assistance is fully synchronized with your CRM, communication tools, and case systems. The result is enhanced accuracy, reduced handling time, and improved customer satisfaction across every interaction.',
        icon: '/icons/ai-assist.svg',
    },
    {
        id: 2,
        title: 'Data-Driven Customer Insights',
        description:
            'Our solutions capture interaction data across all channels, giving agents and leaders a unified view of customer behavior, sentiment, and needs. With our <strong>Agentforce consulting services</strong>, we build dashboards and reporting models that support smarter decision-making. Integrations handled by an <strong>Agentforce integration expert</strong> ensure these insights are available in real time, improving forecasting, service planning, and operational efficiency. Businesses achieve stronger customer relationships through personalized, data-informed support strategies.',
        icon: '/icons/data-insight.svg',
    },
    {
        id: 3,
        title: 'Unified Knowledge Engine',
        description:
            'Through a centralized knowledge ecosystem powered by <strong>Salesforce Agentforce</strong>, AEKOT helps businesses deliver faster, more accurate answers to customers and agents. Our <strong>Agentforce consulting services</strong> include building dynamic knowledge repositories that surface relevant articles, troubleshooting steps, and product information instantly. This unified system ensures consistent customer responses across channels. With support from our  certified <strong>Agentforce integration expert</strong>, we connect knowledge data with chatbots, portals, and agent consoles to streamline search and update processes. Companies benefit from reduced escalations, improved agent onboarding, and stronger self-service adoption.',
        icon: '/icons/knowledge.svg',
    },
    {
        id: 4,
        title: 'Scalable Process Automation',
        description:
            'AEKOT specializes in designing scalable automation frameworks using <strong>Salesforce Agentforce consulting</strong> to eliminate repetitive tasks and accelerate case management. Our automated workflows handle routing, classification, approvals, escalations, and notifications, dramatically reducing manual workload. With our <strong>Agentforce consulting services</strong>, businesses gain the flexibility to continuously optimize and expand automation as service demands evolve. Every process is built with precision and integrated by an <strong>Agentforce integration expert</strong> to ensure seamless performance across your existing tech stack. This scalable approach boosts efficiency, accuracy, and long-term operational resilience.',
        icon: '/icons/automation.svg',
    },
    {
        id: 5,
        title: 'Multi-System Agentforce Integration',
        description:
            'Our team ensures your technology ecosystem works in perfect harmony through robust integrations powered by <strong>Salesforce Agentforce</strong>. We connect CRMs, telephony platforms, knowledge systems, analytics tools, and third-party applications to create a unified service environment. With deep expertise in <strong>Salesforce Agentforce consulting</strong>, AEKOT builds secure data flows that improve visibility and reduce silos. Every integration is engineered by our  <strong>Agentforce integration expert</strong> to ensure reliability, scalability, and real-time synchronization. The result is seamless collaboration across systems, eliminating duplicate data, boosting agent productivity, and strengthening the quality of customer interactions.',
        icon: '/icons/integration.svg',
    },
    {
        id: 6,
        title: 'Proactive Customer Resolution Framework',
        description:
            'AEKOT helps organizations move from reactive to proactive service using <strong>Agentforce consulting services</strong> that predict customer needs before issues arise. Leveraging AI models and behavioral data from <strong>Salesforce Agentforce</strong>, we design early-warning systems, automated alerts, and proactive outreach workflows. Agents receive guidance on potential issues, enabling faster resolutions and improved customer loyalty. With integrations handled by our  <strong>Agentforce integration</strong> experts, these proactive systems operate seamlessly across email, chat, ticketing, and telephony. Businesses gain a competitive edge by resolving problems early and offering consistently better support experiences.',
        icon: '/icons/proactive.svg',
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

            <ServiceBanner />


            <section className="py-16 relative bg-gradient-to-b from-white via-red-100 to-white px-8 md:px-20 ">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                    {/* Left Content */}
                    <div className="flex flex-col space-y-6 md:w-2/3">
                        <h2 className="text-3xl md:text-4xl font-bold text-left text-primary">
                            Driving business success through Salesforce
                        </h2>

                        <p className="text-md text-gray-800 text-left">
                            AEKOT equips organizations to transform workflow execution with modern Salesforce Agentforce features that transform the way support and customer-facing teams work. We provide intelligent automation, smarter workflows, and linked service experiences in our Agentforce consulting services to promote efficiency and customer satisfaction. We assist businesses in ensuring that Agentforce is integrated and scaled without inconvenience and all functions are relevant to actual business requirements and quantifiable results.
                        </p>

                        <p className="text-md text-gray-800 text-left">
                            AEKOT will give your teams more resolutions, smarter interactions, and service excellence.
                        </p>

                        <p className="text-md text-gray-800 text-left">
                            <strong>Core Agentforce Capabilities That Power Your Service Transformation</strong>
                        </p>

                    </div>
                    <div className="relative h-[400px] sm:h-[102px] w-1/3 sm:w-full overflow-hidden flex justify-end mt-12 md:mt-0">
                        <ScrollingLogos />
                    </div>
                </div>


            </section>

            <section className="py-16 relative px-8 md:px-20 ">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                    {/* Left Content */}
                    <div className="flex flex-col space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-left text-primary">
                            Transforming Customer Experience with Agentforce Intelligence
                        </h2>


                        <div className="space-y-16">
                            <div className="flex flex-col md:flex-row gap-5">
                                <div className="w-full md:w-1/2 flex-shrink-0">
                                    <h3 className="font-bold xs:text-1xl text-1xl  md:text-1xl lg:text-2xl">AI Automation & Smart Agent Enablement</h3>
                                    <p className="mt-4">AEKOT helps organizations streamline service operations using AI-driven automation powered by <strong>Salesforce Agentforce</strong>. Our <strong>Agentforce consulting services</strong> are designed to enhance agent performance through predictive recommendations, automated case handling, and structured workflows that eliminate inefficiencies. By integrating Agentforce across your support systems, we enable faster responses and more accurate resolutions. Supported by our <strong>Agentforce experts</strong>, our solutions ensure centralized data, connected processes, and smarter engagement-giving your agents the tools they need to deliver consistently exceptional service.</p>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h3 className="font-bold xs:text-1xl text-1xl  md:text-1xl lg:text-2xl">Omnichannel Engagement & Connected Service Journeys</h3>
                                    <p className="mt-4">Our specialized <strong>Salesforce Agentforce consulting</strong> services help businesses build seamless customer journeys across chat, email, social, voice, and self-service channels. AEKOT focuses on creating unified interaction experiences powered by Agentforce intelligence, enabling personalized engagement at every touchpoint. Using advanced AI insights, we help your teams provide proactive and consistent support. With guidance from our certified Salesforce and <strong>Agentforce integration experts</strong>, we ensure every channel is synchronized, every interaction is informed, and every service moment reflects your brand’s commitment to customer satisfaction.</p>
                                </div>
                            </div></div>

                    </div>
                </div>
            </section>

            <ExpertServices agentforceFeatures={agentforceFeatures} />

            <ContactCTA heading="Looking for Expert Salesforce Developers?" />

            <SpecializedServices />

            <ContactCTA heading="Looking for Expert Salesforce Developers?" />

            <WhyAekot />

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
                        <Link
                            href="/contact"
                            className="ghost-button inline-block w-5/6 sm:w-32 md:w-32 lg:w-32 xl:w-44 py-2 pl-2 ml-2 font-semibold text-center text-light border-2 border-primary bg-primary hover:bg-primary/90 rounded-md transition-colors"
                        >
                            Contact Us <FaLongArrowAltRight className="inline-block fa-arrow-right-long text-xs" />
                        </Link>
                    </div>


                </div>
            </section>
            {/* Call to Action */}

        </>
    );
}
