import React from 'react';
import './HowMob.css'; // Import the CSS file for styling
import howImage from './assets/how-image.png'; // Adjust path as necessary
import withScrollEffect from './WithScrollEffect';
import { useTranslation } from 'react-i18next';

const HowMob = () => {
  const { t } = useTranslation();

  return (
    <div className="howmob-container">
      {/* Heading */}
      <h1 className='main-heading-mob' id="aboutmb">
        {t('how.titlePart1')} <span className='main-heading-span-mob'>{t('how.titlePart2')}</span>
      </h1>
      <p className='main-paragraph-mob'>
        {t('how.description')}
      </p>

      {/* Image */}
      <img 
        src={howImage} 
        alt={t('how.imageAlt')} 
        className="howmob-image"
      />

      {/* Paragraphs */}
      <div className="howmob-paragraphs">
        <div className="howmob-paragraph howmob-paragraph-even">
          <h4 className="howmob-paragraph-title">{t('how.courses.beginner.title')}</h4>
          <p className="howmob-paragraph-text">{t('how.courses.beginner.description')}</p>
        </div>
        
        <div className="howmob-paragraph howmob-paragraph-odd">
          <h4 className="howmob-paragraph-title">{t('how.firstDeal.title')}</h4>
          <p className="howmob-paragraph-text">{t('how.firstDeal.description')}</p>
        </div>

        <div className="howmob-paragraph howmob-paragraph-even">
          <h4 className="howmob-paragraph-title">{t('how.globalExchanges.title')}</h4>
          <p className="howmob-paragraph-text">{t('how.globalExchanges.description')}</p>
        </div>

        <div className="howmob-paragraph howmob-paragraph-odd">
          <h4 className="howmob-paragraph-title">{t('how.levelUp.title')}</h4>
          <p className="howmob-paragraph-text">{t('how.levelUp.description')}</p>
        </div>

        <div className="howmob-paragraph howmob-paragraph-even">
          <h4 className="howmob-paragraph-title">{t('how.expertSupport.title')}</h4>
          <p className="howmob-paragraph-text">{t('how.expertSupport.description')}</p>
        </div>

        <div className="howmob-paragraph howmob-paragraph-odd">
          <h4 className="howmob-paragraph-title">{t('how.exclusiveAccess.title')}</h4>
          <p className="howmob-paragraph-text">{t('how.exclusiveAccess.description')}</p>
        </div>
      </div>
    </div>
  );
};

export default withScrollEffect(HowMob);
