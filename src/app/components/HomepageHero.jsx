import React from "react";

const HomepageHero = () => {
  return (
    <div>
      <div className="Outer-homepage">
        <div className="Homepage">
          <div className="Home-page-name">
            <span id="Letter-S">S</span>
            <span id="Letter-a">a</span>
            <span id="Letter-k">k</span>
            <span id="Letter-i">i</span>
            <span id="Letter-b">b</span>
            Ahamed Shahon
          </div>
          <div id="personal-description">Developer & Designer </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center space-between items-center">
        <button className="w-20 text-sky-500 rounded-full border-2 border-sky-500 px-4 py-2 mt-4 mr-2 ml-2 text-lg font-medium duration-500 ease-out outline-none flex-grow ">
          Works
        </button>
        <button className="w-20 text-sky-500 rounded-full border-2 border-sky-500 px-4 py-2 mt-4 mr-2 ml-2 text-lg font-medium duration-500 ease-out outline-none flex-grow ">
          Skills
        </button>
        <button className="w-20 text-sky-500 rounded-full border-2 border-sky-500 px-4 py-2 mt-4 mr-2 ml-2 text-lg font-medium duration-500 ease-out outline-none flex-grow ">
          Blogs
        </button>
        <button className="w-20 text-sky-500 rounded-full border-2 border-sky-500 px-4 py-2 mt-4 mr-2 ml-2 text-lg font-medium duration-500 ease-out outline-none flex-grow ">
          Resume
        </button>
      </div>
    </div>
  );
};

export default HomepageHero;
