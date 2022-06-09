import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a193c]">
      {/* body */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Greetings, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Md Hasibul Alam
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a full stack web developer. I have been learning web development
          for almost about a year. I am always focused on keeping myself updated
          and apply new technolgies in my work.
        </p>
        <div>
          <a
            href="https://drive.google.com/file/d/1yOTP6ubvlg4zRedfOsbM_688L98R8Cn7/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="text-white group text-center border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-200">
              See Resume
              <span className="group-hover:rotate-180 duration-300">
                <AiOutlineArrowRight size={20} className="ml-2" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
