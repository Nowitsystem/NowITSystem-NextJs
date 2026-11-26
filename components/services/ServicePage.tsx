import Image from "next/image";
import Link from "next/link";
import { getService, type Service } from "@/lib/services";

export default function ServicePage({ service }: { service: Service }) {
  const relatedServices = service.relatedSlugs
    .map((slug) => getService(slug))
    .filter((item): item is Service => Boolean(item));

  return (
    <main className="route-page route-page--service">
      <div className="route-container">
        <div className="route-banner">
          <h1 id="route-title">{service.title}</h1>
          <nav aria-label="Breadcrumb" className="route-breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/#services">Services</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="route-breadcrumb__current">{service.title}</span>
          </nav>
        </div>

        <section className="route-intro" aria-labelledby="intro-title">
          <div className="route-intro__media">
            <Image
              src={service.image}
              alt={`${service.title} platform overview illustration`}
              width={800}
              height={600}
              priority
              unoptimized={service.image.endsWith(".svg")}
            />
          </div>
          <div className="route-intro__copy">
            <p className="route-eyebrow">
              <span className="route-eyebrow__dot" /> NOW IT SYSTEMS <span className="route-eyebrow__separator">/</span> SERVICENOW SOLUTIONS
            </p>
            <h2 id="intro-title">{service.title}</h2>
            <p className="route-lead">{service.description}</p>
            <div className="route-actions">
              <Link href="/#contact" className="route-button route-button--primary">
                Discuss your requirements <span aria-hidden="true">↗</span>
              </Link>
              <a href="#benefits" className="route-button route-button--secondary">
                Explore key benefits <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        <section className="route-editorial" id="overview" aria-labelledby="overview-title">
          <div className="route-editorial__block">
            <h2 id="overview-title">{service.overviewTitle}</h2>
            <div className="route-editorial__prose">
              {service.overviewParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="route-editorial__block route-benefits" id="benefits" aria-labelledby="benefits-title">
            <h3 id="benefits-title">Key Benefits:</h3>
            <ul className="route-benefit-list">
              {service.benefits.map((benefit) => (
                <li key={benefit.title ?? benefit.description.slice(0, 32)}>
                  {benefit.title ? <strong>{benefit.title}: </strong> : null}
                  <span>{benefit.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {relatedServices.length > 0 ? (
          <section className="route-related" aria-labelledby="related-title">
            <div className="route-section-heading">
              <div>
                <p className="route-kicker">SERVICES</p>
                <h2 id="related-title">Some of similar services.</h2>
              </div>
              <Link href="/#services" className="route-button route-button--primary">
                Explore More
              </Link>
            </div>
            <div className="route-related-grid">
              {relatedServices.map((related) => (
                <Link href={`/service/${related.slug}`} className="route-related-card" key={related.slug}>
                  <h3>{related.title}</h3>
                  <p>{related.shortSummary}</p>
                  <span className="route-related-card__link">
                    View Service <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <section className="route-cta">
          <div className="route-cta__mark" aria-hidden="true">↗</div>
          <div className="route-cta__copy">
            <p className="route-kicker">LET’S BUILD BETTER WORKFLOWS</p>
            <h2>Ready to make work flow?</h2>
            <p>Let’s discuss your ServiceNow roadmap and the outcomes your team needs.</p>
          </div>
          <Link href="/#contact" className="route-button route-button--light">
            Talk to our team <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </div>
    </main>
  );
}
