import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/*' element={<h1>Page not found</h1>}/>
    </Routes>
    <Footer/>
    </>
  )
}
