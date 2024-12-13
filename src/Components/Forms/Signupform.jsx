import React from "react";
import "./Signupform.css";

const SignUpForm = ({ onClose }) => {
  return (
    <div className="overlay">
      <div className="sign-up-form">
        <h2>Sign Up</h2>
        <form>
          <label>Username</label>
          <input type="text" placeholder="Enter your username" required />
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
          <button type="submit">Sign Up</button>
          <button className="close-btn" onClick={onClose} style={{marginLeft:'6em'}} >Close</button>
        </form>
        {/* <button className="close-btn" onClick={onClose}>Close</button> */}
      </div>
    </div>
  );
};

export default SignUpForm;
