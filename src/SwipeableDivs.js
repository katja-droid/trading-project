import React, { useState } from 'react';
import './SwipeableDivs.css';
import arrowLeftBright from './assets/arrow-left-bright.svg';
import arrowLeftFaded from './assets/arrow-left-faded.svg';
import arrowRightBright from './assets/arrow-right-bright.svg';
import arrowRightFaded from './assets/arrow-right-faded.svg';
import leftImage from './assets/sample-image.png';
import stars from './assets/stars.svg';
import withScrollEffect from './WithScrollEffect';

const SwipeableDivs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const divs = [
    {
      id: 1,
      backgroundColor: 'transparent',
      name: 'Андрей ШАБАНОВ',
      title: 'Повар, художник',
      course: 'Прошел курс “Основы трейдинга”',
      feedback: 'Ну, бесплатный курс по трейдинга... так, не плох. Но мне нужно больше, мне нужны детали, вот прям чувствую, что нужно больше глубины и практики. Мне нужны инсайды. Думаю, в платном курсе именно это и будет! 💪💰',
    },
    {
      id: 2,
      backgroundColor: 'transparent',
      name: 'Андрей ШАБАНОВ',
      title: 'Повар, художник',
      course: 'Прошел курс “Основы трейдинга”',
      feedback: 'Ну, бесплатный курс по трейдинга... так, не плох. Но мне нужно больше, мне нужны детали, вот прям чувствую, что нужно больше глубины и практики. Мне нужны инсайды. Думаю, в платном курсе именно это и будет! 💪💰',
    },
    {
      id: 3,
      backgroundColor: 'transparent',
      name: 'Андрей ШАБАНОВ',
      title: 'Повар, художник',
      course: 'Прошел курс “Основы трейдинга”',
      feedback: 'Ну, бесплатный курс по трейдинга... так, не плох. Но мне нужно больше, мне нужны детали, вот прям чувствую, что нужно больше глубины и практики. Мне нужны инсайды. Думаю, в платном курсе именно это и будет! 💪💰',
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
    <h1 className='main-heading' id="reviews">      Реальные истории успеха: <span className='main-heading-span'> Отзывы о наших курсах </span></h1>
    <p className='main-paragraph'>  Каждый отзыв для нас - не просто слова на экране, это история человека, который прошел путь обучения вместе с нами. Мы гордимся каждым успешным шагом наших учеников и благодарны за доверие, которое они оказывают, делясь своим опытом и впечатлениями</p>

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
              <button className="feedback-button-swd">Оставить отзыв</button>
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

export default withScrollEffect (SwipeableDivs);
