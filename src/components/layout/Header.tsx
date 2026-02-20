"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";

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

const NAV_LINKS = [
  { label: "Startseite", href: "/" },
  { label: "Projekte",   href: "/projekte" },
  { label: "Über uns",  href: "/ueber-uns" },
  { label: "Kontakt",   href: "/kontakt" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Inject hover styles via a plain <style> tag */}
      <style>{`
        .nav-link:hover    { color: var(--color-hover) !important; }
        .btn-primary:hover { background-color: var(--color-hover) !important; color: #E9E9EA !important; }

        /* Mobile menu animations */
        .mobile-menu {
          transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
        }
        .mobile-menu.open {
          transform: translateX(0);
          opacity: 1;
        }
        .mobile-menu.closed {
          transform: translateX(100%);
          opacity: 0;
        }
      `}</style>

      <header className="w-full py-6 relative">
        <Container>
          <div className="flex items-center justify-between gap-8">

            {/* Logo */}
            <a href="/" aria-label="QLOUT Studio – Startseite" className="shrink-0 relative z-50">
              <Image
                src="/logo/LOGO_QLOUT.svg"
                alt="QLOUT Studio"
                width={156}
                height={34}
                priority
              />
            </a>

            {/* Nav – Desktop */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Hauptnavigation">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="nav-link text-sm font-medium transition-colors duration-150"
                  style={{ fontFamily: "var(--font-sans)", color: "var(--color-text)", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.04em" }}
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Primary CTA – Desktop */}
            <a
              href="/kontakt"
              className="btn-primary hidden md:inline-flex items-center shrink-0 transition-colors duration-150"
              style={{
                fontFamily: "var(--font-mono)",
                backgroundColor: "var(--color-primary)",
                color: "var(--color-text)",
                padding: "12px 24px",
                borderRadius: "4px",
                gap: "20px",
                fontSize: "0.8125rem",
                fontWeight: 400,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              <ArrowIcon />
              PROJEKT STARTEN
            </a>

            {/* Burger Menu Button – Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Menü"
              aria-expanded={isMenuOpen}
            >
              <span
                style={{
                  width: "24px",
                  height: "2px",
                  backgroundColor: "var(--color-text)",
                  transition: "transform 0.3s, opacity 0.3s",
                  transform: isMenuOpen ? "rotate(45deg) translateY(8px)" : "none",
                }}
              />
              <span
                style={{
                  width: "24px",
                  height: "2px",
                  backgroundColor: "var(--color-text)",
                  transition: "opacity 0.3s",
                  opacity: isMenuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  width: "24px",
                  height: "2px",
                  backgroundColor: "var(--color-text)",
                  transition: "transform 0.3s, opacity 0.3s",
                  transform: isMenuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
                }}
              />
            </button>

          </div>
        </Container>

        {/* Mobile Menu Overlay */}
        <div
          className={`mobile-menu ${isMenuOpen ? 'open' : 'closed'} md:hidden fixed inset-0 bg-[#1A1B1F] z-40`}
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
          }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="nav-link text-2xl font-medium transition-colors duration-150"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "#fff",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                {label}
              </a>
            ))}
            <a
              href="/kontakt"
              onClick={() => setIsMenuOpen(false)}
              className="btn-primary inline-flex items-center transition-colors duration-150 mt-4"
              style={{
                fontFamily: "var(--font-mono)",
                backgroundColor: "var(--color-primary)",
                color: "var(--color-text)",
                padding: "12px 24px",
                borderRadius: "4px",
                gap: "20px",
                fontSize: "0.8125rem",
                fontWeight: 400,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              <ArrowIcon />
              PROJEKT STARTEN
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
