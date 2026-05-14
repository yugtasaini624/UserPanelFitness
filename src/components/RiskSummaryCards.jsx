import "../styles/RiskSummaryCards.css";

const levelColors = {
  Low: "#4caf50",
  Moderate: "#ff9800",
  High: "#f44336",
};

const riskEmojis = {
  Heart: "🫀",
  Diabetes: "🍬",
  Hypertension: "🧬",
  Obesity: "⚖️",
};

const RiskSummaryCards = ({ risks, onSelectRisk }) => {
  return (
    <div className="risk-summary-dashboard">
      {risks.map((risk) => (
        <div
          key={risk.type}
          className="risk-card"
          onClick={() => onSelectRisk(risk)}
        >
          <div className="risk-header">
            <span className="risk-emoji">{riskEmojis[risk.type]}</span>
            <h3>{risk.type} Risk</h3>
          </div>
          <div className="risk-score">
            {risk.riskScore !== null
              ? `${risk.riskScore.toFixed(1)}%`
              : risk.riskLevel}
          </div>
          <div
            className="risk-badge"
            style={{
              backgroundColor: levelColors[risk.riskLevel] || "#999",
            }}
          >
            {risk.riskLevel}
          </div>
          {risk.riskScore !== null && (
            <div className="risk-bar">
              <div
                className="risk-bar-fill"
                style={{
                  width: `${risk.riskScore}%`,
                  background: `linear-gradient(90deg, ${levelColors[risk.riskLevel]}, #ccc)`,
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RiskSummaryCards;