import "../styles/RiskBreakdownPanel.css";

const RiskBreakdownPanel = ({ selectedRisk }) => {
  if (!selectedRisk) return null;

  return (
    <div className="risk-breakdown-panel">
      <h3>{selectedRisk.type} Risk Details</h3>
      <ul>
        {selectedRisk.explanations.length > 0 ? (
          selectedRisk.explanations.map((exp, idx) => <li key={idx}>{exp}</li>)
        ) : (
          <li>No notable risk factors</li>
        )}
      </ul>
    </div>
  );
};

export default RiskBreakdownPanel;