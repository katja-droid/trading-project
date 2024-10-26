import React from 'react';
import { Container, Box } from '@mui/material';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import GradientButton from './GradientButton';
import image1 from './assets/profile1.png'; 
import image2 from './assets/profile2.png';
import image3 from './assets/profile3.png';
import image4 from './assets/profile4.png';
import './FooterBottom.css';
import withScrollEffect from './WithScrollEffect';

const FooterBottom = () => {
  const { t } = useTranslation(); // Initialize translation

  return (
    <Container className="footer-container-fb">
      <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
        <p className='p-fb'>
          {t('footerBottom.description')} {/* Use translation key */}
        </p>
        
        <div className="footer-buttons-fb" style={{ zIndex: '228' }}>
          <button className="hero-button-fb">{t('footerBottom.applyButton')}</button> {/* Use translation key */}
          <GradientButton arrow={true} text={t('footerBottom.selectCourseButton')} width="240px" height="56px" /> {/* Use translation key */}
        </div>

        <div className="text-with-images-fb">
          <div className="images-section-fb">
            <img src={image1} alt={t('footerBottom.imageAlt1')} />
            <img src={image2} alt={t('footerBottom.imageAlt2')} />
            <img src={image3} alt={t('footerBottom.imageAlt3')} />
            <img src={image4} alt={t('footerBottom.imageAlt4')} />
          </div>
          <div className="right-text-fb">
            +1,32К <br />
            {t('footerBottom.passedCourse')} {/* Use translation key */}
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default withScrollEffect(FooterBottom);
