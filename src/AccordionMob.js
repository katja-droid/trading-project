// AccordionMob.js
import React, { useState } from 'react';
import './AccordionMob.css';
import arrowImage from './assets/arrow-image.svg';
import withScrollEffect from './WithScrollEffect';

const AccordionItemMob = ({ title, additionalText }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`accordion-item-mob ${isOpen ? 'open-mob' : ''}`}>
            <div
                className="accordion-header-mob"
                onClick={handleToggle}
            >
                <h3>{title}</h3>
                <img
                    src={arrowImage}
                    alt="arrow"
                    className={`accordion-arrow-mob ${isOpen ? 'flipped-mob' : ''}`}
                />
            </div>
            {isOpen && (
                <div className="accordion-content-mob">
                    <p>{additionalText}</p>
                </div>
            )}
        </div>
    );
};

const AccordionMob = () => {
    const commonText =
        'Отличие платного курса от бесплатного заключается в глубине материала и уровне обучения. В платном курсе вы получите более подробные уроки, дополнительные материалы, возможность индивидуальной консультации и, возможно, доступ к эксклюзивным ресурсам, которые не доступны в бесплатной версии.';

    const items = [
        { title: 'Сколько стоит обучение в Trade Baza?', additionalText: commonText },
        { title: 'Какой уровень подготовки необходим для прохождения курса?', additionalText: commonText },
        { title: 'В чем отличие платного курса от бесплатного?', additionalText: commonText },
        { title: 'Есть ли гарантия получения результатов прохождения курса?', additionalText: commonText },
        { title: 'Какие материалы и ресурсы доступны участникам курса?', additionalText: commonText },
        { title: 'Есть ли возможность задавать вопросы во время обучения?', additionalText: commonText },
        { title: 'Сколько времени занимает прохождение каждого курса?', additionalText: commonText },
        { title: 'Предоставляется ли сертификат или диплом по окончании курса?', additionalText: commonText },
        { title: 'Есть ли бонусы или материалы для участников курса?', additionalText: commonText }
    ];

    return (
        <div className="accordion-mob">
            {items.map((item, index) => (
                <AccordionItemMob key={index} {...item} />
            ))}
        </div>
    );
};

export default withScrollEffect (AccordionMob);
