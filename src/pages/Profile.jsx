import { useState } from "react";
import "../styles/Profile.css";

export default function Profile() {

  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [name,setName] = useState(storedUser?.name || "");
  const [email,setEmail] = useState(storedUser?.email || "");
  const [age,setAge] = useState(storedUser?.age || "");
  const [editing,setEditing] = useState(false);

  const saveProfile = () => {

    const updatedUser = {
      ...storedUser,
      name,
      email,
      age
    };

    localStorage.setItem("user",JSON.stringify(updatedUser));

    setEditing(false);

    alert("Profile Updated Successfully");

  };

  return (

    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-header">

          <div className="profile-avatar">
            {name.charAt(0).toUpperCase()}
          </div>

          <h2>{name}</h2>

          <p>{email}</p>

        </div>

        <div className="profile-body">

          <div className="profile-field">

            <label>Name</label>

            <input
              value={name}
              disabled={!editing}
              onChange={(e)=>setName(e.target.value)}
            />

          </div>

          <div className="profile-field">

            <label>Email</label>

            <input
              value={email}
              disabled={!editing}
              onChange={(e)=>setEmail(e.target.value)}
            />

          </div>

          <div className="profile-field">

            <label>Age</label>

            <input
              value={age}
              disabled={!editing}
              onChange={(e)=>setAge(e.target.value)}
            />

          </div>

        </div>

        <div className="profile-actions">

          {!editing && (

            <button
              className="edit-btn"
              onClick={()=>setEditing(true)}
            >
              Edit Profile
            </button>

          )}

          {editing && (

            <button
              className="save-btn"
              onClick={saveProfile}
            >
              Save Changes
            </button>

          )}

        </div>

      </div>

    </div>

  );

}