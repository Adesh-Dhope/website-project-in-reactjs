
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./Navbar.css";
import SignUpForm from "../Forms/Signupform";
import LoginForm from "../Forms/Loginform";
import RouteComponent from "./Routes";
import { useTheme } from "../Light-Dark-Toggle/ThemeContext";




const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const { theme, toggleTheme } = useTheme();
  
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="navbar-icon">
          <GitHubIcon />
        </div>

        <div className="navbar-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
           
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>
                Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </div>

        <div className="navbar-buttons">
          <button onClick={() => setShowLogin(true)}>Login</button>
          <button onClick={() => setShowSignUp(true)}>Sign Up</button>
        </div>
      </nav>

      {/* Use RouteComponent for the routing */}
      <RouteComponent />

      {/* Modals for Login and Sign Up */}
      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
      {showSignUp && <SignUpForm onClose={() => setShowSignUp(false)} />}
    </BrowserRouter>
  );
};

export default Navbar;
