import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CorporateTeaser from "@/components/CorporateTeaser";
import ProjectsTeaser from "@/components/ProjectsTeaser";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary text-white selection:bg-accent selection:text-white">
      <Hero />
      <Services />
      <CorporateTeaser />
      <ProjectsTeaser />
    </main>
  );
}
