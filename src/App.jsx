import React from 'react'
import './App.css'
import {Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Package from './Pages/Package';
import Services from './Pages/Services';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/packages' element={<Package></Package>}></Route>
      <Route path='/services' element={<Services></Services>}></Route>
    </Routes>
    </>
  )
}

export default App