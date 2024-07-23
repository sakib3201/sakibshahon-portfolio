import React from 'react';
import ProjectLibraryCards from './ProjectLibraryCard';

const ProjectLibrary = () => {
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
        <div className='project_library_collection'>
            {projects.map((project) => (
                <ProjectLibraryCards key={project.title} project={project} />
            ))}
        </div>
    );
};

export default ProjectLibrary;