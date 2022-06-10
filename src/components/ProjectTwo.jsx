import React from 'react';
import Gadget from '../assets/gadget.JPG';
import Img1 from '../assets/gw/gw-1.JPG';
import Img2 from '../assets/gw/gw-2.JPG';
import Img3 from '../assets/gw/gw-3.JPG';
import Img4 from '../assets/gw/gw-4.JPG';
import Img5 from '../assets/gw/gw-5.JPG';
import Img6 from '../assets/gw/gw-6.JPG';
import { BiDetail } from 'react-icons/bi';
import { BsTools } from 'react-icons/bs';
import { MdLiveTv } from 'react-icons/md';
import { FcBusinessman } from 'react-icons/fc';
import { GiServerRack } from 'react-icons/gi';

const ProjectTwo = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="800"
      style={{ backgroundImage: `url(${Gadget})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      <div className="opacity-0 group-hover:opacity-100">
        <span className="text-2xl ml-2 font-bold text-white tracking-wider">
          MERN Stack Application
        </span>
        <div className="pt-8 text-center">
          <label
            htmlFor="project-2"
            className="text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg cursor-pointer"
          >
            Details
          </label>
        </div>

        {/* Project Details */}
        <input type="checkbox" id="project-2" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <label
              htmlFor="project-2"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="font-bold text-lg">Details of Gadget World</h3>
            <p className="py-4 text-xl text-center">Preview</p>
            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-3">
              <img src={Img1} alt="" />
              <img src={Img2} alt="" />
              <img src={Img3} alt="" />
              <img src={Img4} alt="" />
              <img src={Img5} alt="" />
              <img src={Img6} alt="" />
            </div>
            <div>
              <h3 className="text-xl text-white font-bold mt-4">
                Key Features
              </h3>
              <ul>
                <li>
                  <BiDetail className="inline" size={20} /> This is a MERN Stack
                  single page application.
                </li>
                <li>
                  <BiDetail className="inline" size={20} /> This is a inventory
                  management website for a gadget shop.
                </li>
                <li>
                  <BiDetail className="inline" size={20} /> You can do any kind
                  of CRUD operation and update your stock or restock the product
                  in real time. No need to reload the page.
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
                  <BsTools className="inline" size={20} /> MongoDB
                </li>
                <li>
                  <BsTools className="inline" size={20} /> Mongoose
                </li>
                <li>
                  <BsTools className="inline" size={20} /> Firebase
                  Authentication
                </li>
                <li>
                  <BsTools className="inline" size={20} /> Heroku
                </li>
                <li>
                  <BsTools className="inline" size={20} /> JsonWebToken
                </li>
                <li>
                  <BsTools className="inline" size={20} /> Tailwind
                  Elements(Component Library Of Tailwind)
                </li>
                <li>
                  <BsTools className="inline" size={20} /> React Router
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <a
                href="https://gadget-world-c3870.web.app/"
                target="_blank"
                rel="noreferrer"
                className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mt-3 mx-auto flex items-center duration-200 hover:rounded"
              >
                Live Site <MdLiveTv className="ml-2" size={20} />
              </a>
              <a
                href="https://github.com/hasibmiraz/gadget-world-client-side"
                target="_blank"
                rel="noreferrer"
                className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mt-3 mx-auto flex items-center duration-200 hover:rounded"
              >
                Client Side Code <FcBusinessman className="ml-2" size={20} />
              </a>
              <a
                href="https://github.com/hasibmiraz/gadget-world-server-side"
                target="_blank"
                rel="noreferrer"
                className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mt-3 mx-auto flex items-center duration-200 hover:rounded"
              >
                Server Side Code <GiServerRack className="ml-2" size={20} />
              </a>
            </div>
            <div className="modal-action">
              <label htmlFor="project-2" className="btn">
                Ok
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTwo;
