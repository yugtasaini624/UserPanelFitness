import React from "react";
import "../styles/Features.css";

const Features = () => {
  const features = [
    {
      id: "01",
      title: "AI Health Risk Prediction",
      desc: "Predict potential risks for heart disease, diabetes, and obesity using health metrics like BMI, blood pressure, and lifestyle data."
    },
    {
      id: "02",
      title: "Personalized Fitness Guidance",
      desc: "Get workout recommendations tailored to your health condition, activity level, and long-term goals."
    },
    {
      id: "03",
      title: "Smart Diet Recommendations",
      desc: "Meal suggestions customized to your predicted health risks, nutritional needs, and daily routine."
    },
    {
      id: "04",
      title: "Progress & Health Analytics",
      desc: "Track improvements, visualize trends, and monitor how your health risks change over time."
    },
    {
      id: "05",
      title: "Reminders & Preventive Alerts",
      desc: "Timely notifications for workouts, meals, and health check-ups to help you stay consistent."
    },
  ];

  return (
    <section className="features reveal" id="features">
      <div className="features-container">

        <div className="features-header reveal-up">
          <h2 className="reveal-left">
            What the Platform Offers
          </h2>

          <p className="reveal">
            Everything you need to understand your health,
            reduce risks, and build better habits — powered by AI.
          </p>
        </div>

        {features.map((feature, index) => (
          <div
            className={`feature-row ${
              index % 2 === 0 ? "reveal-left" : "reveal-right"
            }`}
            key={feature.id}
          >
            <span className="feature-index reveal-scale">
              {feature.id}
            </span>

            <div>
              <h3 className="reveal-left">
                {feature.title}
              </h3>

              <p className="reveal">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Features;