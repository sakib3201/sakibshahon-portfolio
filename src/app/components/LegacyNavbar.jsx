import React from "react";

const LegacyNavbar = () => {
  return (
    <div class="flex cursor-pointer max-w-10">
      <i
        class="custom-icon-menu transform translate-y-2 p-4 rounded-full bg-sky-500 text-black hover:text-white hover:bg-sky-500 cursor-pointer"
        id="Activator"
      ></i>
      <nav class="align-self-auto bg-gray-700 rounded-full md:rounded-l-none md:rounded-r-full p-2 bg-opacity-75">
        <ul class="flex list-style-none font-normal text-sky-500 pt-0">
          <li class="mr-4">
            <a
              href="index.html"
              class="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              <i class="custom-icon-home"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LegacyNavbar;
