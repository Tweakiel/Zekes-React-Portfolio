import React from "react";

const Resume = () => {
  return (
    <div className="max-w-md mx-auto mb-20">
      <h2 className="text-5xl font-bold mb-10">Resume</h2>
      <label className="font-bold text-2xl "> Front End Proficiencies</label>
      <ul className="list-disc ml-4 mb-4 text-xl">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Bootstrap</li>
        <li>jQuery</li>
        <li>Responsive Design</li>
        <li>Progressive Web Applications</li>
      </ul>
      <br /> <br /> <br />
      <br />
      <label className="font-bold text-2xl "> Back End Proficiencies </label>
      <ul className="list-disc ml-4 mb-4 text-xl">
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
      <br />
      <a
        href="/ResumeNotfinishedyet:).docx"
        download
        className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition-colors duration-300"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
