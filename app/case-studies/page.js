import AllCaseStudies from "@/components/AllCaseStudies"; 

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

export default function CaseStudies() {
  return (
    <AllCaseStudies />
  );
}
