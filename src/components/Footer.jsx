import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h3>Health<span>AI</span></h3>
          <p>
            AI-powered health insights to help you prevent risks,
            stay consistent, and live healthier every day.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links">

          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <Link to="/features" className="cols"><li>Features</li></Link>
              <Link to="/HowItWorks" className="cols"><li>How It Works</li></Link>
              <Link to="/updates" className="cols"><li>Updates</li></Link>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <Link to="/about" className="cols"><li>About</li></Link>
              <Link to="/contact" className="cols"><li>Contact</li></Link>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <Link to="/privacy-policy" className="cols"><li>Privacy Policy</li></Link>
              <Link to="/terms-of-services" className="cols"><li>Terms of Service</li></Link>
              <Link to="/faqs" className="cols"><li>FAQs</li></Link>
            </ul>
          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} HealthAI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
