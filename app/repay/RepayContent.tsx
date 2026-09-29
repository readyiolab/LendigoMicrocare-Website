"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Building2,
  QrCode,
  Copy,
  Check,
  ShieldCheck,
  AlertTriangle,
  FileText,
  CheckCircle2,
  Wallet,
  Download,
  Info,
  Smartphone,
  Receipt,
  Eye,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BANK_DETAILS = {
  beneficiaryName: "Aarsh Fincon Limited",
  bankName: "Bank of Baroda",
  accountNumber: "16200500005219",
  ifscCode: "BARB0UDARAJ",
  branchName: "Market Yard",
  accountType: "Current Account",
  upiId: "akmef70147219@barodampay",
};

const repaymentSteps = [
  {
    step: "01",
    title: "Select Repayment Mode",
    description:
      "Choose to scan the UPI QR code using any UPI app or initiate a direct NEFT/RTGS/IMPS bank transfer.",
    icon: Wallet,
  },
  {
    step: "02",
    title: "Enter Amount & Loan ID",
    description:
      "Enter your due repayment amount. Crucially, mention your Loan ID or registered mobile number in the payment remarks/notes.",
    icon: FileText,
  },
  {
    step: "03",
    title: "Complete Payment & Save Proof",
    description:
      "Authorize the transaction and save the payment screenshot along with the 12-digit UTR/Reference number.",
    icon: Receipt,
  },
  {
    step: "04",
    title: "Get Instant Confirmation",
    description:
      "Your repayment will be reconciled and updated. You can email your receipt to support.lendigo@aarshfincon.com for instant acknowledgement.",
    icon: CheckCircle2,
  },
];

export const RepayContent = () => {
  const { toast } = useToast();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [pan, setPan] = useState("");

  const handleCopy = (key: string, value: string, label: string) => {
    navigator.clipboard.writeText(value);
    setCopiedKey(key);
    toast({
      title: "Copied to Clipboard",
      description: `${label} (${value}) has been copied successfully.`,
    });
    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  const handleCopyAllBankDetails = () => {
    const formatted = `Official Repayment Bank Details - Aarsh Fincon Limited
---------------------------------------------
Beneficiary Name: ${BANK_DETAILS.beneficiaryName}
Bank Name: ${BANK_DETAILS.bankName}
Account Number: ${BANK_DETAILS.accountNumber}
IFSC Code: ${BANK_DETAILS.ifscCode}
Branch: ${BANK_DETAILS.branchName}
Account Type: ${BANK_DETAILS.accountType}
UPI ID: ${BANK_DETAILS.upiId}
---------------------------------------------
Note: Please mention your Loan ID or Mobile Number in remarks.`;

    navigator.clipboard.writeText(formatted);
    setCopiedKey("all_bank_details");
    toast({
      title: "All Bank Details Copied",
      description: "Complete account and UPI details copied to clipboard.",
    });
    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  const handlePanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pan.length !== 10) {
      toast({
        title: "Invalid PAN",
        description: "Please enter a valid 10-character PAN number.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Loan Records Verified",
      description: "OTP sent to registered mobile number for PAN " + pan,
    });
  };

  return (
    <Layout>
      {/* Hero Section - Giant Rounded Card Reference Design */}
      <section className="relative overflow-hidden pt-4 pb-12 md:py-8 lg:py-10 bg-gradient-to-b from-[#eef8f4] via-background to-background">
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#d8f0e5]/60 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden min-h-[500px] md:min-h-[560px] shadow-2xl border border-border/40 flex items-center bg-[#073832]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/assets/payday_hero.jpg"
                alt="Repay Loan Securely"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-[75%_center] lg:object-center opacity-70"
              />
            </div>

            {/* Organic Curved Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#073832]/98 via-[#0f766e]/90 via-55% to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#073832]/90 via-transparent to-transparent md:hidden" />
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/25 rounded-full blur-3xl pointer-events-none" />

            {/* Left Content Column */}
            <div className="relative z-10 px-6 sm:px-10 md:px-14 lg:px-16 py-12 md:py-16 max-w-2xl lg:max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-medium mb-6">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  <span>Official Repayment Portal • NBFC Regulated Account</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight mb-6">
                  Repay Your Loan.<br />
                  Instant &amp; 100% Secure.
                </h1>

                <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-xl font-normal">
                  Settle your loan balance effortlessly via official UPI QR codes or through direct bank transfer (NEFT / RTGS / IMPS). All payments credit directly to <strong className="text-white font-semibold">Aarsh Fincon Limited</strong>.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      document.getElementById("qr-section")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-white text-[#073832] hover:bg-emerald-50 active:scale-95 transition-all duration-300 px-7 py-3.5 rounded-full font-bold text-sm md:text-base shadow-xl hover:shadow-2xl flex items-center gap-2.5 group cursor-pointer"
                  >
                    <QrCode className="w-4 h-4 text-[#073832]" />
                    <span>Scan &amp; Pay via UPI</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyAllBankDetails}
                    className="bg-white/15 hover:bg-white/25 active:scale-95 text-white backdrop-blur-md border border-white/30 px-6 py-3.5 rounded-full font-medium text-sm md:text-base transition-all duration-300 flex items-center gap-2 cursor-pointer"
                  >
                    <Copy className="w-4 h-4" />
                    <span>Copy Bank Details</span>
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center gap-6 mt-10 text-white/90 text-xs md:text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    <span>Zero Transaction Fee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    <span>Instant Reconciliation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-300" />
                    <span>Bank of Baroda Escrow</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Glassmorphic Stat Card on Bottom Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20 backdrop-blur-xl bg-black/40 border border-white/25 rounded-2xl md:rounded-3xl p-4 md:p-5 text-white shadow-2xl max-w-[230px]"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mb-3">
                <Building2 className="w-5 h-5 text-emerald-300" />
              </div>
              <p className="text-xl md:text-2xl font-extrabold tracking-tight text-white mb-0.5">
                Official Account
              </p>
              <p className="text-xs text-white/80 leading-snug">
                Verified NBFC Account: Aarsh Fincon Limited (BARB0UDARAJ).
              </p>
            </motion.div>
          </div>

          {/* Security Advisory Alert */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 max-w-4xl mx-auto bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 md:p-5 flex items-start gap-3.5 shadow-sm"
          >
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="text-sm text-foreground/90 space-y-1">
              <p className="font-semibold text-amber-800 dark:text-amber-300">
                Security Advisory — Beware of Fraudulent Accounts
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Please transfer repayments <strong className="text-foreground">ONLY</strong> to the official corporate bank account of{" "}
                <span className="font-semibold text-foreground">Aarsh Fincon Limited</span> or verified UPI ID{" "}
                <span className="font-mono font-semibold text-foreground">{BANK_DETAILS.upiId}</span>. Lendigo Microcare and its representatives will never ask you to pay into any personal account.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Payment Details: QR Codes + Direct Bank Account */}
      <section className="section-padding pt-0 pb-16 bg-background">
        <div className="container-narrow mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: 2 Barcode / QR Images */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-border">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl hero-gradient flex items-center justify-center text-primary-foreground">
                    <QrCode className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold tracking-tight">Scan &amp; Pay via UPI</h2>
                    <p className="text-xs text-muted-foreground">Instant settlement with zero surcharge</p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-[11px] font-medium">
                  Instant Credit
                </Badge>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* QR Code 1: Bank of Baroda / Baroda Pay (2.jpeg) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border/80 rounded-2xl p-4 card-elevated flex flex-col items-center text-center relative group hover:border-primary/40 transition-all"
                >
                  <div className="w-full flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                      Bank of Baroda UPI
                    </span>
                    <Badge variant="outline" className="text-[10px] bg-primary/5 text-primary border-primary/20">
                      Verified
                    </Badge>
                  </div>

                  {/* QR Image with preview/zoom trigger */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="relative rounded-xl overflow-hidden border border-border/70 bg-white p-2 w-full max-w-[220px] aspect-[3/4] flex items-center justify-center cursor-zoom-in group/img shadow-sm"
                        title="Click to enlarge Baroda Pay QR"
                      >
                        <img
                          src="/assets/2.jpeg"
                          alt="Bank of Baroda BHIM UPI Barcode - AKME FINCON LTD"
                          className="w-full h-full object-contain rounded-lg transition-transform group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center rounded-xl text-white text-xs font-medium gap-1.5 backdrop-blur-[2px]">
                          <Eye className="w-4 h-4" />
                          <span>Click to Zoom</span>
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md p-6 bg-card text-foreground">
                      <DialogHeader>
                        <DialogTitle className="text-lg font-bold flex items-center gap-2">
                          <QrCode className="w-5 h-5 text-primary" />
                          Bank of Baroda UPI QR Code
                        </DialogTitle>
                      </DialogHeader>
                      <div className="flex flex-col items-center py-4">
                        <div className="bg-white p-3 rounded-2xl border shadow-inner max-w-[320px]">
                          <img
                            src="/assets/2.jpeg"
                            alt="Bank of Baroda BHIM UPI QR Code - Full Size"
                            className="w-full h-auto object-contain rounded-xl"
                          />
                        </div>
                        <div className="mt-4 text-center text-sm space-y-1">
                          <p className="font-semibold">Merchant: AKME FINCON LTD</p>
                          <p className="font-mono text-muted-foreground text-xs">{BANK_DETAILS.upiId}</p>
                        </div>
                        <div className="mt-4 flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleCopy("upi_modal", BANK_DETAILS.upiId, "UPI ID")}
                          >
                            <Copy className="w-3.5 h-3.5 mr-1.5" />
                            Copy UPI ID
                          </Button>
                          <a href="/assets/2.jpeg" download="BarodaPay_QR_Lendigo.jpeg">
                            <Button size="sm" className="hero-gradient border-0 text-white">
                              <Download className="w-3.5 h-3.5 mr-1.5" />
                              Save QR
                            </Button>
                          </a>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <div className="mt-3.5 w-full space-y-2">
                    <div>
                      <p className="text-xs font-bold text-foreground">Baroda Pay / BHIM UPI</p>
                      <p className="text-[11px] text-muted-foreground truncate">
                        Merchant: AKME FINCON LTD
                      </p>
                    </div>

                    <div className="p-2 bg-secondary/50 rounded-xl flex items-center justify-between gap-1 border border-border/50">
                      <span className="font-mono text-[11px] font-medium text-foreground truncate select-all">
                        {BANK_DETAILS.upiId}
                      </span>
                      <button
                        onClick={() => handleCopy("upi_card", BANK_DETAILS.upiId, "UPI ID")}
                        className="p-1 rounded-md hover:bg-background text-muted-foreground hover:text-primary transition-colors shrink-0"
                        title="Copy UPI ID"
                      >
                        {copiedKey === "upi_card" ? (
                          <Check className="w-3.5 h-3.5 text-green-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    <div className="pt-1 flex items-center justify-center gap-1 text-[11px] text-muted-foreground">
                      <span>Supported on:</span>
                      <span className="font-semibold text-foreground">GPay, PhonePe, Paytm, BHIM</span>
                    </div>
                  </div>
                </motion.div>

                {/* QR Code 2: Paytm Accepted Here (1.png) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 }}
                  className="bg-card border border-border/80 rounded-2xl p-4 card-elevated flex flex-col items-center text-center relative group hover:border-primary/40 transition-all"
                >
                  <div className="w-full flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                      Paytm &amp; All UPI
                    </span>
                    <Badge variant="outline" className="text-[10px] bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20">
                      Multi-App
                    </Badge>
                  </div>

                  {/* QR Image with preview/zoom trigger */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="relative rounded-xl overflow-hidden border border-border/70 bg-white p-2 w-full max-w-[220px] aspect-[3/4] flex items-center justify-center cursor-zoom-in group/img shadow-sm"
                        title="Click to enlarge Paytm QR"
                      >
                        <img
                          src="/assets/1.png"
                          alt="Paytm Accepted Here Barcode - Lendigo Repayment"
                          className="w-full h-full object-contain rounded-lg transition-transform group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center rounded-xl text-white text-xs font-medium gap-1.5 backdrop-blur-[2px]">
                          <Eye className="w-4 h-4" />
                          <span>Click to Zoom</span>
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md p-6 bg-card text-foreground">
                      <DialogHeader>
                        <DialogTitle className="text-lg font-bold flex items-center gap-2">
                          <QrCode className="w-5 h-5 text-primary" />
                          Paytm &amp; All UPI QR Code
                        </DialogTitle>
                      </DialogHeader>
                      <div className="flex flex-col items-center py-4">
                        <div className="bg-white p-3 rounded-2xl border shadow-inner max-w-[300px]">
                          <img
                            src="/assets/1.png"
                            alt="Paytm UPI QR Code - Full Size"
                            className="w-full h-auto object-contain rounded-xl"
                          />
                        </div>
                        <div className="mt-4 text-center text-sm space-y-1">
                          <p className="font-semibold">Paytm Accepted Here</p>
                          <p className="text-muted-foreground text-xs">Supports UPI, Wallet &amp; Postpaid</p>
                        </div>
                        <div className="mt-4 flex gap-2">
                          <a href="/assets/1.png" download="Paytm_QR_Lendigo.png">
                            <Button size="sm" className="hero-gradient border-0 text-white">
                              <Download className="w-3.5 h-3.5 mr-1.5" />
                              Save QR Image
                            </Button>
                          </a>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <div className="mt-3.5 w-full space-y-2">
                    <div>
                      <p className="text-xs font-bold text-foreground">Paytm All-In-One QR</p>
                      <p className="text-[11px] text-muted-foreground">
                        Paytm, Postpaid &amp; UPI Wallets
                      </p>
                    </div>

                    <div className="p-2 bg-secondary/50 rounded-xl text-center border border-border/50">
                      <span className="text-[11px] text-muted-foreground">
                        Scan from any UPI scanner camera
                      </span>
                    </div>

                    <div className="pt-1 flex items-center justify-center gap-1.5">
                      <a
                        href="/assets/1.png"
                        download="Paytm_QR_Lendigo.png"
                        className="text-xs text-primary hover:underline font-medium inline-flex items-center gap-1"
                      >
                        <Download className="w-3 h-3" /> Download Barcode
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Supported UPI Badges Bar */}
              <div className="p-3.5 bg-secondary/30 rounded-2xl border border-border/60 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-primary" /> Supported UPI:
                </span>
                <span className="px-2.5 py-1 bg-card rounded-lg font-medium shadow-sm">Google Pay</span>
                <span className="px-2.5 py-1 bg-card rounded-lg font-medium shadow-sm">PhonePe</span>
                <span className="px-2.5 py-1 bg-card rounded-lg font-medium shadow-sm">Paytm</span>
                <span className="px-2.5 py-1 bg-card rounded-lg font-medium shadow-sm">BHIM UPI</span>
                <span className="px-2.5 py-1 bg-card rounded-lg font-medium shadow-sm">Cred / Amazon Pay</span>
              </div>
            </div>

            {/* Right Column: Direct Bank Transfer Details (Aarsh Fincon Limited) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-border">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl hero-gradient flex items-center justify-center text-primary-foreground">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold tracking-tight">Direct Bank Transfer</h2>
                    <p className="text-xs text-muted-foreground">NEFT • RTGS • IMPS Transfer Details</p>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleCopyAllBankDetails}
                  className="text-xs font-semibold gap-1.5 border-primary/30 text-primary hover:bg-primary/10"
                >
                  {copiedKey === "all_bank_details" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-600" />
                      <span>Copied All</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy All</span>
                    </>
                  )}
                </Button>
              </div>

              {/* Official Account Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-3xl p-6 card-elevated space-y-5"
              >
                <div className="flex items-center justify-between pb-4 border-b border-border/80">
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                      Registered Lending Partner
                    </div>
                    <div className="text-lg font-bold text-foreground">
                      {BANK_DETAILS.beneficiaryName}
                    </div>
                  </div>
                  <Badge className="hero-gradient border-0 text-[11px] px-2.5 py-1 text-white">
                    Verified Account
                  </Badge>
                </div>

                {/* Bank Fields with Individual Copy Buttons */}
                <div className="grid gap-3">
                  {/* Beneficiary Name */}
                  <div className="p-3 bg-secondary/40 rounded-xl border border-border/50 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-medium text-muted-foreground">Beneficiary / Account Name</p>
                      <p className="text-sm font-semibold text-foreground font-mono">
                        {BANK_DETAILS.beneficiaryName}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 px-2.5 hover:bg-background"
                      onClick={() => handleCopy("beneficiary", BANK_DETAILS.beneficiaryName, "Beneficiary Name")}
                    >
                      {copiedKey === "beneficiary" ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>

                  {/* Bank Name */}
                  <div className="p-3 bg-secondary/40 rounded-xl border border-border/50 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-medium text-muted-foreground">Bank Name</p>
                      <p className="text-sm font-semibold text-foreground">
                        {BANK_DETAILS.bankName}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 px-2.5 hover:bg-background"
                      onClick={() => handleCopy("bank", BANK_DETAILS.bankName, "Bank Name")}
                    >
                      {copiedKey === "bank" ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>

                  {/* Account Number */}
                  <div className="p-3.5 bg-primary/5 rounded-xl border border-primary/30 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-semibold text-primary">Account Number</p>
                      <p className="text-base font-mono font-bold text-foreground tracking-wider select-all">
                        {BANK_DETAILS.accountNumber}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 px-3 border-primary/40 bg-background text-primary hover:bg-primary hover:text-white transition-all text-xs font-semibold gap-1.5"
                      onClick={() => handleCopy("acc", BANK_DETAILS.accountNumber, "Account Number")}
                    >
                      {copiedKey === "acc" ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-600" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy A/C</span>
                        </>
                      )}
                    </Button>
                  </div>

                  {/* IFSC Code */}
                  <div className="p-3.5 bg-primary/5 rounded-xl border border-primary/30 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-semibold text-primary">IFSC Code (5th character is zero &apos;0&apos;)</p>
                      <p className="text-base font-mono font-bold text-foreground tracking-wider select-all">
                        {BANK_DETAILS.ifscCode}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 px-3 border-primary/40 bg-background text-primary hover:bg-primary hover:text-white transition-all text-xs font-semibold gap-1.5"
                      onClick={() => handleCopy("ifsc", BANK_DETAILS.ifscCode, "IFSC Code")}
                    >
                      {copiedKey === "ifsc" ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-600" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy IFSC</span>
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Branch & Account Type Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-secondary/40 rounded-xl border border-border/50 flex items-center justify-between">
                      <div>
                        <p className="text-[11px] font-medium text-muted-foreground">Branch Name</p>
                        <p className="text-sm font-semibold text-foreground">
                          {BANK_DETAILS.branchName}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 px-2 hover:bg-background"
                        onClick={() => handleCopy("branch", BANK_DETAILS.branchName, "Branch")}
                      >
                        {copiedKey === "branch" ? (
                          <Check className="w-3.5 h-3.5 text-green-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                        )}
                      </Button>
                    </div>

                    <div className="p-3 bg-secondary/40 rounded-xl border border-border/50 flex items-center justify-between">
                      <div>
                        <p className="text-[11px] font-medium text-muted-foreground">Account Type</p>
                        <p className="text-sm font-semibold text-foreground">
                          {BANK_DETAILS.accountType}
                        </p>
                      </div>
                      <Badge variant="outline" className="text-[10px]">
                        Commercial
                      </Badge>
                    </div>
                  </div>

                  {/* UPI VPA */}
                  <div className="p-3 bg-secondary/40 rounded-xl border border-border/50 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-medium text-muted-foreground">Official UPI VPA</p>
                      <p className="text-xs font-mono font-semibold text-foreground">
                        {BANK_DETAILS.upiId}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 px-2.5 hover:bg-background"
                      onClick={() => handleCopy("vpa", BANK_DETAILS.upiId, "UPI ID")}
                    >
                      {copiedKey === "vpa" ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Instructions Box */}
                <div className="p-4 bg-muted/40 rounded-2xl border border-border/70 space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2 font-semibold text-foreground text-xs">
                    <Info className="w-4 h-4 text-primary" />
                    <span>Important Reminders for Bank Transfer:</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 leading-relaxed">
                    <li>Mention your <strong className="text-foreground">Loan Application ID</strong> or registered mobile number in the transaction remarks.</li>
                    <li>Transfer is supported via <strong className="text-foreground">IMPS, NEFT, RTGS</strong> from any Indian scheduled bank.</li>
                    <li>Keep the 12-digit UTR number handy after successful transfer.</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps to Repay Section */}
      <section className="section-padding bg-secondary/25 border-y border-border/60">
        <div className="container-narrow mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
              How to Repay in 4 Simple Steps
            </h2>
            <p className="text-sm text-muted-foreground">
              Follow these simple guidelines to ensure your repayment is reconciled quickly and error-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {repaymentSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-card border border-border/80 rounded-2xl p-5 card-elevated flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-primary/30">{item.step}</span>
                    <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <item.icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-bold text-base mb-2 text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Check Dues / Login Form + Support Reconciliation Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* PAN Verification Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 bg-card border border-border rounded-3xl p-8 card-elevated"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                <FileText className="w-4 h-4" />
                <span>Borrower Portal</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">Verify Loan Account</h2>
              <p className="text-muted-foreground text-sm mb-6">
                Enter your PAN number to retrieve your active loan statement, outstanding EMI, and personalized payment link.
              </p>
              <form onSubmit={handlePanSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider mb-2 block text-foreground">
                    Permanent Account Number (PAN)
                  </label>
                  <Input
                    placeholder="e.g. ABCDE1234F"
                    value={pan}
                    onChange={(e) => setPan(e.target.value.toUpperCase())}
                    maxLength={10}
                    required
                    className="uppercase font-mono tracking-widest text-base"
                  />
                  <p className="text-[11px] text-muted-foreground mt-1.5">
                    An OTP will be sent to the mobile number registered with this PAN.
                  </p>
                </div>
                <Button type="submit" className="w-full hero-gradient border-0 font-medium text-white">
                  Verify &amp; View Outstanding Dues
                </Button>
              </form>
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>256-bit SSL encrypted &amp; RBI digital lending compliant</span>
              </div>
            </motion.div>

            {/* Reconciliation & Support Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="bg-card border border-border rounded-3xl p-8 card-elevated">
                <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  <Receipt className="w-4 h-4" />
                  <span>Payment Reconciliation</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Made a Transfer?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  If you have already transferred funds via Net Banking (NEFT / RTGS / IMPS) or UPI, please share your payment receipt with our customer desk for immediate ledger reconciliation and No Objection Certificate (NOC) processing.
                </p>

                <div className="space-y-3">
                  <div className="p-3.5 bg-secondary/30 rounded-xl flex items-center justify-between border border-border/50">
                    <div>
                      <span className="text-[11px] text-muted-foreground block font-medium">Reconciliation Desk Email</span>
                      <a
                        href="mailto:support.lendigo@aarshfincon.com"
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        support.lendigo@aarshfincon.com
                      </a>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs"
                      onClick={() => handleCopy("support_email", "support.lendigo@aarshfincon.com", "Support Email")}
                    >
                      {copiedKey === "support_email" ? (
                        <Check className="w-3.5 h-3.5 text-green-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </Button>
                  </div>

                  <div className="p-3.5 bg-secondary/30 rounded-xl flex items-center justify-between border border-border/50">
                    <div>
                      <span className="text-[11px] text-muted-foreground block font-medium">Customer Support Helpline</span>
                      <a href="tel:+918290906233" className="text-sm font-semibold text-foreground hover:text-primary">
                        +91 82909 06233
                      </a>
                    </div>
                    <span className="text-[11px] text-muted-foreground">Mon – Sat, 10 AM – 6 PM</span>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20 text-xs text-muted-foreground space-y-1">
                  <p className="font-semibold text-foreground">Required for Instant Reconciliation:</p>
                  <p>1. 12-digit UTR / Transaction Reference Number</p>
                  <p>2. Screenshot / PDF of bank confirmation</p>
                  <p>3. Your registered Mobile Number and Loan Account ID</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Multiple Payment Options Pill Row */}
      <section className="py-10 bg-secondary/20 border-t border-border/60">
        <div className="container-narrow mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4">
            Accepted Repayment Modes
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "UPI QR Scan",
              "BHIM UPI",
              "Google Pay",
              "PhonePe",
              "Paytm",
              "NEFT Bank Transfer",
              "RTGS Bank Transfer",
              "IMPS Instant",
              "Net Banking",
            ].map((method) => (
              <span
                key={method}
                className="px-4 py-2 bg-card border border-border/80 rounded-xl text-xs font-semibold text-foreground shadow-sm"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
