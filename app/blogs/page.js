import Button from "@/components/Button";
import { decode } from "html-entities";
import { FaCircle, FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
    title: "Salesforce Consulting Blogs | Insights & Tips by AEKOT",
    description:
        "Explore expert blogs on Salesforce consulting. Get industry insights, CRM tips, and strategies to maximize your Salesforce success with AEKOT.",
    keywords: ["about, company, values, mission"],
    openGraph: {
        title: "Salesforce Consulting Blogs | Insights & Tips by AEKOT",
        description:
            "Explore expert blogs on Salesforce consulting. Get industry insights, CRM tips, and strategies to maximize your Salesforce success with AEKOT.",
        url: "https://www.aekot.com/blogs/",
        images: [
            {
                url: "https://www.aekot.com/original Aekot logo.webp",
                alt: "AEKOT Logo",
            },
        ],
        type: "website",
    },
};

// Fetch blogs from WordPress API
async function fetchBlogs() {
    try {
        const res = await fetch("https://blog.aekot.com/wp-json/wp/v2/posts");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        return await res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

// Extract first image src using regex
function extractFirstImageLink(htmlString) {
    if (!htmlString) return null;
    const imgMatch = htmlString.match(/<img[^>]+src=["']([^"']+)["']/i);
    return imgMatch ? imgMatch[1] : null;
}

// Extract content: remove first <p> and take first sentence of remaining
function extractContent(htmlString) {
    if (!htmlString) return null;

    // Remove all newlines
    let str = htmlString.replace(/\n/g, " ");

    // Remove first <p> block
    str = str.replace(/<p>.*?<\/p>/i, "");

    // Strip remaining HTML tags
    str = str.replace(/<[^>]+>/g, "").trim();

    // Take first sentence
    const firstPeriodIndex = str.indexOf(".");
    return firstPeriodIndex !== -1 ? str.slice(0, firstPeriodIndex + 1) : str;
}

// Format date using native Date
function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", { month: "long", day: "2-digit", year: "numeric" }).format(date);
}

export default async function Blogs() {
    const blogData = await fetchBlogs();

    const firstBlog = blogData[0];
    const firstImageLink = firstBlog ? extractFirstImageLink(firstBlog.content.rendered) : null;
    const firstContent = firstBlog ? extractContent(firstBlog.content.rendered) : null;
    const firstTitle = firstBlog ? decode(firstBlog.title.rendered) : null;

    return (
        <section className="px-8 pt-16 md:pt-32">
            <article className="max-w-screen-xl mx-auto py-12 text-center space-y-12">
                <div className="space-y-4 text-center">
                    <h2 className="text-primary font-bold xs:text-3xl text-2xl md:text-3xl xl:text-4xl">Blogs</h2>
                    <p className="fade-in-subhead max-w-screen-sm mx-auto font-semibold text-lg md:text-xl">
                        Expert Tips & Strategies: Unlock the Power of CRM.
                    </p>
                </div>
            </article>

            {/* Latest Blog */}
            {firstBlog ? (
                <section className="max-w-screen-xl mx-auto py-4 blog_container sm:w-5/6 md:w-3/6 lg:w-auto rounded-xl shadow-xl hover:cursor-pointer">
                    <a href={firstBlog.link} target="_blank" rel="noopener noreferrer">
                        <article className="flex flex-col lg:flex-row gap-6 rounded-lg overflow-hidden">
                            {firstImageLink && (
                                <img
                                    src={firstImageLink}
                                    alt="Blog Poster"
                                    className="blog_img object-fit inset-0 transition duration-200 lg:w-3/6"
                                />
                            )}
                            <div className="py-12 px-6 flex flex-col justify-between space-y-10 relative">
                                <span className="px-2 py-1 absolute font-semibold border-2 border-primary text-white bg-primary rounded-lg flex items-center">
                                    <FaCircle size={20} className="pr-2" />New
                                </span>
                                <div className="space-y-6 pt-6">
                                    <h2 className="blog_heading font-semibold text-xl lg:text-2xl">{firstTitle}</h2>
                                    <p className="text-dark/80">{firstContent + "..."}</p>
                                </div>
                            </div>
                        </article>
                    </a>
                </section>
            ) : (
                <div className="text-center">
                    <p className="text-primary">No Blogs Found</p>
                </div>
            )}

            {/* Other Blogs */}
            <article className="max-w-screen-xl mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {blogData.slice(1, 7).map((val, key) => {
                    const content = extractContent(val.content.rendered);
                    const firstSentence = content?.match(/^(.*?)\./)?.[1];

                    const imageLink = extractFirstImageLink(val.content.rendered);

                    return (
                        <section key={key} className="blog_container relative rounded-xl shadow-xl">
                            <a href={val.link} target="_blank" rel="noopener noreferrer">
                                <article className="flex flex-col rounded-lg overflow-hidden">
                                    {imageLink && (
                                        <div className="h-1/2 overflow-hidden">
                                            <img
                                                loading="lazy"
                                                src={imageLink}
                                                alt="Blog Poster"
                                                className="p-2 blog_img object-cover inset-0 transition-transform duration-200 hover:cursor-pointer"
                                            />
                                        </div>
                                    )}

                                    <div className="h-1/2 p-6 space-y-6">
                                        <div className="lg:h-24">
                                            <h2 className="blog_heading font-semibold text-xl transition-colors">
                                                {decode(val.title.rendered)}
                                            </h2>
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <p className="text-sm text-dark/80 pb-6">{firstSentence + "..."}</p>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0">
                                        <p className="text-xs text-primary pl-6 pb-4">{formatDate(val.date)}</p>
                                    </div>
                                </article>
                            </a>
                        </section>
                    );
                })}
            </article>

            <div className="flex justify-center">
                <Link
                    href="https://blog.aekot.com/"
                    className="ghost-button inline-block w-5/6 sm:w-32 md:w-32 lg:w-32 xl:w-44 py-2 pl-2 ml-2 font-semibold text-center text-light border-2 border-primary bg-primary hover:bg-primary/90 rounded-md transition-colors" target="_blank"
                >
                    View All Blogs <FaLongArrowAltRight className="inline-block fa-arrow-right-long text-xs" />
                </Link>
            </div>
        </section>
    );
}
