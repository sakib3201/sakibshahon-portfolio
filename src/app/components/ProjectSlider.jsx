import React from "react";
import ProjectCards from "./projectcard";
const ProjectSlider = () => {
  const projects = [
    {
      imageSrc:
        "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
      altText: "Album",
      title: "ICTBJ-2023",
      description: "The official website for JKKNIU ICTBJ-2023. A research fair of JKKNIU.",
      buttonText: "Listen",
    },
    {
      imageSrc:
        "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
      altText: "Album",
      title: "New album is released!",
      description: "Click the button to listen on Spotiwhy app.",
      buttonText: "Listen",
    },
    {
      imageSrc:
        "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
      altText: "Album",
      title: "New album is released!",
      description: "Click the button to listen on Spotiwhy app.",
      buttonText: "Listen",
    },
  ];
  return (
    <div>
      <h1 className="text-4xl mt-10 text-ivory text-center items-center justify-center m-5 mx-auto max-w-full cursor-default opacity-75">
        Projects
      </h1>

      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCards
            key={project.title}
            project={project}
            className={`w-1/2 ${index % 2 === 0 ? "mr-4" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;
