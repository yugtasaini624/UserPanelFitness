import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Sidebar";
import UserNavbar from "../pages/UserNavbar";
import "../styles/UserLayout.css";

export default function UserLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="user-wrapper">

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="user-main">
        <UserNavbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <div className="user-content">
          <Outlet />
        </div>
      </div>

    </div>
  );
}