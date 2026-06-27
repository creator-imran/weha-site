import useSEO from "@/hooks/useSEO";
import { useRef } from "react";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import ScrollSection from "@/components/ScrollSection";
import PlaybookLeadForm from "@/components/PlaybookLeadForm";

const painPoints = [
  {
    icon: <Shield size={20} />,
    heading: "Compliance isn't optional.",
    body: "UAE PDPL, Australia Privacy Act, Singapore PDPA — regulators are watching. Most automation tools weren't built with any of this in mind.",
  },
  {
    icon: <Zap size={20} />,
    heading: "Manual work is bleeding you dry.",
    body: "Lead follow-ups, invoice chasing, document routing — your team is doing robot work. That's time and money gone every single day.",
  },
  {
    icon: <Globe size={20} />,
    heading: "Generic agencies don't know your industry.",
    body: "Real estate, freight, accounting — each has its own compliance landmines. You need someone who's been inside enterprise security, not just watching YouTube tutorials.",
  },
];

const metrics = [
  { value: "3", label: "Markets served", sub: "UAE · Australia · Singapore" },
  { value: "AED 3,500", label: "Starting price", sub: "Single workflow automation" },
  { value: "60 min", label: "Free AI Audit", sub: "No pitch decks. Just your workflows." },
  { value: "0", label: "Compliance incidents", sub: "Across every automation we've shipped" },
];

const verticals = [
  { name: "Real Estate", markets: "UAE · AU" },
  { name: "Freight & Logistics", markets: "UAE" },
  { name: "Accounting & Bookkeeping", markets: "AU · SG" },
  { name: "Mortgage & Finance", markets: "AU · SG" },
  { name: "Events & Exhibitions", markets: "UAE" },
  { name: "Fintech", markets: "SG" },
];

export default function Home() {
  useSEO({
    title: "WeHA — Compliance-Grade AI Automation for SMBs | UAE · Australia · Singapore",
    description:
      "WeHA automates the manual workflows draining your business — lead capture, document routing, invoice chasing — without touching your compliance standing. Serving real estate, freight, accounting and finance SMBs across the UAE, Australia and Singapore.",
    canonical: "/",
  });

  const formRef = useRef(null);
  const scrollToForm = () =>
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <div data-testid="home-page" className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative pt-32 md:pt-44 pb-20 md:pb-32 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 items-center">
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-weha-teal mb-6">
                <Shield size={12} /> Compliance-grade AI automation
              </span>
              <h1 className="weha-display text-5xl md:text-6xl lg:text-7xl text-weha-text leading-[1.05] mb-6">
                Automate without getting{" "}
                <em className="not-italic text-weha-teal">fined, banned,</em>{" "}
                or struck off.
              </h1>
              <p className="text-weha-muted text-lg leading-relaxed max-w-xl mb-8">
                The only AI automation agency founded by an IAM &amp; cybersecurity specialist.
                We ship workflows that regulators won't flag — across the UAE, Australia, and Singapore.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-teal" data-cursor="hover">
                  Book Free AI Audit <ArrowRight size={16} />
                </Link>
                <button onClick={scrollToForm} className="btn-ghost" data-cursor="hover">
                  Get the Playbook
                </button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div ref={formRef}>
              <PlaybookLeadForm
                heading="Get the AI Transformation Playbook"
                testid="home-hero-form"
                source="home_hero"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PAIN SECTION */}
      <ScrollSection direction="left">
        <section className="section-glass py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <Reveal>
              <h2 className="weha-display text-3xl md:text-4xl text-weha-text max-w-2xl mb-12">
                Why most automation projects fail — and get companies in trouble.
              </h2>
            </Reveal>
            <ul className="grid gap-8 md:grid-cols-3">
              {painPoints.map((p, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <li className="weha-card p-7">
                    <span className="inline-flex text-weha-teal mb-4">{p.icon}</span>
                    <h3 className="font-semibold text-weha-text mb-2">{p.heading}</h3>
                    <p className="text-weha-muted text-sm leading-relaxed">{p.body}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      </ScrollSection>

      {/* 3-STEP PROCESS */}
      <ScrollSection direction="right">
        <section className="section-solid py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <Reveal>
              <span className="inline-flex text-xs font-semibold tracking-[0.2em] uppercase text-weha-teal mb-4">
                How it works
              </span>
              <h2 className="weha-display text-3xl md:text-4xl text-weha-text max-w-2xl mb-12">
                Three steps from manual chaos to compliant automation.
              </h2>
            </Reveal>
            <ol className="grid gap-8 md:grid-cols-3">
              {[
                ["01", "Free AI Audit", "We spend 60 minutes mapping your top 3 manual workflows. No pitch deck. You leave with a clear list of what's automatable and what the compliance risks are."],
                ["02", "Scoped Build", "We quote one workflow. You approve. We build it — usually in 2–4 weeks — and you test it before we invoice the balance."],
                ["03", "Compliant Handover", "Full documentation, data-flow diagrams, and a compliance checklist for your industry's regulator. You own everything we build."],
              ].map(([num, heading, body]) => (
                <Reveal key={num} delay={parseInt(num) * 0.07}>
                  <li className="flex gap-5">
                    <span className="weha-display text-5xl text-weha-teal/30 leading-none select-none">{num}</span>
                    <div>
                      <h3 className="font-semibold text-weha-text mb-2">{heading}</h3>
                      <p className="text-weha-muted text-sm leading-relaxed">{body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      </ScrollSection>

      {/* VERTICALS */}
      <ScrollSection direction="left">
        <section className="section-glass py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <Reveal>
              <h2 className="weha-display text-3xl md:text-4xl text-weha-text max-w-2xl mb-12">
                Industries we specialise in.
              </h2>
            </Reveal>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {verticals.map((v, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <li className="weha-card px-6 py-5 flex items-center justify-between">
                    <span className="font-medium text-weha-text">{v.name}</span>
                    <span className="text-xs text-weha-teal font-semibold tracking-wide">{v.markets}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      </ScrollSection>

      {/* METRICS */}
      <ScrollSection direction="right">
        <section className="section-solid py-20 md:py-28 border-y border-weha-border">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((m, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <li>
                    <div className="weha-display text-4xl md:text-5xl text-weha-text mb-1">{m.value}</div>
                    <div className="font-semibold text-weha-text text-sm mb-0.5">{m.label}</div>
                    <div className="text-xs text-weha-muted">{m.sub}</div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      </ScrollSection>

      {/* CTA */}
      <ScrollSection direction="left">
        <section className="section-glass py-24 md:py-36">
          <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
            <Reveal>
              <h2 className="weha-display text-4xl md:text-5xl text-weha-text mb-6">
                Ready to automate — without the compliance headache?
              </h2>
              <p className="text-weha-muted text-lg leading-relaxed mb-8">
                Book a free 60-minute AI Audit. We'll map your workflows and show you one live automation before we end the call.
              </p>
              <Link to="/contact" className="btn-teal" data-cursor="hover">
                Book Free AI Audit <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </section>
      </ScrollSection>
    </div>
  );
}
