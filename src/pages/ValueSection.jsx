import React from "react";
import "../styles/ValueSection.css";

const ValueSection = () => {
  return (
    <section className="value reveal">

      <div className="value-container">

        {/* LEFT CONTENT */}
        <div className="value-left reveal-left">

          <h2 className="reveal-left">
            Most People Discover Health Problems
            <span> Too Late</span>
          </h2>

          <p className="reveal">
            Heart disease, diabetes, and lifestyle disorders
            don’t appear suddenly. They build silently over
            time — and most people don’t realize the risk
            until it’s serious.
          </p>

        </div>

        {/* RIGHT CARD */}
        <div className="value-right reveal-right">

          <div className="value-card reveal-scale">

            <h3 className="reveal-left">
              We Change That
            </h3>

            <p className="reveal">
              Our AI analyzes your health data early,
              predicts potential risks, and guides you
              with personalized fitness and lifestyle plans —
              before problems begin.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ValueSection;