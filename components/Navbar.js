import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-6 right-6 z-10">
      {/* Desktop Navigation */}
      <div className="hidden sm:flex space-x-6 text-white">
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
      <div className="sm:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isMenuOpen ? (
            <XMarkIcon className="w-7 h-7" />
          ) : (
            <Bars3Icon className="w-7 h-7" />
          )}
        </button>

        {isMenuOpen && (
          <div className="absolute top-16 right-6 bg-gray-900 rounded-lg p-4 space-y-4">
            <a href="#about" className="block text-lg font-semibold hover:text-blue-500 transition duration-300">
              About Me
            </a>
            <a href="#projects" className="block text-lg font-semibold hover:text-blue-500 transition duration-300">
              Projects
            </a>
            <a href="#contact" className="block text-lg font-semibold hover:text-blue-500 transition duration-300">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
