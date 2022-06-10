import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Firebase from '../assets/firebase.png';
import Github from '../assets/github.png';
import Javascript from '../assets/javascript.png';
import Mongo from '../assets/mongo.png';
import Node from '../assets/node.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-slate-700">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300">
        <div>
          <p
            data-aos="fade-left"
            className="text-4xl text-gray-300 py-4 font-bold border-b-4 border-pink-600 inline-block"
          >
            Skills
          </p>
          <p className="py-4">
            These are the technologies i've worked with to build a full stack
            project
          </p>
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-4 text-center py-8">
          <div
            data-aos="flip-left"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-2"
          >
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div
            data-aos="flip-left"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-2"
          >
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div
            data-aos="flip-left"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-2"
          >
            <img
              className="w-20 mx-auto"
              src={Javascript}
              alt="Javascript icon"
            />
            <p className="my-4">Javascript</p>
          </div>
          <div
            data-aos="flip-left"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-2"
          >
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">Tailwind</p>
          </div>
          <div
            data-aos="flip-left"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-2"
          >
            <img className="w-20 mx-auto" src={Node} alt="Node icon" />
            <p className="my-4">Node</p>
          </div>
          <div
            data-aos="flip-left"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-2"
          >
            <img className="w-20 mx-auto" src={Mongo} alt="Mongo icon" />
            <p className="my-4">Mongo</p>
          </div>
          <div
            data-aos="flip-left"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-2"
          >
            <img className="w-20 mx-auto" src={Github} alt="Github icon" />
            <p className="my-4">Github</p>
          </div>
          <div
            data-aos="flip-left"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-2"
          >
            <img className="w-20 mx-auto" src={Firebase} alt="Firebase icon" />
            <p className="my-4">Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
