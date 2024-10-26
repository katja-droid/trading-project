import React, { useRef, useEffect, useState } from 'react';
import './SwipeableDivsMob.css';

// Import the images, stars, and lines as variables
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
  const trainers = [
    {
      id: 1,
      photo: trainer1,
      name: 'ДАНИЛА',
      lastName: 'Анапов',
      title: 'Специалист по продажам',
      text: 'В трейдинге с 2019 года. Соавтор курсов TradeBaze. Эксперт на рынке криптовалют, также торгует американский рынок.',
    },
    {
      id: 2,
      photo: trainer2,
      name: 'Сергей',
      lastName: 'СКОКОВ',
      title: 'Специалист по продажам',
      text: 'В трейдинге с 2019 года. Соавтор курсов TradeBaze. Эксперт на рынке криптовалют, также торгует американский рынок.',
    },
    {
      id: 3,
      photo: trainer3,
      name: 'Вера',
      lastName: 'АКУМОВА',
      title: 'Специалист по продажам',
      text: 'В трейдинге с 2019 года. Соавтор курсов TradeBaze. Эксперт на рынке криптовалют, также торгует американский рынок.',
    },
  ];

  const reviews = [
    {
      id: 1,
      backgroundColor: 'transparent',
      name: 'Андрей ШАБАНОВ',
      title: 'Повар, художник',
      course: 'Прошел курс “Основы трейдинга”',
      feedback: 'Ну, бесплатный курс по трейдинга... так, не плох. Но мне нужно больше, мне нужны детали, вот прям чувствую, что нужно больше глубины и практики. Мне нужны инсайды. Думаю, в платном курсе именно это и будет! 💪💰',
      image: reviewImage1,
    },
    {
      id: 2,
      backgroundColor: 'transparent',
      name: 'Андрей ШАБАНОВ',
      title: 'Повар, художник',
      course: 'Прошел курс “Основы трейдинга”',
      feedback: 'Ну, бесплатный курс по трейдинга... так, не плох. Но мне нужно больше, мне нужны детали, вот прям чувствую, что нужно больше глубины и практики. Мне нужны инсайды. Думаю, в платном курсе именно это и будет! 💪💰',
      image: reviewImage2,
    },
    {
      id: 3,
      backgroundColor: 'transparent',
      name: 'Андрей ШАБАНОВ',
      title: 'Повар, художник',
      course: 'Прошел курс “Основы трейдинга”',
      feedback: 'Ну, бесплатный курс по трейдинга... так, не плох. Но мне нужно больше, мне нужны детали, вот прям чувствую, что нужно больше глубины и практики. Мне нужны инсайды. Думаю, в платном курсе именно это и будет! 💪💰',
      image: reviewImage3,
    },
  ];

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1); // Initially, the second section is active
  let startX = 0;

  useEffect(() => {
    if (scrollRef.current) {
      const sectionWidth = 265; // Section width
      const gap = 20; // Gap between sections
      scrollRef.current.scrollLeft = (sectionWidth + gap) * 1; // Scroll to second section
    }
  }, []);

  const handleTouchStart = (e) => {
    startX = e.touches[0].pageX;
  };

  const handleTouchMove = (e) => {
    if (scrollRef.current) {
      const moveX = e.touches[0].pageX - startX;
      scrollRef.current.scrollLeft -= moveX;
      startX = e.touches[0].pageX;
    }
  };

  const handleScroll = () => {
    const sectionWidth = 265;
    const gap = 20;
    const scrollPosition = scrollRef.current.scrollLeft;
    const currentIndex = Math.round(scrollPosition / (sectionWidth + gap));
    setActiveIndex(currentIndex);
  };

  const handleLineClick = (index) => {
    if (scrollRef.current) {
      const sectionWidth = 265;
      const gap = 20;
      scrollRef.current.scrollLeft = (sectionWidth + gap) * index;
    }
  };

  return (
    <div style={{    marginTop: '50px'}}>
         <h1 className='main-heading-mob'  >
        
          Реальные истории успеха: <span className='main-heading-span-mob'>  Отзывы о наших курсах</span>
      </h1>
    
      <div className="line-indicators-reviews">
        {trainers.map((_, index) => (
          <img
            key={index}
            src={activeIndex === index ? lineBright : lineFaded}
            alt={activeIndex === index ? 'Bright line' : 'Faded line'}
            className="line-indicator-reviews"
            onClick={() => handleLineClick(index)}
          />
        ))}
      </div>

      <div
        className="scroll-container-reviews"
        ref={scrollRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onScroll={handleScroll}
      >
        {reviews.map((review) => (
          <div className="section-reviews" key={review.id} style={{ backgroundColor: review.backgroundColor }}>
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

export default withScrollEffect (SwipeableDivsMob);
