"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import ApplicationForm from "@/components/ApplicationForm";
import JobDescription from "@/components/JobDescription";

export default function JobDetailsPage({ params }) {
    const { selectedJobTitle } = useParams(); 
    const [selectedJob, setSelectedJob] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadJobById = async () => {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_CAREERS_BASE_URL}/jobs/${selectedJobTitle}`,
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.NEXT_PUBLIC_CAREERS_API_KEY}`,
                        },
                    }
                );

                if (!res.ok) {
                    throw new Error(`Server responded with ${res.status}`);
                }

                const data = await res.json();

                if (data.success && data.job) {
                    setSelectedJob(data.job);
                    setQuestions(data.job.questions || []);
                } else {
                    throw new Error(data.message || "Job not found");
                }
            } catch (err) {
                console.error("Failed to fetch job:", err);
                setError("Unable to load job details. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        loadJobById();
    }, [selectedJobTitle]);

    if (loading)
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-600 animate-pulse">Loading job details...</p>
            </div>
        );

    if (error)
        return (
            <div className="min-h-screen flex items-center justify-center text-center">
                <div>
                    <p className="text-red-600 font-semibold mb-2">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );

    if (!selectedJob)
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-600">Job not found.</p>
            </div>
        );

    return (
        <section className="px-4 pt-20 md:pt-32">
            <article className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 text-left">
                <div className="flex-[1_1_0%]">
                    <ApplicationForm
                        jobType={selectedJobTitle}
                        jobTitle={selectedJob.name}
                        questions={questions}
                    />
                </div>
                <div className="flex-[0_0_auto] w-full lg:w-[35vw]">
                    <JobDescription job={selectedJob} />
                </div>
            </article>
        </section>
    );
}
