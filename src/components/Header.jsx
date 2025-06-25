// File: src/components/Header.jsx
import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import LogoProfile from '../assets/logoprofile.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/cv', label: 'CV' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-4 lg:px-6 py-2 sm:py-3 md:py-4">
        {/* Logo + Title */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0">
          <img
            src={LogoProfile}
            alt="Logo Profile"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
          />
          <span className="text-base sm:text-lg md:text-xl font-bold text-gray-800 truncate">
            Julio Purba
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 xl:space-x-8 text-gray-700 flex-shrink-0">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `font-medium hover:text-blue-600 transition-colors duration-200 whitespace-nowrap ${
                  isActive ? 'text-blue-600' : ''
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center p-1 sm:p-2 text-gray-700 hover:text-blue-600 flex-shrink-0"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <nav 
        className={`lg:hidden bg-white border-t border-gray-100 ${
          open ? 'block' : 'hidden'
        } shadow-inner`}
        onClick={() => setOpen(false)}
      >
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-2 sm:py-3 flex flex-col space-y-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `block w-full py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 ${
                  isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}