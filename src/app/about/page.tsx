import LegacyNavbar from "../../app/components/LegacyNavbar";
import Footer from "../../app/components/Footer";
import HomepageTimeLine from "../../app/components/HomepageTimeLine";
import HomepageContactMe from "../../app/components/HomepageContactMe"; 

export default function Home() {
  return (
    <main>
      <LegacyNavbar></LegacyNavbar>
      <HomepageTimeLine></HomepageTimeLine>
      <HomepageContactMe></HomepageContactMe>
      <Footer></Footer>
    </main>
  );
}
