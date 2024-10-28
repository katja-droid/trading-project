import React from 'react';
import './How.css'; // Import the CSS file for styling
import bgArrows from './assets/bg_arrows.svg'; // Adjust path as necessary
import howImage from './assets/how-image.png'; // Adjust path as necessary
import withScrollEffect from './WithScrollEffect';
import { useTranslation } from 'react-i18next';

const How = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className='main-heading' id="about">
        {t('how.titlePart1')} <span className='main-heading-span'>{t('how.titlePart2')}</span>
      </h1>
      <p className='main-paragraph' style={{color: '#fff'}}>
        {t('how.description')}
      </p>
      <div className="grid-container-h">
        {/* First row: 3 columns */}
        <div className="grid-item-h card">
          <h4>{t('how.courses.beginner.title')}</h4>
          <p>{t('how.courses.beginner.description')}</p>
        </div>

        <div className="grid-item-h card">
          <h4>{t('how.firstDeal.title')}</h4>
          <p>{t('how.firstDeal.description')}</p>
        </div>

        <div className="grid-item-h card">
          <h4>{t('how.globalExchanges.title')}</h4>
          <p>{t('how.globalExchanges.description')}</p>
        </div>

        {/* Second row: Full-height background section in the center column */}
        <div className="grid-item-h full-height-pic">
          <div className="full-width-section">
            <img src={howImage} alt={t('how.imageAlt')} className="how-image" />
          </div>
        </div>

        {/* Third row: Первая сделка in the first column */}
        <div className="grid-item-h card">
          <h4>{t('how.levelUp.title')}</h4>
          <p>{t('how.levelUp.description')}</p>
        </div>

        <div className="grid-item-h card">
          <h4>{t('how.expertSupport.title')}</h4>
          <p>{t('how.expertSupport.description')}</p>
        </div>

        <div className="grid-item-h card last-column">
          <h4>{t('how.exclusiveAccess.title')}</h4>
          <p>{t('how.exclusiveAccess.description')}</p>
        </div>
      </div>
    </>
  );
};

export default withScrollEffect(How);
