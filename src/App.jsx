import React from 'react'
import 'antd/dist/antd.min.css';
import './App.css'
import { Dashboard } from './pages/dashboard/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Politic } from './pages/politics/Politics';
import { Countries } from './pages/country/Country';
import { Footballs } from './pages/football/Football';
import { Apples } from './pages/apple/Apple';

export const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/politics' element={<Politic />} />
      <Route path='/country' element={<Countries />} />
      <Route path='/football' element={<Footballs />} />
      <Route path='/apple' element={<Apples />} />
    </Routes>
   </BrowserRouter>
  )
}
