import Image from "next/image";
import Link from "next/link";
import StoriesFaq from "@/components/stories/StoriesFaq";
import { getSuccessStory, type SuccessStory } from "@/lib/stories";

export default function StoryDetailPage({ story }: { story: SuccessStory }) {
  const similarStories = story.similarSlugs
    .map((slug) => getSuccessStory(slug))
    .filter((item): item is SuccessStory => Boolean(item));

  return (
    <main className="route-page route-page--story">
      <div className="route-container">
        <div className="route-banner">
          <h1 id="route-title">{story.bannerTitle}</h1>
          <nav aria-label="Breadcrumb" className="route-breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/stories">Success Stories</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="route-breadcrumb__current">
              {story.bannerTitle}
            </span>
          </nav>
        </div>

        <section className="route-intro" aria-labelledby="story-intro-title">
          <div className="route-intro__media">
            <Image
              src={story.image}
              alt={`${story.title} illustration`}
              width={800}
              height={600}
              priority
              unoptimized
            />
          </div>

          <div className="route-intro__copy">
            <div className="route-story-card__meta route-story-card__meta--hero">
              <span className="route-story-badge">{story.badge}</span>
              <span>{story.date}</span>
              <span aria-hidden="true">·</span>
              <span>{story.readTime}</span>
            </div>
            <h2 id="story-intro-title">{story.title}</h2>
            <p className="route-lead">{story.subtitle}</p>
            <div className="route-story-client-pill">
              <strong>{story.client}</strong>
              <span aria-hidden="true">·</span>
              <span>{story.location}</span>
            </div>
            <div className="route-actions">
              <a href="#story-body" className="route-button route-button--primary">
                Read full story <span aria-hidden="true">↓</span>
              </a>
              <Link href="/#contact" className="route-button route-button--secondary">
                Discuss your project <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>

        <article className="route-editorial route-story-article" id="story-body">
          <div className="route-editorial__block">
            <h2>Business Challenge</h2>
            <div className="route-editorial__prose">
              {story.challenge.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="route-editorial__block route-benefits">
            <h2>Solution</h2>
            <div className="route-editorial__prose">
              {story.solution.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <blockquote className="route-story-quote">
            <span aria-hidden="true" className="route-story-quote__mark">
              “
            </span>
            <p>{story.quote}</p>
          </blockquote>

          <div className="route-editorial__block route-benefits">
            <h2>Conclusion</h2>
            <div className="route-editorial__prose">
              {story.conclusion.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="route-story-footer">
            <div>
              <span className="route-kicker">CLIENT PARTNER</span>
              <strong>{story.client}</strong>
            </div>
            <span className="route-story-location">{story.location}</span>
          </div>
        </article>

        {similarStories.length > 0 ? (
          <section className="route-related" aria-labelledby="similar-stories-title">
            <div className="route-section-heading">
              <div>
                <p className="route-kicker">SUCCESS STORIES</p>
                <h2 id="similar-stories-title">Read similar stories</h2>
              </div>
              <Link href="/stories" className="route-button route-button--primary">
                All Success Stories
              </Link>
            </div>
            <div className="route-related-grid route-related-grid--four">
              {similarStories.map((item) => (
                <Link href={`/stories/${item.slug}`} className="route-related-card" key={item.slug}>
                  <div className="route-story-card__meta">
                    <span className="route-story-badge">{item.badge}</span>
                    <span>{item.readTime}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                  <div className="route-story-card__foot">
                    <div>
                      <strong>{item.client}</strong>
                      <small>{item.location}</small>
                    </div>
                    <span className="route-related-card__link">
                      Read <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <StoriesFaq />

        <section className="route-cta">
          <div className="route-cta__mark" aria-hidden="true">
            ↗
          </div>
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
