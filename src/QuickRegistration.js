import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation for translations
import './QuickRegistration.css';
import registrationImage from './assets/quick-registration.png';
import arrow from './assets/diagonal-arrow-right.svg';
import arrowWhite from './assets/arrow-white-straight.svg'; // Import the new arrow image
import withScrollEffect from './WithScrollEffect';

const QuickRegistration = () => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover status
  const { t } = useTranslation(); // Initialize useTranslation

  const handleButtonClick = () => {
    // Replace 'YOUR_TELEGRAM_BOT_LINK' with your actual Telegram bot link
    window.open('https://t.me/YOUR_TELEGRAM_BOT_LINK', '_blank');
  };

  return (
    <div className="quick-registration-container">
      <h2 className="quick-registration-text">
        {t('quickRegistration.title')} {/* Translated title */}
      </h2>
      <p className="quick-registration-description">
        {t('quickRegistration.description')} {/* Translated description */}
      </p>
      
      <div className="image-container">
        <img 
          src={registrationImage} 
          alt="Registration Illustration" 
          className="registration-image" 
        />
      </div>

      <div className="button-container">
        <button 
          className="register-button" 
          onMouseEnter={() => setIsHovered(true)} // Set hover state on mouse enter
          onMouseLeave={() => setIsHovered(false)} // Reset hover state on mouse leave
          onClick={handleButtonClick} // Navigate to Telegram on button click
        >
          {t('quickRegistration.buttonText')} {/* Translated button text */}
          <img 
            src={isHovered ? arrowWhite : arrow} // Use the white arrow if hovered
            className='register-arrow' 
            alt="Arrow"
          />
        </button>
      </div>
    </div>
  );
};

export default withScrollEffect(QuickRegistration);
