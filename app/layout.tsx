import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#0f766e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lendigomicrocare.com"),
  title: {
    default: "Lendigo Microcare - Instant Personal Loans in India",
    template: "%s | Lendigo Microcare",
  },
  description:
    "Get instant personal loans with Lendigo Microcare. Fast approval, low interest rates, and flexible repayment. Regulated NBFC entity (Aarsh Fincon Limited, RBI Reg. B-10.00119).",
  keywords: [
    "instant loans",
    "personal loans",
    "quick approval loan",
    "Lendigo Microcare",
    "Aarsh Fincon Limited",
    "fintech loans India",
    "emergency loan app",
    "online cash loan",
  ],
  authors: [{ name: "Lendigo Microcare" }],
  creator: "Lendigo Microcare",
  publisher: "Aarsh Fincon Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.webp",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://lendigomicrocare.com",
    siteName: "Lendigo Microcare",
    title: "Lendigo Microcare - Instant Personal Loans in India",
    description:
      "Get instant personal loans with Lendigo Microcare. Fast approval, 100% secure, and flexible repayment.",
    images: [
      {
        url: "/assets/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Lendigo Microcare - Powering Your Next Step",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lendigo Microcare - Instant Personal Loans in India",
    description:
      "Get instant personal loans with Lendigo Microcare. Fast approval, 100% secure, and flexible repayment.",
    images: ["/assets/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Lendigo Microcare",
  legalName: "Aarsh Fincon Limited",
  url: "https://lendigomicrocare.com",
  logo: "https://lendigomicrocare.com/logo.webp",
  description:
    "RBI Registered NBFC Digital Lending Platform providing instant personal loans.",
  telephone: "+91-7827486530",
  email: "support.lendigo@aarshfincon.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("antialiased", inter.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
