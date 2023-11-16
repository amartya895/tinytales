import React from 'react';
import logo from "../images/logo.png"

const Navbar = () => {
  return (
    <div className="bg-black h-24 flex justify-between items-center px-4">
      <div className="flex">
        <img src={logo} alt='logo' className="h-10 w-10 rounded-full bg-white"/>
        <div className="border-r-2 border-yellow-300 ml-2"></div>
        <h1 className='text-white tracking-wider ml-2 mt-2 font-semibold text-lg' style={{ letterSpacing: '6px' }}>STORIES</h1>
      </div>
      <div className="bg-yellow-300 text-xl font-semibold rounded-md px-4 py-2">
        <span>Courses</span>
      </div>
    </div>
  );
}

export default Navbar;
