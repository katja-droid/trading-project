import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation for translations
import './QuickRegistrationMob.css';
import registrationImage from './assets/quick-registration.png';
import arrow from './assets/diagonal-arrow-right.svg';
import withScrollEffect from './WithScrollEffect';

const QuickRegistrationMob = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  const handleButtonClick = () => {
    // Replace 'YOUR_TELEGRAM_BOT_LINK' with your actual Telegram bot link
    window.open('https://t.me/YOUR_TELEGRAM_BOT_LINK', '_blank');
  };

  return (
    <div className="quick-registration-container-mob">
      <h1 className='main-heading-mob' >
      <span className='main-heading-span-mob'>   {t('registration.heading')}</span> {t('registration.subheading')}
      </h1>
      <h2 className="quick-registration-text-mob">
        {t('quickRegistration.title')} {/* Translated title */}
      </h2>
      <p className="quick-registration-description-mob">
        {t('quickRegistration.description')} {/* Translated description */}
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
          {t('quickRegistration.buttonText')} {/* Translated button text */}
          <img src={arrow} className='register-arrow-mob' alt="Arrow" />
        </button>
      </div>
    </div>
  );
};

export default withScrollEffect(QuickRegistrationMob);
