import React from "react";
import { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions governing the use of the Lendigo Microcare digital lending platform under Aarsh Fincon Limited (RBI Reg. B-10.00119).",
  alternates: {
    canonical: "https://lendigomicrocare.com/terms-and-conditions",
  },
};

const tocItems = [
  { id: "sec-acceptance", title: "Acceptance of Terms" },
  { id: "sec-nature", title: "Nature of Services & Facilitation" },
  { id: "sec-account", title: "User Account & Security" },
  { id: "sec-process", title: "Loan Application Process" },
  { id: "sec-obligations", title: "User Obligations & Restrictions" },
  { id: "sec-ip", title: "Intellectual Property Rights" },
  { id: "sec-termination", title: "Suspension & Termination" },
  { id: "sec-liability", title: "Limitation of Liability" },
  { id: "sec-indemnity", title: "Indemnification" },
  { id: "sec-law", title: "Governing Law & Jurisdiction" },
  { id: "sec-contact", title: "Contact & Legal Notices" },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      title="Terms and Conditions"
      subtitle="Comprehensive terms governing access to the Lendigo Microcare platform and services."
      documentNumber="LMC-POL-2024-V2"
      lastUpdated="September 2024"
      toc={tocItems}
    >
      {/* 1.0 */}
      <section id="sec-acceptance" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            1.0 Acceptance of Terms
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User&quot;, &quot;Borrower&quot;) and <strong>Lendigo Microcare</strong>, operated under the corporate umbrella of <strong>Aarsh Fincon Limited</strong> (an RBI-registered Non-Banking Financial Company, Registration No. <strong>B-10.00119</strong>).
        </p>
        <div className="p-4 rounded-lg bg-muted/40 border-l-4 border-primary text-xs text-foreground/90 space-y-1.5">
          <p className="font-semibold text-foreground">By accessing, registering on, or utilizing our services, you confirm that:</p>
          <ul className="space-y-1 text-muted-foreground">
            <li>• You are an Indian citizen of at least 18 years of age and legally competent to enter into a binding contract.</li>
            <li>• You have provided true, accurate, current, and complete personal and financial information.</li>
            <li>• You agree to comply with all applicable local, national, and RBI regulatory guidelines.</li>
          </ul>
        </div>
      </section>

      {/* 2.0 */}
      <section id="sec-nature" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            2.0 Nature of Services &amp; Platform Facilitation
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Lendigo Microcare operates as a digital financial technology platform that facilitates borrower onboarding, document collection, credit assessment, and loan servicing in collaboration with authorized and regulated lending partners.
        </p>
        <div className="p-4 rounded-lg border border-border/80 bg-background text-xs md:text-sm text-foreground/90 space-y-2">
          <div className="font-bold flex items-center gap-2 text-amber-600 dark:text-amber-400">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>Underwriting Disclaimers:</span>
          </div>
          <p className="text-muted-foreground text-xs leading-relaxed">
            Lendigo Microcare does not guarantee automatic loan approval, specific loan amounts, or fixed processing timelines. Final underwriting, risk rating, interest pricing, and credit decisions rest solely with the respective Regulated Entity.
          </p>
        </div>
      </section>

      {/* 3.0 & 4.0 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section id="sec-account" className="space-y-3">
          <div className="border-b border-border/80 pb-2">
            <h2 className="text-lg font-bold text-foreground tracking-tight">
              3.0 Registration &amp; Account Security
            </h2>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            Users must maintain the strict confidentiality of their account credentials, passwords, and OTPs. Any actions taken through an authenticated user account are deemed to be authorized by the registered user.
          </p>
        </section>

        <section id="sec-process" className="space-y-3">
          <div className="border-b border-border/80 pb-2">
            <h2 className="text-lg font-bold text-foreground tracking-tight">
              4.0 Loan Application Process
            </h2>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            Applicants must submit valid Officially Valid Documents (PAN, Aadhaar/address proof, bank statements, and income slips). Submitting an application does not constitute a commitment to disburse funds.
          </p>
        </section>
      </div>

      {/* 5.0 */}
      <section id="sec-obligations" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            5.0 User Obligations &amp; Prohibited Conduct
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Users agree to utilize the platform solely for lawful purposes. Prohibited activities include:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-muted-foreground">
          {[
            "Providing false, forged, or misleading documentation.",
            "Impersonating another person or entity.",
            "Engaging in money laundering or fraudulent schemes.",
            "Attempting unauthorized server access or reverse engineering.",
            "Distributing viruses, malware, or harmful automated bots.",
            "Violating RBI guidelines or statutory Indian laws.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 p-2 rounded bg-muted/30">
              <span className="text-rose-500 font-bold">•</span>
              <span className="text-foreground/90">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 6.0 & 7.0 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section id="sec-ip" className="space-y-3">
          <div className="border-b border-border/80 pb-2">
            <h2 className="text-lg font-bold text-foreground tracking-tight">
              6.0 Intellectual Property Rights
            </h2>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            All trademarks, logos, UI designs, and software belong exclusively to Lendigo Microcare and Aarsh Fincon Limited. Unauthorized use, copying, or reverse compilation is strictly prohibited.
          </p>
        </section>

        <section id="sec-termination" className="space-y-3">
          <div className="border-b border-border/80 pb-2">
            <h2 className="text-lg font-bold text-foreground tracking-tight">
              7.0 Suspension &amp; Termination
            </h2>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            We reserve the right to suspend or terminate account access immediately if terms are violated, fraud is suspected, or statutory directives necessitate restriction.
          </p>
        </section>
      </div>

      {/* 8.0 & 9.0 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section id="sec-liability" className="space-y-3">
          <div className="border-b border-border/80 pb-2">
            <h2 className="text-lg font-bold text-foreground tracking-tight">
              8.0 Limitation of Liability
            </h2>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            To the maximum extent permitted by law, Lendigo Microcare shall not be liable for indirect, incidental, or consequential damages resulting from technical downtime, network failure, or rejected credit applications.
          </p>
        </section>

        <section id="sec-indemnity" className="space-y-3">
          <div className="border-b border-border/80 pb-2">
            <h2 className="text-lg font-bold text-foreground tracking-tight">
              9.0 Indemnification
            </h2>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            Users agree to indemnify and hold harmless Lendigo Microcare, Aarsh Fincon Limited, and its officers against any losses, liabilities, or legal expenses arising from misuse of services or breach of these Terms.
          </p>
        </section>
      </div>

      {/* 10.0 & 11.0 */}
      <section id="sec-law" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            10.0 Governing Law &amp; Jurisdiction
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          These Terms are governed by and construed in accordance with the substantive laws of India. Any legal dispute or proceeding arising out of or related to these Terms shall be subject to the exclusive jurisdiction of the competent courts in <strong>New Delhi, India</strong>.
        </p>
      </section>

      <section id="sec-contact" className="space-y-4 pt-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            11.0 Legal Notices &amp; Communication
          </h2>
        </div>
        <div className="p-4 rounded-lg bg-muted/40 border border-border/80 text-xs md:text-sm space-y-2">
          <div className="font-semibold text-foreground">Aarsh Fincon Limited (Lendigo Microcare)</div>
          <p className="text-muted-foreground">Registration No.: B-10.00119 (RBI Registered NBFC)</p>
          <p className="text-muted-foreground">
            Official Inquiries:{" "}
            <a href="mailto:support.lendigo@aarshfincon.com" className="text-primary font-medium hover:underline">
              support.lendigo@aarshfincon.com
            </a>
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
