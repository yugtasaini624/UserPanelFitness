import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "../styles/HealthCharts.css";

export default function HealthCharts({ logs }) {
  if (!logs.length) return null;

  const data = logs.map((log) => ({
    date: new Date(log.createdAt).toLocaleDateString(),
    weight: log.weight,
    sleep: log.sleepHours,
    heartRate: log.heartRate,
  })).reverse();

  return (
    <div className="charts-container">
      <h3>Trends</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="weight" />
          <Line type="monotone" dataKey="sleep" />
          <Line type="monotone" dataKey="heartRate" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}