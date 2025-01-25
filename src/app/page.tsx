import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TrustedSection from "@/components/TrustedSection";
import WorkSection from "@/components/WorkSection";
import ProcessSection from "@/components/ProcessSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <TrustedSection />
      <WorkSection />
      <ProcessSection />
      {/* Other sections will go here */}
    </main>
  );
}
