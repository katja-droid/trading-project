import React, { useState } from 'react';
import './Accordion.css';
import arrowImage from './assets/arrow-image.svg';
import bgImage1 from './assets/accordion_bg_1.png';
import bgImage2 from './assets/accordion_bg_2.png';
import bgImage3 from './assets/accordion_bg_3.png';
import bgImage4 from './assets/accordion_bg_4.png';
import bgImage5 from './assets/accordion_bg_5.png';
import bgImage6 from './assets/accordion_bg_6.png';
import bgImage7 from './assets/accordion_bg_7.png';
import bgImage8 from './assets/accordion_bg_8.png';
import bgImage9 from './assets/accordion_bg_9.png';
import withScrollEffect from './WithScrollEffect';


const AccordionItem = ({ title, additionalText, bgImage }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <> 
      
 
        <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
            <div
                className="accordion-header"
                onClick={handleToggle}
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <h3>{title}</h3>
                <img
                    src={arrowImage}
                    alt="arrow"
                    className={`accordion-arrow ${isOpen ? 'flipped' : ''}`}
                />
            </div>
            {isOpen && (
                <div className="accordion-content">
                    <p>{additionalText}</p>
                </div>
            )}
        </div>
        </>
    );
};

const Accordion = () => {
    const commonText =
        'Отличие платного курса от бесплатного заключается в глубине материала и уровне обучения. В платном курсе вы получите более подробные уроки, дополнительные материалы, возможность индивидуальной консультации и, возможно, доступ к эксклюзивным ресурсам, которые не доступны в бесплатной версии.';

    const items = [
        { title: 'Сколько стоит обучение в Trade Baza?', additionalText: commonText, bgImage: bgImage1 },
        { title: 'Какой уровень подготовки необходим для прохождения курса?', additionalText: commonText, bgImage: bgImage2 },
        { title: 'В чем отличие платного курса от бесплатного?', additionalText: commonText, bgImage: bgImage3 },
        { title: 'Есть ли гарантия получения результатов прохождения курса?', additionalText: commonText, bgImage: bgImage4 },
        { title: 'Какие материалы и ресурсы доступны участникам курса?', additionalText: commonText, bgImage: bgImage5 },
        { title: 'Есть ли возможность задавать вопросы во время обучения?', additionalText: commonText, bgImage: bgImage6 },
        { title: 'Сколько времени занимает прохождение каждого курса?', additionalText: commonText, bgImage: bgImage7 },
        { title: 'Предоставляется ли сертификат или диплом по окончании курса?', additionalText: commonText, bgImage: bgImage8 },
        { title: 'Есть ли бонусы или материалы для участников курса?', additionalText: commonText, bgImage: bgImage9 }
    ];

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <AccordionItem key={index} {...item} />
            ))}
        </div>
    );
};

export default withScrollEffect (Accordion);
