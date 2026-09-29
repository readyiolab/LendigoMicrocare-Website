"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Clock, CheckCircle2 } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-4 pb-12 md:py-8 lg:py-10 bg-gradient-to-b from-[#eef8f4] via-background to-background">
      {/* Ambient background glow matching the reference image */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#d8f0e5]/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Giant Rounded Card Container - Identical to Reference Image */}
        <div className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden min-h-[560px] md:min-h-[620px] lg:min-h-[660px] shadow-2xl border border-border/40 flex items-center bg-[#073832]">
          {/* Background Image: Happy Smiling Professional in Modern Armchair */}
          <div className="absolute inset-0">
            <Image
              src="/assets/payday_hero.jpg"
              alt="Happy borrower with instant payday loan approval"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-[75%_center] lg:object-center"
            />
          </div>

          {/* Organic Curved Gradient Overlay - Matching Reference in Brand Colors */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#073832]/98 via-[#0f766e]/90 via-55% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#073832]/90 via-transparent to-transparent md:hidden" />

          {/* Subtle radial light for emerald brilliance */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/25 rounded-full blur-3xl pointer-events-none" />

          {/* Left Content Column */}
          <div className="relative z-10 px-6 sm:px-10 md:px-14 lg:px-16 py-12 md:py-16 max-w-2xl lg:max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-medium mb-6">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                <span>RBI Registered NBFC Partner • Instant Payday Cash</span>
              </div>

              {/* Headline - Payday Loan Focus matching Reference Typography */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight mb-6">
                Instant Cash Advance.<br />
                Zero Stress Till Payday.
              </h1>

              {/* Subtitle */}
              <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-xl font-normal">
                Facing unexpected expenses before your next salary? Borrow from ₹5,000 up to ₹1,00,000 with 100% digital verification and instant direct-to-bank transfer.
              </p>

              {/* Action Buttons - Matching Reference White Pill Button */}
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
                    <span>Apply for Instant Cash</span>
                    <ArrowRight className="w-4 h-4 text-[#073832] group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>

                <Link href="/repay">
                  <button
                    type="button"
                    className="bg-white/15 hover:bg-white/25 active:scale-95 text-white backdrop-blur-md border border-white/30 px-6 py-3.5 rounded-full font-medium text-sm md:text-base transition-all duration-300 cursor-pointer"
                  >
                    <span>Repay Existing Loan</span>
                  </button>
                </Link>
              </div>

              {/* Trust Features */}
              <div className="flex flex-wrap items-center gap-6 mt-10 text-white/90 text-xs md:text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-300" />
                  <span>5-Min Disbursal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>100% Paperless</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-300" />
                  <span>No Collateral Needed</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating Glassmorphic Social Proof Card - Exactly Matching Reference Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20 backdrop-blur-xl bg-black/40 border border-white/25 rounded-2xl md:rounded-3xl p-4 md:p-5 text-white shadow-2xl max-w-[230px]"
          >
            {/* Avatar Stack */}
            <div className="flex items-center -space-x-2 mb-3">
              <div className="w-8 h-8 rounded-full border-2 border-white/60 overflow-hidden relative bg-emerald-700">
                <Image
                  src="/assets/person_loan_1.png"
                  alt="Borrower"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white/60 overflow-hidden relative bg-emerald-800">
                <Image
                  src="/assets/person_loan_2.png"
                  alt="Borrower"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white/60 overflow-hidden relative bg-emerald-900">
                <Image
                  src="/assets/person_loan_3.png"
                  alt="Borrower"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white/60 bg-emerald-500 text-white font-bold text-xs flex items-center justify-center">
                +
              </div>
            </div>

            <p className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-0.5">
              50k+
            </p>
            <p className="text-xs text-white/80 leading-snug">
              Salaried borrowers funded across India.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
