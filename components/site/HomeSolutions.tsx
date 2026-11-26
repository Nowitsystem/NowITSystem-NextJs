import HomeServicesSlider from "@/components/site/HomeServicesSlider";

export default function HomeSolutions() {
  return (
    <>
      <HomeServicesSlider />
      <section id="about"><div className="w">
<h2 className="rv" style={{ "maxWidth": "18ch" }}>Where business meets empathy and trust</h2>
<p className="lead rv">Unlock the potential of your business with innovative, customized solutions that streamline operations and drive success.</p>
<div className="wy">
<div className="rv"><i>01</i><h3>Future proof</h3><p>Work that is superior today and for tomorrow, minimizing future impact.</p></div>
<div className="rv" style={{ "--dl": ".08s" } as import("react").CSSProperties}><i>02</i><h3>Single-minded focus</h3><p>One simple approach, because it is the key to clarity in our work.</p></div>
<div className="rv" style={{ "--dl": ".16s" } as import("react").CSSProperties}><i>03</i><h3>Forward thinking</h3><p>A progressive mindset that shows in everything we deliver.</p></div>
<div className="rv"><i>100%</i><h3>Transparency</h3><p>The accountability and trust your business needs.</p></div>
<div className="rv" style={{ "--dl": ".08s" } as import("react").CSSProperties}><i>$</i><h3>Financial intelligence</h3><p>Analysing each project to keep the work affordable.</p></div>
<div className="rv" style={{ "--dl": ".16s" } as import("react").CSSProperties}><i>24/7</i><h3>Support</h3><p>Round-the-clock service, right in your hands.</p></div>
</div>
</div></section><section style={{ "paddingTop": "0" }}><div className="w q">
<div className="rv"><h2>Our solutions provide clarity and control</h2><p className="lead">Explore success stories to see how our solutions work in practice and how we approach each project.</p><div className="cta"><a className="btn p mag" href="#contact">Talk to our team</a></div></div>
<div aria-label="Client feedback" aria-roledescription="carousel" className="feedback-carousel rv" id="feedback-carousel">
<div aria-live="polite" className="feedback-track">
<blockquote className="feedback-slide is-active"><span aria-hidden="true" className="quote-mark">“</span><p className="feedback-quote">The team exhibited exceptional responsiveness, comprehending our distinct requirements, and tailoring the module to perfectly align with our needs. We are extremely satisfied with the results.</p><div className="who"><span>CR</span><div>Christopher R<small>PreMD Solutions LLC</small></div></div></blockquote>
<blockquote className="feedback-slide"><span aria-hidden="true" className="quote-mark">“</span><p className="feedback-quote">Explore how a unified workflow can make day-to-day service delivery clearer, more consistent, and easier to manage.</p><div className="who"><span>LS</span><div>Client success story<small>LinkSquare LLC</small></div></div></blockquote>
<blockquote className="feedback-slide"><span aria-hidden="true" className="quote-mark">“</span><p className="feedback-quote">Discover how visibility and streamlined processes can help teams respond faster and keep work moving smoothly.</p><div className="who"><span>PW</span><div>Client success story<small>Prowebic</small></div></div></blockquote>
</div>
<div className="feedback-controls"><div aria-label="Choose feedback" className="feedback-dots" role="group"><button aria-label="Show feedback 1" aria-pressed="true" className="feedback-dot is-active" type="button"></button><button aria-label="Show feedback 2" aria-pressed="false" className="feedback-dot" type="button"></button><button aria-label="Show feedback 3" aria-pressed="false" className="feedback-dot" type="button"></button></div><div className="feedback-nav"><span className="feedback-count"><b id="feedback-current">01</b> / 03</span><button aria-label="Previous feedback" className="feedback-arrow" id="feedback-prev" type="button">←</button><button aria-label="Next feedback" className="feedback-arrow" id="feedback-next" type="button">→</button></div></div>
</div>
</div></section>
    </>
  );
}
