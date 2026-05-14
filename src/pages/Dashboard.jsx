import Sidebar from "./Sidebar";
// import Topbar from "./Topbar";
import "../styles/Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-main">
        {/* <Topbar /> */}

        <div className="dashboard-content">
          <h1>Welcome back 👋</h1>
          <p>Here’s what’s happening today</p>
        </div>
      </div>
    </div>
  );
}