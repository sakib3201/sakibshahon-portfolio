import React from "react";

const ProjectCards = ({ project }) => {
  return (
    <div className="w-2/5 max-h-4/5 bg-slate-900 border-blue mx-auto rounded-lg overflow-hidden shadow-lg hover:shadow-gray-700 lg:card-side m-5 hover:scale-105 transition duration-300 ease-in-out">
      <div className="items-center justify-between">
        <figure className="flex-grow-0 w-30 max-h-1/2">
          <img
            loading="lazy"
            src={project.imageSrc}
            alt={project.altText}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="flex-grow w-full p-4">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <p className="mt-2">{project.description}</p>
          <div className="mt-4">
            <button className="border-2 font-medium px-4 py-2 rounded-full hover:border-sky-900 hover:text-sky-900 duration-300 ease-out">
              {project.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
