import React from "react";
import "./Loginform.css";

const LoginForm = ({ onClose }) => {
  return (
    <div className="overlay">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
          <button type="submit">Login</button>
          <button className="close-btn" onClick={onClose} style={{marginLeft:'6em'}}>Close</button>
        </form>
        {/* <button className="close-btn" onClick={onClose}>Close</button> */}
      </div>
    </div>
  );
};

export default LoginForm;
