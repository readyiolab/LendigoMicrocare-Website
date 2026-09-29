import React from "react";
import { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Disclaimer",
  description:
    "Official Legal Disclaimer of Lendigo Microcare under Aarsh Fincon Limited (RBI Reg. B-10.00119), outlining platform facilitations and underwriting disclaimers.",
  alternates: {
    canonical: "https://lendigomicrocare.com/disclaimer",
  },
};

const tocItems = [
  { id: "sec-platform", title: "Technology Platform Notice" },
  { id: "sec-underwriting", title: "Lending Partner Authority" },
  { id: "sec-no-advice", title: "No Financial or Professional Advice" },
  { id: "sec-limitation", title: "Limitation of Responsibility" },
  { id: "sec-acknowledgement", title: "User Acknowledgement & Acceptance" },
];

export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      title="Legal Disclaimer"
      subtitle="Important statutory disclosures regarding technology platform operations, credit decisions, and limitation of liability."
      documentNumber="LMC-POL-2024-V2"
      lastUpdated="September 2024"
      toc={tocItems}
    >
      {/* 1.0 */}
      <section id="sec-platform" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            1.0 Technology Platform Notice
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          <strong>Lendigo Microcare</strong> is a digital financial technology platform operating under the corporate umbrella of <strong>Aarsh Fincon Limited</strong> (an RBI-registered Non-Banking Financial Company, Registration No. <strong>B-10.00119</strong>).
        </p>
        <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs md:text-sm text-amber-900 dark:text-amber-200 leading-relaxed font-medium">
          Lendigo Microcare operates as a digital technology facilitator. The platform facilitates loan origination, document submission, and servicing in association with authorized lending partners, banks, and Non-Banking Financial Companies (NBFCs).
        </div>
      </section>

      {/* 2.0 */}
      <section id="sec-underwriting" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            2.0 Lending Partner Authority &amp; Credit Decisions
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          All credit approvals, sanctioned credit limits, interest rates, processing fees, repayment tenures, and final disbursement decisions are determined <strong>exclusively by the respective Regulated Lending Partner</strong> based on their credit appraisal models, risk policies, and RBI digital lending norms.
        </p>
        <p className="text-muted-foreground text-xs leading-relaxed italic">
          * Lendigo Microcare does not hold independent authority to approve or reject credit applications, nor does it guarantee specific sanction amounts.
        </p>
      </section>

      {/* 3.0 */}
      <section id="sec-no-advice" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            3.0 No Financial, Legal, or Investment Advice
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          The information, calculators, guides, and materials available on the Lendigo Microcare website and mobile application are provided for <strong>general informational purposes only</strong>. Nothing on this platform should be construed as financial, legal, tax, or investment advice.
        </p>
      </section>

      {/* 4.0 */}
      <section id="sec-limitation" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            4.0 Limitation of Responsibility
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          While we strive to ensure continuous and accurate service, Lendigo Microcare shall not be liable for:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-muted-foreground">
          {[
            "Credit rejection decisions by partner lenders.",
            "Processing or bank-clearing disbursement delays.",
            "Technical downtime, server latency, or network drops.",
            "Inaccurate details submitted by loan applicants.",
            "Statutory or regulatory policy restrictions.",
            "Third-party verification API downtimes.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 p-2 rounded bg-muted/30">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
              <span className="text-foreground/90">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 5.0 */}
      <section id="sec-acknowledgement" className="space-y-4 pt-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            5.0 User Acknowledgement &amp; Acceptance
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Users acknowledge that all borrowing activities involve financial commitments and risks. By accessing, browsing, or using Lendigo Microcare, you confirm that you have read, understood, and agreed to this Legal Disclaimer, our Privacy Policy, and our Terms and Conditions.
        </p>
      </section>
    </LegalPageLayout>
  );
}
