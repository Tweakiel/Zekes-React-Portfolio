import React from "react";

//add a nav listener to the header
function Header({ currentPage, handlePageChange }) {
  return (
    <header className="HeaderColor text-white py-4 h-20">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-4xl font-bold ml-0">
          Exequiel Francia
        </a>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#about"
                onClick={() => {
                  handlePageChange("AboutMe");
                }}
                className={
                  handlePageChange === "AboutMe" ? "text-gray-500" : ""
                }
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => {
                  handlePageChange("Projects");
                }}
                className={
                  handlePageChange === "Projects" ? "text-gray-500" : ""
                }
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#resume"
                onClick={() => {
                  handlePageChange("Resume");
                }}
                className={handlePageChange === "Resume" ? "text-gray-500" : ""}
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="#ContactMe"
                onClick={() => {
                  handlePageChange("ContactMe");
                }}
                className={
                  handlePageChange === "ContactMe" ? "text-gray-500" : ""
                }
              >
                Contact Me!
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
