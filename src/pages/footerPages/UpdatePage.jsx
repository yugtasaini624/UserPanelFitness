import "../../styles/FooterPages/UpdatePage.css";

export default function UpdatesPage() {
  return (
    <div className="updates-page">

      <div className="updates-card">

        <h1>🚀 Upcoming Updates</h1>

        <p className="updates-sub">
          We are constantly improving our AI Health Platform.
          New features and improvements are on the way!
        </p>

        <div className="updates-list">

          <div className="update-item">
            <h3>🧠 Advanced AI Insights</h3>
            <p>More detailed health explanations powered by improved AI models.</p>
          </div>

          <div className="update-item">
            <h3>📊 Interactive Health Dashboard</h3>
            <p>New visual charts to track your health risk trends over time.</p>
          </div>

          <div className="update-item">
            <h3>📱 Mobile Friendly Experience</h3>
            <p>A fully optimized mobile interface for easy access anywhere.</p>
          </div>

          <div className="update-item">
            <h3>🤖 Personalized AI Recommendations</h3>
            <p>Smart suggestions based on your health predictions.</p>
          </div>

        </div>

        <div className="coming-soon">
          <h2>✨ More Features Coming Soon</h2>
          <p>Stay tuned for exciting updates and improvements.</p>
        </div>

      </div>

    </div>
  );
}