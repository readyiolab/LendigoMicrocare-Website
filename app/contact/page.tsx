import { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Lendigo Microcare for instant loan support. Reach out via phone, email, or WhatsApp for personalized financial assistance.",
  keywords: [
    "contact Lendigo Microcare",
    "loan support",
    "customer service",
    "fintech help",
  ],
  alternates: {
    canonical: "https://lendigomicrocare.com/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
