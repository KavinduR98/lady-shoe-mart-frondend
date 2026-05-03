import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShoppingBag, Menu, X, Footprints } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Categories', path: '/categories' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Footprints className="text-pink-500 w-7 h-7" />
            <span className="text-xl font-bold text-gray-800">
              Lady <span className="text-pink-500">Shoe Mart</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-pink-500 border-b-2 border-pink-500 pb-0.5'
                      : 'text-gray-600 hover:text-pink-500'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            {/* Cart Icon */}
            <Link to="/cart" className="relative text-gray-600 hover:text-pink-500 transition-colors">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Admin Link - Desktop */}
            <Link
              to="/admin"
              className="hidden md:inline-flex text-sm font-medium bg-pink-500 text-white px-4 py-1.5 rounded-full hover:bg-pink-600 transition-colors"
            >
              Admin
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-600 hover:text-pink-500"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium py-1 ${
                  isActive ? 'text-pink-500' : 'text-gray-600 hover:text-pink-500'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/admin"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium bg-pink-500 text-white px-4 py-2 rounded-full text-center hover:bg-pink-600 transition-colors"
          >
            Admin
          </Link>
        </div>
      )}
    </header>
  )
}

export default Navbar