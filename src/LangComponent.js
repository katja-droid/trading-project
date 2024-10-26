import React, { useState } from 'react';
import './LangComponent.css';
import langIcon from './assets/icon.svg';
import arrowIcon from './assets/arrow.svg';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const LangComponent = ({ isOverlayVisible, toggleOverlay, language = 'en' }) => {
  const { i18n } = useTranslation();
  const [isLangOpen, setLangOpen] = useState(false);

  const toggleLangOverlay = () => {
    setLangOpen(!isLangOpen);
    toggleOverlay(!isLangOpen); // Call the toggleOverlay function with the new state
  };

  const selectLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLangOpen(false);
    toggleOverlay(false); // Ensure overlay is closed when a language is selected
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

LangComponent.propTypes = {
  language: PropTypes.string,
  toggleOverlay: PropTypes.func,  // Define the expected type
  isOverlayVisible: PropTypes.bool,
};

LangComponent.defaultProps = {
  toggleOverlay: () => {}, // Provide a default function
};

export default LangComponent;
