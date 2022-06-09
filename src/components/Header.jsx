import React, { useState } from 'react';
import { BsMenuButtonWide } from 'react-icons/bs';
import { GiCancel } from 'react-icons/gi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => setMenu(!menu);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a193c] text-gray-300">
      <div>
        <h2 className="text-3xl cursor-pointer hover:bg-gray-600 duration-300 px-4 py-2">
          Md Hasibul Alam
        </h2>
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      {/* Desktop menu end */}

      {/* Hamburger menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!menu ? <BsMenuButtonWide size={28} /> : <GiCancel size={28} />}
      </div>
      {/* Hamburger menu end */}

      {/* Mobile Menu */}
      <ul
        className={
          !menu
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a193c] flex md:hidden flex-col justify-center items-center'
        }
      >
        <li className="py-5 text-4xl">Home</li>
        <li className="py-5 text-4xl">About</li>
        <li className="py-5 text-4xl">Skills</li>
        <li className="py-5 text-4xl">Projects</li>
        <li className="py-5 text-4xl">Contact</li>
      </ul>
      {/* Mobile Menu end */}

      {/* Social */}
      <div className="hidden lg:flex fixed flex-col top-[35%]">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/md-hasibulalam/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300 bg-gray-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/hasibmiraz"
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
      {/* Social end */}
    </div>
  );
};

export default Header;
