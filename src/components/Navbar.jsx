import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white shadow-md py-3 md:py-4 border-b-4 border-red-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
        
        <div className="flex items-center">
          <Link 
            to="/" 
            className="flex items-center justify-center w-[120px] md:w-[150px] outline-none focus:ring-2 focus:ring-blue-600 rounded-lg"
            aria-label="Anar a la pàgina principal"
          >
            <img src="/barca.png" alt="Logo" className="w-full h-auto object-contain" />
          </Link>
        </div>

        <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-6 lg:space-x-8">
            <NavLinks isActive={isActive} />
          </ul>
        </nav>

        <div className="flex items-center space-x-2">
          <button
            className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-700 transition-colors focus:ring-2 focus:ring-red-300"
            aria-label="Perfil d'usuari"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-blue-900 hover:bg-gray-100 focus:outline-none"
            aria-expanded={isOpen}
            aria-label="Obrir menú de navegació"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="bg-gray-50 border-t border-gray-100 px-4 py-6">
          <ul className="flex flex-col space-y-4">
            <NavLinks isActive={isActive} mobile onClick={closeMenu} />
          </ul>
        </nav>
      </div>
    </header>
  );
}

const NavLinks = ({ isActive, mobile, onClick }) => {
  const links = [
    { to: "/", label: "NOTÍCIES", color: "text-red-600", border: "border-red-600" },
    { to: "/partits", label: "PARTITS", color: "text-blue-700", border: "border-blue-600" },
    { to: "/jugadors", label: "JUGADORS", color: "text-red-600", border: "border-red-600" },
    { to: "/historia", label: "HISTÒRIA", color: "text-blue-700", border: "border-blue-600" },
    { to: "/contacte", label: "CONTACTE", color: "text-red-600", border: "border-red-600" },
  ];

  return links.map((link) => (
    <li key={link.to}>
      <Link
        to={link.to}
        onClick={onClick}
        className={`${link.color} font-semibold text-base transition-all duration-300 block ${
          isActive(link.to) ? `border-b-2 ${link.border}` : 'hover:border-b-2 ' + link.border
        } ${mobile ? 'text-lg py-2' : 'pb-1'}`}
      >
        {link.label}
      </Link>
    </li>
  ));
};

export default Navbar;