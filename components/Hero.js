import { PaperAirplaneIcon } from '@heroicons/react/20/solid';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center px-6 overflow-hidden">
      <Navbar />

      {/* Hero Content */}
      <h1 className="text-4xl sm:text-6xl font-bold">JAYDITCH BALANSI</h1>
      <h2 className="text-2xl sm:text-4xl font-bold mt-6 px-6 hover:text-blue-600">Full Stack Developer</h2>
      <a
        href="#contact"
        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-lg font-semibold transition duration-300 flex items-center space-x-2"
      >
        {/* Add the icon next to the text */}
        <PaperAirplaneIcon className="w-5 h-5" />
        <span>Hire Me</span>
      </a>
    </section>
  );
};

export default Hero;
