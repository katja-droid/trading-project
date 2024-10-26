import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation for translations
import './SwipeableDivs.css';
import arrowLeftBright from './assets/arrow-left-bright.svg';
import arrowLeftFaded from './assets/arrow-left-faded.svg';
import arrowRightBright from './assets/arrow-right-bright.svg';
import arrowRightFaded from './assets/arrow-right-faded.svg';
import leftImage from './assets/sample-image.png';
import stars from './assets/stars.svg';
import withScrollEffect from './WithScrollEffect';

const SwipeableDivs = () => {
  const { t } = useTranslation(); // Initialize useTranslation
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const divs = [
    {
      id: 1,
      backgroundColor: 'transparent',
      name: t('swipeableDivs.divs.0.name'), // Translated name
      title: t('swipeableDivs.divs.0.title'), // Translated title
      course: t('swipeableDivs.divs.0.course'), // Translated course
      feedback: t('swipeableDivs.divs.0.feedback'), // Translated feedback
    },
    {
      id: 2,
      backgroundColor: 'transparent',
      name: t('swipeableDivs.divs.1.name'), // Translated name
      title: t('swipeableDivs.divs.1.title'), // Translated title
      course: t('swipeableDivs.divs.1.course'), // Translated course
      feedback: t('swipeableDivs.divs.1.feedback'), // Translated feedback
    },
    {
      id: 3,
      backgroundColor: 'transparent',
      name: t('swipeableDivs.divs.2.name'), // Translated name
      title: t('swipeableDivs.divs.2.title'), // Translated title
      course: t('swipeableDivs.divs.2.course'), // Translated course
      feedback: t('swipeableDivs.divs.2.feedback'), // Translated feedback
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
        {t('swipeableDivs.heading')} <span className='main-heading-span'> {t('swipeableDivs.subHeading')} </span>
      </h1>
      <p className='main-paragraph'>  
        {t('swipeableDivs.paragraph')}
      </p>

      <div className="swipeable-container-swd">
        <div className="swipeable-div-swd" style={{ transform: `translateX(-${currentIndex * 1410}px)` }}>
          {divs.map((div) => (
            <div key={div.id} className="swipeable-content-swd" style={{ backgroundColor: div.backgroundColor }}>
              <div className="image-container-swd">
                <img src={leftImage} alt={`Person ${div.id}`} className="left-image-swd" />
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

export default withScrollEffect(SwipeableDivs);
