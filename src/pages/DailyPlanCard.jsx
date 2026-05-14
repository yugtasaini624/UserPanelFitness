import "../styles/DailyPlanCard.css";

const DailyPlanCard = ({ dayPlan }) => {
  return (
    <div className="daily-plan-card">
      <h4>{dayPlan.day}</h4>
      <ul>
        {dayPlan.exercises.map((ex, idx) => (
          <li key={idx}>{ex}</li>
        ))}
      </ul>
      <div className="tips">
        <strong>Tips:</strong>
        <ul>
          {dayPlan.tips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DailyPlanCard;