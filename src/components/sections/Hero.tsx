"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
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
// Each block animates in sequence. Base duration 0.55s, ease-out.
// Delays:  locale 0s → h1 0.1s → icons 0.22s → text 0.3s → button 0.38s
//          icon stagger adds 0.07s per icon on top of icons base delay.
const DURATION = "0.55s";
const EASE     = "cubic-bezier(0.16, 1, 0.3, 1)"; // expo-out feel

// ─── Component ────────────────────────────────────────────────────────────────
export default function Hero() {
  const [icons, setIcons] = useState(ALL_SERVICE_ICONS);
  const [today, setToday] = useState("");

  useEffect(() => {
    setIcons(shuffle(ALL_SERVICE_ICONS));
    const d  = new Date();
    const dd   = String(d.getDate()).padStart(2, "0");
    const mm   = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    setToday(`${dd}.${mm}.${yyyy}`);
  }, []);

  // ── Video scroll-expand ──────────────────────────────────────────────────
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoWrapRef,
    offset: ["start center", "start start"],
  });
  const videoHeight = useTransform(scrollYProgress, [0, 1], ["250px", "100vh"]);
  const imageScale  = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

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
      `}</style>

      <Container>

        {/* ── Locale Row — delay 0s ────────────────────────────────────────── */}
        <div
          className="hero-animate flex items-center justify-between"
          style={{
            paddingTop: "100px",
            fontFamily: "var(--font-mono)",
            fontSize: "0.8125rem",
            animationDelay: "0s",
          }}
        >
          <span>DE&nbsp;&nbsp;{today}</span>
          <span>GER</span>
        </div>

        {/* ── H1 — delay 0.1s ─────────────────────────────────────────────── */}
        <h1
          className="hero-animate heading"
          style={{
            marginTop: "40px",
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            animationDelay: "0.1s",
          }}
        >
          Design mit <strong style={{ fontWeight: 700 }}>Relevanz</strong>.<br />
          Digitale Marken mit <strong style={{ fontWeight: 700 }}>Wirkung</strong>.
        </h1>

        {/* ── Icons + Text Row ────────────────────────────────────────────── */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10"
          style={{ marginTop: "40px" }}
        >
          {/* Icons — stagger starting at delay 0.22s, each +0.07s */}
          <div
            className="flex items-center"
            style={{ gap: "clamp(24px, 4vw, 80px)", color: "#E9E9EA" }}
          >
            {icons.map(({ id, label, Icon }, i) => (
              <div
                key={id}
                className="hero-animate"
                style={{ animationDelay: `${0.22 + i * 0.07}s` }}
              >
                <Icon size={90} aria-label={label} />
              </div>
            ))}
          </div>

          {/* Right column: text delay 0.3s, button delay 0.38s */}
          <div className="max-w-[420px]">
            <p
              className="hero-animate"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.6,
                color: "var(--color-text)",
                animationDelay: "0.3s",
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
                fontSize: "0.8125rem",
                fontWeight: 400,
                padding: "12px 24px",
                borderRadius: "4px",
                gap: "20px",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
                background: "transparent",
                textDecoration: "none",
                whiteSpace: "nowrap",
                animationDelay: "0.38s",
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

        {/* ── Divider ─────────────────────────────────────────────────────── */}
        <div
          style={{ marginTop: "40px", height: "1px", backgroundColor: "var(--color-border)" }}
          role="separator"
          aria-hidden="true"
        />

        {/* ── Video / Key Visual ──────────────────────────────────────────── */}
        <div ref={videoWrapRef} style={{ marginTop: "40px", paddingBottom: "80px" }}>
          <motion.div
            style={{
              height: videoHeight,
              borderRadius: "4px",
              overflow: "hidden",
              position: "relative",
              willChange: "height",
            }}
          >
            <motion.div
              style={{
                position: "absolute",
                inset: 0,
                scale: imageScale,
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
            </motion.div>
          </motion.div>
        </div>

      </Container>
    </section>
  );
}
