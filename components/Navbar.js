import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Brand - Add this */}
        <div className="text-white text-xl font-bold">
          JB
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex space-x-8 text-white">
          <a href="#about" className="text-lg font-semibold hover:text-blue-500 transition duration-300">
            About Me
          </a>
          <a href="#projects" className="text-lg font-semibold hover:text-blue-500 transition duration-300">
            Projects
          </a>
          <a href="#contact" className="text-lg font-semibold hover:text-blue-500 transition duration-300">
            Contact
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? (
              <XMarkIcon className="w-7 h-7" />
            ) : (
              <Bars3Icon className="w-7 h-7" />
            )}
          </button>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-gray-900 shadow-lg">
              <div className="px-4 py-3 space-y-3">
                <a href="#about" className="block text-lg font-semibold text-white hover:text-blue-500 transition duration-300">
                  About Me
                </a>
                <a href="#projects" className="block text-lg font-semibold text-white hover:text-blue-500 transition duration-300">
                  Projects
                </a>
                <a href="#contact" className="block text-lg font-semibold text-white hover:text-blue-500 transition duration-300">
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
