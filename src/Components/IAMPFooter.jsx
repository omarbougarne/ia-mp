import React from 'react';
import { Anchor, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Youtube } from 'lucide-react';

const IAMPFooter = () => {
  const pages = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Category', href: '#category' },
    { label: 'Membership', href: '#membership' },
    { label: 'Contact', href: '#contact' }
  ];

  const academy = [
    { label: 'Our History', href: '#history' },
    { label: 'Admission Policy', href: '#admission' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Partners', href: '#partners' }
  ];

  // Helper component for section titles with underline
  const SectionTitle = ({ children }) => (
    <h4 style={{
      color: '#ffffff',
      marginBottom: '1.8rem',
      fontSize: '1.4rem',
      fontWeight: 'bold',
      position: 'relative',
      paddingBottom: '0.5rem'
    }}>
      {children}
      <span style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '50px',
        height: '3px',
        background: 'linear-gradient(90deg, #00d4ff, #0099cc)',
        borderRadius: '2px'
      }}></span>
    </h4>
  );

  // Helper component for list links
  const NavLink = ({ label, href }) => (
    <li style={{ marginBottom: '1rem' }}>
      <a
        href={href}
        style={{
          color: '#c0c0c0',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '0.7rem',
          fontSize: '1.05rem'
        }}
        onMouseEnter={(e) => {
          e.target.style.color = '#00d4ff';
          e.target.style.transform = 'translateX(5px)';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = '#c0c0c0';
          e.target.style.transform = 'translateX(0)';
        }}
      >
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>+</span>
        {label}
      </a>
    </li>
  );

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%)',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 20%, rgba(0, 212, 255, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(0, 153, 204, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 50% 10%, rgba(0, 212, 255, 0.05) 0%, transparent 40%),
          radial-gradient(circle at 10% 90%, rgba(0, 153, 204, 0.05) 0%, transparent 40%)
        `,
        pointerEvents: 'none'
      }} />
      
      {/* Newsletter Section */}
      <div style={{
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '3rem 2rem',
        position: 'relative',
        zIndex: 1,
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h3 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, #00d4ff, #ffffff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '0.05em'
          }}>
            Step into Excellence
          </h3>
          <p style={{
            fontSize: '1.2rem',
            color: '#c0c0c0',
            marginBottom: '2.5rem',
            maxWidth: '400px',
            margin: '0 auto 2.5rem auto'
          }}>
            Become a Member Today.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            maxWidth: '550px',
            margin: '0 auto'
          }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                padding: '0.9rem 1.6rem',
                borderRadius: '50px',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                background: 'rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                backdropFilter: 'blur(12px)',
                fontSize: '1.05rem',
                minWidth: '280px',
                flex: '1',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
              }}
            />
            <button style={{
              background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
              border: 'none',
              padding: '0.9rem 2.2rem',
              borderRadius: '50px',
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 6px 20px rgba(0, 212, 255, 0.35)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontSize: '1.05rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 6px 20px rgba(0, 212, 255, 0.35)';
            }}>
              Subscribe
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div style={{
        padding: '4rem 2rem 2rem 2rem',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3.5rem',
            marginBottom: '4rem'
          }}>
            
            {/* Company Info with Logo and Mission */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'rgba(0, 212, 255, 0.15)',
                  border: '2px solid rgba(0, 212, 255, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <Anchor style={{ color: '#00d4ff', width: '2.5rem', height: '2.5rem' }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '5px',
                    right: '5px',
                    background: '#00d4ff',
                    color: '#0a0e27',
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                    padding: '2px 6px',
                    borderRadius: '8px'
                  }}>
                    I.A.M.P
                  </div>
                </div>
              </div>
              <p style={{
                color: '#c0c0c0',
                lineHeight: '1.8',
                marginBottom: '2.5rem',
                fontSize: '1.05rem'
              }}>
                At IAMP, our mission comes to life through impactful projects that strengthen global maritime standards.
              </p>
            </div>

            {/* Pages */}
            <div>
              <SectionTitle>Pages</SectionTitle>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {pages.map((page) => (
                  <NavLink key={page.label} label={page.label} href={page.href} />
                ))}
              </ul>
            </div>

            {/* Discover our academy */}
            <div>
              <SectionTitle>Discover our academy</SectionTitle>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {academy.map((item) => (
                  <NavLink key={item.label} label={item.label} href={item.href} />
                ))}
              </ul>
            </div>

            {/* Our information */}
            <div>
              <SectionTitle>Our information</SectionTitle>
              
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <Mail style={{ color: '#00d4ff', minWidth: '22px' }} size={22} />
                  <span style={{ color: '#cccccc' }}>info@ia-mp.org</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <MapPin style={{ color: '#00d4ff', minWidth: '22px', marginTop: '3px' }} size={22} />
                  <span style={{ color: '#cccccc', lineHeight: '1.5' }}>
                    71-75 Shelton Street,<br />
                    London, United Kingdom,<br />
                    WC2H 9JQ
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Phone style={{ color: '#00d4ff', minWidth: '22px' }} size={22} />
                  <span style={{ color: '#cccccc' }}>123-456-7890</span>
                </div>
              </div>

              {/* Social Media */}
              <div style={{ display: 'flex', gap: '0.8rem' }}>
                <a
                  href="#"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    background: '#3b5998',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                    e.target.style.boxShadow = '0 6px 15px rgba(59, 89, 152, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
                  }}
                >
                  <Facebook size={22} />
                </a>
                <a
                  href="#"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    background: '#ff0000',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                    e.target.style.boxShadow = '0 6px 15px rgba(255, 0, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
                  }}
                >
                  <Youtube size={22} />
                </a>
                <a
                  href="#"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    background: '#1da1f2',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                    e.target.style.boxShadow = '0 6px 15px rgba(29, 161, 242, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
                  }}
                >
                  <Twitter size={22} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.15)',
        padding: '1.8rem 2rem',
        textAlign: 'center',
        background: 'rgba(0, 0, 0, 0.25)',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <p style={{ color: '#b0b0b0', margin: 0, fontSize: '0.95rem' }}>
              © {new Date().getFullYear()} IAMP. All rights reserved.
            </p>
            <p style={{ color: '#b0b0b0', margin: 0, fontSize: '0.9rem', textAlign: 'center', lineHeight: '1.5' }}>
              This website and its content are the exclusive property of IAMP. Any reproduction or use without permission is strictly prohibited.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default IAMPFooter;