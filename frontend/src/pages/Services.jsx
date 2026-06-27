import useSEO from "@/hooks/useSEO";
import { ArrowRight, Shield, Zap, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ScrollSection from "@/components/ScrollSection";

const services = [
  {
    icon: <Zap size={22} />,
    name: "Lead Capture Automation",
    price: "From AED 3,500 / AUD 1,500",
    description:
      "WhatsApp, web form, and CRM workflows that capture, qualify, and route leads automatically — with full audit trails for your regulator.",
    includes: [
      "WhatsApp Business API integration",
      "CRM sync (HubSpot, Salesforce, or custom)",
      "Compliance-grade data handling documentation",
      "Lead scoring and routing rules",
    ],
  },
  {
    icon: <Shield size={22} />,
    name: "Workflow Automation",
    price: "From AED 5,000 / AUD 2,200",
    description:
      "End-to-end process automation for document routing, invoice chasing, onboarding, and reporting — built to your industry's data-residency rules.",
    includes: [
      "Process mapping and bottleneck audit",
      "n8n / Make / Zapier build (your choice of stack)",
      "Data-flow diagrams for compliance review",
      "Staff handover documentation",
    ],
  },
  {
    icon: <Bot size={22} />,
    name: "AI Agent Deployment",
    price: "From AED 7,500 / AUD 3,500",
    description:
      "Purpose-built AI agents for client communication, document analysis, and internal ops — scoped to your regulatory environment before a single line is written.",
    includes: [
      "Regulatory scoping session (PDPL / Privacy Act / PDPA)",
      "LLM selection and data-residency verification",
      "Agent build, testing, and red-team review",
      "Ongoing monitoring dashboard",
    ],
  },
];

export default function Services() {
  useSEO({
    title: "AI Automation Services & Pricing — WeHA | UAE · Australia · Singapore",
    description:
      "Lead capture automation from AED 3,500, workflow automation from AED 5,000, and AI agent deployment from AED 7,500. Every engagement starts with a free 60-minute AI Audit. Compliance-grade across UAE, Australia, and Singapore.",
    canonical: "/services",
  });

  return (
    <div data-testid="services-page" className="overflow-x-hidden">
      <PageHero
        kicker="Services"
        title="Automation built for"
        italicWord="regulated industries."
        subtitle="Three service tiers. All starting with a free 60-minute AI Audit. All scoped to your regulator before we write a line of code."
        formHeading="Get the AI Transformation Playbook"
        formTestid="services-lead-form"
        formSource="services"
      />

      <ScrollSection direction="left">
        <section className="section-glass py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <ul className="grid gap-8 lg:grid-cols-3">
              {services.map((s, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <li className="weha-card p-8 flex flex-col gap-5">
                    <span className="inline-flex text-weha-teal">{s.icon}</span>
                    <div>
                      <h2 className="font-semibold text-weha-text text-lg mb-1">{s.name}</h2>
                      <p className="text-xs font-semibold text-weha-teal tracking-wide mb-3">{s.price}</p>
                      <p className="text-weha-muted text-sm leading-relaxed">{s.description}</p>
                    </div>
                    <ul className="space-y-2 mt-auto">
                      {s.includes.map((item, j) => (
                        <li key={j} className="flex gap-2 text-sm text-weha-muted">
                          <span className="text-weha-teal mt-0.5">✦</span> {item}
                        </li>
                      ))}
                    </ul>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      </ScrollSection>

      <ScrollSection direction="right">
        <section className="section-solid py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
            <Reveal>
              <h2 className="weha-display text-3xl md:text-4xl text-weha-text mb-4">
                Every engagement starts the same way.
              </h2>
              <p className="text-weha-muted leading-relaxed mb-8">
                A free 60-minute AI Audit where we map your workflows and identify your compliance constraints — before we quote anything.
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
