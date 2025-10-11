"use client";

import { useState } from "react";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { RiBuilding2Line } from "react-icons/ri";
import { IoMdCloudOutline } from "react-icons/io";

export default function CaseStudyCard({ card }) {
    const [showMoreIndustry, setShowMoreIndustry] = useState(false);
    const [showMoreCloud, setShowMoreCloud] = useState(false);

    const maxVisibleItems = 6;

    const industriesToShow = showMoreIndustry
        ? card.industry
        : card.industry.slice(0, maxVisibleItems);

    const cloudsToShow = showMoreCloud
        ? card.cloud
        : card.cloud?.slice(0, maxVisibleItems);
    
    return (
        <Link
            href={`/case-studies/${card.title_id}`}
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 pb-4 transform hover:-translate-y-3 transition-transform duration-300 min-w-[20rem] cursor-pointer"
        >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 min-h-[24rem]">
                <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-full h-44 object-cover"
                />

                <div className="px-4 pt-4 text-dark flex flex-col h-[calc(100%-11rem)]">
                    <h3 className="text-md font-semibold text-primary h-8">{card.title}</h3>

                    {/* Location */}
                    <div className="h-8">
                        {card.location && card.location.length > 0 && (
                            <div className="text-gray-500 text-sm flex flex-wrap justify-center items-center space-x-3">
                                {card.location.map((loc, index) => (
                                    <div key={index} className="flex items-center">
                                        <IoLocationSharp className="mr-1" />
                                        <span>{loc}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 font-semibold text-sm h-14 overflow-hidden">
                        {card.description}
                    </p>

                    <div className="mt-auto">
                        {/* Industry Section */}
                        <div className="flex flex-col px-4 text-gray-600 text-left">
                            <div className="flex items-start hover:text-primary text-left">
                                <div className="mr-4 flex-shrink-0">
                                    <RiBuilding2Line className="w-4 h-4 text-xl" />
                                </div>
                                <div className="text-xs font-medium break-words">
                                    {industriesToShow.join(", ")}
                                </div>
                            </div>

                            {card.industry.length > maxVisibleItems && (
                                <button
                                    onClick={(e) => {
                                        e.preventDefault(); // prevent navigation when expanding
                                        setShowMoreIndustry(!showMoreIndustry);
                                    }}
                                    className="text-dark text-sm font-medium mt-2"
                                >
                                    {showMoreIndustry
                                        ? "Show less"
                                        : `+${card.industry.length - maxVisibleItems} more`}
                                </button>
                            )}
                        </div>

                        {/* Cloud Section */}
                        {card.cloud && card.cloud.length > 0 && (
                            <div className="flex flex-col mt-2 px-4 text-gray-600">
                                <div className="flex items-start hover:text-[#00A1E0] text-left">
                                    <div className="mr-4 flex-shrink-0">
                                        <IoMdCloudOutline className="w-4 h-4 text-xl" />
                                    </div>
                                    <div className="text-xs font-medium break-words">
                                        {cloudsToShow.join(", ")}
                                    </div>
                                </div>
                                {card.cloud.length > maxVisibleItems && (
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setShowMoreCloud(!showMoreCloud);
                                        }}
                                        className="text-dark text-sm font-medium mt-2"
                                    >
                                        {showMoreCloud
                                            ? "Show less"
                                            : `+${card.cloud.length - maxVisibleItems} more`}
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}
