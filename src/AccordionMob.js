// AccordionMob.js
import React, { useState } from 'react';
import './AccordionMob.css';
import arrowImage from './assets/arrow-image.svg';
import withScrollEffect from './WithScrollEffect';
import { useTranslation } from 'react-i18next';

const AccordionItemMob = ({ title, additionalText }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`accordion-item-mob ${isOpen ? 'open-mob' : ''}`}>
            <div className="accordion-header-mob" onClick={handleToggle}>
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
    const { t } = useTranslation();

    const items = [
        { title: t('accordion.items.0.title'), additionalText: t('accordion.items.0.additionalText') },
        { title: t('accordion.items.1.title'), additionalText: t('accordion.items.1.additionalText') },
        { title: t('accordion.items.2.title'), additionalText: t('accordion.items.2.additionalText') },
        { title: t('accordion.items.3.title'), additionalText: t('accordion.items.3.additionalText') },
        { title: t('accordion.items.4.title'), additionalText: t('accordion.items.4.additionalText') },
        { title: t('accordion.items.5.title'), additionalText: t('accordion.items.5.additionalText') },
        { title: t('accordion.items.6.title'), additionalText: t('accordion.items.6.additionalText') },
        { title: t('accordion.items.7.title'), additionalText: t('accordion.items.7.additionalText') },
        { title: t('accordion.items.8.title'), additionalText: t('accordion.items.8.additionalText') }
    ];

    return (
        <div className="accordion-mob">
            {items.map((item, index) => (
                <AccordionItemMob key={index} {...item} />
            ))}
        </div>
    );
};

export default withScrollEffect(AccordionMob);
