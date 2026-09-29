import { Metadata } from "next";
import { FAQsContent } from "./FAQsContent";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Lendigo Microcare's instant personal loans, eligibility, interest rates, and repayment.",
  keywords: [
    "loan FAQs",
    "instant loan questions",
    "Lendigo Microcare help",
    "loan eligibility",
  ],
  alternates: {
    canonical: "https://lendigomicrocare.com/faqs",
  },
};

export default function FAQsPage() {
  return <FAQsContent />;
}
