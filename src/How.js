import React from 'react';
import './How.css'; // Import the CSS file for styling
import bgArrows from './assets/bg_arrows.svg'; // Adjust path as necessary
import howImage from './assets/how-image.png'; // Adjust path as necessary
import withScrollEffect from './WithScrollEffect';

const How = () => {
  return (
    <>
          <h1 className='main-heading' id="about">КАК ПРОХОДИТ <span className='main-heading-span'> ОБУЧЕНИЕ в TRADE BAZa</span></h1>
          <p className='main-paragraph'>Особенности и преимущества прохождения курсов в Trade Baze, привилегии и гарантии,<br/>
          которые вы получите доверив нам свой самый ценный ресурс - время</p>
    <div className="grid-container-h">
      
      {/* First row: 3 columns */}
      <div className="grid-item-h card">
        <h4>Курс “Новичок”</h4>
        <p>Вы сможете открывать первые сделки на бирже и радоваться первой прибыли уже в первый месяц обучения 
        </p>
      </div>

      <div className="grid-item-h card">
        <h4>Первая сделка</h4>
        <p>Бесплатная помощь при первой сделке, наш эксперт покажет как имея знания, можно заработать на биржах</p>
      </div>

      <div className="grid-item-h card">
        <h4>Биржи всего мира</h4>
        <p>Вы сможете торговать на всех самых популярных торговых площадках, таких как Forex, Badoo, Tinder, Mamba</p>
      </div>

      {/* Second row: Full-height background section in the center column */}
      <div className="grid-item-h full-height-pic">
        <div className="full-width-section">
          <img src={howImage} alt="How" className="how-image" />
        </div>
      </div>

      {/* Third row: Первая сделка in the first column */}
      <div className="grid-item-h card">
        <h4>Повышение уровня</h4>
        <p>После окончании обучения, вас ждет курс повышения знаний, дающий безграничные навыки торговли на бирже</p>
      </div>

      <div className="grid-item-h card">
        <h4>Экспертная поддержка</h4>
        <p>Онлайн сопровождение в процессе прохождения всего обучения, помощь в любом вопросе по ходу курса</p>
      </div>

      <div className="grid-item-h card last-column">
        <h4>Эксклюзивный доступ</h4>
        <p>Лучший из лучших умов будет приглашен на собеседование в нашу команду</p>
      </div>
    </div>
    </>
  );
};

export default withScrollEffect (How);
