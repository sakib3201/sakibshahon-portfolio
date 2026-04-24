import LegacyNavbar from "../../app/components/LegacyNavbar";
import ProjectsHeroSection from "../../app/components/ProjectsHeroSection";
import ProjectLibrary from "../../app/components/ProjectLibrary";
import Footer from "../../app/components/Footer";

export default function Projects() {
  return (
    <main className="bg-background min-h-screen">
      <LegacyNavbar />
      <ProjectsHeroSection />
      <ProjectLibrary />
      <Footer />
    </main>
  );
}
