import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Trainers.css';

// Import images
import trainer1 from './assets/trainer-1-2.png';
import trainer2 from './assets/trainer-2-2.png';
import trainer3 from './assets/trainer-3-2.png';
import trainer1Blur from './assets/photoblur1.png';
import trainer2Blur from './assets/photoblur2.png';
import trainer3Blur from './assets/photoblur3.png';
import withScrollEffect from './WithScrollEffect';

const Trainers = () => {
  const { t } = useTranslation();
  const [selectedItem, setSelectedItem] = useState(1); // Set the first trainer as default selected

  const trainers = [
    {
      id: 1,
      photo: trainer1,
      photoBlur: trainer1Blur,
      name: t('trainers.trainer1.name'),
      lastName: t('trainers.trainer1.lastName'),
      title: t('trainers.trainer1.title'),
      description: t('trainers.trainer1.description'),
    },
    {
      id: 2,
      photo: trainer2,
      photoBlur: trainer2Blur,
      name: t('trainers.trainer2.name'),
      lastName: t('trainers.trainer2.lastName'),
      title: t('trainers.trainer2.title'),
      description: t('trainers.trainer2.description'),
    },
    {
      id: 3,
      photo: trainer3,
      photoBlur: trainer3Blur,
      name: t('trainers.trainer3.name'),
      lastName: t('trainers.trainer3.lastName'),
      title: t('trainers.trainer3.title'),
      description: t('trainers.trainer3.description'),
    },
  ];

  const handleMouseEnter = (id) => {
    setSelectedItem(id);
  };

  const handleClick = (id) => {
    setSelectedItem(id);
  };

  return (
    <div className="grid-container">
      {trainers.map((trainer) => (
        <div
          key={trainer.id}
          className={`grid-item ${selectedItem === trainer.id ? 'selected' : ''}`}
          onMouseEnter={() => handleMouseEnter(trainer.id)}
          onClick={() => handleClick(trainer.id)}
        >
          <div className="photo-wrapper">
            <img
              src={selectedItem === trainer.id ? trainer.photo : trainer.photoBlur}
              alt={`Trainer ${trainer.id}`}
              className={`item-photo ${selectedItem === trainer.id ? 'selected-photo' : 'default-photo'}`}
            />
            <div className="badge">
              {trainer.name} {trainer.lastName}
            </div>
          </div>
          <div className={`item-info ${selectedItem === trainer.id ? 'default-info' : 'selected-info'}`}>
            {selectedItem === trainer.id && (
              <div className="info-container">
                <div className="info-text">
                  <p className="trainer-role">{trainer.title}</p>
                  <p className="trainer-description">{trainer.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default withScrollEffect(Trainers);
