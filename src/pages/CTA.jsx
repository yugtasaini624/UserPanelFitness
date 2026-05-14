import { Link } from "react-router-dom";
import "../styles/CTA.css";

const CTA = () => {
  return (
    <section className="cta reveal">

      <div className="cta-container">

        {/* HEADING */}
        <h2 className="reveal-scale">
          Start Your Journey Towards <br />
          <span>Better Health Today</span>
        </h2>

        {/* TEXT */}
        <p className="reveal">
          Personalized health insights, fitness guidance,
          and preventive care — thoughtfully designed to
          fit into your daily life.
        </p>

        {/* BUTTONS */}
        <div className="cta-actions reveal-up">

          <Link to="/login">
            <button className="cta-primary">
              Get Started
            </button>
          </Link>

          <Link to="/features">
            <button className="cta-secondary">
              Explore Features
            </button>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default CTA;