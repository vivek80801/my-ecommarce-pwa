import React from "react";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className="contain">
      <div className="container about">
        <h1>about me</h1>
        <img src="./img/github-avtar.png" alt="about me" />
        <div className="about-details">
          <p>
            Hello, I am vivek. I am a front-end developer. I make websites which
            will help you to grow your business. Websites are great way to sell
            products, advertise products, services, advertise services, etc.
            Even big compnies also sell their products online. Also, This
            website is also demo. How we can sell products online.
          </p>
        </div>
        <div className="footer">
          <a href="https://www.github.com/vivek80801">
            <FaGithub size="2rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
