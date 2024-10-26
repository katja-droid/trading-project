import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1409,
      lg: 1410,
      xl: 1920,
    },
  },
  customLayout: {
    mdUp: {
      container: {
        margin: '0 auto',
        gridTemplateColumns: 'repeat(12, 90px)',
        columnGap: '30px',
      },
    },
    xsToSm: {
      container: {
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 55px)',
        columnGap: '50px',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center',     // Center vertically (optional, if needed)
        maxWidth: '100%',         // Ensure it doesn’t exceed screen size
      },
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        disableGutters: true, // Disable gutters globally
      },
      styleOverrides: {
        root: {
          paddingLeft: 0, // Remove padding left
          paddingRight: 0, // Remove padding right
        },
      },
      variants: [
        {
          props: { variant: 'overflow' },
          style: {
            overflow: 'auto', // Allow overflow with scrolling
            maxWidth: 'none', // Override maxWidth to allow full width
            padding: 0, // Ensure no padding for overflow variant
          },
        },
      ],
    },
  },
});

export default theme;
