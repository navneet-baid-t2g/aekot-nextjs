import { FaArrowRight } from "react-icons/fa";
import { MdSupportAgent, MdShoppingBasket, MdCalendarMonth, MdCampaign } from "react-icons/md";
import { FaChalkboardTeacher, FaUserTie } from "react-icons/fa";
import Button from "@/components/Button";
import Faq from "@/components/Faq";
import ContactCTA from "@/components/ContactCTA";
import ScrollingLogos from "@/components/ScrollingLogos";
import {
  FaGraduationCap,
  FaCloud,
  FaDatabase,
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
  FaUsers,
  FaCogs,
  FaRocket,
  FaLaptopCode,
} from "react-icons/fa";


const servicecarddata = [
    {
        title: "Strategy and Advisory",
        desc: "We will do a full assessment of what your business needs, find out new opportunities and create steps to adjust Agentforce according to your business goals.",
        img: "/images/serviceImages/strategy-and-advisory.webp",
    },
    {
        title: "Design and Deployment",
        desc: "We will design and deploy Agentforce service agents as per your business needs. We can build them based on already existing agents like sales agents or build entirely new ones with the help of Agent builder.",
        img: "/images/serviceImages/Design-and-Development.webp",
    },
    {
        title: "Advanced AI Capabilities",
        desc: "We use Agentforce’s Atlas Reasoning Engine and multimodal AI to build Agentforce service agents that can process texts, voice, images and documents to give better services.",
        img: "/images/serviceImages/Advanced-AI-Capabilities.webp",
    },
    {
        title: "Integration",
        desc: "Our teams are Agentforce integration experts and can make the integration process with Salesforce CRM Data Cloud and third-party systems very smooth.",
        img: "/images/serviceImages/Integration.webp",
    },
    {
        title: "Customisation",
        desc: "Our team will make sure that every agent is created according to your business goals. Every agent that we will create is tuned with low-code tools to make customisation easy.",
        img: "/images/serviceImages/Customization.webp",
    },
    {
        title: "Automation",
        desc: "We create AI tools that perform daily tasks such as campaigning, generating leads, etc. to relieve teams so they can focus on more important and productive activities.",
        img: "/images/serviceImages/Automation.webp",
    },
    {
        title: "Security & Compliance",
        desc: "We use the Einstein Trust layer to make sure that Agentforce holds up data privacy regulations and saves sensitive data with a governance framework.",
        img: "/images/serviceImages/Security-and-Compliance.webp",
    },
    {
        title: "Training & Enablement",
        desc: "We will provide complete training programs that allow your teams to manage and optimise Agentforce AI tools easily and confidently.",
        img: "/images/serviceImages/Training-and-Enablement.webp",
    },
    {
        title: "Support & Managed Services",
        desc: "Our expert Agentforce consulting services provide full support 24/7, monitor performance, and help scale Agentforce as per your business needs.",
        img: "/images/serviceImages/Support-and-Managed-Services.webp",
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
    title: "Salesforce Training",
    icon: <FaGraduationCap />,
    desc: "Hands-on learning to empower your Salesforce users.",
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
    title: "CRM Migration",
    icon: <FaDatabase />,
    desc: "Smooth transition of your CRM data with zero disruption.",
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


const faqs = [
    {
        question: "What is the use of Salesforce Agentforce consulting services?",
        answer: "These services can help your business use Agentforce service agents to improve customer services, sales and marketing. We will connect Agentforce with Salesforce tools and other systems to automate tasks like answering questions and managing leads. We also provide training and support to make sure it works properly, saves your time and improves customer satisfaction.",
    },
    {
        question: "How long does it take to setup Agentforce?",
        answer: "It depends on what you need. We can get Agentforce up and running in 2 to 5 weeks for simple projects with older agents. And for custom agents it can take almost 6 to 12 weeks. We have accelerators and tools to make the whole process faster.",
    },
    {
        question: "Is Agentforce safe and secure?",
        answer: "Yes, Salesforce has very strong security tools that Agentforce uses to keep the data safe.",
    },
    {
        question: "Why is Agentforce consulting services recommended for a business?",
        answer: "The AI assistance can be implemented by Agentforce Consulting, which assists companies in establishing AI assistants that can align with their objectives and processes. Processes, systems and maintenance of things are customized by consultants according to Salesforce guidelines. This renders automation more effective and its users embrace it more quickly.",
    },
    {
        question: "What is the job of the Salesforce Marketing Cloud consultant?",
        answer: "Salesforce Marketing Cloud consultant assists organizations in establishing and enhancing email, SMS and journey based marketing. Automation, audience segmentation and measuring outcomes are used to increase engagement. Their efforts result in additional conversions and personal touches to customers.",
    },
    {
        question: "What will Salesforce consulting services entail?",
        answer: "Salesforce consulting includes planning, implementation, system connectivity, optimization and support. Consultants examine the requirements of a business and create a tailored Salesforce application. The aim is to work easier, more efficiently and with better returns.",
    },
    {
        question: "What is contained in a Salesforce implementation service?",
        answer: "This service installs the platform, configures it, trains users and workflow personalization. Experts ensure Salesforce suits the present processes and objectives of the business. It allows companies to be started quicker and without hiccups.",
    },
    {
        question: "Why is Salesforce integration services significant?",
        answer: "Integration services connect Salesforce with the ERPs, marketing, accounting and custom apps. This maintains information flowing easily across departments. It removes silos and assists teams to make superior decisions. ",
    },
    {
        question: "What are Salesforce managed services?",
        answer: "Salesforce help desk is an on-going support, maintenance, monitoring and upgrades. Updates, problem fixes and performance optimization are dealt with by the team. This makes the system long term stable without worrying about overloading in-house.",
    },
    {
        question: "What is the importance of Salesforce training among the users?",
        answer: "The Salesforce training educates teams on the use of the platform. It accelerates the adoption, reduces errors and increases productivity. Already existing features are more valuable to well-trained users.",
    },

];
export const metadata = {
    title: "Salesforce Agentforce Consulting Services | Aekot",
    description: "Unlock the full potential of Salesforce Agentforce with Aekot. We provide strategy, deployment, AI integration, customization, automation, and 24/7 support to help your business grow.",
    keywords: [
        "Salesforce Agentforce consulting",
        "Salesforce consulting services",
        "Agentforce AI integration",
        "Salesforce implementation",
        "CRM automation",
        "AI service agents",
        "Salesforce training",
        "Managed Salesforce services"
    ],
    canonical: "https://www.aekot.com/services/agentforce-consulting-services",
    openGraph: {
        title: "Salesforce Agentforce Consulting Services | Aekot",
        description: "Partner with Aekot for expert Salesforce Agentforce consulting. We design, deploy, integrate, and manage AI-powered service agents to boost your business efficiency.",
        url: "https://www.aekot.com/services/agentforce-consulting-services",
        siteName: "Aekot",
        locale: "en_IN",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Salesforce Agentforce Consulting Services | Aekot",
        description: "Leverage AI-powered Salesforce Agentforce with Aekot. Expert consulting, strategy, automation, training, and 24/7 support for businesses."
    },
    other: {
        faqSchema: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(faq => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
        }),
    },
};

export default function ServiceSingle() {
    return (
        <>

            <section className="flex flex-col md:flex-row items-center justify-between pt-16 py-16 bg-white max-w-7xl mx-auto pt-32 md:pt-32">
                {/* Left Content */}
                <div className="max-w-xl text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        <span className="text-[#e52b50]">Salesforce Agentforce</span> Consulting Service{" "}
                    </h1>

                    <p className="text-gray-600 mt-4 leading-relaxed">
                        Aekot&apos;s Salesforce Agentforce consulting services have the right expertise you need to unlock Agentforce&apos;s
                        full potential. We have the experience and skills to create strategies that will help you integrate
                        Agentforce&apos;s AI tools into your business.
                    </p>

                    <div className="mt-3 flex justify-center md:justify-start">
                        <Button text="Get Started" path="/contact" />
                    </div>
                </div>

                {/* Right Image */}
                <div className="mt-10 md:mt-0 md:ml-10 flex justify-center">
                    <img
                        src="/images/serviceImages/Salesforce-Agentforce.webp"
                        alt="Salesforce Agentforce consulting services"
                        className="w-82 md:w-106 object-contain rounded-lg"
                    />
                </div>
            </section>

            <section id="whyis" className="py-12 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        What is <span className="text-[#e52b50]">Agentforce</span>?
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Salesforce Agentforce is an AI-based platform that helps you create Agentforce service agents that can use CRM and Einstein to improve your business’s productivity. It can help you create, train and deploy smart AI agents to do everyday tasks, interact with customers and help in many ways to support your business.
                    </p>
                    <p className="text-gray-600 mb-8">
                        These AI agents can do several tasks automatically, give you live analysis, make customer interaction personal and adapt and grow your business operations. We combine the features of Salesforce CRM with Einstein to improve how these agents interact with customers and ease internal business processes.
                    </p>

                </div>
            </section>

            <section className="pt-16 px-6 md:px-20 py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-gray-900">
                            <span className="text-[#e52b50]">Our Services</span>
                        </h2>
                    </div>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicecarddata.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                            >
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-60 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 relative bg-gradient-to-b from-white via-red-100 to-white px-8 md:px-20 ">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                    {/* Left Content */}
                    <div className="flex flex-col space-y-6 md:w-2/3">
                        <h2 className="text-3xl md:text-4xl font-bold text-left">
                            Why should you go for <span className="text-primary">Aekot&apos;s Salesforce Agentforce</span>  Consulting Services?
                        </h2>

                        <p className="text-md text-gray-800 text-left">
                            Aekot is well known for its Salesforce Agentforce consulting services. We have a skilled team who have high experience in AI technologies. Our track record shows that we have delivered AI solutions that were customised according to the business objectives. We provide full support from start to end and make sure that your business achieves its goals quickly and efficiently.
                        </p>

                        <p className="text-md text-gray-800 text-left">
                            Our skills and dedication to your projects makes us the right partner for Salesforce Agentforce consulting services. We don&apos;t just solve current issues but we also prepare for tomorrow&apos;s opportunities.

                        </p>

                        <p className="text-md text-gray-800 text-left">
                            With Aekot&apos;s expert Agentforce consulting services, businesses can get reliable AI solutions which will maximise your teams&apos; efficiency, improve customer experience and bring our clients growth.
                        </p>

                        <p>Join us today and get your free consultation and proposal.</p>

                        <Button text={"Contact Us"} path={"/contact"} />

                    </div>

                    {/* Right Scrolling Logos */}
                    <div className="relative h-[400px] sm:h-[102px] w-1/3 sm:w-full overflow-hidden flex justify-end mt-12 md:mt-0">
                        <ScrollingLogos />
                    </div>


                </div>
            </section>

            <ContactCTA heading="Looking for Expert Salesforce Developers?" />

            <section id="whycompany" className="py-12 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Why companies need salesforce <span className="text-[#e52b50]">Agentforce consulting services</span>?
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Aekot&apos;s Salesforce Agentforce consulting services can help businesses use AI to improve operations and customer experience. So even if you lack technical skills, Aekot can help you to adopt AI by guiding you through steps. We create AI agents and tools that can do what you want and fit easily into your systems. We make sure that Agentforce connects smoothly with Salesforce tools and other systems like ERP to improve data use and work processes.
                    </p>
                    <p className="text-gray-600 mb-8">
                        Our expert Agentforce consulting services will make Agentforce easy to expand so it can grow with your business and stay up-to-date with AI features. We can automate tasks to save time and increase productivity. Your customers will get 24/7 support from chatbots or SMS. We will make sure the security features protect the data and meet all the rules. We will also train your teams to use Agentforce quickly and provide regular support to make sure it keeps on improving. These services will boost your returns by increasing efficiency and customer satisfaction and help your business succeed and grow.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {/* Customer Service Agent */}
                        <div className="p-6 rounded-2xl shadow-lg text-center border border-gray-100">
                            <MdSupportAgent className="text-4xl text-blue-600 mx-auto" />
                            <h3 className="text-xl font-semibold mt-4">
                                Customer Service Agent
                            </h3>
                        </div>

                        {/* Sales Development Representative Agent */}
                        <div className="p-6 rounded-2xl shadow-lg text-center border border-gray-100">
                            <FaUserTie className="text-4xl text-green-600 mx-auto" />
                            <h3 className="text-xl font-semibold mt-4">
                                Sales Development Representative Agent
                            </h3>
                        </div>

                        {/* Sales Coach Agent */}
                        <div className="p-6 rounded-2xl shadow-lg text-center border border-gray-100">
                            <FaChalkboardTeacher className="text-4xl text-orange-600 mx-auto" />
                            <h3 className="text-xl font-semibold mt-4">
                                Sales Coach Agent
                            </h3>
                        </div>

                        {/* Personal Shopping Assistant Agent */}
                        <div className="p-6 rounded-2xl shadow-lg text-center border border-gray-100">
                            <MdShoppingBasket className="text-4xl text-pink-600 mx-auto" />
                            <h3 className="text-xl font-semibold mt-4">
                                Personal Shopping Assistant Agent
                            </h3>
                        </div>

                        {/* Campaign Management Agent */}
                        <div className="p-6 rounded-2xl shadow-lg text-center border border-gray-100">
                            <MdCampaign className="text-4xl text-purple-600 mx-auto" />
                            <h3 className="text-xl font-semibold mt-4">
                                Campaign Management Agent
                            </h3>
                        </div>

                        {/* Appointment Scheduling Agent */}
                        <div className="p-6 rounded-2xl shadow-lg text-center border border-gray-100">
                            <MdCalendarMonth className="text-4xl text-red-600 mx-auto" />
                            <h3 className="text-xl font-semibold mt-4">
                                Appointment Scheduling Agent
                            </h3>
                        </div>
                    </div>

                </div>
            </section>

            <section id="other-services" className="relative py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    {/* Section Heading */}
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                        Our <span className="text-[#e52b50]">Other Services</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-14">
                        Beyond <span className="font-semibold text-gray-800">Salesforce Consulting</span>,
                        we provide end-to-end business solutions that help companies grow faster,
                        automate smarter, and innovate with AI, integrations, and expert-managed services.
                    </p>

                    {/* Services Grid */}
                    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherservices.map((service, index) => (
                            <li
                                key={index}
                                className="group relative p-8 rounded-3xl bg-white shadow-sm border border-gray-100 
      hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                            >
                                {/* Gradient Border on Hover */}
                                <div
                                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gray-100 to-gray-300 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                                ></div>

                                <div className="relative z-10 flex flex-col items-center">
                                    {/* Icon */}
                                    <div className="p-3 bg-[#e52b50]/10 rounded-full mb-4">
                                        <div className="text-[#e52b50] text-2xl group-hover:scale-110 transition-transform duration-200">
                                            {service.icon}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#e52b50] transition-colors">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-gray-600 text-center">
                                        {service.desc}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>


                </div>
            </section>

            <ContactCTA heading="Looking for Expert Salesforce Developers?" />

            <section className="py-12 px-6">
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

            {/* Call to Action */}
            <section className="px-6">
                <div className=" max-w-screen-xl mx-auto shadow-[0_0_5px_rgba(0,0,0,0.25)] rounded-2xl px-8 md:px-12 py-8  text-center space-y-6">
                    <p className="font-semibold text-xl">
                        Get Started with Aekot Today!
                        <span style={{ color: "#e52b50" }}> #AekotAdvantage.</span>
                    </p>
                    <p className="text-md text-gray-700 leading-relaxed">
                        Take the next step toward AI-powered transformation. Partner with
                        Aekot to implement Agentforce and stay ahead of the competition.
                        <br />
                        <span className="font-semibold">Schedule a Free Consultation !</span>
                    </p>
                    <div className="flex justify-center">
                        <Button text={"Contact Us"} path={"/contact"} />
                    </div>

                </div>
            </section>
            {/* Call to Action */}

        </>
    );
}
