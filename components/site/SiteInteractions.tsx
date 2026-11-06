"use client";

import { useEffect } from "react";

/**
 * Small, lifecycle-safe interactions shared by the site.
 * Visual sections remain React components; this file only coordinates
 * page-level browser behavior and cleans up every listener/observer.
 */
export default function SiteInteractions() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const progress = document.getElementById("pg");
    const backToTop = document.getElementById("up");
    let frame = 0;

    const updateScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const percentage = scrollable > 0 ? window.scrollY / scrollable : 0;
        progress?.style.setProperty("transform", `scaleX(${percentage})`);
        backToTop?.classList.toggle("show", window.scrollY > 700);
      });
    };

    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();

    const goTop = () => window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "auto" : "smooth",
    });
    backToTop?.addEventListener("click", goTop);

    const closeMenus = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      document.querySelectorAll< HTMLDetailsElement >("header details[open]").forEach((menu) => {
        menu.open = false;
      });
    };
    const closeMenuAfterNavigation = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element) || !target.closest("header a")) return;
      document.querySelectorAll< HTMLDetailsElement >("header details[open]").forEach((menu) => {
        if (menu.contains(target)) menu.open = false;
      });
    };
    document.addEventListener("keydown", closeMenus);
    document.addEventListener("click", closeMenuAfterNavigation);

    const revealNodes = document.querySelectorAll<HTMLElement>(".rv");
    let observer: IntersectionObserver | undefined;
    if (!reducedMotion && "IntersectionObserver" in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("on");
            observer?.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
      revealNodes.forEach((node) => observer?.observe(node));
    } else {
      revealNodes.forEach((node) => node.classList.add("on"));
    }

    // Accessible feedback carousel with pause-on-hover/focus behavior.
    const carousel = document.getElementById("feedback-carousel");
    if (carousel) {
      const slides = Array.from(carousel.querySelectorAll<HTMLElement>(".feedback-slide"));
      const dots = Array.from(carousel.querySelectorAll<HTMLButtonElement>(".feedback-dot"));
      const current = carousel.querySelector<HTMLElement>("#feedback-current");
      let active = Math.max(0, slides.findIndex((slide) => slide.classList.contains("is-active")));
      let timer: ReturnType<typeof window.setInterval> | undefined;

      const show = (next: number) => {
        if (!slides.length) return;
        active = (next + slides.length) % slides.length;
        slides.forEach((slide, index) => {
          const selected = index === active;
          slide.classList.toggle("is-active", selected);
          slide.setAttribute("aria-hidden", String(!selected));
        });
        dots.forEach((dot, index) => {
          const selected = index === active;
          dot.classList.toggle("is-active", selected);
          dot.setAttribute("aria-pressed", String(selected));
        });
        if (current) current.textContent = String(active + 1).padStart(2, "0");
      };
      const stop = () => {
        if (timer) window.clearInterval(timer);
        timer = undefined;
      };
      const start = () => {
        stop();
        if (!reducedMotion && !document.hidden && slides.length > 1) {
          timer = window.setInterval(() => show(active + 1), 6500);
        }
      };
      const previous = () => { show(active - 1); start(); };
      const next = () => { show(active + 1); start(); };
      const dotHandlers = dots.map((dot, index) => {
        const handler = () => { show(index); start(); };
        dot.addEventListener("click", handler);
        return handler;
      });
      const pauseOnFocus = () => stop();
      const resumeAfterFocus = (event: FocusEvent) => {
        if (!carousel.contains(event.relatedTarget as Node | null)) start();
      };
      const pauseOnHover = () => stop();
      const resumeOnHover = () => start();
      const previousButton = carousel.querySelector("#feedback-prev");
      const nextButton = carousel.querySelector("#feedback-next");
      previousButton?.addEventListener("click", previous);
      nextButton?.addEventListener("click", next);
      carousel.addEventListener("mouseenter", pauseOnHover);
      carousel.addEventListener("mouseleave", resumeOnHover);
      carousel.addEventListener("focusin", pauseOnFocus);
      carousel.addEventListener("focusout", resumeAfterFocus);
      document.addEventListener("visibilitychange", start);
      show(active);
      start();

      return () => {
        stop();
        observer?.disconnect();
        window.removeEventListener("scroll", updateScroll);
        backToTop?.removeEventListener("click", goTop);
        document.removeEventListener("keydown", closeMenus);
        document.removeEventListener("click", closeMenuAfterNavigation);
        document.removeEventListener("visibilitychange", start);
        previousButton?.removeEventListener("click", previous);
        nextButton?.removeEventListener("click", next);
        dots.forEach((dot, index) => dot.removeEventListener("click", dotHandlers[index]));
        carousel.removeEventListener("mouseenter", pauseOnHover);
        carousel.removeEventListener("mouseleave", resumeOnHover);
        carousel.removeEventListener("focusin", pauseOnFocus);
        carousel.removeEventListener("focusout", resumeAfterFocus);
        if (frame) window.cancelAnimationFrame(frame);
      };
    }

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", updateScroll);
      backToTop?.removeEventListener("click", goTop);
      document.removeEventListener("keydown", closeMenus);
      document.removeEventListener("click", closeMenuAfterNavigation);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
