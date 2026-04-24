import LegacyNavbar from "./components/LegacyNavbar";
import HomepageHero from "./components/HomepageHero";
import ServiceSection from "./components/ServiceSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectCard from "./components/projectcard";
import HomepageContactMe from "./components/HomepageContactMe";
import Footer from "./components/Footer";

const featuredProjects = [
  {
    title: "ICTBJ-2023",
    description:
      "The official website of Jatiya Kabi Kazi Nazrul Islam University's research conference on Technology, Business, and Justice.",
    tags: ["React.js", "Node.js", "MySQL"],
    liveLink: "https://ictbj.jkkniu.edu.bd/",
    githubLink: "",
    youtubeLink: "",
  },
  {
    title: "Decentralized Voting App",
    description:
      "A blockchain-based voting app with facial recognition for voter authentication. Voting data stored on-chain for maximum security.",
    tags: ["Blockchain", "Solidity", "Python"],
    liveLink: "",
    githubLink: "",
    youtubeLink: "",
  },
  {
    title: "Amar Shop",
    description:
      "Complete solutions for small to medium-sized shops: inventory management, financial analytics, and customer & sales management.",
    tags: ["React.js", "Node.js", "MongoDB"],
    liveLink: "",
    githubLink: "",
    youtubeLink: "",
  },
];

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <LegacyNavbar />
      <HomepageHero />
      <ServiceSection />
      <ExperienceTimeline />
      <section className="max-w-7xl mx-auto px-6 py-lg">
        <div className="mb-lg">
          <span className="font-data-mono text-label-caps text-primary-container uppercase tracking-widest block mb-xs animate-glitch">
            {"// FEATURED WORK"}
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface border-b border-slate-800 pb-sm">
            Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
      <HomepageContactMe />
      <Footer />
    </main>
  );
}
