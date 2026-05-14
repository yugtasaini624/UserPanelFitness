import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "../styles/UserNavbar.css";

const UserNavbar = ({ toggleSidebar }) => {

  const [openProfile, setOpenProfile] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  let user = null;

  try {
    const storedUser = localStorage.getItem("user");
    if (storedUser) user = JSON.parse(storedUser);
  } catch {
    console.error("Invalid user data");
  }

  return (
    <div className="user-navbar">

      {/* LEFT */}
      <div className="nav-left">

        <button
          className="sidebar-btn"
          onClick={toggleSidebar}
        >
          ☰
        </button>

        <h2 className="nav-title">
          HealthAI
        </h2>

      </div>


      {/* RIGHT */}
      <div className="nav-right">

        {/* Notification */}
        

        {/* Profile */}
        <div
          className="profile"
          onClick={() => setOpenProfile(!openProfile)}
        >

          <div className="avatar">
            {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>

          <span className="username">
            {user?.name || "User"}
          </span>

          <span className="arrow">▾</span>

          {openProfile && (

            <div className="dropdown">

              <p onClick={() => navigate("/user/profile")}>
                <Link to="profile" className="cols">
                Profile
                </Link>
              </p>

              <p onClick={handleLogout}>
                Logout
              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default UserNavbar;