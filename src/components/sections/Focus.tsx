import Container from "@/components/ui/Container";
import {
  BrandingIcon,
  MarketingIcon,
  UXIcon,
  WebIcon,
} from "@/components/ui/ServiceIcons";

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
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

const SERVICES = [
  { id: "ux",        label: "UX UI",      href: "/leistungen/ux-ui",      Icon: UXIcon },
  { id: "web",       label: "Web",        href: "/leistungen/web",        Icon: WebIcon },
  { id: "branding",  label: "Branding",   href: "/leistungen/branding",   Icon: BrandingIcon },
  { id: "marketing", label: "Marketing",  href: "/leistungen/marketing",  Icon: MarketingIcon },
];

export default function Focus() {
  return (
    <>
      <section style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <Container>

          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "var(--color-text)",
              marginBottom: "60px",
            }}
          >
            Fokus
          </h2>

          <div className="focus-grid">
            {SERVICES.map(({ id, label, href, Icon }) => (
              <div key={id} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "20px" }}>
                <Icon size={80} style={{ color: "var(--color-text)" }} />
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                    color: "var(--color-text)",
                    margin: 0,
                  }}
                >
                  {label}
                </h3>
                <a href={href} className="focus-link">
                  <ArrowIcon />
                  Mehr erfahren
                </a>
              </div>
            ))}
          </div>

        </Container>
      </section>
    </>
  );
}
