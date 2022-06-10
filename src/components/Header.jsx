import React, { useState } from 'react';
import { BsMenuButtonWide } from 'react-icons/bs';
import { GiCancel } from 'react-icons/gi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Signature from '../assets/Signature.png';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => setMenu(!menu);

  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center px-4 bg-gray-600 text-gray-300 shadow-md">
      <div>
        <h2 className="text-3xl duration-300 px-4 py-2">
          <img src={Signature} alt="Signature" className="h-12" />
        </h2>
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex">
        <li>
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="blogs"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
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
        <li className="py-5 text-4xl">
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleClick}
          >
            Home
          </Link>
        </li>
        <li className="py-5 text-4xl">
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleClick}
          >
            About
          </Link>
        </li>
        <li className="py-5 text-4xl">
          <Link
            to="skills"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleClick}
          >
            Skills
          </Link>
        </li>
        <li className="py-5 text-4xl">
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleClick}
          >
            Projects
          </Link>
        </li>
        <li className="py-5 text-4xl">
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleClick}
          >
            Contact
          </Link>
        </li>
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
