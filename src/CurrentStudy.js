import React from 'react';
import './CurrentStudy.css';
import studyImage from './assets/current-study-image.png';
import threeStars from './assets/three-stars.svg';
import durationIcon from './assets/durationIcon.svg';
import knowledgeIcon from './assets/knowledgeIcon.svg';
import skillsIcon from './assets/skillsIcon.svg';
import GradientButton from './GradientButton';
import withScrollEffect from './WithScrollEffect';
import { useTranslation } from 'react-i18next';

const CurrentStudy = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className='main-heading' style={{ marginBottom: '50px' }}>
        {t('currentStudy.mainHeading')}
        <span className='main-heading-span'> {t('currentStudy.mainHeadingSpan')}</span>
      </h1>

      <div className="current-study-container-cs">
        <img src={studyImage} alt={t('currentStudy.imageAlt')} className="study-image-cs" />
        
        <div className="study-info-block-cs">
          <p className='study-paragraph-cs'>{t('currentStudy.paragraph1')}</p>
          <p className='study-paragraph-cs'>{t('currentStudy.paragraph2')}</p>
          <p className='study-paragraph-cs'>{t('currentStudy.paragraph3')}</p>

          <div className="course-details-cs">
            <div className="course-detail-item-cs">
              <img src={durationIcon} alt={t('currentStudy.durationAlt')} className="detail-icon-cs" />
              <span className="detail-text-cs">{t('currentStudy.durationLabel')}</span>
              <span className="detail-value-cs">{t('currentStudy.durationValue')}</span>
            </div>

            <div className="course-detail-item-cs">
              <img src={knowledgeIcon} alt={t('currentStudy.knowledgeAlt')} className="detail-icon-cs" />
              <span className="detail-text-cs">{t('currentStudy.knowledgeLabel')}</span>
              <span className="detail-value-cs"><img src={threeStars} alt={t('currentStudy.knowledgeRating')} /></span>
            </div>

            <div className="course-detail-item-cs">
              <img src={skillsIcon} alt={t('currentStudy.skillsAlt')} className="detail-icon-cs" />
              <span className="detail-text-cs">{t('currentStudy.skillsLabel')}</span>
              <span className="detail-value-cs"><img src={threeStars} alt={t('currentStudy.skillsRating')} /></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withScrollEffect(CurrentStudy);
