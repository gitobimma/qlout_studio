export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "QLOUT Studio",
    "url": "https://qlout.studio",
    "logo": "https://qlout.studio/logo.png",
    "description": "QLOUT Studio entwickelt strategische Markenplattformen an der Schnittstelle von Branding, UX/UI und Technologie.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DE",
      // "streetAddress": "[Ihre Straße]",
      // "addressLocality": "[Ihre Stadt]",
      // "postalCode": "[PLZ]"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "kontakt@qlout.studio",
      // "telephone": "[Ihre Telefonnummer]"
    },
    "sameAs": [
      // "https://www.instagram.com/qlout.studio",
      // "https://www.linkedin.com/company/qlout-studio",
      // "https://www.behance.net/qlout-studio"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "QLOUT Studio",
    "url": "https://qlout.studio",
    "description": "Design Studio für strategische Markenplattformen",
    "publisher": {
      "@type": "Organization",
      "name": "QLOUT Studio"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://qlout.studio/projekte?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceSchema {
  name: string;
  description: string;
  url: string;
}

export function ServiceListSchema({ services }: { services: ServiceSchema[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.name,
        "description": service.description,
        "url": service.url,
        "provider": {
          "@type": "Organization",
          "name": "QLOUT Studio"
        }
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
