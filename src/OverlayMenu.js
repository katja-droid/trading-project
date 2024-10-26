import React from 'react';
import { useTranslation } from 'react-i18next';
import './OverlayMenu.css';
import closeIcon from './assets/close.svg';
import telegramIcon from './assets/telegram.svg';
import whatsappIcon from './assets/whatsapp.svg';
import facebookIcon from './assets/facebook.png';
import instagramIcon from './assets/instagram.svg';

const OverlayMenu = ({ isOpen, toggleOverlay, handleScroll }) => {
  const { t } = useTranslation(); // Initialize the translation hook

  if (!isOpen) return null; // Do not render the overlay if it's not open

  return (
    <div className="overlay-menu">
      <div className="overlay-menu-content">
        <div className="overlay-menu-close-button" onClick={toggleOverlay}>
          <img src={closeIcon} alt={t('overlayMenu.close')} className="overlay-menu-close-icon" />
        </div>

        <ul className="overlay-menu-links">
          <li><a href="#about" onClick={(e) => { handleScroll(e, 'about'); toggleOverlay(); }}>{t('overlayMenu.about')}</a></li>
          <li><a href="#courses" onClick={(e) => { handleScroll(e, 'courses'); toggleOverlay(); }}>{t('overlayMenu.courses')}</a></li>
          <li><a href="#reviews" onClick={(e) => { handleScroll(e, 'reviews'); toggleOverlay(); }}>{t('overlayMenu.reviews')}</a></li>
          <li><a href="#team" onClick={(e) => { handleScroll(e, 'team'); toggleOverlay(); }}>{t('overlayMenu.team')}</a></li>
          <li><a href="#faq" onClick={(e) => { handleScroll(e, 'faq'); toggleOverlay(); }}>{t('overlayMenu.faq')}</a></li>
        </ul>

        <div className="overlay-menu-social">
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
            <img src={telegramIcon} alt="Telegram" className="overlay-menu-icon" />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" className="overlay-menu-icon" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="overlay-menu-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="overlay-menu-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OverlayMenu;
