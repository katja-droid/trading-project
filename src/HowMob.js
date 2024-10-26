import React from 'react';
import PropTypes from 'prop-types';
import './HowMob.css';

// Import image for the component
import howImage from './assets/how-image.png'; // Update path if necessary
import withScrollEffect from './WithScrollEffect';

const HowMob = ({ heading, text }) => {
    const paragraphs = [
        {
          title: "Курс “Новичок”",
          text: "Вы сможете открывать первые сделки на бирже и радоваться первой прибыли уже в первый месяц обучения."
        },
        {
          title: "Первая сделка",
          text: "Бесплатная помощь при первой сделке. Наш эксперт покажет, как имея знания, можно заработать на биржах."
        },
        {
          title: "Биржи всего мира",
          text: "Вы сможете торговать на всех самых популярных торговых площадках, таких как Forex и другие мировые биржи."
        },
        {
          title: "Повышение уровня",
          text: "После окончания обучения вас ждет курс повышения знаний, дающий безграничные навыки торговли на бирже."
        },
        {
          title: "Экспертная поддержка",
          text: "Онлайн сопровождение в процессе прохождения всего обучения. Помощь в любом вопросе по ходу курса."
        },
        {
          title: "Эксклюзивный доступ",
          text: "Лучшие выпускники будут приглашены на собеседование в нашу команду, получив шанс работать с ведущими специалистами."
        }
    ];

    return (
        <div className="howmob-container">
            {/* Heading */}
            <h1 className='main-heading-mob' id="aboutmb">КАК ПРОХОДИТ <span className='main-heading-span-mob'> ОБУЧЕНИЕ в TRADE BAZa</span></h1>
          <p className='main-paragraph-mob'>Особенности и преимущества прохождения курсов в Trade Baze, привилегии и гарантии,<br/>
          которые вы получите доверив нам свой самый ценный ресурс - время</p>

            {/* Image */}
            <img 
                src={howImage} 
                alt="How It Works" 
                className="howmob-image"
            />

            {/* Paragraphs */}
            <div className="howmob-paragraphs">
                {paragraphs.map((paragraph, index) => (
                    <div 
                        key={index} 
                        className={`howmob-paragraph howmob-paragraph-${index % 2 === 0 ? 'even' : 'odd'}`}
                    >
                        <h4 className="howmob-paragraph-title">{paragraph.title}</h4>
                        <p className="howmob-paragraph-text">{paragraph.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

HowMob.propTypes = {
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default withScrollEffect (HowMob);
