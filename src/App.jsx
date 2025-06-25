// File: src/App.jsx
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import CV from './pages/CV'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      {/* 1) Panggil Header sekali saja */}
      <Header />

      {/* 2) Tambahkan padding-top = tinggi header (h-16) */}
      <main className="pt-16 pb-8 container mx-auto px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv"       element={<CV />} />
          <Route path="/contact"  element={<Contact />} />

-         {/* Jangan fallback ke Home otomatis */}
-         <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
