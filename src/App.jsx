// File: src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';   // <- gunakan Header yang sudah responsif
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import CV from './pages/CV';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      {/* Responsif Header */}
      <Header />

      {/* Main Content:
          pt-20 memberi ruang di atas setara tinggi header (~80px)
          agar halaman tidak tertutup */}
      <main className="flex-grow container mx-auto px-4 pt-20 pb-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
