import { PortfolioFooter } from "@/components/portfolio/footer";
import { PortfolioNavbar } from "@/components/portfolio/navbar";
import { StructuredData } from "@/components/portfolio/structured-data";
import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("@/components/portfolio/hero-section"),
);
const AboutSection = dynamic(
  () => import("@/components/portfolio/about-section"),
);
const ProjectsSection = dynamic(
  () => import("@/components/portfolio/projects-section"),
);
const SkillsSection = dynamic(
  () => import("@/components/portfolio/skills-section"),
);
const ExperienceSection = dynamic(
  () => import("@/components/portfolio/experience-section"),
);
const ContactSection = dynamic(
  () => import("@/components/portfolio/contact-section"),
);

export default function Home() {
  return (
    <>
      <StructuredData />
      <PortfolioNavbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <PortfolioFooter />
    </>
  );
}
