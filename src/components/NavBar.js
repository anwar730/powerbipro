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
    <nav className='navbar container mx-auto p-4 top-0 border-b border-gray-300 relative'>
      <div className='flex justify-between px-4 py-8 items-center'>
        <div>
          <Link to="/" className='logo text-blue'>
            <svg width="220" height="70" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
              {/* Background shape */}
              <rect x="25" y="20" width="60" height="60" rx="8" fill="#F2C811" />
              
              {/* Data visualization bars */}
              <rect x="35" y="55" width="10" height="15" fill="#000000" />
              <rect x="50" y="45" width="10" height="25" fill="#000000" />
              <rect x="65" y="35" width="10" height="35" fill="#000000" />
              
              {/* Text part - all on one line */}
              <text x="100" y="60" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="#000000">Power BI</text>
              <text x="235" y="60" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="#F2C811">Pro</text>
            </svg>
          </Link>
        </div>

        <div className={"space-x-10 hidden md:flex relative"}>
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
        <div className={`${isOpen ? 'block' : 'hidden'} flex flex-col items-center py-8 mt-8 space-y-6 font-bold sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
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