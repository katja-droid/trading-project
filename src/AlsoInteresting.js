import React from 'react';
import { useTranslation } from 'react-i18next';
import './AlsoInteresting.css'; // Import unique CSS file for AlsoInteresting

// Import images for the courses (same as CourseCards)
import courseImage1 from './assets/courseImage1.png';
import courseImage2 from './assets/courseImage2.png';
import courseImage3 from './assets/courseImage3.png';
import durationIcon from './assets/durationIcon.svg';
import knowledgeIcon from './assets/knowledgeIcon.svg';
import skillsIcon from './assets/skillsIcon.svg';
import threeStars from './assets/three-stars.svg';
import threeFiveStars from './assets/three-five-stars.svg';
import fiveStars from './assets/five-stars.svg';
import fourStars from './assets/four-stars.svg';
import GradientButton from './GradientButton';
import withScrollEffect from './WithScrollEffect';

const coursesData = [
  {
    id: 1, // Added unique ID for the course
    priceKey: 'course.coursesData.0.price',
    titleKey: 'course.coursesData.0.title',
    descriptionKey: 'course.coursesData.0.description',
    detailsKey: 'course.coursesData.0.details',
    durationKey: 'course.coursesData.0.duration',
    knowledgeStars: threeStars,
    skillsStars: threeStars,
    image: courseImage1,
  },
  {
    id: 2, // Added unique ID for the course
    priceKey: 'course.coursesData.1.price',
    titleKey: 'course.coursesData.1.title',
    descriptionKey: 'course.coursesData.1.description',
    detailsKey: 'course.coursesData.1.details',
    durationKey: 'course.coursesData.1.duration',
    knowledgeStars: threeFiveStars,
    skillsStars: fourStars,
    image: courseImage2,
  },
  {
    id: 3, // Added unique ID for the course
    priceKey: 'course.coursesData.2.price',
    titleKey: 'course.coursesData.2.title',
    descriptionKey: 'course.coursesData.2.description',
    detailsKey: 'course.coursesData.2.details',
    durationKey: 'course.coursesData.2.duration',
    knowledgeStars: fiveStars,
    skillsStars: fiveStars,
    image: courseImage3,
  },
];

const AlsoInteresting = ({ excludeCourseId }) => { // Changed prop name to excludeCourseId
  const { t } = useTranslation();

  return (
    <div className="also-interesting-container">
      <h1 className='main-heading' style={{ marginBottom: '50px' }}>
        {t('course.alsoInterestingTitle')} <span className='main-heading-span'>{t('course.alsoInterestingSpan')}</span>
      </h1>
      <div className="also-interesting-grid">
        {coursesData
          .filter(course => course.id !== excludeCourseId) // Exclude course based on ID
          .map((course) => (
            <div key={course.id} className="course-card" style={{ backgroundColor: '#1C2532' }}>
              <div className="image-container">
                <img src={course.image} alt={t(course.titleKey)} className="course-image" />
                {t(course.priceKey) && (
                  <div className={`price-badge ${t(course.priceKey) === t('course.free') ? 'free' : 'paid'}`}>
                    {t(course.priceKey)}
                  </div> 
                )}
              </div>
              <div className="card-content">
                <div className="course-title">{t('course.titlePrefix')} <span style={{ color: '#8CC2E9' }}>{t(course.titleKey)}</span></div>
                <div className="course-description">{t(course.descriptionKey)}</div>
                <span className="course-details">{t(course.detailsKey)}</span>
                <div className="course-details">
                  <div className="course-detail-item">
                    <img src={durationIcon} alt="Duration" className="detail-icon" />
                    <span className="detail-text">{t('course.duration')}</span>
                    <span className="detail-value">{t(course.durationKey)}</span>
                  </div>
                  <div className="course-detail-item">
                    <img src={knowledgeIcon} alt="Knowledge" className="detail-icon" />
                    <span className="detail-text">{t('course.knowledge')}</span>
                    <img src={course.knowledgeStars} alt="Rating" className="stars-icon" />
                  </div>
                  <div className="course-detail-item">
                    <img src={skillsIcon} alt="Skills" className="detail-icon" />
                    <span className="detail-text">{t('course.skills')}</span>
                    <img src={course.skillsStars} alt="Rating" className="stars-icon" />
                  </div>
                </div>
                <div className="course-buttons">
                  <button className="more-btn-2">{t('course.moreDetails')}</button>
                  <GradientButton arrow={true} text={t('course.apply')} height="56px" width="195px" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default withScrollEffect(AlsoInteresting);
