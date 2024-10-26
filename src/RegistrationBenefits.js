import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation for translations
import './RegistrationBenefits.css';
import checkmarkIcon from './assets/checkmark.svg'; // Adjust path to your SVG file
import withScrollEffect from './WithScrollEffect';

const RegistrationBenefits = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  // Retrieve benefits from translations
  const benefits = t('registrationBenefits.benefits', { returnObjects: true });

  return (
    <div className="registration-benefits-container">
      {benefits.map((benefit, index) => (
        <div key={index} className="benefit-item">
          <img src={checkmarkIcon} alt="Checkmark" className="checkmark-icon" />
          <p className="benefit-text">{benefit}</p>
        </div>
      ))}
    </div>
  );
};

export default withScrollEffect(RegistrationBenefits);
