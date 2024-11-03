import React from 'react';
import { useMediaQuery, Container, Box } from '@mui/material';
import { useTranslation } from 'react-i18next'; // Import the translation hook
import './Hero.css';
import graphs from './assets/graphs.png';
import arrow from './assets/arrow2.svg'; // Import the arrow for the second button
import image1 from './assets/profile1.png'; // Add your images here
import image2 from './assets/profile2.png';
import image3 from './assets/profile3.png';
import image4 from './assets/profile4.png';
import { useTheme } from '@emotion/react';
import GradientButton from './GradientButton';
import withScrollEffect from './WithScrollEffect';
import { useNavigate, useLocation } from 'react-router-dom';

const HeroProduct = () => {
  const { t } = useTranslation(); // Initialize the translation hook
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
    ? theme.customLayout.mdUp.container // 12-column layout for mdUp
    : theme.customLayout.xsToSm.container; // 3-column layout for xs to sm

  return (
    <>
      {isMdUp ? (
        <Container variant="allowOverflow" alignItems="center">
          <div className="hero-container">
            <h1 className="hero-heading">
              <span className="gradient-heading">{t('heroproduct.educationalCourse')}</span><br />
              {t('heroproduct.courseTitle')}
            </h1>
            <p className="hero-text">
              {t('heroproduct.courseDescription')}
            </p>

            {/* Add Buttons */}
            <div className="hero-buttons">
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
  <button className="hero-button">{t('heroproduct.applyButton')}</button>
</a>
<a href="#courses" onClick={(e) => handleScroll(e, 'courses')} target="_blank" rel="noopener noreferrer">
  <GradientButton arrow={true} text={t('heroproduct.selectCourseButton')} width="229.09px" height="56px" />
</a>
      </div>

            {/* Add Images on the Left and Text on the Right */}
            <div className="text-with-images">
              <div className="images-section">
                <img src={image1} alt="Image 1" />
                <img src={image2} alt="Image 2" />
                <img src={image3} alt="Image 3" />
                <img src={image4} alt="Image 4" />
              </div>

              <div className="right-text">
                +1,32К <br />
                {t('heroproduct.passedCourse')}
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <Container sx={containerStyles}>
          <Box sx={{ gridColumn: 'span 3' }}> {/* Use 3-column span for Navbar on xs to sm */}
            <div className="hero-container-mob">
              <h1 className="hero-heading-mob" style={{ fontSize: '22px', marginBottom: '40px' }}>
                <span className="gradient-heading-mob">{t('heroproduct.educationalCourse')}</span><br />
                {t('heroproduct.courseTitle')}
              </h1>
              {/* Add Buttons */}
              <div className="hero-buttons-mob">
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
  <button className="hero-button-mob">{t('heroproduct.applyButton')}</button>
</a>
<a href="#courses" onClick={(e) => handleScroll(e, 'courses')}  target="_blank" rel="noopener noreferrer">
  <GradientButton arrow={true} text={t('heroproduct.selectCourseButton')} width="265px" height="51px" fontSize="18px" />
</a>
    </div>
              <div className="text-with-images-mob">
                <div className="images-section-mob">
                  <img src={image1} alt="Image 1" />
                  <img src={image2} alt="Image 2" />
                  <img src={image3} alt="Image 3" />
                  <img src={image4} alt="Image 4" />
                </div>
                <div className="right-text-mob">
                  +1,32К <br />
                  {t('heroproduct.passedCourse')}
                </div>
              </div>
            </div>
          </Box>
        </Container>
      )}
    </>
  );
};

export default withScrollEffect(HeroProduct);
