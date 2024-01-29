import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-white shadow dark:bg-blue-800">
        <div className="container flex items-center justify-between p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <div className="flex items-center">
           <h1 className='text-8xl text-white'>Steppers</h1>
          </div>

          <div className="hidden sm:flex space-x-4">
            <a href="/" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 font-bold">
              Home
            </a>
            <a
              href="/roadsafety"
              className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 font-bold"
            >
             Road Safety
            </a>
            <a
              href="/complaint"
              className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 font-bold"
            >
              Complain
            </a>
            
            
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 dark:text-gray-200 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Hamburger menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="flex flex-col items-center p-4 space-y-4">
              <a href="/" className="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500">
                Home
              </a>
              <a
                href="/roadsafety"
                className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500"
              >
                Road Safety
              </a>
              <a
                href="/pricing"
                className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500"
              >
                Complain 
              </a>
             
              
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
