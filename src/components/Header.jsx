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
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo + Title */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={LogoProfile}
            alt="Logo Profile"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
          />
          <span className="text-lg sm:text-xl font-bold text-gray-800">Julio Purba</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 text-gray-700">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `font-medium hover:text-blue-600 transition-colors ${
                  isActive ? 'text-blue-600' : ''
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer (overlay) */}
      <nav
        className={`lg:hidden absolute inset-x-0 top-full bg-white border-t border-gray-100 shadow-lg transform transition-transform duration-200 z-40 ${
          open ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="px-4 py-4 flex flex-col space-y-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors ${
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
