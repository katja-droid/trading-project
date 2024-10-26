import React from 'react';
import { useTheme, useMediaQuery, Container, Box } from '@mui/material';

const CustomLayout = () => {
  const theme = useTheme();
  const matchesMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Container
      sx={{
        ...(matchesMdUp
          ? theme.customLayout.mdUp.container // Apply md and up layout
          : theme.customLayout.xsToSm.container), // Apply xs to sm layout
      }}
    >
      <Box sx={{ bgcolor: 'primary.main',  color: 'white' }}>
        <h1>Item 1</h1>
      </Box>
      <Box sx={{ bgcolor: 'secondary.main', color: 'white' }}>
        <h1>Item 2</h1>
      </Box>
      <Box sx={{ bgcolor: 'error.main', padding: '20px', color: 'white' }}>
        <h1>Item 3</h1>
      </Box>
    </Container>
  );
};

export default CustomLayout;
