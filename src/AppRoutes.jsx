import React, { Component,Suspense, lazy } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './Components/Pages/HomePage/HomePage'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default AppRoutes