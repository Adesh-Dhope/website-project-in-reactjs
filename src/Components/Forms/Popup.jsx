import React, { useState, useEffect } from "react";
import "./Popup.css";

const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the popup after 4 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="popup-overlay">
        <div className="popup-container">
          <button className="close-button" onClick={handleClose}>
            &times;
          Close</button>
          <h2 className="popup-title">Subscribe to Our Newsletter</h2>
          <p className="popup-text">Stay updated with our latest news and offers.</p>
          <form className="popup-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
              required
            />
            <button type="submit" className="subscribe-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default NewsletterPopup;

