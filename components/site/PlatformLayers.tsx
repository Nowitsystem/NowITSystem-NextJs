"use client";

/**
 * Platform view: "One platform, four layers working together".
 * Adapted from Animorio's "The card stack that opens up in 3D on hover"
 * (https://animorio.com/en/animations/card-stack-that-opens-up-in-3d-on-hover/).
 *
 * The four layers are the four cards. Hover the stack and it opens in 3D,
 * the pointer tilts it, a click (or hovering / focusing / clicking a layer
 * in the list on the left) brings that layer to the front.
 *
 * Requires: npm i gsap
 * Styles:   platform-layers.css (import it after your globals.css)
 */

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import gsap from "gsap";

/* ---- values to change ---- */
const OPEN_GAP = 38; // px of height between cards when open (on a 300px-wide card)
const REST_GAP = 6; // thickness of the closed stack
const ANGLE_X = 56; // how far the stack is tipped back, deg
const ANGLE_Z = -22; // how far the stack is turned in its plane, deg
const TILT = 9; // deg the pointer tilts the stack
const STIFFNESS = 260; // spring stiffness: higher = quicker
const DAMPING = 23; // spring damping: lower = more bounce
const SHEEN = 0.6; // reflection strength on the cards (0 = none)
const PERSPECTIVE = 4; // in card widths: lower = stronger

type Layer = {
  name: string;
  short: string;
  tags: string;
  desc: string;
  c1: string;
  c2: string;
  icon: ReactNode;
};

const LAYERS: Layer[] = [
  {
    name: "Experience",
    short: "EXPERIENCE",
    tags: "Portals · NOW Mobile · Virtual agents",
    desc: "Portals, NOW Mobile and virtual agents give everyone one front door.",
    c1: "#7a62ff",
    c2: "#4b34d6",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="4" width="18" height="12" rx="2.5" />
        <path d="M8 20h8M12 16v4" />
      </svg>
    ),
  },
  {
    name: "Workflows",
    short: "WORKFLOWS",
    tags: "ITSM · HRSD · CSM · SecOps",
    desc: "ITSM, HRSD, CSM, SecOps and more, built around how your teams work.",
    c1: "#4a90ec",
    c2: "#2a4fc0",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="5.5" cy="6" r="2.5" />
        <circle cx="18.5" cy="12" r="2.5" />
        <circle cx="5.5" cy="18" r="2.5" />
        <path d="M8 6h4a3 3 0 0 1 3 3v.5M8 18h4a3 3 0 0 0 3-3v-.5" />
      </svg>
    ),
  },
  {
    name: "Data & insight",
    short: "DATA",
    tags: "Shared data model · Performance Analytics",
    desc: "A shared data model and Performance Analytics keep everyone on the same numbers.",
    c1: "#12b09a",
    c2: "#0b6f78",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </svg>
    ),
  },
  {
    name: "Integrations",
    short: "INTEGRATIONS",
    tags: "APIs · Email · Identity · Cloud · HR",
    desc: "APIs and connectors link email, identity, cloud, monitoring and HR systems.",
    c1: "#9a8ef0",
    c2: "#5a3fe0",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 7V3M15 7V3M7 7h10v4a5 5 0 0 1-10 0V7zM12 16v5" />
      </svg>
    ),
  },
];

type Spring = { x: number; v: number; t: number };
type CardState = {
  place: Spring;
  arc: number;
  press: number;
  glow: number;
};

const spring = (x: number): Spring => ({ x, v: 0, t: x });

export default function PlatformLayers() {
  const [active, setActive] = useState(0);

  const stageRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const rollRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const tagsRef = useRef<HTMLParagraphElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const hintRef = useRef<HTMLParagraphElement>(null);
  const api = useRef<{ bring: (i: number, fromList?: boolean) => void } | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const deck = deckRef.current;
    const tilt = tiltRef.current;
    const rollEl = rollRef.current;
    const nameEl = nameRef.current;
    const tagsEl = tagsRef.current;
    const numEl = numRef.current;
    const hintEl = hintRef.current;
    if (!stage || !deck || !tilt || !rollEl || !nameEl || !tagsEl || !numEl || !hintEl) return;

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cards = Array.from(tilt.querySelectorAll<HTMLElement>("[data-card]"));
    const shadows = Array.from(tilt.querySelectorAll<HTMLElement>("[data-shadow]"));
    const sheens = Array.from(tilt.querySelectorAll<HTMLElement>("[data-sheen]"));
    const N = cards.length;

    const step = (m: Spring, dt: number) => {
      if (reduced) {
        m.x = m.t;
        m.v = 0;
        return;
      }
      const a = STIFFNESS * (m.t - m.x) - DAMPING * m.v;
      m.v += a * dt;
      m.x += m.v * dt;
    };

    const open = spring(reduced ? 1 : 0);
    const tx = spring(0);
    const ty = spring(0);
    let order = cards.map((_, i) => i); // order[0] = card in front
    const st: CardState[] = cards.map((_, i) => ({ place: spring(i), arc: 0, press: 1, glow: -1 }));

    /* sizes: card sized from the stage width, perspective in pixels */
    let cw = 390;
    let k = 1;
    const measure = () => {
      const W = stage.clientWidth;
      cw = Math.max(180, Math.min(400, (W - 16) / 1.25));
      k = cw / 300;
      stage.style.setProperty("--cw", cw + "px");
      deck.style.perspective = Math.round(cw * PERSPECTIVE) + "px";
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(stage);

    /* caption */
    const writeCaption = (i: number) => {
      nameEl.textContent = LAYERS[i].name;
      tagsEl.textContent = LAYERS[i].tags;
      numEl.textContent = String(i + 1).padStart(2, "0");
    };
    const setHint = (isOpen: boolean) => {
      hintEl.textContent = isOpen ? "Click a layer to bring it forward" : "Hover or tap to open the stack";
    };
    const caption = (i: number) => {
      if (reduced) {
        gsap
          .timeline()
          .to([rollEl, tagsEl], { opacity: 0, duration: 0.15 })
          .add(() => writeCaption(i))
          .to([rollEl, tagsEl], { opacity: 1, duration: 0.25 });
        return;
      }
      gsap
        .timeline()
        .to(rollEl, { yPercent: -110, duration: 0.18, ease: "power2.in" })
        .add(() => writeCaption(i))
        .set(rollEl, { yPercent: 110 })
        .to(rollEl, { yPercent: 0, duration: 0.42, ease: "back.out(2.2)" });
      gsap.fromTo(tagsEl, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.4, delay: 0.2 });
    };

    /* the light that runs once over a card */
    const flash = (i: number) => {
      if (reduced) return;
      gsap.fromTo(st[i], { glow: -1 }, { glow: 1, duration: 0.95, ease: "power2.inOut" });
    };

    /* open / close */
    let over = false;
    let holdUntil = 0;
    let time = 0;
    const setOpen = (yes: boolean) => {
      const before = open.t;
      open.t = reduced ? 1 : yes ? 1 : 0;
      if (yes && before < 0.5 && open.t > 0.5) {
        flash(order[0]);
        setHint(true);
      }
      if (!yes && !reduced) setHint(false);
    };

    /* bring a card to the front: it arcs out of the stack, then lands in front */
    const bring = (i: number, fromList = false) => {
      const s = st[i];
      if (order[0] === i) {
        if (!reduced) {
          gsap
            .timeline()
            .to(s, { press: 0.965, duration: 0.09, ease: "power2.out" })
            .to(s, { press: 1, duration: 0.5, ease: "elastic.out(1, 0.5)" });
        }
        if (fromList && !reduced) {
          over = true;
          setOpen(true);
        }
        return;
      }
      order = [i, ...order.filter((x) => x !== i)];
      order.forEach((x, pos) => {
        if (x !== i) st[x].place.t = pos;
      });
      if (reduced) {
        s.place.t = 0;
        gsap.fromTo(tilt, { opacity: 0.35 }, { opacity: 1, duration: 0.3 });
      } else {
        gsap
          .timeline()
          .to(s, { press: 0.965, duration: 0.09, ease: "power2.out" })
          .to(s, { arc: 1, duration: 0.34, ease: "power2.out" }, 0)
          .add(() => {
            s.place.t = 0;
          }, 0.16)
          .to(s, { arc: 0, duration: 0.55, ease: "power3.inOut" }, 0.34)
          .to(s, { press: 1, duration: 0.6, ease: "elastic.out(1, 0.5)" }, 0.3);
        flash(i);
        if (fromList) {
          // hovering the list keeps the stack open
          over = true;
          open.t = 1;
        } else {
          // others close back behind the chosen card for a moment
          holdUntil = time + 1.15;
          open.t = 0;
        }
      }
      caption(i);
      setActive(i);
    };
    api.current = { bring };

    /* pointer: where it is relative to the deck centre, -1..1 */
    const point = (x: number, y: number) => {
      const r = deck.getBoundingClientRect();
      const nx = (x - (r.left + r.width / 2)) / (r.width / 2);
      const ny = (y - (r.top + r.height / 2)) / (r.height / 2);
      const inside = Math.abs(nx) <= 1.05 && Math.abs(ny) <= 1.1;
      if (inside !== over) {
        over = inside;
        if (time >= holdUntil || !inside) setOpen(inside);
      }
      tx.t = inside && !reduced ? gsap.utils.clamp(-1, 1, nx) : 0;
      ty.t = inside && !reduced ? gsap.utils.clamp(-1, 1, ny) : 0;
    };

    /* one frame */
    const tick = () => {
      const dt = Math.min(0.05, gsap.ticker.deltaRatio(60) / 60);
      time += dt;
      if (over && open.t === 0 && time >= holdUntil) setOpen(true);
      step(open, dt);
      step(tx, dt);
      step(ty, dt);
      const o = open.x;
      const ax = ANGLE_X - o * 8 + ty.x * TILT;
      const ay = tx.x * TILT * 0.6;
      const az = ANGLE_Z + tx.x * TILT * 0.35;
      tilt.style.transform = `translate3d(0, ${(-o * 12 * k).toFixed(2)}px, 0) rotateX(${ax.toFixed(3)}deg) rotateY(${ay.toFixed(3)}deg) rotateZ(${az.toFixed(3)}deg)`;
      const gap = (REST_GAP + (OPEN_GAP - REST_GAP) * o) * k;
      const ch = cw / 1.586;
      cards.forEach((c, i) => {
        const s = st[i];
        step(s.place, dt);
        const p = s.place.x;
        const high = N - 1 - p;
        const z = high * gap + s.arc * gap * 1.6 + 0.5;
        const y = p * gap * 0.32 * o - s.arc * ch * 0.92;
        const rz = -p * 1.4 * o;
        c.style.transform = `translate3d(0, ${y.toFixed(2)}px, ${z.toFixed(2)}px) rotateZ(${rz.toFixed(3)}deg) scale(${s.press.toFixed(4)})`;
        const sh = shadows[i];
        sh.style.transform = `translate3d(${(z * 0.22).toFixed(2)}px, ${(y + z * 0.34).toFixed(2)}px, -1px) rotateZ(${rz.toFixed(3)}deg) scale(${(0.96 + z / (cw * 6)).toFixed(4)})`;
        sh.style.opacity = Math.max(0.05, 0.26 - z / (cw * 2.2)).toFixed(3);
        sh.style.filter = `blur(${(6 + z * 0.18).toFixed(1)}px)`;
        const lx = (tx.x * 0.18 + ty.x * 0.1 + s.glow * 0.32) * 100;
        const sp = sheens[i];
        sp.style.transform = `translate3d(${lx.toFixed(2)}%, ${(lx * 0.35).toFixed(2)}%, 0)`;
        sp.style.opacity = (SHEEN * (0.55 + 0.45 * (s.glow < 1 && s.glow > -1 ? 1 - Math.abs(s.glow) : 0))).toFixed(3);
      });
    };
    gsap.ticker.add(tick);

    /* events */
    let kind = "mouse";
    const onMove = (e: PointerEvent) => {
      kind = e.pointerType;
      if (e.pointerType === "touch") return;
      point(e.clientX, e.clientY);
    };
    const onLeave = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      over = false;
      setOpen(false);
      tx.t = 0;
      ty.t = 0;
    };
    const onDown = (e: PointerEvent) => {
      kind = e.pointerType;
      if (e.pointerType !== "touch") return;
      if (!(e.target as Element).closest("[data-deck]")) {
        over = false;
        setOpen(false);
      }
    };
    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", onLeave);
    stage.addEventListener("pointerdown", onDown);

    const cleanups: Array<() => void> = [];
    cards.forEach((c, i) => {
      const onClick = () => {
        // touch: first tap opens the stack, second brings the tapped card forward
        if (kind === "touch" && open.t < 0.5 && !reduced) {
          over = true;
          setOpen(true);
          return;
        }
        bring(i);
      };
      const onFocus = () => {
        if (kind !== "touch") setOpen(true);
      };
      c.addEventListener("click", onClick);
      c.addEventListener("focus", onFocus);
      cleanups.push(() => {
        c.removeEventListener("click", onClick);
        c.removeEventListener("focus", onFocus);
      });
    });

    return () => {
      gsap.ticker.remove(tick);
      ro.disconnect();
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
      stage.removeEventListener("pointerdown", onDown);
      cleanups.forEach((fn) => fn());
      st.forEach((s) => gsap.killTweensOf(s));
      gsap.killTweensOf([rollEl, tagsEl, tilt]);
      api.current = null;
    };
  }, []);

  const pick = (i: number) => api.current?.bring(i, true);

  return (
    <div className="arch">
      <ul className="layers rv">
        {LAYERS.map((l, i) => (
          <li
            key={l.name}
            data-l={i + 1}
            className={active === i ? "is-on" : undefined}
            tabIndex={0}
            role="button"
            aria-pressed={active === i}
            aria-label={`Show the ${l.name} layer`}
            onMouseEnter={() => pick(i)}
            onFocus={() => pick(i)}
            onClick={() => pick(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                pick(i);
              }
            }}
          >
            <div>
              <h3>{l.name}</h3>
              <p>{l.desc}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="ls-stage rv" ref={stageRef} style={{ "--dl": ".12s" } as CSSProperties}>
        <div className="ls-deck" data-deck ref={deckRef} role="group" aria-label="The four platform layers. Hover to open the stack, click a layer to bring it forward.">
          <div className="ls-tilt" ref={tiltRef}>
            {LAYERS.map((l) => (
              <span className="ls-shadow" data-shadow key={`s-${l.name}`} aria-hidden="true" />
            ))}
            {LAYERS.map((l, i) => (
              <button
                key={l.name}
                type="button"
                className="ls-card"
                data-card
                aria-label={`${l.name} layer`}
                style={{ "--c1": l.c1, "--c2": l.c2 } as CSSProperties}
              >
                <span className="ls-face">
                  <span className="ls-row">
                    <span className="ls-ico">{l.icon}</span>
                    <span className="ls-lbl">LAYER {String(i + 1).padStart(2, "0")}</span>
                  </span>
                  <span className="ls-foot">
                    <span className="ls-cname">{l.name}</span>
                    <span className="ls-ctags">{l.tags}</span>
                  </span>
                </span>
                <span className="ls-sheen" data-sheen />
                <span className="ls-edge" />
              </button>
            ))}
          </div>
        </div>

        <div className="ls-cap" aria-live="polite">
          <p className="ls-count">
            <span ref={numRef}>01</span> / 04
          </p>
          <p className="ls-name">
            <span className="ls-roll" ref={rollRef}>
              <span ref={nameRef}>{LAYERS[0].name}</span>
            </span>
          </p>
          <p className="ls-tags" ref={tagsRef}>
            {LAYERS[0].tags}
          </p>
          <p className="ls-hint" ref={hintRef}>
            Hover or tap to open the stack
          </p>
        </div>
      </div>
    </div>
  );
}
