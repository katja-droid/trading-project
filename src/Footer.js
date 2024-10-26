import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import './Navbar.css';
import LangComponent from './LangComponent';
import logoImage from './assets/logo.svg';
import telegramIcon from './assets/telegram.svg';
import whatsappIcon from './assets/whatsapp.svg';
import facebookIcon from './assets/facebook.png';
import instagramIcon from './assets/instagram.svg';
import moreIcon from './assets/more.svg';
import OverlayMenu from './OverlayMenu';
import FooterBottom from './FooterBottom';
import withScrollEffect from './WithScrollEffect';

const Footer = () => {
  const { t } = useTranslation(); // Initialize translation
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Toggle overlay menu
  const toggleOverlay = () => {
    setOverlayOpen(!isOverlayOpen);
  };

  // Scroll to section by ID with conditional redirect
  const handleScroll = (event, targetId) => {
    event.preventDefault();
    
    if (location.pathname !== '/') {
      navigate('/', { state: { targetId } });  // Redirect with targetId in state
    } else {
      scrollToSection(targetId);  // Scroll directly if already on the home page
    }
  };

  const scrollToSection = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{ backgroundColor: '#1C2532', marginTop: '149px' }}>
      <div style={{ width: '1410px', margin: '0 auto' }}>
        <nav className="navbar-fb">
          <Grid container alignItems="center" justifyContent="space-between">
            {/* Logo */}
            <Grid item xs={12} md={3} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start' }}>
              <a href="/" className="navbar-logo">
                <img src={logoImage} alt={t('footer.logoAlt')} />
                <span>TradeBaza</span>
              </a>
            </Grid>

            {/* Language and More Icon */}
            <Grid item xs={12} md={false} sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between' }}>
              <a href="/" className="navbar-logo">
                <img src={logoImage} alt={t('footer.logoAlt')} />
                <span>TradeBaza</span>
              </a>
              <img src={moreIcon} alt={t('footer.moreAlt')} className="more-icon" onClick={toggleOverlay} />
            </Grid>

            {/* Navigation Links */}
            <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' }, justifyContent: 'center' }}>
              <ul className="navbar-links">
                <li><a href="#about" onClick={(e) => handleScroll(e, 'about')}>{t('footer.about')}</a></li>
                <li><a href="#courses" onClick={(e) => handleScroll(e, 'courses')}>{t('footer.courses')}</a></li>
                <li><a href="#reviews" onClick={(e) => handleScroll(e, 'reviews')}>{t('footer.reviews')}</a></li>
                <li><a href="#team" onClick={(e) => handleScroll(e, 'team')}>{t('footer.team')}</a></li>
                <li><a href="#faq" onClick={(e) => handleScroll(e, 'faq')}>{t('footer.faq')}</a></li>
              </ul>
            </Grid>

            {/* Icons */}
            <Grid item xs={12} md={3} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              <div className="navbar-icons">
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
        </nav>
        <FooterBottom />
        <p className="copyright">© 2022 TradeBaza. {t('footer.allRightsReserved')} {t('footer.designBy')}</p>
      </div>
    </div>
  );
};

export default withScrollEffect(Footer);
