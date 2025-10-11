import Button from "@/components/Button";
import ServiceGridCard from "@/components/ServiceGridCard";
import serviceDataList from '@/data/MOCK_DATA_SERVICES.json';

export const metadata = {
    title: "Top Salesforce Services & CRM Consulting Solutions",
    description:
        "Explore expert Salesforce CRM consulting services with full Salesforce solutions from AEKOT. Boost efficiency and transform your business operation.",
    keywords: ["about", "company", "values", "mission"],

    openGraph: {
        title: "Top Salesforce Services & CRM Consulting Solutions",
        description:
            "Explore expert Salesforce CRM consulting services with full Salesforce solutions from AEKOT. Boost efficiency and transform your business operation.",
        url: "https://www.aekot.com/services/",
        images: [
            {
                url: "https://www.aekot.com/original Aekot logo.webp",
                alt: "AEKOT Logo",
            },
        ],
        type: "website",
    },
};

const ServicePage = () => {
    return (
        <>
            <section
                className={`px-4 pt-16 md:pt-36 lg:mx-20 `}
            >
                <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16 mb-16">
                    <div className="w-full md:w-1/2 text-center md:text-left md:pr-12 space-y-4">
                        <h1 className="text-primary font-bold xs:text-3xl text-2xl md:text-3xl xl:text-4xl">
                            Our Services <br />
                        </h1>
                        <h2 className="text-lg md:text-xl font-semibold mb-2">
                            Transforming Businesses with Salesforce Expertise
                        </h2>
                        <p className="text-gray-700 mb-8">
                            Unlock the Full Potential of Your Business with Aekot's Tailored
                            Salesforce Solutions. From seamless CRM implementations to custom
                            solutions, we’re here to drive your digital transformation.
                        </p>
                        <Button text="Get Started Today" path="/contact" />
                    </div>
                    <div className="w-full md:w-1/2 mt-12 md:mt-0 flex items-center justify-center">
                        <img
                            src={"/images/serviceImages/ServiceImage.webp"}
                            alt="Hero Image"
                            loading="lazy"
                            className="object-cover w-full h-auto rounded-sm shadow-lg"
                        />
                    </div>
                </div>
                <h2 className="text-center mb-8 md:mb-12 text-3xl font-bold text-primary">
                    Our Service Offerings
                </h2>
                <div className="flex flex-col items-center md:items-stretch xl:mx-8">
                    {serviceDataList.map((service, index) => (
                        <ServiceGridCard
                            key={index}
                            imageSrc={service.imageSrc}
                            title={service.title}
                            additionalInfo={service.additionalInfo}
                            alignRight={index % 2 !== 0}
                        />
                    ))}
                </div>
                <div className="max-w-screen-xl mx-auto shadow-[0_0_5px_rgba(0,0,0,0.25)] rounded-2xl mt-12 py-10 px-4 flex flex-col justify-center items-center">
                    <div className="text-center space-y-4 w-full ">
                        <h2 className="mb-6 text-xl font-bold">
                            Unlock Your Salesforce Potential with{" "}
                            <span style={{ color: "#e52b50" }}> Aekot.</span>
                        </h2>
                        <p className="text-md text-gray-700 max-w-6xl text-center mx-auto">
                            At Aekot, we don't just implement Salesforce — we unlock its full
                            potential for your business. With our deep expertise and innovative
                            approach, we'll help you optimize your systems, seamlessly integrate
                            new technologies, and scale your operations globally.
                        </p>
                        <p className="font-semibold my-8">
                            Let's transform your business and achieve success together.
                        </p>
                        <div className="flex justify-center"><Button text="Schedule a Call" path="/contact" /></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicePage;
