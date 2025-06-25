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
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-md h-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={LogoProfile}
            alt="Logo"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="hidden sm:inline text-lg font-bold text-gray-800">
            Julio Purba
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex space-x-6">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(o => !o)}
          className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <nav
        className={`lg:hidden bg-white border-t border-gray-100 shadow-inner transform transition-transform duration-200 ${
          open ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col space-y-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md font-medium ${
                  isActive
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
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
