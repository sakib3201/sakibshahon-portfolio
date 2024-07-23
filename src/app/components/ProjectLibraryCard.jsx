import React from "react";
// import { FaGithub, FaLink, FaYoutube } from "react-icons/fa";

const ProjectLibraryCards = ({ project }) => {
    return (
        <div className="grid grid-cols-2 gap-4 m-2 p-2 bg-slate-800">
            <div className="flex items-center justify-center">
                <img src={project.imageSrc} alt="Project Image" className="w-100 h-100" />
            </div>
            <div>
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <p className="text-gray-500">{project.description}</p>
            </div>
        </div>
    );
};

export default ProjectLibraryCards;
