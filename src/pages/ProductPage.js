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
import HeroProduct from '../HeroProduct';
import AlsoInteresting from '../AlsoInteresting';
import CurrentStudyMob from '../CurrentStudyMob';
import QuickRegistrationMob from '../QuickRegistrationMob';
import TradingCourses from '../TradingCourses';
import FooterMob from '../FooterMob';

const ProductPage = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const containerStyles = isMdUp
    ? theme.customLayout.mdUp.container // 12-column layout for mdUp
    : theme.customLayout.xsToSm.container; // 3-column layout for xs to sm

  return (
    <>
      <div style={{ position: 'relative', width: '100%' }}>
        <div style={{ backgroundColor: 'rgba(6, 16, 21, 0.4)', position: 'absolute', top: 0, left: 0, right: 0, zIndex: 0 }} />
        <Container sx={containerStyles}>
          <Box sx={{ gridColumn: 'span 3', zIndex: 1, position: 'relative' }}>
            <Navbar />
          </Box>
        </Container>
      </div>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
      <HeroProduct />

      
 {/* Desktop Registration and Accordion */}
 <Container sx={containerStyles}>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <CurrentStudy/>
          <Registration />
        </Box>
      </Container>
      {/* Desktop Swipeable Divs */}
      {isMdUp && (
        <Container sx={containerStyles}>
          <Box sx={{ gridColumn: 'span 3' }}>
            <SwipeableDivs />
          </Box>
          <AlsoInteresting excludeCourseId ={1}/>

        </Container>
      )}

  
<Footer/>
</Box>
<Box sx={{ display: { xs: 'block', md: 'none' } }}>
  <HeroProduct/>
  <CurrentStudyMob/>
  <QuickRegistrationMob/>
  <TradingCourses/>
  <SwipeableDivsMob/>
  <FooterMob/>
  </Box>

    </>
  );
};

export default ProductPage;
