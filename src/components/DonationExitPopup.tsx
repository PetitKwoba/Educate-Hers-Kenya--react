import React, { useState, useEffect } from 'react';
import '../enhancements.css';

const DonationExitPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from the top of the page (going to address bar/close tab)
      if (e.clientY <= 0 && !isVisible) {
        setIsVisible(true);
      }
    };

    // Add event listener after a short delay to avoid triggering on page load
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleDonate = () => {
    window.open('https://www.mchanga.africa/fundraiser/125738', '_blank', 'noopener,noreferrer');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="donation-exit-overlay" onClick={handleClose}></div>
      <div className="donation-exit-popup">
        <button className="donation-exit-close" onClick={handleClose} aria-label="Close popup">
          <i className="fas fa-times"></i>
        </button>
        
        <div className="donation-exit-content">
          <div className="donation-exit-icon">
            <i className="fas fa-heart"></i>
          </div>
          
          <h2 className="donation-exit-title">Wait! Before You Go...</h2>
          
          <p className="donation-exit-message">
            Your donation can change a girl's life. Help us provide education to girls in need.
          </p>
          
          <div className="donation-exit-stats">
            <div className="exit-stat-item">
              <div className="exit-stat-number">500+</div>
              <div className="exit-stat-label">Girls Supported</div>
            </div>
            <div className="exit-stat-item">
              <div className="exit-stat-number">100%</div>
              <div className="exit-stat-label">Goes to Education</div>
            </div>
          </div>
          
          <button className="donation-exit-button" onClick={handleDonate}>
            <span className="button-icon">
              <i className="fas fa-hand-holding-heart"></i>
            </span>
            <span className="button-text">Donate via M-Changa</span>
            <span className="button-arrow">
              <i className="fas fa-arrow-right"></i>
            </span>
          </button>
          
          <button className="donation-exit-decline" onClick={handleClose}>
            Maybe Later
          </button>
        </div>
      </div>
    </>
  );
};

export default DonationExitPopup;
