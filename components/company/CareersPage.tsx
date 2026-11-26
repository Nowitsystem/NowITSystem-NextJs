import Image from "next/image";
import Link from "next/link";

const mailtoResumeHref =
  "mailto:info@nowitsys.com?subject=Resume%20-%20%3C%20Enter%20name%20here%20%3E";

const careerBenefits = [
  {
    title: "Career growth",
    description:
      "We offer clear career progression paths and promote from within whenever possible, giving you the opportunity to take on new challenges and advance in your career.",
  },
  {
    title: "Great culture",
    description:
      "We promote a culture of inclusivity and collaboration, where every team member feels valued and empowered to contribute their unique ideas and perspectives.",
  },
  {
    title: "Flexible hours",
    description:
      "We understand the importance of maintaining a healthy work-life balance, and we prioritize flexibility in our work arrangements for a healthy work-life balance.",
  },
  {
    title: "Transparent Communication",
    description:
      "We value the opinions and ideas of every team member and provide a platform for you to voice your thoughts, and contribute to the continuous improvement of our processes.",
  },
  {
    title: "Employee Recognition",
    description:
      "We have robust employee recognition programs by valuing the hard work of our employees and believe in recognizing and rewarding their achievements.",
  },
  {
    title: "Supportive workspace",
    description:
      "We foster a collaborative team environment that values open communication, mutual respect, and teamwork. We believe that collective intelligence drives innovation.",
  },
];

const openRoles = [
  {
    title: "IT Service Management Developer",
    type: "Full Time",
    description:
      "This role will be responsible for designing, developing, and implementing ServiceNow solutions that support our clients' IT Service Management (ITSM) needs.",
    href: "mailto:info@nowitsys.com?subject=Resume%20-%20IT%20Service%20Management%20Developer",
  },
  {
    title: "ServiceNow Implementation Specialist (ITSM, ITAM, SPM)",
    type: "Full Time",
    description:
      "Leading teams of Developers to implement or maintain ServiceNow instances. Completing detailed documentation for workflows and services implemented within ServiceNow.",
    href: "mailto:info@nowitsys.com?subject=Resume%20-%20ServiceNow%20Implementation%20Specialist",
  },
  {
    title: "ServiceNow Integrations Specialist",
    type: "Contract",
    description:
      "As a ServiceNow Integration Specialist, you will primarily be leading and performing both business/value analysis and technical integration work surrounding ServiceNow applications.",
    href: "mailto:info@nowitsys.com?subject=Resume%20-%20ServiceNow%20Integrations%20Specialist",
  },
  {
    title: "IT Operations Management Developer",
    type: "Freelancer",
    description:
      "Responsible for managing the ServiceNow platform that an organization uses to manage its operations. This role involves development and implementation of ServiceNow solutions that improve IT operations efficiency and effectiveness, and administering the configuration management process to ensure CMDB data integrity.",
    href: "mailto:info@nowitsys.com?subject=Resume%20-%20IT%20Operations%20Management%20Developer",
  },
];

export default function CareersPage() {
  return (
    <main className="route-page route-page--company route-page--careers">
      <div className="route-container">
        <div className="route-banner">
          <h1 id="route-title">Career</h1>
          <nav aria-label="Breadcrumb" className="route-breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="route-breadcrumb__current">
              Career
            </span>
          </nav>
        </div>

        <section className="route-intro" aria-labelledby="career-intro-title">
          <div className="route-intro__media">
            <Image
              src="/images/careers-hero.svg"
              alt="Collaborative ServiceNow team and career growth illustration"
              width={800}
              height={600}
              priority
              unoptimized
            />
          </div>
          <div className="route-intro__copy">
            <p className="route-eyebrow">
              <span className="route-eyebrow__dot" /> CAREER
            </p>
            <h2 id="career-intro-title">We’re leading the way in revolutionizing solutions.</h2>
            <p className="route-lead">
              We welcome curious builders, architects, and problem-solvers who want to craft
              thoughtful ServiceNow workflows in a collaborative environment.
            </p>
            <div className="route-actions">
              <a href={mailtoResumeHref} className="route-button route-button--primary">
                Join our team <span aria-hidden="true">↗</span>
              </a>
              <a href="#job-list" className="route-button route-button--secondary">
                Explore open roles <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        <section className="route-capabilities" aria-labelledby="career-benefits-title">
          <div className="route-section-heading">
            <div>
              <p className="route-kicker">BENEFIT</p>
              <h2 id="career-benefits-title">The benefits of working at Now IT Systems.</h2>
            </div>
            <a href={mailtoResumeHref} className="route-button route-button--primary">
              Join our team <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="route-capability-grid">
            {careerBenefits.map((benefit, index) => (
              <article className="route-capability" key={benefit.title}>
                <span className="route-capability__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="route-capability__arrow" aria-hidden="true">
                  ↗
                </span>
                <h3>{benefit.title}</h3>
                <p className="route-capability__desc">{benefit.description}</p>
                <div className="route-capability__line" />
              </article>
            ))}
          </div>
        </section>

        <section className="route-career-testimonial" aria-labelledby="career-testimonials-title">
          <div className="route-career-testimonial__copy">
            <p className="route-kicker">TESTIMONIALS</p>
            <h2 id="career-testimonials-title">What our clients said about us.</h2>
            <p>
              Discover what our clients have to say about their experience with our services and
              witness the impact our solutions have made.
            </p>
            <div className="route-actions">
              <Link href="/#contact" className="route-button route-button--primary">
                Get in touch <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className="route-career-testimonial__card">
            <span aria-hidden="true" className="route-story-quote__mark">
              “
            </span>
            <p className="route-career-testimonial__quote">
              The team exhibited exceptional responsiveness, comprehending our distinct
              requirements, and tailoring the module to perfectly align with our needs. We are
              extremely satisfied with the results.
            </p>
            <div className="route-career-testimonial__author">
              <span className="route-career-testimonial__avatar">CR</span>
              <div>
                <strong>Christopher R</strong>
                <small>PreMD Solutions LLC</small>
              </div>
            </div>
          </div>
        </section>

        <section className="route-jobs" id="job-list" aria-labelledby="job-list-title">
          <div className="route-section-heading">
            <div>
              <p className="route-kicker">JOB LIST</p>
              <h2 id="job-list-title">Join our big family</h2>
            </div>
            <p>Open roles across ServiceNow development, implementation, and integrations.</p>
          </div>

          <div className="route-job-grid">
            {openRoles.map((role) => (
              <article className="route-job-card" key={role.title}>
                <div className="route-job-card__top">
                  <span className="route-job-badge">{role.type}</span>
                </div>
                <h3>{role.title}</h3>
                <p>{role.description}</p>
                <div className="route-job-card__foot">
                  <a href={role.href} className="route-button route-button--primary">
                    Apply now <span aria-hidden="true">↗</span>
                  </a>
                </div>
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
            <h2>Bring your curiosity.</h2>
            <p>Tell us what you love building and how you want to grow.</p>
          </div>
          <a href={mailtoResumeHref} className="route-button route-button--light">
            Contact careers <span aria-hidden="true">↗</span>
          </a>
        </section>
      </div>
    </main>
  );
}
