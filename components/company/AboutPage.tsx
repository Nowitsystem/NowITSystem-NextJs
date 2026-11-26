"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type AboutTab = {
  id: string;
  label: string;
  heading: string;
  description: string;
};

const aboutTabs: AboutTab[] = [
  {
    id: "mission",
    label: "Our Mission",
    heading: "To deliver compelling and innovative solutions.",
    description:
      "Our mission is to enhance the business growth of our customers by delivering reliable solutions that set a global benchmark amongst individuals. We believe in instilling an ownership quotient in every employee’s mind to have a participative approach and to make them feel the success alongside us.",
  },
  {
    id: "vision",
    label: "Our Vision",
    heading: "Driving Impact through Cutting-Edge Solutions.",
    description:
      "Our vision is to be the leading force in ServiceNow implementation, transforming IT service management for organizations. We strive to empower businesses with agile operations, superior user experiences, and sustainable growth through innovative and tailored ServiceNow solutions. Together with our clients, we envision a future where ServiceNow drives digital transformation, enabling organizations to thrive in the dynamic digital landscape.",
  },
  {
    id: "goals",
    label: "Our Goals",
    heading: "Forging our path, serving clients with distinction.",
    description:
      "Our goal at NOW IT Systems for ServiceNow is to be the preferred provider of transformative ServiceNow implementations. We aim to deliver efficient IT service management, seamless digital transformation, and outstanding client satisfaction. Through expertise, innovation, and reliable support, we strive to help organizations achieve their goals and stay ahead in the evolving digital landscape.",
  },
];

const partners = [
  { name: "LinkSquare LLC", location: "Boston, MA", href: "/stories/itsm" },
  { name: "PreMD Solutions LLC", location: "Providence, RI", href: "/stories/csm" },
  { name: "Prowebic", location: "Bangalore, IND", href: "/stories/spm" },
  { name: "Magnetar", location: "Bangalore, IND", href: "/stories/hrsd" },
];

const coreValues = [
  {
    metric: "24/7",
    title: "24x7 Support",
    description: "Convenience in your hands by giving round-the-clock service.",
  },
  {
    metric: "100%",
    title: "100% Transparency",
    description: "We provide your business with the accountability and trust it needs.",
  },
  {
    metric: "03",
    title: "Forward Thinking",
    description:
      "Constantly embracing a progressive mindset amongst the team that reflects in the work we deliver.",
  },
  {
    metric: "04",
    title: "Future Proof",
    description:
      "Superior work delivered today and for tomorrow, minimizing future impact if any.",
  },
];

export default function AboutPage() {
  const [activeTabId, setActiveTabId] = useState<string>("mission");
  const activeTab = aboutTabs.find((tab) => tab.id === activeTabId) ?? aboutTabs[0];

  return (
    <main className="route-page route-page--company route-page--about">
      <div className="route-container">
        <div className="route-banner">
          <h1 id="route-title">About us</h1>
          <nav aria-label="Breadcrumb" className="route-breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="route-breadcrumb__current">
              About Us
            </span>
          </nav>
        </div>

        <section className="route-about-stage" aria-labelledby="about-tab-heading">
          <div className="route-about-tabs" role="tablist" aria-label="About Now IT Systems">
            {aboutTabs.map((tab) => {
              const isSelected = tab.id === activeTab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`about-panel-${tab.id}`}
                  id={`about-tab-${tab.id}`}
                  className={`route-about-tab${isSelected ? " is-active" : ""}`}
                  onClick={() => setActiveTabId(tab.id)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div
            className="route-intro route-intro--about"
            role="tabpanel"
            id={`about-panel-${activeTab.id}`}
            aria-labelledby={`about-tab-${activeTab.id}`}
          >
            <div className="route-intro__media">
              <Image
                src="/images/about-hero.svg"
                alt="Connected ServiceNow teams and workflow delivery"
                width={800}
                height={600}
                priority
                unoptimized
              />
            </div>

            <div className="route-intro__copy">
              <p className="route-eyebrow">
                <span className="route-eyebrow__dot" /> {activeTab.label.toUpperCase()}
              </p>
              <h2 id="about-tab-heading">{activeTab.heading}</h2>
              <p className="route-lead">{activeTab.description}</p>
              <div className="route-actions">
                <Link href="/#contact" className="route-button route-button--primary">
                  Get in touch <span aria-hidden="true">↗</span>
                </Link>
                <Link href="/stories" className="route-button route-button--secondary">
                  Success stories <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="route-partners" aria-labelledby="partners-title">
          <div className="route-section-heading">
            <div>
              <p className="route-kicker">PARTNERS</p>
              <h2 id="partners-title">Trusted by companies around the world.</h2>
            </div>
            <Link href="/stories" className="route-button route-button--secondary">
              Explore client stories <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="route-partner-grid">
            {partners.map((partner) => (
              <Link href={partner.href} className="route-partner-card" key={partner.name}>
                <strong>{partner.name}</strong>
                <span>{partner.location}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="route-capabilities" aria-labelledby="core-value-title">
          <div className="route-section-heading">
            <div>
              <p className="route-kicker">CORE VALUE</p>
              <h2 id="core-value-title">Where business meets empathy and trust.</h2>
            </div>
            <p>
              Our platform and expertise deliver a vast range of solutions — adhering to a single
              and simple-minded approach as it is the key to clarity in our work.
            </p>
          </div>

          <div className="route-capability-grid">
            {coreValues.map((value) => (
              <article className="route-capability" key={value.title}>
                <span className="route-capability__number">{value.metric}</span>
                <span className="route-capability__arrow" aria-hidden="true">
                  ↗
                </span>
                <h3>{value.title}</h3>
                <p className="route-capability__desc">{value.description}</p>
                <div className="route-capability__line" />
              </article>
            ))}
          </div>
        </section>

        <section className="route-cta">
          <div className="route-cta__mark" aria-hidden="true">
            ↗
          </div>
          <div className="route-cta__copy">
            <p className="route-kicker">THE NEXT STEP STARTS HERE</p>
            <h2>Let’s make work flow better.</h2>
            <p>Tell us where your team wants to go next.</p>
          </div>
          <Link href="/#contact" className="route-button route-button--light">
            Contact us <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </div>
    </main>
  );
}
