
import ClientsCarousel from "@/components/ClientsCarousel";
import CTA from "@/components/CTA";
import LatestBlogs from "@/components/LatestBlogs";
import LatestNews from "@/components/LatestNews";
import RewardsRecognition from "@/components/RewardsRecognition";
import Service from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import Link from "next/link";
import Faq from "@/components/Faq";
import { FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";
import { LuRedo, LuShieldHalf, LuBrain, LuCalendarCheck, LuHospital, LuHandshake, LuMonitorCheck, LuCircleCheck, LuExternalLink, LuChevronUp, LuChevronDown, LuHeartHandshake, LuMegaphone } from "react-icons/lu";
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
import { FaCogs, FaHeadset, FaRocket, FaLink, FaBullhorn, FaCode } from "react-icons/fa";

import {
  FaChalkboardTeacher,
  FaCloud,
  FaHandshake,
  FaTools,
  FaUserShield,
  FaLayerGroup,
  FaChartLine,
  FaServer,
  FaRegLightbulb,
  FaClipboardList,
  FaNetworkWired,
  FaBriefcase,
  FaTasks,
  FaChartBar,
} from "react-icons/fa";


const faqs = [
  {
    question: "What types of Salesforce services does Aekot provide?",
    answer: "We offer <a href='/services/salesforce-consulting-services' class='text-primary'>expert Salesforce consulting services</a> that cover every aspect of your business needs. Our services include customization of apps, workflows, automations, approvals, and dashboards to match your unique requirements. We provide seamless integration with legacy systems and popular tools such as HubSpot, QuickBooks, and ERP systems. From end-to-end implementation across Sales, Service, Experience, Marketing, Health, Data, and Nonprofit Clouds to AI-driven solutions for automation and analytics, we ensure your Salesforce environment is optimized for performance. Additionally, we support user adoption through training programs and provide ongoing maintenance to keep your system running smoothly.",
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
    question: "What is the effect of engagement of certified Salesforce CRM consultants on project success?",
    answer: "Certified consultants reduce risk, achieve a seamless deployment, enhance user adoption and offer high-quality customizations resulting in shorter timelines and increased ROI.",
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
    question: "What is Salesforce CRM consulting and its significance?",
    answer: "The Salesforce CRM consulting assists businesses to establish, modify and enhance Salesforce to enable them to sell more efficiently, retain customers and conduct business more effectively. It ensures that the platform aligns itself with the business objectives and provides measurable ROI.",
  },


];


const expertise = [
  {
    title: "Health Cloud",
    desc: "Enhance patient care and coordination with Salesforce Health Cloud for better outcomes and connected experiences.",
    icon: LuHospital,
  },
  {
    title: "Agent Force",
    desc: "Leverage AI-driven AgentForce to automate workflows and deliver smarter, faster customer interactions.",
    icon: LuBrain,
  },
  {
    title: "Service Cloud",
    desc: "Streamline support operations with Salesforce Service Cloud to boost agent productivity and customer satisfaction.",
    icon: LuCalendarCheck,
  },
  {
    title: "Experience Cloud",
    desc: "Build secure, branded Salesforce portals that connect customers, partners, and employees seamlessly.",
    icon: LuShieldHalf,
  },
  {
    title: "Sales Cloud",
    desc: "Accelerate revenue with Salesforce Sales Cloud—optimize leads, forecast sales, and close deals faster.",
    icon: LuHandshake,
  },
  {
    title: "Marketing Cloud",
    desc: "Create personalized, data-driven marketing campaigns with Salesforce Marketing Cloud for higher engagement.",
    icon: LuMegaphone,
  },
  {
    title: "Non-Profit Cloud",
    desc: "Empower your mission with Salesforce Nonprofit Cloud to manage donors, programs, and fundraising easily.",
    icon: LuHeartHandshake,
  },
];


const industries = [
  {
    name: "Healthcare",
    icon: <FaHospital className="text-5xl text-blue-500 transition-all duration-300" />
  },
  {
    name: "BFSI",
    icon: <FaUniversity className="text-5xl text-green-500 transition-all duration-300" />
  },
  {
    name: "Real Estate",
    icon: <FaBuilding className="text-5xl text-yellow-500 transition-all duration-300" />
  },
  {
    name: "Technology",
    icon: <FaLaptopCode className="text-5xl text-purple-500 transition-all duration-300" />
  },
  {
    name: "Not-for-Profit",
    icon: <FaHandsHelping className="text-5xl text-pink-500 transition-all duration-300" />
  },
];

const features = [
  {
    title: "Tailored Portal",
    icon: <FaUserCog className="text-5xl text-blue-500 transition-all duration-300" />,
    points: [
      "We create branded portals for customers, partners and employees to monitor distributors, resellers’, suppliers’ or investors’ actions and results.",
      "Portals are designed using Salesforce Lightning Web Components, which are flexible and easy to customise.",
      "Each user sees content based on their role, and the data is always up-to-date and real-time.",
      "Single Sign-On (SSO) makes logging in simple and secure so users can access them from any device.",
    ]
  },
  {
    title: "Plugins",
    icon: <FaPlug className="text-5xl text-green-500 transition-all duration-300" />,
    points: [
      "We create extensions and integrations to enhance Salesforce features.",
      "AppExchange offers ready-made plugins, such as the Zoom plugin, to schedule or launch meetings directly from Salesforce.",
      "Our developers can build custom plugins using Salesforce APIs and integration tools like MuleSoft, offering complete <a class='text-primary' href='https://www.aekot.com/services/salesforce-implementation-integration'>Salesforce integration services</a> to connect and automate your systems seamlessly.",
      "Instead of manually updating customer records, plugins save time by automating repetitive tasks.",
    ]
  },
  {
    title: "Dashboard",
    icon: <FaChartPie className="text-5xl text-yellow-500 transition-all duration-300" />,
    points: [
      "The Salesforce dashboard allows tracking revenues and opportunities.",
      "Dashboards are built using Salesforce reports and display data in ways such as charts, graphs, gauges and tables.",
      "Each team sees dashboards tailored to their needs for sales, service and marketing.",
      "Dashboards go beyond reporting and provide AI-driven predictions and recommendations with Einstein Analytics.",
    ]
  },
  {
    title: "AppExchange Apps",
    icon: <FaAppStore className="text-5xl text-purple-500 transition-all duration-300" />,
    points: [
      "AppExchange offers more than 5,400+ apps for sales, marketing, IT, HR and finance.",
      "Most apps are fully customizable to fit your business processes.",
      "Salesforce ensures apps on AppExchange are easy to install and secure.",
      "Businesses can choose from both free tools and premium apps.",
    ]
  },
  {
    title: "CRM",
    icon: <FaUsers className="text-5xl text-pink-500 transition-all duration-300" />,
    points: [
      "Salesforce CRM is a centralized platform for managing customer relationships.",
      "All customer data, such as interactions, purchases, support cases and customer engagements, can be stored in one place.",
      "Salesforce automates repetitive tasks, such as assigning leads, following up with prospects, resolving support cases, and running marketing campaigns.",
      "Businesses can create reports and dashboards that display real-time data.",
    ]
  },
  {
    title: "AI Agent",
    icon: <FaRobot className="text-5xl text-indigo-500 transition-all duration-300" />,
    points: [
      "Businesses can create their own custom AI agents using Salesforce’s Agent builders.",
      "AI agents can handle repetitive tasks such as responding to customer questions, booking appointments and sending reminders.",
      "AI agents use the Einstein Trust Layer to ensure data security and compliance.",
      "With NLP, they understand and respond to human language naturally, making interactions smoother and more natural.",
    ]
  },
];

const otherservices = [
  {
    title: "Salesforce Consulting Services",
    icon: <FaUsers />,
    desc: "Expert guidance to maximize your Salesforce ecosystem.",
  },
  {
    title: "Certified Salesforce CRM Consulting",
    icon: <FaUserShield />,
    desc: "Certified experts helping you optimize CRM workflows.",
  },
  {
    title: "Salesforce Implementation Service",
    icon: <FaCogs />,
    desc: "Seamless setup and deployment of Salesforce solutions.",
  },
  {
    title: "Salesforce Marketing Cloud Training",
    icon: <FaChalkboardTeacher />,
    desc: "Comprehensive training to master Marketing Cloud tools.",
  },
  {
    title: "Salesforce Integration Services",
    icon: <FaNetworkWired />,
    desc: "Connect Salesforce with your business applications easily.",
  },
  {
    title: "Salesforce Agentforce Consulting",
    icon: <FaHandshake />,
    desc: "Custom Agentforce solutions to enhance agent performance.",
  },
  {
    title: "Agentforce Integration Expert",
    icon: <FaLayerGroup />,
    desc: "Integrate Agentforce with your existing Salesforce setup.",
  },
  {
    title: "Salesforce Managed Services",
    icon: <FaTools />,
    desc: "Ongoing support to ensure Salesforce runs seamlessly.",
  },
  {
    title: "Salesforce Data Migration",
    icon: <FaServer />,
    desc: "Accurate, secure migration of Salesforce data assets.",
  },
  {
    title: "Expert Salesforce Marketing Cloud Consultant",
    icon: <FaRocket />,
    desc: "Get expert advice to boost Marketing Cloud performance.",
  },
  {
    title: "Salesforce Marketing Cloud Consultant",
    icon: <FaBriefcase />,
    desc: "Consulting for targeted and data-driven marketing success.",
  },
  {
    title: "Managed Services for Salesforce",
    icon: <FaTasks />,
    desc: "Proactive monitoring and maintenance for Salesforce apps.",
  },
  {
    title: "Salesforce Consulting Services for Enterprises",
    icon: <FaClipboardList />,
    desc: "Enterprise-level Salesforce solutions to scale operations.",
  },
  {
    title: "Best Salesforce Implementation Service Provider",
    icon: <FaLaptopCode />,
    desc: "Trusted partner for efficient Salesforce implementations.",
  },
  {
    title: "Certified Salesforce Implementation Service Experts",
    icon: <FaUserShield />,
    desc: "Certified specialists delivering top-tier Salesforce builds.",
  },
  {
    title: "Salesforce CRM Consulting Services",
    icon: <FaChartBar />,
    desc: "Tailored CRM consulting to align Salesforce with goals.",
  },
  {
    title: "Agentforce Consulting Services",
    icon: <FaRegLightbulb />,
    desc: "Strategic Agentforce solutions for smarter operations.",
  },
  {
    title: "Expert Salesforce Consulting Services",
    icon: <FaChartLine />,
    desc: "High-impact consulting to accelerate Salesforce success.",
  },
];



const services = [
  {
    title: "Setup",
    icon: <FaCogs className="text-4xl text-primary group-hover:scale-110 transition-transform duration-300" />,
    description:
      "Aekot provides end-to-end certified Salesforce CRM and <a href='https://www.aekot.com/services/agentforce' class='text-primary'>Salesforce Agentforce consulting</a> services for implementation, which include initial configuration and deployment of Salesforce platforms like Sales Cloud, Service Cloud and Marketing Cloud. We analyse your company’s business and set up a customised CRM system to ensure a smooth transition without any disruption. This includes configuring user roles, workflows and data migration to match the client’s objectives.",
  },
  {
    title: "Support",
    icon: <FaHeadset className="text-4xl text-primary group-hover:scale-110 transition-transform duration-300" />,
    description:
      "We offer ongoing support to ensure Salesforce systems run smoothly after implementation. Our expert Salesforce CRM consulting includes troubleshooting, regular maintenance and user support with our 24/7 assistance and dedicated account manager.",
  },
  {
    title: "Optimization",
    icon: <FaRocket className="text-4xl text-primary group-hover:scale-110 transition-transform duration-300" />,
    description:
      "Our team optimises your CRM system for better performance and increased ROI. Through our consulting services, we analyse current setups, refine processes and implement advanced features like AI-driven analytics such as Einstein AI. Our team will improve workflows, enhance reporting capabilities and ensure that the platform adapts to your needs.",
  },
  {
    title: "System Integration",
    icon: <FaLink className="text-4xl text-primary group-hover:scale-110 transition-transform duration-300" />,
    description:
      "We are experts in integrating Salesforce with third-party systems such as ERPs, marketing tools and other custom apps. Using APIs, middleware and tools like MuleSoft, our Salesforce consulting services ensure smooth data flow and functioning across various platforms.",
  },
  {
    title: "AppExchange",
    icon: <FaAppStore className="text-4xl text-primary group-hover:scale-110 transition-transform duration-300" />,
    description:
      "Our Salesforce consulting services include AppExchange app development, including business analysis, app architecture, app development, security review assistance, listing support and app maintenance & support. This provides extended functions across various platforms and ensures compatibility and optimal performance with the Salesforce ecosystem.",
  },
  {
    title: "Custom Development",
    icon: <FaCode className="text-4xl text-primary group-hover:scale-110 transition-transform duration-300" />,
    description:
      "We offer flexible customisation through our Salesforce CRM consulting platform according to the company’s needs. We use tools like Apex, Visualforce, Lightning Components and Salesforce APIs to create custom apps, automate processes, integrate with external systems and deliver custom-built features.",
  },
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
                      href="/services/agentforce-consulting-services"
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
        <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-primary">How We Deliver Salesforce Excellence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We focus on the client’s success through a collaborative approach and provide a free trial and comprehensive training to ensure effective Salesforce adoption.
            </p>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 p-8 flex flex-col items-center text-center border border-transparent hover:border-blue-100"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: service.description }} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <article className="max-w-screen-xl mx-auto space-y-6 py-12 lg:py-20">
          <div className="space-y-6 text-center">
            <h2 className="text-primary font-bold xs:text-3xl text-2xl  md:text-3xl lg:text-4xl">
              Services We Provide
            </h2>
            <p className="text-sm xs:text-xl sm:text-xl  md:text-base">
              Compelled by a powerful aspiration to deliver top-tier{" "}
              <br className="hidden md:block" /> Salesforce solutions.
            </p>
          </div>
          <div className="max-w-screen grid md:grid-cols-2 lg:md:grid-cols-3 gap-4 xl:gap-10">
            <Service
              icon={"/assets/customization.svg"}
              name="Agentforce Implementation & Services"
              text="Empower your teams with intelligent automation, seamless integration, and unmatched scalability — our <a class='text-primary' href='/services/agentforce-consulting-services'>Agentforce consulting services</a> are redefining how businesses operate in the age of AI."
              path='/services/agentforce-consulting-services'
            ></Service>
            <Service
              icon={"/assets/strategy.svg"}
              name="Salesforce Consulting & Strategy"
              text="Drive growth with intelligent CRM strategies, seamless customization, and measurable ROI — our <a class='text-primary' href='/services/salesforce-consulting-services'>Salesforce consulting services</a> are transforming how businesses succeed in the digital era."
              path='/services/salesforce-consulting-services'
            ></Service>
            <Service
              icon={"/assets/implementation.svg"}
              name="Implementation & Integration"
              text="Streamline operations with seamless integrations, optimized workflows, and expert support — our <a class='text-primary' href='/services/salesforce-implementation-integration-services'>Salesforce implementation service</a> empowers businesses to achieve lasting efficiency."
              path='/services/salesforce-implementation-integration'
            ></Service>
            <Service
              icon={"/assets/integration.svg"}
              name="Salesforce Support & Managed services"
              text="From proactive troubleshooting to continuous innovation, our <a class='text-primary' href='/services/salesforce-managed-services'>Salesforce managed services</a> empower businesses with reliability, scalability, and the agility to stay ahead in the digital era."
              path='/services/salesforce-support-managed-services'
            ></Service>
            <Service
              icon={"/assets/training.svg"}
              name="Salesforce Training & Adoption"
              text="Empower your teams with personalized learning, hands-on guidance, and expert-led <a class='text-primary' href='/services/salesforce-training-adoption'>Salesforce Marketing Cloud training</a> programs that drive adoption, productivity, and long-term success."
              path='/services/salesforce-training-adoption'
            ></Service>
            <Service
              icon="/assets/data_migration.svg"
              name="Data Migration & Management"
              text="Ensure safe, accurate, and seamless <a class='text-primary' href='/services/salesforce-data-migration-management'>Salesforce data migration</a> with expert planning, validation, and execution that empowers your business with reliable insights and smooth transformation."
              path='/services/data-migration-management'
            ></Service>
          </div>
        </article>


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
                className={`group p-8 rounded-2xl shadow-md bg-white border border-gray-100 text-left transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-center text-gray-800 transition-all duration-300">
                  {feature.title}
                </h3>
                <ul className="mt-4 text-gray-600 text-sm space-y-2 transition-all duration-300">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-center justify-center">
                      <FaLongArrowAltRight className="mr-2 flex-shrink-0 mt-1" />
                      <span dangerouslySetInnerHTML={{ __html: point }}></span>
                    </li>

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

          {/* Flex layout instead of grid */}
          <div className="flex flex-wrap justify-center">
            {expertise.map((expertise, index) => {
              const Icon = expertise.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-4 mb-6 w-full sm:w-1/2 md:w-1/3 xl:w-1/4 px-4"
                >
                  <Icon className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-semibold text-gray-700">{expertise.title}</h3>
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
                <h3 className="mt-4 text-lg font-semibold text-gray-700 transition-all duration-300">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ActionSection />
      {/*      <section id="other-services" className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Our <span className="text-[#e52b50]">Other Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-14">
            Beyond <span className="font-semibold text-gray-800">Salesforce Consulting</span>,
            we provide end-to-end business solutions that help companies grow faster,
            automate smarter, and innovate with AI, integrations, and expert-managed services.
          </p>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherservices.map((service, index) => (
              <li
                key={index}
                className="group relative p-8 rounded-3xl bg-white shadow-sm border border-gray-100 
      hover:shadow-2xl hover:translate-x-1 transition-all duration-300"
              >
                <div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gray-100 to-gray-300 
        opacity-0 transition-opacity duration-300 -z-10"
                ></div>

                <div className="relative z-10 flex flex-col items-center">
            
                  <div className="p-3 bg-[#e52b50]/10 rounded-full mb-4">
                    <div className="text-[#e52b50] text-2xl group-hover:scale-110 transition-transform duration-200">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#e52b50] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600 text-center">
                    {service.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>


        </div>
      </section> */}




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
