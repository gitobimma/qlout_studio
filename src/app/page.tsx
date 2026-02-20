import Hero from "@/components/sections/Hero";
import Focus from "@/components/sections/Focus";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import Logos from "@/components/sections/Logos";
import Principles from "@/components/sections/Principles";
import { OrganizationSchema, WebsiteSchema, ServiceListSchema } from "@/components/seo/StructuredData";

export default function Home() {
  const services = [
    {
      name: "Branding",
      description: "Strategische Markenentwicklung und Corporate Design",
      url: "https://qlout.studio/leistungen/branding"
    },
    {
      name: "UX/UI Design",
      description: "Nutzerzentrisches Interface Design für digitale Produkte",
      url: "https://qlout.studio/leistungen/ux-ui"
    },
    {
      name: "Webentwicklung",
      description: "Moderne Webanwendungen und digitale Plattformen",
      url: "https://qlout.studio/leistungen/web"
    },
    {
      name: "Marketing",
      description: "Strategische Kommunikation und digitales Marketing",
      url: "https://qlout.studio/leistungen/marketing"
    }
  ];

  return (
    <>
      <OrganizationSchema />
      <WebsiteSchema />
      <ServiceListSchema services={services} />
      <main>
        <Hero />
        <Focus />
        <ProjectsPreview />
        <Logos />
        <Principles />
      </main>
    </>
  );
}
