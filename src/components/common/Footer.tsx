import { Footprints } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Footprints className="text-pink-400 w-6 h-6" />
              <span className="text-white font-bold text-lg">
                Lady <span className="text-pink-400">Shoe Mart</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your one-stop destination for stylish, comfortable women's footwear.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'Products', path: '/products' },
                { label: 'Categories', path: '/categories' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-gray-400 hover:text-pink-400 transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide">
              Contact
            </h3>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <span>📧 support@ladyshoemart.com</span>
              <span>📞 +94 77 123 4567</span>
              <span>📍 Colombo, Sri Lanka</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Lady Shoe Mart. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer