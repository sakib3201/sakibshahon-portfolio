import React from "react";
import ProjectLibraryCards from "./ProjectLibraryCard";

const projects = [
  {
    title: "ICTBJ-2023",
    description:
      "The official website of Jatiya Kabi Kazi Nazrul Islam University's research conference on Technology, Business, and Justice. Used by hundreds of students, teachers, and researchers to submit papers and register.",
    tags: ["React.js", "Node.js", "MySQL"],
    liveLink: "https://ictbj.jkkniu.edu.bd/",
    githubLink: "",
    youtubeLink: "",
  },
  {
    title: "Decentralized Voting App",
    description:
      "A blockchain-based voting app that stores voting data on-chain. Provides an extremely secure voting system with facial recognition for voter authentication.",
    tags: ["Blockchain", "Solidity", "Python", "OpenCV"],
    liveLink: "",
    githubLink: "",
    youtubeLink: "",
  },
  {
    title: "Amar Shop",
    description:
      "Complete solutions for a small to medium-sized shop: inventory management, financial report generation & analytics, customer & sales management.",
    tags: ["React.js", "Node.js", "MongoDB"],
    liveLink: "",
    githubLink: "",
    youtubeLink: "",
  },
];

const ProjectLibrary = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        {projects.map((project) => (
          <ProjectLibraryCards key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectLibrary;
