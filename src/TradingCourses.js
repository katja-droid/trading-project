import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './TradingCourses.css';
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
import lineBright from './assets/line_bright.svg';
import lineFaded from './assets/line_faded.png';
import GradientButton from './GradientButton';
import withScrollEffect from './WithScrollEffect';
import { useTranslation } from 'react-i18next';

const TradingCourses = () => {
  const { t } = useTranslation();
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [startX, setStartX] = useState(0);

  // Define an array of base course data
  const baseCoursesData = [
    {
      priceKey: 'course.coursesData.0.price',
      titleKey: 'course.coursesData.0.title',
      descriptionKey: 'course.coursesData.0.description',
      detailsKey: 'course.coursesData.0.details',
      durationKey: 'course.coursesData.0.duration',
      knowledgeStars: threeStars,
      skillsStars: threeStars,
      image: courseImage1,
      id: 1,
    },
    {
      priceKey: 'course.coursesData.1.price',
      titleKey: 'course.coursesData.1.title',
      descriptionKey: 'course.coursesData.1.description',
      detailsKey: 'course.coursesData.1.details',
      durationKey: 'course.coursesData.1.duration',
      knowledgeStars: threeFiveStars,
      skillsStars: fourStars,
      image: courseImage2,
      id: 2,
    },
    {
      priceKey: 'course.coursesData.2.price',
      titleKey: 'course.coursesData.2.title',
      descriptionKey: 'course.coursesData.2.description',
      detailsKey: 'course.coursesData.2.details',
      durationKey: 'course.coursesData.2.duration',
      knowledgeStars: fiveStars,
      skillsStars: fiveStars,
      image: courseImage3,
      id: 3,
    },
  ];

  // Map over the base data to create the translated coursesData
  const coursesData = baseCoursesData.map(course => ({
    price: t(course.priceKey),
    title: t(course.titleKey),
    description: t(course.descriptionKey),
    details: t(course.detailsKey),
    duration: t(course.durationKey),
    knowledgeStars: course.knowledgeStars,
    skillsStars: course.skillsStars,
    image: course.image,
    id: course.id,
  }));

  useEffect(() => {
    if (scrollRef.current) {
      const courseWidth = 320;
      const gap = 20;
      scrollRef.current.scrollLeft = (courseWidth + gap) * activeIndex;
    }
  }, [activeIndex]);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX);
  };

  const handleTouchMove = (e) => {
    if (scrollRef.current) {
      const moveX = e.touches[0].pageX - startX;
      scrollRef.current.scrollLeft -= moveX;
      setStartX(e.touches[0].pageX);
    }
  };

  const handleTouchEnd = () => {
    if (scrollRef.current) {
      const courseWidth = 320;
      const gap = 20;
      const scrollPosition = scrollRef.current.scrollLeft;
      const currentIndex = Math.round(scrollPosition / (courseWidth + gap));
      setActiveIndex(currentIndex);
    }
  };

  const handleLineClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="trading-course-container-mob">
      <h1 className="main-heading-mob">
        {t('course.mainHeading')} <span className="main-heading-span-mob">{t('course.newLife')}</span>
      </h1>
      
      <div className="line-indicators-courses-mob">
        {coursesData.map((_, index) => (
          <img
            key={index}
            src={activeIndex === index ? lineBright : lineFaded}
            alt={activeIndex === index ? 'Bright line' : 'Faded line'}
            className="line-indicator-courses-mob"
            onClick={() => handleLineClick(index)}
          />
        ))}
      </div>
      
      <div
        className="scroll-container-courses-mob"
        ref={scrollRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ overflowX: 'scroll', display: 'flex' }}
      >
        {coursesData.map((course, index) => (
          <div key={index} className="trading-course-card-mob" style={{ opacity: activeIndex === index ? 1 : 0.35 }}>
            <div className="image-container-mob">
              <img src={course.image} alt={course.title} className="course-image-mob" />
              {course.price && (
                <div className={`price-badge-mob ${course.price === "Бесплатно" ? 'price-badge-free-mob' : 'price-badge-paid-mob'}`}>
                  {course.price}
                </div>
              )}
            </div>
            <div className="card-content-mob">
              <div className="course-title-mob">{t('course.titlePrefix')} <span style={{color: '#8CC2E9'}}>{course.title}</span></div>
              <div className="course-description-mob">{course.description}</div>
              <span className="course-details-mob-2">{course.details}</span>
              <div className="course-details-mob">
                <div className="course-detail-item-mob">
                  <img src={durationIcon} alt={t('course.duration')} className="detail-icon-mob" />
                  <span className="detail-text-mob">{t('course.duration')}</span>
                  <span className="detail-value-mob">{course.duration}</span>
                </div>
                <div className="course-detail-item-mob">
                  <img src={knowledgeIcon} alt={t('course.knowledge')} className="detail-icon-mob" />
                  <span className="detail-text-mob">{t('course.knowledge')}</span>
                  <img src={course.knowledgeStars} alt="Rating" className="stars-icon-mob" />
                </div>
                <div className="course-detail-item-mob">
                  <img src={skillsIcon} alt={t('course.skills')} className="detail-icon-mob" />
                  <span className="detail-text-mob">{t('course.skills')}</span>
                  <img src={course.skillsStars} alt="Rating" className="stars-icon-mob" />
                </div>
              </div>
              {activeIndex === index && (
                <div className="course-buttons-mob">
                    <Link 
  to={`/product/${course.id}`} 
  onClick={(e) => {
    e.preventDefault(); // Prevents the default link behavior
    window.scrollTo({ top: 0 });
    setTimeout(() => (window.location.href = `/product/${course.id}`), 1); // Allows smooth scroll to finish before redirect
  }}
  style={{ textDecoration: 'none' }} className="more-btn-mob-2">{t('course.moreDetails')}</Link>
                  <div style={{ position: 'relative', zIndex: 10, marginTop: '10px'}}>
                    <a href="https://t.me/your-telegram-link" target="_blank" rel="noopener noreferrer">
                      <GradientButton arrow={true} text={t('course.apply')} height="51px" width="100%" fontSize="18px" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withScrollEffect(TradingCourses);
