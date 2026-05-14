import React from "react";
import "../styles/Hero.css";
import { Link } from "react-router-dom";

import heroImage from "../images/hero.png"; // your image

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-left">
          <h1>
            Build a <span>Healthier Lifestyle</span>
            <br />with AI Guidance
          </h1>

          <p>
            Predict your health risks early and receive personalized
            fitness and diet plans tailored just for you.
          </p>

          <div className="hero-actions">
            <Link to="/login"><button className="btn-primary">Get Started</button></Link>
            <Link to="/demo"><button className="btn-secondary">View Demo</button></Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <img src={heroImage} alt="Healthy lifestyle illustration" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
