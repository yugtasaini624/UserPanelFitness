import React from "react";
import "../styles/HowItWorks.css";

const steps = [
  {
    step: "01",
    title: "Enter Your Health Data",
    desc: "Provide basic health metrics such as age, BMI, blood pressure, and activity level."
  },
  {
    step: "02",
    title: "AI Risk Analysis",
    desc: "Our machine learning models analyze your data to identify potential health risks."
  },
  {
    step: "03",
    title: "Get Personalized Plans",
    desc: "Receive fitness routines and diet plans tailored specifically to your health profile."
  },
  {
    step: "04",
    title: "Track & Improve",
    desc: "Monitor progress through dashboards and stay consistent with smart reminders."
  }
];

const HowItWorks = () => {
  return (
    <section className="how" id="how">
      <div className="how-container">

        <div className="how-header">
          <h2>
            A Simple Process <br />
            <span>Designed for Everyday Use</span>
          </h2>
          <p>
            Getting started takes only a few steps — our platform does the heavy lifting for you.
          </p>
        </div>

        <div className="how-steps">
          {steps.map((item, index) => (
            <div className="how-card" key={index}>
              <span className="step-number">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
