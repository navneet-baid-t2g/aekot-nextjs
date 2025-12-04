import Button from "@/components/Button";
import Faq from "@/components/Faq";
import ContactCTA from "@/components/ContactCTA";

import { FaRobot, FaSitemap, FaCogs, FaDatabase, FaUsersCog, FaCloud, FaNetworkWired } from 'react-icons/fa';


const servicecarddata = [
    {
        title: "Cloud Advisory & Digital Roadmapping",
        desc: "AEKOT guides enterprises through Salesforce transformation with tailored digital roadmaps. We define goals, reduce risks, and create a scalable modernization journey that accelerates cloud adoption and long-term innovation.",
        img: "/images/serviceImages/strategy-and-advisory.webp",
    },
    {
        title: "Custom App Development Excellence",
        desc: "We build custom Salesforce applications that solve enterprise challenges and enhance productivity. Our solutions fit seamlessly into your ecosystem, improving efficiency, scalability, and workflow performance across departments.",
        img: "/images/serviceImages/Design-and-Development.webp",
    },
    {
        title: "Advanced Analytics & Insight Delivery",
        desc: "AEKOT delivers analytics solutions that enhance forecasting, intelligence, and real-time decision-making. We improve segmentation, campaign analytics, and data visibility, helping enterprises uncover opportunities and drive sustained growth.",
        img: "/images/serviceImages/Advanced-AI-Capabilities.webp",
    },
    {
        title: "CRM Optimization & Adoption Programs",
        desc: "We improve Salesforce adoption with training, workflow enhancements, and user-focused optimization. AEKOT streamlines processes, reduces friction, and empowers employees to fully leverage Salesforce for better productivity and collaboration.",
        img: "/images/serviceImages/Integration.webp",
    },
    {
        title: "Performance Measurement & Continuous Improvement",
        desc: "AEKOT monitors key metrics and implements continuous enhancements to keep Salesforce aligned with business goals. We ensure your ecosystem evolves with market needs while maintaining speed, reliability, and high performance.",
        img: "/images/serviceImages/Customization.webp",
    },
    {
        title: "Multi-Cloud Expansion Strategy",
        desc: "We support enterprises expanding into new Salesforce clouds through structured, scalable strategies. AEKOT aligns data, processes, and user experiences, improving visibility, collaboration, and governance across multi-cloud environments.",
        img: "/images/serviceImages/Automation.webp",
    },
    {
        title: "Innovation-Driven Technology Enablement",
        desc: "AEKOT helps enterprises adopt AI, automation, and advanced Salesforce technologies confidently. We enhance personalization, agility, and engagement, creating a future-ready environment that supports continuous innovation.",
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

const agentforceFeatures = [
    {
        id: 1,
        title: 'Salesforce Architecture Planning',
        description:
            'AEKOT builds robust <strong>Salesforce architectures designed for enterprise</strong> scalability, system resilience, and data intelligence. Our experts analyze existing workflows, identify gaps, and craft a future-proof blueprint tailored to your business goals. We ensure a seamless foundation for growth, modernize legacy systems, and deliver architectures that support innovation and long-term performance excellence.',
        icon: 'FaSitemap',
    },
    {
        id: 2,
        title: 'Enterprise-Grade Implementation Approach',
        description:
            'Our implementation framework blends strategic planning, agile execution, and continuous optimization to help enterprises achieve faster time-to-value.  We ensure that every deployment aligns with business KPIs, user expectations, and operational demands. We tailor configurations, automate workflows, and drive adoption through structured enablement programs. The result is a scalable, efficient, and compliant Salesforce ecosystem ready to support your enterprise’s evolving needs and digital transformation goals.',
        icon: 'FaCogs',
    },
    {
        id: 3,
        title: 'Intelligent Data & Automation Solutions',
        description:
            'We elevate enterprise productivity with intelligent automation and advanced data strategies. AEKOT designs automated workflows, smart validation processes, and AI-driven business rules that reduce manual tasks and improve decision-making. We ensure accurate data movement across systems, eliminating silos and improving visibility. These capabilities give enterprises the power to accelerate performance, minimize errors, and leverage actionable insights to enhance customer engagement and operational efficiency.',
        icon: 'FaDatabase',
    },
    {
        id: 4,
        title: 'Customer-Centric Optimization Framework',
        description:
            'AEKOT helps enterprises maximize user adoption and customer satisfaction through a proven optimization framework. We analyze your Salesforce usage patterns, uncover friction points, and design enhancements that improve user experience and cross-functional collaboration. Guided by expert Salesforce consultants, we align your CRM and marketing operations for stronger engagement. Our optimization approach ensures your teams work smarter, deliver faster, and achieve measurable improvements in customer performance and retention.',
        icon: 'FaUsersCog',
    },
    {
        id: 5,
        title: 'Cross-Cloud Expertise & Governance',
        description:
            'Enterprises operating across multiple Salesforce Clouds require governance, alignment, and performance consistency. AEKOT provides structured frameworks that bring order to complex environments. Leveraging our <strong>Salesforce consulting services for enterprises</strong>, we unify processes, security models, and data strategies across Sales, Service, Marketing, and Experience Clouds. Our governance approach ensures compliance, reduces risks, and empowers teams with standardized best practices. We help you manage complexity while enabling long-term operational stability.',
        icon: 'FaCloud',
    },
    {
        id: 6,
        title: 'Seamless Integration & Scalability Engineering',
        description:
            'Scalable integrations are essential to enterprise performance. AEKOT’s engineering specialists build secure, flexible, and high-performing integration solutions suited for dynamic business needs.  With deep skills in integrations, we connect Salesforce with ERPs, financial systems, analytics tools, and custom applications. Our scalable architecture ensures faster processing, accurate data flow, and minimal downtime. As your enterprise evolves, these integrations grow with you, supporting future expansion and ongoing digital transformation.',
        icon: 'FaNetworkWired',
    }
];

const WhyChoose = [
    {
        id: 1,
        title: 'Proven Enterprise Experience',
        text: `With years of hands-on expertise across industries, AEKOT brings deep understanding to every Salesforce engagement. Our specialists leverage insights from <strong>Salesforce consulting services for enterprises</strong> to craft strategies that solve complex challenges. From large-scale transformations to focused optimization projects, our experience enables us to anticipate risks early, streamline execution, and ensure your Salesforce environment supports long-term growth and operational excellence.`,
        img: '/images/placeholder-724.png',
    },
    {
        id: 2,
        title: 'Global Delivery Capability',
        text: `AEKOT’s global service delivery model ensures consistent execution, flexible engagement options, and round-the-clock project continuity. Our experts deliver scalable solutions that meet enterprise standards across geographies. Our global presence enables rapid deployment, multi-region support, and seamless coordination — ensuring your Salesforce initiatives run smoothly no matter where your operations are located.`,
        img: '/images/placeholder-724.png',
    },
    {
        id: 3,
        title: 'Flexible & Adaptive Engagement Models',
        text: `Every enterprise is unique, which is why AEKOT offers adaptive engagement models designed for evolving needs. Whether you require dedicated teams, outcome-based delivery, or agile support, we tailor our approach to your environment. With strong capabilities in <strong>Agentforce integration expert</strong> practices, we ensure efficient collaboration, transparent communication, and solution designs that adapt as your business scales.`,
        img: '/images/placeholder-724.png',
    },
    {
        id: 4,
        title: 'Commitment to Long-Term Success',
        text: `We view every project as a long-term partnership. AEKOT is committed to ongoing success through continuous optimization, proactive improvements, and knowledge-sharing initiatives. Our teams work closely with your stakeholders, ensuring sustained adoption and platform excellence. We help your enterprise maintain momentum and stay competitive.`,
        img: '/images/placeholder-724.png',
    },
    {
        id: 5,
        title: 'Industry-Focused Service Expertise',
        text: `AEKOT brings specialized domain knowledge across industries such as healthcare, finance, retail, manufacturing, and technology. Our cross-sector insights inform solution design, allowing us to build Salesforce environments tailored to regulatory, operational, and customer needs. With broad skills in <strong>Salesforce consulting services for enterprises</strong>, we deliver industry-ready configurations, integrations, and workflows that elevate performance and support digital advancement.`,
        img: '/images/placeholder-724.png',
    }
];

const faqs = [
    {
        question: "What makes AEKOT’s Salesforce consulting approach different from others?",
        answer: "AEKOT combines strategic planning, enterprise-focused delivery, and deep platform expertise to create solutions that are both scalable and future-ready. Our approach blends business insight with technical precision, allowing us to deliver high-impact outcomes through <strong>Salesforce consulting services for enterprises.</strong>",
    },
    {
        question: "How does AEKOT support complex Salesforce integrations?",
        answer: "We specialize in designing secure, scalable, and high-performance integrations. AEKOT connects Salesforce with ERPs, financial systems, data warehouses, marketing platforms, and custom applications to ensure seamless data flow and operational efficiency.",
    },
    {
        question: "Can AEKOT help with Salesforce Marketing Cloud implementation?",
        answer: "Yes. Our team includes an <strong>expert Salesforce Marketing Cloud consultant</strong> who helps organizations build effective customer journeys, automate campaigns, integrate audience data, and enhance engagement across digital channels for measurable marketing success.",
    },
    {
        question: "Do you offer consulting for enterprise-scale Salesforce deployments?",
        answer: "Absolutely. AEKOT provides full lifecycle <strong>Salesforce consulting services for enterprises</strong>, covering architecture design, implementation, optimization, governance, and multi-cloud expansion. We tailor solutions to the complexity and scale of large organizations.",
    },
    {
        question: "How does AEKOT ensure successful Salesforce adoption?",
        answer: "We focus on process alignment, user enablement, and customized training programs. Our adoption strategies address user challenges, simplify workflows, and improve system usability, ensuring long-term success and high engagement across teams.",
    },
    {
        question: "Can AEKOT support our global teams across multiple regions?",
        answer: "Yes. Our global delivery model allows us to support enterprises with distributed operations. We offer region-specific expertise, continuous collaboration, and consistent execution standards to maintain alignment across all locations.",
    },
    {
        question: "What industries does AEKOT specialize in?",
        answer: "AEKOT works across several industries, including healthcare, retail, finance, technology, and manufacturing. Our domain expertise ensures Salesforce configurations, integrations, and workflows align with industry-specific regulations and operational requirements.",
    },
    {
        question: "Do you offer post-implementation support and maintenance?",
        answer: "Yes. AEKOT provides ongoing support, performance monitoring, system enhancements, and proactive improvements to ensure your Salesforce environment stays optimized as business needs evolve.",
    },
    {
        question: "How long does a typical Salesforce project take?",
        answer: "Project timelines vary based on complexity, requirements, and integration needs. Smaller implementations may take weeks, while enterprise-level, multi-cloud initiatives may require several months. AEKOT ensures transparent planning and predictable delivery.",
    },
    {
        question: "Can you assist with data migration to Salesforce?",
        answer: "Absolutely. We handle data mapping, cleansing, validation, and secure migration. Using best practices supported by our experience, we ensure accuracy, integrity, and minimal disruption during the transition.",
    },
    {
        question: "Do you offer custom development on the Salesforce platform?",
        answer: "Yes. AEKOT builds custom applications, automation frameworks, Lightning components, and integrations tailored to your unique business needs. Our development ensures scalability, maintainability, and alignment with enterprise standards.",
    },
    {
        question: "How can we get started with AEKOT’s Salesforce consulting services?",
        answer: "Simply reach out to our team for a consultation. We’ll assess your current challenges, define goals, and recommend a roadmap that fits your enterprise needs, supported by experts in integration, optimization, and Salesforce strategy.",
    },
];

export const metadata = {
    title: "Salesforce Consulting Services | Aekot",
    description: "Maximize your business potential with Aekot&apos;s Salesforce Consulting Services. We provide strategy, implementation, customization, integration, AI-driven automation, and ongoing support to help businesses scale efficiently.",
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
    canonical: "https://www.aekot.com/services/salesforce-consulting-services",
    openGraph: {
        title: "Salesforce Consulting Services | Aekot",
        description: "Partner with Aekot for expert Salesforce consulting. Our services include strategy, app development, implementation, data migration, integration, customization, and ongoing support to maximize ROI.",
        url: "https://www.aekot.com/services/salesforce-consulting-services",
        siteName: "Aekot",
        locale: "en_IN",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Salesforce Consulting Services | Aekot",
        description: "Unlock your business potential with Aekot&apos;s Salesforce Consulting Services. From implementation to AI automation and ongoing support, we help businesses scale efficiently.",
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
                    <h4 className="text-gray-900 mt-4 font-extrabold text-2xl  leading-relaxed"> Salesforce Consulting & Strategy Excellence
                    </h4>
                    <p className="text-gray-600 mt-4 leading-relaxed">
                        <strong>Reimagining Enterprise Success with Salesforce Expertise</strong><br />
                        Turn your company around with smart Salesforce solutions, fully integrated offerings, and consulting services led by experts to drive rapid growth, productivity, and customer experience.
                    </p>
                    <p className="text-gray-600 mt-4 leading-relaxed">
                        <strong>Robust Solutions for Businesses</strong><br />
                        AEKOT provides robust, full-spectrum Salesforce transformation by means of a strategic combination of innovation, experience, and profound cloud knowledge.
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

            <section className="py-16 relative px-8 md:px-20 ">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                    {/* Left Content */}
                    <div className="flex flex-col space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-left text-primary">
                            Transforming Care with Healthcloud
                        </h2>
                        <h3 className="font-bold xs:text-1xl text-1xl  md:text-1xl lg:text-2xl text-primary">Key Salesforce Advantages for Modern Enterprises</h3>


                        <div className="space-y-16">
                            <div className="flex flex-col md:flex-row gap-5">
                                <div className="w-full md:w-1/2 flex-shrink-0">
                                    <h3 className="font-bold xs:text-1xl text-1xl  md:text-1xl lg:text-2xl">Strategic Salesforce Transformation Support </h3>
                                    <p className="mt-4">AEKOT provides strategic consulting that empowers enterprises to rethink how they use Salesforce across their organization. Our specialists combine platform intelligence with business-focused insights to craft transformation plans that simplify processes, enhance automation, and maximize ROI.. From initial assessments to long-term optimization, our strategic guidance ensures you extract maximum value from your Salesforce ecosystem.</p>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h3 className="font-bold xs:text-1xl text-1xl  md:text-1xl lg:text-2xl">Enterprise Integration & Optimization Excellence </h3>
                                    <p className="mt-4">Our integration-led approach ensures your Salesforce environment works seamlessly with existing enterprise systems. AEKOT’s <strong>Salesforce consulting services for enterprises</strong> enable organizations to achieve operational fluidity, unify customer insights, and accelerate decision-making for faster business outcomes.</p>
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
                            Comprehensive Salesforce Capabilities for Enterprise Growth
                        </h3>
                        <p>Our Salesforce capabilities empower enterprises to streamline operations, enhance customer experiences, and scale efficiently through strategic guidance and advanced platform expertise.</p><br />
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
                        Why choose Aekot for Salesforce consulting services?
                    </h2>
                    <h3 className="font-bold xs:text-1xl text-1xl  md:text-1xl lg:text-2xl">
                        Our Value-Driven Salesforce Delivery Framework
                    </h3>
                    <p className="text-sm xs:text-xl sm:text-xl  md:text-base">
                        AEKOT’s value delivery framework empowers enterprises with predictable outcomes, scalability, and measurable impact. With expertise in Salesforce consulting services for enterprises, Salesforce consulting, and integration expert solutions, we optimize performance, unify experiences, modernize systems, and support multi-cloud growth, ensuring every Salesforce initiative aligns with your long-term digital vision and delivers sustained value.
                    </p><br />
                    <h3 className="font-bold xs:text-1xl text-1xl  md:text-1xl lg:text-2xl">
                        Five Value Pillars
                    </h3>
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
