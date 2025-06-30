import React from 'react';
import { Link } from 'react-scroll';

const TheNavbar = () => {
    const link = <>
  <li>
    <Link
      to="about"
      smooth={true}
      duration={500}
      offset={-70}
      spy={true}
      activeClass="text-accent font-semibold"
      className="text-secondary text-lg font-semibold hover:text-accent hover:font-bold transition-colors duration-300"
    >
      About Me
    </Link>
  </li>
  <li>
    <Link
      to="skills"
      smooth={true}
      duration={500}
      offset={-70}
      spy={true}
      activeClass="text-accent font-semibold"
      className="text-secondary text-lg font-semibold hover:text-accent hover:font-bold transition-colors duration-300"
    >
      Skills
    </Link>
  </li>
  <li>
    <Link
      to="projects"
      smooth={true}
      duration={500}
      offset={-70}
      spy={true}
      activeClass="text-accent font-semibold"
      className="text-secondary text-lg font-semibold hover:text-accent hover:font-bold transition-colors duration-300"
    >
      Projects
    </Link>
  </li>
  <li>
    <Link  to="contact"
      smooth={true}
      duration={500}
      offset={-70}
      spy={true} className="text-secondary text-lg font-semibold hover:text-accent hover:font-bold transition-colors duration-300">
      Contact
    </Link>
  </li>
</>

    return (
        <div className='bg-primary shadow-sm sticky top-0 z-50'>
         <div className="navbar md:max-w-7xl w-full px-5 mx-auto">
  <div className="navbar-start">
    
      <Link  to="home"
      smooth={true}
      duration={500}
      offset={-70}
      spy={true} className="text-secondary text-2xl cursor-pointer font-bold hover:text-accent hover:font-bold transition-colors duration-300">
      Minhaz
    </Link>
  </div>
  <div className="navbar-end">
  <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {link}
    </ul>
  </div>
    <div className="dropdown">
      <div tabIndex={0} role="button" className="text-secondary hover:text-accent transition-colors duration-300 btn btn-ghost lg:hidden" >
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