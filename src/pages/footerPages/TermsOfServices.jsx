import "../../styles/FooterPages/TermsOfServices.css";

export default function TermsOfServices() {
  return (
    <div className="terms-page">

      <div className="terms-card">

        <h1>Terms of Service</h1>

        <p className="terms-intro">
          By using our AI Health Platform, you agree to the following terms and
          conditions. Please read them carefully before using our services.
        </p>

        <section>
          <h2>1. Use of the Platform</h2>
          <p>
            Our platform provides AI-powered health insights and predictions
            based on the information you provide. You agree to use this service
            responsibly and provide accurate data.
          </p>
        </section>

        <section>
          <h2>2. Informational Purpose Only</h2>
          <p>
            The AI predictions and recommendations provided on this platform are
            intended for informational purposes only and should not replace
            professional medical advice or diagnosis.
          </p>
        </section>

        <section>
          <h2>3. User Responsibilities</h2>
          <p>
            Users are responsible for maintaining the confidentiality of their
            account credentials and for all activities that occur under their
            account.
          </p>
        </section>

        <section>
          <h2>4. Data Usage</h2>
          <p>
            Any data submitted to the platform may be used to generate AI health
            insights and improve system performance.
          </p>
        </section>

        <section>
          <h2>5. Service Availability</h2>
          <p>
            We aim to provide continuous service, but we cannot guarantee that
            the platform will always be available without interruptions.
          </p>
        </section>

        <section>
          <h2>6. Changes to Terms</h2>
          <p>
            These terms may be updated periodically. Continued use of the
            platform indicates acceptance of the revised terms.
          </p>
        </section>

        <div className="terms-footer">
          <p>Last Updated: 2026</p>
        </div>

      </div>

    </div>
  );
}