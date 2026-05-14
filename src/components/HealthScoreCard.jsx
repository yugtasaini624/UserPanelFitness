import "../styles/HealthScoreCard.css";

const HealthScoreCard = ({ score, risks }) => (
  <div className="health-score-card">
    <h2>Overall Health Score</h2>
    <p className="score">{score ?? "N/A"}</p>

    {risks && risks.length > 0 && (
      <div className="per-risk-breakdown">
        <h3>Per-Risk Breakdown</h3>
        <ul>
          {risks.map((risk) => (
            <li key={risk.type}>
              <strong>{risk.type}:</strong>{" "}
              {risk.riskScore !== null
                ? `${risk.riskScore.toFixed(2)}% (${risk.riskLevel})`
                : risk.riskLevel ?? "N/A"}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default HealthScoreCard;