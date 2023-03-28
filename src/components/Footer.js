import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    // Footer absolute bottom

    <div className="FooterColor flex justify-center items-center h-16 bg-gray-200 fixed bottom-0 w-full">
      <a
        href="https://github.com/Tweakiel"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-5"
      >
        <FaGithub size={32} />
      </a>
      <a
        href="https://www.linkedin.com/in/exequiel-francia"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-5"
      >
        <FaLinkedin size={32} />
      </a>
      <a
        href="https://twitter.com/nyquielz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter size={32} />
      </a>
    </div>
  );
}

export default Footer;
