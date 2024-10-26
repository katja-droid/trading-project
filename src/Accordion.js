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
import { useTranslation } from 'react-i18next';

const AccordionItem = ({ title, additionalText, bgImage }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
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
    );
};

const Accordion = () => {
    const { t } = useTranslation();

    const items = [
        { title: t('accordion.items.0.title'), additionalText: t('accordion.items.0.additionalText'), bgImage: bgImage1 },
        { title: t('accordion.items.1.title'), additionalText: t('accordion.items.1.additionalText'), bgImage: bgImage2 },
        { title: t('accordion.items.2.title'), additionalText: t('accordion.items.2.additionalText'), bgImage: bgImage3 },
        { title: t('accordion.items.3.title'), additionalText: t('accordion.items.3.additionalText'), bgImage: bgImage4 },
        { title: t('accordion.items.4.title'), additionalText: t('accordion.items.4.additionalText'), bgImage: bgImage5 },
        { title: t('accordion.items.5.title'), additionalText: t('accordion.items.5.additionalText'), bgImage: bgImage6 },
        { title: t('accordion.items.6.title'), additionalText: t('accordion.items.6.additionalText'), bgImage: bgImage7 },
        { title: t('accordion.items.7.title'), additionalText: t('accordion.items.7.additionalText'), bgImage: bgImage8 },
        { title: t('accordion.items.8.title'), additionalText: t('accordion.items.8.additionalText'), bgImage: bgImage9 }
    ];

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <AccordionItem key={index} {...item} />
            ))}
        </div>
    );
};

export default withScrollEffect(Accordion);
