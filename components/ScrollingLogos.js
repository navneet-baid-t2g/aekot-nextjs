"use client";
import React from "react";

export default function ScrollingLogos() {
    const certificationImages = [
        { src: "/images/Certifications/C22.png" },
        { src: "/images/Certifications/C23.png" },
        { src: "/images/Certifications/C8.png" },
    ];

    return (
            <div
                className="absolute inset-0 flex justify-end sm:items-center"
                aria-hidden="true"
            >
                {/* The moving wrapper — this is what's animated.
            It contains TWO copies of the items, placed inline (row) on mobile and stacked (col) on desktop */}
                <div
                    className="flex flex-col sm:flex-row gap-8 w-max sm:w-[200%] animate-scrollY sm:animate-scrollY"
                    style={{ /* keep natural sizing; w-[200%] helps horizontal flow */ }}
                >
                    {/* first copy */}
                    <div className="flex flex-col sm:flex-row gap-8 flex-shrink-0">
                        {certificationImages.map((src, i) => (
                            <img
                                key={`a-${i}`}
                                src={src.src}
                                alt={`Certification ${i + 1}`}
                                className="h-[102px] w-[102px] object-contain flex-shrink-0"
                            />
                        ))}
                    </div>

                    {/* second copy (duplicate) */}
                    <div className="flex flex-col sm:flex-row gap-8 flex-shrink-0">
                        {certificationImages.map((src, i) => (
                            <img
                                key={`b-${i}`}
                                src={src.src}
                                alt={`Certification ${i + 1}`}
                                className="h-[102px] w-[102px] object-contain flex-shrink-0"
                            />
                        ))}
                    </div>
                </div>
        </div>
    );
}
