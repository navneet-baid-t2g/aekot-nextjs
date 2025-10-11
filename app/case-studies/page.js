import JsoncaseStudyData from "@/data/MOCK_DATA_ALLCASESTUDIES.json";
import CaseStudyCard from "@/components/CaseStudyCard";

export const metadata = {
  title: "Salesforce Support Case Studies | Hire AEKOT Consultants",
  description:
    "See real Salesforce support case examples at AEKOT. Hire certified Salesforce consultants and discover how we solve CRM challenges effectively.",
  keywords: ["about, company, values, mission"],
  openGraph: {
    title: "Salesforce Support Case Studies | Hire AEKOT Consultants",
    description:
      "See real Salesforce support case examples at AEKOT. Hire certified Salesforce consultants and discover how we solve CRM challenges effectively.",
    url: "https://www.aekot.com/our-case-studies/",
    images: [
      {
        url: "https://www.aekot.com/original Aekot logo.webp",
        alt: "AEKOT Logo",
      },
    ],
    type: "website",
  },
};

export default function AllCaseStudies() {
  return (
    <section className="px-4 pt-32 md:pt-36 lg:mx-20">
      <div className="space-y-4 text-center">
        <h2 className="text-primary font-bold xs:text-3xl text-2xl md:text-3xl xl:text-4xl">
          Case Studies
        </h2>
        <p className="fade-in-subhead max-w-screen-sm mx-auto font-semibold text-lg md:text-xl">
          Delivering Success: Real Results, Real Clients
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-12 text-center">
        {JsoncaseStudyData.map((card) => (
          <CaseStudyCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
