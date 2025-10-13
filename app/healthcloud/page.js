import Button from "@/components/Button";
import { LuRedo, LuShieldHalf, LuBrain, LuCalendarCheck, LuHospital, LuHandshake, LuMonitorCheck, LuCircleCheck, LuExternalLink, LuChevronUp, LuChevronDown } from "react-icons/lu";
import Faq from "@/components/Faq";
const blogs = [
    {
        title:
            "How Health Cloud Is Powering the New Era of Personalized Healthcare",
        description:
            "Learn how AI is enhancing service efficiency and automation in Salesforce.",
        link: "https://blog.aekot.com/how-health-cloud-is-powering-the-new-era-of-personalized-healthcare/",
        img: "/images/healthcloud/healthBlog1.png",
    },
    {
        title: "Salesforce for Life Sciences: Accelerating Trials & Compliance",
        description:
            "Discover how AI agents are transforming customer interactions and workflows.",
        link: "https://blog.aekot.com/salesforce-for-life-sciences-accelerating-trials-compliance/",
        img: "/images/healthcloud/healthBlog2.png",
    },
];

const faqs = [
    {
        question:
            "How does Aekot handle integration with existing EHRs like Epic or Cerner?",
        answer:
            "We use FHIR-based APIs and middleware for secure, seamless integration.",
    },
    {
        question: "Can Health Cloud help with remote care and telehealth?",
        answer:
            "Yes. We support telehealth, virtual consults, and remote monitoring.",
    },
    {
        question: "How long does a typical implementation take?",
        answer: "6 to 16 weeks, with rapid pilot options available.",
    },
    {
        question: "What kind of training and support do you provide?",
        answer:
            "Tailored training, post-deployment support, health checks, and optimization.",
    },
    {
        question: "Is Health Cloud secure and compliant?",
        answer:
            "Yes. Salesforce Health Cloud is HIPAA-compliant and supports HL7, FHIR.",
    },
];
const services = [
    {
        title: "Unified Patient 360",
        desc: "Get a real-time, comprehensive view of patient history and care goals, seamlessly integrated with EHR systems.",
        icon: LuShieldHalf,
    },
    {
        title: "Intelligent Care Coordination",
        desc: "Coordinate care plans, assign tasks, and monitor patient progress across multidisciplinary teams.",
        icon: LuBrain,
    },
    {
        title: "Smart Scheduling & Outreach",
        desc: "Enable AI-powered appointment scheduling, automated reminders, and personalized engagement.",
        icon: LuCalendarCheck,
    },
    {
        title: "Home Health & Virtual Care",
        desc: "Support telehealth, remote monitoring, and post-discharge workflows for seamless care at home.",
        icon: LuHospital,
    },
    {
        title: "Behavioral & Crisis Care Support",
        desc: "Manage behavioral health and crisis interventions with structured workflows and escalation paths.",
        icon: LuHandshake,
    },
    {
        title: "Mobile-Ready Portals & Apps",
        desc: "Provide self-service options, mobile access, and real-time communication tools to patients and caregivers.",
        icon: LuMonitorCheck,
    },
];

const successStories = [
    {
        title: "Redwood",
        description:
            "Seamless integration of clinical systems into Salesforce Health Cloud for a unified patient view.",
        img: "/images/caseStudyImages/RedwoodCSImg.png",
        readMore: "/case-studies/redwood-health-cloud",
    },
    {
        title: "Diabetes Management Co.",
        description:
            "Streamlined onboarding and unified operations through tailored Salesforce Health Cloud integration.",
        img: "/images/caseStudyImages/DiathriveCSImg.png",
        readMore: "/case-studies/diabetes-management-health-cloud",
    },
];
export const metadata = {
    title: "Salesforce Health Cloud Services | Aekot",
    description:
        "Transform healthcare delivery with Salesforce Health Cloud solutions by Aekot. Boost patient engagement, streamline operations, and ensure secure, compliant care with our certified experts.",
    keywords: [
        "Salesforce Health Cloud",
        "Healthcare CRM",
        "Aekot Health Cloud",
        "Patient Engagement",
        "Healthcare Digital Transformation",
        "Salesforce Implementation Partner",
        "Care Team Collaboration",
        "Healthcare Automation",
        "HIPAA compliant CRM",
        "Health Cloud Consulting"
    ],
    alternates: {
        canonical: "https://www.aekot.com/healthcloud",
    },
    openGraph: {
        title: "Salesforce Health Cloud Services | Aekot",
        description:
            "Empower your healthcare organization with Salesforce Health Cloud — personalized patient engagement, team collaboration, and scalable solutions.",
        url: "https://www.aekot.com/healthcloud",
        siteName: "Aekot",
        images: [
            {
                url: "https://www.aekot.com/images/healthcloud/HealthHero.png",
                width: 1200,
                height: 630,
                alt: "Aekot Salesforce Health Cloud",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Salesforce Health Cloud Services | Aekot",
        description:
            "Partner with Aekot to elevate patient care through Salesforce Health Cloud. Certified experts. Scalable solutions. Proven impact.",
        images: ["https://www.aekot.com/images/healthcloud/HealthHero.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

const HealthCloudPage = () => {

    return (
        <div className="text-black px-6 md:px-12 py-10 max-w-7xl mx-auto space-y-20 pt-40">
            <div
                className="flex flex-col md:flex-row items-center justify-between gap-8 px-8 md:px-20 "
            >
                <div className="text-left md:w-1/2">
                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-700 leading-tight">
                        Elevate Your Business with
                        <br /> Aekot's <span className="text-primary">
                            Health Cloud
                        </span>{" "}
                        Expertise
                    </h1>
                    <p className="font-semibold text-lg md:text-xl text-gray-800 mt-6">
                        Empowering Healthcare Innovation with Salesforce Health Cloud.
                    </p>
                    <p className="text-md text-gray-600 mt-4">
                        At Aekot, we help healthcare organizations redefine care delivery
                        through Salesforce Health Cloud — a powerful CRM platform built
                        specifically for the healthcare and life sciences sector. Our
                        tailored implementations ensure better outcomes, stronger
                        engagement, and seamless operations.
                    </p>
                    <div className="mt-8">
                        <Button text="Contact Us" path="/contact" />
                    </div>
                </div>
                <div
                    className="md:w-1/2 flex justify-center"
                >
                    <img
                        src="/images/healthcloud/HealthHero.png"
                        className="w-full max-w-xl"
                        alt="Agentforce"
                    />
                </div>
            </div>
            <section
                className="py-20 px-4 md:px-20 "
            >
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12 items-start">
                    <div
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">
                            What is Salesforce Health Cloud?
                        </h2>
                        <p className="font-semibold text-gray-700 text-lg md:text-xl max-w-md">
                            Salesforce Health Cloud is a HIPAA-compliant platform that unifies
                            patient data from EHRs, wearables, and claims into a single,
                            actionable view.
                        </p>
                    </div>

                    <div
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-2">
                            <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
                                It enables:
                            </h3>
                            <LuRedo className="w-8 h-8 rotate-90" />
                        </div>

                        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 font-semibold text-gray-600 text-base md:text-lg">
                            {[
                                "Personalized Patient Engagement",
                                "Care Team Collaboration",
                                "Clinical & Non-Clinical Data Integration",
                                "Automation for Administrative Tasks",
                                "Remote and Preventive Care Capabilities",
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3"
                                >
                                    <LuCircleCheck className="text-primary w-5 h-5 mt-1" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
                    Aekot's Health Cloud Services
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center space-y-4"
                            >
                                <Icon className="w-12 h-12 text-primary" />
                                <h3 className="text-xl font-semibold text-gray-700">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm max-w-xs">{service.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
            <section
                className="px-4 md:px-10 py-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
                    Our Implementation Approach
                </h2>

                <div className="relative flex flex-col items-center md:flex-row md:justify-between md:items-start gap-16 md:gap-6">
                    {[
                        "Discovery and Analysis",
                        "Solution Architecture",
                        "Customization and Integration",
                        "Data Migration and Security",
                        "User Training and Adoption",
                        "Continuous Support and Optimization",
                    ].map((step, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center text-center w-44"
                        >
                            {/* Trail connector */}
                            {index !== 0 && (
                                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-[#E52B50]/60 md:hidden" />
                            )}
                            {index !== 0 && (
                                <div className="hidden md:block absolute -left-10 top-5 w-20 h-1 bg-[#E52B50]/60" />
                            )}

                            <div className="w-12 h-12 rounded-full bg-[#E52B50] text-white font-bold flex items-center justify-center shadow-lg z-10">
                                {index + 1}
                            </div>
                            <div className="mt-4 px-2 py-3 bg-white dark:bg-gray-700 shadow-md rounded-xl border border-[#E52B50]/30">
                                <p className="text-sm font-medium text-gray-800 dark:text-white">
                                    {step}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-12">
                <div
                    className="flex flex-col space-y-6 md:w-1/2"
                >
                    <h2
                        className="text-2xl md:text-3xl font-bold text-left text-gray-700"
                    >
                        <span className="text-primary">Why Choose Aekot?</span> <br />
                        Your Trusted Healthcloud Partner
                    </h2>
                    <p
                        className="text-md text-gray-800 text-left"
                    >
                        At Aekot, we bring together deep domain expertise, technical
                        excellence, and a client-first approach to help healthcare
                        organizations thrive on Salesforce.
                    </p>

                    <div className="space-y-4">
                        {[
                            {
                                icon: LuCircleCheck,
                                title: "Salesforce-Certified Experts",
                                desc: "Salesforce-Certified Experts you can trust.",
                            },
                            {
                                icon: LuCircleCheck,
                                title: "Experience Across Healthcare Segments",
                                desc: "Proven impact through intelligent healthcare solutions with Salesforce.",
                            },
                            {
                                icon: LuCircleCheck,
                                title: "Compliance-Ready Implementation",
                                desc: "Secure, compliant, and ready from day one.",
                            },
                            {
                                icon: LuCircleCheck,
                                title: "Rapid Time-to-Value",
                                desc: "Accelerated outcomes with faster implementations.",
                            },
                            {
                                icon: LuCircleCheck,
                                title: "Scalable, Patient-Centric Solutions",
                                desc: "Flexible solutions designed around patient needs.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start space-x-3"
                            >
                                <div className="flex-shrink-0">
                                    <item.icon className="text-primary" size={24} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-sm md:text-base leading-snug break-words">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-700 text-xs md:text-sm leading-snug break-words">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className="mt-10 md:mt-0 md:w-1/3 flex justify-center"
                >
                    <img
                        src="/images/healthcloud/whychooseus.png"
                        alt="Aekot Healthcloud Partner"
                        className="max-w-full h-auto"
                    />
                </div>
            </div>
            {/* Case Study section */}
            <section
                className="py-16 px-6 md:px-20 text-gray-900"
            >
                <div className="text-center">
                    <h2
                        className="text-3xl md:text-4xl font-bold text-primary"
                    >
                        Customer Success Stories
                    </h2>
                    <p
                        className="text-md text-gray-700 mt-4 max-w-3xl mx-auto"
                    >
                        From manual processes to intelligent automation — discover how Aekot
                        partnered with Agentforce to future-proof its business and create a
                        scalable foundation for success.
                    </p>
                </div>

                <div className="mt-12 cursor-pointer">
                    <div className="grid md:grid-cols-2 gap-10 w-full max-w-2xl mx-auto">
                        {successStories.map((story, index) => (
                            <a
                                key={index}
                                href={story.readMore}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white p-6 rounded-2xl shadow-md shadow-blue-200 hover:shadow-xl transition duration-300 flex flex-col text-center items-center"
                            >
                                <img
                                    src={story.img}
                                    alt={story.title}
                                    className="h-60 w-72 object-contain rounded-lg"
                                />
                                <h3 className="text-lg font-semibold mt-4">{story.title}</h3>
                                <p className="text-sm text-gray-600 mt-2 flex-grow">
                                    {story.description}
                                </p>
                                <span className="mt-4 text-primary font-medium flex items-center cursor-pointer hover:underline">
                                    Read More <LuExternalLink size={18} className="ml-2" />
                                </span>
                            </a>

                        ))}
                    </div>
                </div>
            </section>
            {/* Case Study section */}

            {/* Blog Cards */}
            <section
                className="py-16 text-gray-900 px-8 md:px-20 mt-12"
            >
                <div className="text-center">
                    <h2
                        className="text-3xl md:text-4xl font-bold text-primary"
                    >
                        Read More on Health Cloud
                    </h2>
                    <p className="text-md text-gray-800 mt-4">
                        Stay updated with the latest insights and innovations in AI-driven
                        business automation.
                    </p>
                </div>

                <div
                    className="flex justify-center mt-12"
                >
                    <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
                        {blogs.map((blog, index) => (
                            <a
                                key={index}
                                href={blog.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
                            >
                                <img
                                    src={blog.img}
                                    alt={blog.title}
                                    width={300}
                                    height={200}
                                    className="w-72 h-52"
                                />
                                <h3 className="text-lg font-semibold mt-4">{blog.title}</h3>
                                <p className="text-sm text-gray-500 mt-2 flex-grow">
                                    {blog.description}
                                </p>
                                <div className="mt-4 text-primary flex items-center cursor-pointer">
                                    Read More <LuExternalLink size={18} className="ml-2" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="px-4 md:px-20">
                <h2
                    className="text-3xl md:text-4xl font-bold text-center text-primary mt-12"
                >
                    FAQs
                </h2>
                <div className="mt-6 space-y-4 max-w-2xl mx-auto">
                    {faqs.map((faq, index) => (
                        <Faq key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <div
                className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl px-8 py-12 text-center space-y-6 mt-16"
            >
                <p className="font-semibold text-xl">
                    Let’s Transform Healthcare Together!{" "}
                    <span className="text-red-500">#AekotAdvantage</span>
                </p>
                <p className="text-md text-gray-700 leading-relaxed">
                    If you’re looking to deliver smarter care and improve patient outcomes
                    — partner with Aekot. <br />
                    <span className="font-semibold">Talk to Our Experts!</span>
                </p>

                <div className="flex justify-center">
                    <Button text="Contact Us" path="/contact" />
                </div>
            </div>
        </div>
    );
};

export default HealthCloudPage;
