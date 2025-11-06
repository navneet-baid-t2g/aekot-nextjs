"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HiLightBulb } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";

export default function ApplyPage() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const limit = 6;

    const fetchJobs = async (append = false, customOffset = 0) => {
        setLoading(true);
        try {
            const url = `${process.env.NEXT_PUBLIC_CAREERS_BASE_URL}/jobs?limit=${limit}&offset=${customOffset}`;
            const res = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CAREERS_API_KEY}`,
                },
            });
            const data = await res.json();

            if (data.success) {
                setJobs(prev => (append ? [...prev, ...data.jobs] : data.jobs));
                setHasMore(data.jobs.length === limit);
            }
        } catch (err) {
            console.error("Failed to fetch jobs:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs(false);
    }, []);

    const loadMoreJobs = () => {
        const nextOffset = offset + limit;
        setOffset(nextOffset);
        fetchJobs(true, nextOffset);
    };

    const filteredJobs = jobs.filter(
        j =>
            searchTerm === "" ||
            j.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="px-4 pt-20 md:pt-32">
            <article className="max-w-6xl mx-auto text-center space-y-8">
                <h2 className="text-3xl font-bold">Select a job to apply</h2>

                {/* Search Bar */}
                <div className="flex justify-center items-center mt-6 mb-4">
                    <div className="relative flex items-center w-full max-w-lg">
                        <i className="fa-solid fa-magnifying-glass absolute left-4 text-lg text-gray-500"></i>
                        <input
                            id="search"
                            type="search"
                            placeholder="Search for open positions"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="bg-white border border-gray-300 w-full px-12 h-12 rounded-full focus:border-primary transition outline-none"
                        />
                    </div>
                </div>

                {/* Job Cards */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading && jobs.length === 0 ? (
                        <p className="col-span-full text-gray-500">Loading jobs...</p>
                    ) : filteredJobs.length === 0 ? (
                        <p className="col-span-full text-gray-500 text-lg">
                            {searchTerm
                                ? `No jobs found matching "${searchTerm}"`
                                : "No jobs available at the moment. Please check back later."}
                        </p>
                    ) : (
                        filteredJobs.map(job => (
                            <Link
                                key={job.id}
                                href={`/careers/apply/${job.job_id}`}
                                className="shadow-lg rounded-lg p-8 flex flex-col gap-4 hover:scale-105 transition-transform"
                            >
                                <header className="pt-4 font-bold text-lg md:text-2xl text-start">
                                    {job.name}
                                </header>
                                <p className="text-start text-gray-700">
                                    {job.short_summary || "No Summary Provided"}
                                </p>
                                <div className="text-sm text-gray-600 space-y-1 text-start">
                                    <p className="flex items-center gap-2">
                                        <HiLightBulb /> {job.experience}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <FaLocationDot /> {job.location}
                                    </p>
                                </div>
                                <span className="inline-block mt-auto text-primary hover:translate-x-1 text-start transition-all">
                                    Apply Now <i className="fa-solid fa-arrow-right-long text-xs"></i>
                                </span>
                            </Link>
                        ))
                    )}

                    {hasMore && (
                        <div className="col-span-full mt-8">
                            <button
                                onClick={loadMoreJobs}
                                className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition"
                            >
                                View More
                            </button>
                        </div>
                    )}
                </section>
            </article>
        </section>
    );
}
