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
      
          
       
          
            "hero": {
              "heading": "Trading",
              "subheading": "on the stock market",
              "description": "An online trading course for modern individuals: from financial literacy basicsto your own strategy",
              "apply": "Apply Now",
              "chooseCourse": "Choose a Course",
              "graphAlt": "Graphs",
              "imageAlt1": "Profile Image 1",
              "imageAlt2": "Profile Image 2",
              "imageAlt3": "Profile Image 3",
              "imageAlt4": "Profile Image 4",
              "courseProgress": "+1.32K Completed the Course"
            },
            "advantages": [
              {
                "title": "Classic and Stability",
                "description": "The first stock exchange in the world was founded in 1585. A unique way of earning, proven for over 4 centuries.",
                "imageAlt": "Classic and Stability"
              },
              {
                "title": "Invaluable Experience",
                "description": "Studying asset behavior in the global market leads to the development of critical thinking, understanding of economic processes, memory enhancement, and more.",
                "imageAlt": "Invaluable Experience"
              },
              {
                "title": "Opportunity and Accessibility",
                "description": "Thanks to modern tools, anyone can become a participant in global trading - from a retiree in Siberia to a student in Rostov.",
                "imageAlt": "Opportunity and Accessibility"
              }
            ],
            
              "how": {
                "titlePart1": "HOW TRAINING IN",
                "titlePart2": "TRADE BAZA WORKS",
                "description": "Features and benefits of taking courses at Trade Baza, privileges and guarantees you receive by trusting us with your most valuable resource - time.",
                "courses": {
                
                  "beginner": {
                    "title": "Beginner Course",
                    "description": "You will be able to open your first trades on the exchange and enjoy your first profit within the first month of training."
                  }
                },
                "firstDeal": {
                  "title": "First Deal",
                  "description": "Free assistance with your first deal; our expert will show you how to earn on exchanges using your knowledge."
                },
                "globalExchanges": {
                  "title": "Exchanges Worldwide",
                  "description": "You will be able to trade on all the most popular trading platforms, such as Forex, Badoo, Tinder, and Mamba."
                },
                "levelUp": {
                  "title": "Level Up",
                  "description": "After completing the training, you will have a knowledge enhancement course that provides unlimited trading skills."
                },
                "expertSupport": {
                  "title": "Expert Support",
                  "description": "Online support throughout the entire training process, assistance with any questions you may have during the course."
                },
                "exclusiveAccess": {
                  "title": "Exclusive Access",
                  "description": "The best of the best minds will be invited for an interview to join our team."
                },
                "imageAlt": "How training in Trade Baza works"
              },
              
             "main": {
  "resourceWhere": "the resource where",
  "everyone": "everyone",
  "willAchieve": "achieves",
  "result": "Result",
  "desire": "Desire",
  "desireText": "if you are reading this, it means you are already on the right path and can move on to the recommendation of the next step, as Desire has already led you here",
  "learning": "Learning",
  "learningText": "no special knowledge or skills are required; the first course is completely free but provides all the essential basics for getting started—just begin",
  "practice": "Practice",
  "practiceText": "after completing the first course, you will have clear safety techniques for your savings, and then—forward to practice and gaining experience",
  "professionalism": "Professionalism",
  "professionalismText": "your experience will help you become a professional, and the only criterion of your professionalism will be your income",
  "independence": "Independence",
  "independenceText": "a state when personal income covers all expenses, providing the freedom of choice and the ability to pursue your life goals"
},
"course": {
  "alsoInterestingTitle": "You may also find",
  "alsoInterestingSpan": "interesting",
  "mainHeading": "Courses that start your",
  "newLife": "new life",
  "titlePrefix": "Course:",
  "duration": "Duration",
  "knowledge": "Knowledge",
  "skills": "Skills",
  "moreDetails": "Learn More",
  "apply": "Apply",
  "coursesData": [
      {
        "price": "Free",
        "title": "Trading Basics",
        "description": "A free introductory course for those interested in understanding trading and the stock exchange.",
        "details": "An ideal start to your journey in trading. This free course introduces the main concepts, terms, and tools needed to begin trading successfully.",
        "duration": "~2 hours",
        "knowledgeStars": "threeStars",
        "skillsStars": "threeStars"
      },
      {
        "price": "9,980 RUB",
        "title": "Technical Analysis",
        "description": "An advanced paid course for those who have completed the first course and are ready to move on.",
        "details": "Dive deeper into the world of trading with our advanced course. Learn about technical analysis, strategy building, and practical approaches to market trading.",
        "duration": "~6 hours",
        "knowledgeStars": "threeFiveStars",
        "skillsStars": "fourStars"
      },
      {
        "price": "",
        "title": "Practice",
        "description": "An exclusive opportunity for hands-on practice in the creators' office.",
        "details": "10 days of working one-on-one with a mentor in our Moscow-City tower office. Candidates will be selected within 6 months of launching the second course.",
        "duration": "~80 hours",
        "knowledgeStars": "fiveStars",
        "skillsStars": "fiveStars"
      }]
},
"swipeableDivs": {
  "heading": "Real Success Stories:",
  "subHeading": "Reviews of Our Courses",
  "paragraph": "Every review for us is not just words on a screen; it's the story of a person who has walked the path of learning with us. We are proud of every successful step our students take and grateful for the trust they place in us by sharing their experiences and impressions.",
  "divs": [
    {
      "name": "Andrey SHABANOV",
      "title": "Cook, Artist",
      "course": "Completed the course 'Basics of Trading'",
      "feedback": "Well, the free trading course... is okay. But I need more; I need details, I feel that I need more depth and practice. I need insights. I think the paid course will have just that! 💪💰"
    },
    {
      "name": "Andrey SHABANOV",
      "title": "Cook, Artist",
      "course": "Completed the course 'Basics of Trading'",
      "feedback": "Well, the free trading course... is okay. But I need more; I need details, I feel that I need more depth and practice. I need insights. I think the paid course will have just that! 💪💰"
    },
    {
      "name": "Andrey SHABANOV",
      "title": "Cook, Artist",
      "course": "Completed the course 'Basics of Trading'",
      "feedback": "Well, the free trading course... is okay. But I need more; I need details, I feel that I need more depth and practice. I need insights. I think the paid course will have just that! 💪💰"
    }
  ],
  "feedbackButton": "Leave a Review"
},
"quickRegistration": {
  "title": "Quick Registration",
  "description": "Go to our Telegram bot, follow the instructions, and start your training today. Our curator is already waiting for you!",
  "buttonText": "Go to Telegram"
},
"registrationBenefits": {
  "benefits": [
    "Choose one of the online trading courses that suits your knowledge and goals.",
    "Register in 2 minutes using our Telegram bot. It's fast, convenient, and secure.",
    "After registration, you can discuss the details of your training with our administrator.",
    "As soon as all details are clarified, access to your chosen course will be provided instantly."
  ]
},
"homePage": {
  "teamHeading": "Our Team",
  "teamSubheading": "of Professionals",
  "teamDescription": "Our team is a collective of professionals passionate about trading and financial markets. We have come together to share our knowledge with those who aspire to master the world of trading.",
  "faqHeading": "You",
  "faqSubHeading": "often ask",
   "faqUs": "us..."
},

  "registration": {
    "heading": "Register to course:",
    "subheading": "It's very easy"
  },
  "trainers": {
    "trainer1": {
      "name": "DANILA",
      "lastName": "Anapov",
      "title": "Sales Specialist",
      "description": "Trading since 2019. Co-author of TradeBaze courses. Expert in cryptocurrency markets, also trades the American market."
    },
    "trainer2": {
      "name": "Sergey",
      "lastName": "Skokov",
      "title": "Sales Specialist",
      "description": "Trading since 2019. Co-author of TradeBaze courses. Expert in cryptocurrency markets, also trades the American market."
    },
    "trainer3": {
      "name": "Vera",
      "lastName": "Akumova",
      "title": "Sales Specialist",
      "description": "Trading since 2019. Co-author of TradeBaze courses. Expert in cryptocurrency markets, also trades the American market."
    }
  },
  "scrollableSections": {
    "heading": "Our Team of Professionals",
    "paragraph": "Our team is a group of professionals passionate about trading and financial markets. We have come together to share our knowledge with those who aspire to master the world of trading.",
    "trainer1": {
      "name": "DANILA",
      "lastName": "Anapov",
      "title": "Sales Specialist",
      "text": "Trading since 2019. Co-author of TradeBaze courses. Expert in cryptocurrency markets, also trades the American market."
    },
    "trainer2": {
      "name": "SERGEY",
      "lastName": "SKOKOV",
      "title": "Sales Specialist",
      "text": "Trading since 2019. Co-author of TradeBaze courses. Expert in cryptocurrency markets, also trades the American market."
    },
    "trainer3": {
      "name": "VERA",
      "lastName": "AKUMOVA",
      "title": "Sales Specialist",
      "text": "Trading since 2019. Co-author of TradeBaze courses. Expert in cryptocurrency markets, also trades the American market."
    }
  },
  "accordion": {
    "items": [
      {
        "title": "How much does the training at Trade Baza cost?",
        "additionalText": "The difference between paid courses and free ones lies in the depth of material and level of instruction. In a paid course, you will receive more detailed lessons, additional materials, the opportunity for individual consultations, and possibly access to exclusive resources that are not available in the free version."
      },
      {
        "title": "What level of preparation is required to take the course?",
        "additionalText": "The difference between paid courses and free ones lies in the depth of material and level of instruction. In a paid course, you will receive more detailed lessons, additional materials, the opportunity for individual consultations, and possibly access to exclusive resources that are not available in the free version."
      },
      {
        "title": "What is the difference between the paid course and the free one?",
        "additionalText": "The difference between paid courses and free ones lies in the depth of material and level of instruction. In a paid course, you will receive more detailed lessons, additional materials, the opportunity for individual consultations, and possibly access to exclusive resources that are not available in the free version."
      },
      {
        "title": "Is there a guarantee of obtaining results from the course?",
        "additionalText": "The difference between paid courses and free ones lies in the depth of material and level of instruction. In a paid course, you will receive more detailed lessons, additional materials, the opportunity for individual consultations, and possibly access to exclusive resources that are not available in the free version."
      },
      {
        "title": "What materials and resources are available to course participants?",
        "additionalText": "The difference between paid courses and free ones lies in the depth of material and level of instruction. In a paid course, you will receive more detailed lessons, additional materials, the opportunity for individual consultations, and possibly access to exclusive resources that are not available in the free version."
      },
      {
        "title": "Is there an opportunity to ask questions during the training?",
        "additionalText": "The difference between paid courses and free ones lies in the depth of material and level of instruction. In a paid course, you will receive more detailed lessons, additional materials, the opportunity for individual consultations, and possibly access to exclusive resources that are not available in the free version."
      },
      {
        "title": "How long does it take to complete each course?",
        "additionalText": "The difference between paid courses and free ones lies in the depth of material and level of instruction. In a paid course, you will receive more detailed lessons, additional materials, the opportunity for individual consultations, and possibly access to exclusive resources that are not available in the free version."
      },
      {
        "title": "Is a certificate or diploma provided upon completion of the course?",
        "additionalText": "The difference between paid courses and free ones lies in the depth of material and level of instruction. In a paid course, you will receive more detailed lessons, additional materials, the opportunity for individual consultations, and possibly access to exclusive resources that are not available in the free version."
      },
      {
        "title": "Are there bonuses or materials for course participants?",
        "additionalText": "The difference between paid courses and free ones lies in the depth of material and level of instruction. In a paid course, you will receive more detailed lessons, additional materials, the opportunity for individual consultations, and possibly access to exclusive resources that are not available in the free version."
      }
    ]
  },
  "currentStudy": {
    "mainHeading": "TRAINING",
    "mainHeadingSpan": "at this stage",
    "imageAlt": "Current Study",
    "paragraph1": "The \"Basics of Trading\" course is the perfect introduction to the exciting world of financial markets. We offer a comprehensive overview of the essential concepts, terms, and tools needed to start your journey in trading successfully.",
    "paragraph2": "In this course, you will learn the fundamentals of market analysis, risk management strategies, and capital management methods. We also provide practical tools and tips so you can apply your knowledge and make informed decisions while trading on the stock exchange. Our goal is to help you master the basics of trading and become a confident and successful trader.",
    "paragraph3": "Ultimately, this course not only serves as an introduction to the world of trading but will also be your reliable companion on the path to financial success. We are confident that, after completing the course, you will be ready for independent trading and able to make informed decisions to achieve your financial goals.",
    "durationAlt": "Duration",
    "durationLabel": "Duration",
    "durationValue": "~2 hours",
    "knowledgeAlt": "Knowledge",
    "knowledgeLabel": "Knowledge",
    "knowledgeRating": "Knowledge level",
    "skillsAlt": "Skills",
    "skillsLabel": "Skills for trading",
    "skillsRating": "Skills level"
  },

    "heroproduct": {
      "educationalCourse": "Educational Course",
      "courseTitle": "BASICS OF TRADING",
      "courseDescription": "An online trading course for modern people: from the basics of financial literacy to developing your own strategy.",
      "applyButton": "Submit Application",
      "selectCourseButton": "Choose Course",
      "passedCourse": "Course Completed"
    },
    "footer": {
    "logoAlt": "TradeBaza Logo",
    "moreAlt": "More",
    "about": "About Us",
    "courses": "Courses",
    "reviews": "Reviews",
    "team": "Our Team",
    "faq": "FAQ",
    "allRightsReserved": "",
    "designBy": "All rights reserved. Design: Web-Canape"
  },
  "footerBottom": {
    "description": "TradeBaza - online courses on trading for modern people: from basic financial literacy to your own strategy",
    "applyButton": "Apply Now",
    "selectCourseButton": "Select Course",
    "imageAlt1": "Image 1",
    "imageAlt2": "Image 2",
    "imageAlt3": "Image 3",
    "imageAlt4": "Image 4",
    "passedCourse": "Course Completed"
  },
  "footerMob": {
    "scrollToTop": "Scroll to Top", // alt text for the top arrow icon
    "about": "About Training",
    "courses": "Courses",
    "reviews": "Reviews",
    "team": "Our Team",
    "faq": "FAQ",
    "description": "TradeBaza - online courses on trading for modern people: from basic financial literacy to your own strategy",
    "allRightsReserved": "All rights reserved. Design: Web-Canape"
  },
  
    "overlayMenu": {
      "close": "Close",
      "about": "About",
      "courses": "Courses",
      "reviews": "Reviews",
      "team": "Our Team",
      "faq": "FAQ"
    }
  
  
  


              
            
            
          
          
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
          "hero": {
            "heading": "Торговля",
            "subheading": "на фондовом рынке",
            "description": "Онлайн-курс по торговле для современных людей: от базы финансовой грамотности до собственной стратегии",
            "apply": "Оставить заявку",
            "chooseCourse": "Выбрать курс",
            "graphAlt": "Графики",
            "imageAlt1": "Изображение 1",
            "imageAlt2": "Изображение 2",
            "imageAlt3": "Изображение 3",
            "imageAlt4": "Изображение 4",
            "courseProgress": "+1,32К Прошли Курс"
          },
          "advantages": [
      {
        "title": "Классика и стабильность",
        "description": "Первая фондовая биржа в мире была основана в 1585 году. Уникальный способ заработка, проверенный более чем 4-мя веками.",
        "imageAlt": "Классика и стабильность"
      },
      {
        "title": "Бесценный опыт",
        "description": "Изучение поведения активов на мировом рынке приводит к развитию критического мышления, пониманию экономических процессов, развитию памяти и т. п.",
        "imageAlt": "Бесценный опыт"
      },
      {
        "title": "Возможность и доступность",
        "description": "Благодаря современным инструментам, стать участником мировой торговли может каждый - пенсионер из Сибири или школьник из Ростова.",
        "imageAlt": "Возможность и доступность"
      }
    ],
    
      "how": {
        "titlePart1": "КАК ПРОХОДИТ",
        "titlePart2": "ОБУЧЕНИЕ в TRADE BAZA",
        "description": "Особенности и преимущества прохождения курсов в Trade Baze, привилегии и гарантии, которые вы получите доверив нам свой самый ценный ресурс - время.",
        "courses": {
          "beginner": {
            "title": "Курс “Новичок”",
            "description": "Вы сможете открывать первые сделки на бирже и радоваться первой прибыли уже в первый месяц обучения."
          }
        },
        "firstDeal": {
          "title": "Первая сделка",
          "description": "Бесплатная помощь при первой сделке, наш эксперт покажет как имея знания, можно заработать на биржах."
        },
        "globalExchanges": {
          "title": "Биржи всего мира",
          "description": "Вы сможете торговать на всех самых популярных торговых площадках, таких как Forex, Badoo, Tinder, Mamba."
        },
        "levelUp": {
          "title": "Повышение уровня",
          "description": "После окончании обучения, вас ждет курс повышения знаний, дающий безграничные навыки торговли на бирже."
        },
        "expertSupport": {
          "title": "Экспертная поддержка",
          "description": "Онлайн сопровождение в процессе прохождения всего обучения, помощь в любом вопросе по ходу курса."
        },
        "exclusiveAccess": {
          "title": "Эксклюзивный доступ",
          "description": "Лучший из лучших умов будет приглашен на собеседование в нашу команду."
        },
        "imageAlt": "Как проходит обучение в Trade Baze"
      },
      
      
        "main": {
          "resourceWhere": "ресурс, где",
          "everyone": "каждый",
          "willAchieve": "сделает",
          "result": "Результат",
          "desire": "Желание",
          "desireText": "если ты читаешь это, значит ты уже на верном пути, и можешь приступать к рекомендации следующего пункта, ведь Желание уже привело тебя сюда",
          "learning": "Обучение",
          "learningText": "никаких специальных знаний и навыков не требуется, первый курс совершенно бесплатный, но даст всю необходимую базу для старта, главное начать",
          "practice": "Практика",
          "practiceText": "пройдя первый курс, вы получите четкую технику безопасности для своих сбережений, а дальше - вперед к практике и получению опыта",
          "professionalism": "Профессионализм",
          "professionalismText": "стать профессионалом тебе поможет твой опыт, и единственным критерием твоего профессионализма будет твой доход",
          "independence": "Независимость",
          "independenceText": "состояние, когда личные доходы покрывают все расходы, обеспечивая свободу выбора и возможность реализовывать свои жизненные цели"
        },
       
          "course": {
            "alsoInterestingTitle": "Так же может быть ",
            "alsoInterestingSpan": "интересно",
            "mainHeading": "курсы, с которых начинается твоя ",
            "newLife": "новая жизнь",
            "titlePrefix": "Курс:",
            "duration": "Длительность",
            "knowledge": "Знания",
            "skills": "Навыки",
            "moreDetails": "Подробнее",
            "apply": "Записаться",
            "coursesData": [
              {
                "price": "Бесплатно",
                "title": "Основы Трейдинга",
                "description": "Бесплатный вводный курс для тех, кто уже хочет понять такое трейдинг и биржа",
                "details": "Идеальное начало вашего путешествия в мир трейдинга. Этот бесплатный курс представляет вам основные концепции, термины и инструменты, необходимые для успешного начала трейдинга",
                "duration": "~2 часа",
                "knowledgeStars": "threeStars",
                "skillsStars": "threeStars"
              },
              {
                "price": "9,980 RUB",
                "title": "Технический анализ",
                "description": "Платный продвинутый курс для тех, кто прошел первый курс и готов идти дальше",
                "details": "Глубже погрузитесь в мир трейдинга с нашим продвинутым курсом. Узнайте о техническом анализе, формировании стратегий и практических подходах к трейдингу на рынках",
                "duration": "~6 часов",
                "knowledgeStars": "threeFiveStars",
                "skillsStars": "fourStars"
              },
              {
                "price": "",
                "title": "Практика",
                "description": "Эксклюзивная возможность пройти практику в офисе команды создателей",
                "details": "10 дней работы в паре с наставником в нашем офисе в башне Москва-сити. Кандидаты будут отобраны в течении 6 месяцев с момента запуска второго курса",
                "duration": "~80 часов",
                "knowledgeStars": "fiveStars",
                "skillsStars": "fiveStars"
              }]
            
          },
          
            "swipeableDivs": {
              "heading": "Реальные истории успеха:",
              "subHeading": "Отзывы о наших курсах",
              "paragraph": "Каждый отзыв для нас - не просто слова на экране, это история человека, который прошел путь обучения вместе с нами. Мы гордимся каждым успешным шагом наших учеников и благодарны за доверие, которое они оказывают, делясь своим опытом и впечатлениями.",
              "divs": [
                {
                  "name": "Андрей ШАБАНОВ",
                  "title": "Повар, художник",
                  "course": "Прошел курс “Основы трейдинга”",
                  "feedback": "Ну, бесплатный курс по трейдинга... так, не плох. Но мне нужно больше, мне нужны детали, вот прям чувствую, что нужно больше глубины и практики. Мне нужны инсайды. Думаю, в платном курсе именно это и будет! 💪💰"
                },
                {
                  "name": "Андрей ШАБАНОВ",
                  "title": "Повар, художник",
                  "course": "Прошел курс “Основы трейдинга”",
                  "feedback": "Ну, бесплатный курс по трейдинга... так, не плох. Но мне нужно больше, мне нужны детали, вот прям чувствую, что нужно больше глубины и практики. Мне нужны инсайды. Думаю, в платном курсе именно это и будет! 💪💰"
                },
                {
                  "name": "Андрей ШАБАНОВ",
                  "title": "Повар, художник",
                  "course": "Прошел курс “Основы трейдинга”",
                  "feedback": "Ну, бесплатный курс по трейдинга... так, не плох. Но мне нужно больше, мне нужны детали, вот прям чувствую, что нужно больше глубины и практики. Мне нужны инсайды. Думаю, в платном курсе именно это и будет! 💪💰"
                }
              ],
              "feedbackButton": "Оставить отзыв"
            },
         
              "quickRegistration": {
                "title": "Быстрая регистрация",
                "description": "Переходите в наш Telegram-bot, следуйте инструкциям и начинайте обучение уже сегодня. Наш куратор уже ждет Вас!",
                "buttonText": "Перейти в Telegram"
              },
           
                "registrationBenefits": {
                  "benefits": [
                    "Выберите один из онлайн-курсов по торговле на бирже, который соответствует вашим знаниям и целям",
                    "Зарегистрируйтесь за 2 минуты, используя нашего Telegram-бота. Это быстро, удобно и безопасно",
                    "После регистрации вы сможете согласовать детали вашего обучения с нашим администратором",
                    "Как только все детали уточнены, доступ к выбранному курсу будет Вам предоставлен мгновенно"
                  ]
                },
                "homePage": {
                  "teamHeading": "Наша команда",
                  "teamSubheading": "профессионалов",
                  "teamDescription": "Наша команда - это коллектив профессионалов, увлечённых трейдингом и финансовыми рынками. Мы собрались, чтобы поделиться нашими знаниями с теми, кто стремится освоить мир трейдинга.",
                  "faqHeading": "вы",
                  "faqSubHeading": "часто спрашивайте",
                   "faqUs": "нас..."
                },
             
                  "registration": {
                    "heading": "запись на курс:",
                    "subheading": "всё очень просто"
                  },
                  "trainers": {
                    "trainer1": {
                      "name": "ДАНИЛА",
                      "lastName": "Анапов",
                      "title": "Специалист по продажам",
                      "description": "В трейдинге с 2019 года. Соавтор курсов TradeBaze. Эксперт на рынке криптовалют, также торгует американский рынок."
                    },
                    "trainer2": {
                      "name": "Сергей",
                      "lastName": "СКОКОВ",
                      "title": "Специалист по продажам",
                      "description": "В трейдинге с 2019 года. Соавтор курсов TradeBaze. Эксперт на рынке криптовалют, также торгует американский рынок."
                    },
                    "trainer3": {
                      "name": "Вера",
                      "lastName": "АКУМОВА",
                      "title": "Специалист по продажам",
                      "description": "В трейдинге с 2019 года. Соавтор курсов TradeBaze. Эксперт на рынке криптовалют, также торгует американский рынок."
                    }
                  },
                  "scrollableSections": {
                    "heading": "Наша команда профессионалов",
                    "paragraph": "Наша команда - это коллектив профессионалов, увлечённых трейдингом и финансовыми рынками. Мы собрались, чтобы поделиться нашими знаниями с теми, кто стремится освоить мир трейдинга.",
                    "trainer1": {
                      "name": "ДАНИЛА",
                      "lastName": "Анапов",
                      "title": "Специалист по продажам",
                      "text": "В трейдинге с 2019 года. Соавтор курсов TradeBaze. Эксперт на рынке криптовалют, также торгует американский рынок."
                    },
                    "trainer2": {
                      "name": "Сергей",
                      "lastName": "СКОКОВ",
                      "title": "Специалист по продажам",
                      "text": "В трейдинге с 2019 года. Соавтор курсов TradeBaze. Эксперт на рынке криптовалют, также торгует американский рынок."
                    },
                    "trainer3": {
                      "name": "Вера",
                      "lastName": "АКУМОВА",
                      "title": "Специалист по продажам",
                      "text": "В трейдинге с 2019 года. Соавтор курсов TradeBaze. Эксперт на рынке криптовалют, также торгует американский рынок."
                    }
                  },
                  "accordion": {
                    "items": [
                      {
                        "title": "Сколько стоит обучение в Trade Baza?",
                        "additionalText": "Отличие платного курса от бесплатного заключается в глубине материала и уровне обучения. В платном курсе вы получите более подробные уроки, дополнительные материалы, возможность индивидуальной консультации и, возможно, доступ к эксклюзивным ресурсам, которые не доступны в бесплатной версии."
                      },
                      {
                        "title": "Какой уровень подготовки необходим для прохождения курса?",
                        "additionalText": "Отличие платного курса от бесплатного заключается в глубине материала и уровне обучения. В платном курсе вы получите более подробные уроки, дополнительные материалы, возможность индивидуальной консультации и, возможно, доступ к эксклюзивным ресурсам, которые не доступны в бесплатной версии."
                      },
                      {
                        "title": "В чем отличие платного курса от бесплатного?",
                        "additionalText": "Отличие платного курса от бесплатного заключается в глубине материала и уровне обучения. В платном курсе вы получите более подробные уроки, дополнительные материалы, возможность индивидуальной консультации и, возможно, доступ к эксклюзивным ресурсам, которые не доступны в бесплатной версии."
                      },
                      {
                        "title": "Есть ли гарантия получения результатов прохождения курса?",
                        "additionalText": "Отличие платного курса от бесплатного заключается в глубине материала и уровне обучения. В платном курсе вы получите более подробные уроки, дополнительные материалы, возможность индивидуальной консультации и, возможно, доступ к эксклюзивным ресурсам, которые не доступны в бесплатной версии."
                      },
                      {
                        "title": "Какие материалы и ресурсы доступны участникам курса?",
                        "additionalText": "Отличие платного курса от бесплатного заключается в глубине материала и уровне обучения. В платном курсе вы получите более подробные уроки, дополнительные материалы, возможность индивидуальной консультации и, возможно, доступ к эксклюзивным ресурсам, которые не доступны в бесплатной версии."
                      },
                      {
                        "title": "Есть ли возможность задавать вопросы во время обучения?",
                        "additionalText": "Отличие платного курса от бесплатного заключается в глубине материала и уровне обучения. В платном курсе вы получите более подробные уроки, дополнительные материалы, возможность индивидуальной консультации и, возможно, доступ к эксклюзивным ресурсам, которые не доступны в бесплатной версии."
                      },
                      {
                        "title": "Сколько времени занимает прохождение каждого курса?",
                        "additionalText": "Отличие платного курса от бесплатного заключается в глубине материала и уровне обучения. В платном курсе вы получите более подробные уроки, дополнительные материалы, возможность индивидуальной консультации и, возможно, доступ к эксклюзивным ресурсам, которые не доступны в бесплатной версии."
                      },
                      {
                        "title": "Предоставляется ли сертификат или диплом по окончании курса?",
                        "additionalText": "Отличие платного курса от бесплатного заключается в глубине материала и уровне обучения. В платном курсе вы получите более подробные уроки, дополнительные материалы, возможность индивидуальной консультации и, возможно, доступ к эксклюзивным ресурсам, которые не доступны в бесплатной версии."
                      },
                      {
                        "title": "Есть ли бонусы или материалы для участников курса?",
                        "additionalText": "Отличие платного курса от бесплатного заключается в глубине материала и уровне обучения. В платном курсе вы получите более подробные уроки, дополнительные материалы, возможность индивидуальной консультации и, возможно, доступ к эксклюзивным ресурсам, которые не доступны в бесплатной версии."
                      }
                    ]
                  },
                  "currentStudy": {
                    "mainHeading": "ОБУЧЕНИЕ",
                    "mainHeadingSpan": "на данном этапе",
                    "imageAlt": "Current Study",
                    "paragraph1": "Курс \"Основы трейдинга\" - это идеальное введение в захватывающий мир финансовых рынков. Мы предлагаем обширный обзор основных концепций, терминов и инструментов, необходимых для успешного старта вашего пути в трейдинге.",
                    "paragraph2": "В рамках курса вы изучите основы анализа рынка, стратегии управления рисками и методы управления капиталом. Мы также предоставим вам практические инструменты и советы, чтобы вы могли применить свои знания на практике и принимать информированные решения при торговле на бирже. Наша цель - помочь вам освоить основы трейдинга и стать уверенным и успешным трейдером.",
                    "paragraph3": "В конечном итоге, этот курс не только представляет собой введение в мир трейдинга, но и станет вашим верным спутником на пути к финансовому успеху. Мы уверены, что после завершения курса вы будете готовы к самостоятельной торговле на бирже и сможете принимать информированные решения, чтобы достичь ваших финансовых целей.",
                    "durationAlt": "Duration",
                    "durationLabel": "Длительность",
                    "durationValue": "~2 часа",
                    "knowledgeAlt": "Knowledge",
                    "knowledgeLabel": "Знания",
                    "knowledgeRating": "Knowledge level",
                    "skillsAlt": "Skills",
                    "skillsLabel": "Навыки для торговли",
                    "skillsRating": "Skills level"
                  },

              
                    "heroproduct": {
                      "educationalCourse": "Образовательный курс",
                      "courseTitle": "ОСНОВЫ ТРЕЙДИНГА",
                      "courseDescription": "Онлайн-курс по торговле для современных людей: от базы финансовой грамотности до собственной стратегии",
                      "applyButton": "Оставить заявку",
                      "selectCourseButton": "Выбрать курс",
                      "passedCourse": "Прошли Курс"
                    },
                    "footer": {
                      "logoAlt": "Логотип TradeBaza",
                      "moreAlt": "Больше",
                      "about": "Об обучении",
                      "courses": "Курсы",
                      "reviews": "Отзывы",
                      "team": "Наша команда",
                      "faq": "FAQ",
                      "allRightsReserved": "",
                      "designBy": "All rights reserved. Design: Web-Canape"
                    },
                    "footerBottom": {
                      "description": "TradeBaza - онлайн-курсы по торговле, для современных людей: от базы финансовой грамотности до собственной стратегии",
                      "applyButton": "Оставить заявку",
                      "selectCourseButton": "Выбрать курс",
                      "imageAlt1": "Изображение 1",
                      "imageAlt2": "Изображение 2",
                      "imageAlt3": "Изображение 3",
                      "imageAlt4": "Изображение 4",
                      "passedCourse": "Прошли Курс"
                    },
                    "footerMob": {
                      "scrollToTop": "Прокрутка вверх", // alt text for the top arrow icon
                      "about": "Об обучении",
                      "courses": "Курсы",
                      "reviews": "Отзывы",
                      "team": "Наша команда",
                      "faq": "FAQ",
                      "description": "TradeBaza - онлайн-курсы по торговле, для современных людей: от базы финансовой грамотности до собственной стратегии",
                      "allRightsReserved": "Все права защищены. Дизайн: Web-Canape"
                    }
                    ,
  
    "overlayMenu": {
      "close": "",
      "about": "Об обучении",
      "courses": "Курсы",
      "reviews": "Отзывы",
      "team": "Наша команда",
      "faq": "FAQ"
    }
                
                  
                
              
              
     
            
          
        
      
      
    
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
