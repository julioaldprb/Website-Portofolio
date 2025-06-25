// File: src/App.jsx
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
      {/* Fixed Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo + Name */}
          <Link to="/" className="flex items-center truncate">
            <img
              src={LogoProfile}
              alt="Logo Profile"
              className="h-10 w-10 rounded-full object-cover flex-shrink-0"
            />
            <span className="ml-2 text-base sm:text-lg md:text-xl font-bold text-gray-800 truncate">
              Julio Purba
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-6 text-gray-700">
            <Link to="/"      className="font-medium hover:text-blue-600">Home</Link>
            <Link to="/about" className="font-medium hover:text-blue-600">About</Link>
            <Link to="/projects" className="font-medium hover:text-blue-600">Projects</Link>
            <Link to="/cv"    className="font-medium hover:text-blue-600">CV</Link>
            <Link to="/contact" className="font-medium hover:text-blue-600">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content (pad top supaya tidak di bawah header) */}
      <main className="flex-grow container mx-auto px-4 pt-20 pb-8">
        <Routes>
          <Route path="/"       element={<Home />} />
          <Route path="/about"  element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv"      element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*"        element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
