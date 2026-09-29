import { Metadata } from "next";
import { RepayContent } from "./RepayContent";

export const metadata: Metadata = {
  title: "Loan Repayment - Bank Account & UPI Details",
  description:
    "Official repayment details for Lendigo Microcare loans. Pay via UPI QR code or direct bank transfer to Aarsh Fincon Limited (Bank of Baroda, A/C: 16200500005219, IFSC: BARB0UDARAJ).",
  keywords: [
    "repay loan",
    "Lendigo Microcare payment",
    "loan repayment",
    "Aarsh Fincon Limited",
    "Bank of Baroda loan payment",
    "UPI repayment",
    "QR code loan payment",
  ],
  alternates: {
    canonical: "https://lendigomicrocare.com/repay",
  },
};

export default function RepayPage() {
  return <RepayContent />;
}
