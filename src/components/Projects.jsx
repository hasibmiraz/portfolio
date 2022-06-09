import React from 'react';

import Food from '../assets/food.JPG';
import ProjectOne from './ProjectOne';
import ProjectTwo from './ProjectTwo';

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
          <ProjectOne />
          <ProjectTwo />
        </div>
      </div>
    </div>
  );
};

export default Projects;
