import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/scrollto";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata = {
  title: "Aekot - Salesforce Implementation Partners",
  description: "Maximize sales and efficiency with expert Salesforce CRM consulting from AEKOT. Tailored strategies to streamline your CRM processes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased text-dark`}
      >
        <ScrollToTop />
        <Navbar />
        <div className="content">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
