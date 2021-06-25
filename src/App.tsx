import React from 'react';

import { HelmetProvider } from 'react-helmet-async';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import '~slick-carousel/slick/slick.css';
// import '~slick-carousel/slick/slick-theme.css';

import { AppProvider } from './contexts';

import Routes from './routes';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <HelmetProvider>
    <AppProvider>
      <Routes />
      <GlobalStyles />
      <ToastContainer />
    </AppProvider>
  </HelmetProvider>
);

export default App;
