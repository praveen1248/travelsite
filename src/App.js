import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import AppRoutes from './AppRoutes'
import Header from './Components/SharedComponents/Header/Header';
import Footer from './Components/SharedComponents/Footer/Footer';

import { ChakraProvider } from '@chakra-ui/react'


function App() {

  return (
    <div className="App">
      <ChakraProvider>
        <Header />
        <AppRoutes />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
