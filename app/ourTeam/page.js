
import TeamCard from "@/components/TeamCard";
import Button from "@/components/Button";
import OurCulture from "@/components/OurCulture";
import CertificateCarousel from "@/components/Certifications";

export const metadata = {
  title: "Salesforce Consulting Service Team | Hire Experts at AEKOT",
  description:
    "Meet AEKOT's team of certified Salesforce consultants. Get tailored consulting services to optimize CRM systems and improve business outcomes.",
  keywords: ["home", "website", "business", "services"],
  openGraph: {
    title: "Salesforce Consulting Service Team | Hire Experts at AEKOT",
    description:
      "Meet AEKOT's team of certified Salesforce consultants. Get tailored consulting services to optimize CRM systems and improve business outcomes.",
    url: "https://www.aekot.com/our-team/",
    images: [
      {
        url: "https://www.aekot.com/original Aekot logo.webp",
        alt: "AEKOT Logo",
      },
    ],
    type: "website",
  },
};

const OurTeam = () => {
  // const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <section className="px-4 pt-16 md:pt-32 fade-in-head">
        {/* FIRST SECTION STARTS HERE */}
        <article className="max-w-screen-xl mx-auto pt-12 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-bold xs:text-3xl text-2xl md:text-3xl lg:text-4xl">
              Empowering Your Business with <br />
            </h2>
            <h2 className="font-bold xs:text-3xl text-2xl md:text-3xl lg:text-4xl">
              <span className="text-primary">Our </span>
              <span className="text-primary">Experts</span>
            </h2>
          </div>
        </article>
        {/* FIRST SECTION ENDS HERE */}

        {/* SECOND SECTION STARTS HERE */}
        <article className="max-w-screen-xl mx-auto py-8 text-center space-y-8">
          <div className="space-y-4 text-center mx-4 md:mx-16">
            <p className="max-w-screen-sm mx-auto text-md md:text-md">
              Our diverse team that brings unparalleled expertise, passion, and
              innovation to every project.
            </p>
          </div>

          {/* Search Bar */}
          {/* <div className="flex justify-center items-center mt-10">
            <div className="flex items-center w-full max-w-lg bg-light border border-dark px-4 h-12 rounded-full focus-within:border-primary transition-colors">
              <i className="fa-solid fa-magnifying-glass text-lg md:text-xl text-gray-500"></i>
              <input
                id="search"
                type="search"
                placeholder="Search for Name or Role"
                onChange={(event) => setSearchTerm(event.target.value)}
                className="flex-grow bg-transparent border-none px-4 outline-none"
              />
            </div>
          </div> */}
          {/* Search Bar */}
        </article>
        {/* SECOND SECTION ENDS HERE */}

        {/* TEAMS SECTION */}
        <TeamCard />
        {/* TEAMS SECTION ENDS */}

        {/* Certification Section */}
        <div className="space-y-6 text-center mb-24 px-16 pt-16">
          <h2 className="text-primary pt-12 font-bold xs:text-3xl text-2xl md:text-3xl lg:text-4xl">
            Certifications held by Our Team
          </h2>
          <p className="text-sm xs:text-xl sm:text-xl md:text-base">
            Certifications held by our team members.
          </p>
          <CertificateCarousel />
        </div>
        {/* Certification section ends */}

        {/* Culture Section */}
        <div className="space-y-6 text-center mb-24">
          <h2 className="text-primary font-bold xs:text-3xl text-2xl md:text-3xl lg:text-4xl">
            Life at Aekot!
          </h2>
          <p className="text-sm xs:text-xl sm:text-xl md:text-base">
            We believe in a culture of collaboration, innovation, and growth.
            <br />
            Our team thrives in an environment that fosters learning,
            creativity, and shared success.
          </p>
          <OurCulture />
        </div>
        {/* Culture section ends */}

        {/* Join our team section */}
        <div className="max-w-screen-xl mx-auto shadow-[0_0_5px_rgba(0,0,0,0.25)] rounded-2xl px-8 md:px-12 mt-12 py-8 text-center space-y-6 setbuttoncenter">
          <p className="font-semibold text-xl">
            Be the Advantage in <span style={{ color: "#e52b50" }}>#AekotAdvantage</span>.
          </p>
          <p className="text-md text-gray-700 leading-relaxed">
            Join Us and Be a Part of Our Success. <br />
            Interested in a career at Aekot? We’re always looking for talented
            individuals to join our dynamic team.
          </p>

          <Button text="Join Our Team" path="/careers" />
        </div>
      </section>
    </>
  );
};

export default OurTeam;
