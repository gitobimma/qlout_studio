import Hero from "@/components/sections/Hero";
import Focus from "@/components/sections/Focus";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import Logos from "@/components/sections/Logos";
import Principles from "@/components/sections/Principles";

export default function Home() {
  return (
    <main>
      <Hero />
      <Focus />
      <ProjectsPreview />
      <Logos />
      <Principles />
    </main>
  );
}
