import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'

const ReactRoutes = () => {
   return (
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/contact' element={<Contact/>} />
         {/* Route */}
      </Routes>
  )
}

export default ReactRoutes