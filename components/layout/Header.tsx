"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Home,
  Building2,
  HelpCircle,
  PhoneCall,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", path: "/about", icon: Building2 },
  { name: "Payday Loans", path: "/#calculator", icon: CreditCard },
  { name: "FAQs", path: "/faqs", icon: HelpCircle },
  { name: "Repay", path: "/repay", icon: CreditCard },
  { name: "Contact", path: "/contact", icon: PhoneCall },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-xs border-b border-border/70 py-2.5 md:py-3"
            : "bg-background/80 backdrop-blur-md border-b border-border/40 py-3 md:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="flex items-center gap-2 group transition-transform active:scale-98"
                aria-label="Lendigo Microcare"
              >
                <div className="relative h-9 md:h-11 w-32 md:w-40">
                  <Image
                    src="/logo.webp"
                    alt="Lendigo Microcare"
                    fill
                    priority
                    sizes="(max-width: 768px) 130px, 160px"
                    className="object-contain object-left transition-opacity group-hover:opacity-90"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Center Navigation */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive ? "text-primary font-semibold" : "text-neutral-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right Actions: Pill Button + Circle Phone Button (Matching Reference) */}
            <div className="hidden md:flex items-center gap-3">
              <Link href="/contact">
                <button
                  type="button"
                  className="rounded-full px-6 py-2.5 text-sm font-medium border border-neutral-300 text-neutral-800 hover:border-primary hover:text-primary transition-all duration-200 cursor-pointer bg-white"
                >
                  Contact Us
                </button>
              </Link>

              <a
                href="tel:+917827486530"
                className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-800 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200 cursor-pointer bg-white"
                aria-label="Call support directly"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href="https://loan.lendigomicrocare.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="hero-gradient text-white rounded-full px-5 py-2.5 text-sm font-semibold shadow-xs hover:shadow-primary/20 hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </a>
            </div>

            {/* Mobile Actions: Phone + Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="tel:+917827486530"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-neutral-800 bg-background"
                aria-label="Call Support"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-foreground hover:bg-muted active:scale-95 transition-all"
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
              aria-hidden="true"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="relative w-[85%] max-w-sm h-full bg-background border-l border-border shadow-2xl flex flex-col z-10 overflow-y-auto"
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="relative h-8 w-28">
                  <Image
                    src="/logo.webp"
                    alt="Lendigo Microcare"
                    fill
                    sizes="120px"
                    className="object-contain object-left"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-muted/80 active:scale-95 transition-all"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mx-4 mt-4 p-3 rounded-2xl bg-primary/10 border border-primary/20 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-primary">RBI Registered NBFC Partner</p>
                  <p className="text-[11px] text-muted-foreground">
                    Aarsh Fincon Limited (B-10.00119)
                  </p>
                </div>
              </div>

              <nav className="flex-1 p-4 space-y-1.5" aria-label="Mobile Navigation">
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold px-2 mb-2">
                  Navigation
                </p>

                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      href={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? "bg-primary text-white font-semibold"
                          : "text-foreground hover:bg-muted active:bg-muted"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            isActive ? "bg-white/20 text-white" : "bg-muted text-primary"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span>{item.name}</span>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 ${isActive ? "text-white" : "text-muted-foreground"}`}
                      />
                    </Link>
                  );
                })}
              </nav>

              <div className="p-4 border-t border-border space-y-3 bg-muted/20">
                <a
                  href="https://loan.lendigomicrocare.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <button
                    type="button"
                    className="w-full hero-gradient text-white h-12 rounded-full text-sm font-semibold shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Apply For Instant Cash</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:+917827486530"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-full border border-border bg-background text-xs font-medium hover:border-primary text-center"
                  >
                    <Phone className="w-3.5 h-3.5 text-primary" />
                    <span>Call Us</span>
                  </a>
                  <a
                    href="https://wa.me/917827486530"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-full border border-border bg-background text-xs font-medium hover:border-accent text-center"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-accent" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
