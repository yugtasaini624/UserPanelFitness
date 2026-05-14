import "../styles/OverviewCards.css";

export default function OverviewCards({ logs }) {
  if (!logs.length) return null;

  const latest = logs[0];

  return (
    <div className="overview-grid">
      <div className="card">
        <h4>BMI</h4>
        <p>{latest.bmi.toFixed(1)}</p>
      </div>

      <div className="card">
        <h4>Health Score</h4>
        <p>{latest.healthScore}/100</p>
      </div>

      <div className="card">
        <h4>Heart Rate</h4>
        <p>{latest.heartRate} bpm</p>
      </div>

      <div className="card">
        <h4>Sleep</h4>
        <p>{latest.sleepHours} hrs</p>
      </div>
    </div>
  );
}