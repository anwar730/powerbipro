import React, { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isOpen]);
  return (
    <nav className='navbar container mx-auto p-4  top-0'>
      <div className='flex justify-between px-4 py-8 items-center'>
        <div>
          <Link to="/"className='logo text-blue '>POWER BI PRO</Link>
        </div>

        <div className={"space-x-10 hidden md:flex"}>
          <NavLink to="/" className="hover:text-blue font-bold">Home</NavLink>
          <NavLink to="/consultation" className="hover:text-blue font-bold">Consult Us</NavLink>
          <NavLink to="/training" className="hover:text-blue font-bold">Training</NavLink>
          <NavLink to="/about" className="hover:text-blue font-bold">About Us</NavLink>
        </div>
        <button id="menu-btn" className={`hamburger ${isOpen ? 'open' : ''} block md:hidden focus:outline-none`} onClick={toggleMenu}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div className='md:hidden'>
        <div className={`${isOpen ? 'block' : 'hidden'} flex flex-col items-center  py-8 mt-8 space-y-6 font-bold sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
          <NavLink to="/" className="hover:text-blue" onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/consultation" className="hover:text-blue" onClick={toggleMenu}>Consultation</NavLink>
          <NavLink to="/training" className="hover:text-blue" onClick={toggleMenu}>Training</NavLink>
          <NavLink to="/about" className="hover:text-blue" onClick={toggleMenu}>About Us</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;