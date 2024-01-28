import React from "react";

const ProjectCards = ({ project }) => {
  return (
    <div className="rounded-lg shadow-lg hover:shadow-gray-700 transition duration-300 ease-in-out">
      <figure className="w-full h-64 lg:h-48 object-cover">
        <img loading="lazy" src={project.imageSrc} alt={project.altText} className="w-full h-full object-cover" />
      </figure>
      <div className="p-4 lg:p-6">
        <h2 className="text-2xl font-bold lg:text-3xl mb-2">{project.title}</h2>
        <p className="text-lg">{project.description}</p>
        <div className="mt-4">
          <button className="rounded-full bg-blue-500 text-white px-4 py-2 hover:bg-blue-700">
            {project.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
