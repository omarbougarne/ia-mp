import { Anchor, ArrowRight, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

/**
 * Footer component
 * @param {Object} props
 * @param {Array<string>} props.categories - List of blog categories
 */
const Footer = ({ categories }) => {
  const quickLinks = ["Home", "About Us", "Membership", "Events", "Training", "Certification", "Blog", "Contact"]
  const socialIcons = [Facebook, Twitter, Linkedin, Instagram, Youtube]

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 border-t border-white/10 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo and About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Anchor className="text-cyan-400 w-8 h-8" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                IAMP
              </span>
            </div>

            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              The International Association of Maritime Professionals is dedicated to advancing excellence, safety, and
              innovation in the maritime industry through education, advocacy, and collaboration.
            </p>

            <div className="flex gap-4">
              {socialIcons.map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-cyan-400/20 hover:transform hover:-translate-y-1"
                >
                  <Icon className="text-cyan-400 w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 text-sm transition-all duration-300 hover:text-cyan-400 hover:pl-2 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Categories */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Blog Categories</h3>
            <ul className="space-y-3">
              {categories
                .filter((cat) => cat !== "All")
                .map((category, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 text-sm transition-all duration-300 hover:text-cyan-400 hover:pl-2 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {category}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <MapPin className="text-cyan-400 w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  123 Maritime Avenue, Harbor City, Ocean State, 45678
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-cyan-400 w-5 h-5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-cyan-400 w-5 h-5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@iamp.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} International Association of Maritime Professionals. All rights reserved.
          </p>

          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (
              <a key={index} href="#" className="text-gray-400 text-sm hover:text-cyan-400 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
