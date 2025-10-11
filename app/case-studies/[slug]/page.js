import JsonIndividualCaseStudyData from "@/data/MOCK_DATA_INDIVIDUALCASESTUDIES.json";
import { IoLocationSharp } from "react-icons/io5";
import Button from "@/components/Button";
import { notFound } from "next/navigation";

export const revalidate = 86400;

export async function generateStaticParams() {
    return JsonIndividualCaseStudyData.map((item) => ({
        title_id: item.title_id,
    }));
}

export async function generateMetadata({ params }) {
    const { title_id } = params;
    const data = JsonIndividualCaseStudyData.find(
        (item) => item.title_id === title_id
    );

    if (!data) return {};

    const meta = data.meta_data || {};
    return {
        title: meta.metaTitle,
        description: meta.metaDescription,
        openGraph: {
            title: meta.metaTitle,
            description: meta.metaDescription,
            url: meta.metaURL,
            images: [
                {
                    url: meta.metaImage,
                    alt: data.title || "Case Study Image",
                },
            ],
            type: "website",
        },
        twitter: {
            title: meta.metaTitle,
            description: meta.metaDescription,
            images: [meta.metaImage],
        },
    };
}

export default async function CaseStudyDetails({ params }) {
    const { slug } = params;

    const data = JsonIndividualCaseStudyData.find(
        (item) => item.title_id === slug
    );

    if (!data) {
        notFound();
    }

    const getColorClass = (industry) => {
        switch (industry.toLowerCase()) {
            case "sales cloud":
            case "experience cloud":
            case "health cloud":
            case "service cloud":
            case "nonprofit cloud":
                return "bg-[#00A1E0] text-white";

            case "financial services":
            case "insurance":
            case "payments":
                return "border border-pink-500 text-pink-500 bg-white";

            case "healthcare":
            case "lifesciences":
                return "border border-green-500 text-green-500 bg-white";

            case "real estate":
                return "border border-purple-500 text-purple-500 bg-white";

            case "relocations":
            case "logistics":
                return "border border-yellow-500 text-yellow-500 bg-white";

            case "bpo":
                return "border border-orange-500 text-orange-500 bg-white";

            case "banking":
            case "not-for-profit":
                return "border border-blue-800 text-blue-800 bg-white";
            default:
                return "bg-gray-300 text-gray-700";
        }
    };

    return (
        <section className="px-4 pt-28 md:pt-36 lg:mx-32">
            <div className="min-h-screen p-2">
                {/* Logo */}
                {data.logo && (
                    <div
                        className="mb-4 flex items-center justify-center text-center mx-auto"
                        style={{ width: "240px", height: "120px" }}
                    >
                        <img
                            src={data.logo}
                            alt={data.title}
                            className="w-full h-full object-contain"
                        />
                    </div>
                )}

                {/* Title and Subtitle */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-primary">{data.title}</h1>
                    <p className="text-md text-gray-600 mt-2">{data.subtitle}</p>
                </div>

                {/* Industry and Location */}
                <div className="mb-6 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                    <div className="flex flex-wrap justify-center">
                        {data.location.map((loc, index) => (
                            <div key={index} className="flex items-center mr-4">
                                <IoLocationSharp className="mr-1" />
                                <span>{loc}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-wrap space-x-2 items-center justify-center">
                            {data.industry?.map(
                                (industry, index) =>
                                    !industry.toLowerCase().includes("cloud") && (
                                        <span
                                            key={index}
                                            className={`flex justify-center items-center px-3 py-1 mb-2 rounded-full text-sm font-semibold ${getColorClass(
                                                industry
                                            )}`}
                                        >
                                            {industry}
                                        </span>
                                    )
                            )}
                        </div>
                        <div className="flex flex-wrap space-x-2 items-center justify-center mt-2">
                            {data.industry?.map(
                                (industry, index) =>
                                    industry.toLowerCase().includes("cloud") && (
                                        <span
                                            key={index}
                                            className={`flex justify-center items-center px-3 py-1 mb-2 rounded-full text-sm font-semibold ${getColorClass(
                                                industry
                                            )}`}
                                        >
                                            {industry}
                                        </span>
                                    )
                            )}
                        </div>
                    </div>
                </div>

                {/* Testimonial */}
                {data.testimonial && (
                    <div className="py-12 px-4 flex justify-center items-center">
                        <div className="bg-gray-100 max-w-7xl mx-auto flex items-start space-x-6 shadow-lg p-6 rounded-lg">
                            <div>
                                <p className="text-gray-700 italic text-md">
                                    <span className="flex items-start">
                                        <span className="text-5xl text-gray-800 relative" style={{ top: "-0.3em" }}>
                                            &ldquo;
                                        </span>
                                        <span className="pl-2">{data.testimonial.words}</span>
                                    </span>
                                </p>
                                <div className="flex justify-center items-center mt-4 space-x-4">
                                    <img
                                        src={data.testimonial.img}
                                        alt={data.testimonial.person}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="text-gray-800 font-semibold">
                                            {data.testimonial.person}
                                        </h4>
                                        <p className="text-gray-500 text-sm">
                                            {data.testimonial.designation}, {data.testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Sections */}
                {data.about && (
                    <div className="mb-6 lg:mx-40">
                        <h2 className="text-xl font-semibold">{data.about.heading}</h2>
                        <p className="text-gray-600 mt-2 text-md text-justify">
                            {data.about.description}
                        </p>
                    </div>
                )}

                {data.problem_statement && (
                    <div className="mb-6 lg:mx-40">
                        <h2 className="text-xl font-semibold">{data.problem_statement.heading}</h2>
                        <p className="text-gray-600 mt-2 text-md text-justify">
                            {data.problem_statement.description}
                        </p>
                    </div>
                )}

                {data.primary_objective && (
                    <div className="mb-6 lg:mx-40">
                        <h2 className="text-xl font-semibold mt-8">Primary Objectives</h2>
                        <div className="mt-4 space-y-4">
                            {data.primary_objective.map((objective, index) => (
                                <div key={index}>
                                    <h3 className="font-medium text-md">{objective.title}</h3>
                                    <ul className="list-disc list-inside text-gray-600 ml-4 mt-1">
                                        {objective.bullets.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {data.approach && (
                    <div className="lg:mx-40 mb-8">
                        <h2 className="text-xl font-semibold">{data.approach.heading}</h2>
                        {data.approach.description.map((metric, index) => (
                            <div key={index} className="mt-4 text-md">
                                {metric.title && (
                                    <h3 className="text-md font-semibold">{metric.title}</h3>
                                )}
                                <ul className="list-disc list-inside text-gray-600 mt-2 text-md ml-4">
                                    {(metric.bullets || metric).map((bullet, bulletIndex) => (
                                        <li key={bulletIndex} className="text-justify">
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}

                {data.solution && (
                    <div className="mb-6 lg:mx-40">
                        <h2 className="text-xl font-semibold">{data.solution.heading}</h2>
                        <p className="text-gray-600 mt-2 text-md text-justify">
                            {data.solution.description}
                        </p>
                    </div>
                )}

                {data.outcome && (
                    <div className="mb-6 lg:mx-40">
                        <h2 className="text-xl font-semibold">{data.outcome.heading}</h2>
                        <p className="text-gray-600 mt-2 text-md text-justify">
                            {data.outcome.description}
                        </p>
                    </div>
                )}

                {data.metrics && (
                    <div className="lg:mx-40">
                        <h2 className="text-xl font-semibold">{data.metrics.heading}</h2>
                        {data.metrics.description.map((metric, index) => (
                            <div key={index} className="mt-4 text-md">
                                {metric.title && (
                                    <h3 className="text-md font-medium">{metric.title}</h3>
                                )}
                                <ul className="list-disc list-inside text-gray-600 mt-2 text-md ml-4">
                                    {(metric.bullets || metric).map((bullet, bulletIndex) => (
                                        <li key={bulletIndex} className="text-justify">
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Client Image */}
            {data.clientImage && (
                <div>
                    <div className="p-4 flex justify-center">
                        <div className="w-86 h-64 overflow-hidden rounded-md p-4 border-white shadow-lg">
                            <img
                                src={data.clientImage.image}
                                alt={data.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <p className="font-semibold text-lg text-center mb-1">
                        {data.clientImage.caption}
                    </p>
                    <div className="flex items-center justify-center text-gray-500">
                        <IoLocationSharp className="mr-1" />
                        <span className="mr-4">{data.clientImage.location}</span>
                    </div>
                </div>
            )}

            {data.readmore && (
                <div className="mt-16 px-6 lg:px-40">
                    <div className="bg-white shadow-lg rounded-2xl p-6 lg:p-8 text-center">
                        <h2 className="text-xl font-semibold text-gray-600 mb-4">
                            Discover Zota's Full Success Story
                        </h2>
                        <p className="text-gray-600 text-md leading-relaxed mb-8 text-justify">
                            {data.readmore.description}
                        </p>
                        <a
                            href={data.readmore.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-primary text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-primary-dark transition duration-300"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            )}

            {/* Footer CTA */}
            <div className="max-w-screen-xl mx-auto shadow-[0_0_5px_rgba(0,0,0,0.25)] rounded-2xl mt-12 py-10 px-4 flex flex-col justify-center items-center">
                <div className="text-center space-y-4 w-full ">
                    <h2 className="mb-6 text-xl font-bold">
                        Get a free consultation today!
                        <span style={{ color: "#e52b50" }}> #AekotAdvantage.</span>
                    </h2>
                    <p className="text-md text-gray-700 max-w-6xl text-center mx-auto md:px-6">
                        Whether you're looking to optimize your Salesforce implementation,
                        integrate new technologies, or expand your global reach, Aekot has
                        the expertise and passion to help you succeed.
                    </p>
                    <p className="font-semibold my-8">
                        Let's transform your business together.
                    </p>
                    <div className="flex justify-center">
                        <Button text="Contact Us" path="/contact" />
                    </div>
                </div>
            </div>
        </section>
    );
}
