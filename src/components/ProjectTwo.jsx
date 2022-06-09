import React from 'react';
import Gadget from '../assets/gadget.JPG';

const ProjectTwo = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Gadget})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      <div className="opacity-0 group-hover:opacity-100">
        <span className="text-2xl font-bold text-white tracking-wider">
          MERN Stack Application
        </span>
        <div className="pt-8 text-center">
          <a
            href="https://gadget-world-c3870.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Live Site
            </button>
          </a>
          <a
            href="https://github.com/hasibmiraz/gadget-world-client-side"
            target="_blank"
            rel="noreferrer"
          >
            <button className="text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Client Code
            </button>
          </a>
          <a
            href="https://github.com/hasibmiraz/gadget-world-server-side"
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
  );
};

export default ProjectTwo;
