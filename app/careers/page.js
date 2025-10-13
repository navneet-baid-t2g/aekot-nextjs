import { FaLocationDot } from "react-icons/fa6";
import { HiLightBulb } from "react-icons/hi2";
import OurCulture from "@/components/OurCulture";
import WhyUsCard from "@/components/WhyUsCard";
import JobSearch from "@/components/JobSearch";

export const metadata = {
  title: "Join Top Salesforce Consulting Company | Careers at AEKOT",
  description:
    "Looking to grow your career? AEKOT, a leading Salesforce consulting company, is hiring skilled Salesforce consultants. Apply and join the team!",
  openGraph: {
    title: "Join Top Salesforce Consulting Company | Careers at AEKOT",
    description:
      "Looking to grow your career? AEKOT, a leading Salesforce consulting company, is hiring skilled Salesforce consultants. Apply and join the team!",
    url: "https://www.aekot.com/careers",
  },
};

async function getJobs() {
  try {
    const res = await fetch(
      `${process.env.CAREERS_BASE_URL}/jobs?limit=4&offset=0`,
      {
        headers: {
          Authorization: `Bearer ${process.env.CAREERS_API_KEY}`,
        },
        // Enable ISR (revalidate after 1 hour)
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch jobs");
    const data = await res.json();
    return data?.jobs || [];
  } catch (error) {
    console.error("Job fetch failed:", error);
    return [];
  }
}

export default async function Career() {
  const jobs = await getJobs();

  return (
    <section className="px-4 pt-16 md:pt-36 lg:mx-20">
      {/* 🦸 Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center py-12 px-6 md:px-12 space-y-16 md:space-x-16">
        <div className="w-full max-w-xl text-center md:text-left space-y-4">
          <h1 className="text-primary font-bold xs:text-3xl text-2xl md:text-3xl xl:text-4xl">
            Careers at Aekot
          </h1>
          <p className="text-md sm:text-base mb-2">
            At Aekot, we're not just building solutions; we're transforming
            businesses through cutting-edge Salesforce consulting and CRM
            strategies. Join us in shaping the future of technology and business.
          </p>
          <p className="font-semibold mb-8">Join us to help the World Work Better!</p>
          <a
            href="#jobs"
            className="ghost-button inline-block w-full sm:w-44 md:w-48 py-2 font-semibold text-center text-light border-2 border-primary bg-primary rounded-lg transition-transform cursor-pointer"
          >
            See Open Positions <i className="fa-solid fa-arrow-right-long text-xs"></i>
          </a>
        </div>

        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex items-center justify-center">
          <img
            src="/images/cultureImg/Img3.jpg"
            alt="Hero Image"
            className="w-full h-auto max-w-sm md:max-w-full rounded-sm"
          />
        </div>
      </section>

      {/* 🌟 Why Choose Section */}
      <article className="max-w-screen-xl mx-auto py-12 text-center space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-primary font-bold xs:text-3xl text-2xl md:text-3xl xl:text-4xl">
            Why Choose Aekot?
          </h2>
          <p className="max-w-screen-lg mx-auto text-center text-sm md:text-base ">
            Where Passion Meets Purpose
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 lg:px-12">
          {[
            {
              img: "https://images.unsplash.com/photo-1560250056-07ba64664864",
              name: "Collaborative Environment",
              para: "Aekot is more than a workplace; it's a community of like-minded professionals who value collaboration, creativity, and mutual support.",
            },
            {
              img: "https://images.unsplash.com/photo-1552581234-26160f608093",
              name: "Innovative Culture",
              para: "Join a team that thrives on pushing boundaries and stays at the forefront of technological advancements.",
            },
            {
              img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
              name: "Career Growth and Development",
              para: "You'll have access to mentorship, training programs, and career advancement.",
            },
            {
              img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
              name: "Client Impact",
              para: "Join Aekot and make a real impact on the businesses we serve.",
            },
          ].map((item, index) => (
            <WhyUsCard key={index} img={item.img} name={item.name} para={item.para} />
          ))}
        </div>
      </article>
      <article className="max-w-screen-xl mx-auto py-12 text-center space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-primary font-bold text-2xl xs:text-3xl md:text-3xl xl:text-4xl">
            Our Ratings Speak for Us
          </h2>
          <p className="max-w-screen-lg mx-auto text-sm md:text-base">
            What Our Employees Say
          </p>
          <div className="w-full flex flex-wrap justify-center gap-4 md:gap-6">
            <a
              href="https://www.glassdoor.co.in/Reviews/Aekot-Reviews-E4065231.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 md:w-1/3 flex"
            >
              <img
                src="/images/careerImage/glassdoorImg.png"
                alt="Glassdoor Reviews"
                className="w-full rounded-lg shadow-lg cursor-pointer"
              />
            </a>
            <a
              href="https://www.ambitionbox.com/reviews/aekot-reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 md:w-1/3 flex"
            >
              <img
                src="/images/careerImage/ambitionboxImg.png"
                alt="AmbitionBox Reviews"
                className="w-full rounded-lg shadow-lg cursor-pointer"
              />
            </a>
          </div>
        </div>
      </article>
      {/* 🧠 Culture Section */}
      <div className="space-y-6 text-center mb-24">
        <h2 className="text-primary font-bold xs:text-3xl text-2xl md:text-3xl lg:text-4xl">
          Life at Aekot!
        </h2>
        <p className="text-sm xs:text-xl sm:text-xl md:text-base">
          We believe in a culture of collaboration, innovation, and growth.
          <br /> Our team thrives in an environment that fosters learning, creativity, and shared success.
        </p>
        <OurCulture />
      </div>

      {/* 🔍 Job Search (Client Component) */}
      <JobSearch jobs={jobs} />

      {/* 📩 Resume CTA */}
      <div className="mt-6 text-center mb-6">
        <h3 className="text-xl font-bold mb-4">
          Don't see a relevant job opening? Send us your resume at
        </h3>
        <a
          href="mailto:hr@aekot.com"
          className="inline-block border-2 border-primary text-primary font-medium py-2 px-6 rounded-md cursor-pointer hover:scale-105 transition"
        >
          hr@aekot.com
        </a>
      </div>
    </section>
  );
}
