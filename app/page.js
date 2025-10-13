
import ClientsCarousel from "@/components/ClientsCarousel";
import CTA from "@/components/CTA";
import LatestBlogs from "@/components/LatestBlogs";
import LatestNews from "@/components/LatestNews";
import RewardsRecognition from "@/components/RewardsRecognition";
import Service from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import Link from "next/link";
import Faq from "@/components/Faq";
import { FaArrowRight } from "react-icons/fa";
import { LuRedo, LuShieldHalf, LuBrain, LuCalendarCheck, LuHospital, LuHandshake, LuMonitorCheck, LuCircleCheck, LuExternalLink, LuChevronUp, LuChevronDown } from "react-icons/lu";
import ActionSection from "@/components/ActionSection";
import { FaHospital, FaUniversity, FaBuilding, FaLaptopCode, FaHandsHelping } from "react-icons/fa";
import {
  FaUserCog,
  FaPlug,
  FaChartPie,
  FaAppStore,
  FaUsers,
  FaRobot,
} from "react-icons/fa";
import ContactCTA from "@/components/ContactCTA";



const faqs = [
  {
    question: "What types of Salesforce services does Aekot provide?",
    answer: "We offer expert Salesforce consulting services that cover every aspect of your business needs. Our services include customization of apps, workflows, automations, approvals, and dashboards to match your unique requirements. We provide seamless integration with legacy systems and popular tools such as HubSpot, QuickBooks, and ERP systems. From end-to-end implementation across Sales, Service, Experience, Marketing, Health, Data, and Nonprofit Clouds to AI-driven solutions for automation and analytics, we ensure your Salesforce environment is optimized for performance. Additionally, we support user adoption through training programs and provide ongoing maintenance to keep your system running smoothly.",
  },
  {
    question: "How does Aekot ensure successful Salesforce implementations?",
    answer: "We follow a proven methodology: understanding your business, planning customised solutions, executing with precision, and supporting user adoption. Our Salesforce certified consultants provide clear timelines, weekly updates, and a free trial to ensure alignment, resulting in successful outcomes like 20-30% increase in Sales productivity, 15-20% improvement in conversion rate and 90% lead leakage reduction for clients.",
  },
  {
    question: "Which industries does Aekot serve with Salesforce solutions?",
    answer: "Aekot supports diverse industries, including finance, healthcare, real estate, technology, and nonprofits. We specialise in industry-specific solutions, such as Health Cloud for healthcare or Nonprofit Cloud for charities, ensuring compliance and scalability.",
  },
  {
    question: "How does Aekot ensure data security in Salesforce solutions?",
    answer: "Our expert Salesforce consulting services prioritise security by implementing role-based access, multi-factor authentication, and compliance with regulations like GDPR and HIPAA. Our expertise ensures secure configurations, as seen in solutions for finance and healthcare clients.",
  },
  {
    question: "What is Salesforce CRM consulting and its significance?",
    answer: "The Salesforce CRM consulting assists businesses to establish, modify and enhance Salesforce to enable them to sell more efficiently, retain customers and conduct business more effectively. It ensures that the platform aligns itself with the business objectives and provides measurable ROI.",
  },
  {
    question: "What are the ways Aekot's Salesforce CRM consulting will enhance my current system?",
    answer: "Our consultants examine your existing CRM, streamline operations, introduce automation, integrate other solutions and enhance reporting. This simplifies the work of the users and accelerates the work and provides clear data.",
  },
  {
    question: "Who will benefit from Aekot's Salesforce CRM consulting services?",
    answer: "Our services can benefit any business that is interested in starting to use Salesforce, changing to other CRM, enhancing performance, integrating tools, automating sales or service processes, or training teams.",
  },
  {
    question: "Why would I select Aekot's certified Salesforce CRM consultants and not general consultants?",
    answer: "Aekot has highly skilled and trained certified consultants thus they adhere to the best practices, familiarize themselves with the latest features and provide secure, scalable and compliant solutions.",
  },
  {
    question: "What are the qualifications of a certified Salesforce CRM consultant?",
    answer: "The most important ones are Salesforce Administrator, Sales Cloud Consultant, Service Cloud Consultant, Platform Developer, Marketing Cloud Consultant and Integration Architect depending on the project requirements.",
  },
  {
    question: "What is the effect of engagement of certified Salesforce CRM consultants on project success?",
    answer: "Certified consultants reduce risk, achieve a seamless deployment, enhance user adoption and offer high-quality customizations resulting in shorter timelines and increased ROI.",
  },

];


const expertise = [
  {
    title: "Health cloud",
    desc: "We help in improving patient care, operational efficiency and provide patient data readily.",
    icon: LuShieldHalf,
  },
  {
    title: "Agent Force",
    desc: "We deploy AI-driven agents for automation and engagement.",
    icon: LuBrain,
  },
  {
    title: "Services Cloud",
    desc: "We optimise customer support and case management.",
    icon: LuCalendarCheck,
  },
  {
    title: "Experience Cloud",
    desc: "We build branded and interactive portals for stakeholders.",
    icon: LuHospital,
  },
  {
    title: "Sales Cloud",
    desc: "We streamline sales processes and enhance CRM efficiency with our Salesforce consulting services.",
    icon: LuHandshake,
  },
  {
    title: "Marketing Cloud",
    desc: "We create customised multi-channel marketing campaigns through our Salesforce CRM consulting.",
    icon: LuMonitorCheck,
  },
  {
    title: "Non-Profit Cloud",
    desc: "We support non-profits with donor and program management.",
    icon: LuMonitorCheck,
  },
];

const industries = [
  {
    name: "Healthcare",
    icon: <FaHospital className="text-5xl text-blue-500 group-hover:text-white transition-all duration-300" />,
    color: "hover:bg-blue-500",
  },
  {
    name: "BFSI",
    icon: <FaUniversity className="text-5xl text-green-500 group-hover:text-white transition-all duration-300" />,
    color: "hover:bg-green-500",
  },
  {
    name: "Real Estate",
    icon: <FaBuilding className="text-5xl text-yellow-500 group-hover:text-white transition-all duration-300" />,
    color: "hover:bg-yellow-500",
  },
  {
    name: "Technology",
    icon: <FaLaptopCode className="text-5xl text-purple-500 group-hover:text-white transition-all duration-300" />,
    color: "hover:bg-purple-500",
  },
  {
    name: "Not-for-Profit",
    icon: <FaHandsHelping className="text-5xl text-pink-500 group-hover:text-white transition-all duration-300" />,
    color: "hover:bg-pink-500",
  },
];

const features = [
  {
    title: "Tailored Portal",
    icon: <FaUserCog className="text-5xl text-blue-500 group-hover:text-white transition-all duration-300" />,
    points: [
      "We create branded portals for customers, partners and employees to monitor distributors, resellers’, suppliers’ or investors’ actions and results.",
      "Portals are designed using Salesforce Lightning Web Components, which are flexible and easy to customise.",
      "Each user sees content based on their role, and the data is always up-to-date and real-time.",
      "Single Sign-On (SSO) makes logging in simple and secure so users can access them from any device.",
    ],
    color: "hover:bg-blue-500",
  },
  {
    title: "Plugins",
    icon: <FaPlug className="text-5xl text-green-500 group-hover:text-white transition-all duration-300" />,
    points: [
      "We create extensions and integrations to enhance Salesforce features.",
      "AppExchange offers ready-made plugins, such as the Zoom plugin, to schedule or launch meetings directly from Salesforce.",
      "Our developers can build custom plugins using Salesforce APIs and integration tools like MuleSoft.",
      "Instead of manually updating customer records, plugins save time by automating repetitive tasks.",
    ],
    color: "hover:bg-green-500",
  },
  {
    title: "Dashboard",
    icon: <FaChartPie className="text-5xl text-yellow-500 group-hover:text-white transition-all duration-300" />,
    points: [
      "The Salesforce dashboard allows tracking revenues and opportunities.",
      "Dashboards are built using Salesforce reports and display data in ways such as charts, graphs, gauges and tables.",
      "Each team sees dashboards tailored to their needs for sales, service and marketing.",
      "Dashboards go beyond reporting and provide AI-driven predictions and recommendations with Einstein Analytics.",
    ],
    color: "hover:bg-yellow-500",
  },
  {
    title: "AppExchange Apps",
    icon: <FaAppStore className="text-5xl text-purple-500 group-hover:text-white transition-all duration-300" />,
    points: [
      "AppExchange offers more than 5,400+ apps for sales, marketing, IT, HR and finance.",
      "Most apps are fully customizable to fit your business processes.",
      "Salesforce ensures apps on AppExchange are easy to install and secure.",
      "Businesses can choose from both free tools and premium apps.",
    ],
    color: "hover:bg-purple-500",
  },
  {
    title: "CRM",
    icon: <FaUsers className="text-5xl text-pink-500 group-hover:text-white transition-all duration-300" />,
    points: [
      "Salesforce CRM is a centralized platform for managing customer relationships.",
      "All customer data, such as interactions, purchases, support cases and customer engagements, can be stored in one place.",
      "Salesforce automates repetitive tasks, such as assigning leads, following up with prospects, resolving support cases, and running marketing campaigns.",
      "Businesses can create reports and dashboards that display real-time data.",
    ],
    color: "hover:bg-pink-500",
  },
  {
    title: "AI Agent",
    icon: <FaRobot className="text-5xl text-indigo-500 group-hover:text-white transition-all duration-300" />,
    points: [
      "Businesses can create their own custom AI agents using Salesforce’s Agent builders.",
      "AI agents can handle repetitive tasks such as responding to customer questions, booking appointments and sending reminders.",
      "AI agents use the Einstein Trust Layer to ensure data security and compliance.",
      "With NLP, they understand and respond to human language naturally, making interactions smoother and more natural.",
    ],
    color: "hover:bg-indigo-500",
  },
];

const otherservices = [
  "Salesforce Consulting Services",
  "Certified Salesforce CRM Consulting",
  "Salesforce Implementation Service",
  "Salesforce Training",
  "Salesforce Marketing Cloud Training",
  "Salesforce Integration Services",
  "CRM Migration",
  "Salesforce Agentforce Consulting",
  "Agentforce Integration Expert",
  "Salesforce Managed Services",
  "Salesforce Data Migration",
  "Expert Salesforce Marketing Cloud Consultant",
  "Salesforce Marketing Cloud Consultant",
  "Managed Services for Salesforce",
  "Salesforce Consulting Services for Enterprises",
  "Best Salesforce Implementation Service Provider",
  "Certified Salesforce Implementation Service Experts",
  "Salesforce CRM Consulting Services",
  "Agentforce Consulting Services",
  "Expert Salesforce Consulting Services",
];



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
              Aekot is an expert Salesforce consulting services partner specialised in implementing and integrating various Salesforce solutions. Our services include end-to-end Salesforce setup, optimization, system integration, support, market automation, AppExchange and custom development. Our team of certified professionals serves global clients, primarily in North America, offering Salesforce CRM consulting services to optimise business processes.
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
        </article>

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

      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Features Provided
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl shadow-md bg-white border border-gray-100 text-left transition-all duration-300 transform hover:-translate-y-2 ${feature.color}`}
              >
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-center text-gray-800 group-hover:text-white transition-all duration-300">
                  {feature.title}
                </h3>
                <ul className="mt-4 text-gray-600 text-sm space-y-2 group-hover:text-white transition-all duration-300">
                  {feature.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            <span className="text-[#e52b50]"> Our expertise in Salesforce clouds</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
            {expertise.map((expertise, index) => {
              const Icon = expertise.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center space-y-4 mb-6"
                >
                  <Icon className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-semibold text-gray-700">
                    {expertise.title}
                  </h3>
                  <p className="text-gray-600 text-sm max-w-xs">{expertise.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
            <span className="text-[#e52b50]">Industries Served by Us</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl shadow-md bg-white border border-gray-100 flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:-translate-y-2 ${industry.color}`}
              >
                {industry.icon}
                <h3 className="mt-4 text-lg font-semibold text-gray-700 group-hover:text-white transition-all duration-300">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ActionSection />

      <section id="other-services" className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            <span className="text-[#e52b50]"> Other Services</span>
          </h2>
          <p className="text-gray-600 mb-8">
            We not only provide Salesforce Consulting Services but also have a wide range of specialized services that enable companies to get the most out of Salesforce. We assist in strategy, implementation, automation, AI and continuous support. We work on consulting, integration, training, data movement and managed services. We assist businesses in implementing Salesforce clouds, enhancing performance, integrating intelligent agents, executing good marketing, maintaining data safety and updating the system. Should a company require a complete implementation, CRM migration, AI functionality, AppExchange support or platform training, our extensive portfolio of services will fulfill the requirement precisely and at scale.
          </p>

          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {otherservices.map((service, index) => (
              <li
                key={index}
                className="flex items-center text-gray-700 hover:text-primary transition"
              >
                <FaArrowRight className="mr-2 text-primary" />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>



      <section className="py-6 px-6">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="fade-in-head text-primary text-center font-bold xs:text-3xl  md:text-3xl lg:text-4xl">
            Our Clients
          </h2>
          <ClientsCarousel />
        </div>
      </section>

      <section className="py-6 px-6">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-primary text-center font-bold xs:text-3xl md:text-3xl lg:text-4xl">
            What our clients say about us
          </h2>
          <TestimonialSlider />
        </div>
      </section>


      <section className="py-6 px-6">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="fade-in-head text-primary pb-8 text-center font-bold xs:text-3xl text-2xl md:text-3xl lg:text-4xl">
            Partnerships and Accomplishments
          </h2>
          <RewardsRecognition />
        </div>
      </section>


      <section className="py-6 px-6">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-[#e52b50]">Frequently Asked Questions</span>
          </h2>

          {/* Split FAQs into two halves */}
          {(() => {
            const mid = Math.ceil(faqs.length / 2);
            const firstHalf = faqs.slice(0, mid);
            const secondHalf = faqs.slice(mid);

            return (
              <div className="flex flex-col md:flex-row gap-6">
                {/* Left column */}
                <div className="flex-1 space-y-4">
                  {firstHalf.map((faq, index) => (
                    <Faq key={index} question={faq.question} answer={faq.answer} />
                  ))}
                </div>

                {/* Right column */}
                <div className="flex-1 space-y-4">
                  {secondHalf.map((faq, index) => (
                    <Faq key={index} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </div>
            );
          })()}
        </div>

      </section>

      <LatestNews />

      <LatestBlogs />



    </>
  );
}
