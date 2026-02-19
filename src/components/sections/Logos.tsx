import Image from "next/image";
import Container from "@/components/ui/Container";

const BRANDS = [
  { id: "decix",         label: "DE-CIX",         src: "/icons/brands/decix.svg" },
  { id: "hbe",           label: "HBE",             src: "/icons/brands/hbe.svg" },
  { id: "foaliagedreams",label: "Foliage Dreams",  src: "/icons/brands/foaliagedreams.svg" },
  { id: "supporters",    label: "supporters",      src: "/icons/brands/supporters.svg" },
  { id: "bwkrings",      label: "BW-Krings",       src: "/icons/brands/bwkrings.svg" },
];

export default function Logos() {
  return (
    <section style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <Container>

        <h2 style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 700,
          fontSize: "clamp(1.75rem, 4vw, 3rem)",
          textTransform: "uppercase",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          color: "var(--color-text)",
          maxWidth: "640px",
          margin: "0 0 60px",
        }}>
          Für <strong style={{ fontWeight: 700 }}>Unternehmen</strong> aus Industrie,{" "}
          Handel und Technologie.
        </h2>

        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "40px 24px",
        }}>
          {BRANDS.map(({ id, label, src }) => (
            <div key={id} style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              width: "120px",
            }}>
              <div style={{
                width: "100%",
                height: "60px",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}>
                <Image
                  src={src}
                  alt={label}
                  width={120}
                  height={60}
                  style={{ objectFit: "contain", objectPosition: "bottom center", opacity: 0.45, filter: "grayscale(1)", width: "100%", height: "auto", maxHeight: "60px" }}
                />
              </div>
              <span style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--color-text)",
                opacity: 0.45,
                textAlign: "center",
              }}>
                {label}
              </span>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
