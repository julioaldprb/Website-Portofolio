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
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo + Name */}
        <Link
          to="/"
          className="flex items-center flex-shrink-0 min-w-0"
          onClick={() => setOpen(false)}
        >
          <img
            src={LogoProfile}
            alt="Logo Profile"
            className="h-10 w-10 rounded-full object-cover flex-shrink-0"
          />
          <span className="ml-2 text-base sm:text-lg md:text-xl font-bold text-gray-800 truncate">
            Julio Purba
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex space-x-6 xl:space-x-8 text-gray-700">
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

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {open && (
        <nav className="lg:hidden bg-white border-t border-gray-100 shadow-inner">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col space-y-1">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block w-full py-2 px-3 rounded-lg font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 ${
                    isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
