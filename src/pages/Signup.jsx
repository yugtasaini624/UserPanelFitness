import React, { useState } from "react";
import "../styles/Signup.css";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      navigate("/login");

    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <section className="signup">
      <div className="signup-card">
          <h2>Create Your Account 🚀</h2>
          <p>
            Join HealthAI and start your personalized
            journey toward better health.
          </p>

          {/* ONLY CHANGE HERE: onSubmit */}
          <form className="signup-form" onSubmit={handleSignup}>

            <div className="input-group">
              <label>Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input 
                type="email" 
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input 
                type="password" 
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="Re-enter password" />
            </div>

            <button type="submit" className="signup-btn">
              Create Account
            </button>

            <p className="signup-footer">
              Already have an account? 
              <Link to='/login' className="sign">
                <span>Login</span>
              </Link>
            </p>

          </form>
      </div>
    </section>
  );
};

export default Signup;