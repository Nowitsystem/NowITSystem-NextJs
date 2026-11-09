import type { ReactNode } from "react";

/** Small Tailwind-based primitives for new work. Existing homepage styles remain in globals.css for visual parity. */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-[clamp(18px,4vw,48px)] ${className}`}>{children}</div>;
}
export function SectionHeading({ eyebrow, children }: { eyebrow?: string; children: ReactNode }) {
  return <div className="mb-8 max-w-3xl">{eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[.18em] text-brand">{eyebrow}</p>}<h2 className="font-display text-3xl font-bold tracking-tight text-brand-ink md:text-5xl">{children}</h2></div>;
}
