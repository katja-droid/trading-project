import React from 'react';
import './CurrentStudyMob.css'; // New CSS file for mobile version
import threeStars from './assets/three-stars.svg';
import durationIcon from './assets/durationIcon.svg';
import knowledgeIcon from './assets/knowledgeIcon.svg';
import skillsIcon from './assets/skillsIcon.svg';
import withScrollEffect from './WithScrollEffect';
import { useTranslation } from 'react-i18next';

const CurrentStudyMob = () => {
  const { t } = useTranslation(); 
  return (
    <>
      <h1 className='main-heading-mob' style={{marginTop: '50px'}}>
      {t('currentStudy.mainHeading')} <span className='main-heading-span-mob'>{t('currentStudy.mainHeadingSpan')}</span>
      </h1>

      <div className="current-study-container-mob">
        <div className="study-info-block-mob">
          <p className='study-paragraph-mob'>
          {t('currentStudy.paragraph1')}     </p>
          <p className='study-paragraph-mob'>
          {t('currentStudy.paragraph2')}
          </p>
          <p className='study-paragraph-mob'>
          {t('currentStudy.paragraph3')}
          </p>

          <div className="course-details-mob">
            <div className="course-detail-item-mob">
              <img src={durationIcon} alt="Duration" className="detail-icon-mob" />
              <span className="detail-text-mob">{t('currentStudy.durationLabel')}</span>
              <span className="detail-value-mob">{t('currentStudy.durationValue')}</span>
            </div>
            <div className="course-detail-item-mob">
              <img src={knowledgeIcon} alt="Знания" className="detail-icon-mob" />
              <span className="detail-text-mob">{t('currentStudy.knowledgeLabel')}</span>
              <span className="detail-value-mob"><img width="100px" src={threeStars} alt="Знания" /></span>
            </div>
            <div className="course-detail-item-mob">
              <img src={skillsIcon} alt="Навыки" className="detail-icon-mob" />
              <span className="detail-text-mob">{t('currentStudy.skillsLabel')}</span>
              <span className="detail-value-mob"><img  width="100px" src={threeStars} alt="Навыки" /></span>
            </div>
          </div>

         
        </div>
      </div>
    </>
  );
};

export default withScrollEffect (CurrentStudyMob);
