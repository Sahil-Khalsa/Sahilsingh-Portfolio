import { Navbar }            from "@/components/Navbar";
import { HeroSection }       from "@/components/HeroSection";
import { AboutSection }      from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection }          from "@/components/SkillsSection";
import { ProjectsSection }        from "@/components/ProjectsSection";
import { CertificationsSection }  from "@/components/CertificationsSection";
import { ContactSection }    from "@/components/ContactSection";
import { StatsMarquee }     from "@/components/StatsMarquee";
import { Footer }            from "@/components/Footer";
import { StarBackground }    from "@/components/StarBackground";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { CursorSpotlight }   from "@/components/CursorSpotlight";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CursorSpotlight />
      <ScrollProgressBar />
      <StarBackground />
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <StatsMarquee />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
