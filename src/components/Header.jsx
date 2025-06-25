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
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo + Title */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={LogoProfile}
            alt="Logo Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-xl font-bold text-gray-800">Julio Purba</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `font-medium hover:text-blue-600 transition-colors duration-200 ${isActive ? 'text-blue-600' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center p-2 text-gray-700 hover:text-blue-600"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <nav className={`md:hidden bg-white ${open ? 'block' : 'hidden'} shadow-inner`}
           onClick={() => setOpen(false)}>
        <div className="container mx-auto px-4 pb-4 flex flex-col space-y-2">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `block w-full py-2 px-3 rounded-lg font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 ${isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700'}`
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
