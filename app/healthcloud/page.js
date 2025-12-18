import Button from "@/components/Button";
import { LuRedo, LuShieldHalf, LuBrain, LuCalendarCheck, LuHospital, LuHandshake, LuMonitorCheck, LuCircleCheck, LuExternalLink, LuChevronUp, LuChevronDown } from "react-icons/lu";
import Faq from "@/components/Faq";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import HealthCloudHero from "@/components/healthcloud-components/HealthCloudHero/HealthCloudHero";
import WhatisSalesforce from "@/components/healthcloud-components/WhatisSalesforce/WhatisSalesforce";
import HealthCloudServices from "@/components/healthcloud-components/HealthCloudServices/HealthCloudServices";
import ImplementationApproach from "@/components/healthcloud-components/ImplementationApproach/ImplementationApproach";
import WhyAekot from "@/components/healthcloud-components/WhyAekot/WhyAekot";


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
            <br/>
            <HealthCloudHero/>
            <WhatisSalesforce/>
            <HealthCloudServices/>
            <ImplementationApproach/>
            <WhyAekot/>
            
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
                    <Link
                        href="/contact"
                        className="ghost-button inline-block w-5/6 sm:w-32 md:w-32 lg:w-32 xl:w-44 py-2 pl-2 ml-2 font-semibold text-center text-light border-2 border-primary bg-primary hover:bg-primary/90 rounded-md transition-colors"
                    >
                        Contact Us <FaLongArrowAltRight className="inline-block fa-arrow-right-long text-xs" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HealthCloudPage;
