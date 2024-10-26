import React from 'react';
import './CurrentStudyMob.css'; // New CSS file for mobile version
import threeStars from './assets/three-stars.svg';
import durationIcon from './assets/durationIcon.svg';
import knowledgeIcon from './assets/knowledgeIcon.svg';
import skillsIcon from './assets/skillsIcon.svg';
import withScrollEffect from './WithScrollEffect';

const CurrentStudyMob = () => {
  return (
    <>
      <h1 className='main-heading-mob' style={{marginTop: '50px'}}>
        ОБУЧЕНИЕ <span className='main-heading-span-mob'>на данном этапе</span>
      </h1>

      <div className="current-study-container-mob">
        <div className="study-info-block-mob">
          <p className='study-paragraph-mob'>
            Курс "Основы трейдинга" - это идеальное введение в захватывающий мир финансовых рынков.
            Мы предлагаем обширный обзор основных концепций, терминов и инструментов, необходимых для успешного старта вашего пути в трейдинге.
          </p>
          <p className='study-paragraph-mob'>
            В рамках курса вы изучите основы анализа рынка, стратегии управления рисками и методы управления капиталом.
            Мы также предоставим вам практические инструменты и советы, чтобы вы могли применять свои знания на практике.
            Наша цель - помочь вам освоить основы трейдинга и стать уверенным и успешным трейдером.
          </p>
          <p className='study-paragraph-mob'>
            В конечном итоге, этот курс станет вашим верным спутником на пути к финансовому успеху. 
            После завершения курса вы будете готовы к самостоятельной торговле и сможете принимать информированные решения.
          </p>

          <div className="course-details-mob">
            <div className="course-detail-item-mob">
              <img src={durationIcon} alt="Duration" className="detail-icon-mob" />
              <span className="detail-text-mob">Длительность</span>
              <span className="detail-value-mob">~2 часа</span>
            </div>
            <div className="course-detail-item-mob">
              <img src={knowledgeIcon} alt="Знания" className="detail-icon-mob" />
              <span className="detail-text-mob">Знания</span>
              <span className="detail-value-mob"><img width="100px" src={threeStars} alt="Знания" /></span>
            </div>
            <div className="course-detail-item-mob">
              <img src={skillsIcon} alt="Навыки" className="detail-icon-mob" />
              <span className="detail-text-mob">Навыки для торговли</span>
              <span className="detail-value-mob"><img  width="100px" src={threeStars} alt="Навыки" /></span>
            </div>
          </div>

         
        </div>
      </div>
    </>
  );
};

export default withScrollEffect (CurrentStudyMob);
