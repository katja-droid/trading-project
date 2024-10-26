import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation for translations
import './SwipeableDivsMob.css';
import reviewImage1 from './assets/review-mob-1.png';
import reviewImage2 from './assets/review-mob-2.png';
import reviewImage3 from './assets/review-mob-3.png';
import stars from './assets/stars.svg';
import lineBright from './assets/line_bright.svg';
import lineFaded from './assets/line_faded.svg';
import withScrollEffect from './WithScrollEffect';

const SwipeableDivsMob = () => {
  const { t } = useTranslation(); // Initialize useTranslation
  const reviews = [
    {
      id: 1,
      name: t('swipeableDivs.divs.0.name'), // Translated name
      title: t('swipeableDivs.divs.0.title'), // Translated title
      course: t('swipeableDivs.divs.0.course'), // Translated course
      feedback: t('swipeableDivs.divs.0.feedback'), // Translated feedback
      image: reviewImage1,
    },
    {
      id: 2,
      name: t('swipeableDivs.divs.1.name'), // Translated name
      title: t('swipeableDivs.divs.1.title'), // Translated title
      course: t('swipeableDivs.divs.1.course'), // Translated course
      feedback: t('swipeableDivs.divs.1.feedback'), // Translated feedback
      image: reviewImage2,
    },
    {
      id: 3,
      name: t('swipeableDivs.divs.2.name'), // Translated name
      title: t('swipeableDivs.divs.2.title'), // Translated title
      course: t('swipeableDivs.divs.2.course'), // Translated course
      feedback: t('swipeableDivs.divs.2.feedback'), // Translated feedback
      image: reviewImage3,
    },
  ];

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1); // Default to center
  const sectionWidth = 265 + 20; // Section width + gap
  let startX = 0;

  useEffect(() => {
    if (scrollRef.current) {
      // Center the active review div
      scrollRef.current.scrollLeft = sectionWidth * activeIndex - (scrollRef.current.clientWidth / 2) + (sectionWidth / 2);
    }
  }, [activeIndex]);

  const handleTouchStart = (e) => {
    startX = e.touches[0].pageX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].pageX;
    const diffX = startX - endX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0 && activeIndex < reviews.length - 1) {
        // Swipe left
        setActiveIndex((prev) => prev + 1);
      } else if (diffX < 0 && activeIndex > 0) {
        // Swipe right
        setActiveIndex((prev) => prev - 1);
      }
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: sectionWidth * activeIndex - (scrollRef.current.clientWidth / 2) + (sectionWidth / 2),
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  return (
    <div style={{ marginTop: '50px' }}>
      <h1 className='main-heading-mob'>
        {t('swipeableDivs.heading')} <span className='main-heading-span-mob'>{t('swipeableDivs.subHeading')}</span>
      </h1>
    
      <div className="line-indicators-reviews">
        {reviews.map((_, index) => (
          <img
            key={index}
            src={activeIndex === index ? lineBright : lineFaded}
            alt={activeIndex === index ? 'Bright line' : 'Faded line'}
            className="line-indicator-reviews"
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      <div
        className="scroll-container-reviews"
        ref={scrollRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {reviews.map((review) => (
          <div className="section-reviews" key={review.id}>
            <div className="review-image-container">
              <img src={review.image} alt="Review" className="review-image" />
              <img src={stars} alt="Stars" className="stars-overlay" />
            </div>
            <h2 className="name-reviews">{review.name}</h2>
            <h3 className="title-reviews">{review.title}</h3>
            <p className="course-reviews">{review.course}</p>
            <p className="feedback-reviews">{review.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withScrollEffect(SwipeableDivsMob);
