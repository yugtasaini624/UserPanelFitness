import React from "react";
import "../styles/Stats.css";

const Stats = () => {
  return (
    <section className="stats reveal">

      <div className="stats-container">

        {/* HEADER */}
        <div className="stats-header reveal-up">

          <h2 className="reveal-left">
            Trusted Insights for <br />
            <span>Better Health Decisions</span>
          </h2>

          <p className="reveal">
            Built with a focus on accuracy, consistency,
            and long-term health improvement.
          </p>

        </div>

        {/* GRID */}
        <div className="stats-grid">

          {/* CARD 1 */}
          <div className="stat-item reveal-scale">
            <h3>90%</h3>
            <p>Prediction Accuracy</p>
          </div>

          {/* CARD 2 */}
          <div className="stat-item reveal-left">
            <h3>10K+</h3>
            <p>Health Reports Generated</p>
          </div>

          {/* CARD 3 */}
          <div className="stat-item reveal-right">
            <h3>30%</h3>
            <p>Risk Reduction Observed</p>
          </div>

          {/* CARD 4 */}
          <div className="stat-item reveal-scale">
            <h3>24/7</h3>
            <p>Health Monitoring</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Stats;