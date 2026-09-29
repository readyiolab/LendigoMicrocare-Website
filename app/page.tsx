import { Metadata } from "next";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { LoanCalculator } from "@/components/home/LoanCalculator";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { UseCasesSection } from "@/components/home/UseCasesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { FAQSection } from "@/components/home/FAQSection";

export const metadata: Metadata = {
  title: "Instant Personal Loans in India | Quick Approval",
  description:
    "Lendigo Microcare - Your trusted partner for instant personal loans. Fast approval, 100% secure, and no hidden fees. Apply today!",
  alternates: {
    canonical: "https://lendigomicrocare.com/",
  },
};

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ProcessSection />
      <LoanCalculator />
      <WhyChooseUs />
      <BenefitsSection />
      <UseCasesSection />
      <StatsSection />
      <FAQSection />
    </Layout>
  );
}
