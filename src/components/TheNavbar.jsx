import React from 'react';
import { Link } from 'react-scroll';

const TheNavbar = () => {
    const link = <>
     <li><Link to="about" smooth={true} duration={500} offset={-70}  spy={true} activeClass="active">About Me</Link></li>
     <li><Link to="skills" smooth={true} duration={500} offset={-70}  spy={true} activeClass="active">Skills</Link></li>
     <li><Link to="projects" smooth={true} duration={500} offset={-70}  spy={true} activeClass="active">Projects</Link></li>
      
     
      <li><a>Contact </a></li>
    </>
    return (
        <div className='bg-base-100 shadow-sm sticky top-0 z-50'>
         <div className="navbar md:max-w-7xl w-full mx-auto">
  <div className="navbar-start">
    
    <a className="btn btn-ghost text-xl">Minhaz</a>
  </div>
  <div className="navbar-end">
  <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {link}
    </ul>
  </div>
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {link}
      </ul>
    </div>
  </div>
</div>   
        </div>
    );
};

export default TheNavbar;