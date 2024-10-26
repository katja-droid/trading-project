import React from 'react';
import './CurrentStudy.css';
import studyImage from './assets/current-study-image.png'; // Adjust the path to your image file
import threeStars from './assets/three-stars.svg'; // Adjust the path to your image file
import durationIcon from './assets/durationIcon.svg'; // Import the duration icon
import knowledgeIcon from './assets/knowledgeIcon.svg'; // Import the knowledge icon
import skillsIcon from './assets/skillsIcon.svg'; // Import the skills icon
import GradientButton from './GradientButton'; // Ensure you import your GradientButton
import withScrollEffect from './WithScrollEffect';

const CurrentStudy = () => {
  return (
    <>
     
    <h1 className='main-heading' style={{ marginBottom: '50px'}}>ОБУЧЕНИе<span className='main-heading-span'> на данном этапе </span></h1>
 
    <div className="current-study-container-cs">
      <img src={studyImage} alt="Current Study" className="study-image-cs" />
      <div className="study-info-block-cs">
        <p className='study-paragraph-cs'>
          Курс "Основы трейдинга" - это идеальное введение в захватывающий мир финансовых рынков. 
          Мы предлагаем обширный обзор основных концепций, терминов и инструментов, необходимых для успешного старта вашего пути в трейдинге.
        </p>
        <p className='study-paragraph-cs'>
          В рамках курса вы изучите основы анализа рынка, стратегии управления рисками и методы управления капиталом. 
          Мы также предоставим вам практические инструменты и советы, чтобы вы могли применить свои знания на практике и принимать информированные решения при торговле на бирже. 
          Наша цель - помочь вам освоить основы трейдинга и стать уверенным и успешным трейдером.
        </p>
        <p className='study-paragraph-cs'>
          В конечном итоге, этот курс не только представляет собой введение в мир трейдинга, но и станет вашим верным спутником на пути к финансовому успеху. 
          Мы уверены, что после завершения курса вы будете готовы к самостоятельной торговле на бирже и сможете принимать информированные решения, чтобы достичь ваших финансовых целей.
        </p>
        <div className="course-details-cs">
          <div className="course-detail-item-cs">
            <img src={durationIcon} alt="Duration" className="detail-icon-cs" />
            <span className="detail-text-cs">Длительность</span>
            <span className="detail-value-cs">~2 часа</span>
          </div>
          <div className="course-detail-item-cs">
            <img src={knowledgeIcon} alt="Знания" className="detail-icon-cs" />
            <span className="detail-text-cs">Знания</span>
            <span className="detail-value-cs"><img src={threeStars} alt="Знания" /></span>
          </div>
          <div className="course-detail-item-cs">
            <img src={skillsIcon} alt="Навыки" className="detail-icon-cs" />
            <span className="detail-text-cs">Навыки для торговли</span>
            <span className="detail-value-cs"><img src={threeStars} alt="Навыки" /></span>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default withScrollEffect (CurrentStudy);
