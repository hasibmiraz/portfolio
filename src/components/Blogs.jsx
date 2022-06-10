import React from 'react';

const Blogs = () => {
  return (
    <div name="blogs" className="h-screen w-full bg-slate-600">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Blogs
            </p>
          </div>
          <div></div>
        </div>
        <div>
          <h1 className="text-6xl text-white text-center z-10">
            Coming Soon...
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
