import Link from "next/link";
import type { Service } from "@/lib/services";

export default function ServicePage({ service }: { service: Service }) {
  return (
    <main className="route-page route-page--service">
      <div className="route-container">
        <Link href="/" className="route-back"><span aria-hidden="true">←</span> Back to home</Link>

        <section className="route-hero" aria-labelledby="route-title">
          <div className="route-hero__copy">
            <p className="route-eyebrow"><span className="route-eyebrow__dot" /> NOW IT SYSTEMS <span className="route-eyebrow__separator">/</span> SERVICENOW SOLUTIONS</p>
            <h1 id="route-title">{service.title}</h1>
            <p className="route-lead">{service.description}</p>
            <div className="route-actions">
              <Link href="/#contact" className="route-button route-button--primary">Discuss your requirements <span aria-hidden="true">↗</span></Link>
              <a href="#capabilities" className="route-button route-button--secondary">Explore capabilities <span aria-hidden="true">↓</span></a>
            </div>
          </div>

          <aside className="route-visual" aria-label={`${service.title} outcomes`}>
            <div className="route-visual__orb route-visual__orb--one" />
            <div className="route-visual__orb route-visual__orb--two" />
            <div className="route-visual__topline"><span className="route-status-dot" /> WORKFLOW OVERVIEW <span className="route-visual__live">CONNECTED</span></div>
            <div className="route-visual__core"><span className="route-visual__core-icon">✳</span><strong>{service.slug.toUpperCase()}</strong><small>ServiceNow workflow</small></div>
            <div className="route-visual__pill route-visual__pill--a"><span>✓</span> Connected experiences</div>
            <div className="route-visual__pill route-visual__pill--b"><span>↗</span> Less manual effort</div>
            <div className="route-visual__pill route-visual__pill--c"><span>◎</span> Clearer outcomes</div>
            <div className="route-visual__foot"><span>DESIGNED AROUND YOUR TEAM</span><span>01 — 04</span></div>
          </aside>
        </section>

        <section className="route-capabilities" id="capabilities" aria-labelledby="capabilities-title">
          <div className="route-section-heading"><div><p className="route-kicker">WHAT WE DELIVER</p><h2 id="capabilities-title">Make every workflow work harder.</h2></div><p>Practical ServiceNow capabilities, thoughtfully configured around the way your teams work.</p></div>
          <div className="route-capability-grid">
            {service.capabilities.map((capability, index) => (
              <article className="route-capability" key={capability}>
                <span className="route-capability__number">{String(index + 1).padStart(2, "0")}</span>
                <span className="route-capability__arrow" aria-hidden="true">↗</span>
                <h3>{capability}</h3>
                <div className="route-capability__line" />
              </article>
            ))}
          </div>
        </section>

        <section className="route-cta">
          <div className="route-cta__mark" aria-hidden="true">↗</div>
          <div className="route-cta__copy"><p className="route-kicker">LET’S BUILD BETTER WORKFLOWS</p><h2>Ready to make work flow?</h2><p>Let’s discuss your ServiceNow roadmap and the outcomes your team needs.</p></div>
          <Link href="/#contact" className="route-button route-button--light">Talk to our team <span aria-hidden="true">↗</span></Link>
        </section>
      </div>
    </main>
  );
}
