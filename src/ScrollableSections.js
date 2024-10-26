import React, { useRef, useEffect } from 'react';
import './ScrollableSections.css';

// Import the images as variables
import trainer1 from './assets/trainer1.png';
import trainer2 from './assets/trainer2.png';
import trainer3 from './assets/trainer3.png';
import withScrollEffect from './WithScrollEffect';

const ScrollableSections = () => {
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
      name: 'ДАНИЛА',
      lastName: 'Анапов',
      title: 'Специалист по продажам',
      text: 'В трейдинге с 2019 года. Соавтор курсов TradeBaze. Эксперт на рынке криптовалют, также торгует американский рынок.',
    },
    {
      id: 3,
      photo: trainer3,
      name: 'ДАНИЛА',
      lastName: 'Анапов',
      title: 'Специалист по продажам',
      text: 'В трейдинге с 2019 года. Соавтор курсов TradeBaze. Эксперт на рынке криптовалют, также торгует американский рынок.',
    },
  ];

  const scrollRef = useRef(null);

  // Center the second section by default
  useEffect(() => {
    if (scrollRef.current) {
      const sectionWidth = 265; // section width
      const gap = 20; // the gap between sections (10px margin on both sides)
      scrollRef.current.scrollLeft = (sectionWidth + gap) * 1; // scroll to second section
    }
  }, []);

  return (
    <>
      <h1 className='main-heading-mob' style={{   marginTop: '50px'}} >
      Наша  <span className='main-heading-span-mob'>команда профессионалов</span>
      </h1>
      <p className='main-paragraph-mob'>
      Наша команда - это коллектив профессионалов, увлечённых трейдингом и финансовыми рынками. Мы собрались, чтобы поделиться нашими знаниями с теми, кто стремится освоить мир трейдинга
      </p>
    <div className="scroll-container" ref={scrollRef}>
      {trainers.map((trainer) => (
        <div className="section" key={trainer.id}>
          <div className="photo-badge">
            <img src={trainer.photo} alt={trainer.name} className="photo" />
            <div className="badge">{trainer.name} {trainer.lastName}</div>
          </div>
          <h2>{trainer.title}</h2>
          <p>{trainer.text}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default withScrollEffect (ScrollableSections);
