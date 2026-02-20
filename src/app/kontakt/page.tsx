"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";

type FormData = {
  // Abschnitt 1
  company: string;
  contact: string;
  email: string;
  phone: string;
  // Abschnitt 2
  projectType: string;
  description: string;
  // Abschnitt 3
  budget: string;
  // Abschnitt 4
  timeline: string;
  privacy: boolean;
};

export default function KontaktPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    company: "",
    contact: "",
    email: "",
    phone: "",
    projectType: "",
    description: "",
    budget: "",
    timeline: "",
    privacy: false,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const totalSteps = 4;

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Partial<FormData> = {};

    if (currentStep === 1) {
      if (!formData.company.trim()) newErrors.company = "Pflichtfeld";
      if (!formData.contact.trim()) newErrors.contact = "Pflichtfeld";
      if (!formData.email.trim()) newErrors.email = "Pflichtfeld";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Ungültige E-Mail";
    }

    if (currentStep === 2) {
      if (!formData.projectType) newErrors.projectType = "Bitte wählen";
      if (!formData.description.trim()) newErrors.description = "Pflichtfeld";
    }

    if (currentStep === 3) {
      if (!formData.budget) newErrors.budget = "Bitte wählen";
    }

    if (currentStep === 4) {
      if (!formData.timeline) newErrors.timeline = "Bitte wählen";
      if (!formData.privacy) newErrors.privacy = "Bitte bestätigen" as any;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(step)) {
      console.log("Form submitted:", formData);
      alert("Vielen Dank! Ihre Anfrage wurde gesendet.");
      // Hier würde die echte Formular-Submission stattfinden
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "clamp(12px, 1.5vw, 16px)",
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
    color: "#1A1B1F",
    backgroundColor: "#E9E9EA",
    border: "1px solid #E9E9EA",
    borderRadius: "4px",
    outline: "none",
    transition: "all 0.2s",
  };

  const labelStyle = {
    display: "block",
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
    fontWeight: 500,
    color: "var(--color-text)",
    marginBottom: "8px",
  };

  const errorStyle = {
    fontFamily: "var(--font-sans)",
    fontSize: "0.75rem",
    color: "var(--color-hover)",
    marginTop: "4px",
  };

  return (
    <main>
      <section style={{
        paddingTop: "clamp(100px, 12vw, 160px)",
        paddingBottom: "clamp(80px, 10vw, 120px)",
        backgroundColor: "var(--color-bg)"
      }}>
        <Container>
          <h1 style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "var(--color-text)",
            marginBottom: "clamp(20px, 3vw, 30px)",
          }}>
            Projekt anfragen
          </h1>

          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
            lineHeight: 1.6,
            color: "var(--color-text)",
            maxWidth: "700px",
            marginBottom: "clamp(40px, 6vw, 60px)",
          }}>
            Wir arbeiten mit Unternehmen, die Wert auf Substanz legen. Teilen Sie uns Ihr Vorhaben mit.
          </p>

          {/* Progress Bar */}
          <div style={{
            maxWidth: "800px",
            marginBottom: "clamp(40px, 5vw, 60px)",
          }}>
            <div style={{
              display: "flex",
              gap: "8px",
              marginBottom: "16px",
            }}>
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  style={{
                    flex: 1,
                    height: "4px",
                    backgroundColor: s <= step ? "var(--color-hover)" : "var(--color-border)",
                    borderRadius: "2px",
                    transition: "background-color 0.3s",
                  }}
                />
              ))}
            </div>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "#888",
              textTransform: "uppercase",
            }}>
              Schritt {step} von {totalSteps}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ maxWidth: "800px" }}>
            {/* Step 1: Basisdaten */}
            {step === 1 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(20px, 3vw, 30px)" }}>
                <h2 style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: "10px",
                }}>
                  Basisdaten
                </h2>

                <div>
                  <label style={labelStyle}>Unternehmen *</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-hover)";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(231, 55, 37, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "#E9E9EA";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                  {errors.company && <p style={errorStyle}>{errors.company}</p>}
                </div>

                <div>
                  <label style={labelStyle}>Ansprechpartner *</label>
                  <input
                    type="text"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-hover)";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(231, 55, 37, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "#E9E9EA";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                  {errors.contact && <p style={errorStyle}>{errors.contact}</p>}
                </div>

                <div>
                  <label style={labelStyle}>E-Mail *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-hover)";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(231, 55, 37, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "#E9E9EA";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                  {errors.email && <p style={errorStyle}>{errors.email}</p>}
                </div>

                <div>
                  <label style={labelStyle}>Telefonnummer (optional)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-hover)";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(231, 55, 37, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "#E9E9EA";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>
            )}

            {/* Step 2: Projektkontext */}
            {step === 2 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(20px, 3vw, 30px)" }}>
                <h2 style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: "10px",
                }}>
                  Projektkontext
                </h2>

                <div>
                  <label style={labelStyle}>Projektart *</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-hover)";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(231, 55, 37, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "#E9E9EA";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <option value="">Bitte wählen</option>
                    <option value="branding">Branding</option>
                    <option value="ux-ui">UX/UI</option>
                    <option value="web">Webentwicklung</option>
                    <option value="platform">Ganzheitliche Markenplattform</option>
                    <option value="other">Sonstiges</option>
                  </select>
                  {errors.projectType && <p style={errorStyle}>{errors.projectType}</p>}
                </div>

                <div>
                  <label style={labelStyle}>Kurzbeschreibung des Vorhabens *</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={6}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-hover)";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(231, 55, 37, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "#E9E9EA";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                  {errors.description && <p style={errorStyle}>{errors.description}</p>}
                </div>
              </div>
            )}

            {/* Step 3: Budget */}
            {step === 3 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(20px, 3vw, 30px)" }}>
                <h2 style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: "10px",
                }}>
                  Budgetrahmen
                </h2>

                <div>
                  <label style={labelStyle}>Budgetrahmen *</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-hover)";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(231, 55, 37, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "#E9E9EA";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <option value="">Bitte wählen</option>
                    <option value="under-10k">unter 10.000 €</option>
                    <option value="10k-25k">10.000 – 25.000 €</option>
                    <option value="25k-50k">25.000 – 50.000 €</option>
                    <option value="50k-plus">50.000 €+</option>
                  </select>
                  {errors.budget && <p style={errorStyle}>{errors.budget}</p>}
                </div>
              </div>
            )}

            {/* Step 4: Zeitrahmen */}
            {step === 4 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(20px, 3vw, 30px)" }}>
                <h2 style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: "10px",
                }}>
                  Zeitrahmen
                </h2>

                <div>
                  <label style={labelStyle}>Startzeitpunkt *</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-hover)";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(231, 55, 37, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "#E9E9EA";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <option value="">Bitte wählen</option>
                    <option value="immediately">Sofort</option>
                    <option value="1-3-months">1–3 Monate</option>
                    <option value="3-6-months">3–6 Monate</option>
                    <option value="inquiry-only">Nur unverbindliche Anfrage</option>
                  </select>
                  {errors.timeline && <p style={errorStyle}>{errors.timeline}</p>}
                </div>

                <div>
                  <label style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    cursor: "pointer",
                    userSelect: "none",
                  }}>
                    <input
                      type="checkbox"
                      checked={formData.privacy}
                      onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                      style={{
                        width: "20px",
                        height: "20px",
                        cursor: "pointer",
                        marginTop: "2px",
                      }}
                    />
                    <span style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                      color: "var(--color-text)",
                      lineHeight: 1.5,
                    }}>
                      Ich stimme der{" "}
                      <a
                        href="/datenschutz"
                        style={{ color: "var(--color-hover)", textDecoration: "underline" }}
                        target="_blank"
                      >
                        Datenschutzerklärung
                      </a>
                      {" "}zu.
                    </span>
                  </label>
                  {errors.privacy && <p style={errorStyle}>{errors.privacy}</p>}
                </div>
              </div>
            )}

            {/* Buttons */}
            <div style={{
              display: "flex",
              gap: "16px",
              marginTop: "clamp(40px, 6vw, 60px)",
              flexWrap: "wrap",
            }}>
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  style={{
                    padding: "clamp(12px, 1.5vw, 16px) clamp(24px, 3vw, 40px)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
                    fontWeight: 400,
                    color: "#24262C",
                    backgroundColor: "transparent",
                    border: "1px solid #24262C",
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#C42C38";
                    e.currentTarget.style.borderColor = "#C42C38";
                    e.currentTarget.style.color = "#F1F1F1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderColor = "#24262C";
                    e.currentTarget.style.color = "#24262C";
                  }}
                >
                  ZURÜCK
                </button>
              )}

              {step < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  style={{
                    padding: "clamp(12px, 1.5vw, 16px) clamp(24px, 3vw, 40px)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
                    fontWeight: 400,
                    color: "#24262C",
                    backgroundColor: "#BFFF29",
                    border: "1px solid #BFFF29",
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#C42C38";
                    e.currentTarget.style.borderColor = "#C42C38";
                    e.currentTarget.style.color = "#F1F1F1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#BFFF29";
                    e.currentTarget.style.borderColor = "#BFFF29";
                    e.currentTarget.style.color = "#24262C";
                  }}
                >
                  WEITER
                </button>
              ) : (
                <button
                  type="submit"
                  style={{
                    padding: "clamp(12px, 1.5vw, 16px) clamp(24px, 3vw, 40px)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
                    fontWeight: 400,
                    color: "#24262C",
                    backgroundColor: "#BFFF29",
                    border: "1px solid #BFFF29",
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#C42C38";
                    e.currentTarget.style.borderColor = "#C42C38";
                    e.currentTarget.style.color = "#F1F1F1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#BFFF29";
                    e.currentTarget.style.borderColor = "#BFFF29";
                    e.currentTarget.style.color = "#24262C";
                  }}
                >
                  ANFRAGE SENDEN
                </button>
              )}
            </div>
          </form>
        </Container>
      </section>
    </main>
  );
}
