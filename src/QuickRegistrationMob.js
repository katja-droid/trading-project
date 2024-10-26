import React from 'react';
import './QuickRegistrationMob.css';
import registrationImage from './assets/quick-registration.png';
import arrow from './assets/diagonal-arrow-right.svg';
import withScrollEffect from './WithScrollEffect';

const QuickRegistrationMob = () => {
  const handleButtonClick = () => {
    // Replace 'YOUR_TELEGRAM_BOT_LINK' with your actual Telegram bot link
    window.open('https://t.me/YOUR_TELEGRAM_BOT_LINK', '_blank');
  };

  return (
    <div className="quick-registration-container-mob">
      <h2 className="quick-registration-text-mob">
        Быстрая регистрация
      </h2>
      <p className="quick-registration-description-mob">
        Переходите в наш Telegram-bot, следуйте инструкциям и начинайте обучение уже сегодня. Наш куратор уже ждет Вас!
      </p>
      
      <div className="image-container-mob">
        <img 
          src={registrationImage} 
          alt="Registration Illustration" 
          className="registration-image-mob" 
        />
      </div>

      <div className="button-container-mob">
        <button 
          className="register-button-mob" 
          onClick={handleButtonClick} // Navigate to Telegram on button click
        >
          Перейти в Telegram 
          <img src={arrow} className='register-arrow-mob' alt="Arrow" />
        </button>
      </div>
    </div>
  );
};

export default withScrollEffect(QuickRegistrationMob);
