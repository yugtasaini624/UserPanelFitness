import { deleteHealthLog } from "../services/healthService";
import "../styles/HealthTable.css";

export default function HealthTable({ logs, refresh }) {
  if (!logs.length) return null;

  const handleDelete = async (id) => {
    await deleteHealthLog(id);
    refresh();
  };

  return (
    <div className="table-container">
      <h3>History</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>BMI</th>
            <th>Sleep</th>
            <th>Heart Rate</th>
            <th>Score</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log._id}>
              <td>{new Date(log.createdAt).toLocaleDateString()}</td>
              <td>{log.bmi.toFixed(1)}</td>
              <td>{log.sleepHours}</td>
              <td>{log.heartRate}</td>
              <td>{log.healthScore}</td>
              <td>
                <button className="buttons" onClick={() => handleDelete(log._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}