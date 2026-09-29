import React from "react";
import { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { Clock, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy (Cooling-Off Period)",
  description:
    "Official Refund and Cancellation Policy of Lendigo Microcare under Aarsh Fincon Limited (RBI Reg. B-10.00119), featuring a 72-hour cooling-off period.",
  alternates: {
    canonical: "https://lendigomicrocare.com/refund-policy",
  },
};

const tocItems = [
  { id: "sec-overview", title: "Overview & Regulatory Framework" },
  { id: "sec-cooling-off", title: "3-Day / 72-Hour Cooling-Off Period" },
  { id: "sec-excess-refund", title: "Refund of Excess Payments" },
  { id: "sec-non-refundable", title: "Non-Refundable Charges" },
  { id: "sec-how-to-request", title: "How to Raise a Request" },
  { id: "sec-amendments", title: "Policy Amendments & Jurisdiction" },
];

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout
      title="Refund & Cancellation Policy"
      subtitle="Terms governing statutory loan cancellation during the cooling-off period and excess payment refunds."
      documentNumber="LMC-POL-2024-V2"
      lastUpdated="September 2024"
      toc={tocItems}
    >
      {/* 1.0 */}
      <section id="sec-overview" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            1.0 Overview &amp; Regulatory Framework
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          At <strong>Lendigo Microcare</strong>, operated under the umbrella of <strong>Aarsh Fincon Limited</strong> (an RBI-registered Non-Banking Financial Company, Registration No. <strong>B-10.00119</strong>), we are committed to maintaining fair, transparent, and consumer-centric lending practices.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          This Refund &amp; Cancellation Policy defines the statutory cooling-off look-up period for loan cancellations and details the accounting reconciliation process for excess payment refunds in compliance with Reserve Bank of India (RBI) digital lending guidelines.
        </p>
      </section>

      {/* 2.0 */}
      <section id="sec-cooling-off" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight flex items-center gap-2">
            <span>2.0 Cooling-Off Period (Loan Cancellation Rights)</span>
          </h2>
        </div>
        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 text-xs md:text-sm space-y-2 text-foreground/90">
          <div className="font-bold flex items-center gap-2 text-primary">
            <Clock className="w-4 h-4" />
            <span>Statutory 3-Day / 72-Hour Look-up Window:</span>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Every borrower is legally entitled to a <strong>Cooling-Off Period of 3 (Three) calendar days / 72 hours</strong> commencing from the exact timestamp of loan disbursement into their registered bank account.
          </p>
        </div>

        <div className="space-y-2 text-xs md:text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">During the 72-hour cooling-off period:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span>The borrower may voluntarily cancel the loan without incurring any foreclosure penalties or cancellation fees.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span>The borrower must repay the full principal amount disbursed into their bank account.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span>Interest shall be payable strictly for the proportionate actual days the loan remained outstanding.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span>Any statutory levies, GST, or third-party verification charges already deposited with government bodies may be recovered.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 3.0 */}
      <section id="sec-excess-refund" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            3.0 Refund of Excess Payments &amp; Settlement Adjustments
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Refunds are processed in all circumstances where an excess credit has been received from the borrower, including:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 text-xs md:text-sm text-muted-foreground">
          <li>Duplicate payment debits occurring during online payment transactions.</li>
          <li>Overpaid EMI amounts exceeding the contractual amortization balance.</li>
          <li>Payment gateway transaction timeouts or banking clearing discrepancies.</li>
          <li>Excess amounts recovered following formal loan closure or one-time settlement (OTS).</li>
        </ul>
        <div className="p-4 rounded-lg bg-muted/40 border border-border/80 text-xs md:text-sm space-y-1.5">
          <div className="font-semibold text-foreground">Refund Processing Timeline:</div>
          <p className="text-muted-foreground">
            Upon internal reconciliation and ledger validation, refunds will be credited electronically to the borrower&apos;s registered source bank account within <strong>5 to 10 business days</strong>. Cash refunds are strictly prohibited.
          </p>
        </div>
      </section>

      {/* 4.0 */}
      <section id="sec-non-refundable" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            4.0 Non-Refundable Items
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Refunds shall not be applicable for:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-muted-foreground">
          {[
            "Accrued interest lawfully charged per the loan agreement.",
            "Processing fees on disbursed loans outside the cooling-off window.",
            "Government statutory taxes and stamp duties deposited.",
            "Legitimate bounce or overdue recovery charges incurred.",
            "Cancellation requests submitted after the 72-hour window expires.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 p-2 rounded bg-muted/30">
              <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
              <span className="text-foreground/90">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 5.0 */}
      <section id="sec-how-to-request" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            5.0 Procedure to Request Cancellation or Refund
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          To initiate a cooling-off loan cancellation or excess refund claim, email our support desk at{" "}
          <a href="mailto:support.lendigo@aarshfincon.com" className="text-primary font-medium hover:underline">
            support.lendigo@aarshfincon.com
          </a>{" "}
          with the following details:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-center">
          <div className="p-2.5 rounded bg-muted/40 font-medium">Registered Mobile No.</div>
          <div className="p-2.5 rounded bg-muted/40 font-medium">Loan Account Number</div>
          <div className="p-2.5 rounded bg-muted/40 font-medium">Reason for Request</div>
          <div className="p-2.5 rounded bg-muted/40 font-medium">Proof of Payment / UTR</div>
        </div>
      </section>

      {/* 6.0 */}
      <section id="sec-amendments" className="space-y-4 pt-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            6.0 Amendments &amp; Dispute Redressal
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Aarsh Fincon Limited reserves the right to amend this Policy periodically in accordance with regulatory directives. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in New Delhi, India.
        </p>
      </section>
    </LegalPageLayout>
  );
}
