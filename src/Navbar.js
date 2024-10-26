import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './Navbar.css';
import LangComponent from './LangComponent';
import logoImage from './assets/logo.svg';
import telegramIcon from './assets/telegram.svg';
import whatsappIcon from './assets/whatsapp.svg';
import facebookIcon from './assets/facebook.png';
import instagramIcon from './assets/instagram.svg';
import moreIcon from './assets/more.svg';
import OverlayMenu from './OverlayMenu';

const Navbar = () => {
  const { t } = useTranslation();
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleOverlay = () => {
    setOverlayOpen(!isOverlayOpen);
  };

  const handleScroll = (event, targetId) => {
    event.preventDefault();

    const scrollToSection = () => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    // Redirect if not on the home page
    if (location.pathname !== '/') {
      navigate('/'); // Navigate to home
      setTimeout(scrollToSection, 100);  // Delay to allow page load
    } else {
      scrollToSection();
    }
  };

  return (
    <nav className="navbar">
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item xs={false} md={3} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start' }}>
          <a href="/" className="navbar-logo">
            <img src={logoImage} alt="TradeBaza Logo" />
            <span>TradeBaza</span>
          </a>
        </Grid>

        <Grid item xs={12} md={false} sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/" className="navbar-logo">
            <img src={logoImage} alt="TradeBaza Logo" />
            <span>TradeBaza</span>
          </a>
          <LangComponent />
          <img src={moreIcon} alt="More" className="more-icon" onClick={toggleOverlay} />
        </Grid>

        <Grid item xs={false} md={6} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
          <ul className="navbar-links">
            <li><a href="#about" onClick={(e) => handleScroll(e, 'about')}>{t('navbar.about')}</a></li>
            <li><a href="#courses" onClick={(e) => handleScroll(e, 'courses')}>{t('navbar.courses')}</a></li>
            <li><a href="#reviews" onClick={(e) => handleScroll(e, 'reviews')}>{t('navbar.reviews')}</a></li>
            <li><a href="#team" onClick={(e) => handleScroll(e, 'team')}>{t('navbar.team')}</a></li>
            <li><a href="#faq" onClick={(e) => handleScroll(e, 'faq')}>{t('navbar.faq')}</a></li>
          </ul>
        </Grid>

        <Grid item xs={false} md={3} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
          <div className="navbar-icons">
            <LangComponent />
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <img src={telegramIcon} alt="Telegram" className="navbar-icon" />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
              <img src={whatsappIcon} alt="WhatsApp" className="navbar-icon" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" className="navbar-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className="navbar-icon" />
            </a>
          </div>
        </Grid>
      </Grid>

      <OverlayMenu isOpen={isOverlayOpen} toggleOverlay={toggleOverlay} handleScroll={handleScroll} />
    </nav>
  );
};

export default Navbar;
