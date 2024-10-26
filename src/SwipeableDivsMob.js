import React, { useRef, useEffect, useState } from 'react';
import './SwipeableDivsMob.css';
import trainer1 from './assets/trainer1.png';
import trainer2 from './assets/trainer2.png';
import trainer3 from './assets/trainer3.png';
import reviewImage1 from './assets/review-mob-1.png';
import reviewImage2 from './assets/review-mob-2.png';
import reviewImage3 from './assets/review-mob-3.png';
import stars from './assets/stars.svg';
import lineBright from './assets/line_bright.svg';
import lineFaded from './assets/line_faded.svg';
import withScrollEffect from './WithScrollEffect';

const SwipeableDivsMob = () => {
  const reviews = [
    {
      id: 1,
      name: 'Андрей ШАБАНОВ',
      title: 'Повар, художник',
      course: 'Прошел курс “Основы трейдинга”',
      feedback: 'Ну, бесплатный курс по трейдинга... так, не плох. Но мне нужно больше...',
      image: reviewImage1,
    },
    {
      id: 2,
      name: 'Андрей ШАБАНОВ',
      title: 'Повар, художник',
      course: 'Прошел курс “Основы трейдинга”',
      feedback: 'Ну, бесплатный курс по трейдинга... так, не плох. Но мне нужно больше...',
      image: reviewImage2,
    },
    {
      id: 3,
      name: 'Андрей ШАБАНОВ',
      title: 'Повар, художник',
      course: 'Прошел курс “Основы трейдинга”',
      feedback: 'Ну, бесплатный курс по трейдинга... так, не плох. Но мне нужно больше...',
      image: reviewImage3,
    },
  ];

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1); // Default to center
  const sectionWidth = 265 + 20; // Section width + gap
  let startX = 0;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = sectionWidth * activeIndex; // Center default section
    }
  }, []);

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
        left: sectionWidth * activeIndex,
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  return (
    <div style={{ marginTop: '50px' }}>
      <h1 className='main-heading-mob'>
        Реальные истории успеха: <span className='main-heading-span-mob'>Отзывы о наших курсах</span>
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
