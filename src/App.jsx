import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import CV from './pages/CV';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="pt-16 pb-8 container mx-auto px-4">
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv"       element={<CV />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="*"         element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
