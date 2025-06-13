import React, { useState, useEffect } from 'react';
import { Anchor, Menu, X, ChevronDown, User, LogOut } from 'lucide-react';

// Button styles (same as before)
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
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  fontSize: '1rem',
};

const signInButtonStyle = {
  background: 'transparent',
  border: '1px solid #00d4ff',
  padding: '0.75rem 1.5rem',
  borderRadius: '50px',
  color: '#00d4ff',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  fontSize: '1rem',
  gap: '0.5rem',
};

const logoutButtonStyle = {
  background: 'transparent',
  border: '1px solid #ff4757',
  padding: '0.75rem 1.5rem',
  borderRadius: '50px',
  color: '#ff4757',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  fontSize: '1rem',
  gap: '0.5rem',
};

const IAMPNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check authentication status on component mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const checkAuthStatus = async () => {
    try {
      // Check if session exists by making a request with credentials (cookies)
      const response = await fetch('http://localhost:5000/api/profile', {
        method: 'GET',
        credentials: 'include', // This includes cookies in the request
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setIsAuthenticated(true);
        setUser(data.user);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('http://localhost:5000/api/logout', {
        method: 'POST',
        credentials: 'include', // Include cookies
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Update state regardless of API call result
      setIsAuthenticated(false);
      setUser(null);
      setIsMenuOpen(false);
      // Optionally redirect to home page
      window.location.href = '/';
    }
  };

  // Define navigation items based on authentication status
  const getNavigationItems = () => {
    const baseItems = [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Category', href: '/IAMPCategoriesPage' },
      { label: 'Membership', href: '/membership' },
      { label: 'Contact', href: '/IAMPContactPage' },
    ];

    if (isAuthenticated) {
      return [
        ...baseItems,
        { 
          label: 'Profile', 
          href: '/profile', 
          isButton: true, 
          buttonStyle: signInButtonStyle,
          icon: User
        },
        { 
          label: 'Logout', 
          href: '#', 
          isButton: true, 
          buttonStyle: logoutButtonStyle,
          icon: LogOut,
          onClick: handleLogout
        }
      ];
    } else {
      return [
        ...baseItems,
        { label: 'Login', href: '/SignIn', isButton: true, buttonStyle: signInButtonStyle },
        { label: 'Sign up', href: '/SignUp', isButton: true, buttonStyle: buttonGradientStyle }
      ];
    }
  };

  const navigationItems = getNavigationItems();

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        background: 'rgba(10, 14, 39, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
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
          <div style={{ color: '#ffffff' }}>Loading...</div>
        </div>
      </nav>
    );
  }

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

        {/* User greeting for authenticated users (desktop only) */}
        {isAuthenticated && user && window.innerWidth > 768 && (
          <div style={{
            color: '#ffffff',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <User size={16} style={{ color: '#00d4ff' }} />
            Welcome, {user.firstName}!
          </div>
        )}

        {/* Desktop Navigation */}
        <div style={{
          display: window.innerWidth > 768 ? 'flex' : 'none',
          gap: '2rem',
          alignItems: 'center'
        }}>
          {navigationItems.map((item, index) => (
            <div key={item.label} style={{ position: 'relative' }}>
              {item.isButton ? (
                <button
                  onClick={item.onClick || (() => window.location.href = item.href)}
                  style={{
                    ...item.buttonStyle,
                  }}
                  onMouseEnter={(e) => {
                    if (item.buttonStyle === buttonGradientStyle) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 212, 255, 0.4)';
                    } else if (item.buttonStyle === signInButtonStyle) {
                      e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.1)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    } else if (item.buttonStyle === logoutButtonStyle) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 71, 87, 0.1)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (item.buttonStyle === buttonGradientStyle) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 212, 255, 0.3)';
                    } else {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {item.icon && <item.icon size={16} />}
                  {item.label}
                </button>
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
          {/* User greeting for mobile */}
          {isAuthenticated && user && (
            <div style={{
              color: '#ffffff',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem',
              padding: '0.5rem 1rem',
              background: 'rgba(0, 212, 255, 0.1)',
              borderRadius: '50px'
            }}>
              <User size={16} style={{ color: '#00d4ff' }} />
              Welcome, {user.firstName}!
            </div>
          )}

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
                >
                  {item.icon && <item.icon size={16} />}
                  {item.label}
                </button>
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