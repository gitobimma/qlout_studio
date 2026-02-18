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
  return (
    <>
      {/* Inject hover styles via a plain <style> tag — no client JS needed */}
      <style>{`
        .nav-link:hover    { color: var(--color-hover) !important; }
        .btn-primary:hover { background-color: var(--color-hover) !important; color: #E9E9EA !important; }
      `}</style>

      <header className="w-full py-6">
        <Container>
          <div className="flex items-center justify-between gap-8">

            {/* Logo */}
            <a href="/" aria-label="QLOUT Studio – Startseite" className="shrink-0">
              <Image
                src="/logo/LOGO_QLOUT.svg"
                alt="QLOUT Studio"
                width={156}
                height={34}
                priority
              />
            </a>

            {/* Nav – centered */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Hauptnavigation">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="nav-link text-sm font-medium transition-colors duration-150"
                  style={{ fontFamily: "var(--font-sans)", color: "var(--color-text)", textDecoration: "none" }}
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Primary CTA */}
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

          </div>
        </Container>
      </header>
    </>
  );
}
