import "../../styles/FooterPages/PrivacyPolicy.css";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-page">

      <div className="privacy-card">

        <h1>Privacy Policy</h1>

        <p className="privacy-intro">
          Your privacy is important to us. This Privacy Policy explains how our AI
          Health Platform collects, uses, and protects your information.
        </p>

        <section>
          <h2>1. Information We Collect</h2>
          <p>
            We may collect health-related information such as age, blood pressure,
            cholesterol levels, and other data you voluntarily provide while using
            our AI health prediction tools.
          </p>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>
            The information you provide is used to generate AI-based health risk
            predictions and recommendations. Your data helps improve the accuracy
            and usefulness of our health analysis services.
          </p>
        </section>

        <section>
          <h2>3. Data Security</h2>
          <p>
            We take reasonable measures to protect your information from
            unauthorized access, disclosure, or misuse.
          </p>
        </section>

        <section>
          <h2>4. Data Storage</h2>
          <p>
            Health prediction history may be securely stored to allow users to
            track their health trends over time.
          </p>
        </section>

        <section>
          <h2>5. Medical Disclaimer</h2>
          <p>
            Our AI predictions are intended for informational purposes only and
            should not replace professional medical advice, diagnosis, or
            treatment.
          </p>
        </section>

        <section>
          <h2>6. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy occasionally. Changes will be
            reflected on this page.
          </p>
        </section>

        <div className="privacy-footer">
          <p>Last Updated: 2026</p>
        </div>

      </div>

    </div>
  );
}