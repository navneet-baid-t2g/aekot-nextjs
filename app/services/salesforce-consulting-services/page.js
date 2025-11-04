import { FaArrowRight } from "react-icons/fa";
import { FaUsers, FaChartLine, FaUserCheck, FaHeadset } from "react-icons/fa";
import Button from "@/components/Button";
import Faq from "@/components/Faq";
import ContactCTA from "@/components/ContactCTA";
import { FaHandHoldingDollar } from "react-icons/fa6";
import ScrollingLogos from "@/components/ScrollingLogos";

import {
    FaDatabase,
    FaCloud,
    FaHandshake,
    FaTools,
    FaUserShield,
    FaLayerGroup,
    FaServer,
    FaRegLightbulb,
    FaClipboardList,
    FaNetworkWired,
    FaBriefcase,
    FaTasks,
    FaChartBar,
    FaCogs,
    FaRocket,
    FaLaptopCode,
    FaChalkboardTeacher,
} from "react-icons/fa";

import Service from "@/components/ServiceCard";
const certificationImages = [
    { src: "/images/Certifications/C22.png" },
    { src: "/images/Certifications/C23.png" },
    { src: "/images/Certifications/C8.png" },
];

const servicecarddata = [
    {
        title: "Salesforce Consulting",
        desc: "Our Salesforce consulting services start with assessing what you really need and then give you strategies based on them. We will design solutions that are as per your business’s goals with our expert Salesforce consultants.",
        img: "/images/serviceImages/Salesforce Consulting.png",
    },
    {
        title: "Salesforce App Development",
        desc: "We can create custom apps and add features that will make Salesforce more user friendly to improve productivity and user satisfaction. For example, we use Salesforce Mobile SDK to create mobile friendly apps. We also build apps for the Salesforce AppExchange marketplace.",
        img: "/images/serviceImages/Salesforce App Development.png",
    },
    {
        title: "Salesforce Implementation",
        desc: "In this, we configure and customise the Salesforce platform according to our client&apos;s needs. We do organizing objects, work processes, user roles and permission with testing and launching. Our approach is to do launching in a phased manner throughout the departments so it doesn&apos;t cause any errors and there is minimum downtime.",
        img: "/images/serviceImages/Salesforce Implementation.png",
    },
    {
        title: "Salesforce Data Migration",
        desc: "In Salesforce data migration, we do transferring of data, applications and processes from another CRM and database to Salesforce’s cloud platform. It is done by mapping the data fields, cleaning the data and by making sure the data is protected and is not corrupted. We also support you with migration from legacy system to Salesforce without any loss or corruption of data.",
        img: "/images/serviceImages/Salesforce Data Migration.png",
    },
    {
        title: "Salesforce Customisation",
        desc: "We modify the platform according to your business needs. It involves creating custom fields, workflows, reports, dashboards and custom code to improve your operations. Our expert salesforce cloud consultants&apos; approach is to customise in such a manner that it supports future scaling of platforms.",
        img: "/images/serviceImages/Salesforce Customisation.png",
    },
    {
        title: "Ongoing Support & Maintenance",
        desc: "We provide Support and maintenance along with regular technical support with latest updates for the Salesforce platform. We will keep monitoring your platform to make sure that your platform stays functional and safe as the business grows.",
        img: "/images/serviceImages/Ongoing Support & Maintenance.png",
    },
    {
        title: "Salesforce System Integration",
        desc: "This consists of connecting Salesforce with other systems like ERP, marketing tools and other custom apps to allow smooth data flow and automatic processes. Our Salesforce consultants do API based integration, middleware solutions like MuleSoft or pre-built connectors, AppExchange apps and custom integration.",
        img: "/images/serviceImages/Salesforce System Integration.png",
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


const faqs = [
    {
        question: "What are the Salesforce features that we specialise in?",
        answer: "Our specializations are in using MuleSoft for API-led connectivity, AppExchange to connect with third-party apps fast, and our own Apex development to meet customer needs. Our experience involves workflow automation, cross-platform data synchronization in such systems as ERP and eCommerce platforms, and predictive analytics based on Einstein AI. We also work on data quality tools such as Tableau CRM and Duplicate Management for more insights. Our consultants make integration, scaling and alignment to your business to be smooth and error free.",
    },
    {
        question: "What should you consider while hiring a Salesforce Consulting Agency?",
        answer: "When hiring a salesforce consulting services agency, look at the company&apos;s experience, certification and the services they provide. Choose the companies that can connect salesforce with other systems, keep data safe and build your systems for growth. See if they are offering regular support and maintenance along with the cost for services. Credible companies also focus on clear communication and transparency with clients and give actionable insights that can be easily understood and implemented.",
    },
    {
        question: "What is Salesforce CRM consulting and its significance?",
        answer: "The Salesforce CRM consulting assists businesses to establish, modify and enhance Salesforce to enable them to sell more efficiently, retain customers and conduct business more effectively. It ensures that the platform aligns itself with the business objectives and provides measurable ROI.",
    },
    {
        question: "What are the ways Aekot&apos;s Salesforce CRM consulting will enhance my current system?",
        answer: "Our consultants examine your existing CRM, streamline operations, introduce automation, integrate other solutions and enhance reporting. This simplifies the work of the users and accelerates the work and provides clear data.",
    },
    {
        question: "Who will benefit from Aekot&apos;s Salesforce CRM consulting services?",
        answer: "Our services can benefit any business that is interested in starting to use Salesforce, changing to other CRM, enhancing performance, integrating tools, automating sales or service processes, or training teams.",
    },
    {
        question: "Why would I select Aekot&apos;s certified Salesforce CRM consultants and not general consultants?",
        answer: " Aekot has highly skilled and trained certified consultants thus they adhere to the best practices, familiarize themselves with the latest features and provide secure, scalable and compliant solutions.",
    },
    {
        question: "What are the qualifications of a certified Salesforce CRM consultant?",
        answer: "The most important ones are Salesforce Administrator, Sales Cloud Consultant, Service Cloud Consultant, Platform Developer, Marketing Cloud Consultant and Integration Architect depending on the project requirements.",
    },
    {
        question: "What is the effect of engagement of certified Salesforce CRM consultants on project success?",
        answer: "Certified consultants reduce risk, achieve a seamless deployment, enhance user adoption and offer high-quality customizations resulting in shorter timelines and increased ROI.",
    },
    {
        question: "What is Salesforce Agentforce and what is its benefit to businesses?",
        answer: "Salesforce Agentforce allows businesses to employ AI virtual assistants to provide customer service, sales and support. Such assistants are able to respond to inquiries, plan and provide assistance in real time. They reduce human labor and enhance customer satisfaction.",
    },
    {
        question: "Why is Agentforce consulting services recommended for a business?",
        answer: "The AI assistance can be implemented by Agentforce Consulting, which assists companies in establishing AI assistants that can align with their objectives and processes. Processes, systems and maintenance of things are customized by consultants according to Salesforce guidelines. This renders automation more effective and its users embrace it more quickly.",
    },

];

export const metadata = {
    title: "Salesforce Consulting Services | Aekot",
    description: "Maximize your business potential with Aekot&apos;s Salesforce Consulting Services. We provide strategy, implementation, customization, integration, AI-driven automation, and ongoing support to help businesses scale efficiently.",
    keywords: [
        "Salesforce consulting services",
        "Salesforce implementation",
        "Salesforce customization",
        "Salesforce integration",
        "Salesforce CRM",
        "Salesforce App Development",
        "Agentforce consulting",
        "CRM migration",
        "Salesforce support and maintenance",
        "Salesforce consulting for enterprises"
    ],
    canonical: "https://www.aekot.com/services/salesforce-consulting-services",
    openGraph: {
        title: "Salesforce Consulting Services | Aekot",
        description: "Partner with Aekot for expert Salesforce consulting. Our services include strategy, app development, implementation, data migration, integration, customization, and ongoing support to maximize ROI.",
        url: "https://www.aekot.com/services/salesforce-consulting-services",
        siteName: "Aekot",
        locale: "en_IN",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Salesforce Consulting Services | Aekot",
        description: "Unlock your business potential with Aekot&apos;s Salesforce Consulting Services. From implementation to AI automation and ongoing support, we help businesses scale efficiently.",
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
                        Salesforce Consulting Services provided by <span className="text-[#e52b50]">Aekot.</span>
                    </h1>

                    <p className="text-gray-600 mt-4 leading-relaxed">
                        Have a business that will thrive in future by using Aekot&apos;s Salesforce consulting services.
                    </p>

                    <p className="text-gray-600 mt-4 leading-relaxed">
                        Aekot is one of the best providers of Salesforce consulting services for both startups and larger organisations.
                    </p>

                    <div className="mt-6 flex justify-center md:justify-start">
                        <Button text="Get Started" path="/contact" />
                    </div>
                </div>

                {/* Right Image */}
                <div className="mt-10 md:mt-0 md:ml-10 flex justify-center">
                    <img
                        src="/images/serviceImages/salesforce-consulting.webp"
                        alt="Salesforce Consulting Services"
                        className="w-82 md:w-106 object-contain rounded-lg"
                    />
                </div>
            </section>

            <section className="py-16 relative bg-gradient-to-b from-white via-red-100 to-white px-8 md:px-20 ">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                    {/* Left Content */}
                    <div className="flex flex-col space-y-6 md:w-2/3">
                        <h2 className="text-3xl md:text-4xl font-bold text-left">
                            Why Choose Aekot for<br /> <span className="text-primary">Salesforce Consulting Services?</span>
                        </h2>

                        <p className="text-md text-gray-800 text-left">
                            <strong>Our Expertise in CRM</strong><br />
                            We understand customer relationship management and are experts at providing Salesforce solutions that improve CRM by centralising data, making work processes automatic and providing analysis with the help of AI. Our expert salesforce marketing cloud consultants have skills that allow us to create a CRM strategy that is in line with your business goals and create strong connections with the customers bringing growth.
                        </p>

                        <p className="text-md text-gray-800 text-left">
                            <strong>Our Industry Expertise</strong><br />
                            We understand your industry which allows us to fulfill your requirements in sectors such as finance, real estate and healthcare. Our expert salesforce marketing cloud consultants designs and creates solutions that answer your needs and challenges whether you are in healthcare, finance or non-profit with our salesforce consulting services for both small and large firms.
                        </p>

                        <p className="text-md text-gray-800 text-left">
                            <strong>Our Successful Track Record</strong><br />
                            Our Salesforce consulting services are proven and trusted across the industries and world. We have delivered over 50 projects and have 115+ certifications. We have 4.9/5 overall rating on Clutch and have perfect recommendation rate from our reviewers.
                        </p>

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
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
                        <span className="text-[#e52b50]">How Can Your Business Grow With a Changing Digital Environment?</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

                        <div className="p-6 rounded-2xl shadow-lg text-center border border-gray-100">
                            <FaHandHoldingDollar className="text-4xl text-red-500 mx-auto" />
                            <h3 className="text-xl font-semibold mt-4">Maximum ROI</h3>
                            <p className="text-gray-500 mt-2 text-sm">
                                Our Salesforce consulting services for enterprises can improve your investment by simplifying processes, streamlining repeated tasks and using smart data insights. We align solutions with your business goals to bring you visible results such as higher sales performance and lower running costs to give maximum return on investment.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl shadow-lg text-center border border-gray-100">
                            <FaUsers className="text-4xl text-green-500 mx-auto" />
                            <h3 className="text-xl font-semibold mt-4">Faster User Adoption</h3>
                            <p className="text-gray-500 mt-2 text-sm">
                                The success of any digital initiative depends on how quickly and effectively it embraces users like employees, partners or customers. We can help your business remove these barriers and improve engagement by focusing on user-friendly designs to provide training and regular support. Fast adoption can bring high productivity, faster returns on investment and more trust in future digital innovations.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl shadow-lg text-center border border-gray-100">
                            <FaDatabase className="text-4xl text-yellow-500 mx-auto" />
                            <h3 className="text-xl font-semibold mt-4">Streamlined Data Access</h3>
                            <p className="text-gray-500 mt-2 text-sm">
                                The biggest barrier to growth in today&apos;s digital economy is the fragmented information. When the data is trapped in sections in silos, it limits the visibility, creates disqualification and weakens the decision. We remove these obstacles to allow businesses to integrate their data and create a single source of information. This improves collaboration, allows for more accurate forecasting, streamline operations and better customer experience.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl shadow-lg text-center border border-gray-100">
                            <FaChartLine className="text-4xl text-purple-500 mx-auto" />
                            <h3 className="text-xl font-semibold mt-4">Improve System Scalability</h3>
                            <p className="text-gray-500 mt-2 text-sm">
                                As the business grows, the need for scalability comes with it and without a scalable system, these opportunities can become obstructions. We create scalable digital infrastructure to make sure that as your business grows, your system grows with it. Whether handling more customers, adding new features or managing large versions of data can bring you scalability, flexibility and continuous high performance.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl shadow-lg text-center border border-gray-100">
                            <FaUserCheck className="text-4xl text-pink-500 mx-auto" />
                            <h3 className="text-xl font-semibold mt-4">Use Customer Insights</h3>
                            <p className="text-gray-500 mt-2 text-sm">
                                Our customers are the center of digital improvements and by using customer insights we connect the system and integrate data for higher performance and better customer experience. This data help us discover what our customers prefer and what they might be interested in. This data helps us to make customer&apos;s experience more personal and relevant.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl shadow-lg text-center border border-gray-100">
                            <FaHeadset className="text-4xl text-indigo-500 mx-auto" />
                            <h3 className="text-xl font-semibold mt-4">Give Regular Support</h3>
                            <p className="text-gray-500 mt-2 text-sm">
                                We give continuous support to ensure that the systems are reliable and ready to change with the advances in technology. With active monitoring, timely updates and responsive technical support, we can reduce downtime and maintain business operations. This gives our customer assurance that their digital investments will continue to deliver value long after initial implementation.
                            </p>
                        </div>
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
            <section className="pt-16 px-6 md:px-20 py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-gray-900">
                            Here&apos;s a list of <span className="text-[#e52b50]">Services</span> that we provide:
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
                                    className="w-full h-48 object-cover"
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

            {/* Call to Action */}
            <section className="px-6 pt-12">
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
