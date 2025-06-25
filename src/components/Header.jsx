// File: src/components/Header.jsx
import React, {useState} from 'react'
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
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo + Name */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={LogoProfile}
            alt="Logo Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-lg font-bold text-gray-800">Julio Purba</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {links.map(({to,label})=>(
            <NavLink
              key={to}
              to={to}
              className={({isActive})=>
                `font-medium transition-colors ${
                  isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`
              }
            >{label}</NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={()=>setOpen(o=>!o)}
        >
          {open ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>

      {/* Mobile Drawer */}
      <nav
        className={`md:hidden bg-white shadow-inner transition-transform ${
          open ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="px-4 py-2 flex flex-col space-y-1">
          {links.map(({to,label})=>(
            <NavLink
              key={to}
              to={to}
              onClick={()=>setOpen(false)}
              className={({isActive})=>
                `block px-3 py-2 rounded-lg font-medium ${
                  isActive
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`
              }
            >{label}</NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
