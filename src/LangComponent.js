import React, { useContext, useState } from 'react';
import './LangComponent.css';
import langIcon from './assets/icon.svg';
import arrowIcon from './assets/arrow.svg';
import { useTranslation } from 'react-i18next'; // Use the useTranslation hook

const LangComponent = () => {
  const { i18n } = useTranslation(); // Use translation instance
  const [isLangOpen, setLangOpen] = useState(false);

  const toggleLangOverlay = () => {
    setLangOpen(!isLangOpen);
  };

  const selectLanguage = (lang) => {
    i18n.changeLanguage(lang); // Use i18n to change language
    setLangOpen(false);
  };

  return (
    <div className="lang-selector" onClick={toggleLangOverlay}>
      <img src={langIcon} alt="Language Icon" className="lang-icon" />
      <img src={arrowIcon} alt="Dropdown Arrow" className={`arrow-icon ${isLangOpen ? 'open' : ''}`} />

      {isLangOpen && (
        <div className="lang-overlay">
          <ul className="lang-options">
            <li onClick={() => selectLanguage('ru')} className={`lang-option ${i18n.language === 'ru' ? 'selected' : ''}`}>
              Русский
            </li>
            <li onClick={() => selectLanguage('en')} className={`lang-option ${i18n.language === 'en' ? 'selected' : ''}`}>
              English
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default  LangComponent;
