import React from "react";
import { FaGithub, FaLink, FaYoutube } from "react-icons/fa";

const ProjectCards = ({ project }) => {
  return (
    <div className="carousel-item w-3/5 card bg-black shadow-lg hover:shadow-gray-700 lg:card-side m-5 hover:scale-105 transition duration-300 ease-in-out">
      <figure className="max-w-md min-h-md">
        <img
          className="object-cover hover:object-contain min-h-80 lg:w-full lg:h-full transition-all duration-1000"
          loading="lazy"
          src={project.imageSrc}
          alt={project.altText}
        />
      </figure>
      <div className="card-body bg-slate-800 lg:rounded-r-2xl">
        <h2 className="card-title">{project.title}</h2>
        <p className="max-w-md text-justify">{project.description}</p>
        <div className="card-actions justify-end">
          <div className="card-actions justify-start self-center">
            <a href={project.liveLink} className="ml-2 text-gray-400 hover:text-gray-100 text-4xl cursor-pointer">
              <FaLink />
            </a>
            <a href={project.githubLink} className="ml-2 text-gray-400 hover:text-black text-4xl cursor-pointer">
              <FaGithub />
            </a>
            <a href={project.youtubeLink} className="ml-2 text-gray-400 hover:text-red-500 text-4xl cursor-pointer">
              <FaYoutube />
            </a>
          </div>
          <button className="btn btn-outline btn-secondary hover:btn-accent rounded-full">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
