import { Link, NavLink, useLocation} from "react-router-dom";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

import bannerImg from "../../assets/banner.jpg"

const Nav = () => {

  const location = useLocation();
    const getBackgroundColor = () => {
    switch (location.pathname) {
      case "/":
        return "bg-purple-500 text-white pb-36 sm:pb-40 md:pb-56 lg:pb-64";  
      case "/statistics":
        return "bg-white-500"; 
      case "/dashboard":
        return "bg-white-500"; 
      case "/history":
        return "bg-white-500"; 
      default:
        return "bg-white-500"; 
    }
  };

    const options = < >
        <li> <NavLink to="/">Home</NavLink> </li>
        <li> <NavLink to="/statistics" >Statistics</NavLink></li>
        <li> <NavLink to="/dashboard">Dashboard</NavLink> </li>
        <li> <NavLink to="/history">History</NavLink> </li>
    </>




    return (
        <div className={`w-11/12 m-auto mt-4  rounded-xl ${getBackgroundColor()}`}>
          <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className={`menu menu-sm dropdown-content ${location.pathname === "/" ? "bg-purple-500" : "bg-base-100"} rounded-box z-[1] mt-3 w-52 p-2 shadow`}>
        {
           options
        }
      </ul>
    </div>
    <a className="btn hidden md:flex btn-ghost text-xl text-center font-bold">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold ">
      {
         options
      }
    </ul>
  </div>
  <div className="navbar-end hover:cursor-pointer text-xl  gap-2 p-4">
    <button className="bg-white text-black p-2 rounded-full border">
       <IoCartOutline  />

    </button>
     <button  className="bg-white text-black p-2 rounded-full border ">
     <FaRegHeart />
      </button> 
  </div>
</div>
{location.pathname === "/" && (
       
        <div className=" relative text-center" >
          <div className="text-white py-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold py-6">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
            <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            <div className="py-8">
              <Link to="/dashboard" className="btn hover:bg-white rounded-3xl px-6 text-purple-500 font-bold text-xl ">Shop Now</Link>
            </div>
          </div>
          <div className="absolute  transform -translate-x-1/2 bg-white left-1/2 w-8/12 border-2 border-base-200 rounded-xl p-2 bg-opacity-40">
          <img src={bannerImg} alt="banner image" className=" w-full  rounded-xl  " />
          </div>
         
        </div>
      )}
  </div>
    );
};

export default Nav;