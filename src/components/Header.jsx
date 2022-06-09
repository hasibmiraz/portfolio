import React from 'react';

const Header = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a193c] text-gray-300">
      <div>
        <h2 className="text-3xl cursor-pointer hover:bg-gray-600 duration-300 px-4 py-2">
          Md Hasibul Alam
        </h2>
      </div>
    </div>
  );
};

export default Header;
