//used as the compiler for the components
import Headers from "./Header";
import Footer from "./Footer";
import Projects from "./Projects";
import ContactMe from "./Contact";
import Resume from "./Resume";
import React, { useState } from "react";
import AboutMe from "./AboutMe";

function Porfolio() {
  // create state for the current page to render
  const [currentPage, setPage] = useState("AboutMe");

  const RenderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    switch (currentPage) {
      case "AboutMe":
        return <AboutMe />;
      case "Projects":
        return <Projects />;
      case "ContactMe":
        return <ContactMe />;
      case "Resume":
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  // change state based on which page is clicked
  const handlePageChange = (tab) => {
    setPage(tab);
  };

  return (
    // render the current page based on the state
    <div>
      <Headers currentPage={currentPage} handlePageChange={handlePageChange} />

      {RenderPage()}

      <Footer />
    </div>
  );
}

export default Porfolio;
