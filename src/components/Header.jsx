import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LogoProfile from '../assets/logoprofile.png';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/cv', label: 'CV' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative w-full bg-white shadow-md">
      {/* 1) Bar header sticky */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-4 py-3">
        {/* Logo + Nama */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={LogoProfile}
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-lg font-bold text-gray-800">Julio Purba</span>
        </Link>

        {/* Desktop nav (≥md) */}
        <nav className="hidden md:flex space-x-6">
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

        {/* Hamburger mobile */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-blue-600"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 2) Dropdown mobile absolute di bawah header */}
      <div
        className={`absolute left-0 right-0 bg-white border-t border-gray-100 shadow-md transition-opacity duration-200 ease-in-out ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col px-4 py-2 space-y-1">
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
        </nav>
      </div>
    </header>
  );
}
