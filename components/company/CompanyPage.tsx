import Link from "next/link";
import type { CompanyPage as CompanyPageData } from "@/lib/company-pages";

export default function CompanyPage({ page }: { page: CompanyPageData }) {
  const isCareers = page.slug === "careers";
  const isStories = page.slug === "stories";
  const sectionTitle = isCareers ? "Grow your craft. Make an impact." : isStories ? "Progress that teams can feel." : "A partner for better work.";
  return (
    <main className={`route-page route-page--company route-page--${page.slug}`}>
      <div className="route-container">
        <Link href="/" className="route-back"><span aria-hidden="true">←</span> Back to home</Link>
        <section className="route-hero route-hero--company" aria-labelledby="route-title">
          <div className="route-hero__copy">
            <p className="route-eyebrow"><span className="route-eyebrow__dot" /> {page.eyebrow}</p>
            <h1 id="route-title">{page.title}</h1>
            <p className="route-lead">{page.description}</p>
            <div className="route-actions">
              <Link href={isCareers ? "mailto:careers@nowitsys.com" : "/#contact"} className="route-button route-button--primary">{isCareers ? "Get in touch" : "Start a conversation"} <span aria-hidden="true">↗</span></Link>
              <Link href="/#services" className="route-button route-button--secondary">Explore our services <span aria-hidden="true">↓</span></Link>
            </div>
          </div>
          <aside className="route-visual route-visual--company" aria-label="Our approach">
            <div className="route-visual__orb route-visual__orb--one" /><div className="route-visual__orb route-visual__orb--two" />
            <div className="route-visual__topline"><span className="route-status-dot" /> OUR APPROACH <span className="route-visual__live">PEOPLE FIRST</span></div>
            <div className="route-company-graphic"><div className="route-company-graphic__ring route-company-graphic__ring--outer"/><div className="route-company-graphic__ring route-company-graphic__ring--inner"/><div className="route-company-graphic__center">N<span>+</span></div><span className="route-company-graphic__node route-company-graphic__node--one">01</span><span className="route-company-graphic__node route-company-graphic__node--two">02</span><span className="route-company-graphic__node route-company-graphic__node--three">03</span></div>
            <div className="route-visual__foot"><span>PEOPLE · PROCESS · TECHNOLOGY</span><span>EST. ON TRUST</span></div>
          </aside>
        </section>
        <section className="route-capabilities" aria-labelledby="company-highlights-title">
          <div className="route-section-heading"><div><p className="route-kicker">{isCareers ? "LIFE AT NOWITSYSTEMS" : isStories ? "THE DIFFERENCE" : "WHY NOWITSYSTEMS"}</p><h2 id="company-highlights-title">{sectionTitle}</h2></div><p>Clear thinking, connected technology and a practical focus on outcomes that matter.</p></div>
          <div className="route-capability-grid">
            {page.highlights.map((item, index) => <article className="route-capability" key={item}><span className="route-capability__number">{String(index + 1).padStart(2, "0")}</span><span className="route-capability__arrow" aria-hidden="true">↗</span><h3>{item}</h3><div className="route-capability__line" /></article>)}
          </div>
        </section>
        <section className="route-cta"><div className="route-cta__mark" aria-hidden="true">↗</div><div className="route-cta__copy"><p className="route-kicker">THE NEXT STEP STARTS HERE</p><h2>{isCareers ? "Bring your curiosity." : "Let’s make work flow better."}</h2><p>{isCareers ? "Tell us what you love building and how you want to grow." : "Tell us where your team wants to go next."}</p></div><Link href={isCareers ? "mailto:careers@nowitsys.com" : "/#contact"} className="route-button route-button--light">{isCareers ? "Contact careers" : "Contact us"} <span aria-hidden="true">↗</span></Link></section>
      </div>
    </main>
  );
}
