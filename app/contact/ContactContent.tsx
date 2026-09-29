"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Mail,
  Phone,
  User,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Headphones,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, title: "Contact Us", details: ["+91-7827486530"] },
  { icon: Mail, title: "Send us an email", details: ["support.lendigo@aarshfincon.com"] },
];

const officers = [
  {
    title: "Grievance Redressal Officer",
    name: "Ashok Kumar",
    phone: "+91-88266 20992",
    email: "stpl.collection@aarshfincon.com",
  },
  {
    title: "Collections Manager",
    name: "Deepak Kumar",
    phone: "+91-9616538225",
    email: "support.lendigo@aarshfincon.com",
  },
];

export const ContactContent = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please consent to receive service updates.",
        variant: "destructive",
      });
      return;
    }
    toast({ title: "Message Sent!", description: "We'll get back to you shortly." });
    setFormData({ name: "", email: "", phone: "", message: "", consent: false });
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
                src="/assets/person_loan_3.png"
                alt="Lendigo Support Team"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-[70%_center] lg:object-right opacity-80"
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
                  <Headphones className="w-4 h-4 text-emerald-300" />
                  <span>24x7 Customer Assistance • Grievance Support</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight mb-6">
                  We're Here Whenever<br />
                  You Need Us.
                </h1>

                <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-xl font-normal">
                  Have questions about your payday advance, repayment schedules, or need help with verification? Reach out to our dedicated support and Grievance officers anytime.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a href="tel:+917827486530">
                    <button
                      type="button"
                      className="bg-white text-[#073832] hover:bg-emerald-50 active:scale-95 transition-all duration-300 px-7 py-3.5 rounded-full font-bold text-sm md:text-base shadow-xl hover:shadow-2xl flex items-center gap-2.5 group cursor-pointer"
                    >
                      <Phone className="w-4 h-4 text-[#073832]" />
                      <span>Call: +91-7827486530</span>
                    </button>
                  </a>

                  <a
                    href="https://wa.me/917827486530"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="button"
                      className="bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white px-6 py-3.5 rounded-full font-medium text-sm md:text-base transition-all duration-300 flex items-center gap-2 shadow-lg cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Support</span>
                    </button>
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center gap-6 mt-10 text-white/90 text-xs md:text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-300" />
                    <span>&lt; 15 Min Response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-300" />
                    <span>100% Grievance Redressal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    <span>Mon - Sat (9:30 AM - 6:30 PM)</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Glassmorphic Card on Bottom Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20 backdrop-blur-xl bg-black/40 border border-white/25 rounded-2xl md:rounded-3xl p-4 md:p-5 text-white shadow-2xl max-w-[220px]"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mb-3">
                <Headphones className="w-5 h-5 text-emerald-300" />
              </div>
              <p className="text-xl md:text-2xl font-extrabold tracking-tight text-white mb-0.5">
                Quick Help
              </p>
              <p className="text-xs text-white/80 leading-snug">
                Dedicated grievance officers ready to assist you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 card-elevated"
            >
              <h2 className="text-2xl font-bold mb-2">We'll get in touch shortly</h2>
              <p className="text-muted-foreground text-sm mb-8">
                We're here to answer your questions and provide personalized assistance!
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Full Name</label>
                  <Input
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone Number</label>
                  <Input
                    type="tel"
                    placeholder="Enter your number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    placeholder="Type your message..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, consent: checked as boolean })
                    }
                  />
                  <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    I consent to SMS, RCS &amp; WhatsApp service updates.
                  </label>
                </div>
                <Button type="submit" className="w-full hero-gradient border-0 text-white">
                  Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.title} className="bg-secondary/50 rounded-2xl p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      {info.details.map((detail) => (
                        <p key={detail} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}

                <a
                  href="https://wa.me/917827486530"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-50/50 border border-green-200 rounded-2xl p-6 flex items-center gap-4 hover:bg-green-50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-green-800">Chat on WhatsApp</h4>
                    <p className="text-green-700 text-sm">Connect with us instantly</p>
                  </div>
                </a>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Key Contacts</h3>
                {officers.map((officer) => (
                  <div key={officer.name} className="bg-card rounded-2xl p-6 card-elevated">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-primary font-medium mb-1">{officer.title}</p>
                        <h4 className="font-semibold mb-2">{officer.name}</h4>
                        <p className="text-muted-foreground text-sm">{officer.phone}</p>
                        <p className="text-muted-foreground text-sm">{officer.email}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground text-sm text-center p-4 bg-secondary/30 rounded-xl">
                Our customer service experts are here for you 24/7
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
