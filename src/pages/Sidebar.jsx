import "../styles/Sidebar.css";
import {
  LayoutDashboard,
  Activity,
  HeartPulse,
  Dumbbell,
  Utensils,
  Settings,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`sidebar ${sidebarOpen ? "active" : ""}`}>

        <div className="sidebar-logo">
          Health<span>AI</span>
        </div>


        <ul className="sidebar-menu">
          <li>
            <LayoutDashboard size={18} />
            <Link to="dashboard" className="vals">
            <span>Overview</span>
            </Link>
          </li>

          
          <li>
            <Activity size={18} />
            <Link to="health" className="vals">
            <span>Health Metrics</span>
            </Link>
          </li>
          

          <li>
            <HeartPulse size={18} />
            <Link to="risk" className="vals">
            <span>AI Risk Analysis</span>
            </Link>
          </li>

          <li>
            <Dumbbell size={18} />
            <Link to="fitness" className="vals">
            <span>Fitness Plan</span>
            </Link>
          </li>

          <li>
            <Utensils size={18} />
            <Link to="diet" className="vals">
            <span>Diet Plan</span>
            </Link>
          </li>

          <li>
            <Settings size={18} />
            <Link to="settings" className="vals">
            <span>Settings</span>
            </Link>
          </li>
        </ul>

        {/* FOOTER */}
        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
