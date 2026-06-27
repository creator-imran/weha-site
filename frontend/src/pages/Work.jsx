import useSEO from "@/hooks/useSEO";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ScrollSection from "@/components/ScrollSection";

const cases = [
  {
    tag: "Real Estate · UAE",
    title: "WhatsApp Lead Qualification for a Dubai Brokerage",
    problem:
      "Agents were manually replying to 200+ WhatsApp enquiries per day. Hot leads were going cold while agents copy-pasted the same qualification questions.",
    solution:
      "An n8n workflow connected to WhatsApp Business API that qualifies leads via a scripted conversation, scores them against budget/timeline signals, and routes hot leads directly to the right agent in under 90 seconds.",
    result: "Lead response time dropped from 4 hours to 90 seconds. Agents now only talk to qualified prospects.",
    compliance: "UAE PDPL Article 4 compliant — data stored in-country, explicit consent captured in chat.",
  },
  {
    tag: "Freight & Logistics · UAE",
    title: "Automated RFQ Processing for a Dubai Freight Forwarder",
    problem:
      "RFQ emails were being manually read, copied into a spreadsheet, and forwarded to pricing teams. A single RFQ took 45 minutes of staff time.",
    solution:
      "An AI agent that reads inbound RFQ emails, extracts structured data (origin, destination, commodity, weight), pre-fills the pricing template, and routes it to the right pricing desk with a confidence score.",
    result: "RFQ processing time reduced from 45 minutes to under 3 minutes per quote.",
    compliance: "No PII handled in transit — commodity and routing data only. GDPR-equivalent handling for EU shipper data.",
  },
  {
    tag: "Accounting · Australia",
    title: "Payday Super Compliance Automation for an Accounting Firm",
    problem:
      "With Payday Super legislation requiring same-day super contributions from July 2026, firms needed automated payroll-to-super reconciliation to avoid ATO penalties.",
    solution:
      "A workflow that pulls payroll run data, calculates super obligations in real time, flags discrepancies before the payment window closes, and generates the ATO-ready reconciliation report.",
    result: "Zero ATO discrepancy notices across all client payrolls in the pilot.",
    compliance: "Built to ATO Payday Super guidelines — data stays in Australian-hosted infrastructure.",
  },
];

export default function Work() {
  useSEO({
    title: "Automation Case Studies — Real Estate, Freight & Accounting | WeHA",
    description:
      "See how WeHA automated WhatsApp lead qualification for a Dubai brokerage, RFQ processing for a UAE freight forwarder, and Payday Super compliance for an Australian accounting firm.",
    canonical: "/work",
  });

  return (
    <div data-testid="work-page" className="overflow-x-hidden">
      <PageHero
        kicker="Work"
        title="Automations we've"
        italicWord="actually shipped."
        subtitle="Three real workflows — real estate, freight, and accounting — each built inside the compliance constraints of its regulator."
        formHeading="Get the AI Transformation Playbook"
        formTestid="work-lead-form"
        formSource="work"
      />

      {cases.map((c, i) => (
        <ScrollSection key={i} direction={i % 2 === 0 ? "left" : "right"}>
          <section className={`${i % 2 === 0 ? "section-glass" : "section-solid"} py-16 md:py-24`}>
            <div className="max-w-7xl mx-auto px-5 sm:px-8 grid gap-10 lg:grid-cols-[0.4fr_1fr] lg:gap-16 items-start">
              <Reveal>
                <div>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-weha-teal block mb-3">{c.tag}</span>
                  <h2 className="weha-display text-2xl md:text-3xl text-weha-text leading-snug">{c.title}</h2>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xs font-semibold tracking-widest uppercase text-weha-muted mb-1">Problem</h3>
                    <p className="text-weha-text leading-relaxed">{c.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold tracking-widest uppercase text-weha-muted mb-1">Solution</h3>
                    <p className="text-weha-text leading-relaxed">{c.solution}</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="weha-card px-5 py-4">
                      <span className="text-xs font-semibold tracking-widest uppercase text-weha-teal block mb-1">Result</span>
                      <p className="text-sm text-weha-text leading-relaxed">{c.result}</p>
                    </div>
                    <div className="weha-card px-5 py-4">
                      <span className="text-xs font-semibold tracking-widest uppercase text-weha-teal block mb-1">Compliance</span>
                      <p className="text-sm text-weha-text leading-relaxed">{c.compliance}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        </ScrollSection>
      ))}

      <ScrollSection direction="left">
        <section className="section-glass py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
            <Reveal>
              <h2 className="weha-display text-3xl md:text-4xl text-weha-text mb-4">
                Want to see what one would look like for your business?
              </h2>
              <p className="text-weha-muted leading-relaxed mb-8">
                Book a free 60-minute AI Audit. We'll map your top workflows live — you'll leave with a build spec, not just a proposal.
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
