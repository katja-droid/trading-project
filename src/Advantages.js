import React from 'react';
import { Box, Container, Card, CardContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Import images
import advantage1 from './assets/advantages1.svg'; // Update path if necessary
import advantage2 from './assets/advantages2.svg'; // Update path if necessary
import advantage3 from './assets/advantages3.svg'; // Update path if necessary
import withScrollEffect from './WithScrollEffect';

const advantagesData = [
  {
    title: "Классика и стабильность",
    description: "Первая фондовая биржа в мире была основана в 1585 году.\nУникальный способ заработка, проверенный более чем 4-мя веками.",
    image: advantage1,
    bgColor: '#1C2532', // Background color for the first card
  },
  {
    title: "Бесценный опыт",
    description: "Изучение поведения активов на мировом рынке, приводит к развитию критического мышления, пониманию экономических процессов, развитию памяти и т. п.",
    image: advantage2,
    bgColor: ' #1050AC80', // Background color for the second card
  },
  {
    title: "Возможность и доступность",
    description: "Благодаря современным инструментам, стать участником мировой торговли может каждый - пенсионер из Сибири или школьник из Ростова.",
    image: advantage3,
    bgColor: '#1C2532', // Background color for the third card
  },
];

const Advantages = () => {
  const theme = useTheme();

  // Define gradient styles for titles
  const gradientStyle = {
    background: 'linear-gradient(135deg, #8CC2E9 0%, #A9E1D3 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: { xs: '17px', md: '26px' }, // Set font size for different screen sizes
    fontWeight: 'bold', // Set font weight
    textAlign: 'center', // Center text alignment for the gradient titles
  };

  return (
    <Container sx={{ padding: { xs: 0, md: 0 }, mt: { xs: '50px', md: '72px'}, mb: {xs: '50px', md: '150px'} }}>
      <Box 
        sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, 
          gap: { xs: '20px', md: '30px' }  // Adjust gap for different screen sizes
        }}
      >
        {advantagesData.map((advantage, index) => (
          <Card key={index} sx={{ 
            width: '100%', 
            backgroundColor: advantage.bgColor,
            boxShadow: theme.shadows[2], 
            textAlign: 'center', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            borderRadius: '25px', 
            height: { xs: '188px', md: '452px' } // Conditional height based on screen size
          }}>
           <div 
  sx={{
    padding: 0, 
    px: '14px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'column', 
    pb: 0 // Remove padding bottom
  }}
>     <Box  sx={{width: { xs: '50px', md: '80px' },  margin: '0 auto'}}>
              <img 
                src={advantage.image} 
                alt={advantage.title} 
                style={{ 
                 width: '100%',
                 height: 'auto',
                
                  borderRadius: theme.shape.borderRadius, 
                  marginBottom: '10px' // Gap between image and title
                }} 
              />
              </Box>
              <Box sx={{
                width: {xs: '100%', md: '330px'}, margin: '0 auto'}}>
              <Typography 
                variant="h6" 
                component="div" 
                gutterBottom 
                sx={index === 1 ? { color: 'white', ...gradientStyle } : gradientStyle}
              >
                {advantage.title}
              </Typography>
              </Box>
              <Typography 
                variant="body2" 
                color="white" 
                sx={{ 
                  fontSize: { xs: '12px', md: '20px' }, // Conditional font size for regular text
                  lineHeight: {xs: 'normal', md:'30px'}, 
                  marginBottom: '10px', // Gap between title and text
                  textAlign: 'center',
                  width: {xs: '237px', md: '330px'},
                  margin: '0 auto'
                }}
              >
                {advantage.description}
              </Typography>
            </div>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default withScrollEffect (Advantages);
