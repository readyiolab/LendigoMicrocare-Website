"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import {
  Zap,
  Settings,
  Sliders,
  Heart,
  Eye,
  Shield,
  Users,
  Headphones,
  Award,
  Building2,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Speed",
    description:
      "Get funds when you need them most without unnecessary delays. Quick approvals and fast disbursals ensure life never comes to a standstill.",
  },
  {
    icon: Settings,
    title: "Efficiency",
    description:
      "From application to disbursal, every step is smooth and hassle-free. Our streamlined process saves you both time and effort.",
  },
  {
    icon: Sliders,
    title: "Flexibility",
    description:
      "Choose loan amounts and repayment tenures that fit your lifestyle. We adapt to your needs instead of forcing rigid structures.",
  },
  {
    icon: Heart,
    title: "Empathy",
    description:
      "We see more than just numbers — we see people. Every borrower is treated with fairness, dignity, and care.",
  },
  {
    icon: Eye,
    title: "Transparent",
    description:
      "No fine print, no hidden surprises — just clear terms you can trust. What we promise is exactly what you get.",
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "Your data and transactions are protected with advanced security systems. Peace of mind comes built into every loan.",
  },
  {
    icon: Users,
    title: "Accessibility",
    description:
      "Designed to support salaried, self-employed, and underserved communities alike. Financial help made easy, fair, and inclusive.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "A dedicated team is always ready to guide you at every step. From queries to repayments, we're here for you.",
  },
];

const stats = [
  { value: "2002", label: "Established", icon: Building2 },
  { value: "1M+", label: "Happy Customers", icon: Users },
  { value: "₹6000Cr+", label: "Loans Disbursed", icon: TrendingUp },
  { value: "4.5★", label: "App Rating", icon: Award },
];

export const AboutContent = () => {
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
                src="/assets/person_loan_2.png"
                alt="Lendigo Microcare Financial Growth"
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
                  <span>Aarsh Fincon Limited • RBI Reg. Since 2002</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight mb-6">
                  Your Trusted Partner in<br />
                  Financial Freedom.
                </h1>

                <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-xl font-normal">
                  Lendigo Microcare is a dedicated digital lending platform designed to help salaried professionals overcome sudden budget crunches with quick, ethical, and transparent cash advances.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://loan.lendigomicrocare.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="button"
                      className="bg-white text-[#073832] hover:bg-emerald-50 active:scale-95 transition-all duration-300 px-7 py-3.5 rounded-full font-bold text-sm md:text-base shadow-xl hover:shadow-2xl flex items-center gap-2.5 group cursor-pointer"
                    >
                      <span>Get Instant Cash</span>
                      <ArrowRight className="w-4 h-4 text-[#073832] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </a>

                  <Link href="/contact">
                    <button
                      type="button"
                      className="bg-white/15 hover:bg-white/25 active:scale-95 text-white backdrop-blur-md border border-white/30 px-6 py-3.5 rounded-full font-medium text-sm md:text-base transition-all duration-300 cursor-pointer"
                    >
                      <span>Speak with Team</span>
                    </button>
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center gap-6 mt-10 text-white/90 text-xs md:text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    <span>RBI Regulated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    <span>ISO Certified Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    <span>Bank-Grade Encryption</span>
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
              <div className="flex items-center -space-x-2 mb-3">
                <div className="w-8 h-8 rounded-full border-2 border-white/60 overflow-hidden relative bg-emerald-700">
                  <Image src="/assets/person_loan_1.png" alt="User" fill sizes="32px" className="object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white/60 overflow-hidden relative bg-emerald-800">
                  <Image src="/assets/person_loan_2.png" alt="User" fill sizes="32px" className="object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white/60 bg-emerald-500 text-white font-bold text-xs flex items-center justify-center">
                  +
                </div>
              </div>
              <p className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-0.5">
                ₹6000Cr+
              </p>
              <p className="text-xs text-white/80 leading-snug">
                Disbursed across 1M+ satisfied borrowers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Welcome to Lendigo Microcare, a full-service digital lender dedicated to helping people get the money they need to achieve their goals. Empowering your financial journey with cutting-edge technology and expert insights, Lendigo Microcare is founded with the goal of integrating individuals and salaried professionals into the appropriate credit structure.
                </p>
                <p>
                  Lendigo Microcare is running under the umbrella of RBI Registered NBFC Aarsh Fincon Limited (Registration No. B-10.00119).
                </p>
                <p>
                  We make every attempt to process your online application fast and easily to get you the money you need. Our team of knowledgeable professionals is committed to providing tailored service and innovative lending solutions to meet the various needs of each of our clients.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 card-elevated"
            >
              <div className="space-y-8">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our goal is to provide our cherished customers with a genuine enriching experience through our unique and creative teamwork. As pioneers in the FinTech sector, we want to build a moral and responsible connection to give our clients more worthwhile prospects.
                  </p>
                </div>

                <div>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Today, one needs a full digital and futuristic environment in the comfort of their home. We give you and your loved ones additional security and a stable financial future! At Lendigo Microcare, we want borrowing to be simple and painless.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Sets Us <span className="text-gradient">Apart</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-2xl p-6 card-elevated text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
