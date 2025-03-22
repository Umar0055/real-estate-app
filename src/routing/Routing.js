import React from 'react'
import Home from '../pages/home/home'
import About from '../pages/about us/about'
import Buying from '../pages/buying/buying'
import Selling from '../pages/selling/selling'
import Renting from '../pages/renting/renting'
import Contact from '../pages/contact us/contact'
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
export default function Routing() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/buying" element={<Buying />} />
        <Route path="/selling" element={<Selling />} />
        <Route path="/renting" element={<Renting />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
