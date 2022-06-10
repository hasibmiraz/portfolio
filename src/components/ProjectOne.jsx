import React from 'react';
import Bicycle from '../assets/bicycle.JPG';
import Img1 from '../assets/b4l/b4l-1.JPG';
import Img2 from '../assets/b4l/b4l-2.JPG';
import Img3 from '../assets/b4l/b4l-3.JPG';
import Img4 from '../assets/b4l/b4l-4.JPG';
import Img5 from '../assets/b4l/b4l-5.JPG';
import Img6 from '../assets/b4l/b4l-6.JPG';
import { BiDetail } from 'react-icons/bi';
import { BsTools } from 'react-icons/bs';
import { MdLiveTv } from 'react-icons/md';
import { FcBusinessman } from 'react-icons/fc';
import { GiServerRack } from 'react-icons/gi';

const ProjectOne = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Bicycle})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      <div className="opacity-0 group-hover:opacity-100">
        <span className="text-2xl ml-2 font-bold text-white tracking-wider text-center">
          MERN Stack Application
        </span>
        <div className="pt-8 text-center">
          <label
            for="project-1"
            class="text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg cursor-pointer"
          >
            Details
          </label>
        </div>
      </div>
      {/* Project Details */}
      <input type="checkbox" id="project-1" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
          <label
            for="project-1"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg">Details of Bicycle4Life</h3>
          <p class="py-4 text-xl text-center">Preview</p>
          <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-3">
            <img src={Img1} alt="" />
            <img src={Img2} alt="" />
            <img src={Img3} alt="" />
            <img src={Img4} alt="" />
            <img src={Img5} alt="" />
            <img src={Img6} alt="" />
          </div>
          <div>
            <h3 className="text-xl text-white font-bold mt-4">Key Features</h3>
            <ul>
              <li>
                <BiDetail className="inline" size={20} /> This is a MERN Stack
                single page application.
              </li>
              <li>
                <BiDetail className="inline" size={20} /> You can do CRUD
                operation.
              </li>
              <li>
                <BiDetail className="inline" size={20} /> Different routes were
                used for admin and users panel to control the application.
              </li>
              <li>
                <BiDetail className="inline" size={20} /> JWT was used for
                authentication and authorization.
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
                <BsTools className="inline" size={20} /> ExpressJS
              </li>
              <li>
                <BsTools className="inline" size={20} /> Firebase Authentication
              </li>
              <li>
                <BsTools className="inline" size={20} /> MongoDB
              </li>
              <li>
                <BsTools className="inline" size={20} /> Heroku
              </li>
              <li>
                <BsTools className="inline" size={20} /> JsonWebToken
              </li>
              <li>
                <BsTools className="inline" size={20} /> DaisyUI(Component
                Library Of Tailwind)
              </li>
              <li>
                <BsTools className="inline" size={20} /> React Query
              </li>
              <li>
                <BsTools className="inline" size={20} /> React Router
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <a
              href="https://bicycle4life-83943.web.app/"
              target="_blank"
              rel="noreferrer"
              className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mt-3 mx-auto flex items-center duration-200 hover:rounded"
            >
              Live Site <MdLiveTv className="ml-2" size={20} />
            </a>
            <a
              href="https://github.com/hasibmiraz/bicycle4life-client"
              target="_blank"
              rel="noreferrer"
              className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mt-3 mx-auto flex items-center duration-200 hover:rounded"
            >
              Client Side Code <FcBusinessman className="ml-2" size={20} />
            </a>
            <a
              href="https://github.com/hasibmiraz/bicycle4life-server"
              target="_blank"
              rel="noreferrer"
              className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mt-3 mx-auto flex items-center duration-200 hover:rounded"
            >
              Server Side Code <GiServerRack className="ml-2" size={20} />
            </a>
          </div>
          <div class="modal-action">
            <label for="project-1" class="btn">
              Ok
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOne;
