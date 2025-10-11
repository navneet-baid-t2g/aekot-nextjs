import ContactForm from "@/components/ContactForm";


export const metadata = {
  title: "Hire Salesforce CRM Consultant for Expert Business Solutions",
  description:
    "Hire a certified Salesforce CRM consultant from AEKOT. Get personalized consulting services to optimize your sales, marketing, and customer success.",
  keywords: ["home", "website", "business", "services"],
  openGraph: {
    title: "Hire Salesforce CRM Consultant for Expert Business Solutions",
    description:
      "Hire a certified Salesforce CRM consultant from AEKOT. Get personalized consulting services to optimize your sales, marketing, and customer success.",
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

export default function ContactPage() {
  return (
    <section className="px-4 pt-16 md:pt-24">
      <article className="md:max-w-screen-xl mx-auto py-12 flex flex-col lg:flex-row gap-12 lg:gap-0">
        {/* Information Panel */}
        <div className="lg:w-2/6 md:mx-auto bg-primary rounded-lg p-4 md:p-8 text-light">
          <h2 className="font-semibold text-lg xs:text-3xl md:text-2xl">
            Contact Information
          </h2>
          <p className="text-sm">
            Fill up the form and our team will get back to you within 24 hours
          </p>

          <article className="mt-6 space-y-4 text-sm">
            <div className="flex items-center">
              <img src={"/assets/contact_phone_icon.svg"} alt="Phone Icon" />
              <a href="tel:+14158003212">+1 415 800 3212</a>
            </div>
            <div className="flex items-center">
              <img src={"/assets/contact_phone_icon.svg"} alt="Phone Icon" />
              <a href="tel:+9108049669587">+91 80 4966 9587</a>
            </div>
            <div className="flex items-center">
              <img src={"/assets/contact_phone_icon.svg"} alt="Phone Icon" />
              <a href="tel:+971569037989">+971 569037989</a>
            </div>
            <div className="flex items-center">
              <img src={"/assets/contact_mail_icon.svg"} alt="Mail Icon" />
              <a href="mailto:contact@aekot.com">contact@aekot.com</a>
            </div>
            <div className="flex items-center">
              <p>
                Unit 3, 8th Floor, Innovator Building, ITPL, Whitefield
                Bengaluru, India 560066
              </p>
            </div>
            <div className="pt-6">
              <img src={"/assets/map.png"} alt="World Map" />
            </div>
          </article>
        </div>
        <div className="px-2 lg:w-3/6 md:mx-auto">
          <ContactForm />
        </div>
      </article>
    </section>
  );
}
