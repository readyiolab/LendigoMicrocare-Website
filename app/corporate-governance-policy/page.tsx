import React from "react";
import { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Governance Policy",
  description:
    "Corporate Governance Policy of Lendigo Microcare under Aarsh Fincon Limited (RBI Reg. B-10.00119), outlining board committees, ERM, and internal audit.",
  alternates: {
    canonical: "https://lendigomicrocare.com/corporate-governance-policy",
  },
};

const tocItems = [
  { id: "sec-overview", title: "Overview & Corporate Philosophy" },
  { id: "sec-principles", title: "Core Governance Principles" },
  { id: "sec-board", title: "Board Oversight & Governance" },
  { id: "sec-committees", title: "Board Committees & Functions" },
  { id: "sec-erm", title: "Enterprise Risk Management (ERM)" },
  { id: "sec-internal-controls", title: "Internal Controls & Audit" },
  { id: "sec-vigil", title: "Vigil Mechanism & Whistleblower Policy" },
  { id: "sec-compliance", title: "Transparency & Regulatory Reporting" },
];

export default function CorporateGovernancePolicyPage() {
  return (
    <LegalPageLayout
      title="Corporate Governance Policy"
      subtitle="Corporate governance framework ensuring ethical operations, board oversight, and regulatory integrity."
      documentNumber="LMC-POL-2024-V2"
      lastUpdated="September 2024"
      toc={tocItems}
    >
      {/* 1.0 */}
      <section id="sec-overview" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            1.0 Overview &amp; Corporate Philosophy
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          At <strong>Lendigo Microcare</strong> (operating under the corporate umbrella of <strong>Aarsh Fincon Limited</strong>, an RBI-registered Non-Banking Financial Company, Registration No. <strong>B-10.00119</strong>), we adhere to the highest standards of corporate governance, business ethics, and institutional accountability.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Our governance structure is aligned with the Companies Act, 2013, Reserve Bank of India (RBI) NBFC Master Directions, and corporate best practices.
        </p>
      </section>

      {/* 2.0 */}
      <section id="sec-principles" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            2.0 Core Governance Principles
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-muted-foreground">
          {[
            { title: "Integrity & Ethics", desc: "Uncompromising honesty and ethical compliance across all operations." },
            { title: "Accountability", desc: "Transparent allocation of responsibility and institutional reporting." },
            { title: "Stakeholder Fairness", desc: "Equitable treatment of customers, employees, lenders, and regulators." },
            { title: "Prudent Risk Governance", desc: "Robust risk assessment and management of credit/operational exposure." },
          ].map((item, idx) => (
            <div key={idx} className="p-3 rounded-lg border border-border/80 bg-background space-y-1">
              <div className="font-semibold text-foreground text-xs flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>{item.title}</span>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3.0 & 4.0 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section id="sec-board" className="space-y-3">
          <div className="border-b border-border/80 pb-2">
            <h2 className="text-lg font-bold text-foreground tracking-tight">
              3.0 Board Oversight
            </h2>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            The Board of Directors provides strategic leadership, ensures regulatory compliance, approves statutory policies, and reviews quarterly risk and financial health reports.
          </p>
        </section>

        <section id="sec-committees" className="space-y-3">
          <div className="border-b border-border/80 pb-2">
            <h2 className="text-lg font-bold text-foreground tracking-tight">
              4.0 Board Committees
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-1.5 text-xs text-foreground/90">
            {[
              "Audit Committee",
              "Risk Management Committee",
              "Nomination & Remuneration",
              "Asset Liability (ALCO)",
              "IT Strategy Committee",
              "Customer Service Committee",
            ].map((comm, idx) => (
              <div key={idx} className="p-2 rounded bg-muted/40 font-medium">
                • {comm}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 5.0 */}
      <section id="sec-erm" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            5.0 Enterprise Risk Management (ERM)
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          The company maintains an integrated ERM framework to identify, assess, monitor, and mitigate Credit Risk, Operational Risk, Market Risk, Liquidity Risk, Information Security Risk, and Compliance Risk.
        </p>
      </section>

      {/* 6.0 & 7.0 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section id="sec-internal-controls" className="space-y-3">
          <div className="border-b border-border/80 pb-2">
            <h2 className="text-lg font-bold text-foreground tracking-tight">
              6.0 Internal Controls &amp; Audit
            </h2>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            Independent internal and statutory audits are conducted periodically. Findings and corrective action reports are submitted directly to the Audit Committee.
          </p>
        </section>

        <section id="sec-vigil" className="space-y-3">
          <div className="border-b border-border/80 pb-2">
            <h2 className="text-lg font-bold text-foreground tracking-tight">
              7.0 Vigil / Whistleblower Mechanism
            </h2>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            A confidential reporting channel exists for employees and stakeholders to report suspected fraud, misconduct, or regulatory non-compliance without fear of retaliation.
          </p>
        </section>
      </div>

      {/* 8.0 */}
      <section id="sec-compliance" className="space-y-4 pt-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            8.0 Transparency &amp; Regulatory Reporting
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          We ensure accurate and timely disclosures across all statutory filings with the Ministry of Corporate Affairs (MCA) and the Reserve Bank of India (RBI).
        </p>
      </section>
    </LegalPageLayout>
  );
}
