export interface Project {
  id: string;
  slug: string;
  active: boolean;

  // Hero Section
  title: string;
  client: string;
  subtitle: string;
  tags: string[];
  heroImage: string;

  // Content
  description: string;
  challenge: string;
  solution: string;

  // Images
  images: {
    url: string;
    alt: string;
    caption?: string;
  }[];

  // Meta
  year?: string;
  services?: string[];
  website?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    slug: "studioforme",
    active: true,
    title: "Projektbezogene Kernbotschaft",
    client: "Unternehmen GmbH",
    subtitle: "Digitale Markenplattform für einen technischen Mittelständler",
    tags: ["Branding", "UX/UI", "Entwicklung"],
    heroImage: "/images/Rectangle 32.png",
    description: "Name des Unternehmens ist ein Branche. Umgebungen auf Fokus auf Kernbotschaft. Mit wachsender Marktpräsenz entstand der Bedarf nach einer klar strukturierten digitalen Markenplattform.",
    challenge: "Ziel des Projekts war es, zentrale Ziel. Technische Inhalte verständlich aufzubereiten und eine stärkere Grundlage für zukunftige Kommunikation zu schaffen.",
    solution: "Die Lösung umfasst ein responsives Webdesign, klare Informationsarchitektur und eine moderne Bildsprache.",
    images: [
      {
        url: "/images/Rectangle 32.png",
        alt: "StudioForMe Laptop Mockup",
        caption: "Hauptansicht der Website"
      },
      {
        url: "/images/Rectangle 32.png",
        alt: "StudioForMe Detail 1"
      },
      {
        url: "/images/Rectangle 32.png",
        alt: "StudioForMe Detail 2"
      },
      {
        url: "/images/Rectangle 30.png",
        alt: "StudioForMe Detail 3"
      },
      {
        url: "/images/b6e1cfb7e6dca30bb1d10f654801df2b.jpg",
        alt: "StudioForMe Detail 4"
      },
      {
        url: "/images/a3b4db9389d9140cbe3b3ad2545516eb.jpg",
        alt: "StudioForMe Detail 5"
      },
      {
        url: "/images/Rectangle 32.png",
        alt: "StudioForMe Detail 6"
      },
      {
        url: "/images/Rectangle 30.png",
        alt: "StudioForMe Detail 7"
      }
    ],
    year: "2024",
    services: ["Branding", "UX/UI Design", "Webentwicklung"],
    website: "https://example.com"
  },
  {
    id: "2",
    slug: "viper-beer",
    active: true,
    title: "Projektbezogene Kernbotschaft",
    client: "Beispiel Brand 01",
    subtitle: "Branding & Packaging Design",
    tags: ["Branding", "Design"],
    heroImage: "/images/b6e1cfb7e6dca30bb1d10f654801df2b.jpg",
    description: "Entwicklung einer markanten Biermarke mit einzigartigem visuellen Auftritt.",
    challenge: "Positionierung in einem gesättigten Markt mit klarer Differenzierung.",
    solution: "Mutiges Packaging Design mit charakterstarker Typografie und Farbgebung.",
    images: [
      {
        url: "/images/b6e1cfb7e6dca30bb1d10f654801df2b.jpg",
        alt: "Viper Beer Packaging"
      },
      {
        url: "/images/Rectangle 32.png",
        alt: "Viper Beer Detail 1"
      },
      {
        url: "/images/a3b4db9389d9140cbe3b3ad2545516eb.jpg",
        alt: "Viper Beer Detail 2"
      },
      {
        url: "/images/Rectangle 30.png",
        alt: "Viper Beer Detail 3"
      },
      {
        url: "/images/b6e1cfb7e6dca30bb1d10f654801df2b.jpg",
        alt: "Viper Beer Detail 4"
      },
      {
        url: "/images/Rectangle 32.png",
        alt: "Viper Beer Detail 5"
      }
    ],
    year: "2024",
    services: ["Branding", "Packaging Design"]
  },
  {
    id: "3",
    slug: "sour-sour",
    active: true,
    title: "Projektbezogene Kernbotschaft",
    client: "Beispiel Brand 01",
    subtitle: "Craft Beer Branding",
    tags: ["Branding"],
    heroImage: "/images/a3b4db9389d9140cbe3b3ad2545516eb.jpg",
    description: "Kreative Markenidentität für eine neue Craft Beer Linie.",
    challenge: "Ansprache einer jungen, designaffinen Zielgruppe.",
    solution: "Lebendige Farbwelt und verspielte visuelle Elemente.",
    images: [
      {
        url: "/images/a3b4db9389d9140cbe3b3ad2545516eb.jpg",
        alt: "Sour Sour Packaging"
      },
      {
        url: "/images/Rectangle 30.png",
        alt: "Sour Sour Detail 1"
      },
      {
        url: "/images/Rectangle 32.png",
        alt: "Sour Sour Detail 2"
      },
      {
        url: "/images/b6e1cfb7e6dca30bb1d10f654801df2b.jpg",
        alt: "Sour Sour Detail 3"
      },
      {
        url: "/images/a3b4db9389d9140cbe3b3ad2545516eb.jpg",
        alt: "Sour Sour Detail 4"
      },
      {
        url: "/images/Rectangle 30.png",
        alt: "Sour Sour Detail 5"
      },
      {
        url: "/images/Rectangle 32.png",
        alt: "Sour Sour Detail 6"
      }
    ],
    year: "2024",
    services: ["Branding", "Visual Identity"]
  },
  {
    id: "4",
    slug: "food-app",
    active: true,
    title: "Projektbezogene Kernbotschaft",
    client: "Beispiel Brand 01",
    subtitle: "Food Delivery App Design",
    tags: ["UX/UI", "App"],
    heroImage: "/images/Rectangle 30.png",
    description: "Intuitive App-Lösung für Food Delivery Services.",
    challenge: "Einfache Bestellung und nahtlose User Experience.",
    solution: "Clean Interface mit fokussierter Navigation und appetitanregendem Design.",
    images: [
      {
        url: "/images/Rectangle 30.png",
        alt: "Food App Interface"
      },
      {
        url: "/images/Rectangle 32.png",
        alt: "Food App Detail 1"
      },
      {
        url: "/images/b6e1cfb7e6dca30bb1d10f654801df2b.jpg",
        alt: "Food App Detail 2"
      },
      {
        url: "/images/Rectangle 30.png",
        alt: "Food App Detail 3"
      },
      {
        url: "/images/a3b4db9389d9140cbe3b3ad2545516eb.jpg",
        alt: "Food App Detail 4"
      },
      {
        url: "/images/Rectangle 32.png",
        alt: "Food App Detail 5"
      },
      {
        url: "/images/Rectangle 30.png",
        alt: "Food App Detail 6"
      }
    ],
    year: "2024",
    services: ["UX/UI Design", "App Development"]
  }
];

// Nur aktive Projekte
export const getActiveProjects = () => PROJECTS.filter(p => p.active);

// Projekt nach Slug finden
export const getProjectBySlug = (slug: string) => PROJECTS.find(p => p.slug === slug && p.active);

// Alle Slugs für Static Generation
export const getAllProjectSlugs = () => PROJECTS.filter(p => p.active).map(p => p.slug);
