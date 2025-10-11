import { FaStar } from "react-icons/fa";

const badges = [
    {
        src: "/Rewards/P1P-logo.jpg",
        link: "https://www.pledge1percent.org/",
    },
    {
        src: "/Rewards/crest.png",
        link: "https://appexchange.salesforce.com/appxConsultingListingDetail?listingId=a0N3u00000MSsTuEAL",
    },
    {
        src: "/Rewards/appexchange.png",
        link: "https://appexchange.salesforce.com/appxConsultingListingDetail?listingId=a0N3u00000MSsTuEAL",
    },
    {
        src: "/Rewards/Salesforce-Talent-Alliance-Badge.png",
        link: "https://www.glassdoor.co.in/Reviews/Aekot-Reviews-E4065231.htm",
    },
    {
        src: "/Rewards/VoP.jpg",
        link: "https://www.designrush.com/agency/profile/aekot",
    },
    {
        src: "/Rewards/RankwatchBadge.png",
        link: "https://www.rankwatch.com/agency/company/aekot/",
    },
    {
        src: "/Rewards/Clutch.png",
        link: "https://clutch.co/profile/aekot",
    },
];

const RewardsRecognition = () => {
    return (
        <section className='grid grid-cols-1 sm:grid-cols-1 sm:gap-6 md:grid-cols-1'>
            {/* Badges */}

            <div className="flex flex-wrap justify-center gap-12 px-4 md:px-12 w-full">
                {badges.map((badge, index) => (
                    <div key={index} className="flex justify-center items-center">
                        {badge.link ? (
                            <a href={badge.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={badge.src}
                                    alt="icon"
                                    className="h-24 w-24 md:h-28 md:w-28 rounded-xl hover:-translate-y-1 hover:shadow-2xl hover:scale-110 shadow-lg transition-all duration-300"
                                />
                            </a>
                        ) : (
                            <img
                                src={badge.src}
                                alt="icon"
                                className="h-24 w-24 md:h-28 md:w-28 rounded-xl hover:-translate-y-1 hover:shadow-2xl hover:scale-110 shadow-lg transition-all duration-300"
                            />
                        )}
                    </div>
                ))}
            </div>


            {/* CSAT & ESA */}
            <div className="justify-center md:py-8 text-lg  flex flex-col md:flex-row md:gap-2">
                <a
                    href="https://appexchange.salesforce.com/appxConsultingListingDetail?listingId=a0N4V00000Fz0VQUAZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ghost-button py-2 px-4 block  hover:translate-x-1 transition-all"
                >
                    <div className="bg-white border-2 border-grey-800 p-7  flex-row  justify-between items-center hover:shadow-2xl">
                        <p className="font-bold text-2xl flex justify-center items-center">
                            CSAT
                            {/* <i className="fa-solid fa-arrow-right-long text-xs"></i> */}
                        </p>
                        <p className="flex justify-center hover:none text-sm sm:text-center">
                            Customer Satisfaction Score
                        </p>
                        <div className="flex justify-center pt-4">
                            {[...Array(5)].map((_, index) => (
                                <FaStar
                                    key={index}
                                    className="fade-in-stars1 fa-sharp fa-solid fa-star text-4xl text-yellow-500 pr-1"
                                />
                            ))}
                        </div>
                    </div>
                </a>
                <a
                    href="https://www.glassdoor.co.in/Reviews/Aekot-Reviews-E4065231.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ghost-button py-2 px-4 block hover:translate-x-1 transition-all"
                >
                    <div className="bg-white border-2 border-grey-800 p-7  flex-row  justify-between items-center hover:shadow-2xl">
                        <p className="font-bold text-2xl flex justify-center items-center">
                            ESAT
                        </p>
                        <p className="flex justify-center hover:none text-sm sm:text-center">
                            Employee Satisfaction Score
                        </p>
                        <div className="flex justify-center pt-4">
                            {[...Array(5)].map((_, index) => (
                                <FaStar
                                    key={index}
                                    className="fade-in-stars1 fa-sharp fa-solid fa-star text-4xl text-yellow-500 pr-1"
                                />
                            ))}
                        </div>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default RewardsRecognition;