import React from 'react';
import ProjectOne from './ProjectOne';
import ProjectThree from './ProjectThree';
import ProjectTwo from './ProjectTwo';

const Projects = () => {
  return (
    <div
      name="projects"
      className="bg-slate-600 w-full md:h-screen text-gray-300"
    >
      <div className="max-w-1400 mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Projects
          </p>
          <p className="py-6">
            Please have a look at some of my recent web applications
          </p>
        </div>
        <div className="grid grid-cols-1 w-11/12 md:grid-cols-3 gap-4 mx-auto">
          <ProjectOne />
          <ProjectTwo />
          <ProjectThree />
        </div>
      </div>
    </div>
  );
};

export default Projects;
