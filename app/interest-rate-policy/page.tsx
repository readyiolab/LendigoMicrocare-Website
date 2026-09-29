import React from "react";
import { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Interest Rate Policy",
  description:
    "Official Interest Rate Policy of Lendigo Microcare under Aarsh Fincon Limited (RBI Reg. B-10.00119), defining APR, interest models, and fees.",
  alternates: {
    canonical: "https://lendigomicrocare.com/interest-rate-policy",
  },
};

const tocItems = [
  { id: "sec-overview", title: "Overview & Regulatory Code" },
  { id: "sec-determination", title: "Interest Rate Determination Model" },
  { id: "sec-loan-terms", title: "Loan Amount & Repayment Tenure" },
  { id: "sec-apr", title: "Annual Percentage Rate (APR)" },
  { id: "sec-fees", title: "Schedule of Fees & Charges" },
  { id: "sec-revision", title: "Revision of Rates & Charges" },
  { id: "sec-disclosures", title: "Pre-Disbursement Disclosures & KFS" },
];

export default function InterestRatePolicyPage() {
  return (
    <LegalPageLayout
      title="Interest Rate Policy"
      subtitle="Comprehensive policy outlining interest rate determination, APR computation, fees, and zero hidden charges."
      documentNumber="LMC-POL-2024-V2"
      lastUpdated="September 2024"
      toc={tocItems}
    >
      {/* 1.0 */}
      <section id="sec-overview" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            1.0 Overview &amp; Regulatory Compliance
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          At <strong>Lendigo Microcare</strong> (operating under the corporate umbrella of <strong>Aarsh Fincon Limited</strong>, an RBI-registered Non-Banking Financial Company, Registration No. <strong>B-10.00119</strong>), we are committed to complete transparency, fairness, and responsible interest pricing in accordance with the RBI Fair Practices Code.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          This Interest Rate Policy defines the transparent methodology, risk-based parameters, and statutory disclosures used to determine interest rates, Annual Percentage Rates (APR), and fee structures across all our credit products.
        </p>
      </section>

      {/* 2.0 */}
      <section id="sec-determination" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            2.0 Interest Rate Determination Methodology
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Interest rates are calculated on a graded risk model. Underwriting algorithms evaluate multiple objective criteria, including:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-muted-foreground">
          {[
            "Borrower credit profile, CIBIL/Experian score, and repayment history",
            "Monthly income stability, employer category, and debt obligations",
            "Sanctioned loan amount and requested repayment tenure",
            "Weighted average cost of funds and borrowing expenses",
            "Operational, cloud infrastructure, and administrative overheads",
            "Credit risk loss provisions and portfolio default probabilities",
            "Benchmark market interest rates and regulatory directives",
          ].map((factor, idx) => (
            <div key={idx} className="flex items-start gap-2 p-2 rounded bg-muted/30">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
              <span className="text-foreground/90">{factor}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3.0 & 4.0 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section id="sec-loan-terms" className="space-y-3">
          <div className="border-b border-border/80 pb-2">
            <h2 className="text-lg font-bold text-foreground tracking-tight">
              3.0 Loan Amount &amp; Tenure
            </h2>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            Loans are offered starting from <strong>₹1,000</strong> up to approved credit limits based on underwriting assessment. Repayment tenures are clearly agreed upon and fixed in the loan amortization schedule before disbursement.
          </p>
        </section>

        <section id="sec-apr" className="space-y-3">
          <div className="border-b border-border/80 pb-2">
            <h2 className="text-lg font-bold text-foreground tracking-tight">
              4.0 Annual Percentage Rate (APR)
            </h2>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            The Annual Percentage Rate (APR) represents the comprehensive annualized cost of borrowing, incorporating interest and all applicable processing fees. The exact APR is prominently communicated in the Key Fact Statement (KFS).
          </p>
        </section>
      </div>

      {/* 5.0 */}
      <section id="sec-fees" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            5.0 Schedule of Fees &amp; Other Charges
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          In addition to interest, certain nominal fees may be levied depending on the product:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-muted-foreground">
          {[
            "Processing Fee (covers verification and onboarding administration)",
            "NACH / Mandate Bounce Charges (for failed auto-debit instances)",
            "Mandate Registration Charges (where applicable)",
            "Loan Restructuring / Rescheduling Charges (if requested)",
            "Statutory GST and government levies as applicable",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 p-2 rounded bg-muted/30">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/90">{item}</span>
            </li>
          ))}
        </ul>
        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-200 text-xs font-semibold flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span>Zero Upfront Deductions on Rejections: No processing fees or administrative charges are ever collected from applicants whose applications are declined.</span>
        </div>
      </section>

      {/* 6.0 & 7.0 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section id="sec-revision" className="space-y-3">
          <div className="border-b border-border/80 pb-2">
            <h2 className="text-lg font-bold text-foreground tracking-tight">
              6.0 Revision of Rates &amp; Charges
            </h2>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            Interest rates and fee schedules may be reviewed periodically based on market liquidity and cost of funds. Any rate revisions apply strictly prospectively and do not impact active fixed-rate loan contracts.
          </p>
        </section>

        <section id="sec-disclosures" className="space-y-3">
          <div className="border-b border-border/80 pb-2">
            <h2 className="text-lg font-bold text-foreground tracking-tight">
              7.0 Key Fact Statement (KFS)
            </h2>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            Prior to digital loan agreement execution, borrowers receive a standardized Key Fact Statement (KFS) containing itemized breakdowns of interest rate, APR, fees, and repayment obligations. There are zero hidden charges.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}
