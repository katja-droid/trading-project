import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './CourseCards.css';

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
    id: 1, // Add an ID for navigation
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
    id: 2, // Add an ID for navigation
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
    id: 3, // Add an ID for navigation
  },
];

const CourseCards = () => {
  return (
    <div className="course-container">
      <h1 className='main-heading' id="courses" style={{ marginBottom: '50px' }}> курсы, с которых начинается твоя  <span className='main-heading-span'> новая жизнь</span></h1>
        
      <div className="course-grid">
        {coursesData.map((course, index) => (
          <div key={index} className="course-card" style={{ backgroundColor: '#1C2532' }}>
            <div className="image-container">
              <img src={course.image} alt={course.title} className="course-image" />
              {course.price && (
                <div className={`price-badge ${course.price === "Бесплатно" ? 'free' : 'paid'}`}>
                  {course.price}
                </div>
              )}
            </div>
            <div className="card-content">
              <div className="course-title">Курс: <span style={{ color: '#8CC2E9' }}>{course.title}</span></div>
              <div className="course-description">{course.description}</div>
              <span className="course-details">{course.details}</span>
              <div className="course-details">
                <div className="course-detail-item">
                  <img src={durationIcon} alt="Duration" className="detail-icon" />
                  <span className="detail-text">Длительность</span>
                  <span className="detail-value">{course.duration}</span>
                </div>
                <div className="course-detail-item">
                  <img src={knowledgeIcon} alt="Знания" className="detail-icon" />
                  <span className="detail-text">Знания</span>
                  <img src={course.knowledgeStars} alt="Rating" className="stars-icon" />
                </div>
                <div className="course-detail-item">
                  <img src={skillsIcon} alt="Навыки" className="detail-icon" />
                  <span className="detail-text">Навыки</span>
                  <img src={course.skillsStars} alt="Rating" className="stars-icon" />
                </div>
              </div>
              <div className="course-buttons">
                <Link to={`/product/${course.id}`} style={{textDecoration: 'none'}} className="more-btn-2">Подробнее</Link> {/* Use Link for navigation */}
                <a href="https://t.me/your_telegram_chat_link" target="_blank" rel="noopener noreferrer">
                  <GradientButton arrow={true} text="Записаться" height="56px" width="195px" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withScrollEffect (CourseCards);
