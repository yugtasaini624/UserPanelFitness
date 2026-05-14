import "../styles/RecommendationsPanel.css";

const RecommendationPanel = ({ selectedRisk }) => {
  if (!selectedRisk) return null;

  const recs = selectedRisk.recommendations.length
    ? selectedRisk.recommendations
    : ["Maintain healthy lifestyle", "Consult your doctor"];

  return (
    <div className="recommendation-panel">
      <h3>{selectedRisk.type} Recommendations</h3>
      <ul>
        {recs.map((r, idx) => (
          <li key={idx}>{r}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationPanel;