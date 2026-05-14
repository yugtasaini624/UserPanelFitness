import { useEffect, useState } from "react";
import OverviewCards from "../components/OverviewCards";
import AddHealthModal from "../components/AddHealthModal";
import HealthTable from "../components/HealthTable";
import HealthCharts from "../components/HealthCharts";
import { getHealthLogs } from "../services/healthService";
import "../styles/HealthMetrics.css";

export default function HealthMetrics() {
  const [logs, setLogs] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchLogs = async () => {
    const data = await getHealthLogs();
    setLogs(data);
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div className="health-page">
      <div className="health-header">
        <h2>Health Metrics</h2>
        <button
          className="add-btn"
          onClick={() => setShowModal(true)}
        >
          + Add Daily Log
        </button>
      </div>

      <OverviewCards logs={logs} />
      <HealthCharts logs={logs} />
      <HealthTable logs={logs} refresh={fetchLogs} />

      {showModal && (
        <AddHealthModal
          close={() => setShowModal(false)}
          refresh={fetchLogs}
        />
      )}
    </div>
  );
}