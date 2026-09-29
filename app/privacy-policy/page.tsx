import React from "react";
import { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Official Privacy Policy of Lendigo Microcare under Aarsh Fincon Limited (RBI Reg. B-10.00119), detailing data collection, processing, and protection norms.",
  alternates: {
    canonical: "https://lendigomicrocare.com/privacy-policy",
  },
};

const tocItems = [
  { id: "sec-introduction", title: "Introduction & Commitment" },
  { id: "sec-info-collected", title: "Information We Collect" },
  { id: "sec-location", title: "Location Information" },
  { id: "sec-permissions", title: "Camera, Microphone & Storage Permissions" },
  { id: "sec-purpose", title: "Purpose of Information Collection" },
  { id: "sec-sharing", title: "Information Sharing & Disclosures" },
  { id: "sec-security", title: "Data Security Safeguards" },
  { id: "sec-retention", title: "Data Retention Policy" },
  { id: "sec-rights", title: "User Rights & Consent Withdrawal" },
  { id: "sec-third-party", title: "Third-Party Services" },
  { id: "sec-updates", title: "Policy Updates & Governance" },
  { id: "sec-contact", title: "Grievance & Contact Information" },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="Privacy Policy governing digital lending services on the Lendigo Microcare platform."
      documentNumber="LMC-POL-2024-V2"
      lastUpdated="September 2024"
      toc={tocItems}
    >
      {/* Clause 1.0 */}
      <section id="sec-introduction" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            1.0 Introduction &amp; Corporate Commitment
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          At <strong>Lendigo Microcare</strong> (operating under the corporate umbrella of <strong>Aarsh Fincon Limited</strong>, an RBI-registered Non-Banking Financial Company with Registration No. <strong>B-10.00119</strong>), we are dedicated to protecting the privacy, confidentiality, and data integrity of all users who access or use our digital platform, mobile applications, and financial services.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          This Privacy Policy explains the categories of personal, financial, and device information we collect, how it is processed, stored, shared with regulated partners, and safeguarded against unauthorized access.
        </p>
        <div className="p-4 rounded-lg bg-muted/40 border-l-4 border-primary text-xs leading-relaxed text-foreground/90">
          <strong>Mandatory Acceptance:</strong> By accessing, downloading, registering with, or utilizing any services provided by Lendigo Microcare, you acknowledge that you have read, understood, and agreed to be bound by the terms of this Privacy Policy. If you do not agree with any part of this Policy, you must discontinue use of our services immediately.
        </div>
      </section>

      {/* Clause 2.0 */}
      <section id="sec-info-collected" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            2.0 Categories of Information We Collect
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          To provide credit appraisal, loan underwriting, and digital disbursement services efficiently and in compliance with RBI guidelines, Lendigo Microcare may collect and process the following information:
        </p>

        <div className="space-y-4 text-sm">
          <div className="p-4 rounded-lg border border-border/80 bg-background space-y-2">
            <h3 className="font-semibold text-foreground text-sm flex items-center gap-2">
              <span className="text-primary font-mono font-bold">2.1</span> Personal Identification Data
            </h3>
            <p className="text-xs text-muted-foreground">
              Includes full name, date of birth, gender, residential address, mobile number, email address, Permanent Account Number (PAN), Aadhaar details (obtained strictly in accordance with legally permitted UIDAI/offline XML guidelines), and selfie/photograph for biometric liveness matching.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-border/80 bg-background space-y-2">
            <h3 className="font-semibold text-foreground text-sm flex items-center gap-2">
              <span className="text-primary font-mono font-bold">2.2</span> Financial &amp; Employment Data
            </h3>
            <p className="text-xs text-muted-foreground">
              Includes bank account number, IFSC code, monthly salary/income statements, employment details, employer name, existing loan obligations, and credit bureau scores retrieved from authorized credit information companies (CIBIL, Experian, CRIF, Equifax).
            </p>
          </div>

          <div className="p-4 rounded-lg border border-border/80 bg-background space-y-2">
            <h3 className="font-semibold text-foreground text-sm flex items-center gap-2">
              <span className="text-primary font-mono font-bold">2.3</span> Technical &amp; Device Information
            </h3>
            <p className="text-xs text-muted-foreground">
              Includes device hardware model, operating system version, IP address, unique device identifiers, browser type, telecommunication network carrier details, and session timestamps to verify authorized access and mitigate cyber-fraud.
            </p>
          </div>
        </div>
      </section>

      {/* Clause 3.0 */}
      <section id="sec-location" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            3.0 Location Information
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          We may collect real-time or approximate geolocation information strictly during the loan application and onboarding workflow to verify residential serviceability, prevent fraudulent remote logins, comply with RBI digital lending territorial regulations, and confirm identity authenticity.
        </p>
      </section>

      {/* Clause 4.0 */}
      <section id="sec-permissions" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            4.0 Mobile Device Permissions (Camera, Microphone &amp; Storage)
          </h2>
        </div>
        <div className="space-y-3 text-xs md:text-sm text-muted-foreground">
          <p>
            <strong>Camera &amp; Microphone Access:</strong> Camera permissions are required to capture live KYC selfies, upload identity proofs, and perform optical document verification. Microphone access may be utilized solely where video customer identification (V-CIP) is mandated by lending partners.
          </p>
          <p>
            <strong>Storage / File Access:</strong> Storage access is required on a one-time basis to enable users to upload bank statements, salary slips, and utility bills. We do not access, scan, or copy personal photo galleries or private media.
          </p>
        </div>
      </section>

      {/* Clause 5.0 */}
      <section id="sec-purpose" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            5.0 Purpose of Information Collection
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          The data collected by Lendigo Microcare is utilized exclusively for legitimate financial and regulatory operations:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-foreground/90">
          {[
            "Customer identity verification and digital KYC onboarding",
            "Loan application evaluation and creditworthiness assessment",
            "Underwriting and debt-to-income risk calculations",
            "Fraud prevention, anti-impersonation, and risk mitigation",
            "Statutory compliance with RBI and financial regulations",
            "Customer support, grievance handling, and loan servicing",
            "Communication regarding loan status, repayment, and KFS",
            "Security monitoring, system auditing, and account integrity",
          ].map((purpose, idx) => (
            <li key={idx} className="flex items-start gap-2 p-2 rounded bg-muted/30">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span>{purpose}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Clause 6.0 */}
      <section id="sec-sharing" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            6.0 Information Sharing &amp; Disclosures
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Lendigo Microcare shares user information strictly on a need-to-know basis with verified partners to fulfill lending operations:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 text-xs md:text-sm text-muted-foreground">
          <li><strong>Regulated Lending Partners:</strong> Partner banks and NBFCs for credit sanction and loan disbursement.</li>
          <li><strong>Credit Bureaus:</strong> Authorized credit information companies (CIBIL, Experian, CRIF, Equifax).</li>
          <li><strong>KYC Verification Agencies:</strong> Government-authorized verification utilities (NSDL, UIDAI, Digilocker).</li>
          <li><strong>Payment &amp; Banking Service Providers:</strong> Regulated payment gateways for secure disbursement and NACH mandate processing.</li>
          <li><strong>Statutory Authorities:</strong> Law enforcement or judicial bodies where explicitly mandated by legal decree.</li>
        </ul>
        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-200 text-xs font-semibold flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>Non-Sale Assurance: We never sell, rent, or trade your personal or financial data to third-party advertisers.</span>
        </div>
      </section>

      {/* Clause 7.0 & 8.0 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section id="sec-security" className="space-y-3">
          <div className="border-b border-border/80 pb-2">
            <h2 className="text-lg font-bold text-foreground tracking-tight">
              7.0 Data Security Safeguards
            </h2>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            We enforce bank-grade administrative, technical, and physical safeguards. All data transmission is secured using 256-bit SSL encryption, with strict server firewalling and encrypted database storage.
          </p>
        </section>

        <section id="sec-retention" className="space-y-3">
          <div className="border-b border-border/80 pb-2">
            <h2 className="text-lg font-bold text-foreground tracking-tight">
              8.0 Data Retention Policy
            </h2>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            Personal and financial records are retained only for as long as necessary to fulfill lending, legal, audit, and statutory requirements (including the minimum 5-year retention mandate under PMLA and RBI regulations).
          </p>
        </section>
      </div>

      {/* Clause 9.0 */}
      <section id="sec-rights" className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            9.0 User Rights &amp; Consent Withdrawal
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Users possess the legal right to review their personal information, request rectification of inaccurate data, withdraw app permissions via device settings, or request account closure (subject to the full settlement of all outstanding loan dues and statutory compliance).
        </p>
      </section>

      {/* Clause 10.0 & 11.0 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section id="sec-third-party" className="space-y-3">
          <div className="border-b border-border/80 pb-2">
            <h2 className="text-lg font-bold text-foreground tracking-tight">
              10.0 Third-Party Services
            </h2>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            Our platform may contain links to authorized external banking or payment partners. Users are encouraged to review the respective privacy notices of third-party service providers.
          </p>
        </section>

        <section id="sec-updates" className="space-y-3">
          <div className="border-b border-border/80 pb-2">
            <h2 className="text-lg font-bold text-foreground tracking-tight">
              11.0 Policy Updates
            </h2>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            Lendigo Microcare reserves the right to amend this Privacy Policy periodically. Updated versions become immediately effective upon publication on this platform.
          </p>
        </section>
      </div>

      {/* Clause 12.0 */}
      <section id="sec-contact" className="space-y-4 pt-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            12.0 Grievance Redressal &amp; Contact Desk
          </h2>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          For privacy-related inquiries, data access requests, or formal grievances, please reach out to our designated Nodal Compliance Officer:
        </p>
        <div className="p-4 rounded-lg bg-muted/40 border border-border/80 text-xs md:text-sm space-y-2">
          <div className="font-semibold text-foreground">Aarsh Fincon Limited (Lendigo Microcare)</div>
          <p className="text-muted-foreground">Registration No.: B-10.00119 (RBI Registered NBFC)</p>
          <p className="text-muted-foreground">
            Official Email:{" "}
            <a href="mailto:support.lendigo@aarshfincon.com" className="text-primary font-medium hover:underline">
              support.lendigo@aarshfincon.com
            </a>
          </p>
          <p className="text-muted-foreground">Helpline: +91-7827486530</p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
