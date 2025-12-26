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
import SuccessStories from "@/components/healthcloud-components/SuccessStories/SuccessStories";
import HealthBlogs from "@/components/healthcloud-components/HealthBlogs/HealthBlogs";




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
        <div className="text-black px-6 md:px-12 py-10 max-w-7xl mx-auto pt-40">
            <br/>
            <HealthCloudHero/>
            <WhatisSalesforce/>
            <HealthCloudServices/>
            <ImplementationApproach/>
            <WhyAekot/>
            
            {/* Case Study section */}
            <section
                className="py-5 px-6 md:px-20 text-gray-900"
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

                <SuccessStories/>
            </section>
            {/* Case Study section */}

            {/* Blog Cards */}
            <section
                className="py-5 text-gray-900 px-8 md:px-20 mt-12"
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

                <HealthBlogs/>
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
