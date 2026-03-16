export interface Project {
  id: string;
  slug: string;
  active: boolean;

  // Hero Section
  title: string;
  client: string;
  subtitle: string;
  tags: string[];
  heroImage: string; // Header image on detail page
  sliderImage?: string; // Optional: different image for slider (if not set, uses heroImage)

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
    slug: "foliage-dreams",
    active: true,
    title: "Foliage Dreams",
    client: "E-Commerce Pflanzenhandel",
    subtitle: "Von der Idee zur Marke",
    tags: ["Branding", "Design", "E-Commerce"],
    heroImage: "/images/referenzen/foliagedreams/Ref-Foliage-Dreams-Header_2.webp",
    sliderImage: "/images/referenzen/foliagedreams/Referenz-Foliage-Dreams-Basis.webp",
    description: "Aus einem jungen Startup ohne visuelle Identität wurde eine professionelle Marke mit eigenem Onlineshop und klarer Positionierung im Markt für exotische Pflanzen.",
    challenge: "Das Startup Foliage Dreams hatte keine visuelle Identität und benötigte eine professionelle Markenplattform, um sich im wettbewerbsintensiven Markt für exotische Pflanzen zu positionieren.",
    solution: "Entwicklung einer kompletten Markenidentität von Grund auf – von Logo über Farbwelt bis hin zum vollständigen Shopify-Onlineshop mit durchgängigem Corporate Design.",
    images: [
      {
        url: "/images/referenzen/foliagedreams/Ref-Foliage-Dreams-1.webp",
        alt: "Foliage Dreams Branding Detail 1"
      },
      {
        url: "/images/referenzen/foliagedreams/Ref-Foliage-Dreams-2.webp",
        alt: "Foliage Dreams Branding Detail 2"
      },
      {
        url: "/images/referenzen/foliagedreams/Ref-Foliage-Dreams-3.webp",
        alt: "Foliage Dreams Branding Detail 3"
      },
      {
        url: "/images/referenzen/foliagedreams/Ref-Foliage-Dreams-4.webp",
        alt: "Foliage Dreams Shop Interface"
      },
      {
        url: "/images/referenzen/foliagedreams/Ref-Foliage-Dreams-5.webp",
        alt: "Foliage Dreams Product View"
      },
      {
        url: "/images/referenzen/foliagedreams/Ref-Foliage-Dreams-6.webp",
        alt: "Foliage Dreams Detail 6"
      },
      {
        url: "/images/referenzen/foliagedreams/Ref-Foliage-Dreams-7.webp",
        alt: "Foliage Dreams Detail 7"
      }
    ],
    year: "2024",
    services: ["Branding & Design"],
    website: "https://foliagedreams.com/"
  },
  {
    id: "2",
    slug: "bw-krings",
    active: true,
    title: "BW-Krings",
    client: "Online Shop für Bundeswehr und Outdoor",
    subtitle: "E-Commerce Relaunch",
    tags: ["E-Commerce", "Branding", "Web"],
    heroImage: "/images/referenzen/bw-krings/Ref-BW-Krings-Header_1.webp",
    sliderImage: "/images/referenzen/bw-krings/Referenz-BW-Krings-Basis_9.webp",
    description: "Vom stagnierenden Standard-Shop zur eigenständigen Marke mit automatisierten Prozessen und messbarem Wachstum – ein strategischer Relaunch mit Fokus auf Performance und Branding.",
    challenge: "Der bestehende Online-Shop war technisch veraltet und hatte keine eigenständige Markenidentität. Die Prozesse waren nicht automatisiert, was zu ineffizienten Arbeitsabläufen und stagnierendem Wachstum führte.",
    solution: "Kompletter strategischer Relaunch auf JTL-Basis mit Fokus auf Performance-Optimierung, automatisierte Prozesse und Entwicklung einer starken, eigenständigen Markenidentität für messbares Wachstum.",
    images: [
      {
        url: "/images/referenzen/bw-krings/Ref-BW-Krings-2.webp",
        alt: "BW-Krings Shop Interface"
      },
      {
        url: "/images/referenzen/bw-krings/Ref-BW-Krings-3.webp",
        alt: "BW-Krings Product View"
      },
      {
        url: "/images/referenzen/bw-krings/Ref-BW-Krings-4.webp",
        alt: "BW-Krings Detail 4"
      },
      {
        url: "/images/referenzen/bw-krings/Ref-BW-Krings-5.webp",
        alt: "BW-Krings Detail 5"
      },
      {
        url: "/images/referenzen/bw-krings/Ref-BW-Krings-6.webp",
        alt: "BW-Krings Detail 6"
      },
      {
        url: "/images/referenzen/bw-krings/Ref-BW-Krings-7.webp",
        alt: "BW-Krings Detail 7"
      },
      {
        url: "/images/referenzen/bw-krings/Ref-BW-Krings-8.webp",
        alt: "BW-Krings Detail 8"
      }
    ],
    year: "2024",
    services: ["E-Commerce", "Branding", "Web Development"],
    website: "https://bw-krings.de"
  },
  {
    id: "3",
    slug: "hbe-gmbh",
    active: true,
    title: "HBE GmbH",
    client: "SAP-Entwicklung",
    subtitle: "Branding & Webdesign",
    tags: ["Branding", "Design", "Web"],
    heroImage: "/images/referenzen/hbe/REF-HBE-Header.webp",
    sliderImage: "/images/referenzen/hbe/Ref-HBE-Basis.webp",
    description: "Für die HBE GmbH entwickelten wir nach der Neugründung das komplette visuelle Erscheinungsbild. Dazu gehörten Logo, Corporate Design, Kreditkarten-Design sowie die Konzeption und Umsetzung der neuen Webseite.",
    challenge: "Die HBE GmbH stand nach ihrer Neugründung vor der Herausforderung, eine professionelle Markenidentität aufzubauen, die Vertrauen schafft und das Unternehmen als kompetenten Partner im Bereich SAP-Entwicklung positioniert.",
    solution: "Entwicklung einer ganzheitlichen Markenidentität von Grund auf – vom Logo über das Corporate Design bis hin zur kompletten Webseite. Ergänzt durch individuelle Gestaltungselemente wie Kreditkarten-Design für einen durchgängigen professionellen Auftritt.",
    images: [
      {
        url: "/images/referenzen/hbe/REF-HBE-1.webp",
        alt: "HBE Branding Detail 1"
      },
      {
        url: "/images/referenzen/hbe/REF-HBE-2.webp",
        alt: "HBE Branding Detail 2"
      },
      {
        url: "/images/referenzen/hbe/REF-HBE-3.webp",
        alt: "HBE Webdesign"
      },
      {
        url: "/images/referenzen/hbe/REF-HBE-4.webp",
        alt: "HBE Corporate Design"
      },
      {
        url: "/images/referenzen/hbe/REF-HBE-5.webp",
        alt: "HBE Detail 5"
      },
      {
        url: "/images/referenzen/hbe/REF-HBE-6.webp",
        alt: "HBE Detail 6"
      },
      {
        url: "/images/referenzen/hbe/REF-HBE-7.webp",
        alt: "HBE Detail 7"
      },
      {
        url: "/images/referenzen/hbe/REF-HBE-8.webp",
        alt: "HBE Detail 8"
      }
    ],
    year: "2024",
    services: ["Branding & Design"],
    website: "https://hbe-gmbh.de"
  },
  {
    id: "studioforme",
    slug: "studioforme",
    active: false,
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
    id: "viper-beer",
    slug: "viper-beer",
    active: false,
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
    id: "sour-sour",
    slug: "sour-sour",
    active: false,
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
    id: "food-app",
    slug: "food-app",
    active: false,
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
