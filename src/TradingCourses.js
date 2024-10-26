import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './TradingCourses.css';

// Import images for the courses
import courseImage1 from './assets/courseImage1.png';
import courseImage2 from './assets/courseImage2.png';
import courseImage3 from './assets/courseImage3.png';
import durationIcon from './assets/durationIcon.svg';
import knowledgeIcon from './assets/knowledgeIcon.svg';
import skillsIcon from './assets/skillsIcon.svg';
import threeStars from './assets/three-stars.svg';
import threeFiveStars from './assets/three-five-stars.svg';
import fiveStars from './assets/five-stars.svg';
import fourStars from './assets/four-stars.svg';
import lineBright from './assets/line_bright.svg';
import lineFaded from './assets/line_faded.png';
import GradientButton from './GradientButton';
import withScrollEffect from './WithScrollEffect';

const coursesData = [
  {
    price: "Бесплатно",
    title: "Основы трейдинга",
    description: "Бесплатный вводный курс для тех, кто уже хочет понять такое трейдинг и биржа",
    details: "Идеальное начало вашего путешествия в мир трейдинга. Этот бесплатный курс представляет вам основные концепции, термины и инструменты, необходимые для успешного начала трейдинга",
    duration: "~2 часа",
    knowledgeStars: threeStars,
    skillsStars: threeStars,
    image: courseImage1,
  },
  {
    price: "9,980 руб.",
    title: "Технический анализ",
    description: "Платный продвинутый курс для тех, кто прошел первый курс и готов идти дальше",
    details: "Глубже погрузитесь в мир трейдинга с нашим продвинутым курсом. Узнайте о техническом анализе, формировании стратегий и практических подходах к трейдингу на рынках",
    duration: "~6 часов",
    knowledgeStars: threeFiveStars,
    skillsStars: fourStars,
    image: courseImage2,
  },
  {
    price: "",
    title: "Практика",
    description: "Эксклюзивная возможность пройти практику в офисе команды создателей",
    details: "10 дней работы в паре с наставником в нашем офисе в башне Москва-сити. Кандидаты будут отобраны в течении 6 месяцев с момента запуска второго курса",
    duration: "~80 часов",
    knowledgeStars: fiveStars,
    skillsStars: fiveStars,
    image: courseImage3,
  },
];

const TradingCourses = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      const courseWidth = 320;
      const gap = 20;
      scrollRef.current.scrollLeft = (courseWidth + gap) * activeIndex;
    }
  }, [activeIndex]);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX);
  };

  const handleTouchMove = (e) => {
    if (scrollRef.current) {
      const moveX = e.touches[0].pageX - startX;
      scrollRef.current.scrollLeft -= moveX;
      setStartX(e.touches[0].pageX);
    }
  };

  const handleTouchEnd = () => {
    if (scrollRef.current) {
      const courseWidth = 320;
      const gap = 20;
      const scrollPosition = scrollRef.current.scrollLeft;
      const currentIndex = Math.round(scrollPosition / (courseWidth + gap));
      setActiveIndex(currentIndex);
    }
  };

  const handleLineClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="trading-course-container-mob">
      <h1 className="main-heading-mob">
        курсы, с которых начинается твоя <span className="main-heading-span-mob"> новая жизнь</span>
      </h1>
      
      <div className="line-indicators-courses-mob">
        {coursesData.map((_, index) => (
          <img
            key={index}
            src={activeIndex === index ? lineBright : lineFaded}
            alt={activeIndex === index ? 'Bright line' : 'Faded line'}
            className="line-indicator-courses-mob"
            onClick={() => handleLineClick(index)}
          />
        ))}
      </div>
      
      <div
        className="scroll-container-courses-mob"
        ref={scrollRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ overflowX: 'scroll', display: 'flex' }}
      >
        {coursesData.map((course, index) => (
          <div key={index} className="trading-course-card-mob" style={{ opacity: activeIndex === index ? 1 : 0.35 }}>
            <div className="image-container-mob">
              <img src={course.image} alt={course.title} className="course-image-mob" />
              {course.price && (
                <div className={`price-badge-mob ${course.price === "Бесплатно" ? 'price-badge-free-mob' : 'price-badge-paid-mob'}`}>
                  {course.price}
                </div>
              )}
            </div>
            <div className="card-content-mob">
              <div className="course-title-mob">Курс: <span style={{color: '#8CC2E9'}}>{course.title}</span></div>
              <div className="course-description-mob">{course.description}</div>
              <span className="course-details-mob-2">{course.details}</span>
              <div className="course-details-mob">
                <div className="course-detail-item-mob">
                  <img src={durationIcon} alt="Duration" className="detail-icon-mob" />
                  <span className="detail-text-mob">Длительность</span>
                  <span className="detail-value-mob">{course.duration}</span>
                </div>
                <div className="course-detail-item-mob">
                  <img src={knowledgeIcon} alt="Знания" className="detail-icon-mob" />
                  <span className="detail-text-mob">Знания</span>
                  <img src={course.knowledgeStars} alt="Rating" className="stars-icon-mob" />
                </div>
                <div className="course-detail-item-mob">
                  <img src={skillsIcon} alt="Навыки" className="detail-icon-mob" />
                  <span className="detail-text-mob">Навыки</span>
                  <img src={course.skillsStars} alt="Rating" className="stars-icon-mob" />
                </div>
              </div>
              {activeIndex === index && (
                <div className="course-buttons-mob">
                  <Link to={`/product/${index}`} style={{textDecoration: 'none'}} className="more-btn-mob-2">Подробнее</Link>
                  <div style={{ position: 'relative', zIndex: 10, marginTop: '10px'}}>
                    <a href="https://t.me/your-telegram-link" target="_blank" rel="noopener noreferrer">
                      <GradientButton arrow={true} text="Записаться" height="51px" width="100%" fontSize="18px" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withScrollEffect (TradingCourses);
