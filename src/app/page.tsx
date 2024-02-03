import HomepageHero from "../app/components/HomepageHero";
import LegacyNavbar from "../app/components/LegacyNavbar";
import ProjectSlider from "../app/components/ProjectSlider";
import ServiceSection from "./components/ServiceSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <LegacyNavbar></LegacyNavbar>
      <HomepageHero></HomepageHero>
      <ProjectSlider></ProjectSlider>
      <ServiceSection></ServiceSection>
      <Footer></Footer>
    </main>
  );
}
