import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation for translations
import './SwipeableDivs.css';
import arrowLeftBright from './assets/arrow-left-bright.svg';
import arrowLeftFaded from './assets/arrow-left-faded.svg';
import arrowRightBright from './assets/arrow-right-bright.svg';
import arrowRightFaded from './assets/arrow-right-faded.svg';
import sampleImage1 from './assets/review-desk-1.png';
import sampleImage2  from './assets/review-desk-2.png';
import sampleImage3 from './assets/review-desk-3.png';
import stars from './assets/stars.svg';
import withScrollEffect from './WithScrollEffect';

const ReviewsOneCourse = () => {
  const { t } = useTranslation(); // Initialize useTranslation
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const divs = [
    {
      id: 1,
      image: sampleImage1, // Assign specific image
      backgroundColor: 'transparent',
      name: t('swipeableDivs.divs.0.name'), // Translated name
      title: t('swipeableDivs.divs.0.title'), // Translated title
      course: t('swipeableDivs.divs.0.course'), // Translated course
      feedback: t('swipeableDivs.divs.0.feedback'), // Translated feedback
    },
    {
      id: 2,
      image: sampleImage2,
      backgroundColor: 'transparent',
      name: t('swipeableDivs.divs.1.name'),
      title: t('swipeableDivs.divs.1.title'),
      course: t('swipeableDivs.divs.1.course'),
      feedback: t('swipeableDivs.divs.1.feedback'),
    },
    {
      id: 3,
      image: sampleImage3,
      backgroundColor: 'transparent',
      name: t('swipeableDivs.divs.2.name'),
      title: t('swipeableDivs.divs.2.title'),
      course: t('swipeableDivs.divs.2.course'),
      feedback: t('swipeableDivs.divs.2.feedback'),
    },
  ];

  const handleNext = () => {
    if (currentIndex < divs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div style={{marginBottom: '150px'}}> 
      <h1 className='main-heading' id="reviews">
        {t('swipeableDivs.headingOne')} <span className='main-heading-span'> {t('swipeableDivs.subHeadingOne')} </span>
      </h1>
   
      <div className="swipeable-container-swd">
        <div className="swipeable-div-swd" style={{ transform: `translateX(-${currentIndex * 1410}px)` }}>
          {divs.map((div) => (
            <div key={div.id} className="swipeable-content-swd" style={{ backgroundColor: div.backgroundColor }}>
              <div className="image-container-swd">
                <img src={div.image} alt={`Person ${div.id}`} className="left-image-swd" />
              </div>
              <div className="info-container-swd">
                <img src={stars} alt="Stars" width="135px" />
                <h3 className="name-swd">{div.name}</h3>
                <p className="title-swd">{div.title}</p>
                <p className="course-swd">{div.course}</p>
                <p className="feedback-swd">{div.feedback}</p>
                <button className="feedback-button-swd">{t('swipeableDivs.feedbackButton')}</button> {/* Translated button text */}
              </div>
            </div>
          ))}
        </div>
        <button className="arrow-swd left" onClick={handlePrev} disabled={currentIndex === 0}>
          <img
            src={currentIndex === 0 ? arrowLeftFaded : arrowLeftBright}
            alt="Left Arrow"
          />
        </button>
        <button className="arrow-swd right" onClick={handleNext} disabled={currentIndex === divs.length - 1}>
          <img
            src={currentIndex === divs.length - 1 ? arrowRightFaded : arrowRightBright}
            alt="Right Arrow"
          />
        </button>
      </div>
    </div>
  );
};

export default withScrollEffect(ReviewsOneCourse);
