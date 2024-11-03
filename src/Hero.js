import React from 'react';
import { useMediaQuery, Container, Grid, Box } from '@mui/material';
import './Hero.css';
import graphs from './assets/graphs.png';
import arrow from './assets/arrow2.svg';
import image1 from './assets/profile1.png';
import image2 from './assets/profile2.png';
import image3 from './assets/profile3.png';
import image4 from './assets/profile4.png';
import { useTheme } from '@emotion/react';
import GradientButton from './GradientButton';
import withScrollEffect from './WithScrollEffect';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const Hero = () => {
  const { t } = useTranslation();
  const isMdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const theme = useTheme();
  const matchesMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const navigate = useNavigate();
  const location = useLocation();
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
  const containerStyles = matchesMdUp
    ? theme.customLayout.mdUp.container
    : theme.customLayout.xsToSm.container;

  return (
    <>
      {isMdUp ? (
        <Container variant="allowOverflow" alignItems="center">
          <div className="hero-container">
            <h1 className="hero-heading">
              <span className="gradient-heading">{t('hero.heading')}</span><br />
              {t('hero.subheading')}
            </h1>
            <p className="hero-text">
              {t('hero.description')}
            </p>

            {/* Add Buttons */}
            <div className="hero-buttons">
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
  <button className="hero-button">{t('hero.apply')}</button>
</a>
<a href="#courses" onClick={(e) => handleScroll(e, 'courses')} target="_blank" rel="noopener noreferrer">
  <GradientButton arrow={true} text={t('hero.chooseCourse')} width="229.09px" height="56px" />
</a>

            </div>

            <img src={graphs} alt={t('hero.graphAlt')} className="hero-image" />

            {/* Add Images on the Left and Text on the Right */}
            <div className="text-with-images">
              <div className="images-section">
                <img src={image1} alt={t('hero.imageAlt1')} />
                <img src={image2} alt={t('hero.imageAlt2')} />
                <img src={image3} alt={t('hero.imageAlt3')} />
                <img src={image4} alt={t('hero.imageAlt4')} />
              </div>

              <div className="right-text">
                {t('hero.courseProgress')}
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <Container sx={containerStyles}>
          <Box sx={{ gridColumn: 'span 3' }}>
            <div className="hero-container-mob">
              <h1 className="hero-heading-mob">
                <span className="gradient-heading-mob">{t('hero.heading')}</span><br />
                {t('hero.subheading')}
              </h1>
              <p className="hero-text-mob">
                {t('hero.description')}
              </p>

              {/* Add Buttons */}
              <div className="hero-buttons-mob">
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
  <button className="hero-button-mob">{t('hero.apply')}</button>
</a>
<a href="#courses" onClick={(e) => handleScroll(e, 'courses')}  target="_blank" rel="noopener noreferrer">
  <GradientButton fontSize="18px" arrow={true} text={t('hero.chooseCourse')} width="265px" height="51px" />
</a>

              </div>

              <div className="text-with-images-mob">
                <div className="images-section-mob">
                  <img src={image1} alt={t('hero.imageAlt1')} />
                  <img src={image2} alt={t('hero.imageAlt2')} />
                  <img src={image3} alt={t('hero.imageAlt3')} />
                  <img src={image4} alt={t('hero.imageAlt4')} />
                </div>

                <div className="right-text-mob">
                  {t('hero.courseProgress')}
                </div>
              </div>
            </div>
          </Box>
        </Container>
      )}
    </>
  );
};

export default withScrollEffect(Hero);
