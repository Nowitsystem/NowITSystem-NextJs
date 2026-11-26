"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import type { MouseEvent, TouchEvent, KeyboardEvent } from "react";
import Link from "next/link";

interface ServiceCardData {
  slug: string;
  code: string;
  title: string;
  desc: string;
}

interface ServiceSlideData {
  id: string;
  category: string;
  badge: string;
  featured: ServiceCardData;
  companion: ServiceCardData;
  grid: ServiceCardData[];
}

const SLIDE_DURATION = 6000; // 6 seconds per slide, like Apple website carousels

const SLIDES: ServiceSlideData[] = [
  {
    id: "core-it",
    category: "Core IT & Security",
    badge: "01",
    featured: {
      slug: "itsm",
      code: "ITSM",
      title: "IT Service Management",
      desc: "A strategic approach to IT management focused on delivering value to customers, with clearly defined roles and responsibilities.",
    },
    companion: {
      slug: "itom",
      code: "ITOM",
      title: "IT Operations Management",
      desc: "Keep services available, performing, and efficient with proactive observability.",
    },
    grid: [
      {
        slug: "itam",
        code: "ITAM",
        title: "IT Asset Management",
        desc: "Deploy, track, and maintain hardware and software assets across life cycles.",
      },
      {
        slug: "irm",
        code: "IRM",
        title: "Integrated Risk Management",
        desc: "Manage enterprise risks, automate internal controls, and stay audit-ready.",
      },
      {
        slug: "secops",
        code: "SecOps",
        title: "Security Operations",
        desc: "Detect, prioritize, and respond to threats faster with contextual automation.",
      },
      {
        slug: "hrsd",
        code: "HRSD",
        title: "HR Service Delivery",
        desc: "Simple, consistent, and connected digital support for employees.",
      },
    ],
  },
  {
    id: "workflows-apps",
    category: "Workflows & Platform",
    badge: "02",
    featured: {
      slug: "csm",
      code: "CSM",
      title: "Customer Service Management",
      desc: "Resolve customer issues with connected workflows, automated case management, and seamless cross-team resolution.",
    },
    companion: {
      slug: "fsm",
      code: "FSM",
      title: "Field Service Management",
      desc: "Dispatch, coordinate, and track work on site with mobile technician workflows.",
    },
    grid: [
      {
        slug: "pa",
        code: "PA",
        title: "Performance Analytics",
        desc: "Turn operational data into real-time role-based indicators and dashboards.",
      },
      {
        slug: "spm",
        code: "SPM",
        title: "Strategic Portfolio Management",
        desc: "Plan and prioritise strategic investments with roadmaps and capacity insight.",
      },
      {
        slug: "app-engine",
        code: "App Engine",
        title: "App Engine",
        desc: "Build governed low-code applications that digitize manual business processes.",
      },
      {
        slug: "now-mobile",
        code: "NOW Mobile",
        title: "NOW Mobile",
        desc: "Extend modern employee and service workflows to every mobile device.",
      },
    ],
  },
];

export default function HomeServicesSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const elapsedRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  const totalSlides = SLIDES.length;

  const goToSlide = useCallback((index: number) => {
    setActiveSlide(index);
    elapsedRef.current = 0;
    startTimeRef.current = Date.now();
    setProgress(0);
  }, []);

  const goToPrev = useCallback(() => {
    setActiveSlide((prev) => {
      const nextIdx = prev > 0 ? prev - 1 : totalSlides - 1;
      elapsedRef.current = 0;
      startTimeRef.current = Date.now();
      setProgress(0);
      return nextIdx;
    });
  }, [totalSlides]);

  const goToNext = useCallback(() => {
    setActiveSlide((prev) => {
      const nextIdx = prev < totalSlides - 1 ? prev + 1 : 0;
      elapsedRef.current = 0;
      startTimeRef.current = Date.now();
      setProgress(0);
      return nextIdx;
    });
  }, [totalSlides]);

  // Reduced motion detection
  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setIsPlaying(false);
    }
    const onChange = () => {
      if (media.matches) setIsPlaying(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  // Window visibility change
  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.hidden) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      } else {
        startTimeRef.current = Date.now() - elapsedRef.current;
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  // Apple-style smooth RAF progression loop
  useEffect(() => {
    if (!isPlaying || isHovered) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    startTimeRef.current = Date.now() - elapsedRef.current;

    const tick = () => {
      const now = Date.now();
      const elapsed = now - startTimeRef.current;
      elapsedRef.current = elapsed;
      const pct = Math.min(100, (elapsed / SLIDE_DURATION) * 100);
      setProgress(pct);

      if (elapsed >= SLIDE_DURATION) {
        elapsedRef.current = 0;
        setProgress(0);
        setActiveSlide((prev) => (prev + 1) % totalSlides);
      } else {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [activeSlide, isPlaying, isHovered, totalSlides]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goToPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goToNext();
    } else if (e.key === " ") {
      e.preventDefault();
      setIsPlaying((prev) => !prev);
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    touchStartX.current = null;
  };

  const handlePointerMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mx", `${x.toFixed(1)}%`);
    card.style.setProperty("--my", `${y.toFixed(1)}%`);
  };

  return (
    <section
      id="services"
      className="services-viewport-section"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="ServiceNow Solutions Carousel"
    >
      <div className="w services-container">
        {/* Header & Controls bar */}
        <div className="services-head">
          <div className="services-head-copy">
            <h2 className="services-title">ServiceNow solutions built for your business</h2>
            <p className="lead services-lead">
              Collaborate effortlessly and achieve efficient outcomes for everyone.
            </p>
          </div>

          <div className="services-controls" role="toolbar" aria-label="Solutions carousel controls">
            <div className="services-tabs" role="tablist">
              {SLIDES.map((slide, idx) => {
                const isActive = activeSlide === idx;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`services-tab-btn ${isActive ? "is-active" : ""}`}
                    onClick={() => goToSlide(idx)}
                  >
                    {isActive && (
                      <span
                        className="services-tab-progress"
                        style={{ width: `${progress}%` }}
                        aria-hidden="true"
                      />
                    )}
                    <span className="services-tab-num">{slide.badge}</span>
                    <span className="services-tab-name">{slide.category}</span>
                  </button>
                );
              })}
            </div>

            <div className="services-nav-group">
              <span className="services-counter" aria-live="polite">
                <b>0{activeSlide + 1}</b> / 0{totalSlides}
              </span>
              <button
                type="button"
                className="services-nav-arrow"
                onClick={goToPrev}
                aria-label="Previous solutions slide"
              >
                ←
              </button>
              <button
                type="button"
                className="services-nav-arrow"
                onClick={goToNext}
                aria-label="Next solutions slide"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Slide Track with Apple-style Fluid Transition */}
        <div
          className="services-slider-stage"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="services-track"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {SLIDES.map((slide, sIdx) => {
              const isCurrent = sIdx === activeSlide;
              return (
                <div
                  key={slide.id}
                  className={`services-slide ${isCurrent ? "is-active" : ""}`}
                  aria-hidden={!isCurrent}
                >
                  {/* Row 1: Featured (8 cols) + Companion (4 cols) */}
                  <div className="services-row services-row--top">
                    <Link
                      href={`/service/${slide.featured.slug}`}
                      className="services-card services-card--featured"
                      onMouseMove={handlePointerMove}
                      aria-label={`Learn more about ${slide.featured.title}`}
                    >
                      <div className="services-card-top">
                        <b className="services-code">{slide.featured.code}</b>
                        <span className="services-action-badge">
                          <span>Explore service</span>
                          <i aria-hidden="true">↗</i>
                        </span>
                      </div>
                      <div className="services-card-body">
                        <h3>{slide.featured.title}</h3>
                        <p>{slide.featured.desc}</p>
                      </div>
                    </Link>

                    <Link
                      href={`/service/${slide.companion.slug}`}
                      className="services-card services-card--companion"
                      onMouseMove={handlePointerMove}
                      aria-label={`Learn more about ${slide.companion.title}`}
                    >
                      <div className="services-card-top">
                        <b className="services-code">{slide.companion.code}</b>
                        <span className="services-action-icon" aria-hidden="true">↗</span>
                      </div>
                      <div className="services-card-body">
                        <h3>{slide.companion.title}</h3>
                        <p>{slide.companion.desc}</p>
                      </div>
                    </Link>
                  </div>

                  {/* Row 2: 4 Standard Cards (3 cols each) */}
                  <div className="services-row services-row--bottom">
                    {slide.grid.map((card) => (
                      <Link
                        key={card.slug}
                        href={`/service/${card.slug}`}
                        className="services-card services-card--standard"
                        onMouseMove={handlePointerMove}
                        aria-label={`Learn more about ${card.title}`}
                      >
                        <div className="services-card-top">
                          <b className="services-code">{card.code}</b>
                          <span className="services-action-icon" aria-hidden="true">↗</span>
                        </div>
                        <div className="services-card-body">
                          <h3>{card.title}</h3>
                          <p>{card.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Apple-style Pagination & Play/Pause */}
        <div className="services-foot">
          <div className="services-apple-controls">
            <button
              type="button"
              className="services-play-btn"
              onClick={() => setIsPlaying((prev) => !prev)}
              aria-label={isPlaying ? "Pause automatic slider" : "Play automatic slider"}
              title={isPlaying ? "Pause slider" : "Play slider"}
            >
              {isPlaying ? (
                <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" aria-hidden="true">
                  <rect x="3" y="2" width="3.5" height="12" rx="1.2" />
                  <rect x="9.5" y="2" width="3.5" height="12" rx="1.2" />
                </svg>
              ) : (
                <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" aria-hidden="true">
                  <path d="M4.5 2.8a1 1 0 0 1 1.5-.86l8 4.7a1 1 0 0 1 0 1.72l-8 4.7a1 1 0 0 1-1.5-.86V2.8z" />
                </svg>
              )}
            </button>

            <div className="services-dots" role="group" aria-label="Slide dots navigation">
              {SLIDES.map((slide, idx) => {
                const isActive = activeSlide === idx;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    className={`services-dot ${isActive ? "is-active" : ""}`}
                    aria-label={`Go to slide ${idx + 1}: ${slide.category}`}
                    onClick={() => goToSlide(idx)}
                  >
                    {isActive && (
                      <span
                        className="services-dot-fill"
                        style={{ width: `${progress}%` }}
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <p className="services-hint">
            <span>✳</span> Auto-playing solutions · Hover any card to pause · Click to open service
          </p>
        </div>
      </div>
    </section>
  );
}
