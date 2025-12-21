import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary text-white selection:bg-accent selection:text-white">
      <Hero />
      <Services />
    </main>
  );
}
