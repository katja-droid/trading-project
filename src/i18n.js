import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const resources = {
    en: {
      translation: {
        navbar: {
          about: "About Training",
          courses: "Courses",
          reviews: "Reviews",
          team: "Our Team",
          faq: "FAQ",
        },
        hero: {
            title: "Trading on the Stock Market",
            subtitle: "Online trading course for modern individuals: from basic financial literacy to your own strategy",
            applyButton: "Apply Now",
            chooseCourseButton: "Choose Course",
            completedCourses: "+1.32K Completed Courses",
            description: "Online trading course for modern individuals: from basic financial literacy to your own strategy"
          },
      },
    },
    ru: {
      translation: {
        navbar: {
          about: "Об обучении",
          courses: "Курсы",
          reviews: "Отзывы",
          team: "Наша команда",
          faq: "FAQ",
        },
        hero: {
            title: "Торговля на фондовом рынке",
            subtitle: "Онлайн-курс по торговле для современных людей: от базы финансовой грамотности до собственной стратегии",
            applyButton: "Оставить заявку",
            chooseCourseButton: "Выбрать курс",
            completedCourses: "+1,32К Прошли Курс",
            description: "Онлайн-курс по торговле для современных людей: от базы финансовой грамотности до собственной стратегии"
          },
      },
    },
  };
  

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: 'ru', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
