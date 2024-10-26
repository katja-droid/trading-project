import React from 'react';
import { Box, Container, Card, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

// Import images
import advantage1 from './assets/advantages1.svg'; // Update path if necessary
import advantage2 from './assets/advantages2.svg'; // Update path if necessary
import advantage3 from './assets/advantages3.svg'; // Update path if necessary
import withScrollEffect from './WithScrollEffect';

const advantagesData = [
  { image: advantage1, bgColor: '#1C2532' },
  { image: advantage2, bgColor: '#1050AC80' },
  { image: advantage3, bgColor: '#1C2532' },
];

const Advantages = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  // Define gradient styles for titles
  const gradientStyle = {
    background: 'linear-gradient(135deg, #8CC2E9 0%, #A9E1D3 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: { xs: '17px', md: '26px' },
    fontWeight: 'bold',
    textAlign: 'center',
  };

  return (
    <Container sx={{ padding: { xs: 0, md: 0 }, mt: { xs: '50px', md: '72px'}, mb: {xs: '50px', md: '150px'} }}>
      <Box 
        sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, 
          gap: { xs: '20px', md: '30px' }  
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
            height: { xs: '188px', md: '452px' } 
          }}>
            <div 
              sx={{
                padding: 0, 
                px: '14px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                flexDirection: 'column', 
                pb: 0 
              }}
            >     
              <Box sx={{ width: { xs: '50px', md: '80px' }, margin: '0 auto' }}>
                <img 
                  src={advantage.image} 
                  alt={t(`advantages.${index}.imageAlt`)} 
                  style={{ 
                    width: '100%',
                    height: 'auto',
                    borderRadius: theme.shape.borderRadius, 
                    marginBottom: '10px'
                  }} 
                />
              </Box>
              <Box sx={{ width: {xs: '100%', md: '330px'}, margin: '0 auto' }}>
                <Typography 
                  variant="h6" 
                  component="div" 
                  gutterBottom 
                  sx={index === 1 ? { color: 'white', ...gradientStyle } : gradientStyle}
                >
                  {t(`advantages.${index}.title`)}
                </Typography>
              </Box>
              <Typography 
                variant="body2" 
                color="white" 
                sx={{ 
                  fontSize: { xs: '12px', md: '20px' }, 
                  lineHeight: {xs: 'normal', md:'30px'}, 
                  marginBottom: '10px', 
                  textAlign: 'center',
                  width: {xs: '237px', md: '330px'},
                  margin: '0 auto'
                }}
              >
                {t(`advantages.${index}.description`)}
              </Typography>
            </div>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default withScrollEffect(Advantages);
