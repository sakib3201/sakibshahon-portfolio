import LegacyNavbar from "../../app/components/LegacyNavbar";
import Footer from "../../app/components/Footer";
import ProjectsHeroSection from "../../app/components/ProjectsHeroSection";
import ProjectLibrary from "../../app/components/ProjectLibrary";

export default function Home() {
  return (
    <main>
      <LegacyNavbar></LegacyNavbar>
      <ProjectsHeroSection></ProjectsHeroSection>
      <ProjectLibrary></ProjectLibrary>
      <Footer></Footer>
    </main>
  );
}
