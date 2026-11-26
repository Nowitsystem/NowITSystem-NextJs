"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent, CSSProperties } from "react";
import PlatformLayers from "./PlatformLayers";

const whyHighlights = [
  {
    num: "01",
    tag: "Auto-Triage",
    title: "Automate repetitive routing",
    description: "Automatically classify, assign, and approve requests across IT, HR, and operations without manual inbox triage.",
    depth: "18px",
    driftX: "-8px",
    tilt: "2.4deg",
    delay: "0s",
  },
  {
    num: "02",
    tag: "Rapid Fix",
    title: "Resolve incidents faster",
    description: "Guided workflows, SLA alerts, and root-cause context help teams fix issues early and prevent repeat outages.",
    depth: "58px",
    driftX: "10px",
    tilt: "-2.8deg",
    delay: ".11s",
  },
  {
    num: "03",
    tag: "Live Metrics",
    title: "Real-time SLA visibility",
    description: "Live dashboards and Performance Analytics track backlog, resolution times, and service health in one shared view.",
    depth: "24px",
    driftX: "-6px",
    tilt: "2deg",
    delay: ".22s",
  },
  {
    num: "04",
    tag: "Unified Sync",
    title: "One connected workspace",
    description: "Unite ServiceNow modules with email, identity, monitoring, and HR tools so teams act on the same live data.",
    depth: "64px",
    driftX: "8px",
    tilt: "-2.4deg",
    delay: ".33s",
  },
] as const;

export default function HomeExperience() {
  const [whyReveal, setWhyReveal] = useState<"idle" | "armed" | "visible">("idle");
  const [activeWhyIdx, setActiveWhyIdx] = useState(0);
  const [whyPaused, setWhyPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const whySectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = whySectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPrefersReducedMotion(reducedMotion);
    if (reducedMotion) {
      setWhyReveal("visible");
      section.style.setProperty("--why-p", "0");
      return;
    }

    const computeTargetProgress = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const totalSpan = (viewportHeight + rect.height) * 0.5;
      const centerOffset = rect.top + rect.height * 0.5 - viewportHeight * 0.5;
      return totalSpan > 0 ? Math.max(-1, Math.min(1, centerOffset / totalSpan)) : 0;
    };

    const rectOnMount = section.getBoundingClientRect();
    const alreadyInView = rectOnMount.top < window.innerHeight * 0.78 && rectOnMount.bottom > 80;
    setWhyReveal(alreadyInView ? "visible" : "armed");

    let observer: IntersectionObserver | undefined;
    if (!alreadyInView && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            setWhyReveal("visible");
            observer?.disconnect();
          }
        },
        { threshold: 0.22, rootMargin: "0px 0px -60px 0px" }
      );
      observer.observe(section);
    }

    let currentP = computeTargetProgress();
    let targetP = currentP;
    let frame = 0;
    section.style.setProperty("--why-p", currentP.toFixed(4));

    const tick = () => {
      const diff = targetP - currentP;
      if (Math.abs(diff) < 0.0008) {
        currentP = targetP;
        section.style.setProperty("--why-p", currentP.toFixed(4));
        frame = 0;
        return;
      }
      currentP += diff * 0.14;
      section.style.setProperty("--why-p", currentP.toFixed(4));
      frame = window.requestAnimationFrame(tick);
    };

    const onScrollOrResize = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      targetP = computeTargetProgress();
      if (rect.top < viewportHeight * 0.8 && rect.bottom > 60) {
        setWhyReveal("visible");
        observer?.disconnect();
      }
      if (!frame) frame = window.requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (whyReveal !== "visible" || whyPaused || prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveWhyIdx((prev) => (prev + 1) % whyHighlights.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, [whyReveal, whyPaused, prefersReducedMotion]);

  const handleWhyPointerMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const x = (((event.clientX - rect.left) / rect.width) * 100).toFixed(1);
    const y = (((event.clientY - rect.top) / rect.height) * 100).toFixed(1);
    event.currentTarget.style.setProperty("--mx", `${x}%`);
    event.currentTarget.style.setProperty("--my", `${y}%`);
  };

  return (
    <>
      <section data-why-reveal={whyReveal} id="why-us" ref={whySectionRef}><div className="w">
<div className="why-intro"><div className="why-intro-inner">
<p className="kick">Why NowITSystems</p>
<h2>Less friction.<br />Better workflows.</h2>
<p className="lead">We build ServiceNow workflows around how your teams actually work — cutting manual handoffs, speeding up resolution, and keeping every request visible.</p>
<div aria-label="Workflow highlights" className="why-steps" onMouseEnter={() => setWhyPaused(true)} onMouseLeave={() => setWhyPaused(false)}>
{whyHighlights.map((item, idx) => (
  <button
    aria-pressed={idx === activeWhyIdx}
    className={`why-step${idx === activeWhyIdx ? " is-active" : ""}`}
    key={item.num}
    onClick={() => setActiveWhyIdx(idx)}
    onFocus={() => { setWhyPaused(true); setActiveWhyIdx(idx); }}
    onBlur={() => setWhyPaused(false)}
    type="button"
  >
    <b>{item.num}</b><span>{item.tag}</span>
  </button>
))}
</div>
</div></div>
<div className="bn" id="bn">
{whyHighlights.map((item, idx) => {
  const isActive = idx === activeWhyIdx;
  return (
    <div
      className="why-card-slot"
      key={item.num}
      style={{
        "--p-depth": item.depth,
        "--p-x": item.driftX,
        "--p-tilt": item.tilt,
        "--dl": item.delay,
      } as CSSProperties}
    >
      <article
        className={`why-card${isActive ? " is-active" : ""}${isActive && whyPaused ? " is-paused" : ""}`}
        onMouseEnter={() => { setWhyPaused(true); setActiveWhyIdx(idx); }}
        onMouseLeave={() => setWhyPaused(false)}
        onMouseMove={handleWhyPointerMove}
      >
        <div className="why-card-head">
          <span className="why-num">{item.num}</span>
          <em className="why-tag"><i aria-hidden="true"></i>{item.tag}</em>
        </div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div aria-hidden="true" className="why-card-bar"></div>
      </article>
    </div>
  );
})}
</div>
</div></section><section id="scatter"><div className="w">
<div className="dh rv"><p className="kick">Before & after</p><h2>From scattered requests to one clear queue</h2><p className="lead">Email threads, chats, spreadsheets and phone calls all land in one place, get routed automatically and come out the other side resolved.</p></div>
<div className="ba rv">
<svg aria-label="Scattered requests from email, chat, sheets, phone, notes and tickets pass through ServiceNow and come out as three ordered queues for incidents, requests and cases" role="img" viewBox="48 10 850 354">
<defs>
<linearGradient id="streamGrad" x1="0" x2="1" y1="0" y2="0"><stop offset="0%" stopColor="#8d6cff" stopOpacity="0.4" /><stop offset="60%" stopColor="#6048f0" stopOpacity="0.6" /><stop offset="100%" stopColor="#4f9cff" stopOpacity="0.8" /></linearGradient>
<linearGradient id="outGrad" x1="0" x2="1" y1="0" y2="0"><stop offset="0%" stopColor="#4f9cff" stopOpacity="0.75" /><stop offset="40%" stopColor="#0d9a86" stopOpacity="0.7" /><stop offset="100%" stopColor="#10b981" stopOpacity="0.9" /></linearGradient>
<linearGradient id="snGrad" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stopColor="#8b6eff" /><stop offset="45%" stopColor="#5b3ee6" /><stop offset="100%" stopColor="#2c75e8" /></linearGradient>
<linearGradient id="nodeBorder" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stopColor="rgba(139,110,255,0.7)" /><stop offset="100%" stopColor="rgba(79,156,255,0.4)" /></linearGradient>
<radialGradient id="snAura" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#7a62ff" stopOpacity="0.32" /><stop offset="60%" stopColor="#5b3ee6" stopOpacity="0.1" /><stop offset="100%" stopColor="#5b3ee6" stopOpacity="0" /></radialGradient>
<filter id="nodeShadow" height="160%" width="160%" x="-30%" y="-30%"><feDropShadow dx="0" dy="5" floodColor="#4b34d6" floodOpacity="0.12" stdDeviation="6" /></filter>
<filter id="snShadow" height="180%" width="180%" x="-40%" y="-30%"><feDropShadow dx="0" dy="12" floodColor="#5b3ee6" floodOpacity="0.4" stdDeviation="16" /></filter>
<filter id="cardShadow" height="165%" width="125%" x="-10%" y="-25%"><feDropShadow dx="0" dy="6" floodColor="#0d9a86" floodOpacity="0.12" stdDeviation="8" /></filter>
</defs>
<g className="tang"><path d="M85 75L250 150"></path><path d="M220 45L120 180"></path><path d="M120 180L230 265"></path><path d="M250 150L90 285"></path><path d="M85 75L230 265"></path><path d="M220 45L90 285"></path><path d="M120 180L250 150"></path></g>
<g fill="none" stroke="url(#streamGrad)" strokeLinecap="round" strokeWidth="1.8">
<path d="M85 75C205 75 340 175 415 175" id="s1"></path><path d="M220 45C315 45 355 175 415 175" id="s2"></path><path d="M120 180C240 180 345 175 415 175" id="s3"></path><path d="M250 150C330 150 360 175 415 175" id="s4"></path><path d="M90 285C210 285 345 175 415 175" id="s5"></path><path d="M230 265C320 265 360 175 415 175" id="s6"></path>
</g>
<g>
<circle fill="#8d6cff" r="4.5"><animateMotion dur="3.2s" repeatCount="indefinite"><mpath href="#s1"></mpath></animateMotion></circle>
<circle fill="#6048f0" r="4.5"><animateMotion begin="-.8s" dur="2.6s" repeatCount="indefinite"><mpath href="#s2"></mpath></animateMotion></circle>
<circle fill="#4f9cff" r="4.5"><animateMotion begin="-1.2s" dur="2.4s" repeatCount="indefinite"><mpath href="#s3"></mpath></animateMotion></circle>
<circle fill="#7a62ff" r="4.5"><animateMotion begin="-.4s" dur="2.1s" repeatCount="indefinite"><mpath href="#s4"></mpath></animateMotion></circle>
<circle fill="#6048f0" r="4.5"><animateMotion begin="-1.6s" dur="3s" repeatCount="indefinite"><mpath href="#s5"></mpath></animateMotion></circle>
<circle fill="#4f9cff" r="4.5"><animateMotion begin="-1s" dur="2.3s" repeatCount="indefinite"><mpath href="#s6"></mpath></animateMotion></circle>
</g>
<g fontSize="10.5" fontWeight="700" textAnchor="middle">
<g filter="url(#nodeShadow)" transform="translate(85, 75)">
<circle fill="#fff" r="30" stroke="url(#nodeBorder)" strokeWidth="1.6"></circle>
<g fill="none" stroke="#6048f0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" transform="translate(0, -7)">
<rect fill="rgba(96,72,240,.1)" height="12" rx="2.5" width="17" x="-8.5" y="-6"></rect>
<path d="M-8.5 -4.5L0 2l8.5 -6.5"></path>
</g>
<text fill="#1c194a" stroke="none" y="14">Email</text>
</g>

<g filter="url(#nodeShadow)" transform="translate(220, 45)">
<circle fill="#fff" r="30" stroke="url(#nodeBorder)" strokeWidth="1.6"></circle>
<g fill="none" stroke="#4f46e5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" transform="translate(0, -7)">
<path d="M-7.5 -6h15a2.5 2.5 0 0 1 2.5 2.5v6.5a2.5 2.5 0 0 1-2.5 2.5h-5.5l-4 3.5v-3.5h-5.5a2.5 2.5 0 0 1-2.5-2.5v-6.5a2.5 2.5 0 0 1 2.5-2.5z" fill="rgba(79,70,229,.1)"></path>
<circle cx="-3" cy="-1.5" fill="#4f46e5" r="0.9" stroke="none"></circle>
<circle cx="0" cy="-1.5" fill="#4f46e5" r="0.9" stroke="none"></circle>
<circle cx="3" cy="-1.5" fill="#4f46e5" r="0.9" stroke="none"></circle>
</g>
<text fill="#1c194a" stroke="none" y="14">Chat</text>
</g>

<g filter="url(#nodeShadow)" transform="translate(120, 180)">
<circle fill="#fff" r="30" stroke="url(#nodeBorder)" strokeWidth="1.6"></circle>
<g fill="none" stroke="#0d9a86" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" transform="translate(0, -7)">
<rect fill="rgba(13,154,134,.1)" height="15" rx="2.5" width="15" x="-7.5" y="-7.5"></rect>
<path d="M-7.5 -2.5h15M-7.5 2.5h15M-2.5 -7.5v15"></path>
</g>
<text fill="#1c194a" stroke="none" y="14">Sheets</text>
</g>

<g filter="url(#nodeShadow)" transform="translate(250, 150)">
<circle fill="#fff" r="30" stroke="url(#nodeBorder)" strokeWidth="1.6"></circle>
<g fill="none" stroke="#2563eb" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" transform="translate(0, -7)">
<rect fill="rgba(37,99,235,.1)" height="15" rx="2.5" width="10" x="-5" y="-7.5"></rect>
<line x1="-1.5" x2="1.5" y1="-5" y2="-5"></line>
<circle cx="0" cy="4.2" fill="#2563eb" r="1" stroke="none"></circle>
</g>
<text fill="#1c194a" stroke="none" y="14">Phone</text>
</g>

<g filter="url(#nodeShadow)" transform="translate(90, 285)">
<circle fill="#fff" r="30" stroke="url(#nodeBorder)" strokeWidth="1.6"></circle>
<g fill="none" stroke="#d97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" transform="translate(0, -7)">
<path d="M-6.5 -7.5h8l5 5v8.5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-11.5a2 2 0 0 1 2-2z" fill="rgba(217,119,6,.1)"></path>
<path d="M1.5 -7.5v4.5h4.5"></path>
<line x1="-3.5" x2="2.5" y1="1" y2="1"></line>
<line x1="-3.5" x2="0.5" y1="4.5" y2="4.5"></line>
</g>
<text fill="#1c194a" stroke="none" y="14">Notes</text>
</g>

<g filter="url(#nodeShadow)" transform="translate(230, 265)">
<circle fill="#fff" r="30" stroke="url(#nodeBorder)" strokeWidth="1.6"></circle>
<g fill="none" stroke="#db2777" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" transform="translate(0, -7)">
<path d="M-8 -6h16a2 2 0 0 1 2 2v2.5a2 2 0 0 0 0 4v2.5a2 2 0 0 1-2 2h-16a2 2 0 0 1-2-2v-2.5a2 2 0 0 0 0-4v-2.5a2 2 0 0 1 2-2z" fill="rgba(219,39,119,.1)"></path>
<line strokeDasharray="1.5 2" x1="0" x2="0" y1="-3" y2="4"></line>
</g>
<text fill="#1c194a" stroke="none" y="14">Tickets</text>
</g>
</g>
<circle cx="465" cy="175" fill="url(#snAura)" r="92"></circle>
<circle cx="465" cy="175" fill="none" r="82" stroke="rgba(108,84,244,.3)" strokeDasharray="5 9" strokeWidth="1.4"><animateTransform attributeName="transform" dur="24s" from="0 465 175" repeatCount="indefinite" to="360 465 175" type="rotate"></animateTransform></circle>
<circle cx="465" cy="175" fill="none" r="66" stroke="rgba(13,154,134,.3)" strokeDasharray="3 7" strokeWidth="1.2"><animateTransform attributeName="transform" dur="18s" from="360 465 175" repeatCount="indefinite" to="0 465 175" type="rotate"></animateTransform></circle>
<g filter="url(#snShadow)">
<rect fill="url(#snGrad)" height="100" rx="28" width="100" x="415" y="125"></rect>
<path d="M415 153C415 137.5 427.5 125 443 125h44c15.5 0 28 12.5 28 28-25 9-75 9-100 0z" fill="rgba(255,255,255,.18)"></path>
<path d="M440 160h50M440 175h50M440 190h32" stroke="#fff" strokeLinecap="round" strokeWidth="4.5"></path>
</g>
<g transform="translate(465, 246)">
<rect fill="rgba(108,84,244,.1)" height="20" rx="10" stroke="rgba(108,84,244,.25)" strokeWidth="1" width="112" x="-56" y="-10"></rect>
<text fill="#5a3fe0" fontSize="10" fontWeight="800" letterSpacing="1.4" textAnchor="middle" y="4">SERVICENOW</text>
</g>
<g fill="none" stroke="url(#outGrad)" strokeLinecap="round" strokeWidth="2.2"><path d="M515 175C555 175 545 92 580 92" id="o1"></path><path d="M515 175L580 175" id="o2"></path><path d="M515 175C555 175 545 258 580 258" id="o3"></path></g>
<g fill="#0d9a86">
<circle r="5"><animateMotion dur="2.8s" repeatCount="indefinite"><mpath href="#o1"></mpath></animateMotion><animate attributeName="opacity" dur="2.8s" keyTimes="0;.1;.85;1" repeatCount="indefinite" values="0;1;1;0"></animate></circle>
<circle r="5"><animateMotion begin="-.9s" dur="2.4s" repeatCount="indefinite"><mpath href="#o2"></mpath></animateMotion><animate attributeName="opacity" begin="-.9s" dur="2.4s" keyTimes="0;.1;.85;1" repeatCount="indefinite" values="0;1;1;0"></animate></circle>
<circle r="5"><animateMotion begin="-1.5s" dur="3.1s" repeatCount="indefinite"><mpath href="#o3"></mpath></animateMotion><animate attributeName="opacity" begin="-1.5s" dur="3.1s" keyTimes="0;.1;.85;1" repeatCount="indefinite" values="0;1;1;0"></animate></circle>
</g>
<g filter="url(#cardShadow)">
<rect fill="#fff" height="60" rx="18" stroke="rgba(13,154,134,.3)" strokeWidth="1.2" width="310" x="580" y="62"></rect>
<rect fill="#0d9a86" height="36" rx="2" width="4" x="580" y="74"></rect>
<circle cx="614" cy="92" fill="rgba(13,154,134,.12)" r="17"></circle>
<g fill="none" stroke="#0d9a86" strokeLinecap="round" strokeLinejoin="round" transform="translate(614, 92)"><path d="M0 -8.5L8.5 6.5a1.5 1.5 0 0 1-1.3 2.3H-7.2a1.5 1.5 0 0 1-1.3-2.3z" fill="rgba(13,154,134,.18)" strokeWidth="1.6"></path><path d="M0 -3.5v4.5M0 4.2v.3" stroke="#0d9a86" strokeWidth="1.8"></path></g>
<text fill="#0b5c50" fontSize="14.5" fontWeight="800" x="644" y="87">Incidents</text>
<text fill="#4d6f69" fontSize="11.5" fontWeight="500" x="644" y="104">Restored and closed</text>
<circle cx="850" cy="92" fill="none" r="13" stroke="#0d9a86" strokeWidth="1.5"><animate attributeName="r" begin="0s" dur="2.4s" from="13" repeatCount="indefinite" to="22"></animate><animate attributeName="opacity" begin="0s" dur="2.4s" from=".6" repeatCount="indefinite" to="0"></animate></circle>
<circle cx="850" cy="92" fill="#0d9a86" r="13"></circle>
<path d="M844 92l4 4 8-8" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4"></path>
</g>
<g filter="url(#cardShadow)">
<rect fill="#fff" height="60" rx="18" stroke="rgba(13,154,134,.3)" strokeWidth="1.2" width="310" x="580" y="145"></rect>
<rect fill="#0d9a86" height="36" rx="2" width="4" x="580" y="157"></rect>
<circle cx="614" cy="175" fill="rgba(13,154,134,.12)" r="17"></circle>
<g fill="none" stroke="#0d9a86" strokeLinecap="round" strokeLinejoin="round" transform="translate(614, 175)"><rect fill="rgba(13,154,134,.18)" height="16" rx="2.5" strokeWidth="1.6" width="14" x="-7" y="-7"></rect><path d="M-3 -7v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5" strokeWidth="1.4"></path><path d="M-4 -2l2 2 4.5-4.5" stroke="#0d9a86" strokeWidth="1.8"></path><line strokeWidth="1.5" x1="-3.5" x2="3.5" y1="3.5" y2="3.5"></line></g>
<text fill="#0b5c50" fontSize="14.5" fontWeight="800" x="644" y="170">Requests</text>
<text fill="#4d6f69" fontSize="11.5" fontWeight="500" x="644" y="187">Fulfilled on time</text>
<circle cx="850" cy="175" fill="none" r="13" stroke="#0d9a86" strokeWidth="1.5"><animate attributeName="r" begin=".5s" dur="2.4s" from="13" repeatCount="indefinite" to="22"></animate><animate attributeName="opacity" begin=".5s" dur="2.4s" from=".6" repeatCount="indefinite" to="0"></animate></circle>
<circle cx="850" cy="175" fill="#0d9a86" r="13"></circle>
<path d="M844 175l4 4 8-8" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4"></path>
</g>
<g filter="url(#cardShadow)">
<rect fill="#fff" height="60" rx="18" stroke="rgba(13,154,134,.3)" strokeWidth="1.2" width="310" x="580" y="228"></rect>
<rect fill="#0d9a86" height="36" rx="2" width="4" x="580" y="240"></rect>
<circle cx="614" cy="258" fill="rgba(13,154,134,.12)" r="17"></circle>
<g fill="none" stroke="#0d9a86" strokeLinecap="round" strokeLinejoin="round" transform="translate(614, 258)"><rect fill="rgba(13,154,134,.18)" height="13" rx="2.5" strokeWidth="1.6" width="17" x="-8.5" y="-5"></rect><path d="M-4 -5v-2a1.5 1.5 0 0 1 1.5-1.5h5a1.5 1.5 0 0 1 1.5 1.5v2" strokeWidth="1.4"></path><line strokeWidth="1.3" x1="-8.5" x2="8.5" y1="0.5" y2="0.5"></line><circle cx="0" cy="1.5" fill="#0d9a86" r="1.1" stroke="none"></circle></g>
<text fill="#0b5c50" fontSize="14.5" fontWeight="800" x="644" y="253">Cases</text>
<text fill="#4d6f69" fontSize="11.5" fontWeight="500" x="644" y="270">Resolved with context</text>
<circle cx="850" cy="258" fill="none" r="13" stroke="#0d9a86" strokeWidth="1.5"><animate attributeName="r" begin="1s" dur="2.4s" from="13" repeatCount="indefinite" to="22"></animate><animate attributeName="opacity" begin="1s" dur="2.4s" from=".6" repeatCount="indefinite" to="0"></animate></circle>
<circle cx="850" cy="258" fill="#0d9a86" r="13"></circle>
<path d="M844 258l4 4 8-8" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4"></path>
</g>
<g>
<rect fill="rgba(96,72,240,.08)" height="24" rx="12" stroke="rgba(96,72,240,.22)" width="170" x="75" y="332"></rect>
<circle cx="92" cy="344" fill="#6048f0" r="3.5"></circle>
<text fill="#5a3fe0" fontSize="10.5" fontWeight="800" letterSpacing="1.2" textAnchor="middle" x="166" y="348">BEFORE · SCATTERED</text>
<rect fill="rgba(13,154,134,.08)" height="24" rx="12" stroke="rgba(13,154,134,.22)" width="170" x="650" y="332"></rect>
<circle cx="667" cy="344" fill="#0d9a86" r="3.5"></circle>
<text fill="#0d9a86" fontSize="10.5" fontWeight="800" letterSpacing="1.2" textAnchor="middle" x="741" y="348">AFTER · ONE QUEUE</text>
</g>
</svg>
</div>
<div className="ba-legend"><span><i></i>Requests arrive from every channel</span><span><i></i>Routed, tracked and resolved in one place</span></div>
</div></section><section id="architecture"><div className="w">
<div className="dh rv"><p className="kick">Platform view</p><h2>One platform, four layers working together</h2><p className="lead">Hover the stack or the list to see how each layer connects people, workflows, data and your existing tools.</p></div>
<PlatformLayers />
</div></section>    </>
  );
}
