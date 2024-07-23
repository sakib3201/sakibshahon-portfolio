import React from "react";
import backgroundImage from "/public/images/projectbg3.jpg";
import backgroundImageMobile from "/public/images/projectbg2.webp";

const ProjectsHeroSection = () => {
  return (
    <div
      style={{
        "--image-url": `url(${backgroundImage.src})`,
        "--image-url-mobile": `url(${backgroundImageMobile.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="hero min-h-screen flex bg-[image:var(--image-url-mobile)] md:bg-[image:var(--image-url)]"
    >
      <div className="hero-content text-left flex-column lg:flex-row-reverse">
        <div className="max-w-lg pl-10 bg-base-100 p-5 rounded-xl bg-opacity-90 md:bg-base-200 md:bg-opacity-90 hover:bg-opacity-100 duration-300 transition ease-in-out">
          <h1 className="text-3xl font-bold rounded">
            <span className="text-secondary"> Solutions I have crafted </span>
          </h1>
          <h2 className="text-xl">
            <span className="text-accent hover:underline"> Websites </span>
            <span className="text-amber-500 hover:underline"> Data analytics</span>
            <span className="text-emerald-500 hover:underline"> AI & ML </span>
          </h2>
          <p className="mt-2 text-lg rounded">
            Each project I have build taught me new things and helped me grow as
            a software engineer and in a way as person too. <br />
            If you have a project in mind, I would love to help you bring it to
            life. Specially if it{" "}
            <em className="text-secondary bold">solves a problem</em> or{" "}
            <em className="text-accent">helps people</em> in some way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHeroSection;
