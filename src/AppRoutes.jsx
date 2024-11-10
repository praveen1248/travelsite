import React, { Component,Suspense, lazy } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './Components/Pages/HomePage/HomePage'
import About from './Components/Pages/About/About';
import Services from './Components/Pages/Services/Services';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  )
}

export default AppRoutes