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
    <header className="bg-white shadow-md fixed w-full z-20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo + Title */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={LogoProfile}
            alt="Logo Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-xl font-bold text-gray-800">Julio Purba</span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `font-medium hover:text-blue-600 ${
                  isActive ? 'text-blue-600' : ''
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-blue-600"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* mobile nav below header */}
      <nav className={`md:hidden bg-white shadow-inner ${open ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-lg font-medium hover:text-blue-600 ${
                  isActive ? 'text-blue-600' : 'text-gray-700'
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
