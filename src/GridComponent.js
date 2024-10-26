import React from 'react';
import { Container, Grid, Paper, useTheme } from '@mui/material';

const GridComponent = () => {
  const theme = useTheme(); // Get the theme

  return (
    <Container sx={{ margin: '0 auto', paddingLeft: 0, paddingRight: 0 }}>

      <Grid 
        container 
        spacing={0} // No default spacing
        sx={{ 
          margin: 0,
          gap: '30px', // Set gap to 30px
          display: { xs: 'grid', md: 'grid' }, // Use grid layout
          gridTemplateColumns: { xs: 'repeat(3, 1fr)', md: 'repeat(12, 1fr)' }, // Responsive columns
        }}
      >
        {Array.from(Array(12)).map((_, index) => (
          <Grid item xs={12} sm={4} md={1} key={index}>
            <Paper
              sx={{
                padding: 2,
                textAlign: 'center',
                backgroundColor: '#e0e0e0',
                border: '1px solid #ddd',
                height: '100px', // Fixed height for visual consistency
              }}
            >
              Item {index + 1}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GridComponent;
