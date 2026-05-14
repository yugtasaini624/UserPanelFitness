import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandle = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        alert(data.message);
        return;
      }
      console.log("Login Success:", data);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setEmail("");
      setPassword("");

       navigate("/user");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <section className="login">
      <div className="login-container">

        <div className="login-left">
          <h2>Welcome Back 👋</h2>
          <p>
            Log in to access your personalized health insights
            and continue your wellness journey.
          </p>

          <form className="login-form" onSubmit={loginHandle}>
            <div className="input-group">
              <label>Email</label>
              <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="you@example.com" />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="••••••••" />
            </div>

            <div className="login-options">
              <span>Forgot password?</span>
            </div>

            <button type="submit" className="login-btn">Log In</button>

            <p className="login-footer">
              Don’t have an account? <Link to='/signup' className='log'><span>Sign up</span></Link>
            </p>
          </form>
        </div>

        <div className="login-right">
          <h3>Your Health, Smarter</h3>
          <p>
            AI-driven insights, personalized fitness plans,
            and preventive care — all in one place.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Login;
