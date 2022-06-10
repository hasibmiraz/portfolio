import React from 'react';
import Food from '../assets/food.JPG';
import Img1 from '../assets/fc/fc-1.JPG';
import Img2 from '../assets/fc/fc-2.JPG';
import Img3 from '../assets/fc/fc-3.JPG';
import Img4 from '../assets/fc/fc-4.JPG';
import Img5 from '../assets/fc/fc-5.JPG';
import { BiDetail } from 'react-icons/bi';
import { BsTools } from 'react-icons/bs';
import { MdLiveTv } from 'react-icons/md';
import { FcBusinessman } from 'react-icons/fc';

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
          <label
            for="project-3"
            class="text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg cursor-pointer"
          >
            Details
          </label>
        </div>

        {/* Project Details */}
        <input type="checkbox" id="project-3" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box w-11/12 max-w-5xl">
            <label
              for="project-3"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 class="font-bold text-lg">Details of Gadget World</h3>
            <p class="py-4 text-xl text-center">Preview</p>
            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-3">
              <img src={Img1} alt="" />
              <img src={Img2} alt="" />
              <img src={Img3} alt="" />
              <img src={Img4} alt="" />
              <img src={Img5} alt="" />
            </div>
            <div>
              <h3 className="text-xl text-white font-bold mt-4">
                Key Features
              </h3>
              <ul>
                <li>
                  <BiDetail className="inline" size={20} /> It's simple ReactJS
                  SPA.
                </li>
                <li>
                  <BiDetail className="inline" size={20} /> React router was
                  used for basic routing without page reload.
                </li>
                <li>
                  <BiDetail className="inline" size={20} /> Some packages and
                  user review was added through fake data.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl text-white font-bold mt-4">Tools</h3>
              <ul>
                <li>
                  <BsTools className="inline" size={20} /> ReactJS
                </li>
                <li>
                  <BsTools className="inline" size={20} /> Flowbite (Component
                  library of tailwind)
                </li>
                <li>
                  <BsTools className="inline" size={20} /> Firebase
                  authentication
                </li>
                <li>
                  <BsTools className="inline" size={20} /> React Router
                </li>
                <li>
                  <BsTools className="inline" size={20} /> React Toastify
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <a
                href="https://food-catering-c62df.web.app/"
                target="_blank"
                rel="noreferrer"
                className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mt-3 mx-auto flex items-center duration-200 hover:rounded"
              >
                Live Site <MdLiveTv className="ml-2" size={20} />
              </a>
              <a
                href="https://github.com/hasibmiraz/food-catering"
                target="_blank"
                rel="noreferrer"
                className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mt-3 mx-auto flex items-center duration-200 hover:rounded"
              >
                Client Side Code <FcBusinessman className="ml-2" size={20} />
              </a>
            </div>
            <div class="modal-action">
              <label for="project-3" class="btn">
                Ok
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectThree;
