"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  HelpCircle,
  Search,
  MessageCircle,
  FileText,
  CreditCard,
  Lock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const faqCategories = [
  {
    title: "General Questions",
    icon: HelpCircle,
    faqs: [
      {
        question: "What is a Non-Banking Financial Company (NBFC)?",
        answer:
          "A Non-Banking Financial Company (NBFC) is a company registered under the Companies Act that provides financial services like loans and advances. NBFCs are regulated by the Reserve Bank of India (RBI) and are an important part of the financial sector.",
      },
      {
        question: "What is Lendigo Microcare and how does it work?",
        answer:
          "Lendigo Microcare is a digital lending platform that provides instant personal loans to salaried professionals. Simply download our app, fill in your basic details, submit required documents, and receive funds directly in your bank account within minutes of approval.",
      },
      {
        question: "Is Lendigo Microcare a legitimate company?",
        answer:
          "Yes, Lendigo Microcare is a legitimate digital lending platform running under the umbrella of RBI Registered NBFC Aarsh Fincon Limited (Registration Number: B-10.00119).",
      },
    ],
  },
  {
    title: "Eligibility & Application",
    icon: FileText,
    faqs: [
      {
        question: "Who can apply for a loan with Lendigo Microcare?",
        answer:
          "Any salaried individual between 21-55 years of age with a valid PAN card, Aadhaar card, and bank account can apply for a loan with Lendigo Microcare. You should have a minimum monthly income as per our eligibility criteria.",
      },
      {
        question: "How much can I borrow from Lendigo Microcare?",
        answer:
          "You can borrow from ₹5,000 to ₹1,20,000 based on your eligibility, income, and credit profile. The exact loan amount will be determined during the application process.",
      },
      {
        question: "What documents are required for applying?",
        answer:
          "You need to submit your PAN card, Aadhaar card, latest salary slips, and bank statements. Our digital process makes document submission quick and hassle-free.",
      },
      {
        question: "Do we need any collateral/security?",
        answer:
          "No, Lendigo Microcare provides unsecured personal loans. You don't need to provide any collateral or security to apply for a loan with us.",
      },
    ],
  },
  {
    title: "Loan Terms & Repayment",
    icon: CreditCard,
    faqs: [
      {
        question: "What is the interest rate on Lendigo Microcare loans?",
        answer:
          "Our interest rates start from 1% per month. The exact rate depends on your credit profile, loan amount, and tenure. All interest rates and APR are disclosed transparently before you confirm your loan.",
      },
      {
        question: "What is the loan tenure?",
        answer:
          "Loan tenure ranges from 1 day to 365 days. You can choose a repayment period that suits your financial situation.",
      },
      {
        question: "How do I repay my loan?",
        answer:
          "You can repay conveniently through UPI QR scan or direct bank transfer (IMPS/NEFT/RTGS) to our lending partner Aarsh Fincon Limited. Visit our Repay Loan page to scan official Baroda Pay / Paytm QR codes or copy verified bank account details.",
      },
      {
        question: "Is there a processing fee?",
        answer:
          "Yes, we charge a processing fee of 10% on the loan amount, which is deducted upfront. This is clearly disclosed before you confirm your loan application.",
      },
    ],
  },
  {
    title: "Security & Privacy",
    icon: Lock,
    faqs: [
      {
        question: "Is my data safe with Lendigo Microcare?",
        answer:
          "Absolutely. We use bank-grade encryption and security measures to protect your personal and financial information. Your data is never shared with unauthorized third parties.",
      },
      {
        question: "What happens if I miss a payment?",
        answer:
          "Missing a payment may result in late payment charges and could affect your credit score. We encourage you to contact our customer support if you're facing difficulties with repayment, and we'll work with you to find a solution.",
      },
    ],
  },
];

export const FAQsContent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = faqCategories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.faqs.length > 0);

  return (
    <Layout>
      {/* Hero Section - Giant Rounded Card Reference Design */}
      <section className="relative overflow-hidden pt-4 pb-12 md:py-8 lg:py-10 bg-gradient-to-b from-[#eef8f4] via-background to-background">
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#d8f0e5]/60 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden min-h-[520px] md:min-h-[580px] shadow-2xl border border-border/40 flex items-center bg-[#073832]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/assets/person_loan_1.png"
                alt="Lendigo Microcare FAQ Support"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-[70%_center] lg:object-right opacity-80"
              />
            </div>

            {/* Organic Curved Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#073832]/98 via-[#0f766e]/90 via-55% to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#073832]/90 via-transparent to-transparent md:hidden" />
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/25 rounded-full blur-3xl pointer-events-none" />

            {/* Left Content Column */}
            <div className="relative z-10 px-6 sm:px-10 md:px-14 lg:px-16 py-12 md:py-16 max-w-2xl lg:max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-medium mb-6">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  <span>Frequently Asked Questions • Transparent Lending</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight mb-6">
                  Got Questions?<br />
                  We've Got Answers.
                </h1>

                <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-xl font-normal">
                  Find quick answers to common questions about our instant payday loans, digital KYC, repayment options, and eligibility rules.
                </p>

                {/* Search Bar inside Hero */}
                <div className="relative max-w-md mb-8">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <Input
                    placeholder="Search for questions (e.g. eligibility, tenure, repayment)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 py-6 text-sm md:text-base bg-white text-neutral-900 placeholder:text-neutral-500 rounded-full border-0 shadow-lg focus-visible:ring-2 focus-visible:ring-emerald-400"
                  />
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center gap-6 text-white/90 text-xs md:text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    <span>No Hidden Fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    <span>Clear APR Disclosures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    <span>RBI Fair Practices</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Glassmorphic Stat Card on Bottom Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20 backdrop-blur-xl bg-black/40 border border-white/25 rounded-2xl md:rounded-3xl p-4 md:p-5 text-white shadow-2xl max-w-[220px]"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mb-3">
                <HelpCircle className="w-5 h-5 text-emerald-300" />
              </div>
              <p className="text-xl md:text-2xl font-extrabold tracking-tight text-white mb-0.5">
                24/7 Help
              </p>
              <p className="text-xs text-white/80 leading-snug">
                Browse our comprehensive guide to borrowing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-4xl">
          {searchQuery && filteredCategories.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
            </motion.div>
          )}
          {(searchQuery ? filteredCategories : faqCategories).map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${categoryIndex}-${index}`}
                    className="bg-card rounded-xl px-6 border-none card-elevated"
                  >
                    <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-primary/5 rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Please chat with our friendly team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl hero-gradient text-primary-foreground font-medium"
            >
              Contact Support
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};
