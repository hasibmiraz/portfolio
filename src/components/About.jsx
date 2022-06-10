import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-slate-600 text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p
              data-aos="fade-down"
              className="text-4xl font-bold inline border-b-4 border-pink-600"
            >
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p data-aos="fade-right">
              Hi, I'm Md Hasibul Alam. Full stack web developer
            </p>
          </div>
          <div data-aos="fade-left">
            <p>
              I am very much passionate about web development. I have been
              learning web development for about 1 year.
            </p>
            <p>
              I always try to learn new things and try to code my application in
              an efficient way. So that I can make a better output for my
              project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
