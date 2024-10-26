import React from 'react';
import './RegistrationBenefits.css';
import checkmarkIcon from './assets/checkmark.svg'; // Adjust path to your SVG file
import withScrollEffect from './WithScrollEffect';

const RegistrationBenefits = () => {
  const benefits = [
    "Выберите один из онлайн-курсов по торговле на бирже, который соответствует вашим знаниям и целям",
    "Зарегистрируйтесь за 2 минуты, используя нашего Telegram-бота. Это быстро, удобно и безопасно",
    "После регистрации вы сможете согласовать детали вашего обучения с нашим администратором",
    "Как только все детали уточнены, доступ к выбранному курсу будет Вам предоставлен мгновенно"
  ];

  return (
    <div className="registration-benefits-container">
      {benefits.map((benefit, index) => (
        <div key={index} className="benefit-item">
          <img src={checkmarkIcon} alt="Checkmark" className="checkmark-icon" />
          <p className="benefit-text">{benefit}</p>
        </div>
      ))}
    </div>
  );
};

export default withScrollEffect (RegistrationBenefits);
