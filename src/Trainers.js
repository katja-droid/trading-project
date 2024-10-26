import React, { useState } from 'react';
import './Trainers.css';

// Import the images as variables
import trainer1 from './assets/trainer-1-2.png';
import trainer2 from './assets/trainer-2-2.png';
import trainer3 from './assets/trainer-3-2.png';
import withScrollEffect from './WithScrollEffect';

const Trainers = () => {
  const [selectedItem] = useState(1); // Keep the first trainer selected

  const trainers = [
    {
      id: 1,
      photo: trainer1,
      name: 'ДАНИЛА',
      lastName: 'Анапов',
      title: 'Специалист по продажам',
      description: 'В трейдинге с 2019 года. Соавтор курсов TradeBaze. Эксперт на рынке криптовалют, также торгует американский рынок.',
    },
    {
      id: 2,
      photo: trainer2,
      name: 'Сергей',
      lastName: 'СКОКОВ',
      title: 'Специалист по продажам',
      description: 'В трейдинге с 2019 года. Соавтор курсов TradeBaze. Эксперт на рынке криптовалют, также торгует американский рынок.',
    },
    {
      id: 3,
      photo: trainer3,
      name: 'Вера',
      lastName: 'АКУМОВА',
      title: 'Специалист по продажам',
      description: 'В трейдинге с 2019 года. Соавтор курсов TradeBaze. Эксперт на рынке криптовалют, также торгует американский рынок.',
    },
  ];

  return (
   
     <div className="grid-container" >
      {trainers.map((trainer) => (
        <div
          key={trainer.id}
          className={`grid-item ${selectedItem === trainer.id ? 'selected' : ''}`}
        >
          <div className="photo-wrapper">
            <img
              src={trainer.photo}
              alt={`Trainer ${trainer.id}`}
              className={`item-photo ${selectedItem === trainer.id ? 'selected-photo' : 'default-photo'}`}
            />
            {/* Always show the name badge */}
            <div className="badge">
              {trainer.name} {trainer.lastName}
            </div>
          </div>
          <div className={`item-info ${selectedItem === trainer.id ? 'default-info' : 'selected-info'}`}>
            {/* Show title and description only if selected */}
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

export default withScrollEffect (Trainers);
