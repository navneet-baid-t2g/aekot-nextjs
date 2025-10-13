import { RiDoubleQuotesL } from "react-icons/ri";
import { FaIndustry } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import CertificateCarousel from "@/components/Certifications";
import ClientsCarousel from "@/components/ClientsCarousel";
import Button from "@/components/Button";
import Link from "next/link";
export const metadata = {
    title: "Leading Salesforce Consulting Company | AEKOT Experts",
    description:
        "As one of the top Salesforce consulting firms, AEKOT offers expert CRM consulting services to help businesses streamline operations and boost growth.",
    keywords: ["about, company, values, mission"],
    openGraph: {
        title: "Leading Salesforce Consulting Company | AEKOT Experts",
        description:
            "As one of the top Salesforce consulting firms, AEKOT offers expert CRM consulting services to help businesses streamline operations and boost growth.",
        url: "https://www.aekot.com/about/",
        images: [
            {
                url: "https://www.aekot.com/original Aekot logo.webp",
                alt: "AEKOT Logo",
            },
        ],
        type: "website",
    },
};

const services = [
    {
        image: "/assets/strategy.svg",
        alt: "Strategy",
        title: "Strategy",
        link: "/Services",
    },
    {
        image: "/assets/implementation.svg",
        alt: "Implementation",
        title: "Implementation",
        link: "/Services",
    },
    {
        image: "/assets/customization.svg",
        alt: "Customization",
        title: "Customization",
        link: "/Services",
    },
    {
        image: "/assets/integration.svg",
        alt: "Integration",
        title: "Integration",
        link: "/Services",
    },
    {
        image: "/assets/dataAnalytics.svg",
        alt: "Data Analytics",
        title: "Data Analytics",
        link: "/Services",
    },
    {
        image: "/assets/programServices.svg",
        alt: "Program Services",
        title: "Program Services",
        link: "/Services",
    },
];

const industries = [
    { src: "/industry/health.svg", alt: "img_industry", name: "Healthcare & Life Sciences" },
    { src: "/industry/finance.svg", alt: "img_industry", name: "Financial Services" },
    { src: "/industry/realestate.svg", alt: "img_industry", name: "Real Estate " },
    { src: "/industry/nonprofit.svg", alt: "img_industry", name: "Not for Profit" },
    { src: "/industry/professional.svg", alt: "img_industry", name: "Professional Services" },
    { src: "/industry/hightech.svg", alt: "img_industry", name: "High Tech" },
];

const About = () => {
    return (
        <>
            <section
                className={`px-4 pt-16 md:pt-32`}
            >
                {/* FIRST SECTION STARTS HERE */}
                <article className="max-w-screen-xl mx-auto py-12 ">
                    <div className="space-y-4 text-center">
                        <div className="space-y-4">
                            <h2
                                className={`font-bold xs:text-3xl text-2xl md:text-3xl lg:text-4xl`}
                            >
                                Our Journey to Accelerating
                                <br />
                            </h2>
                            <h2
                                className={`font-bold xs:text-3xl text-2xl md:text-3xl lg:text-4xl`}
                            >
                                <span className="text-primary">Digital Success</span>
                            </h2>
                        </div>
                    </div>
                    <div className="xs:bg-none sm:bg-none bg-cta-bg bg-center bg mt-14 p-6 md:p-24 flex flex-col md:flex-row gap-12 ">
                        <div className="lg:w-3/6 flex flex-col items-center text-center">
                            <p className="font-semibold text-2xl md:text-4xl mb-2">
                                You guessed it right. We’re <br className="hidden md:block" />{" "}
                                changing the game.
                            </p>
                            <div className="mt-2"><Button text="Book a Demo" path="/contact" /></div>
                        </div>

                        <p className="lg:w-3/6 text-justify max-w-screen-lg mx-auto lg:font-semibold md:font-semibold text-md md:text-base">
                            As a registered Salesforce consulting partner, Aekot offers a
                            comprehensive range of services, including customization,
                            implementation, consultation, application development, migration,
                            integration, and ongoing support and maintenance, across various
                            Salesforce platforms such as Sales Cloud, Service Cloud, Marketing
                            Cloud, Analytics, and more.
                        </p>
                    </div>
                </article>
                {/* Word from founder start */}
                <article className="max-w-screen-xl mx-auto text-center space-y-12 flex flex-col md:p-8">
                    <div className="mb-4">
                        <h2 className="text-primary font-bold xs:text-3xl text-2xl md:text-3xl lg:text-4xl">
                            A Word from the Founder
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center border border-gray-300 rounded-lg p-6 lg:p-10 w-full shadow-md">
                        <div className="relative flex-shrink-0 w-full lg:w-1/3 mb-6 lg:mb-0 lg:mr-6 flex justify-center items-center">
                            {" "}
                            <img
                                src={"/images/talent-images/USER-1.webp"}
                                alt="image"
                                className="w-52 h-52 lg:w-56 lg:h-56 rounded-lg object-cover" // Larger image size
                            />
                        </div>
                        <div className="w-full lg:w-2/3 text-left lg:pl-6">
                            {" "}
                            <h2 className="text-lg lg:text-xl font-semibold">Anup Prakash</h2>
                            <h2 className="text-sm lg:text-lg mb-1 lg:mb-2">
                                Tech Visionary & Innovator
                            </h2>
                            <div className="flex items-start text-sm lg:text-base text-gray-600 leading-relaxed">
                                {/* Left quote icon */}
                                <RiDoubleQuotesL className="text-3xl lg:text-4xl text-gray-800 mr-2 lg:mr-3" />{" "}
                                <p className="flex-1">
                                    With over a decade of consultancy experience, I have overseen
                                    the successful execution of more than 40 projects, extending
                                    from nurturing startups to catering to Fortune 500 companies.
                                    The major ones among them include Google, Fox Entertainment,
                                    Disney, State of Delaware, etc. I initiated the company just
                                    before the onset of the COVID pandemic. Having worked at
                                    Deloitte for three years, I recognized my capabilities. I
                                    decided it wasn't the path and chose to forgo a promotion in
                                    order to establish Aekot. Setting up my operations in a
                                    physical office, I firmly believe in the benefits of working
                                    from an office environment, offering fewer distractions and
                                    more focused work time.
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
                {/* Word from founder end */}
                {/* Tech We Expertise In */}
                <article className="max-w-screen-xl mx-auto text-center space-y-12 flex flex-col md:p-8">
                    <div className="mb-4">
                        <h2 className="text-primary font-bold xs:text-3xl text-2xl md:text-3xl lg:text-4xl xs:p-2 pb-8 mt-8">
                            Tech we Expertise in
                        </h2>
                        <p className="p-2 text-center max-w-screen-lg mx-auto text-sm md:text-base xs:text-md sm:text-sm leading-loose">
                            Driving Innovation and Customer Success Across Industries
                        </p>
                        <div className="cursor-pointer grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center">
                            {[
                                { src: "/assets/salesforce.svg", alt: "Salesforce", label: "Salesforce" },
                                { src: "/Rewards/odoo_logo.png", alt: "Odoo", label: "Odoo" },
                                { src: "/Rewards/hubspotLogo.webp", alt: "Hubspot", label: "Hubspot" },
                                { src: "/Rewards/zohoLogo.svg", alt: "Zoho", label: "Zoho" },
                            ].map((icon, index) => (
                                <div
                                    key={index}
                                    className="relative group aspect-square w-full max-w-[120px] sm:max-w-[160px] lg:max-w-[200px] mx-auto"
                                >
                                    <img
                                        src={icon.src}
                                        alt={icon.alt}
                                        className="w-full h-full object-contain transition-transform duration-300 transform group-hover:scale-110"
                                    />
                                    <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {icon.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </article>
                <div className="justify-center text-lg  flex flex-col md:flex-row md:gap-2">
                    <a
                        href="https://appexchange.salesforce.com/appxConsultingListingDetail?listingId=a0N4V00000Fz0VQUAZ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ghost-button py-2 px-4 block  hover:translate-x-1 transition-all"
                    >
                        <div className="bg-white border-2 border-grey-800 p-7  flex-row  justify-between items-center hover:shadow-2xl">
                            <p className="font-bold text-2xl flex justify-center items-center">
                                CSAT
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
                {/* CSAT/ESAT ratings */}

                {/* TEAM  and AWARDS*/}
                <article className="max-w-screen-xl mx-auto text-center space-y-12 flex flex-col md:p-8">
                    <div className="bg-white w-full py-16">
                        <div className="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap items-center">
                            {/* Left Section - Statistics */}
                            <div className="w-full lg:w-1/3 space-y-12 px-6">
                                <div>
                                    <h2 className="text-6xl font-bold ">90+</h2>
                                    <p className="text-gray-500 text-2xl mt-2">Certifications</p>
                                </div>

                                <div>
                                    <h2 className="text-6xl font-bold ">50+</h2>
                                    <p className="text-gray-500 text-2xl mt-2">Projects</p>
                                </div>
                            </div>

                            {/* Center Section - Image */}
                            <div className="w-full lg:w-2/3 p-6 md:p-0">
                                <img
                                    src={"/images/cultureImg/Img3.jpg"}
                                    alt="Professional working on laptop"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>

                            {/* Right Section - Content */}
                            <div className="w-full lg:w-1/3 p-6">
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold">
                                        We bring a Wealth of Experience from a Wide range of
                                        Backgrounds
                                    </h2>

                                    <p className="text-gray-500">
                                        Our team is a group of passionate individuals who are
                                        dedicated to helping businesses achieve their goals. We are
                                        committed to providing exceptional service and support to
                                        our clients, and we work tirelessly to ensure that they are
                                        successful.{" "}
                                    </p>

                                    <div className="flex justify-center"><Button text="Meet the Team" path="/our-team" /></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                {/* TEAM and AWARDS */}

                {/*Certification section */}
                <div className="space-y-6 text-center mb-24 px-16">
                    <h2 className="text-primary pt- font-bold xs:text-3xl text-2xl  md:text-3xl lg:text-4xl">
                        Certifications
                    </h2>
                    <p className="text-sm xs:text-xl sm:text-xl  md:text-base">
                        Expertise validated, excellence delivered.
                    </p>
                    <CertificateCarousel />
                </div>
                {/*Certification section ends here */}

                {/* Partnership & Accomplishments */}
                <article className="max-w-screen-xl mx-auto text-center space-y-12 flex flex-col md:p-8">
                    <div className="mb-4">
                        <h2 className="text-primary font-bold xs:text-3xl text-2xl md:text-3xl lg:text-4xl xs:p-2 pb-8 mb-8">
                            Partnerships and Accomplishments
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-4 items-center justify-center px-4 md:px-12 w-full ">
                            {" "}
                            <div className="flex justify-center items-center">
                                <a
                                    href="https://appexchange.salesforce.com/appxConsultingListingDetail?listingId=a0N3u00000MSsTuEAL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={"/Rewards/crest.png"}
                                        alt="icon"
                                        className="h-24 w-24 rounded-xl hover:-translate-y-1 hover:shadow-2xl hover:scale-110 shadow-lg"
                                    />
                                </a>
                            </div>
                            <div className="flex justify-center items-center">
                                <a
                                    href="https://www.pledge1percent.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={"/Rewards/P1P-logo.jpg"}
                                        alt="icon"
                                        className="h-24 w-24 rounded-xl hover:-translate-y-1 hover:shadow-2xl hover:scale-110 shadow-lg"
                                    />
                                </a>
                            </div>
                            <div className="flex justify-center items-center">
                                <a
                                    href="https://appexchange.salesforce.com/appxConsultingListingDetail?listingId=a0N3u00000MSsTuEAL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={"/Rewards/appexchange.png"}
                                        alt="icon"
                                        className="h-24 w-24 rounded-xl hover:-translate-y-1 hover:shadow-2xl hover:scale-110 shadow-lg"
                                    />
                                </a>
                            </div>
                            <div className="flex justify-center items-center">
                                <a
                                    href="https://www.glassdoor.co.in/Reviews/Aekot-Reviews-E4065231.htm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={"/Rewards/Salesforce-Talent-Alliance-Badge.png"}
                                        alt="icon"
                                        className="h-24 w-24 rounded-xl hover:-translate-y-1 hover:shadow-2xl hover:scale-110 shadow-lg"
                                    />
                                </a>
                            </div>
                            <div className="flex justify-center items-center">
                                <a
                                    href="https://www.designrush.com/agency/profile/aekot"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={"/Rewards/VoP.jpg"}
                                        alt="icon"
                                        className="h-24 w-24 rounded-xl hover:-translate-y-1 hover:shadow-2xl hover:scale-110 shadow-lg"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </article>
                {/* Partnership & Accomplishments */}

                {/* INDUSTRIES */}
                <article className="max-w-screen-xl mx-auto  text-center space-y-12 pt-4">
                    <section className="cta mx-auto bg-cta-bg bg-contain  items-center justify-center p-8">
                        <div className="mb-4">
                            <h2 className="text-primary font-bold xs:text-3xl text-2xl md:text-3xl lg:text-4xl xs:p-2 pb-8">
                                Industries we specialize in
                            </h2>
                        </div>

                        <div className="flex flex-wrap lg:flex-nowrap justify-center">
                            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-6">
                                {industries.map((industry, index) => (
                                    <div
                                        key={index}
                                        className={`flex flex-col items-center justify-center p-2 animate-in delay-${index * 0
                                            }`}
                                    >
                                        <img
                                            src={industry.src}
                                            alt={industry.alt}
                                            className="w-16"
                                        />
                                        <h2 className="p-2 xs:text-xs sm:text-xs md:text-md lg:text-md">
                                            {" "}
                                            {industry.name}{" "}
                                        </h2>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </article>
                {/* INDUSTRIES */}

                {/* client logos */}
                <div className="pt-20 text-center">
                    <h2 className="fade-in-head text-primary font-bold xs:text-3xl  md:text-3xl lg:text-4xl">
                        Our Clients
                    </h2>
                    <div>
                        <ClientsCarousel />
                    </div>
                </div>
                {/* client logos */}

                {/* SERVICES */}
                <article className="max-w-screen-xl mx-auto pb-12 text-center space-y-12">
                    <div className=" xs:p-4 sm:p-4 p-4 xs:h-32 sm:h-32 md:h-36 lg:h-28 bg-white ">
                        <h2 className="text-primary font-bold xs:text-3xl text-2xl md:text-3xl lg:text-4xl xs:p-2 pb-8">
                            Our Services
                        </h2>
                        <p className="p-2 text-center max-w-screen-lg mx-auto text-sm md:text-base xs:text-md sm:text-sm leading-loose">
                            Our services are designed to help you leverage the full potential
                            of Salesforce and achieve your business goals.
                        </p>
                    </div>
                    <section className=" bg-dots bg-center bg-no-repeat xs:bg-none sm:bg-none w-full flex flex-wrap items-center justify-center p-8">
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
                            {services.map((service, index) => (
                                <a href={service.link}>
                                    <div
                                        key={index}
                                        className={`flex flex-col items-center justify-center p-4 hover:scale-110 transition-transform duration-300 ease-in-out`}
                                    >
                                        <img
                                            src={service.image}
                                            alt={service.alt}
                                            className="w-full h-24 object-fit text-primary items-primary"
                                        />
                                        <h3 className="p-2 xs:text-sm sm:text-sm md:text-md lg:text-lg font-semibold">
                                            {service.title}
                                        </h3>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </section>
                </article>
                {/* SERVICES */}

                {/* case studies */}
                <article className="max-w-screen-xl mx-auto text-center space-y-12 pt-4">
                    <section className="mx-auto items-center justify-center p-8">
                        <div className="mb-4">
                            <h2 className="text-primary font-bold xs:text-3xl text-2xl md:text-3xl lg:text-4xl xs:p-2 pb-8">
                                Case Studies
                            </h2>
                        </div>

                        <div className="text-left grid gap-8 grid-cols-1 md:grid-cols-3">
                            {/* Card 1 */}
                            <Link href="/case-studies/greenway-sales-cloud">
                                <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl hover:scale-105 transition duration-200">
                                    <img
                                        src={"/images/caseStudyImages/GreenwayCSImg.png"}
                                        alt="Greenway"
                                        className="w-full h-48 object-cover rounded-t-lg mb-4"
                                    />
                                    <p className="text-left ml-2 text-md font-medium mb-2">
                                        Transforming Data Chaos into Client-Centric Clarity.
                                    </p>
                                    <div className="text-primary ml-2 flex gap-2 text-xs font-semibold text-left">
                                        <FaIndustry />
                                        Insurance
                                    </div>
                                </div>
                            </Link>
                            {/* Card 2 */}
                            <Link href="/case-studies/zota-saleforce-financial-services">
                                <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl hover:scale-105 transition duration-200">
                                    <img
                                        src={"/images/caseStudyImages/ZotaCSImg.png"}
                                        alt="Zota"
                                        className="w-full h-48 object-cover rounded-t-lg mb-4"
                                    />
                                    <p className="text-left ml-2 text-md font-medium mb-2">
                                        Empowering seamless and inclusive payment solutions
                                        worldwide.
                                    </p>
                                    <div className="text-primary ml-2 flex gap-2 text-xs font-semibold text-left">
                                        <FaIndustry />
                                        Payment Solutions
                                    </div>
                                </div>
                            </Link>
                            {/* Card 3 */}
                            <Link href="/case-studies/redwood-health-cloud">
                                <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl hover:scale-105 transition duration-200">
                                    <img
                                        src={"/images/caseStudyImages/RedwoodCSImg.png"}
                                        alt="Redwood"
                                        className="w-full h-48 object-cover rounded-t-lg mb-4"
                                    />
                                    <p className="text-left ml-2 text-md font-medium mb-2">
                                        Streamlining operations and enhancing patient care.
                                    </p>
                                    <div className="text-primary ml-2 flex gap-2 text-xs font-semibold text-left">
                                        <FaIndustry />
                                        Healthcare & Lifesciences
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="pt-4 flex justify-end">
                            <a
                                href="/case-studies"
                                className="text-primary font-semibold flex items-center hover:underline"
                            >
                                See All Case Studies
                                <span className="ml-2 text-primary text-2xl">
                                    <MdArrowOutward />
                                </span>
                            </a>
                        </div>
                    </section>
                </article>
                {/* case studies */}

                {/* Offices */}
                <article className="max-w-screen-xl mx-auto py-12 text-center space-y-12">
                    <section className="w-full flex flex-col items-center justify-center p-8">
                        <div className="xs:p-4 sm:p-4 p-4 xs:h-56 sm:h-64 md:h-52 lg:h-40 bg-white mb-7">
                            <h2 className="text-primary font-bold xs:text-3xl text-2xl md:text-3xl lg:text-4xl xs:p-2 pb-8">
                                Our Offices
                            </h2>
                            <p className="p-2 text-center max-w-screen-lg mx-auto text-sm md:text-base xs:text-md sm:text-md leading-loose">
                                Our global presence allows us to serve clients from different
                                regions and time zones, providing them with the support they
                                need to succeed.
                            </p>
                        </div>
                        {/* Circles with images */}
                        <div className="flex gap-4 justify-center mb-16">
                            {[
                                "/images/Flag_of_the_United_States_(DoS_ECA_Color_Standard).svg.png",
                                "/images/Flag_of_the_United_Arab_Emirates.svg.png",
                                "/images/Flag_of_India.svg.png",
                            ].map((imagePath, index) => (
                                <img
                                    key={index}
                                    src={imagePath}
                                    alt={`Office ${index + 1}`}
                                    className="w-12 h-12 rounded-full object-fill"
                                />
                            ))}
                        </div>
                        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-8">
                            <div className="delaware relative rounded-xl group">
                                <img
                                    src={"Usa.png"}
                                    alt="delaware"
                                    className="object-cover w-80 h-48 rounded-xl"
                                />

                                <p className="py-4"> Delaware, USA</p>
                                <hr className="w-full border-2 border-primary rounded-xl" />
                            </div>
                            <div className="dubai relative rounded-xl group">
                                <img
                                    src={"/Uae.png"}
                                    alt="dubai"
                                    className="object-cover w-80 h-48 rounded-xl"
                                />
                                <p className="py-4"> Dubai, UAE </p>
                                <hr className="w-full border-2 border-primary rounded-xl" />
                            </div>
                            <div className="bengaluru relative rounded-xl group ">
                                <img
                                    src={"/India.png"}
                                    alt="bengaluru"
                                    className="object-cover w-80 h-48 rounded-xl "
                                />
                                <p className="py-4"> Bengaluru, IND</p>
                                <hr className="w-full border-2 border-primary rounded-xl" />
                            </div>
                        </div>
                    </section>
                </article>
                {/* Offices */}
                {/* link to partnership portal */}
                <div className="max-w-screen-xl mx-auto shadow-[0_0_5px_rgba(0,0,0,0.25)] rounded-2xl md:px-24 mt-12 py-12 flex flex-col items-center relative">
                    <div className="w-full px-8 md:px-0 space-y-4 md:pb-8 text-center md:mb-6">
                        <p className="font-semibold text-xl text-center">
                            Get the{" "}
                            <span style={{ color: "#e52b50" }}> #AekotAdvantage </span> today
                        </p>
                        <p className="text-md text-gray-700 text-center">
                            At Aekot, we don't just implement Salesforce—we unlock its full
                            potential for your business. With our deep expertise and
                            innovative approach, we'll help you optimize your systems,
                            seamlessly integrate new technologies, and scale your operations
                            globally.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center text-center items-center gap-4 mt-8 md:mt-0 w-full md:w-auto md:absolute md:bottom-4 mb-4">
                        <div className="hover:scale-105 w-3/4 md:w-auto mt-4">
                            <Button text="Contact Us" path="/contact" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
