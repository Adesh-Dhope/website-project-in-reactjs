import React from "react";
import "./Footer.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
<>
    <footer className="footer-section">
      <div className="footer-section1">
        <h2 className="f-section-h2">Happy Digital</h2>
        <p>
          We are a team of passionate developers building modern, user-friendly
          web solutions to help businesses thrive in the digital age.
        </p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> <LinkedInIcon /> </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">  <GitHubIcon /> </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
        </div>
      </div>
      <div className="footer-section2">
        <h2 className="f-section-h2">Quick Links</h2>
        <ul className="quick-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact Us</a></li>
          
        </ul>
      </div>
      <div className="footer-section3">
        <h2 className="f-section-h2">Contact Info</h2>
        <p>Email: hospital@gmail.com</p>
        <p>Phone: +91 7788607890</p>
        <p>Location: Kothrud, Pune</p>
      </div>
    </footer>

    </>
  );
};

export default Footer;
