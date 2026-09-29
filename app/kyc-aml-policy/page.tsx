import React from "react";
import { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "KYC & AML Policy",
  description:
    "Official KYC and AML Policy of Lendigo Microcare under Aarsh Fincon Limited (RBI Reg. B-10.00119), ensuring prevention of financial crimes and money laundering.",
  alternates: {
    canonical: "https://lendigomicrocare.com/kyc-aml-policy",
  },
};

const tocItems = [
  { id: "sec-overview", title: "Overview & Statutory Mandates" },
  { id: "sec-kyc-process", title: "Customer Identification Procedure (KYC)" },
  { id: "sec-acceptance", title: "Customer Acceptance Norms" },
  { id: "sec-risk-approach", title: "Risk-Based Approach (RBA)" },
  { id: "sec-monitoring", title: "Transaction Monitoring & FIU Reporting" },
  { id: "sec-pep", title: "Politically Exposed Persons (PEPs)" },
  { id: "sec-retention", title: "Record Retention & Privacy" },
];

export default function KycAmlPolicyPage() {
  return (
    <LegalPageLayout
      title="KYC & AML Policy"
      subtitle="Know Your Customer and Anti-Money Laundering framework aligned with RBI Master Directions & PMLA 2002."
      documentNumber="LMC-POL-2024-V2"
      lastUpdated="September 2024"
      toc={tocItems}
    >
      {/* 1.0 */}
      <section id="sec-overview" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            1.0 Overview &amp; Statutory Mandates
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          At <strong>Lendigo Microcare</strong> (operating under the corporate umbrella of <strong>Aarsh Fincon Limited</strong>, an RBI-registered Non-Banking Financial Company, Registration No. <strong>B-10.00119</strong>), we enforce a zero-tolerance policy against money laundering, terrorist financing, identity fraud, and financial malpractices.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          This Policy is framed in strict compliance with the Prevention of Money Laundering Act, 2002 (PMLA), the Prevention of Money-Laundering (Maintenance of Records) Rules, 2005, and the RBI Master Direction on Know Your Customer (KYC).
        </p>
      </section>

      {/* 2.0 */}
      <section id="sec-kyc-process" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            2.0 Customer Identification Procedure (KYC)
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Prior to sanctioning or disbursing any credit facility, applicant identity is verified using authorized electronic and official mechanisms:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-muted-foreground">
          {[
            "Real-time PAN verification with official Income Tax databases",
            "Aadhaar-based paperless offline XML / Digilocker verification",
            "Officially Valid Documents (Passport, Voter ID, Driving License)",
            "Penny-drop or Account Aggregator bank account verification",
            "Live selfie capture with facial recognition and liveness detection",
            "Video-based Customer Identification Process (V-CIP) where mandated",
          ].map((method, idx) => (
            <div key={idx} className="flex items-start gap-2 p-2 rounded bg-muted/30">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
              <span className="text-foreground/90">{method}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3.0 & 4.0 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section id="sec-acceptance" className="space-y-3">
          <div className="border-b border-border/80 pb-2">
            <h2 className="text-lg font-bold text-foreground tracking-tight">
              3.0 Customer Acceptance Norms
            </h2>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            Lending relationships are strictly declined if fictitious details are provided, identity cannot be verified, or the applicant appears on negative sanctions/watchlists.
          </p>
        </section>

        <section id="sec-risk-approach" className="space-y-3">
          <div className="border-b border-border/80 pb-2">
            <h2 className="text-lg font-bold text-foreground tracking-tight">
              4.0 Risk-Based Approach (RBA)
            </h2>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            Customers are categorized into Low, Medium, and High-Risk tiers based on geographic profile, occupation, and transaction volume. Enhanced Due Diligence (EDD) is applied to high-risk accounts.
          </p>
        </section>
      </div>

      {/* 5.0 & 6.0 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section id="sec-monitoring" className="space-y-3">
          <div className="border-b border-border/80 pb-2">
            <h2 className="text-lg font-bold text-foreground tracking-tight">
              5.0 Transaction Monitoring
            </h2>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            Ongoing transaction monitoring identifies anomalous velocity, structuring, or suspicious repayments. Where required, Suspicious Transaction Reports (STRs) are filed with FIU-IND.
          </p>
        </section>

        <section id="sec-pep" className="space-y-3">
          <div className="border-b border-border/80 pb-2">
            <h2 className="text-lg font-bold text-foreground tracking-tight">
              6.0 Politically Exposed Persons (PEPs)
            </h2>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            Applications involving PEPs require Enhanced Due Diligence (EDD), source of wealth verification, and senior management sign-off prior to credit approval.
          </p>
        </section>
      </div>

      {/* 7.0 */}
      <section id="sec-retention" className="space-y-4 pt-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            7.0 Statutory Record Retention &amp; Privacy
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          All customer identification records, KYC documents, and transaction logs are securely archived for a minimum period of <strong>5 years</strong> post-account closure in compliance with PMLA statutory mandates.
        </p>
      </section>
    </LegalPageLayout>
  );
}
