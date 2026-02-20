"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import {
  BrandingIcon,
  MarketingIcon,
  UXIcon,
  WebIcon,
} from "@/components/ui/ServiceIcons";

// ─── Inline button icon ───────────────────────────────────────────────────────
function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <polyline points="15 10 20 15 15 20" />
      <path d="M4 4v7a4 4 0 0 0 4 4h12" />
    </svg>
  );
}

// ─── Service Icons ────────────────────────────────────────────────────────────
const ALL_SERVICE_ICONS = [
  { id: "branding",  label: "Branding",  Icon: BrandingIcon },
  { id: "marketing", label: "Marketing", Icon: MarketingIcon },
  { id: "ux",        label: "UX/UI",     Icon: UXIcon },
  { id: "web",       label: "Web",       Icon: WebIcon },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Animation timing ─────────────────────────────────────────────────────────
// Each block animates in sequence. Base duration 1.2s, smooth ease-out.
// Delays:  locale 0s → h1 0.15s → icons 0.35s → text 0.5s → button 0.65s
//          icon stagger adds 0.1s per icon on top of icons base delay.
const DURATION = "1.2s";
const EASE     = "cubic-bezier(0.22, 1, 0.36, 1)"; // smooth expo-out

// ─── Component ────────────────────────────────────────────────────────────────
export default function Hero() {
  const [icons, setIcons] = useState(ALL_SERVICE_ICONS);
  const [today, setToday] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIcons(shuffle(ALL_SERVICE_ICONS));
    const d  = new Date();
    const dd   = String(d.getDate()).padStart(2, "0");
    const mm   = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    setToday(`${dd}.${mm}.${yyyy}`);

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ── Video scroll-expand ──────────────────────────────────────────────────
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const [videoH, setVideoH] = useState("250px");
  const [imgScale, setImgScale] = useState(1);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let scrollY = 0;

    const onScroll = () => {
      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        if (!videoWrapRef.current) {
          rafRef.current = null;
          return;
        }

        const rect = videoWrapRef.current.getBoundingClientRect();
        const vh = window.innerHeight;

        // More aggressive timing for faster, smoother growth
        const elementTop = rect.top + scrollY;
        const start = elementTop - vh * 0.8;
        const end = elementTop + vh * 0.1;
        const raw = (scrollY - start) / (end - start);
        const t = Math.min(1, Math.max(0, raw));

        // Cubic easing for smooth acceleration
        const eased = t * t * (3 - 2 * t);

        const px = 250 + eased * (vh - 250);
        setVideoH(`${px}px`);
        setImgScale(1 + eased * 0.08);

        rafRef.current = null;
      });
    };

    const updateScrollY = () => {
      scrollY = window.scrollY;
      onScroll();
    };

    window.addEventListener("scroll", updateScrollY, { passive: true });
    window.addEventListener("resize", updateScrollY, { passive: true });
    updateScrollY();

    return () => {
      window.removeEventListener("scroll", updateScrollY);
      window.removeEventListener("resize", updateScrollY);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section>
      {/* ── Shared keyframes ────────────────────────────────────────────────── */}
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-animate {
          opacity: 0;
          animation: heroFadeUp ${DURATION} ${EASE} forwards;
        }
        @keyframes dividerGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes dividerColorShift {
          0% { background-color: var(--color-hover); }
          70% { background-color: var(--color-hover); }
          100% { background-color: #E9E9EA; }
        }
        .hero-divider {
          transform-origin: left center;
          transform: scaleX(0);
          background-color: var(--color-hover);
          animation:
            dividerGrow 1.4s ${EASE} forwards,
            dividerColorShift 3.4s ${EASE} forwards;
          animation-delay: 0.8s, 0.8s;
        }
        .hero-video {
          opacity: 0;
          animation: heroFadeUp 1s ${EASE} forwards;
          animation-delay: 2.2s;
        }
      `}</style>

      <Container>

        {/* ── Locale Row — delay 0s ────────────────────────────────────────── */}
        <div
          className="hero-animate flex items-center justify-between"
          style={{
            paddingTop: "clamp(24px, 5vw, 48px)",
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(0.7rem, 1.5vw, 0.8125rem)",
            animationDelay: "0s",
          }}
        >
          <span>DE&nbsp;&nbsp;{today}</span>
          <span>GER</span>
        </div>

        {/* ── H1 — delay 0.15s ─────────────────────────────────────────────── */}
        <h1
          className="hero-animate heading"
          style={{
            marginTop: "clamp(24px, 4vw, 40px)",
            fontSize: "clamp(1.75rem, 5vw, 4.5rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            animationDelay: "0.15s",
          }}
        >
          Design mit <strong style={{ fontWeight: 700 }}>Relevanz</strong>.<br />
          Digitale Marken mit <strong style={{ fontWeight: 700 }}>Wirkung</strong>.
        </h1>

        {/* ── Icons + Text Row ────────────────────────────────────────────── */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10"
          style={{ marginTop: "clamp(24px, 4vw, 40px)" }}
        >
          {/* Icons — stagger starting at delay 0.35s, each +0.1s */}
          <div
            className="flex items-center w-full md:w-auto"
            style={{
              gap: "clamp(16px, 4vw, 80px)",
              color: "#E9E9EA",
              overflowX: isMobile ? "auto" : "visible",
              WebkitOverflowScrolling: "touch"
            }}
          >
            {icons.map(({ id, label, Icon }, i) => (
              <div
                key={id}
                className="hero-animate shrink-0"
                style={{ animationDelay: `${0.35 + i * 0.1}s` }}
              >
                <Icon size={isMobile ? 50 : 90} aria-label={label} />
              </div>
            ))}
          </div>

          {/* Right column: text delay 0.5s, button delay 0.65s */}
          <div className="max-w-[420px] w-full">
            <p
              className="hero-animate"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontSize: "clamp(0.9rem, 2vw, 1rem)",
                lineHeight: 1.6,
                color: "var(--color-text)",
                animationDelay: "0.5s",
              }}
            >
              <strong style={{ fontWeight: 700 }}>QLOUT</strong> Studio entwickelt
              strategische Markenplattformen – von Positionierung und visuellem
              Auftritt bis hin zu digitalen Produkten, die messbare Wirkung erzielen.
            </p>

            <a
              href="/projekte"
              className="hero-animate inline-flex items-center mt-6 transition-colors duration-150"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(0.75rem, 1.5vw, 0.8125rem)",
                fontWeight: 400,
                padding: "12px 24px",
                borderRadius: "4px",
                gap: "20px",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
                background: "transparent",
                textDecoration: "none",
                whiteSpace: "nowrap",
                animationDelay: "0.65s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background  = "var(--color-hover)";
                el.style.borderColor = "var(--color-hover)";
                el.style.color       = "#E9E9EA";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background  = "transparent";
                el.style.borderColor = "var(--color-border)";
                el.style.color       = "var(--color-text)";
              }}
            >
              <ArrowIcon />
              PROJEKTE ANSEHEN
            </a>
          </div>
        </div>

        {/* ── Divider — grows left→right after last icon animates in ────────── */}
        <div
          className="hero-divider"
          style={{ marginTop: "clamp(24px, 4vw, 40px)", height: "1px" }}
          role="separator"
          aria-hidden="true"
        />

        {/* ── Video / Key Visual — appears after divider finishes ────────────── */}
        <div ref={videoWrapRef} className="hero-video" style={{ marginTop: "clamp(24px, 4vw, 40px)", paddingBottom: "clamp(40px, 6vw, 60px)", willChange: "auto" }}>
          <div
            style={{
              height: videoH,
              borderRadius: "10px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                transform: `scale(${imgScale})`,
                transformOrigin: "center center",
              }}
            >
              <Image
                src="/images/Rectangle 32.png"
                alt="QLOUT Studio – Key Visual"
                fill
                sizes="(max-width: 1400px) 100vw, 1400px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            {/* 40% black overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                borderRadius: "10px",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>

      </Container>
    </section>
  );
}
