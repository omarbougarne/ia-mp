import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Anchor, Facebook, Youtube, Twitter } from 'lucide-react';

const IAMPFooter = () => {
  // Add this state and effect for responsive behavior
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Your existing code
  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Category', href: '/IAMPCategoriesPage' },
    { name: 'Membership', href: '/Membership' },
    { name: 'Contact', href: '/IAMPContactPage' }
  ];

  const academyLinks = [
    { name: 'Our History', href: '/our-history' },
    { name: 'Admission Policy', href: '/admission-policy' },
    { name: 'Benefits', href: '/benefits' },
    { name: 'Partners', href: '/IAMPPartnersPage' }
  ];

  return (
    <footer style={{
      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(10, 14, 39, 0.9))',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Main Footer Content */}
      <div style={{ padding: isMobile ? '2rem 0 1rem' : '3rem 0 1rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: isMobile ? '0 1rem' : '0 2rem' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr 1.5fr', 
            gap: isMobile ? '2.5rem' : '2rem', 
            marginBottom: '2rem'
          }}>
            
            {/* IAMP Logo and Description - unchanged */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
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
              <p style={{ 
                color: '#a0aec0', 
                lineHeight: '1.6',
                marginBottom: '1rem',
                fontSize: '1rem'
              }}>
                At IAMP, our mission comes to life through impactful projects that strengthen global maritime standards.
              </p>
              <div style={{ marginTop: '1rem' }}>
                <a href="#" style={{ 
                  color: '#00d4ff', 
                  textDecoration: 'none', 
                  fontWeight: 'bold',
                  fontSize: '1rem'
                }}>
                  Discover our academy
                </a>
              </div>
            </div>
            
            {/* Pages - unchanged */}
            <div>
              <h4 style={{ 
                fontSize: '1.2rem', 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                color: '#ffffff'
              }}>
                Pages
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {navigationLinks.map((link, index) => (
                  <li key={index} style={{ marginBottom: '0.8rem' }}>
                    <a href={link.href} style={{
                      color: '#a0aec0',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#00d4ff';
                      e.target.style.transform = 'translateX(8px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#a0aec0';
                      e.target.style.transform = 'translateX(0)';
                    }}>
                      <span style={{ fontSize: '1rem', color: '#00d4ff' }}>+</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Discover our academy - unchanged */}
            <div>
              <h4 style={{ 
                fontSize: '1.2rem', 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                color: '#ffffff'
              }}>
                Discover our academy
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {academyLinks.map((link, index) => (
                  <li key={index} style={{ marginBottom: '0.8rem' }}>
                    <a href={link.href} style={{
                      color: '#a0aec0',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#00d4ff';
                      e.target.style.transform = 'translateX(8px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#a0aec0';
                      e.target.style.transform = 'translateX(0)';
                    }}>
                      <span style={{ fontSize: '1rem', color: '#00d4ff' }}>+</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our information - unchanged */}
            <div>
              <h4 style={{ 
                fontSize: '1.2rem', 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                color: '#ffffff'
              }}>
                Our information
              </h4>
              
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.8rem', 
                  marginBottom: '0.8rem'
                }}>
                  <Mail style={{ 
                    color: '#00d4ff', 
                    width: '1.2rem', 
                    height: '1.2rem',
                    flexShrink: 0
                  }} />
                  <span style={{ color: '#a0aec0', fontSize: '1rem' }}>info@ia-mp.org</span>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '0.8rem', 
                  marginBottom: '0.8rem'
                }}>
                  <MapPin style={{ 
                    color: '#00d4ff', 
                    width: '1.2rem', 
                    height: '1.2rem',
                    flexShrink: 0,
                    marginTop: '0.1rem'
                  }} />
                  <span style={{ 
                    color: '#a0aec0', 
                    fontSize: '1rem',
                    lineHeight: '1.4'
                  }}>
                    71-75 Shelton Street, London, United Kingdom, WC2H 9JQ
                  </span>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.8rem',
                  marginBottom: '1rem'
                }}>
                  <Phone style={{ 
                    color: '#00d4ff', 
                    width: '1.2rem', 
                    height: '1.2rem',
                    flexShrink: 0
                  }} />
                  <span style={{ color: '#a0aec0', fontSize: '1rem' }}>123-456-7890</span>
                </div>
              </div>

              {/* Social Media Icons - unchanged */}
              <div style={{ display: 'flex', gap: '0.8rem' }}>
                {[
                  { Icon: Facebook, color: '#1877f2', href: '#' },
                  { Icon: Youtube, color: '#ff0000', href: '#' },
                  { Icon: Twitter, color: '#1da1f2', href: '#' }
                ].map(({ Icon, color, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    style={{
                      width: '40px',
                      height: '40px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = color;
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = `0 4px 15px ${color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <Icon style={{ color: '#ffffff', width: '1.1rem', height: '1.1rem' }} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Copyright Section - adjusted for mobile */}
          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: isMobile ? '1.5rem' : '2rem',
            textAlign: 'center'
          }}>
            <p style={{ 
              color: '#a0aec0', 
              marginBottom: isMobile ? '0.75rem' : '1rem',
              fontSize: '1rem'
            }}>
              © 2025 IAMP. All rights reserved.
            </p>
            <p style={{ 
              color: '#6b7280', 
              fontSize: '0.9rem',
              lineHeight: '1.4',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              This website and its content are the exclusive property of IAMP. Any reproduction or use without permission is strictly prohibited.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default IAMPFooter;