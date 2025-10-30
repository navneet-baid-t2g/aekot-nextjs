
"use client";
import { LuChevronUp, LuChevronDown } from "react-icons/lu";
import { useState } from "react";
export default function Faq({ key, question, answer }) {
    const [openFAQ, setOpenFAQ] = useState(null);
    return (
        <div key={key} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setOpenFAQ(openFAQ === key ? null : key)}
            >
                <span className="text-md font-semibold">{question}</span>
                {openFAQ === key ? (
                    <LuChevronUp size={24} />
                ) : (
                    <LuChevronDown size={24} />
                )}
            </button>
            {openFAQ === key && (
                <p
                    className="mt-2 text-gray-700 text-sm"
                    dangerouslySetInnerHTML={{ __html: answer }}
                ></p>

            )}
        </div>
    );
}