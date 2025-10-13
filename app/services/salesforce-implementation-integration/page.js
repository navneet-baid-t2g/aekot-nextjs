import { FaArrowRight } from "react-icons/fa";
import Button from "@/components/Button";
import Faq from "@/components/Faq";
import ContactCTA from "@/components/ContactCTA";

const certificationImages = [
    { src: "/images/Certifications/C22.png" },
    { src: "/images/Certifications/C23.png" },
    { src: "/images/Certifications/C8.png" },
];

const servicecarddata = [
    {
        title: "Provide Consultation and Services",
        desc: "We analyse what are the requirements for the implementation of a Salesforce solution that will support your business processes and objectives.",
        img: "/images/serviceImages/strategy-and-advisory.webp",
    },
    {
        title: "Do Configuration and Customisation",
        desc: "We will install Sales, Services, Marketing and Commerce clouds according to your needs. Our team will create Custom objects, work processes, dashboards and reports to match your business model.",
        img: "/images/serviceImages/strategy-and-advisory.webp",
    },
    {
        title: "Data Migration",
        desc: "We will transfer data safely and accurately into Salesforce from previous systems. We make sure that the data is clean so it doesn&apos;t give errors and is reliable for stability.",
        img: "/images/serviceImages/strategy-and-advisory.webp",
    },
    {
        title: "Train Users and help in Adoption",
        desc: "We would provide Salesforce implementation services training to your teams and users with full training sessions and guides to help them understand and use Salesforce easily and stay efficient as the business grows.",
        img: "/images/serviceImages/strategy-and-advisory.webp",
    },
    {
        title: "Support & Maintenance",
        desc: "Once the solutions are implemented, we will continue to monitor and give support after that as well. Our team of certified salesforce implementation service experts will regularly update and improve the efficiency of your business.",
        img: "/images/serviceImages/strategy-and-advisory.webp",
    },
];

const servicecardintdata = [
    {
        title: "Integration ERP systems",
        desc: "In this, we connect Enterprise Resource Planning (ERP) systems with CRM, eCommerce, etc. to unify data and make processes like inventory, finance and supply chain management automatic. It reduces data silos and enters data manually which helps to decrease errors.",
        img: "/images/serviceImages/strategy-and-advisory.webp",
    },
    {
        title: "Integrating automated marketing platforms",
        desc: "We link marketing platforms like Marketing Cloud, HubSpot, Marketo, etc. with CRM, ERP and social media. This helps in tracking revenue and performance of campaigns. It also syncs lead data and automates tasks like sending follow up emails.",
        img: "/images/serviceImages/strategy-and-advisory.webp",
    },
    {
        title: "Integrating tools for Customer Support",
        desc: "By connecting customer support tools like Service Cloud, Zendesk, ServiceNow, Freshdesk, etc. with communication platforms to bring all customer data together. With this you can create tickets automatically, respond to your customer quickly and find out any issues that you can solve to improve your performance.",
        img: "/images/serviceImages/strategy-and-advisory.webp",
    },
    {
        title: "Integrating accounts tools",
        desc: "We connect accounting tools like QuickBooks, Xero, Sage, NetSuite, etc. with payment systems to make invoicing, accounts reconciliation and generate reports automatically. Integrating tools will make sure that the data is accurate as they take exact data from other platforms and you don&apos;t have to manually type it in.",
        img: "/images/serviceImages/strategy-and-advisory.webp",
    },
    {
        title: "Integrating Project management tools",
        desc: "We link tools like Asana, Jira, Monday.com, Basecamp, etc. with time-tracking systems to simplify tracking, allocating resources and teams working together. Assigning tasks and tracking progress updates becomes automatic.",
        img: "/images/serviceImages/strategy-and-advisory.webp",
    },
    {
        title: "Integrating Amazon Web Services",
        desc: "We connect amazon web services like API Gateway, AppSync, MuleSoft, Zapier, etc. with ERP, CRM and other systems. This allows these systems to share data and work together in the cloud. This will save you money as you only pay for what you use.",
        img: "/images/serviceImages/strategy-and-advisory.webp",
    },
    {
        title: "Integrating Payment Gateways",
        desc: "We connect payment gateways like Stripe, PayPal, Transfer, Square, ArtsylPay, etc. with accounting systems so they can share data automatically. It connects directly with how your customers pay and how you record those payments. These payments are supported all over the world and it will be easier for you to pay anywhere you want.",
        img: "/images/serviceImages/strategy-and-advisory.webp",
    },
    {
        title: "Integrating Document management systems",
        desc: "We merge document management systems like DocuSign, SharePoint, etc. with accounting platforms so they can share and manage documents easily. You use less paper and it saves money and helps the environment. You can save documents on the cloud safely and easier to find and share.",
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
                        Salesforce <span className="text-[#e52b50]">Integration and Implementation</span> Services for Unified Solutions.
                    </h1>

                    <p className="text-gray-600 mt-4 leading-relaxed">
                        At Aekot, we guide you for integrating solutions with the Salesforce platform and implementation by setting up and customising Salesforce for your use. We give a full set of services for businesses to help them improve efficiency, effectively manage customer relationships and connect their systems with the Salesforce platform. Our main focus is to deliver reliable, secure and scalable Salesforce solutions that will adjust with your performance and long-term goals.
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

            <section className="pt-16 px-6 md:px-20 py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                            <span className="text-[#e52b50]">Salesforce Integration Services </span>
                        </h2>
                        <p>Salesforce becomes more effective when they are integrated with other systems in your business operations. Our Salesforce integration services will make sure that there is smooth data flow and better collaboration with other systems on the platform.</p>
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
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

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
                    <div className="relative h-[400px] w-1/3 overflow-hidden flex justify-end mt-12">
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



            <section id="other-services" className="py-12 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        <span className="text-[#e52b50]"> Other Services</span>
                    </h2>
                    <p className="text-gray-600 mb-8">
                        We not only provide Salesforce Consulting Services but also have a wide range of specialized services that enable companies to get the most out of Salesforce. We assist in strategy, implementation, automation, AI and continuous support. We work on consulting, integration, training, data movement and managed services. We assist businesses in implementing Salesforce clouds, enhancing performance, integrating intelligent agents, executing good marketing, maintaining data safety and updating the system. Should a company require a complete implementation, CRM migration, AI functionality, AppExchange support or platform training, our extensive portfolio of services will fulfill the requirement precisely and at scale.
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

            <ContactCTA heading="Looking for Expert Salesforce Developers?" />

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
            <section className="px-6">
                <div className=" max-w-screen-xl mx-auto shadow-[0_0_5px_rgba(0,0,0,0.25)] rounded-2xl px-8 md:px-12 py-8  text-center space-y-6 mt-12 md:mt-32">
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