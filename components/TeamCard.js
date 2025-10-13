"use client";

import { useState } from "react";
import { FaEnvelope, FaInfo, FaLinkedinIn, FaSearch } from "react-icons/fa";
import JSONDATAPERSON from "@/data/MOCK_DATA_PERSON.json";

export default function TeamSection() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredTeam = JSONDATAPERSON.filter((val) => {
        if (!searchTerm) return true;
        const lower = searchTerm.toLowerCase();
        return (
            val.name.toLowerCase().includes(lower) ||
            val.designation.toLowerCase().includes(lower)
        );
    });

    return (
        <section className="max-w-screen-xl mx-auto pb-12 px-2 text-center">
            {/* Search bar */}
            <div className="flex justify-center items-center mt-10">
                <div className="flex items-center w-full max-w-lg bg-light border border-dark px-4 h-12 rounded-full focus-within:border-primary transition-colors">
                    <FaSearch className="fa-solid fa-magnifying-glass text-lg md:text-xl text-gray-500" />
                    <input
                        id="search"
                        type="search"
                        placeholder="Search by name or designation..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-grow bg-transparent border-none px-4 outline-none"
                    />
                </div>
            </div>

            {/* Team grid */}
            <div className="max-w-screen-xl mx-auto pb-12 px-2 text-center">
                {filteredTeam.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-gray-600">
                        <div className="text-5xl text-yellow-500 mb-4">❗</div>
                        <p className="text-lg font-semibold">No team members found.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-12">
                        {filteredTeam.map((val, key) => (
                            <div
                                key={key}
                                className="team_card bg-[#fcfcfc] rounded-3xl overflow-visible flex flex-col items-center p-6 shadow-xl"
                            >
                                <img
                                    src={val.img}
                                    alt="avatar"
                                    className="rounded-2xl h-36 object-cover mb-4 mt-4"
                                />
                                <hr className="w-40 h-px mt-1 mb-2 bg-gray-200 border-0 dark:bg-stone-600" />
                                <div className="text-center">
                                    <header className="member_name text-black font-bold text-xl transition-colors">
                                        {val.name}
                                    </header>
                                    <p className="text-md text-black mb-4">{val.designation}</p>
                                    <div className="flex space-x-4 mt-4 justify-center">
                                        {val.flags &&
                                            val.flags.map((flag, index) => (
                                                <div
                                                    key={index}
                                                    className="text-gray-500 hover:text-gray-700"
                                                >
                                                    <img
                                                        title={flag.title}
                                                        src={flag.url}
                                                        className="w-6 h-6 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300"
                                                        alt="Flag"
                                                    />
                                                </div>
                                            ))}
                                    </div>

                                    <div className="flex space-x-4 mt-4 justify-center">
                                        {val.email && (
                                            <a
                                                href={`mailto:${val.email}`}
                                                className="text-gray-500 hover:text-gray-700"
                                            >
                                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 svgicon">
                                                    <FaEnvelope />
                                                </div>
                                            </a>
                                        )}
                                        {val.linkedin && (
                                            <a
                                                href={val.linkedin}
                                                className="text-gray-500 hover:text-gray-700"
                                            >
                                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 svgicon">
                                                    <FaLinkedinIn />
                                                </div>
                                            </a>
                                        )}
                                        {val.intro && (
                                            <div className="relative group">
                                                <div className="text-gray-500 hover:text-gray-700 cursor-pointer">
                                                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 svgicon">
                                                        <FaInfo />
                                                    </div>
                                                </div>
                                                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-52 bg-white text-gray-700 text-sm rounded-lg shadow-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                                                    {val.intro}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
