import Link from "next/link";
import NavBar from "../app/components/Navbar"
import HomepageHero from "../app/components/HomepageHero"
import LegacyNavbar from "../app/components/LegacyNavbar"

export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <HomepageHero></HomepageHero>
    </main>
  );
}
