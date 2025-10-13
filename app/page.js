import ClientsCarousel from "@/components/ClientsCarousel";
import CTA from "@/components/CTA";
import LatestBlogs from "@/components/LatestBlogs";
import LatestNews from "@/components/LatestNews";
import RewardsRecognition from "@/components/RewardsRecognition";
import Service from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const metadata = {
  title: "Salesforce Consulting Services to Grow Your Business | AEKOT",
  description:
    "Maximize sales and efficiency with expert Salesforce CRM consulting from AEKOT. Tailored strategies to streamline your CRM processes.",
  keywords: ["home", "website", "business", "services"],
  openGraph: {
    title: "Salesforce Consulting Services to Grow Your Business | AEKOT",
    description:
      "Maximize sales and efficiency with expert Salesforce CRM consulting from AEKOT. Tailored strategies to streamline your CRM processes.",
    url: "https://www.aekot.com/",
    images: [
      {
        url: "https://www.aekot.com/original Aekot logo.webp",
        alt: "AEKOT Logo",
      },
    ],
    type: "website",
  },
};

export default function Home() {

  const generateServicePath = (name) => {
    return `/services/${name.toLowerCase().replace(/ & | /g, "-").replace(/--+/g, "-")}`;
  };
  return (
    <>
      <section className="w-full p-2.5">
        <div className="hero-section bg-dots bg-center bg-no-repeat">
          <article className="max-w-screen-xl flex items-center justify-center flex-col mx-auto mt-24 space-y-6 md:space-y-14">
            <div className="items-center flex flex-col space-y-6">
              <p className="fade-in-subhead font-semibold text-lg md:text-xl sm:mt-24 mt-20 px-6 text-center">
                Salesforce Implementation Partners
              </p>

              <h1 className="fade-in-head text-center text-primary font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:leading-normal px-12">
                Crafting Salesforce <br className="hidden md:block" /> Solutions
                that Matter
              </h1>
            </div>

            <img
              src="/assets/hero_doodle.svg"
              alt="Underline SVG Element"
              className="fade-in-hero-underline hidden xl:block xl:absolute -translate-y-[1rem] translate-x-1/2"
            />

            <div className="flex justify-center items-center w-[60%] text-right md:mt-0 md:ml-4 pb-8">
              <Link
                href="/contact"
                className="ghost-button inline-block w-full sm:w-44 md:w-48 lg:w-48 py-2 pl-2 font-semibold text-center text-light border-2 border-primary bg-primary rounded-lg transition-colors flex items-center justify-center gap-2"
                style={{ transition: "transform 0.2s ease-in-out" }}
              >
                Book a demo{" "}
                <FaArrowRight className="fa-arrow-right-long text-xs" />
              </Link>
            </div>
          </article>
        </div>
        <article
          className={`fade-in-head max-w-screen-xl mt-12 mx-auto text-center`}
        >
          <div className=" h-18 space-y-4 items-center sm:flex sm:flex-col">
            <h2 className="text-primary font-bold xs:text-3xl text-2xl md:text-3xl lg:text-4xl">
              Driving business success through Salesforce
            </h2>
            <p className="p-6 max-w-screen items-center text-center text-lg sm:text-justify xs:text-justify">
              Aekot is a Salesforce consulting firm servicing clients across the
              globe, with majority of our clientele based out of North America.
              With an A-team of highly qualified Salesforce professionals
              collectively holding decades of SFDC experience, we excel at
              transforming businesses with the help of World&apos;s #1 CRM.
            </p>
          </div>
          <section className="py-12 bg-gradient-to-br from-[#ffffff] to-[#fffafa] relative overflow-hidden w-full mt-12">
            <div className="absolute top-[-10%] left-[30%] w-[200px] h-[200px] bg-primary opacity-10 blur-2xl rounded-full pointer-events-none"></div>

            <div className="max-w-screen-xl mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md px-12 py-10 space-y-6 border border-gray-200 text-center">
                  <div className="inline-block border-l-4 border-primary pl-3">
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-snug">
                      Transforming Care with <span className="text-primary">Healthcloud</span>
                    </h2>
                  </div>

                  <p className="text-gray-700 text-md sm:text-base max-w-3xl mx-auto leading-relaxed">
                    At Aekot, we help healthcare organizations redefine care delivery through Salesforce <strong className="text-primary">Health Cloud</strong>
                    — a powerful CRM platform built specifically for the healthcare and life sciences sector.
                  </p>
                  <div className="flex justify-center pt-4">
                    <Link
                      href="/healthcloud"
                      className="ghost-button text-sm inline-block hover:scale-110 sm:w-44 md:w-48 lg:w-48 py-2 pl-2 font-semibold text-center text-light border-2 border-primary bg-primary rounded-md transition-colors flex items-center justify-center gap-2"
                      style={{ transition: "transform 0.2s ease-in-out" }}
                    >
                      Explore Healthcloud{" "}
                      <FaArrowRight className="fa-arrow-right-long text-xs" />
                    </Link>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md px-12 py-10 space-y-6 border border-gray-200 text-center">
                  <div className="inline-block border-l-4 border-primary pl-3">
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-snug">
                      Powering the Future with <span className="text-primary">Agentforce</span>
                    </h2>
                  </div>

                  <p className="text-gray-700 text-md sm:text-base max-w-3xl mx-auto leading-relaxed">
                    At Aekot, we’re not just embracing AI — we’re <span className="font-medium text-gray-900">leading the charge</span>.
                    As one of the first Salesforce partners to empower clients with <strong className="text-primary">Agentforce</strong>,
                    we’re redefining how businesses streamline operations and boost efficiency.
                  </p>
                  <div className="flex justify-center pt-4">
                    <Link
                      href="/Services/agentforce"
                      className="ghost-button text-sm inline-block hover:scale-110 sm:w-44 md:w-48 lg:w-48 py-2 pl-2 font-semibold text-center text-light border-2 border-primary bg-primary rounded-md transition-colors flex items-center justify-center gap-2"
                      style={{ transition: "transform 0.2s ease-in-out" }}
                    >
                      Explore Agentforce{" "}
                      <FaArrowRight className="fa-arrow-right-long text-xs" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="pt-20">
            <h2 className="fade-in-head text-primary font-bold xs:text-3xl  md:text-3xl lg:text-4xl">
              Our Clients
            </h2>
            <div>
              <ClientsCarousel />
            </div>
          </div>
          <div className="max-w-[100%] text-center pt-8">
            <h2 className="text-primary font-bold xs:text-3xl md:text-3xl lg:text-4xl">
              What our clients say about us
            </h2>
            <TestimonialSlider />
          </div>
        </article>
        <div className="py-14">
          <h2 className="fade-in-head text-primary pb-8 text-center font-bold xs:text-3xl text-2xl md:text-3xl lg:text-4xl">
            Partnerships and Accomplishments
          </h2>
          <RewardsRecognition />
        </div>
        <article className="max-w-screen-xl mx-auto space-y-6">
          <div className="space-y-6 text-center">
            <h2 className="text-primary pt-12 font-bold xs:text-3xl text-2xl  md:text-3xl lg:text-4xl">
              Services We Provide
            </h2>
            <p className="text-sm xs:text-xl sm:text-xl  md:text-base">
              Compelled by a powerful aspiration to deliver top-tier{" "}
              <br className="hidden md:block" /> Salesforce solutions.
            </p>
          </div>
          <div className="max-w-screen grid md:grid-cols-2 lg:md:grid-cols-3 gap-4 xl:gap-24 md:px-12">
            <Service
              icon={"/assets/customization.svg"}
              name="Agentforce Implementation & Services"
              text="Empower your teams with intelligent automation, seamless integration, and unmatched scalability — Agentforce is redefining how businesses operate in the age of AI."
              path='/Services/agentforce'
            ></Service>
            <Service
              icon={"/assets/strategy.svg"}
              name="Salesforce Consulting & Strategy"
              text="Our Salesforce consulting services are designed to understand your business goals and implement the most effective CRM strategy that maximizes ROI."
              path={generateServicePath("Salesforce Consulting & Strategy")}
            ></Service>
            <Service
              icon={"/assets/implementation.svg"}
              name="Implementation & Integration"
              text="Streamline your operations with expertly executed Salesforce integration and implementation services."
              path={generateServicePath("Salesforce Implementation & Integration")}
            ></Service>
            <Service
              icon={"/assets/integration.svg"}
              name="Salesforce Support & Managed services"
              text="From troubleshooting to continuous improvements, our Salesforce support ensures you stay ahead."
              path={generateServicePath("Salesforce Support & Managed Services")}
            ></Service>
            <Service
              icon={"/assets/training.svg"}
              name="Salesforce Training & Adoption"
              text="Ensure your team makes the most of Salesforce with personalized training and adoption programs."
              path={generateServicePath("Salesforce Training & Adoption")}
            ></Service>
            <Service
              icon="/assets/data_migration.svg"
              name="Data Migration & Management"
              text="Ensure safe, accurate, and seamless migration of your data into Salesforce."
              path={generateServicePath("Data Migration & Management")}
            ></Service>
          </div>
        </article>
        <div className="fade-in-head pt-2 mx-4">
          <CTA
            head="Why choose us as a Salesforce Implementation Partner?"
            text="Whether you&apos;re looking to optimize your Salesforce implementation, integrate new technologies, or expand your global reach, Aekot has the expertise and passion to help you succeed. 
                   Let&apos;s transform your business together."
            image={"/assets/salesforce.svg"}
          />
        </div>
        <div className="py-14">
          <LatestNews />
        </div>
        <LatestBlogs />
      </section></>
  );
}
