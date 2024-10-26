import React from 'react';
import './YourComponentMob.css'; // Import the CSS file
import withScrollEffect from './WithScrollEffect';

const YourComponentMob = () => {
  return (
    <div className="your-component-rvwmb">
      <h1 className="heading-rvwmb">ресурс, где</h1>
      <h2 className="main-text-rvwmb">каждый сделает РЕЗУЛЬТАТ</h2>

      <div className="card-container-rvwmb">
        <div className="card-rvwmb bg-item-1-mob">
          <h3>Желание</h3>
          <p>если ты читаешь это, значит ты уже на верном пути, и можешь приступать к рекомендации следующего пункта, ведь Желание уже привело тебя сюда</p>
        </div>
        <div className="card-rvwmb bg-item-2-mob">
          <h3>Обучение</h3>
          <p>никаких специальных знаний и навыков не требуется, первый курс совершенно бесплатный, но даст всю необходимую базу для старта, главное начать</p>
        </div>
        <div className="card-rvwmb bg-item-3-mob">
          <h3>Практика</h3>
          <p>пройдя первый курс, вы получите четкую технику безопасности для своих сбережений, а дальше - вперед к практике и получению опыта</p>
        </div>
        <div className="card-rvwmb bg-item-4-mob">
          <h3>Профессионализм</h3>
          <p>стать профессионалом тебе поможет твой опыт, и единственным критерием твоего профессионализма будет твой доход</p>
        </div>
        <div className="card-rvwmb bg-item-5-mob">
          <h3>Независимость</h3>
          <p>состояние, когда личные доходы покрывают все расходы, обеспечивая свободу выбора и возможность реализовывать свои жизненные цели</p>
        </div>
      </div>
    </div>
  );
};

export default withScrollEffect (YourComponentMob);
