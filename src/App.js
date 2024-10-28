import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { LanguageProvider } from './LanguageContext';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import theme from './theme';
import './App.css';
import './i18n';

// Import your SVG images
import mainBg from './assets/main-bg.png';
import productBg from './assets/product-bg.png';
import mainBgMob from './assets/main-bg-mob.png';
import productBgMob from './assets/product-bg-mob.png';

const App = () => {
  const location = useLocation();

  // Determine the background class based on the route and viewport width
  const isMainBg = location.pathname === '/';
  const isProductBg = location.pathname.startsWith('/product/');
  const isWideScreen = window.innerWidth >= 1410;

  // Determine the background style based on route and screen width
  const bgImage = isWideScreen
    ? isMainBg
      ? mainBg
      : isProductBg
      ? productBg
      : ''
    : isMainBg
    ? mainBgMob
    : isProductBg
    ? productBgMob
    : '';

  // Apply background to the body
  useEffect(() => {
    document.body.style.backgroundImage = `url(${bgImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
 
    document.body.style.margin = '0';

    // Cleanup function to remove background style when component unmounts or updates
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.height = '';
    };
  }, [bgImage]);

  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
