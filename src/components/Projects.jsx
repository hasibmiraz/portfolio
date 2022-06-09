import React from 'react';
import Bicycle from '../assets/bicycle.JPG';
import Gadget from '../assets/gadget.JPG';
import Food from '../assets/food.JPG';

const Projects = () => {
  return (
    <div
      name="Projects"
      className="bg-[#0a192f] w-full md:h-screen text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Projects
          </p>
          <p className="py-6">
            Please have a look at some of my recent web applications
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${Bicycle})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                MERN Stack Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://bicycle4life-83943.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live Site
                  </button>
                </a>
                <a
                  href="https://github.com/hasibmiraz/bicycle4life-client"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Client Code
                  </button>
                </a>
                <a
                  href="https://github.com/hasibmiraz/bicycle4life-server"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Server Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
