# QLOUT Studio - Projektstruktur

## Übersicht

Dieses Projekt ist eine Next.js 14 Applikation mit TypeScript, die eine moderne Design Studio Website darstellt.

---

## 📁 Verzeichnisstruktur

```
qlout-studio/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root Layout mit SmoothScroll
│   │   ├── page.tsx                  # Startseite (/)
│   │   ├── globals.css               # Globale Styles & CSS-Variablen
│   │   │
│   │   ├── projekte/                 # Projektübersicht & Details
│   │   │   ├── page.tsx              # Projektübersicht (/projekte)
│   │   │   └── [slug]/               # Dynamische Projekt-Detailseiten
│   │   │       └── page.tsx          # Projekt-Detail (/projekte/[slug])
│   │   │
│   │   ├── leistungen/               # Leistungsseiten
│   │   │   ├── branding/
│   │   │   │   └── page.tsx          # Branding (/leistungen/branding)
│   │   │   ├── ux-ui/
│   │   │   │   └── page.tsx          # UX/UI (/leistungen/ux-ui)
│   │   │   ├── web/
│   │   │   │   └── page.tsx          # Web (/leistungen/web)
│   │   │   └── marketing/
│   │   │       └── page.tsx          # Marketing (/leistungen/marketing)
│   │   │
│   │   └── ueber-uns/                # Über uns Seite
│   │       └── page.tsx              # Über uns (/ueber-uns)
│   │
│   ├── components/
│   │   ├── layout/                   # Layout-Komponenten
│   │   │   ├── Header.tsx            # Header mit Burger-Menü (Mobile)
│   │   │   └── Footer.tsx            # Footer mit CTA & Links
│   │   │
│   │   ├── sections/                 # Sektionen für Seiten
│   │   │   ├── Hero.tsx              # Hero Section (Startseite)
│   │   │   ├── ProjectsPreview.tsx   # Projekt-Slider (Startseite)
│   │   │   └── ProjectsSlider.tsx    # Wiederverwendbarer Slider mit Tag-Filter
│   │   │
│   │   └── ui/                       # UI-Komponenten
│   │       ├── Container.tsx         # Container (max-width: 1400px)
│   │       ├── SmoothScroll.tsx      # Locomotive Scroll Wrapper
│   │       └── ServiceIcons.tsx      # Service Icons (Branding, UX/UI, etc.)
│   │
│   └── data/
│       └── projects.ts               # Zentrale Projekt-Daten & Helper-Funktionen
│
├── public/
│   └── images/                       # Statische Bilder
│
├── docs/
│   └── PROJEKTSTRUKTUR.md            # Diese Datei
│
├── package.json
├── tsconfig.json
└── next.config.js
```

---

## 🎨 Design System

### CSS-Variablen (globals.css)

```css
--color-bg: #1A1B1F;           /* Dunkler Hintergrund */
--color-primary: #24262C;      /* Primäre Akzentfarbe */
--color-text: #E9E9EA;         /* Heller Text */
--color-hover: #E73725;        /* Hover/Akzent Rot */
--color-border: #3D3D3D;       /* Border-Farbe */
```

### Typografie

- **Sans-Serif**: `var(--font-sans)` - Für Headlines, Body-Text
- **Monospace**: `var(--font-mono)` - Für Buttons, Code

### Responsive Design

- **Breakpoints**:
  - Mobile: `< 768px`
  - Desktop: `>= 768px`
- **Fluid Typography**: `clamp()` für responsive Schriftgrößen
- **Fluid Spacing**: `clamp()` für responsive Abstände

---

## 📄 Seiten

### Startseite (`/`)
- **Hero Section**: Große Headline, Service Icons, CTA-Buttons, Video-Scroll-Animation
- **ProjectsPreview**: Infinite Slider mit allen aktiven Projekten

### Projektübersicht (`/projekte`)
- 2-Spalten Grid (Desktop) / 1-Spalte (Mobile)
- Zeigt alle Projekte mit `active: true`

### Projekt-Detailseite (`/projekte/[slug]`)
- Dynamische Seiten basierend auf `slug`
- Hero Image, Beschreibung, Ziel, **Bento Grid** für Bilder
- "Webseite besuchen" Link (wenn vorhanden)

### Leistungsseiten (`/leistungen/*`)
- **4 Seiten**: Branding, UX/UI, Web, Marketing
- Hero mit Headline, 3 Tags, Beschreibung, CTA
- **ProjectsSlider**: Zeigt nur Projekte mit passenden Tags

### Über uns (`/ueber-uns`)
- 4 Sektionen: Hero, Das Studio, Unsere Haltung, Unser Anspruch
- Klare Struktur, reduziertes Design

---

## 🗂️ Datenstruktur

### Projekte (`src/data/projects.ts`)

```typescript
interface Project {
  id: string;
  slug: string;              // URL-Slug (z.B. "studioforme")
  active: boolean;           // Zeigt Projekt an wenn true

  // Hero Section
  title: string;
  client: string;
  subtitle: string;
  tags: string[];            // Für Filterung auf Leistungsseiten
  heroImage: string;

  // Content
  description: string;
  challenge: string;
  solution: string;

  // Images (Bento Grid)
  images: {
    url: string;
    alt: string;
    caption?: string;
  }[];

  // Meta
  year?: string;
  services?: string[];
  website?: string;          // "Webseite besuchen" Link
}
```

### Helper-Funktionen

```typescript
// Nur aktive Projekte
getActiveProjects(): Project[]

// Projekt nach Slug finden
getProjectBySlug(slug: string): Project | undefined

// Alle Slugs für Static Generation
getAllProjectSlugs(): string[]
```

---

## 🚀 Dynamisches Projekt-System

### Workflow: Neues Projekt hinzufügen

1. **Projekt in `src/data/projects.ts` hinzufügen**:
   ```typescript
   {
     id: "5",
     slug: "neues-projekt",
     active: true,
     title: "Projektname",
     client: "Kunde",
     subtitle: "Kurzbeschreibung",
     tags: ["Branding", "UX/UI"],
     heroImage: "/images/projekt.jpg",
     description: "...",
     challenge: "...",
     solution: "...",
     images: [
       { url: "/images/bild1.jpg", alt: "Beschreibung" },
       { url: "/images/bild2.jpg", alt: "Beschreibung" }
     ],
     website: "https://example.com"
   }
   ```

2. **Automatisch erstellt**:
   - ✅ Projekt erscheint im Startseiten-Slider
   - ✅ Projekt erscheint in `/projekte` Übersicht
   - ✅ Detailseite unter `/projekte/neues-projekt`
   - ✅ Projekt erscheint in passenden Leistungsseiten (basierend auf Tags)

---

## 🎯 Features

### Locomotive Scroll
- Smooth Scrolling auf der gesamten Seite
- Konfiguration in `src/components/ui/SmoothScroll.tsx`
- Settings: `lerp: 0.08`, `multiplier: 0.9`

### Projekt-Slider
- **Startseite**: Zeigt alle aktiven Projekte
- **Leistungsseiten**: Filtert nach Tags
- Infinite Loop Animation
- Hover pausiert Animation
- Auto-Play: 10s pro Projekt

### Bento Grid (Projekt-Detailseiten)
- Dynamisches Layout für Projekt-Bilder
- Verschiedene Größen für interessantes Design
- Responsive: Desktop (12-Spalten) / Mobile (1-Spalte)

### Responsive Burger Menu
- Mobile Navigation in `Header.tsx`
- Fullscreen Overlay mit Animationen
- Hamburger → X Transformation

---

## 🛠️ Technologie-Stack

- **Framework**: Next.js 14 (App Router)
- **Sprache**: TypeScript
- **Styling**: CSS-in-JS (Inline Styles), CSS Modules
- **Scroll**: Locomotive Scroll
- **Bilder**: Next.js Image Optimization
- **Fonts**: Next.js Font Optimization

---

## 📝 Wichtige Konzepte

### 1. Zentrale Datenverwaltung
Alle Projekte sind in `src/data/projects.ts` gespeichert. Änderungen dort propagieren automatisch durch die gesamte App.

### 2. Tag-basierte Filterung
Leistungsseiten filtern Projekte anhand von Tags:
- **Branding**: `["branding"]`
- **UX/UI**: `["ux", "ui"]`
- **Web**: `["web", "entwicklung", "app"]`
- **Marketing**: `["marketing", "content", "social"]`

### 3. Dynamische Routen
- `/projekte/[slug]` nutzt den `slug` aus den Projektdaten
- Keine manuellen Page-Dateien nötig
- Skaliert automatisch mit neuen Projekten

### 4. Wiederverwendbare Komponenten
- `ProjectsSlider`: Slider mit optionalem Tag-Filter
- `Container`: Konsistente max-width über alle Seiten
- `ServiceIcons`: Zentrale Icon-Komponenten

---

## 🎨 Styling-Conventions

### Responsive Typography
```typescript
fontSize: "clamp(1rem, 2vw, 1.5rem)"
// min: 1rem, preferred: 2vw, max: 1.5rem
```

### Responsive Spacing
```typescript
padding: "clamp(60px, 8vw, 100px)"
gap: "clamp(20px, 3vw, 40px)"
```

### Hover-Effekte
```typescript
onMouseEnter={(e) => {
  e.currentTarget.style.backgroundColor = "var(--color-hover)";
}}
onMouseLeave={(e) => {
  e.currentTarget.style.backgroundColor = "transparent";
}}
```

---

## 📦 Deployment

### Build-Kommandos
```bash
npm run dev        # Development Server
npm run build      # Production Build
npm run start      # Production Server
```

### Statische Optimierung
- Bilder werden automatisch optimiert (Next.js Image)
- Fonts werden selbst gehostet
- CSS wird minifiziert

---

## 🔄 Wartung & Updates

### Neues Projekt hinzufügen
→ Nur `src/data/projects.ts` bearbeiten

### Neue Leistungsseite hinzufügen
→ Neue Seite in `src/app/leistungen/[name]/page.tsx` erstellen
→ `ProjectsSlider` mit passenden Tags verwenden

### Neue Sektion auf Startseite
→ Neue Komponente in `src/components/sections/` erstellen
→ In `src/app/page.tsx` importieren

---

## 📞 Support

Bei Fragen zur Projektstruktur oder Anpassungen, siehe:
- Diese Dokumentation
- Inline-Kommentare im Code
- TypeScript-Typen in `src/data/projects.ts`

---

**Letzte Aktualisierung**: 2025-02-20
**Version**: 1.0
