import Button from "@/components/Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

const service = {
    "imageSrc": "/images/serviceImages/support.jpg",
    "title": "Salesforce Support & Managed Services",
    "additionalInfo": {
        "headline": "Comprehensive Salesforce Support to Keep You Running Smoothly",
        "subheading": "From troubleshooting to continuous improvements, our Salesforce support ensures you stay ahead.",
        "details": {
            "whatWeOffer": [
                "Ongoing Salesforce maintenance and updates.",
                "24/7 support for troubleshooting and issues resolution.",
                "Regular health checks and performance optimization"
            ],
            "benefits": [
                "Ensure maximum system uptime and reliability.",
                "Stay ahead with the latest Salesforce updates and features.",
                "Dedicated support team to resolve issues quickly."
            ]
        },
        "cta": "Get Reliable Salesforce Support. ",
        "linktext": "Contact Now",
        "link": "/contact"
    },
    "metaData": {
        "metaTitle": "Salesforce Support & Proactive Managed Services",
        "metaDescription": "Get proactive managed services for Salesforce with AEKOT. Improve CRM uptime, resolve issues faster, and keep your business running efficiently."
    }
};

export const metadata = {
    title: service.metaData.metaTitle,
    description: service.metaData.metaDescription,
    keywords: [
        "Salesforce support",
        "Managed Salesforce services",
        "Salesforce maintenance",
        "Salesforce optimization",
        "CRM uptime",
        "Salesforce troubleshooting",
        "Salesforce performance",
        "24/7 Salesforce support"
    ],
    canonical: "https://www.aekot.com/services/salesforce-support-managed-services",
    openGraph: {
        title: service.metaData.metaTitle,
        description: service.metaData.metaDescription,
        url: "https://www.aekot.com/services/salesforce-support-managed-services",
        siteName: "Aekot",
        locale: "en_IN",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: service.metaData.metaTitle,
        description: service.metaData.metaDescription,
    },
};

const ServicesIndividualPage = () => {

    return (
        <>
            <section className={`pt-32 md:pt-32 px-4 max-w-7xl mx-auto`}>
                {/* Hero Section */}
                <section className="bg-cta-bg relative min-h-[70vh] flex flex-col lg:flex-row items-center text-center lg:text-left px-4 fade-in-head">
                    <div className="lg:w-1/2 flex flex-col justify-center items-start space-y-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-primary">
                            {service.title}
                        </h1>
                        <h2 className="text-lg md:text-xl font-medium text-gray-600 max-w-4xl">
                            {service.additionalInfo.subheading}
                        </h2>
                        <Link
                            href={service.additionalInfo.link}
                            className="ghost-button inline-block w-5/6 sm:w-32 md:w-32 lg:w-32 xl:w-44 py-2 pl-2 ml-2 font-semibold text-center text-light border-2 border-primary bg-primary hover:bg-primary/90 rounded-md transition-colors" target="_blank"
                        >
                            Know More <FaLongArrowAltRight className="inline-block fa-arrow-right-long text-xs" />
                        </Link>
                    </div>
                    <div className="lg:w-1/2 flex justify-center mt-8 md:mt-0">
                        <img
                            src={service.imageSrc}
                            alt={service.title}
                            className="w-full max-w-lg h-auto rounded shadow-lg"
                        />
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-16 px-6 text-center bg-gray-50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-primary font-bold text-2xl md:text-3xl lg:text-4xl mb-8">
                            {service.title}
                        </h2>
                        <h3 className="text-md md:text-lg font-semibold text-gray-800 mb-6">
                            {service.additionalInfo.headline}
                        </h3>

                        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8">
                            <h4 className="text-lg font-semibold text-gray-800 md:text-justify mb-3">
                                What We Offer:
                            </h4>
                            <ul className="list-disc pl-6 text-gray-600 text-justify space-y-2">
                                {service.additionalInfo.details.whatWeOffer.map((offer, idx) => (
                                    <li key={idx}>{offer}</li>
                                ))}
                            </ul>
                            <h4 className="text-lg font-semibold text-gray-800 md:text-justify mb-3 mt-4">
                                Benefits:
                            </h4>
                            <ul className="list-disc pl-6 text-gray-600 text-justify space-y-2">
                                {service.additionalInfo.details.benefits.map((benefit, idx) => (
                                    <li key={idx}>{benefit}</li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-gray-800 font-medium text-lg mt-6">
                            {service.additionalInfo.cta}
                        </p>
                        <div className="flex justify-center mt-3">
                            <Link
                                href="/contact"
                                className="ghost-button inline-block w-5/6 sm:w-32 md:w-32 lg:w-32 xl:w-44 py-2 pl-2 ml-2 font-semibold text-center text-light border-2 border-primary bg-primary hover:bg-primary/90 rounded-md transition-colors"
                            >
                                Contact Us <FaLongArrowAltRight className="inline-block fa-arrow-right-long text-xs" />
                            </Link>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default ServicesIndividualPage;
