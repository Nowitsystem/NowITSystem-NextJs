import Image from "next/image";
import Link from "next/link";
import StoriesFaq from "@/components/stories/StoriesFaq";
import { successStories } from "@/lib/stories";

export default function StoriesPage() {
  const featuredStories = successStories.filter((story) => story.featured);
  const moreStories = successStories.filter((story) => !story.featured);

  return (
    <main className="route-page route-page--stories">
      <div className="route-container">
        <div className="route-banner">
          <h1 id="route-title">Success Stories</h1>
          <nav aria-label="Breadcrumb" className="route-breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="route-breadcrumb__current">
              Success Stories
            </span>
          </nav>
        </div>

        <section className="route-stories-section" aria-labelledby="featured-stories-title">
          <div className="route-section-heading">
            <div>
              <p className="route-kicker">CLIENT OUTCOMES</p>
              <h2 id="featured-stories-title">Better workflows. Measurable outcomes.</h2>
            </div>
            <p>
              Explore how ServiceNow implementations help teams automate manual work, improve
              visibility, and elevate service experiences.
            </p>
          </div>

          <div className="route-story-grid">
            {featuredStories.map((story) => (
              <Link href={`/stories/${story.slug}`} className="route-story-card" key={story.slug}>
                <div className="route-story-card__media">
                  <Image
                    src={story.image}
                    alt={`${story.title} illustration`}
                    width={800}
                    height={600}
                    unoptimized
                  />
                </div>
                <div className="route-story-card__body">
                  <div className="route-story-card__meta">
                    <span className="route-story-badge">{story.badge}</span>
                    <time>{story.date}</time>
                  </div>
                  <h3>{story.title}</h3>
                  <div className="route-story-card__foot">
                    <div>
                      <strong>{story.client}</strong>
                      <small>{story.location}</small>
                    </div>
                    <span className="route-story-card__read">{story.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="route-related" aria-labelledby="more-stories-title">
          <div className="route-section-heading">
            <div>
              <p className="route-kicker">CASE STUDIES</p>
              <h2 id="more-stories-title">Read similar stories</h2>
            </div>
            <Link href="/#contact" className="route-button route-button--primary">
              Start a conversation <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="route-related-grid">
            {moreStories.map((story) => (
              <Link href={`/stories/${story.slug}`} className="route-related-card" key={story.slug}>
                <div className="route-story-card__meta">
                  <span className="route-story-badge">{story.badge}</span>
                  <span>{story.readTime}</span>
                </div>
                <h3>{story.title}</h3>
                <p>{story.subtitle}</p>
                <div className="route-story-card__foot">
                  <div>
                    <strong>{story.client}</strong>
                    <small>{story.location}</small>
                  </div>
                  <span className="route-related-card__link">
                    Read <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <StoriesFaq />

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
