"use client";

import Link from "next/link";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { HiLightBulb } from "react-icons/hi2";

export default function JobSearch({ jobs }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobs.filter((job) =>
    job.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <article className="max-w-screen-xl mx-auto pt-12 text-center space-y-4" id="jobs">
      <h2 className="text-primary font-bold xs:text-3xl text-2xl md:text-3xl xl:text-4xl">
        Open Positions
      </h2>

      <div className="flex justify-center items-center mt-10">
        <div className="relative flex items-center w-full max-w-lg">
          <i className="fa-solid fa-magnifying-glass absolute left-4 text-lg md:text-xl text-gray-500"></i>
          <input
            id="search"
            type="search"
            placeholder="Search for open positions"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-light border border-dark w-full px-12 h-12 rounded-full focus:border-primary outline-none"
          />
        </div>
      </div>

      <section
        className="jobs max-w-screen-xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredJobs.length === 0 ? (
          <p className="text-center col-span-full text-gray-500 text-lg">
            No jobs available at the moment.
          </p>
        ) : (
          <>
            {filteredJobs.map((val) => (
              <div
                key={val.job_id}
                className="shadow-xl rounded-lg p-6 flex flex-col gap-4 hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <header className="pt-4 font-bold text-lg md:text-2xl text-dark">
                  {val.name}
                </header>
                <p className="text-base text-dark break-all">
                  {val.short_summary || "No Summary Provided"}
                </p>
                <div className="text-sm text-dark/60 space-y-1">
                  <p className="flex items-center gap-2">
                    <HiLightBulb /> {val.experience}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaLocationDot /> {val.location}
                  </p>
                </div>
                <a
                  href={`/careers/apply/${val.job_id}`}
                  className="inline-block mt-auto text-primary hover:translate-x-1 transition-all ghost-button py-2"
                >
                  Apply Now <i className="fa-solid fa-arrow-right-long text-xs"></i>
                </a>
              </div>
            ))}

            <Link
              href="/careers/apply"
              className="shadow-xl rounded-lg p-6 flex flex-col justify-center items-center text-center gap-4 hover:scale-105 transition-transform duration-300 ease-in-out h-full min-h-[300px]"
            >
              <h3 className="inline-block text-primary hover:translate-x-1 transition-all ghost-button py-2 hover:text-primary">
                View All openings <i className="fa-solid fa-arrow-right-long text-xs"></i>
              </h3>
              <p className="text-sm text-black/60">
                Explore all available roles at Aekot and find your perfect fit.
              </p>
            </Link>
          </>
        )}
      </section>
    </article>
  );
}
