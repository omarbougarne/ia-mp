"use client"
import { Anchor, Menu, X } from "lucide-react"

/**
 * Navigation component
 * @param {Object} props
 * @param {number} props.scrollY - Current scroll position
 * @param {boolean} props.isMenuOpen - Whether mobile menu is open
 * @param {Function} props.setIsMenuOpen - Function to toggle mobile menu
 */
const Navigation = ({ scrollY, isMenuOpen, setIsMenuOpen }) => {
  const navItems = ["Home", "About", "Categories", "Training", "Blog", "Contact"]

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-slate-900/95 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Anchor className="text-cyan-400 w-8 h-8" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              IAMP
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-colors duration-300 hover:text-cyan-400 ${
                  item === "Blog" ? "text-cyan-400 font-bold" : "text-white font-medium"
                }`}
              >
                {item}
              </a>
            ))}
            <button className="bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 rounded-full text-white font-bold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/30">
              Join IAMP
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed top-16 left-0 right-0 bottom-0 bg-slate-900/98 backdrop-blur-xl z-40 p-8 flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-2xl py-2 border-b border-white/10 transition-colors ${
                  item === "Blog" ? "text-cyan-400 font-bold" : "text-white font-medium"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 rounded-full text-white font-bold text-xl mt-4">
              Join IAMP
            </button>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navigation
