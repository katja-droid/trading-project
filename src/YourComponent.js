import React from 'react';
import { Box, Grid, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import bgImage from './assets/block_bg.png'; // Background image for the container
import itemBg1 from './assets/item-bg-1.png'; // First item background image
import itemBg2 from './assets/item-bg-2.png'; // Second item background image
import itemBg3 from './assets/item-bg-3.png'; // Third item background image
import itemBg4 from './assets/item-bg-4.png'; // Fourth item background image
import itemBg5 from './assets/item-bg-5.png'; // Fifth item background image
import withScrollEffect from './WithScrollEffect';

const YourComponent = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth={false}
      sx={{
        ...theme.customLayout.mdUp.container, // Your existing styles
        backgroundImage: `url(${bgImage})`, // Set the background image correctly
        backgroundSize: 'contain', // Cover the entire container
        backgroundPosition: 'center', // Center the background image
        py: '15px',
        mb: '150px'
      }}
    >
      <Grid container spacing={0} sx={{ columnGap: '30px' }}>
        {/* Empty column on the left (1 col wide) */}
        <Grid item sx={{ width: '90px' }} />

        {/* 4 col wide block */}
        <Grid item sx={{ width: '460px' }}> {/* 4 * 90px */}
          <Box
            sx={{
              backgroundColor: 'transparent',
              color: 'white',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0', // Remove padding
             
            }}
          >
      <Box sx={{ textAlign: 'center', margin: '20px 0' }}>
  <Typography
    variant="h5" // You can adjust the variant if needed
    sx={{
      fontFamily: 'SF UI Display',
      fontWeight: 100, // Thin
      fontSize: '30px', // Size for "ресурс, где"
      color: '#FFFFFF', // White color
      letterSpacing: '0.85em', // Set letter spacing to 85% of font size
      margin: 0, // Remove default margin
      textTransform: 'uppercase', // Transform text to uppercase
    }}
  >
    ресурс, где
  </Typography>
  <Typography
    variant="h1" // You can adjust the variant if needed
    sx={{
      fontFamily: 'SF UI Display',
      fontWeight: 900, // Black
      fontSize: '85px', // Size for "каждый", "сделает", "РЕЗУЛЬТАТ"
      background: 'linear-gradient(to right, #A9E1D3, #8CC2E9)', // Gradient background
      WebkitBackgroundClip: 'text', // Clip the background to the text
      WebkitTextFillColor: 'transparent', // Make text transparent to show gradient
      margin: '17px 0 0', // Add top margin for spacing
      textTransform: 'uppercase', // Transform text to uppercase
      letterSpacing: '-0.06em', 
    }}
  >
    каждый
  </Typography>
  <Typography
    variant="h1" // You can adjust the variant if needed
    sx={{
      fontFamily: 'SF UI Display',
      fontWeight: 900, // Black
      fontSize: '85px', // Size for "каждый", "сделает", "РЕЗУЛЬТАТ"
      background: 'linear-gradient(to right, #A9E1D3, #8CC2E9)', // Gradient background
      WebkitBackgroundClip: 'text', // Clip the background to the text
      WebkitTextFillColor: 'transparent', // Make text transparent to show gradient
      margin: 0, // Remove default margin
      textTransform: 'uppercase', // Transform text to uppercase
      letterSpacing: '-0.06em', 
    }}
  >
    сделает
  </Typography>
  <Typography
    variant="h1" // You can adjust the variant if needed
    sx={{
      fontFamily: 'SF UI Display',
      fontWeight: 900, // Black
      fontSize: '85px', // Size for "каждый", "сделает", "РЕЗУЛЬТАТ"
      background: 'linear-gradient(to right, #A9E1D3, #8CC2E9)', // Gradient background
      WebkitBackgroundClip: 'text', // Clip the background to the text
      WebkitTextFillColor: 'transparent', // Make text transparent to show gradient
      margin: 0, // Remove default margin
      textTransform: 'uppercase', // Transform text to uppercase
      letterSpacing: '-0.06em', 
    }}
  >
    РЕЗУЛЬТАТ
  </Typography>
</Box>

          </Box>
        </Grid>

        {/* Empty column (1 col wide) */}
        <Grid item sx={{ width: '90px' }} />

        {/* 6 col wide block */}
        <Grid item sx={{ width: '680px' }}> {/* 6 * 90px */}
          {/* Row 1: 3 cols wide block */}
          <Grid container spacing={0}>
            <Grid item sx={{ width: '330px', mb: '28px' }}> {/* 3 * 90px */}
              <Box
                sx={{
                  backgroundImage: `url(${itemBg1})`, // Using the imported variable for the background image
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '150px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start', // Align items to the left
                  padding: '0 16px', // Optional: add horizontal padding for better spacing
                  borderRadius: '8px', // Optional: rounded corners
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: 'white',
                    fontFamily: 'SF UI Display',
                    fontSize: '20px',
                    lineHeight: '26px',
                    margin: 0,
                    mb: '6px', // Add margin-bottom for spacing
                  }}
                >
                  Желание
                </Typography>
                <Typography
                  sx={{
                    color: 'white',
                    fontFamily: 'SF UI Display',
                    fontSize: '16px',
                    lineHeight: 'normal',
                    textAlign: 'justify', // Change to justify
                    fontWeight: 400, // Set font weight for smaller text
                  }}
                >
                  если ты читаешь это, значит ты уже на верном пути, и можешь приступать к рекомендации следующего пункта, ведь Желание уже привело тебя сюда
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Row 2: 2 empty cols and again 3 cols wide block */}
          <Grid container spacing={0}>
            <Grid item sx={{ width: '240px' }} /> {/* 2 * 90px */}
            <Grid item sx={{ width: '330px', mb: '28px' }}> {/* 3 * 90px */}
              <Box
                sx={{
                  backgroundImage: `url(${itemBg2})`, // Using the imported variable for the background image
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '150px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start', // Align items to the left
                  padding: '0 16px', // Optional: add horizontal padding for better spacing
                  borderRadius: '8px', // Optional: rounded corners
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: 'white',
                    fontFamily: 'SF UI Display',
                    fontSize: '20px',
                    lineHeight: '26px',
                    margin: 0,
                    mb: '6px', // Add margin-bottom for spacing
                  }}
                >
                  Обучение
                </Typography>
                <Typography
                  sx={{
                    color: 'white',
                    fontFamily: 'SF UI Display',
                    fontSize: '16px',
                    lineHeight: 'normal',
                    textAlign: 'justify', // Change to justify
                    fontWeight: 400, // Set font weight for smaller text
                  }}
                >
                  никаких специальных знаний и навыков не требуется, первый курс совершенно бесплатный, но даст всю необходимую базу для старта, главное начать
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Row 3: 3 empty cols and again 3 cols wide block */}
          <Grid container spacing={0}>
            <Grid item sx={{ width: '350px' }} /> {/* 3 * 90px */}
            <Grid item sx={{ width: '330px', mb: '28px' }}> {/* 3 * 90px */}
              <Box
                sx={{
                  backgroundImage: `url(${itemBg3})`, // Using the imported variable for the background image
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '150px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start', // Align items to the left
                  padding: '0 16px', // Optional: add horizontal padding for better spacing
                  borderRadius: '8px', // Optional: rounded corners
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: 'white',
                    fontFamily: 'SF UI Display',
                    fontSize: '20px',
                    lineHeight: '26px',
                    margin: 0,
                    mb: '6px', // Add margin-bottom for spacing
                  }}
                >
                  Практика
                </Typography>
                <Typography
                  sx={{
                    color: 'white',
                    fontFamily: 'SF UI Display',
                    fontSize: '16px',
                    lineHeight: 'normal',
                    textAlign: 'justify', // Change to justify
                    fontWeight: 400, // Set font weight for smaller text
                  }}
                >
                  пройдя первый курс, вы получите четкую технику безопасности для своих сбережений, а дальше - вперед к практике и получению опыта
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* New Rows for additional items in reverse order */}
          {/* Row 4: 3 cols wide block (originally Row 6) */}
          <Grid container spacing={0}>
            <Grid item sx={{ width: '240px' }} /> {/* 2 * 90px */}
            <Grid item sx={{ width: '330px', mb: '28px' }}> {/* 3 * 90px */}
              <Box
                sx={{
                  backgroundImage: `url(${itemBg4})`, // Using the imported variable for the background image
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '150px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start', // Align items to the left
                  padding: '0 16px', // Optional: add horizontal padding for better spacing
                  borderRadius: '8px', // Optional: rounded corners
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: 'white',
                    fontFamily: 'SF UI Display',
                    fontSize: '20px',
                    lineHeight: '26px',
                    margin: 0,
                    mb: '6px', // Add margin-bottom for spacing
                  }}
                >
                  Профессионализм
                </Typography>
                <Typography
                  sx={{
                    color: 'white',
                    fontFamily: 'SF UI Display',
                    fontSize: '16px',
                    lineHeight: 'normal',
                    textAlign: 'justify', // Change to justify
                    fontWeight: 400, // Set font weight for smaller text
                  }}
                >
                  стать профессионалом тебе поможет твой опыт, и единственным критерием твоего профессионализма будет твой доход
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Row 5: 2 empty cols and again 3 cols wide block (originally Row 5) */}
          <Grid container spacing={0}>
            <Grid item sx={{ width: '330px', mb: '28px' }}> {/* 3 * 90px */}
              <Box
                sx={{
                  backgroundImage: `url(${itemBg5})`, // Using the imported variable for the background image
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '150px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start', // Align items to the left
                  padding: '0 16px', // Optional: add horizontal padding for better spacing
                  borderRadius: '8px', // Optional: rounded corners
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: 'white',
                    fontFamily: 'SF UI Display',
                    fontSize: '20px',
                    lineHeight: '26px',
                    margin: 0,
                    mb: '6px', // Add margin-bottom for spacing
                  }}
                >
                  Независимость
                </Typography>
                <Typography
                  sx={{
                    color: 'white',
                    fontFamily: 'SF UI Display',
                    fontSize: '16px',
                    lineHeight: 'normal',
                    textAlign: 'justify', // Change to justify
                    fontWeight: 400, // Set font weight for smaller text
                  }}
                >
                  состояние, когда личные доходы покрывают все расходы, обеспечивая свободу выбора и возможность реализовывать свои жизненные цели
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withScrollEffect (YourComponent);
