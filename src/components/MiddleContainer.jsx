import React from "react";
import "./MiddleContainer.css";

function MiddleContainer() {
  return (
    <div className="middle-part">
      <div className="hero-info">
        <h1 className="hero-name">Rajiv Sahal</h1>
        <h3 className="hero-job-title">Frontend Developer</h3>
        <h4 className="hero-website">www.sahalrajiv.com</h4>
        <button className="email-btn">
          <img src="./src/assets/Mail icon.png" alt="Mail icon"></img>Email
        </button>
      </div>
      <div className="hero-about">
        <h2 className="hero-about-and-interest">About</h2>
        <p className="hero-desc">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h2 className="hero-about-and-interest">Interests</h2>
        <p className="hero-desc">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}

export default MiddleContainer;
