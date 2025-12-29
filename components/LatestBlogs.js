import { decode } from "html-entities";
import Button from "./Button";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "2-digit" };
    return date.toLocaleDateString("en-US", options);
};

const extractContent = (htmlString) => {
    if (!htmlString) return null;

    // Match all <p>...</p> tags
    const paragraphs = htmlString.match(/<p>(.*?)<\/p>/gi);
    if (!paragraphs || paragraphs.length < 2) return null;

    // Remove the first paragraph
    const rest = paragraphs.slice(1);

    // Extract text content from remaining paragraphs
    const content = rest
        .map((p) => p.replace(/<[^>]+>/g, "").trim()) // remove any HTML tags
        .join(" ");

    return content;
};


// Server Component
const LatestBlogs = async () => {
    let blogData = [];

    try {
        const res = await fetch("https://blog.aekot.com/wp-json/wp/v2/posts");
        if (!res.ok) throw new Error("Failed to fetch posts");
        blogData = await res.json();
    } catch (error) {
        console.error("Error fetching data: ", error);
    }

    const firstThree = blogData.slice(0, 4);

    return (
        <article className="md:max-w-screen-xl mx-auto pt-28 space-y-12 px-4">
            <div className="space-y-6 text-center">
                <h2 className="text-primary font-bold xs:text-3xl text-2xl md:text-3xl lg:text-4xl">
                    Our Latest Blogs
                </h2>
            </div>

            <article className="md:w-5/6 lg:w-auto sm:w-auto mx-auto py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {firstThree.map((val, key) => (
                    <section key={key} className="blog_container relative rounded-xl shadow-xl sm:mx-6 md:m-0">
                        <a href={val.link} target="_blank" rel="noopener noreferrer">
                            <article className="flex flex-col overflow-hidden">
                                <div className="h-1/2">
                                    <img
                                        src={val.content.rendered?.match(/<img[^>]+src="([^"]+)"/)?.[1]}
                                        alt="Blog Poster"
                                        className="p-2 blog_img object-scale-down w-full inset-0 transition-transform duration-200"
                                    />
                                </div>

                                <div className="h-1/2 px-6 pb-6 space-y-">
                                    <div className="py-4">
                                        <h2 className="blog_heading line-clamp-2 pt-2 font-semibold md:text-md transition-colors">
                                            {decode(val.title.rendered)}
                                        </h2>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <p className="text-sm truncate text-dark/80 pb-6">
                                            {extractContent(val.content.rendered)}
                                        </p>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 end-0 left-0">
                                    <p className="text-xs text-primary pl-6 pb-4">
                                        {formatDate(val.date)}
                                    </p>
                                </div>
                            </article>
                        </a>
                    </section>
                ))}
            </article>

            <div className="flex justify-center">
                <Link
                    href="https://blog.aekot.com/"
                    className="ghost-button inline-block w-5/6 sm:w-32 md:w-32 lg:w-32 xl:w-44 py-2 pl-2 ml-2 font-semibold text-center text-light border-2 border-primary bg-primary hover:bg-primary/90 rounded-md transition-colors" target="_blank"
                >
                    View All Blogs <FaLongArrowAltRight className="inline-block fa-arrow-right-long text-xs" />
                </Link>
            </div>
        </article>
    );
};

export default LatestBlogs;
