import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-left">
          <div className="about-accent"></div>
        </div>

        <div className="about-content">
          <span className="about-tag">ABOUT THE PLATFORM</span>

          <h2>
            Smarter Healthcare <br />
            <span>Starts with Prevention</span>
          </h2>

          <div className="about-text-wrapper">
            <p>
              HealthAI is an AI-powered preventive healthcare platform that
              helps individuals understand potential health risks before
              they become serious.
            </p>

            <p>
              By analyzing key health indicators such as BMI, blood pressure,
              cholesterol, and lifestyle patterns, the system predicts risks
              related to heart disease, diabetes, and obesity.
            </p>

            <p>
              Based on these insights, HealthAI delivers personalized fitness
              and diet recommendations, empowering users to take control of
              their health through data-driven decisions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
