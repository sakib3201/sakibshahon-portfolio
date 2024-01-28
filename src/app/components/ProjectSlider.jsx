import React from "react";
import ProjectCards from "./projectcard";
const ProjectSlider = () => {
  const projects = [
    {
      imageSrc:
        "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
      altText: "ICTBJ-2023",
      title: "ICTBJ-2023",
      description: "The official website for JKKNIU ICTBJ-2023. A seminar on researc",
      buttonText: "Details",
    },
    {
      imageSrc:
        "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
      altText: "Album",
      title: "Block-chain based Voting App with face recognition",
      description: "A block chain based voting app that has facial recognition for voter authentication",
      buttonText: "Details",
    },
    {
      imageSrc:
        "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
      altText: "Album",
      title: "New album is released!",
      description: "Click the button to listen on Spotiwhy app.",
      buttonText: "Details",
    },
  ];
  return (
    <div>
      <h1 className="text-4xl mt-10 text-ivory text-center items-center justify-center m-5 mx-auto max-w-full cursor-default">
        Projects
      </h1>

      <div className="flex flex-wrap">
        {projects.map((project) => (
          <ProjectCards
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;
