import useSEO from "@/hooks/useSEO";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ScrollSection from "@/components/ScrollSection";

const values = [
  { heading: "Compliance first, automation second.", body: "We scope every project against your regulator before writing a line of code. If it's not compliant, it doesn't ship." },
  { heading: "No pitch decks. No retainers.", body: "We show you a working automation in the audit call. You pay for what gets built — nothing before that." },
  { heading: "You own everything.", body: "Full source, documentation, and data-flow diagrams handed over at project close. No lock-in." },
  { heading: "Specific beats generic.", body: "We serve three markets and six verticals. That's it. Depth over breadth." },
];

export default function About() {
  useSEO({
    title: "About WeHA — Compliance-Grade AI Automation Agency | Founded by an IAM Specialist",
    description:
      "WeHA was founded by an IAM and cybersecurity specialist who spent a decade inside enterprise security. We build AI automations that regulators won't flag — for SMBs in the UAE, Australia, and Singapore.",
    canonical: "/about",
  });

  return (
    <div data-testid="about-page" className="overflow-x-hidden">
      <PageHero
        kicker="About"
        title="Built by someone who spent a decade keeping systems secure — and a lot of time watching founders"
        italicWord="lose theirs to manual work."
        formHeading="Get the AI Transformation Playbook"
        formTestid="about-lead-form"
        formSource="about"
      />

      {/* Founder story */}
      <ScrollSection direction="left">
      <section className="section-glass relative section-solid py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 items-start">
          <Reveal>
            <div className="rounded-2xl overflow-hidden border border-weha-border bg-weha-surface">
              <div className="aspect-[4/5] bg-weha-surface-offset flex items-center justify-center">
                <span className="text-weha-faint text-sm">Founder photo</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 pt-2">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-weha-teal">Founder</span>
              <h2 className="weha-display text-3xl md:text-4xl text-weha-text">
                A decade in IAM &amp; cybersecurity. Now fixing the part that comes after.
              </h2>
              <p className="text-weha-muted leading-relaxed">
                Before starting WeHA, our founder spent years designing and auditing identity and access management systems for enterprise clients across the Gulf and APAC. He saw the same pattern everywhere: companies were automating fast, compliance was an afterthought, and the regulator notices came six months later.
              </p>
              <p className="text-weha-muted leading-relaxed">
                WeHA was built specifically to close that gap — automation that moves fast <em>and</em> stays clean. Every workflow we ship comes with a compliance checklist for your jurisdiction's regulator.
              </p>
              <Link to="/contact" className="btn-teal inline-flex" data-cursor="hover">
                Book a Free AI Audit <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      </ScrollSection>

      {/* Why security thinking matters */}
      <ScrollSection direction="right">
      <section className="section-glass py-20 md:py-28 bg-weha-surface border-y border-weha-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <h2 className="weha-display text-4xl md:text-5xl text-weha-text max-w-3xl">
              Why a security background matters for automation.
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2 mt-12">
            {[
              ["We know where data leaks.", "Most automation tools route data through third-party servers by default. We map every data touch-point before we pick a stack."],
              ["We know what regulators look for.", "UAE PDPL, Australia Privacy Act, Singapore PDPA — we've read the enforcement notices. We build so you don't become one."],
              ["We know how to document for audit.", "Every workflow comes with a data-flow diagram your DPO or compliance officer can hand to a regulator."],
              ["We know what not to automate.", "Some processes should stay human. We'll tell you that in the audit — before you pay for a build."],
            ].map(([h, b], i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="weha-card p-7">
                  <h3 className="font-semibold text-weha-text mb-2">{h}</h3>
                  <p className="text-weha-muted text-sm leading-relaxed">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      </ScrollSection>

      {/* Director + markets */}
      <ScrollSection direction="left">
      <section className="section-glass relative section-solid py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid gap-14 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-weha-teal block mb-3">Director</span>
              <h2 className="weha-display text-3xl md:text-4xl text-weha-text mb-4">The face clients meet.</h2>
              <p className="text-weha-muted leading-relaxed">
                Our Director leads client relationships across all three markets — UAE, Australia, and Singapore. They're the person on the call, not a salesperson.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-weha-teal block mb-3">Markets</span>
              <ul className="space-y-3">
                {[
                  ["UAE (Dubai)", "Real estate, freight, events & exhibitions"],
                  ["Australia", "Accounting, mortgage & finance brokers"],
                  ["Singapore", "Fintech, financial services (MAS-regulated)"],
                ].map(([market, desc], i) => (
                  <li key={i} className="weha-card px-5 py-4">
                    <span className="font-semibold text-weha-text block">{market}</span>
                    <span className="text-sm text-weha-muted">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
      </ScrollSection>

      {/* Values */}
      <ScrollSection direction="right">
      <section className="section-glass py-20 md:py-28 bg-weha-surface border-y border-weha-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <h2 className="weha-display text-4xl md:text-5xl text-weha-text">What we believe.</h2>
          </Reveal>
          <ul className="grid gap-6 md:grid-cols-2 mt-12">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <li className="weha-card p-7">
                  <h3 className="font-semibold text-weha-text mb-2">{v.heading}</h3>
                  <p className="text-weha-muted text-sm leading-relaxed">{v.body}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      </ScrollSection>
    </div>
  );
}
