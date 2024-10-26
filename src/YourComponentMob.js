import React from 'react';
import './YourComponentMob.css'; // Import the CSS file
import { useTranslation } from 'react-i18next';
import withScrollEffect from './WithScrollEffect';

const YourComponentMob = () => {
  const { t } = useTranslation();

  return (
    <div className="your-component-rvwmb">
      <h1 className="heading-rvwmb">{t('main.resourceWhere')}</h1>
      <h2 className="main-text-rvwmb">
        {t('main.everyone')} {t('main.willAchieve')} {t('main.result')}
      </h2>

      <div className="card-container-rvwmb">
        <div className="card-rvwmb bg-item-1-mob">
          <h3>{t('main.desire')}</h3>
          <p>{t('main.desireText')}</p>
        </div>
        <div className="card-rvwmb bg-item-2-mob">
          <h3>{t('main.learning')}</h3>
          <p>{t('main.learningText')}</p>
        </div>
        <div className="card-rvwmb bg-item-3-mob">
          <h3>{t('main.practice')}</h3>
          <p>{t('main.practiceText')}</p>
        </div>
        <div className="card-rvwmb bg-item-4-mob">
          <h3>{t('main.professionalism')}</h3>
          <p>{t('main.professionalismText')}</p>
        </div>
        <div className="card-rvwmb bg-item-5-mob">
          <h3>{t('main.independence')}</h3>
          <p>{t('main.independenceText')}</p>
        </div>
      </div>
    </div>
  );
};

export default withScrollEffect(YourComponentMob);
