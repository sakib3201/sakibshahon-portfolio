import React from "react";

const ProjectCards = ({ project }) => {
  return (
    <div className="card bg-black shadow-lg hover:shadow-gray-700 lg:card-side m-5 hover:scale-105 transition duration-300 ease-in-out">
      <figure className="max-w-md">
        <img
          className="object-contain w-full h-full duration-1000"
          loading="lazy"
          src={project.imageSrc}
          alt={project.altText}
        />
      </figure>
      <div className="card-body bg-slate-800 rounded-r-2xl">
        <h2 className="card-title">{project.title}</h2>
        <p className=" max-w-md">{project.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary hover:btn-accent">
            {project.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
