import React from 'react';
import { useTheme, useMediaQuery, Container, Box } from '@mui/material';
import Navbar from '../Navbar';
import Hero from '../Hero';
import Advantages from '../Advantages';
import How from '../How';
import YourComponent from '../YourComponent';
import ScrollableSections from '../ScrollableSections';
import Trainers from '../Trainers';
import trainersBg from '../assets/trainers-bg-main-desk.png';
import SwipeableDivs from '../SwipeableDivs';
import SwipeableDivsMob from '../SwipeableDivsMob';
import CourseCards from '../CourseCards';
import Accordion from '../Accordion';
import AccordionMob from '../AccordionMob';
import Registration from '../Registration';
import CurrentStudy from '../CurrentStudy';
import Footer from '../Footer';
import HowMob from '../HowMob';
import YourComponentMob from '../YourComponentMob';
import CourseCardsMob from '../CourseCardsMob';
import TradingCourses from '../TradingCourses';
import QuickRegistration from '../QuickRegistration';
import QuickRegistrationMob from '../QuickRegistrationMob';
import FooterMob from '../FooterMob';
import CurrentStudyMob from '../CurrentStudyMob';
import { useTranslation } from 'react-i18next';
import graphsBg from '../assets/graphs-section-bg.png'
const HomePage = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const { t } = useTranslation(); // Initialize useTranslation
  

  const containerStyles = isMdUp
    ? theme.customLayout.mdUp.container // 12-column layout for mdUp
    : theme.customLayout.xsToSm.container; // 3-column layout for xs to sm

  return (
    <>
      <div style={{backgroundColor: 'rgba(6, 16, 21, 0.4)', zIndex: 22, position: 'relative', width: '100%', backdropFilter: 'blur(8px)' }}>
        <div style={{  }} >
        <Container sx={containerStyles}>
          <Box sx={{ gridColumn: 'span 3', zIndex: 1, position: 'relative' }}>
            <Navbar />
          </Box>
        </Container>
        </div>
      </div>

      <Hero />

      <Container sx={containerStyles}>
        <Box sx={{ gridColumn: 'span 3' }}>
          <Advantages />
          {isMdUp && (
            <>
              <How />
              <YourComponent />
              <CourseCards />
            </>
          )}
        </Box>
      </Container>

      {/* Desktop Swipeable Divs */}
      {isMdUp && (
        <Container sx={containerStyles}>
          <Box sx={{ gridColumn: 'span 3' }}>
            <SwipeableDivs />
          </Box>
        </Container>
      )}
  {/* Desktop Registration and Accordion */}
  <div style={{ backgroundImage: `url(${graphsBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
  <Container sx={containerStyles} >
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
         
          <Registration />
        </Box>
      </Container>
      {/* Main Team Section */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
      <div style={{ width: '930px', margin: '0 auto',  }}>
        <h1 className='main-heading' id="team">     {t('homePage.teamHeading')} <span className='main-heading-span'>{t('homePage.teamSubheading')}</span></h1>
        <p className='main-paragraph' >
        {t('homePage.teamDescription')}
        </p>
      </div>
      </Box>
      </div>
      {/* Trainers Section with Background Image */}
      <Box sx={{display: { xs: 'none', md: 'block' }}}>
      <div style={{ marginBottom: '150px' }}>
        <Box sx={{ backgroundImage: `url(${trainersBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <Container sx={containerStyles}>
            <Box sx={{ gridColumn: 'span 3', display: { xs: 'none', md: 'block' } }}>
              <Trainers />
            </Box>
          </Container>
        </Box>
      </div>
      </Box>

    

    
      {/* Desktop Registration and Accordion */}
    
      {/* Current Study Section for Desktop */}
    
  <Container sx={containerStyles}>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <h1 className='main-heading' id="faq" style={{ marginBottom: '50px' }}>
        {t('homePage.faqHeading')}<span className='main-heading-span'> {t('homePage.faqSubHeading')} </span>{t('homePage.faqUs')}
          </h1>
          <Accordion />
        </Box>
      </Container>
      
<Box sx={{ display: { xs: 'none', md: 'block' } }}>
      <Footer />
</Box>

{/* Mobile Layout */}
<Box sx={{ display: { xs: 'block', md: 'none' } }}>
  <div id="about">
  <HowMob/>
  </div>
  <YourComponentMob/>
  <div id="courses">
  <TradingCourses/>
  </div>
  <div id="reviews">
  <SwipeableDivsMob />
  </div>
  <div style={{ backgroundImage: `url(${graphsBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
<QuickRegistrationMob/>
</div>
<div id="team">
  <ScrollableSections />
  </div>
  
  <Box sx={{ gridColumn: 'span 3' }}>
    <div id="faq">
  <h1   className='main-heading-mob' style={{ marginTop: '50px' }}>

          </h1>
          </div>
          <h1 className='main-heading-mob' id="faq" style={{ marginBottom: '50px' }}>
        {t('homePage.faqHeading')}<span className='main-heading-span-mob'> {t('homePage.faqSubHeading')} </span>{t('homePage.faqUs')}
          </h1>
    <AccordionMob />
  </Box>
<div style={{backgroundColor: '#1C2532'}}>
  <FooterMob ></FooterMob>
  </div>
</Box>


    </>
  );
};

export default HomePage;
