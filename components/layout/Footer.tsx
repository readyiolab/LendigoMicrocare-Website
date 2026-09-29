import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-narrow mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-10 w-36 bg-background rounded-lg p-1">
                <Image
                  src="/logo.webp"
                  alt="Lendigo Microcare"
                  fill
                  sizes="150px"
                  className="object-contain p-1"
                />
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              Empowering your financial journey with cutting-edge technology and expert insights.
            </p>
            <div className="p-3 rounded-xl bg-white/10 border border-white/20 text-xs shadow-sm">
              <span className="font-semibold text-white block text-sm">RBI Registered NBFC</span>
              <p className="text-white text-xs mt-1 font-medium">
                Registration No. B-10.00119 (Aarsh Fincon Limited)
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "FAQs", path: "/faqs" },
                { name: "Contact Us", path: "/contact" },
                { name: "Repay Loan", path: "/repay" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              {[
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms & Conditions", path: "/terms-and-conditions" },
                { name: "Refund Policy", path: "/refund-policy" },
                { name: "Interest Rate Policy", path: "/interest-rate-policy" },
                { name: "Fair Practices Code", path: "/fair-practices-code" },
                { name: "Corporate Governance", path: "/corporate-governance-policy" },
                { name: "KYC & AML Policy", path: "/kyc-aml-policy" },
                { name: "Risk Management", path: "/risk-management-policy" },
                { name: "Disclaimer", path: "/disclaimer" },
                { name: "Grievance Policy", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">+91-7827486530</span>
              </li>
              <li className="flex items-start gap-3">
                <a
                  href="https://wa.me/917827486530"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span className="text-muted-foreground text-sm">Chat on WhatsApp</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <a href="mailto:support.lendigo@aarshfincon.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  support.lendigo@aarshfincon.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} Lendigo Microcare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
