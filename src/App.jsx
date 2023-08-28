import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css'
import Home from './Pages/Home'
import Navbar from './Component/Navbar';

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}>

        </Route>
      </Routes>
    </BrowserRouter>
    </>

  )
}

export default App
