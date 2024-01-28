import Link from "next/link";
import NavBar from "../app/components/Navbar"
import HomepageHero from "../app/components/HomepageHero"
import LegacyNavbar from "../app/components/LegacyNavbar"
import ProjectSlider from "../app/components/ProjectSlider"
export default function Home() {
  return (
    <main>
      <LegacyNavbar></LegacyNavbar>
      <HomepageHero></HomepageHero>
      <ProjectSlider></ProjectSlider>
    </main>
  );
}
