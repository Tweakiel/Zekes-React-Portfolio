import React from "react";

function AboutMe() {
  let imgStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "50%",
  };

  return (
    <div className="py-10 ">
      <h2 className="text-5xl font-bold mb-4">About Me</h2>
      <img
        alt="me"
        src="https://pbs.twimg.com/profile_images/1290223876765622273/JMiohj1q_400x400.jpg"
        style={imgStyle}
      ></img>
      <div className="card my-10 border py-10 px-20">
        <p className="text-2xl text-center">
          Heya! its <strong> Exequiel Francia</strong> but you can call me
          <strong> Zeke</strong>. I am an aspiring Fullstack Developer who is
          currently a student in a Flex Bootcamp program. I am passionate about
          coding and enjoy building web applications using modern technologies.
          I am constantly learning and improving my skills in order to become a
          valuable asset to the industry. <br /> <br />I am excited to take on
          new challenges and contribute to innovative projects. In my free time,
          I enjoy exploring new technologies, playing video games, and watching
          anime. I work with various programming languages and libraries, such
          as HTML, CSS, Javascript, Node.js, Express.js, MySQL, and others I
          have yet to learn. I enjoy collaborating with cross-functional teams.
          I'm always looking to learn new technologies and apply best practices
          to improve the development process. Let's connect!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
