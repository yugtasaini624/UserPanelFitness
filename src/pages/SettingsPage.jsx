import { useState, useEffect } from "react";
import "../styles/SettingsPage.css";

export default function SettingsPage() {

  const [profile, setProfile] = useState({
    name: "",
    email: ""
  });

  const [notifications, setNotifications] = useState({
    email: true,
    push: true
  });

  /* LOAD USER DATA */

  useEffect(() => {

    const storedUser = localStorage.getItem("user");

    if (storedUser) {

      const user = JSON.parse(storedUser);

      setProfile({
        name: user.name || "",
        email: user.email || ""
      });

    }

  }, []);


  /* PROFILE CHANGE */

  const handleProfileChange = (e) => {

    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });

  };


  const saveProfile = () => {

    const storedUser = JSON.parse(localStorage.getItem("user"));

    const updatedUser = {
      ...storedUser,
      name: profile.name,
      email: profile.email
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    alert("Profile updated successfully");

  };


  /* NOTIFICATIONS */

  const toggleNotification = (e) => {

    setNotifications({
      ...notifications,
      [e.target.name]: e.target.checked
    });

  };


  const saveNotifications = () => {

    localStorage.setItem(
      "notifications",
      JSON.stringify(notifications)
    );

    alert("Notification preferences saved");

  };


  return (

    <div className="settings-page">

      <h1>Account Settings</h1>


      {/* PROFILE */}

      <div className="settings-card">

        <h2>Profile Information</h2>

        <div className="form-group">

          <label>Name</label>

          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleProfileChange}
          />

        </div>

        <div className="form-group">

          <label>Email</label>

          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleProfileChange}
          />

        </div>

        <button
          className="save-btns"
          onClick={saveProfile}
        >
          Save Profile
        </button>

      </div>


      {/* NOTIFICATIONS */}

      <div className="settings-card">

        <h2>Notifications</h2>

        <div className="toggle-group">

          <label>Email Notifications</label>

          <input
            type="checkbox"
            name="email"
            checked={notifications.email}
            onChange={toggleNotification}
          />

        </div>

        <div className="toggle-group">

          <label>Push Notifications</label>

          <input
            type="checkbox"
            name="push"
            checked={notifications.push}
            onChange={toggleNotification}
          />

        </div>

        <button
          className="save-btns"
          onClick={saveNotifications}
        >
          Save Preferences
        </button>

      </div>

    </div>
  );

}
