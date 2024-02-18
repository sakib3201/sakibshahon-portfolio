import React from "react";
import ProjectCards from "./projectcard";

const ProjectSlider = () => {
  const projects = [
    {
      imageSrc: "/images/ictbjhomepage.png",
      altText: "ICTBJ-2023",
      title: "ICTBJ-2023",
      description: "The official website of Jatiya Kabi Kazi Nazrul Islam University's research conference on Technology, Business, and Justice. Used by over hundreds of students, teachers, and researchers to submit their research papers and register for the conference.",
      liveLink: "https://ictbj.jkkniu.edu.bd/",
      youtubeLink: "",
      githubLink: "",
    },
    {
      imageSrc: "/images/evotingproject.png",
      altText: "Evoting Project",
      title: "Decentralized Voting App",
      description: "A blockchain-based voting app that stores its voting data in the blockchain. Providing extremely secure voting system. It has facial recognition for voter authentication.",
      liveLink: "",
      youtubeLink: "",
      githubLink: "",
    },
    {
      imageSrc: "/images/amarshopproject.png",
      altText: "E-commerce website",
      title: "Amar Shop",
      description: "A website that offers complete solutions for a small to medium-sized shop with features including inventory management, financial report generation & analytics, and customer & sales management.",
      liveLink: "",
      youtubeLink: "",
      githubLink: "",
    },
  ];
  return (
    <div>
      <div id="Projects" className="flex justify-center items-center mt-10 mb-5 text-5xl font-montseratt font-bold">
        Featured projects
      </div>
      
      <div className="carousel carousel-center p-4 space-x-4">
          {projects.map((project) => (
            <ProjectCards key={project.title} project={project} />
          ))}
      </div>

      <div className="flex justify-center items-center m-5 mb-8">
        <button className="btn btn-ghost btn-outline btn-lg rounded-full shadow-md hover:border-base-100 hover:shadow-black hover:scale-110 transition duration-300 ease-in-out">
          View all Projects
        </button>
      </div>
    </div>
  );
};

export default ProjectSlider;
