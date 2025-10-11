"use client";

import { useState } from "react";
import { FaEnvelope, FaInfo, FaLinkedinIn } from "react-icons/fa";

const JSONDATAPERSON = [
    {
        "name": "Anup Prakash",
        "designation": "Director",
        "intro": "15x Certified, Salesforce-certified system and application architect with a successful 14-year track record working hands-on in all aspects of Salesforce implementations, including architecture, development, and enhancements. His primary industry domains are technology, media, telecommunications, real estate, and US government projects.",
        "img": "/images/talent-images/USER-1.webp",
        "email": "anup.prakash@aekot.com",
        "location": "India UAE USA",
        "flags": [
            {
                "url": "/images/Flag_of_India.svg.png",
                "title": "India"
            },
            {
                "url": "/images/Flag_of_the_United_Arab_Emirates.svg.png",
                "title": "United Arab Emirates"
            },
            {
                "url": "/images/Flag_of_the_United_States_(DoS_ECA_Color_Standard).svg.png",
                "title": "United States"
            }
        ],
        "linkedin": "https://www.linkedin.com/in/anupprakash/"
    },
    {
        "name": "Dr. Deepa Gupta",
        "designation": "Director",
        "intro": "Phd, IRMA, IIT-Guwahati. Standing of employee rights and with over a decade of experience working with govt bodies and social welfare. Leading regulatory and strategy for the company to ensure compliance and execution.",
        "img": "/images/talent-images/USER-397.webp",
        "email": "deepa.gupta@aekot.com",
        "location": "India",
        "flags": [
            {
                "url": "/images/Flag_of_India.svg.png",
                "title": "India"
            }
        ],
        "linkedin": "https://www.linkedin.com/in/deepa-researcher/"
    },
    {
        "name": "Archana M S",
        "designation": "Manager",
        "intro": "4x Certified. Defines hardwork and commitment. Trustworthy and experienced, establishes client relations swiftly with timely delivery. Mentors and guides teams to achieve great milestones.",
        "img": "/images/talent-images/USER-298.webp",
        "email": "archana.ms@aekot.com",
        "location": "USA canada",
        "flags": [
            {
                "url": "/images/CanadaFlag.webp",
                "title": "Canada"
            },
            {
                "url": "/images/Flag_of_the_United_States_(DoS_ECA_Color_Standard).svg.png",
                "title": "United States"
            }
        ],
        "linkedin": "https://www.linkedin.com/in/msarchana"
    },
    {
        "name": "Rag VS",
        "designation": "VP Sales",
        "intro": "Brings extensive experience in building scalable sales operations, fostering client relationships, and driving cross-functional alignment with business goals",
        "img": "/images/talent-images/USER-530.webp",
        "email": "rag.vs@aekot.com",
        "location": "India",
        "flags": [
            {
                "url": "/images/Flag_of_India.svg.png",
                "title": "India"
            }
        ],
        "linkedin": "https://www.linkedin.com/in/raagvs1b8a1664/"
    },
    {
        "name": "Priya Kumari",
        "designation": "Manager",
        "intro": "Priya brings over a decade of expeience working for leading companies like, Wipro, Oracle, Cognizant and brings a wealth of knowledge in BFSI. She wears multiple hats and helps managing teams of sales and oversees the entire QA delivery for our customers.",
        "img": "/images/talent-images/priya_kumari.webp",
        "email": "priya@aekot.com",
        "location": "India",
        "flags": [
            {
                "url": "/images/Flag_of_India.svg.png",
                "title": "India"
            }
        ],
        "linkedin": "https://www.linkedin.com/in/priya-aekot/"
    },
    {
        "name": "Omar Abu Zeid",
        "designation": "Consultant",
        "intro": "Ex-OwnBackup, USA. Leading partner relationship and catering to customer success.",
        "img": "/images/talent-images/omar.webp",
        "email": "omar.zeid@aekot.com",
        "location": "USA",
        "flags": [
            {
                "url": "/images/Flag_of_the_United_States_(DoS_ECA_Color_Standard).svg.png",
                "title": "United States"
            }
        ],
        "linkedin": "https://www.linkedin.com/in/omar-abu-zeid-575595149/"
    },
    {
        "name": "Ayman Salem",
        "designation": "Business Development Executive",
        "intro": "With over 15 Years of experience in helping businesses succeed, Ayman is a seasoned professional with a strong focus on Salesforce solutions. He has a proven track record of driving customer success.",
        "img": "/images/talent-images/USER-430.webp",
        "email": "ayman.salem@aekot.com",
        "location": "UAE",
        "flags": [
            {
                "url": "/images/Flag_of_the_United_Arab_Emirates.svg.png",
                "title": "United Arab Emirates"
            }
        ],
        "linkedin": "https://www.linkedin.com/in/ayman-a-02704821b/"
    },
    {
        "name": "Punam Pradhan",
        "designation": "Salesforce Administrator and Business Analyst",
        "intro": "3x Certified. Punam makes sure the requirements are never missed and when it comes to documentation, she has it all documented. She eases the way the customer interactions happen at Aekot.",
        "img": "/images/talent-images/punam.webp",
        "email": "contact@aekot.com",
        "location": "USA",
        "flags": [
            {
                "url": "/images/Flag_of_the_United_States_(DoS_ECA_Color_Standard).svg.png",
                "title": "United States"
            }
        ]
    },
    {
        "name": "Mayank Jaggi",
        "designation": "Senior Manager",
        "intro": "IIMA MBA, Ex-Deloitte, Ex-Akamai, carrying years of customer-centric experience. Exceptional delivery, execution and people manager. An AI implementer carrying a special love for technology is the best to describe Mayank in the minimal of words.",
        "img": "/images/talent-images/USER-71.webp",
        "email": "mayank.jaggi@aekot.com",
        "location": "India, UAE",
        "flags": [
            {
                "url": "/images/Flag_of_India.svg.png",
                "title": "India"
            },
            {
                "url": "/images/Flag_of_the_United_Arab_Emirates.svg.png",
                "title": "United Arab Emirates"
            }
        ],
        "linkedin": "https://www.linkedin.com/in/jaggimayank/"
    },
    {
        "name": "Varannya Manoharan",
        "designation": "Business Development Executive",
        "intro": "Leading partner relationship and catering to customer success.",
        "img": "/images/talent-images/varannya.webp",
        "email": "varannya.manoharan@aekot.com",
        "location": "India UAE",
        "flags": [
            {
                "url": "/images/Flag_of_India.svg.png",
                "title": "India"
            },
            {
                "url": "/images/Flag_of_the_United_Arab_Emirates.svg.png",
                "title": "United Arab Emirates"
            }
        ],
        "linkedin": "https://www.linkedin.com/in/varannya-manoharan/"
    },
    {
        "name": "Sahana K S",
        "designation": "Manager",
        "intro": "6x Certified. Carrying experience of delivering exceptional services to large enterprises. PD1, PDII, Salesforce Certified Development Lifecycle and Deployment Architect, Salesforce Certified Administrator,Salesforce Certified Integration Architect, Salesforce Certified Sharing and Visibility Architect.",
        "img": "/images/talent-images/USER-73.webp",
        "email": "sahana.ks@aekot.com",
        "location": "India",
        "flags": [
            {
                "url": "/images/Flag_of_India.svg.png",
                "title": "India"
            }
        ],
        "linkedin": "https://www.linkedin.com/in/sahanaks/"
    },
    {
        "name": "Abinaya Elangovan",
        "designation": "Manager",
        "intro": "11x Certified, Versatile and the doer. You can rely on Abinaya with your Project, it is one of safest hands with the sharpest mind.",
        "img": "/images/talent-images/USER-72.webp",
        "email": "abinaya.elangovan@aekot.com",
        "location": "India",
        "flags": [
            {
                "url": "/images/Flag_of_India.svg.png",
                "title": "India"
            }
        ],
        "linkedin": "https://www.linkedin.com/in/abinaya-elangovan/"
    },
    {
        "name": "Mandeep C J",
        "designation": "Manager",
        "intro": "16+ years experienced Ex-Deloitte, project and team manager. Seasoned and experienced, establishes client relations swiftly with timely delivery. Mentors and guides teams to achieve great milestones",
        "img": "/images/talent-images/USER-595.webp",
        "email": "mandeep@aekot.com",
        "location": "India",
        "flags": [
            {
                "url": "/images/Flag_of_India.svg.png",
                "title": "India"
            }
        ],
        "linkedin": "https://www.linkedin.com/in/mandeep-c-j-60794738/"
    },
    {
        "name": "Varun Bhabhra",
        "designation": "Senior Consultant",
        "intro": "UI/UX designer focused on creating intuitive, engaging and seamless user experiences across web and mobile platforms.",
        "img": "/images/talent-images/USER-69.webp",
        "email": "contact@aekot.com",
        "location": "India",
        "flags": [
            {
                "url": "/images/Flag_of_India.svg.png",
                "title": "India"
            }
        ]
    },
    {
        "name": "Abhishek Kumar",
        "designation": "Manager",
        "intro": "With over 17 Years of experience in the IT industry, Abhishek is a seasoned professional with a strong focus on Salesforce solutions. He has a proven track record of delivering successful projects and driving customer satisfaction.",
        "img": "/images/talent-images/abhishek-kumar.webp",
        "email": "abhishek.kumar@aekot.com",
        "location": "India",
        "flags": [
            {
                "url": "/images/Flag_of_India.svg.png",
                "title": "India"
            }
        ],
        "linkedin": "https://www.linkedin.com/in/abhishek-kumar-072626168/"
    },

    {
        "name": "Pallavi D",
        "designation": "Manager",
        "intro": "To go person within the form and ensures the business operates smooth. Hardworking and comitted to Aekot's success and client relations.",
        "img": "/images/talent-images/USER-70.webp",
        "email": "pallavi.d@aekot.com",
        "location": "India",
        "flags": [
            {
                "url": "/images/Flag_of_India.svg.png",
                "title": "India"
            }
        ]
    },
    {
        "name": "Bharat Khandelwal",
        "designation": "Senior Consultant",
        "intro": "5x Certified, Share your vision with this gentleman and consider your job done with perfection. Certified Associate, PDI, PDII, Salesforce Certified Data Architect.",
        "img": "/images/talent-images/USER-75.webp",
        "email": "contact@aekot.com",
        "location": "India",
        "flags": [
            {
                "url": "/images/Flag_of_India.svg.png",
                "title": "India"
            }
        ]
    },
    {
        "name": "Chittikartheek Koneti",
        "designation": "Consultant",
        "intro": "Forefront of VAs. Centric to customer success.",
        "img": "/images/talent-images/USER-331.webp",
        "email": "contact@aekot.com",
        "location": "India",
        "flags": [
            {
                "url": "/images/Flag_of_India.svg.png",
                "title": "India"
            }
        ]
    },
    {
        "name": "Namanpreet Singh",
        "designation": "Consultant",
        "intro": "3x Certified, Capable of handling complex requirements and, Experience Cloud with LWC, APEX and integrations are comfortable areas.",
        "img": "/images/talent-images/naman1.webp",
        "email": "contact@aekot.com",
        "location": "India",
        "flags": [
            {
                "url": "/images/Flag_of_India.svg.png",
                "title": "India"
            }
        ]
    },
    {
        "name": "Manish Kumar",
        "designation": "Consultant",
        "intro": "5x certified,  Expertise in Apex, Lightning, and Integrations. Delivering scalable and efficient CRM solutions.",
        "img": "/images/talent-images/USER-200.webp",
        "email": "contact@aekot.com",
        "location": "India",
        "flags": [
            {
                "url": "/images/Flag_of_India.svg.png",
                "title": "India"
            }
        ]
    },
    {
        "name": "Paharlaya Basnet",
        "designation": "Consultant",
        "intro": "2x Certified, Hardwork with comittment to deliver quality Salesforce. Certified Agentforce specialist and Ai Associate with passion for delivering scalable, high-quality solutions",
        "img": "/images/talent-images/USER-100.webp",
        "email": "contact@aekot.com",
        "location": "India",
        "flags": [
            {
                "url": "/images/Flag_of_India.svg.png",
                "title": "India"
            }
        ]
    },
    {
        "name": "Meghana Gundu",
        "designation": "Consultant",
        "intro": "4X Certified, Hardwork with comittment to deliver quality Salesforce. Certified Ai Associate with passion for delivering scalable, high-quality solutions",
        "img": "/images/talent-images/USER-675.webp",
        "email": "contact@aekot.com",
        "location": "India UAE",
        "flags": [
            {
                "url": "/images/Flag_of_the_United_Arab_Emirates.svg.png",
                "title": "United Arab Emirates"
            }
        ]
    },
    {
        "name": "Prabhat Ranjan",
        "designation": "Associate Consultant",
        "intro": "Ex-PwC, 4X Certified, contributing to tailored business solutions by understanding client requirements, and supporting successful project execution.",
        "img": "/images/talent-images/USER-628.webp",
        "email": "contact@aekot.com",
        "location": "India",
        "flags": [
            {
                "url": "/images/Flag_of_India.svg.png",
                "title": "India"
            }
        ]
    },
    {
        "name": "Vaishnavi Bondade",
        "designation": "Associate Consultant",
        "intro": "Skilled full-stack developer with expertise in both front-end and back-end technologies(MERN), crafting robust and scalable web applications.",
        "img": "/images/talent-images/USER-76.webp",
        "email": "contact@aekot.com",
        "location": "India",
        "flags": [
            {
                "url": "/images/Flag_of_India.svg.png",
                "title": "India"
            }
        ]
    },
    {
        "name": "Shreenidhi Pani",
        "designation": "Associate Consultant",
        "intro": "Driven developer, mastering complexity to craft user-centric, high-performing experiences for client success.",
        "img": "/images/talent-images/USER-77.webp",
        "email": "contact@aekot.com",
        "location": "India",
        "flags": [
            {
                "url": "/images/Flag_of_India.svg.png",
                "title": "India"
            }
        ]
    },
    {
        "name": "Poorvi Tyagi",
        "designation": "Business Development Executive",
        "intro": "Leading partner relationship and catering to customer success.",
        "img": "/images/talent-images/USER-232.webp",
        "email": "poorvi.tyagi@aekot.com",
        "location": "India",
        "flags": [
            {
                "url": "/images/Flag_of_India.svg.png",
                "title": "India"
            }
        ],
        "linkedin": "https://www.linkedin.com/in/poorvi-tyagi/"
    },
    {
        "name": "Vishal Nelge",
        "designation": "Associate Consultant",
        "intro": "Certified Salesforce Developer professional with a strong focus on delivering scalable, efficient solutions.",
        "img": "/images/talent-images/USER-67.webp",
        "email": "contact@aekot.com",
        "location": "India",
        "flags": [
            {
                "url": "/images/Flag_of_India.svg.png",
                "title": "India"
            }
        ]
    },
    {
        "name": "Rashmi K",
        "designation": "Associate Consultant",
        "intro": "Aspiring QA professional. With a strong passion for manual and automation testing, particularly on Salesforce projects.",
        "img": "/images/talent-images/USER-74.webp",
        "email": "contactk@aekot.com",
        "location": "India",
        "flags": [
            {
                "url": "/images/Flag_of_India.svg.png",
                "title": "India"
            }
        ]
    },
    {
        "name": "G Suresh",
        "designation": "Associate Consultant",
        "intro": "2X Certified, contributing to tailored business solutions by understanding client requirements, and supporting successful project execution.",
        "img": "/images/talent-images/USER-364.webp",
        "email": "contact@aekot.com",
        "location": "India",
        "flags": [
            {
                "url": "/images/Flag_of_India.svg.png",
                "title": "India"
            }
        ]
    },
    {
        "name": "Mrunmayee Kapile",
        "designation": "Associate Consultant",
        "intro": "Certified Salesforce Developer dedicated to building scalable and efficient solutions.",
        "img": "/images/talent-images/USER-531.webp",
        "email": "contact@aekot.com",
        "location": "India",
        "flags": [
            {
                "url": "/images/Flag_of_India.svg.png",
                "title": "India"
            }
        ]
    },
    {
        "name": "Rohan Jangid",
        "designation": "Associate Consultant",
        "intro": "Certified Salesforce Developer with a passion for delivering scalable, high-quality solutions.",
        "img": "/images/talent-images/USER-529.webp",
        "email": "contact@aekot.com",
        "location": "India",
        "flags": [
            {
                "url": "/images/Flag_of_India.svg.png",
                "title": "India"
            }
        ]
    },
    {
        "name": "Abhiram M N",
        "designation": "Associate Consultant",
        "intro": "2X Certified, contributing to tailored business solutions by understanding client requirements, and supporting successful project execution.",
        "img": "/images/talent-images/USER-694.webp",
        "email": "contact@aekot.com",
        "location": "India",
        "flags": [
            {
                "url": "/images/Flag_of_India.svg.png",
                "title": "India"
            }
        ]
    }
]


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
            <div className="mb-8">
                <input
                    type="text"
                    placeholder="Search by name or designation..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-300 rounded-xl px-4 py-2 w-80 max-w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            {/* Team grid */}
            <div className="max-w-screen-xl mx-auto pb-12 px-2 text-center grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-12">
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
                                            ></img>
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
        </section>
    );
}
