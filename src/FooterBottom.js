import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import GradientButton from './GradientButton';
import image1 from './assets/profile1.png'; 
import image2 from './assets/profile2.png';
import image3 from './assets/profile3.png';
import image4 from './assets/profile4.png';
import './FooterBottom.css';
import withScrollEffect from './WithScrollEffect';

const FooterBottom = () => {
  return (
    <Container className="footer-container-fb">
      <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
        <p className='p-fb'>
          TradeBaza - онлайн-куры по торговле, для современных людей: от базы финансовой грамотности до собственной стратегии
        </p>
        
        <div className="footer-buttons-fb" style={{zIndex: '228'}}>
          <button className="hero-button-fb">Оставить заявку</button>
          <GradientButton arrow={true} text="Выбрать курс" width="240px" height="56px" />
        </div>

        <div className="text-with-images-fb">
          <div className="images-section-fb">
            <img src={image1} alt="Image 1" />
            <img src={image2} alt="Image 2" />
            <img src={image3} alt="Image 3" />
            <img src={image4} alt="Image 4" />
          </div>
          <div className="right-text-fb">
            +1,32К <br />
            Прошли Курс
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default withScrollEffect (FooterBottom);
