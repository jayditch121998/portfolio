import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-lg font-semibold">JAYDITCH BALANSI</h2>
        <p className="text-gray-400 text-sm">Building scalable and efficient applications.</p>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-3">
          <a href="https://github.com/jayditch121998" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-blue-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/jayditch-b-694a521b6" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-blue-400 transition" />
          </a>
          {/* <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl hover:text-blue-400 transition" />
          </a> */}
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mt-3">&copy; {new Date().getFullYear()} Jayditch Balansi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
