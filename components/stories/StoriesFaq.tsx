import { storyFaqs } from "@/lib/stories";

export default function StoriesFaq() {
  return (
    <section className="route-faq" id="faq" aria-labelledby="stories-faq-title">
      <div className="route-faq__head">
        <p className="route-kicker">QUESTIONS</p>
        <h2 id="stories-faq-title">In case you missed anything.</h2>
        <p>
          We’ve compiled a list of frequently asked questions to help you get the information you
          need without any hassle.
        </p>
      </div>
      <div className="route-faq__list">
        {storyFaqs.map((faq, index) => (
          <details className="route-faq__item" key={faq.question} open={index === 0}>
            <summary>
              <span className="route-faq__index">{String(index + 1).padStart(2, "0")}</span>
              <span>{faq.question}</span>
            </summary>
            <div className="route-faq__body">
              {faq.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {faq.bullets ? (
                <ul>
                  {faq.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
