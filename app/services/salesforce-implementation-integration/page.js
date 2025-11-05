import { FaArrowRight } from "react-icons/fa";
import Button from "@/components/Button";
import Faq from "@/components/Faq";
import ContactCTA from "@/components/ContactCTA";
import ScrollingLogos from "@/components/ScrollingLogos";

import {

    FaCloud,
    FaHandshake,
    FaTools,
    FaUserShield,
    FaLayerGroup,
    FaChartLine,
    FaServer,
    FaRegLightbulb,
    FaClipboardList,
    FaNetworkWired,
    FaBriefcase,
    FaTasks,
    FaChartBar,
    FaUsers,
    FaCogs,
    FaRocket,
    FaLaptopCode,
    FaChalkboardTeacher,
} from "react-icons/fa";

import Service from "@/components/ServiceCard";
import Link from "next/link";
const certificationImages = [
    { src: "/images/Certifications/C22.png" },
    { src: "/images/Certifications/C23.png" },
    { src: "/images/Certifications/C8.png" },
];

const servicecarddata = [
    {
        title: "Provide Consultation and Services",
        desc: "We analyse what are the requirements for the implementation of a Salesforce solution that will support your business processes and objectives through expert <a href='/' class='text-primary'>Salesforce CRM consulting.</a>",
        img: "/images/serviceImages/Provide Consultation and Services.png",
    },
    {
        title: "Do Configuration and Customisation",
        desc: "We will install Sales, Services, Marketing and Commerce clouds according to your needs. Our team will create Custom objects, work processes, dashboards and reports to match your business model.",
        img: "/images/serviceImages/Do Configuration and Customisation.png",
    },
    {
        title: "Data Migration",
        desc: "We will transfer data safely and accurately into Salesforce from previous systems. We make sure that the data is clean so it doesn&apos;t give errors and is reliable for stability.",
        img: "/images/serviceImages/Data Migration.png",
    },
    {
        title: "Train Users and help in Adoption",
        desc: "We would provide Salesforce implementation services training to your teams and users with full training sessions and guides to help them understand and use Salesforce easily and stay efficient as the business grows.",
        img: "/images/serviceImages/Train Users and help in Adoption.png",
    },
    {
        title: "Support & Maintenance",
        desc: "Once the solutions are implemented, we will continue to monitor and give support after that as well. Our team of certified salesforce implementation service experts will regularly update and improve the efficiency of your business.",
        img: "/images/serviceImages/Support & Maintenance.png",
    },
];

const servicecardintdata = [
    {
        title: "Integration ERP systems",
        desc: "In this, we connect Enterprise Resource Planning (ERP) systems with CRM, eCommerce, etc. to unify data and make processes like inventory, finance and supply chain management automatic. It reduces data silos and enters data manually which helps to decrease errors.",
        img: "/images/serviceImages/Integration ERP Systems.png",
    },
    {
        title: "Integrating automated marketing platforms",
        desc: "We link marketing platforms like Marketing Cloud, HubSpot, Marketo, etc. with CRM, ERP and social media. This helps in tracking revenue and performance of campaigns. It also syncs lead data and automates tasks like sending follow up emails.",
        img: "/images/serviceImages/Integrating automated marketing platforms.png",
    },
    {
        title: "Integrating tools for Customer Support",
        desc: "By connecting customer support tools like Service Cloud, Zendesk, ServiceNow, Freshdesk, etc. with communication platforms to bring all customer data together. With this you can create tickets automatically, respond to your customer quickly and find out any issues that you can solve to improve your performance.",
        img: "/images/serviceImages/Integrating tools for Customer Support.png",
    },
    {
        title: "Integrating accounts tools",
        desc: "We connect accounting tools like QuickBooks, Xero, Sage, NetSuite, etc. with payment systems to make invoicing, accounts reconciliation and generate reports automatically. Integrating tools will make sure that the data is accurate as they take exact data from other platforms and you don&apos;t have to manually type it in.",
        img: "/images/serviceImages/Integrating accounts tools.png",
    },
    {
        title: "Integrating Project management tools",
        desc: "We link tools like Asana, Jira, Monday.com, Basecamp, etc. with time-tracking systems to simplify tracking, allocating resources and teams working together. Assigning tasks and tracking progress updates becomes automatic.",
        img: "/images/serviceImages/Integrating Project management tools.png",
    },
    {
        title: "Integrating Amazon Web Services",
        desc: "We connect amazon web services like API Gateway, AppSync, MuleSoft, Zapier, etc. with ERP, CRM and other systems. This allows these systems to share data and work together in the cloud. This will save you money as you only pay for what you use.",
        img: "/images/serviceImages/Integrating Amazon Web Services.png",
    },
    {
        title: "Integrating Payment Gateways",
        desc: "We connect payment gateways like Stripe, PayPal, Transfer, Square, ArtsylPay, etc. with accounting systems so they can share data automatically. It connects directly with how your customers pay and how you record those payments. These payments are supported all over the world and it will be easier for you to pay anywhere you want.",
        img: "/images/serviceImages/Integrating Payment Gateways.png",
    },
    {
        title: "Integrating Document management systems",
        desc: "We merge document management systems like DocuSign, SharePoint, etc. with accounting platforms so they can share and manage documents easily. You use less paper and it saves money and helps the environment. You can save documents on the cloud safely and easier to find and share.",
        img: "/images/serviceImages/Integrating Document management systems.png",
    },
];



const otherservices = [
    {
        title: "Salesforce Consulting Services",
        icon: <FaUsers />,
        desc: "Expert guidance to maximize your Salesforce ecosystem.",
    },
    {
        title: "Certified Salesforce CRM Consulting",
        icon: <FaUserShield />,
        desc: "Certified experts helping you optimize CRM workflows.",
    },
    {
        title: "Salesforce Implementation Service",
        icon: <FaCogs />,
        desc: "Seamless setup and deployment of Salesforce solutions.",
    },
    {
        title: "Salesforce Marketing Cloud Training",
        icon: <FaChalkboardTeacher />,
        desc: "Comprehensive training to master Marketing Cloud tools.",
    },
    {
        title: "Salesforce Integration Services",
        icon: <FaNetworkWired />,
        desc: "Connect Salesforce with your business applications easily.",
    },
    {
        title: "Salesforce Agentforce Consulting",
        icon: <FaHandshake />,
        desc: "Custom Agentforce solutions to enhance agent performance.",
    },
    {
        title: "Agentforce Integration Expert",
        icon: <FaLayerGroup />,
        desc: "Integrate Agentforce with your existing Salesforce setup.",
    },
    {
        title: "Salesforce Managed Services",
        icon: <FaTools />,
        desc: "Ongoing support to ensure Salesforce runs seamlessly.",
    },
    {
        title: "Salesforce Data Migration",
        icon: <FaServer />,
        desc: "Accurate, secure migration of Salesforce data assets.",
    },
    {
        title: "Expert Salesforce Marketing Cloud Consultant",
        icon: <FaRocket />,
        desc: "Get expert advice to boost Marketing Cloud performance.",
    },
    {
        title: "Salesforce Marketing Cloud Consultant",
        icon: <FaBriefcase />,
        desc: "Consulting for targeted and data-driven marketing success.",
    },
    {
        title: "Managed Services for Salesforce",
        icon: <FaTasks />,
        desc: "Proactive monitoring and maintenance for Salesforce apps.",
    },
    {
        title: "Salesforce Consulting Services for Enterprises",
        icon: <FaClipboardList />,
        desc: "Enterprise-level Salesforce solutions to scale operations.",
    },
    {
        title: "Best Salesforce Implementation Service Provider",
        icon: <FaLaptopCode />,
        desc: "Trusted partner for efficient Salesforce implementations.",
    },
    {
        title: "Certified Salesforce Implementation Service Experts",
        icon: <FaUserShield />,
        desc: "Certified specialists delivering top-tier Salesforce builds.",
    },
    {
        title: "Salesforce CRM Consulting Services",
        icon: <FaChartBar />,
        desc: "Tailored CRM consulting to align Salesforce with goals.",
    },
    {
        title: "Agentforce Consulting Services",
        icon: <FaRegLightbulb />,
        desc: "Strategic Agentforce solutions for smarter operations.",
    },
    {
        title: "Expert Salesforce Consulting Services",
        icon: <FaChartLine />,
        desc: "High-impact consulting to accelerate Salesforce success.",
    },
];



const faqs = [
    {
        question: "How do I select the right Salesforce implementation services partner?",
        answer: "While selecting the right Salesforce implementation services partner, you need to check their Salesforce certifications and how much experience they have in it. You can look at the case studies and client testimonials to see their work reports and success. Always ask for a clear cost of services and the time-required to complete the project. Make sure they are communicating with you clearly and transparently.",
    },
    {
        question: "What are the main challenges faced in Salesforce Integrations Services?",
        answer: "The main challenges that are during Salesforce integration services are data qualities issues like duplicates and missing data. Then there are issues related to compatibility between the two systems. There are also security and compliance related concerns. Sometimes, large data volumes can cause bottlenecks which then affect performance. You need skilled Salesforce integration services partners to solve these issues with proper planning and testing. Aekot is one of the best salesforce implementation service providers as we have certified salesforce implementation service experts to solve any challenges you might face.",
    },
    {
        question: "What happens after the integration is completed?",
        answer: "Once the Salesforce integration services are completed, we continuously monitor system performance and track how data flows throughout your processes. Any issues that arise are promptly addressed to ensure your operations run smoothly without disruption. Additionally, we stay up to date with new Salesforce features and any changes in external systems, updating integrations as needed to ensure seamless compatibility. Beyond this, we provide regular support and managed services to maintain optimal performance and maximize the value of your Salesforce investment.",
    },
    {
        question: "What is Salesforce Marketing Cloud training?",
        answer: "The training will involve how to create campaigns, create automation journeys, interpret the findings and segment customers. It assists marketing teams to conduct individual campaigns without problems. Users can also be educated on how to use data in order to make more conversions.",
    },
    {
        question: "What is CRM migration and what is its significance?",
        answer: "CRM migration relocates information, operations and personnel of an outdated system to Salesforce. It stores records of customers and allows business to proceed without the loss of records. A successful migration does not involve errors or downtime.",
    },
    {
        question: "What is Salesforce data migration?",
        answer: " The Salesforce data migration extracts data, cleans data, compares fields and imports data. Experts ensure that the movement is correct, secure and rule-compliant. Good migration prevents duplication of data and ensures information security.",
    },
    {
        question: "What is an Agentforce integration expert?",
        answer: "They associate Agentforce with Salesforce clouds and others. They are involved in the setup of APIs, automating workflow and performance testing. This is to make the AI assistants work well anywhere.",
    },
    {
        question: "What is the value added by an expert Salesforce Marketing Cloud consultant?",
        answer: "They develop superior automation travel that is business oriented. Their capabilities enhance targeting, engagement and campaign ROI. They also ensure that they are fully integrated with other platforms.",
    },
    {
        question: "What are Salesforce consulting services and what are their benefits to enterprises?",
        answer: " Enterprise consulting is concerned with scaling, customization and remaining in compliance. Consultants develop solutions that can be used by large teams and complicated tasks. They also established long term governance.",
    },
    {
        question: "What is the best Salesforce implementation service provider?",
        answer: "The best provider can provide custom, timely and error-free rollouts. They employ qualified professionals and well tested procedures. They are concerned with long-term achievements and user acceptance.",
    },
    {
        question: "Why should you employ Salesforce implementation service providers?",
        answer: "Salesforce standards and industry best practices are observed by certified experts. They decrease risk and accelerate launch. Their qualifications translate to quality and trustworthy work.",
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

            <section className="flex flex-col md:flex-row items-center justify-between pt-16 py-16 bg-white max-w-7xl mx-auto pt-32 md:pt-32">
                {/* Left Content */}
                <div className="max-w-xl text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Salesforce <span className="text-[#e52b50]">Integration and Implementation</span> Services.
                    </h1>

                    <p className="text-gray-600 mt-4 leading-relaxed">
                        At Aekot, we help you integrate, set up, and customize Salesforce to fit your business needs. Our complete Salesforce services enhance efficiency, customer relationship management, and system connectivity. We focus on delivering reliable, secure, and scalable solutions aligned with your performance and long-term goals.
                    </p>

                    <div className="mt-6 flex justify-center md:justify-start">
                        <Button text="Get Started" path="/contact" />
                    </div>
                </div>

                {/* Right Image */}
                <div className="mt-10 md:mt-0 md:ml-10 flex justify-center">
                    <img
                        src="/images/serviceImages/Integration-and-Implementation.webp"
                        alt="Salesforce Integration and Implementation"
                        className="w-82 md:w-106 object-contain rounded-lg"
                    />
                </div>
            </section>


            <section className="py-16 relative bg-gradient-to-b from-white via-red-100 to-white px-8 md:px-20 ">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                    {/* Left Content */}
                    <div className="flex flex-col space-y-6 md:w-2/3">
                        <h2 className="text-3xl md:text-4xl font-bold text-left">
                            <span className="text-primary">Why choose us?</span> What you will get:
                        </h2>

                        <p className="text-md text-gray-800 text-left">
                            As one of the best salesforce implementation service providers, we give our clients full services, from consultation to after implementation. With our certified salesforce implementation service experts, our goal is to give you the best services so you can have easier automation with fewer mistakes. With our proven implementation services, you will get easy growth within a short span of time. The solutions we give are easier to implement and integrate and are cost effective. We also provide full support and maintenance even after the implementation and integration are completed. Our solutions will give you adaptability as they will grow with your business.
                        </p>

                        <p className="text-md text-gray-800 text-left">
                            <strong>Why choose Aekot’s Salesforce?</strong><br />
                            Salesforce is the right platform for sale, customer service and marketing activities and Aekot, best salesforce implementation service providers, is here to help you through it. With our skills, we will make it an easy to use, connected and customised solution for your business. The solutions we give are practical, direct and effective to make Salesforce a central part of your digital ecosystem.
                        </p>

                        <p className="text-md text-gray-800 text-left">
                            <strong>Start your journey with us today.</strong><br />
                            Contact us today to find out how Aekot’s Salesforce implementation and integration services can support your Salesforce projects.
                        </p>

                        <Button text={"Contact Us"} path={"/contact"} />

                    </div>

                    {/* Right Scrolling Logos */}
                    <div className="relative h-[400px] sm:h-[102px] w-1/3 sm:w-full overflow-hidden flex justify-end mt-12 md:mt-0">
                        <ScrollingLogos />
                    </div>
                </div>
            </section>

            <section className="pt-16 px-6 md:px-20 py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                            <span className="text-[#e52b50]">Salesforce Implementation Services </span>
                        </h2>
                        <p>You need the best Salesforce implementation service provider to apply for proper setup and regular management. Our services will cover all main fields that you need to do for your business.</p>
                    </div>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                                    <p className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: service.desc }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactCTA heading="Looking for Expert Salesforce Developers?" />

            <section className="pt-16 px-6 md:px-20 py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                            <span className="text-[#e52b50]">Salesforce Integration Services </span>
                        </h2>
                        <p>Salesforce becomes more effective when they are integrated with other systems in your business operations. Our Salesforce integration services will make sure that there is smooth data flow and better collaboration with other systems on the platform.  We also provide <Link href='/services/agentforce-consulting-services' className="text-primary">Salesforce Agentforce consulting</Link> to help businesses connect AI-driven agents seamlessly with their existing systems for smarter automation and customer engagement.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {servicecardintdata.map((service, index) => (
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
                                    <p className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: service.desc }} />

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>



            <ContactCTA heading="Looking for Expert Salesforce Developers?" />



            <article className="max-w-screen-xl mx-auto space-y-6 py-12 lg:py-20">
                <div className="space-y-6 text-center">
                    <h2 className="text-primary font-bold xs:text-3xl text-2xl  md:text-3xl lg:text-4xl">
                        Other Services We Provide
                    </h2>
                    <p className="text-sm xs:text-xl sm:text-xl  md:text-base">
                        Compelled by a powerful aspiration to deliver top-tier{" "}
                        <br className="hidden md:block" /> Salesforce solutions.
                    </p>
                </div>
                <div className="max-w-screen grid md:grid-cols-2 lg:md:grid-cols-3 gap-4 xl:gap-10">
                    <Service
                        icon={"/assets/customization.svg"}
                        name="Agentforce Implementation & Services"
                        text="Empower your teams with intelligent automation, seamless integration, and unmatched scalability — our <a class='text-primary' href='/services/agentforce-consulting-services'>Agentforce consulting services</a> are redefining how businesses operate in the age of AI."
                        path='/services/agentforce-consulting-services'
                    ></Service>
                    <Service
                        icon={"/assets/strategy.svg"}
                        name="Salesforce Consulting & Strategy"
                        text="Drive growth with intelligent CRM strategies, seamless customization, and measurable ROI — our <a class='text-primary' href='/services/salesforce-consulting-services'>Salesforce consulting services</a> are transforming how businesses succeed in the digital era."
                        path='/services/salesforce-consulting-services'
                    ></Service>
                    <Service
                        icon={"/assets/implementation.svg"}
                        name="Implementation & Integration"
                        text="Streamline operations with seamless integrations, optimized workflows, and expert support — our <a class='text-primary' href='/services/salesforce-implementation-integration-services'>Salesforce implementation service</a> empowers businesses to achieve lasting efficiency."
                        path='/services/salesforce-implementation-integration'
                    ></Service>
                    <Service
                        icon={"/assets/integration.svg"}
                        name="Salesforce Support & Managed services"
                        text="From proactive troubleshooting to continuous innovation, our <a class='text-primary' href='/services/salesforce-managed-services'>Salesforce managed services</a> empower businesses with reliability, scalability, and the agility to stay ahead in the digital era."
                        path='/services/salesforce-support-managed-services'
                    ></Service>
                    <Service
                        icon={"/assets/training.svg"}
                        name="Salesforce Training & Adoption"
                        text="Empower your teams with personalized learning, hands-on guidance, and expert-led <a class='text-primary' href='/services/salesforce-training-adoption'>Salesforce Marketing Cloud training</a> programs that drive adoption, productivity, and long-term success."
                        path='/services/salesforce-training-adoption'
                    ></Service>
                    <Service
                        icon="/assets/data_migration.svg"
                        name="Data Migration & Management"
                        text="Ensure safe, accurate, and seamless <a class='text-primary' href='/services/salesforce-data-migration-management'>Salesforce data migration</a> with expert planning, validation, and execution that empowers your business with reliable insights and smooth transformation."
                        path='/services/data-migration-management'
                    ></Service>
                </div>
            </article>
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
            <section className="px-6 py-12">
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