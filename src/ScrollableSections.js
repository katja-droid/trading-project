import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation for translations
import './ScrollableSections.css';

// Import the images as variables
import trainer1 from './assets/trainer1.png';
import trainer2 from './assets/trainer2.png';
import trainer3 from './assets/trainer3.png';
import withScrollEffect from './WithScrollEffect';

const ScrollableSections = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  const trainers = [
    {
      id: 1,
      photo: trainer1,
      name: t('scrollableSections.trainer1.name'),
      lastName: t('scrollableSections.trainer1.lastName'),
      title: t('scrollableSections.trainer1.title'),
      text: t('scrollableSections.trainer1.text'),
    },
    {
      id: 2,
      photo: trainer2,
      name: t('scrollableSections.trainer2.name'),
      lastName: t('scrollableSections.trainer2.lastName'),
      title: t('scrollableSections.trainer2.title'),
      text: t('scrollableSections.trainer2.text'),
    },
    {
      id: 3,
      photo: trainer3,
      name: t('scrollableSections.trainer3.name'),
      lastName: t('scrollableSections.trainer3.lastName'),
      title: t('scrollableSections.trainer3.title'),
      text: t('scrollableSections.trainer3.text'),
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
      <h1 className='main-heading-mob' style={{ marginTop: '50px' }}>
      {t('homePage.teamHeading')} <span className='main-heading-span-mob'>{t('homePage.teamSubheading')}</span>
      </h1>
      <p className='main-paragraph-mob'>
        {t('scrollableSections.paragraph')}
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

export default withScrollEffect(ScrollableSections);
