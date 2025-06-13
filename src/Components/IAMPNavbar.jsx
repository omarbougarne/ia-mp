import React, { useState, useEffect } from 'react';
import { Anchor, Menu, X, ChevronDown } from 'lucide-react';

// 1. Define your button styles as a constant
const buttonGradientStyle = {
  background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
  border: 'none',
  padding: '0.75rem 1.5rem',
  borderRadius: '50px',
  color: 'white',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)',
  display: 'inline-flex', // Ensure content aligns
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none', // Important for <a> tags
  whiteSpace: 'nowrap', // Prevent text wrap on button
  fontSize: '1rem', // Added for consistency
};

// For a "Sign In" button that might be a transparent variant
const signInButtonStyle = {
  background: 'transparent',
  border: '1px solid #00d4ff', // Border color from your gradient start
  padding: '0.75rem 1.5rem',
  borderRadius: '50px',
  color: '#00d4ff', // Text color matching border
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: 'none', // No shadow for this variant
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  fontSize: '1rem',
};


const IAMPNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' }, // Assuming this will be a link to blog
    { label: 'Category', href: '/IAMPCategoriesPage' },
    { label: 'Membership', href: '/membership' },
    { label: 'Contact', href: '/IAMPContactPage' },
    // Apply the new styles here
    { label: 'Login', href: '/SignIn', isButton: true, buttonStyle: signInButtonStyle },
    { label: 'Sign up', href: '/SignUp', isButton: true, buttonStyle: buttonGradientStyle }
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      background: scrollY > 50 ? 'rgba(10, 14, 39, 0.95)' : 'transparent',
      backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none',
      borderBottom: scrollY > 50 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Anchor style={{ color: '#00d4ff', width: '2rem', height: '2rem' }} />
          <span style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            IAMP
          </span>
        </div>

        {/* Desktop Navigation */}
        <div style={{
          display: window.innerWidth > 768 ? 'flex' : 'none',
          gap: '2rem',
          alignItems: 'center'
        }}>
          {navigationItems.map((item, index) => (
            <div key={item.label} style={{ position: 'relative' }}>
              {item.isButton ? ( // Check if it's a button item
                <a
                  href={item.href}
                  style={{
                    ...item.buttonStyle, // Apply the button style
                    // Add hover/active styles if needed, or define them in buttonStyle
                    // Example hover for gradient button:
                    '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(0, 212, 255, 0.4)' },
                    // You'll need to use JavaScript for hover if not using styled components
                    // or a CSS class for pseudo-classes
                  }}
                  onMouseEnter={(e) => {
                    if (item.buttonStyle === buttonGradientStyle) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 212, 255, 0.4)';
                    } else if (item.buttonStyle === signInButtonStyle) {
                       e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.1)';
                       e.currentTarget.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (item.buttonStyle === buttonGradientStyle) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 212, 255, 0.3)';
                    } else if (item.buttonStyle === signInButtonStyle) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {item.label}
                </a>
              ) : item.dropdown ? (
                <div>
                  <button
                    onClick={() => handleDropdownToggle(index)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#ffffff',
                      textDecoration: 'none',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      padding: '0.5rem 0',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#00d4ff'}
                    onMouseLeave={(e) => e.target.style.color = '#ffffff'}
                  >
                    {item.label}
                    <ChevronDown style={{
                      width: '1rem',
                      height: '1rem',
                      transform: activeDropdown === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }} />
                  </button>

                  {/* Dropdown Menu */}
                  {activeDropdown === index && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: '0',
                      background: 'rgba(10, 14, 39, 0.95)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '0.5rem',
                      padding: '0.5rem 0',
                      minWidth: '180px',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                      animation: 'fadeIn 0.3s ease'
                    }}>
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          style={{
                            display: 'block',
                            padding: '0.75rem 1.5rem',
                            color: '#ffffff',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = 'rgba(0, 212, 255, 0.1)';
                            e.target.style.color = '#00d4ff';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.color = '#ffffff';
                          }}
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={item.href}
                  style={{
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    padding: '0.5rem 0'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#00d4ff'}
                  onMouseLeave={(e) => e.target.style.color = '#ffffff'}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: window.innerWidth <= 768 ? 'block' : 'none',
            background: 'none',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer'
          }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Keeping all elements but fixing alignment */}
      {isMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(10, 14, 39, 0.98)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '1rem 0', // Changed padding to vertical only
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center' // Center all content
        }}>
          {navigationItems.map((item) => (
            <div key={item.label} style={{
              width: '100%', // Full container width
              display: 'flex',
              justifyContent: 'center' // Center items horizontally
            }}>
              {item.isButton ? (
                <a
                  href={item.href}
                  style={{
                    ...item.buttonStyle,
                    display: 'flex', // Changed from block
                    justifyContent: 'center', // Center content
                    alignItems: 'center', 
                    marginTop: '1rem',
                    width: 'auto', // Changed from 100%
                    maxWidth: '200px', // Added max width
                    padding: '0.75rem 1.5rem', // Explicit padding
                    boxSizing: 'border-box'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <a
                  href={item.href}
                  style={{
                    display: 'block',
                    padding: '1rem 0',
                    color: '#ffffff',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    width: '80%', // Added width for centering
                    textAlign: 'center' // Center text
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              )}
              {item.dropdown && (
                <div style={{ 
                  paddingLeft: '1rem',
                  width: '100%', // Full width 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center' // Center dropdown items
                }}>
                  {item.dropdown.map((dropdownItem) => (
                    <a
                      key={dropdownItem.label}
                      href={dropdownItem.href}
                      style={{
                        display: 'block',
                        padding: '0.5rem 0',
                        color: '#cccccc',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        textAlign: 'center' // Center text
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {dropdownItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* The "Become a Member" button in the mobile menu */}
          <a href="#membership" style={{
            ...buttonGradientStyle,
            display: 'flex', // Changed from block
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '1.5rem',
            width: 'auto', // Changed from 100%
            maxWidth: '200px', // Max width
            textAlign: 'center',
            boxSizing: 'border-box'
          }}>
            Become a Member
          </a>
        </div>
      )}

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </nav>
  );
};

export default IAMPNavbar;