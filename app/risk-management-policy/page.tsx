import React from "react";
import { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Risk Management Policy",
  description:
    "Risk Management Policy of Lendigo Microcare under Aarsh Fincon Limited (RBI Reg. B-10.00119), detailing risk categories, mitigation, and oversight.",
  alternates: {
    canonical: "https://lendigomicrocare.com/risk-management-policy",
  },
};

const tocItems = [
  { id: "sec-overview", title: "Overview & Risk Governance" },
  { id: "sec-principles", title: "Risk Management Principles" },
  { id: "sec-categories", title: "Key Risk Categories" },
  { id: "sec-monitoring", title: "Surveillance & Early Warning Systems" },
  { id: "sec-controls", title: "Mitigation Controls & BCP" },
  { id: "sec-roles", title: "Governance Roles & Responsibilities" },
];

export default function RiskManagementPolicyPage() {
  return (
    <LegalPageLayout
      title="Risk Management Policy"
      subtitle="Enterprise risk governance framework covering credit risk, operational resilience, liquidity, and cybersecurity."
      documentNumber="LMC-POL-2024-V2"
      lastUpdated="September 2024"
      toc={tocItems}
    >
      {/* 1.0 */}
      <section id="sec-overview" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            1.0 Overview &amp; Risk Governance
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          At <strong>Lendigo Microcare</strong> (operating under the corporate umbrella of <strong>Aarsh Fincon Limited</strong>, an RBI-registered Non-Banking Financial Company, Registration No. <strong>B-10.00119</strong>), we maintain an institutional Enterprise Risk Management (ERM) framework designed to identify, assess, monitor, and mitigate operational, financial, and digital lending risks.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          The framework supports prudent portfolio growth, safeguards stakeholder capital, and reinforces compliance with Reserve Bank of India (RBI) prudential norms.
        </p>
      </section>

      {/* 2.0 */}
      <section id="sec-principles" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            2.0 Core Risk Principles
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-muted-foreground">
          {[
            "Risk management is embedded in all day-to-day operational workflows.",
            "Continuous identification and quantification of emerging credit and tech risks.",
            "Risk-reward optimization integrated into all underwriting decisions.",
            "Proactive monitoring systems to preempt potential financial and system losses.",
            "Dynamic response to market liquidity fluctuations and regulatory updates.",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 p-2 rounded bg-muted/30">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span className="text-foreground/90">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3.0 */}
      <section id="sec-categories" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            3.0 Key Risk Categories &amp; Coverage
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-muted-foreground">
          {[
            { title: "Credit & Concentration Risk", desc: "Borrower default probabilities, portfolio delinquency, and exposure limits." },
            { title: "Operational & Tech Risk", desc: "Digital platform latency, internal control breakdowns, and vendor dependencies." },
            { title: "Liquidity & Financial Risk", desc: "Asset-liability mismatches, cost of funds, and cash flow adequacy." },
            { title: "Cybersecurity & InfoSec Risk", desc: "Data breaches, malware threats, server vulnerabilities, and unauthorized access." },
            { title: "Regulatory & Compliance Risk", desc: "Non-adherence to statutory laws, RBI circulars, and digital lending mandates." },
            { title: "Strategic & Market Risk", desc: "Economic shifts, interest rate cycles, and competitive dynamics." },
          ].map((cat, idx) => (
            <div key={idx} className="p-3 rounded-lg border border-border/80 bg-background space-y-1">
              <div className="font-semibold text-foreground text-xs flex items-center gap-1.5">
                <span className="text-primary font-bold">3.{idx + 1}</span>
                <span>{cat.title}</span>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4.0 & 5.0 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section id="sec-monitoring" className="space-y-3">
          <div className="border-b border-border/80 pb-2">
            <h2 className="text-lg font-bold text-foreground tracking-tight">
              4.0 Surveillance &amp; Early Warning
            </h2>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            Real-time portfolio surveillance dashboards, automated bounce alerts, MIS analytics, and concurrent audits enable early identification and remediation of emerging risk concentrations.
          </p>
        </section>

        <section id="sec-controls" className="space-y-3">
          <div className="border-b border-border/80 pb-2">
            <h2 className="text-lg font-bold text-foreground tracking-tight">
              5.0 Mitigation Controls &amp; BCP
            </h2>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            Mitigation controls include algorithmic underwriting, multi-bureau verification, multi-layer cloud encryption, and comprehensive Business Continuity Planning (BCP) with Disaster Recovery (DR).
          </p>
        </section>
      </div>

      {/* 6.0 */}
      <section id="sec-roles" className="space-y-4 pt-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            6.0 Governance Roles &amp; Responsibilities
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded bg-muted/40 space-y-1">
            <div className="font-bold text-foreground">Board of Directors</div>
            <p className="text-muted-foreground">Sets risk appetite limits, approves ERM policies, and reviews quarterly risk reports.</p>
          </div>
          <div className="p-3 rounded bg-muted/40 space-y-1">
            <div className="font-bold text-foreground">Senior Management</div>
            <p className="text-muted-foreground">Implements risk controls, evaluates early warning signals, and enforces SOP compliance.</p>
          </div>
          <div className="p-3 rounded bg-muted/40 space-y-1">
            <div className="font-bold text-foreground">Operating Teams</div>
            <p className="text-muted-foreground">Maintain everyday operational vigilance and immediately escalate anomalous activities.</p>
          </div>
        </div>
      </section>
    </LegalPageLayout>
  );
}
