import React, { useState } from 'react';
import './QuickRegistration.css';
import registrationImage from './assets/quick-registration.png';
import arrow from './assets/diagonal-arrow-right.svg';
import arrowWhite from './assets/arrow-white-straight.svg'; // Import the new arrow image
import withScrollEffect from './WithScrollEffect';

const QuickRegistration = () => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover status

  const handleButtonClick = () => {
    // Replace 'YOUR_TELEGRAM_BOT_LINK' with your actual Telegram bot link
    window.open('https://t.me/YOUR_TELEGRAM_BOT_LINK', '_blank');
  };

  return (
    <div className="quick-registration-container">
      <h2 className="quick-registration-text">
        Быстрая регистрация
      </h2>
      <p className="quick-registration-description">
        Переходите в наш Telegram-bot, следуйте инструкциям и начинайте обучение уже сегодня. Наш куратор уже ждет Вас!
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
          Перейти в Telegram 
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
