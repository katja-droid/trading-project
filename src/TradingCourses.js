
import React, { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const courseWidth = 320;
  const gap = 20;

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
      id: 0,
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
      id: 1,
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
      id: 2,
    },
  ];

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
      scrollRef.current.scrollLeft = (courseWidth + gap) * activeIndex;
    }
  }, [activeIndex]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      const newIndex = Math.round(scrollPosition / (courseWidth + gap));
  
      // Check if we are at the maximum scroll position to activate the last item
      if (Math.abs(scrollPosition - maxScrollLeft) < 1) {
        setActiveIndex(coursesData.length - 1); // Set to last index explicitly
      } else if (Math.abs(activeIndex - newIndex) >= 1) {
        setActiveIndex(newIndex); // Otherwise, set to calculated index
      }
    }
  };
  

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

  const handleLineClick = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: (courseWidth + gap) * index,
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };
  
  const handleTouchEnd = () => {
    if (scrollRef.current) {
      const newIndex = Math.round(scrollRef.current.scrollLeft / (courseWidth + gap));
      setActiveIndex(newIndex);
      // Ensure precise alignment by using scrollTo with calculated position
      scrollRef.current.scrollTo({
        left: (courseWidth + gap) * newIndex,
        behavior: 'smooth',
      });
    }
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
        onScroll={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ overflowX: 'scroll', display: 'flex' }}
      >
        {coursesData.map((course, index) => (
          <div
            key={index}
            className="trading-course-card-mob"
            style={{ opacity: activeIndex === index ? 1 : 0.35 }}
          >
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
                      e.preventDefault();
                      window.scrollTo(0, 0);
                      navigate(`/product/${course.id}`);
                    }}
                    style={{ textDecoration: 'none' }}
                    className="more-btn-mob-2"
                  >
                    {t('course.moreDetails')}
                  </Link>
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
