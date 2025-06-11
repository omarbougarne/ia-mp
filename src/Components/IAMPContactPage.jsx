import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, Anchor, ArrowRight, Globe, Shield, Users, Award } from 'lucide-react';
import IAMPNavbar from './IAMPNavbar'; // Import the navbar component
import IAMPFooter from './IAMPFooter'; // Import the footer component

const IAMPContactPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Address",
      details: "71-75 Shelton Street, London, United Kingdom, WC2H 9JQ",
      gradient: "linear-gradient(135deg, #00d4ff, #0099cc)"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Business Hours",
      details: "Mon-Fri 9:00AM - 5:00PM",
      gradient: "linear-gradient(135deg, #00d4ff, #0099cc)"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone",
      details: "123-456-7890",
      gradient: "linear-gradient(135deg, #00d4ff, #0099cc)"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      details: "info@ia-mp.org",
      gradient: "linear-gradient(135deg, #00d4ff, #0099cc)"
    }
  ];

  const quickLinks = [
    { title: "Membership Categories", icon: <Users className="w-5 h-5" /> },
    { title: "Training Programs", icon: <Award className="w-5 h-5" /> },
    { title: "Professional Standards", icon: <Shield className="w-5 h-5" /> },
    { title: "Global Network", icon: <Globe className="w-5 h-5" /> }
  ];

  return (
    <div style={{
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 25%, #2d3561 50%, #1a1f3a 75%, #0a0e27 100%)',
        minHeight: '100vh',
        color: '#ffffff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        {/* Use the extracted navbar component */}
        <IAMPNavbar />

      {/* Hero Section */}
      <section style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '6rem'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '15%',
          right: '5%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '10%',
          width: '180px',
          height: '180px',
          background: 'radial-gradient(circle, rgba(45, 53, 97, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse'
        }} />
        
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #0099cc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Contact Us
          </h1>
          <h2 style={{
            fontSize: '1.8rem',
            color: '#a0aec0',
            marginBottom: '2rem',
            fontWeight: '300'
          }}>
            GET IN TOUCH WITH IAMP
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#cbd5e0',
            marginBottom: '3rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            At IAMP, our mission comes to life through impactful projects that strengthen global maritime standards. We're here to support your maritime career journey and answer any questions you may have.
          </p>
        </div>

        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(180deg); }
            }
            @keyframes pulse {
              0%, 100% { opacity: 0.8; transform: scale(1); }
              50% { opacity: 1; transform: scale(1.1); }
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
      </section>

      {/* Contact Information Cards */}
      <section style={{ padding: '6rem 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {contactInfo.map((info, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
                borderRadius: '20px',
                padding: '2.5rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 212, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  background: info.gradient,
                  borderRadius: '15px',
                  padding: '1.5rem',
                  marginBottom: '1.5rem',
                  display: 'inline-block',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                }}>
                  <div style={{ color: 'white' }}>
                    {info.icon}
                  </div>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  background: info.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {info.title}
                </h3>
                <p style={{
                  color: '#cbd5e0',
                  lineHeight: '1.6',
                  fontSize: '1.1rem'
                }}>
                  {info.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Academy Info */}
      <section style={{ padding: '6rem 0', background: 'rgba(0, 0, 0, 0.2)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            {/* Contact Form */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
              borderRadius: '25px',
              padding: '3rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)'
            }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Send us a Message
              </h2>
              <p style={{
                color: '#a0aec0',
                marginBottom: '2rem',
                fontSize: '1.1rem',
                lineHeight: '1.6'
              }}>
                Have questions about membership, training programs, or our services? We'd love to hear from you.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#cbd5e0', fontWeight: '500' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      fontSize: '1rem',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#00d4ff';
                      e.target.style.boxShadow = '0 0 0 3px rgba(0, 212, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#cbd5e0', fontWeight: '500' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      fontSize: '1rem',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#00d4ff';
                      e.target.style.boxShadow = '0 0 0 3px rgba(0, 212, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#cbd5e0', fontWeight: '500' }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      fontSize: '1rem',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#00d4ff';
                      e.target.style.boxShadow = '0 0 0 3px rgba(0, 212, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#cbd5e0', fontWeight: '500' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows="5"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      fontSize: '1rem',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                      resize: 'vertical',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#00d4ff';
                      e.target.style.boxShadow = '0 0 0 3px rgba(0, 212, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                    border: 'none',
                    padding: '1rem 2rem',
                    borderRadius: '50px',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0, 212, 255, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0, 212, 255, 0.3)';
                  }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Academy Info & Quick Links */}
            <div>
              {/* Academy Section */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
                borderRadius: '25px',
                padding: '3rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                marginBottom: '2rem'
              }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <div style={{
                    width: '150px',
                    height: '150px',
                    background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                    borderRadius: '50%',
                    margin: '0 auto 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 30px rgba(0, 212, 255, 0.3)'
                  }}>
                    <Anchor style={{ color: 'white', width: '4rem', height: '4rem' }} />
                  </div>
                  <h3 style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    IAMP Academy
                  </h3>
                  <p style={{
                    color: '#a0aec0',
                    lineHeight: '1.6',
                    fontSize: '1.1rem',
                    marginBottom: '2rem'
                  }}>
                    At IAMP, our mission comes to life through impactful projects that strengthen global maritime standards.
                  </p>
                  <a href="#academy" style={{
                    color: '#00d4ff',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateX(0)';
                  }}>
                    Discover our academy <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
                borderRadius: '25px',
                padding: '3rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)'
              }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  marginBottom: '2rem',
                  background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Quick Links
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {quickLinks.map((link, index) => (
                    <a key={index} href="#" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#cbd5e0',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(0, 212, 255, 0.1)';
                      e.target.style.borderColor = 'rgba(0, 212, 255, 0.3)';
                      e.target.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.03)';
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.transform = 'translateX(0)';
                    }}>
                      <div style={{ color: '#00d4ff' }}>
                        {link.icon}
                      </div>
                      <span style={{ fontWeight: '500' }}>{link.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Footer */}
            {/* Footer */}
     <IAMPFooter />
     
           {/* Floating Action Button */}
           <div style={{
             position: 'fixed',
             bottom: '2rem',
             right: '2rem',
             zIndex: 1000
           }}>
             <button style={{
               width: '60px',
               height: '60px',
               borderRadius: '50%',
               background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
               border: 'none',
               color: 'white',
               fontSize: '1.5rem',
               cursor: 'pointer',
               boxShadow: '0 8px 25px rgba(0, 212, 255, 0.4)',
               transition: 'all 0.3s ease'
             }}
             onMouseEnter={(e) => {
               e.target.style.transform = 'scale(1.1)';
               e.target.style.boxShadow = '0 12px 35px rgba(0, 212, 255, 0.5)';
             }}
             onMouseLeave={(e) => {
               e.target.style.transform = 'scale(1)';
               e.target.style.boxShadow = '0 8px 25px rgba(0, 212, 255, 0.4)';
             }}
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
               ↑
             </button>
           </div>
         </div>
       );
     };
     
     export default IAMPContactPage;