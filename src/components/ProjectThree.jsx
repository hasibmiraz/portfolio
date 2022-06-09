import React from 'react';
import Food from '../assets/food.JPG';

const ProjectThree = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Food})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      <div className="opacity-0 group-hover:opacity-100">
        <span className="text-2xl ml-2 font-bold text-white tracking-wider">
          Frontend SPA
        </span>
        <div className="pt-8 text-center">
          <a
            href="https://food-catering-c62df.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Live Site
            </button>
          </a>
          <a
            href="https://github.com/hasibmiraz/food-catering"
            target="_blank"
            rel="noreferrer"
          >
            <button className="text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Client Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectThree;
