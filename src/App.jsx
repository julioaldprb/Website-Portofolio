import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LogoProfile from './assets/logoprofile.png';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import CV from './pages/CV';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src={LogoProfile}
              alt="Logo Profile"
              className="w-10 h-10 object-cover rounded-full"
            />
          </Link>
          <span className="text-xl font-bold text-gray-800">Julio Purba</span>
        </div>
        <nav className="space-x-6 text-gray-600">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/projects" className="hover:text-blue-600">Projects</Link>
          <Link to="/cv" className="hover:text-blue-600">CV</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
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
