"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layout } from "@/components/layout/Layout";
import {
  ShieldCheck,
  FileText,
  Clock,
  Printer,
  ChevronRight,
  Building2,
  Mail,
  Phone,
  Scale,
  Percent,
  Award,
  ShieldAlert,
  RotateCcw,
  AlertTriangle,
  FileSpreadsheet,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export interface TocItem {
  id: string;
  title: string;
}

interface LegalPageLayoutProps {
  title: string;
  subtitle?: string;
  documentNumber?: string;
  lastUpdated?: string;
  toc?: TocItem[];
  children: React.ReactNode;
}

export const legalPolicies = [
  { name: "Privacy Policy", path: "/privacy-policy", icon: ShieldCheck },
  { name: "Terms & Conditions", path: "/terms-and-conditions", icon: FileText },
  { name: "Refund & Cancellation", path: "/refund-policy", icon: RotateCcw },
  { name: "Interest Rate Policy", path: "/interest-rate-policy", icon: Percent },
  { name: "Fair Practices Code", path: "/fair-practices-code", icon: Award },
  { name: "Corporate Governance", path: "/corporate-governance-policy", icon: Building2 },
  { name: "KYC & AML Policy", path: "/kyc-aml-policy", icon: ShieldAlert },
  { name: "Risk Management", path: "/risk-management-policy", icon: FileSpreadsheet },
  { name: "Legal Disclaimer", path: "/disclaimer", icon: AlertTriangle },
  { name: "Grievance Policy", path: "/contact", icon: Scale },
];

export const LegalPageLayout = ({
  title,
  subtitle,
  documentNumber = "LMC-POL-2024-V2",
  lastUpdated = "September 2024",
  toc = [],
  children,
}: LegalPageLayoutProps) => {
  const pathname = usePathname();
  const [activeToc, setActiveToc] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const item of toc) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveToc(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toc]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <Layout>
      {/* Institutional Document Header - Giant Rounded Card Reference Design */}
      <div className="relative overflow-hidden pt-4 pb-8 md:py-6 bg-gradient-to-b from-[#eef8f4] via-background to-background">
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-[#d8f0e5]/60 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden p-6 sm:p-10 md:p-12 shadow-2xl border border-border/40 bg-[#073832] text-white">
            {/* Organic Curved Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#073832]/98 via-[#0f766e]/95 via-60% to-[#0a4840] pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Breadcrumb */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-white/70 mb-4">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3 h-3 text-white/50" />
                <span>Regulatory Disclosures</span>
                <ChevronRight className="w-3 h-3 text-white/50" />
                <span className="text-white font-medium">{title}</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Aarsh Fincon Limited • RBI Registered</span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                    {title}
                  </h1>
                  {subtitle && (
                    <p className="text-white/80 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
                      {subtitle}
                    </p>
                  )}
                </div>

                {/* Print & Metadata Controls */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="bg-white text-[#073832] hover:bg-emerald-50 active:scale-95 transition-all px-5 py-2.5 rounded-full font-bold text-xs md:text-sm shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Document</span>
                  </button>
                </div>
              </div>

              {/* Document Metadata Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/20 text-xs">
                <div>
                  <span className="text-white/60 block text-[11px] uppercase tracking-wider">Regulated Entity</span>
                  <span className="font-semibold text-white">Aarsh Fincon Limited</span>
                </div>
                <div>
                  <span className="text-white/60 block text-[11px] uppercase tracking-wider">Digital Brand</span>
                  <span className="font-semibold text-white">Lendigo Microcare</span>
                </div>
                <div>
                  <span className="text-white/60 block text-[11px] uppercase tracking-wider">RBI Reg. Number</span>
                  <span className="font-semibold text-emerald-300">B-10.00119</span>
                </div>
                <div>
                  <span className="text-white/60 block text-[11px] uppercase tracking-wider">Document Status</span>
                  <span className="font-semibold text-white">Operative ({lastUpdated})</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout Container */}
      <div className="container-narrow mx-auto px-4 md:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Sticky Sidebar: Policy Navigation & Table of Contents */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* Policy Switcher Menu */}
            <div className="bg-card rounded-xl border border-border/80 p-4 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-2 mb-3">
                Legal &amp; Regulatory Center
              </h3>
              <nav className="space-y-1">
                {legalPolicies.map((policy) => {
                  const isActive = pathname === policy.path;
                  const Icon = policy.icon;
                  return (
                    <Link
                      key={policy.path}
                      href={policy.path}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                        isActive
                          ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="truncate">{policy.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* In-page Table of Contents */}
            {toc.length > 0 && (
              <div className="bg-card rounded-xl border border-border/80 p-4 shadow-sm hidden md:block">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-2 mb-3">
                  Contents in this Policy
                </h3>
                <nav className="space-y-1">
                  {toc.map((item, idx) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`flex items-start gap-2 px-2.5 py-1.5 rounded text-xs transition-colors ${
                        activeToc === item.id
                          ? "text-primary font-bold bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                      }`}
                    >
                      <span className="text-[10px] text-muted-foreground font-mono mt-0.5">{idx + 1}.</span>
                      <span className="leading-snug">{item.title}</span>
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Official Support & Grievance Card */}
            <div className="bg-muted/40 rounded-xl border border-border/80 p-4 text-xs space-y-3">
              <div className="font-semibold text-foreground flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Regulatory Inquiries Desk</span>
              </div>
              <p className="text-muted-foreground text-[11px] leading-relaxed">
                For official legal notices, compliance queries, or grievance escalations:
              </p>
              <div className="space-y-1.5 text-muted-foreground pt-1 border-t border-border/60">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  <a href="mailto:support.lendigo@aarshfincon.com" className="text-foreground font-medium hover:underline">
                    support.lendigo@aarshfincon.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <span>+91-7827486530</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Main Content Panel */}
          <main className="lg:col-span-8 bg-card rounded-2xl border border-border/80 p-6 md:p-10 shadow-sm">
            <div className="legal-document space-y-10 text-foreground text-sm md:text-base leading-relaxed">
              {children}
            </div>

            {/* Document Footer Stamp */}
            <div className="mt-12 pt-8 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
              <div>
                <span>Official Policy Document • </span>
                <strong>Lendigo Microcare</strong> (Aarsh Fincon Limited)
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span>Effective Date: {lastUpdated}</span>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
};
