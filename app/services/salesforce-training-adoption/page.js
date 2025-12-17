import Button from "@/components/Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

const service = {
    "imageSrc": "/images/serviceImages/integrateImg.jpg",
    "title": "Salesforce Training & Adoption",
    "additionalInfo": {
        "headline": "Empower Your Team with Expert Salesforce Training",
        "subheading": "Ensure your team makes the most of Salesforce with personalized training and adoption programs.",
        "details": {
            "whatWeOffer": [
                "Custom training sessions based on user roles.",
                "Comprehensive adoption strategies to boost user engagement.",
                "On-site or virtual training workshops tailored to your team’s needs."
            ],
            "benefits": [
                "Maximize the ROI of your Salesforce investment.",
                "Improve team productivity and CRM proficiency.",
                "Ensure a smooth transition and increase system adoption rates."
            ]
        },
        "cta": "Boost Salesforce Adoption Today. ",
        "linktext": "Contact Us",
        "link": "/contact"
    },
    "metaData": {
        "metaTitle": "Salesforce Training & Cloud Workshops by AEKOT",
        "metaDescription": "Improve user adoption with Salesforce and Marketing Cloud training by AEKOT. Interactive learning to maximize Salesforce usage and ROI."
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
    canonical: "https://www.aekot.com/services/salesforce-training-adoption",
    openGraph: {
        title: service.metaData.metaTitle,
        description: service.metaData.metaDescription,
        url: "https://www.aekot.com/services/salesforce-training-adoption",
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
                        <Button text={"Know More"} path={service.additionalInfo.link} />
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
