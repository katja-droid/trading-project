import React, { useState } from 'react';
import { Grid } from '@mui/material';
import './Navbar.css';
import LangComponent from './LangComponent';
import logoImage from './assets/logo.svg';
import telegramIcon from './assets/telegram.svg';
import whatsappIcon from './assets/whatsapp.svg';
import facebookIcon from './assets/facebook.png';
import instagramIcon from './assets/instagram.svg';
import topArrowIcon from './assets/top-arrow.svg'; // Import the top arrow icon
import withScrollEffect from './WithScrollEffect';

const FooterMob = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div style={{ width: '265px', margin: '0 auto' , marginTop: '50px'}}>
        <nav className="navbar" style={{backgroundColor: 'transparent'}}>
          <Grid container alignItems="center" justifyContent={{ xs: 'space-between', md: 'space-between' }}>

            {/* Logo */}
            <Grid
              item
              xs={12}
              md={3}
              sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start', width: { xs: '100%', md: 'auto' } }}
            >
              <a href="/" className="navbar-logo">
                <img src={logoImage} alt="TradeBaza Logo" />
                <span>TradeBaza</span>
              </a>
            </Grid>

            {/* LangComponent and Top Arrow Icon for Small Screens */}
            <Grid
              item
              xs={12}
              md={false}
              sx={{
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%'
              }}
            >
              <a href="/" className="navbar-logo">
                <img src={logoImage} alt="TradeBaza Logo" />
                <span>TradeBaza</span>
              </a>
              <LangComponent />
              <img src={topArrowIcon} alt="Scroll to Top" className="top-arrow-icon" onClick={scrollToTop} />
            </Grid>

            {/* Navigation Links */}
            <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' }, justifyContent: 'center' }}>
              <ul className="navbar-links">
                <li><a href="#about">Об обучении</a></li>
                <li><a href="#courses">Курсы</a></li>
                <li><a href="#reviews">Отзывы</a></li>
                <li><a href="#team">Наша команда</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </Grid>

            {/* Icons */}
            <Grid item xs={12} md={3} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
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
        </nav>
      </div>

      <div className="overlay-menu-social" style={{ borderTop: '1px solid #A9A9A9', padding: '26px 0', margin: 0 }}>
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
      <p style={{ fontSize: '14px', color: '#A9A9A9', width: '229px', margin: '0 auto', textAlign: 'center', paddingBottom: '25px' }}>
        TradeBaza - онлайн-куры по торговле, для современных людей: от базы финансовой грамотности до собственной стратегии
      </p>
      <p style={{ fontSize: '10px', color: '#FFFFFF', opacity: '52%', margin: '0 auto', textAlign: 'center', paddingBottom: '25px', paddingTop: '5px' }}>
        © 2022 TradeBaza. All rights reserved. Design: Web-Canape
      </p>
    </>
  );
};

export default withScrollEffect (FooterMob);
