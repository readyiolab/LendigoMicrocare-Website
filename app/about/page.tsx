import { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Lendigo Microcare, a regulated digital lender dedicated to inclusive financial growth and transparent borrowing since 2002.",
  keywords: [
    "Lendigo Microcare about",
    "digital lending India",
    "RBI regulated fintech",
    "financial growth",
  ],
  alternates: {
    canonical: "https://lendigomicrocare.com/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
