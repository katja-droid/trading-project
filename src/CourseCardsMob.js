import React, { useState } from 'react';
import './CourseCardsMob.css';
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
import arrowLeftBright from './assets/arrow-left-bright.svg';
import arrowRightBright from './assets/arrow-right-bright.svg';
import withScrollEffect from './WithScrollEffect';
import { useTranslation } from 'react-i18next';

const CourseCardsMob = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < coursesData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const { t } = useTranslation();

  const coursesData = [
    {
      price: t('course.coursesData.0.price'),
      title: t('course.coursesData.0.title'),
      description: t('course.coursesData.0.description'),
      details: t('course.coursesData.0.details'),
      duration: t('course.coursesData.0.duration'),
      knowledgeStars: threeStars,
      skillsStars: threeStars,
      image: courseImage1,
      id: 1,
    },
    {
      price: t('course.coursesData.1.price'),
      title: t('course.coursesData.1.title'),
      description: t('course.coursesData.1.description'),
      details: t('course.coursesData.1.details'),
      duration: t('course.coursesData.1.duration'),
      knowledgeStars: threeFiveStars,
      skillsStars: fourStars,
      image: courseImage2,
      id: 2,
    },
    {
      price: t('course.coursesData.2.price'),
      title: t('course.coursesData.2.title'),
      description: t('course.coursesData.2.description'),
      details: t('course.coursesData.2.details'),
      duration: t('course.coursesData.2.duration'),
      knowledgeStars: fiveStars,
      skillsStars: fiveStars,
      image: courseImage3,
      id: 3,
    },
  ];
  return (
    <div className="course-cards-container-mob">
      <button className="arrow-mob left" onClick={handlePrev} disabled={currentIndex === 0}>
        <img src={arrowLeftBright} alt="Left Arrow" />
      </button>
      <div className="course-cards-swipeable-mob" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {coursesData.map((course, index) => (
          <div className="course-card-mob" key={index}>
            <div className="image-container-mob">
              <img src={course.image} alt={course.title} className="course-image-mob" />
              {course.price && (
                <div className={`price-badge-mob ${course.price === "Бесплатно" ? 'free' : 'paid'}`}>
                  {course.price}
                </div>
              )}
            </div>
            <div className="card-content-mob">
              <div className="course-title-mob">Курс: <span style={{ color: '#8CC2E9' }}>{course.title}</span></div>
              <div className="course-description-mob">{course.description}</div>
              <span className="course-details-mob">{course.details}</span>
              <div className="course-details-mob">
                <div className="course-detail-item-mob">
                  <img src={durationIcon} alt="Duration" className="detail-icon-mob" />
                  <span className="detail-text-mob">Длительность</span>
                  <span className="detail-value-mob">{course.duration}</span>
                </div>
                <div className="course-detail-item-mob">
                  <img src={knowledgeIcon} alt="Знания" className="detail-icon-mob" />
                  <span className="detail-text-mob">Знания</span>
                  <img src={course.knowledgeStars} alt="Rating" className="stars-icon-mob" />
                </div>
                <div className="course-detail-item-mob">
                  <img src={skillsIcon} alt="Навыки" className="detail-icon-mob" />
                  <span className="detail-text-mob">Навыки</span>
                  <img src={course.skillsStars} alt="Rating" className="stars-icon-mob" />
                </div>
              </div>
              <div className="course-buttons-mob">
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
  <button className="more-btn-mob">Подробнее</button>
</a>
<a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
  <GradientButton arrow={true} text="Записаться" height="56px" width="195px" />
</a>

              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="arrow-mob right" onClick={handleNext} disabled={currentIndex === coursesData.length - 1}>
        <img src={arrowRightBright} alt="Right Arrow" />
      </button>
    </div>
  );
};

export default withScrollEffect (CourseCardsMob);
