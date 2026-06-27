import useSEO from "@/hooks/useSEO";
import { Mail, MessageCircle, Linkedin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ScrollSection from "@/components/ScrollSection";
import PlaybookLeadForm from "@/components/PlaybookLeadForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const expectations = [
  "Get the full AI Transformation Playbook (28-page PDF).",
  "See 12 reference workflows we've shipped across UAE, AU and SG.",
  "Optional: a 15–30 minute AI readiness session to map your stack.",
];

const faqs = [
  ["Do I need to know anything about AI?", "No. We map your workflows in plain language and explain every tool we recommend."],
  ["How long does a build take?", "Most single-workflow automations take 2–4 weeks from audit to handover."],
  ["Can you work with our existing tools?", "Almost certainly. We've integrated with HubSpot, Xero, MYOB, Salesforce, WhatsApp Business, and most common SMB stacks."],
  ["How much does it cost?", "Starting from AED 3,500 / AUD 1,500 for a single workflow. We never quote before the audit."],
];

export default function Contact() {
  useSEO({
    title: "Contact WeHA — Book a Free AI Audit | UAE · Australia · Singapore",
    description:
      "Book a free 60-minute AI Audit with WeHA. We'll map your top manual workflows and show you one live automation — no pitch deck, no obligation. Serving UAE, Australia, and Singapore.",
    canonical: "/contact",
  });

  return (
    <div data-testid="contact-page" className="overflow-x-hidden">
      <PageHero
        kicker="Contact"
        title="Get the playbook,"
        italicWord="map your workflows."
        subtitle="Download the AI Transformation Playbook — the same diagnostic we use with paying clients — and tell us where you'd like to start."
        showForm={false}
      />

      <ScrollSection direction="left">
        <section className="section-glass relative pb-8 pt-4">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <Reveal>
              <ul className="grid gap-5 md:grid-cols-3">
                {expectations.map((x, i) => (
                  <li key={i} className="flex gap-3 text-weha-text">
                    <span className="text-weha-teal text-lg leading-none mt-0.5">✦</span>
                    <span className="leading-relaxed">{x}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      </ScrollSection>

      <ScrollSection direction="right" intensity={0.4}>
        <section className="section-glass py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 grid gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:gap-16">
            <Reveal>
              <PlaybookLeadForm
                heading="Download the AI Transformation Playbook"
                testid="contact-playbook-form"
                source="contact"
              />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-8">
                <div className="space-y-4">
                  <a
                    href="https://wa.me/918180861084"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-weha-text hover:text-weha-teal transition-colors"
                    data-testid="contact-whatsapp"
                  >
                    <MessageCircle size={18} className="text-weha-teal" /> WhatsApp — +91 81808 61084
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-weha-text hover:text-weha-teal transition-colors"
                    data-testid="contact-linkedin"
                  >
                    <Linkedin size={18} className="text-weha-teal" /> LinkedIn — Director's profile
                  </a>
                  <a
                    href="mailto:hello@wehelpautomate.com"
                    className="flex items-center gap-3 text-weha-text hover:text-weha-teal transition-colors"
                    data-testid="contact-email"
                  >
                    <Mail size={18} className="text-weha-teal" /> hello@wehelpautomate.com
                  </a>
                  <div className="flex items-center gap-3 text-weha-muted">
                    <Clock size={18} className="text-weha-teal" /> Replies within 24 hours
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-weha-text mb-4">Common questions</h3>
                  <Accordion type="single" collapsible className="space-y-2">
                    {faqs.map(([q, a], i) => (
                      <AccordionItem key={i} value={`faq-${i}`} className="weha-card border-0">
                        <AccordionTrigger className="px-5 py-4 text-sm font-medium text-weha-text hover:text-weha-teal">
                          {q}
                        </AccordionTrigger>
                        <AccordionContent className="px-5 pb-4 text-sm text-weha-muted leading-relaxed">
                          {a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </ScrollSection>
    </div>
  );
}
