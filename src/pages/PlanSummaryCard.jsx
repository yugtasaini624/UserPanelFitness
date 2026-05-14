import "../styles/PlanSummaryCard.css";

const PlanSummaryCard = ({ focusPoints }) => {
  return (
    <div className="plan-summary-card">
      <h3>Risk-Focused Fitness Goals</h3>
      <ul>
        {focusPoints.map((fp, idx) => (
          <li key={idx}>{fp}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlanSummaryCard;