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

const HomePage = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const containerStyles = isMdUp
    ? theme.customLayout.mdUp.container // 12-column layout for mdUp
    : theme.customLayout.xsToSm.container; // 3-column layout for xs to sm

  return (
    <>
      <div style={{ position: 'relative', width: '100%' }}>
        <div style={{ backgroundColor: 'rgba(6, 16, 21, 0.4)', }} >
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
  <Container sx={containerStyles}>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
         
          <Registration />
        </Box>
      </Container>
      {/* Main Team Section */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
      <div style={{ width: '930px', margin: '0 auto',  }}>
        <h1 className='main-heading' id="team">Наша команда <span className='main-heading-span'>профессионалов</span></h1>
        <p className='main-paragraph' >
          Наша команда - это коллектив профессионалов, увлечённых трейдингом и финансовыми рынками. Мы собрались, чтобы поделиться нашими знаниями с теми, кто стремится освоить мир трейдинга.
        </p>
      </div>
      </Box>
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
            вы<span className='main-heading-span'> часто спрашивайте</span> нас...
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

<QuickRegistrationMob/>
<div id="team">
  <ScrollableSections />
  </div>
  
  <Box sx={{ gridColumn: 'span 3' }}>
    <div id="faq">
  <h1   className='main-heading-mob' style={{ marginTop: '50px' }}>
            вы<span className='main-heading-span-mob'> часто спрашивайте</span> нас...
          </h1>
          </div>
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
