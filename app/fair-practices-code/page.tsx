import React from "react";
import { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Fair Practices Code (FPC)",
  description:
    "Official Fair Practices Code of Lendigo Microcare under Aarsh Fincon Limited (RBI Reg. B-10.00119), ensuring transparent, ethical, and non-discriminatory lending.",
  alternates: {
    canonical: "https://lendigomicrocare.com/fair-practices-code",
  },
};

const tocItems = [
  { id: "sec-overview", title: "Overview & RBI Standards" },
  { id: "sec-commitments", title: "Core Fair Practices Commitments" },
  { id: "sec-application", title: "Loan Application & Underwriting" },
  { id: "sec-disclosures", title: "Transparent Disclosures & KFS" },
  { id: "sec-marketing", title: "Fair Marketing & Non-Discrimination" },
  { id: "sec-recovery", title: "Ethical Recovery & Collection Protocols" },
  { id: "sec-grievance", title: "Grievance Redressal Mechanism" },
];

export default function FairPracticesCodePage() {
  return (
    <LegalPageLayout
      title="Fair Practices Code (FPC)"
      subtitle="Code of fair lending practices adopted in compliance with Reserve Bank of India (RBI) Directives."
      documentNumber="LMC-POL-2024-V2"
      lastUpdated="September 2024"
      toc={tocItems}
    >
      {/* 1.0 */}
      <section id="sec-overview" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            1.0 Overview &amp; Regulatory Standards
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          At <strong>Lendigo Microcare</strong> (operating under the corporate umbrella of <strong>Aarsh Fincon Limited</strong>, an RBI-registered Non-Banking Financial Company, Registration No. <strong>B-10.00119</strong>), we are committed to conducting digital lending in a fair, ethical, transparent, and responsible manner.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          This Fair Practices Code (&quot;FPC&quot;) is established in conformity with the Master Directions on Fair Practices Code issued by the Reserve Bank of India (RBI).
        </p>
      </section>

      {/* 2.0 */}
      <section id="sec-commitments" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            2.0 Core Commitments
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs md:text-sm text-muted-foreground">
          {[
            "Treating every applicant equitably, courteously, and with professional integrity.",
            "Providing transparent, clear, and unambiguous terms and interest rate disclosures.",
            "Enforcing strict data confidentiality and bank-grade privacy standards.",
            "Practicing responsible lending to avoid over-leveraging of borrowers.",
            "Zero tolerance for coercive, aggressive, or harassing recovery practices.",
            "Prompt, impartial, and effective resolution of all customer grievances.",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 p-2.5 rounded bg-muted/30">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span className="text-foreground/90">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3.0 & 4.0 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section id="sec-application" className="space-y-3">
          <div className="border-b border-border/80 pb-2">
            <h2 className="text-lg font-bold text-foreground tracking-tight">
              3.0 Loan Application &amp; Processing
            </h2>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            The loan application workflow is simple, automated, and digital. All eligibility benchmarks and document requirements are communicated upfront, with timely status updates provided during credit evaluation.
          </p>
        </section>

        <section id="sec-disclosures" className="space-y-3">
          <div className="border-b border-border/80 pb-2">
            <h2 className="text-lg font-bold text-foreground tracking-tight">
              4.0 Transparent Disclosures &amp; KFS
            </h2>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            Prior to digital agreement execution, every borrower receives a standardized Key Fact Statement (KFS) containing APR, interest rate, repayment schedules, and cooling-off period terms. There are zero hidden charges.
          </p>
        </section>
      </div>

      {/* 5.0 */}
      <section id="sec-marketing" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            5.0 Fair Marketing &amp; Non-Discrimination
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          All promotional materials are truthful, transparent, and non-misleading. Underwriting decisions are made strictly on objective credit algorithms and income capability, without discrimination on grounds of gender, caste, religion, race, or marital status.
        </p>
      </section>

      {/* 6.0 */}
      <section id="sec-recovery" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            6.0 Ethical Recovery &amp; Collection Standards
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          In cases of loan delinquency, recovery processes are governed strictly by RBI debt collection guidelines:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-muted-foreground">
          {[
            "Authorized representatives carry valid ID and identify themselves clearly.",
            "Strict prohibition of harassment, intimidation, coercion, or abusive conduct.",
            "Borrower and family privacy and dignity are respected at all times.",
            "Contact is restricted to reasonable business hours (08:00 to 19:00).",
          ].map((rule, idx) => (
            <li key={idx} className="flex items-start gap-2 p-2 rounded bg-muted/30">
              <span className="text-primary font-bold">✓</span>
              <span className="text-foreground/90">{rule}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 7.0 */}
      <section id="sec-grievance" className="space-y-4 pt-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            7.0 Grievance Redressal Mechanism
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Borrowers with concerns regarding fair practice compliance may contact our Grievance Redressal Officer:
        </p>
        <div className="p-4 rounded-lg bg-muted/40 border border-border/80 text-xs md:text-sm space-y-1.5">
          <div className="font-semibold text-foreground">Grievance Redressal Desk • Aarsh Fincon Limited</div>
          <p className="text-muted-foreground font-medium">Grievance Officer: Ashok Kumar</p>
          <p className="text-muted-foreground">Email: stpl.collection@aarshfincon.com | Phone: +91-88266 20992</p>
          <p className="text-muted-foreground">General Support: support.lendigo@aarshfincon.com</p>
          <p className="text-muted-foreground text-[11px]">Complaints are acknowledged within 24-48 hours and resolved in accordance with our Grievance Policy.</p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
