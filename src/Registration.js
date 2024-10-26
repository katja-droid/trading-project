import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation for translations
import './Registration.css';
import QuickRegistration from './QuickRegistration';
import RegistrationBenefits from './RegistrationBenefits';

const Registration = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div style={{ marginBottom: '150px' }}>
      <h1 className='main-heading' style={{ marginBottom: '50px' }}>
      <span className='main-heading-span'>   {t('registration.heading')} </span>{t('registration.subheading')}
      </h1>

      <div className="registration-container">
        <div className="registration-block block-one">
          <QuickRegistration />
        </div>
        <div className="registration-block block-two">
          <RegistrationBenefits />
        </div>
      </div>
    </div>
  );
};

export default Registration;
