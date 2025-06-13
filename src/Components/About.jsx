import React, { useState, useEffect } from 'react';
import { Star, Users, Award, Globe, Shield, Anchor, ArrowRight, Mail, Phone, MapPin, BookOpen, Target, Network, Handshake } from 'lucide-react';
import IAMPNavbar from './IAMPNavbar'; // Import the navbar component
import IAMPFooter from './IAMPFooter'; // Import the footer component

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Add mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile(); // Check on initial render
    window.addEventListener('resize', checkMobile); // Add event listener
    
    return () => {
      window.removeEventListener('resize', checkMobile); // Clean up
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      text: "Being part of IAMP has transformed how we operate in the maritime sector. The networking opportunities and professional development resources are unmatched.",
      author: "Captain Sarah Mitchell",
      company: "Global Maritime Solutions",
      rating: 5,
      image: "https://i.pinimg.com/736x/e4/c0/15/e4c015989ee3f5fa0a2d7722f73d34fc.jpg"
    },
    {
      text: "IAMP's certification programs have elevated our team's expertise. The quality of training and international recognition is outstanding.",
      author: "Dr. Ahmed Hassan",
      company: "Port Authority International",
      rating: 5,
      image: "https://i.pinimg.com/736x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg"
    },
    {
      text: "Joining IAMP gave me access to resources and connections that have been instrumental in advancing my maritime career.",
      author: "Elena Rodriguez",
      company: "Mediterranean Shipping Company",
      rating: 5,
      image: "https://i.pinimg.com/736x/61/68/d1/6168d1d1678dea107b2441bca33daa69.jpg"
    }
  ];

  const whyJoinFeatures = [
    {
      icon: <Network className="w-12 h-12" />,
      title: "Global Network",
      description: "Connect with maritime professionals across 118+ companies worldwide"
    },
    {
      icon: <Award className="w-12 h-12" />, 
      title: "Professional Recognition",
      description: "Gain internationally recognized certifications and qualifications"
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Continuous Learning",
      description: "Access cutting-edge training programs and educational resources"
    },
    {
      icon: <Handshake className="w-12 h-12" />,
      title: "Industry Support",
      description: "Benefit from mentorship and career development opportunities"
    }
  ];

  const missionItems = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence in Standards",
      description: "We set and maintain the highest professional standards in the maritime industry, ensuring our members are equipped with world-class knowledge and skills."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Connectivity",
      description: "We bridge geographical gaps by connecting maritime professionals worldwide, fostering collaboration and knowledge sharing across borders."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety & Compliance",
      description: "We promote maritime safety through comprehensive training programs and adherence to international regulations and best practices."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Professional Development",
      description: "We empower maritime professionals with continuous learning opportunities, career advancement support, and industry recognition."
    }
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
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: isMobile ? '80px' : '0' // Add padding for mobile nav
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: isMobile ? '150px' : '300px',
          height: isMobile ? '150px' : '300px',
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: isMobile ? '100px' : '200px',
          height: isMobile ? '100px' : '200px',
          background: 'radial-gradient(circle, rgba(45, 53, 97, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse'
        }} />
        
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          padding: isMobile ? '0 1rem' : '0 2rem', 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
          gap: isMobile ? '2rem' : '4rem', 
          alignItems: 'center' 
        }}>
          <div>
            <h1 style={{
              fontSize: isMobile ? '2.5rem' : '4rem',
              fontWeight: 'bold',
              lineHeight: '1.1',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #0099cc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginTop: isMobile ? '40px' : '80px',
            }}>
              Who We Are
            </h1>
            <h2 style={{
              fontSize: isMobile ? '1.5rem' : '2rem',
              color: '#00d4ff',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              The International Association of Maritime Professionals
            </h2>
            <p style={{
              fontSize: isMobile ? '1.1rem' : '1.2rem',
              color: '#cbd5e0',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Since 2011, the International Association of Maritime Professionals (IAMP) has empowered a global network of over 118 maritime companies and experts.
            </p>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.1rem',
              color: '#a0aec0',
              marginBottom: '3rem',
              lineHeight: '1.6'
            }}>
              We represent, connect, and support professionals across all sectors of the maritime industry – from port operations and shipping to offshore services and training.
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              flexDirection: isMobile ? 'column' : 'row',
              width: '100%'
            }}>
              <button style={{
                background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '50px',
                color: 'white',
                fontWeight: 'bold',
                fontSize: isMobile ? '1rem' : '1.1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)',
                width: isMobile ? '100%' : 'auto'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 8px 25px rgba(0, 212, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(0, 212, 255, 0.3)';
              }}>
                Join Our Network <ArrowRight style={{ marginLeft: '0.5rem', width: '1.2rem', height: '1.2rem' }} />
              </button>
              <button style={{
                background: 'transparent',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                padding: '1rem 2rem',
                borderRadius: '50px',
                color: 'white',
                fontWeight: 'bold',
                fontSize: isMobile ? '1rem' : '1.1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                width: isMobile ? '100%' : 'auto'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = '#00d4ff';
                e.target.style.background = 'rgba(0, 212, 255, 0.1)';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.target.style.background = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}>
                Learn More
              </button>
            </div>
          </div>
          
          <div style={{ position: 'relative' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
              borderRadius: '20px',
              padding: isMobile ? '1.5rem' : '2rem',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              marginTop: isMobile ? '20px' : '80px',
            }}>
              <img 
                src="https://mlyrfuhbfz4c.i.optimole.com/w:798/h:1080/q:mauto/ig:avif/https://ia-mp.org/wp-content/uploads/2025/04/Otavio-Ladder-pic-1135x1536-2.png"
                alt="Maritime Professional"
                style={{
                  width: '100%',
                  height: isMobile ? '350px' : '500px',
                  objectFit: 'cover',
                  borderRadius: '15px'
                }}
              />
            </div>
          </div>
        </div>

        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(180deg); }
            }
          `}
        </style>
      </section>

      {/* Why Join IAMP Section - Made Responsive */}
      <section id="about" style={{ 
        padding: isMobile ? '4rem 0' : '6rem 0', 
        position: 'relative' 
      }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          padding: isMobile ? '0 1rem' : '0 2rem' 
        }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '4rem' }}>
            <h2 style={{
              fontSize: isMobile ? '2.25rem' : '3rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Why Join IAMP?</h2>
            <p style={{ 
              fontSize: isMobile ? '1.1rem' : '1.2rem', 
              color: '#a0aec0', 
              maxWidth: '800px', 
              margin: '0 auto',
              padding: isMobile ? '0 1rem' : 0
            }}>
              Discover the benefits of joining our global maritime community and accelerate your professional growth.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile 
              ? '1fr' 
              : 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: isMobile ? '1.5rem' : '2rem', 
            marginBottom: '4rem' 
          }}>
            {whyJoinFeatures.map((item, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(45, 53, 97, 0.1))',
                padding: isMobile ? '1.5rem' : '2rem',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ color: '#00d4ff', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                  {item.icon}
                </div>
                <h3 style={{ 
                  fontSize: isMobile ? '1.3rem' : '1.5rem', 
                  fontWeight: 'bold', 
                  marginBottom: '0.5rem' 
                }}>
                  {item.title}
                </h3>
                <p style={{ color: '#a0aec0' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Made Responsive */}
      <section style={{ 
        padding: isMobile ? '4rem 0' : '6rem 0', 
        background: 'rgba(0, 0, 0, 0.2)' 
      }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          padding: isMobile ? '0 1rem' : '0 2rem', 
          textAlign: 'center' 
        }}>
          <h2 style={{
            fontSize: isMobile ? '2.25rem' : '3rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>What Our Clients Are Saying</h2>
          <p style={{ 
            fontSize: isMobile ? '1.1rem' : '1.2rem', 
            color: '#a0aec0', 
            marginBottom: isMobile ? '2rem' : '3rem', 
            maxWidth: '800px', 
            margin: `0 auto ${isMobile ? '2rem' : '3rem'}` 
          }}>
            Hear from our members about their experience with IAMP
          </p>

          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
            padding: isMobile ? '2rem 1.5rem' : '3rem',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} style={{ 
                  color: '#ffd700', 
                  width: isMobile ? '1.2rem' : '1.5rem', 
                  height: isMobile ? '1.2rem' : '1.5rem',
                  fill: 'currentColor' 
                }} />
              ))}
            </div>
            <p style={{ 
              fontSize: isMobile ? '1.1rem' : '1.3rem', 
              fontStyle: 'italic', 
              marginBottom: '2rem', 
              color: '#ffffff' 
            }}>
              "{testimonials[currentTestimonial].text}"
            </p>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '1rem',
              flexDirection: isMobile ? 'column' : 'row'
            }}>
              {testimonials[currentTestimonial].image && (
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].author}
                  style={{
                    width: isMobile ? '50px' : '60px',
                    height: isMobile ? '50px' : '60px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
              )}
              <div>
                <p style={{ 
                  fontWeight: 'bold', 
                  fontSize: isMobile ? '1rem' : '1.1rem' 
                }}>
                  {testimonials[currentTestimonial].author}
                </p>
                <p style={{ color: '#a0aec0' }}>{testimonials[currentTestimonial].company}</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  background: index === currentTestimonial ? '#00d4ff' : 'rgba(255, 255, 255, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section - Made Responsive */}
      <section id="mission" style={{ 
        padding: isMobile ? '4rem 0' : '6rem 0' 
      }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          padding: isMobile ? '0 1rem' : '0 2rem' 
        }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '4rem' }}>
            <h2 style={{
              fontSize: isMobile ? '2.25rem' : '3rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Our Mission</h2>
            <p style={{ 
              fontSize: isMobile ? '1.1rem' : '1.2rem', 
              color: '#a0aec0', 
              maxWidth: '800px', 
              margin: '0 auto' 
            }}>
              At IAMP, our mission comes to life through impactful initiatives that strengthen global maritime standards.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile 
              ? '1fr' 
              : 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: isMobile ? '1.5rem' : '2rem' 
          }}>
            {missionItems.map((item, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
                padding: isMobile ? '1.5rem' : '2rem',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ color: '#00d4ff', marginBottom: '1rem' }}>
                  {item.icon}
                </div>
                <h3 style={{ 
                  fontSize: isMobile ? '1.3rem' : '1.5rem', 
                  fontWeight: 'bold', 
                  marginBottom: '1rem' 
                }}>
                  {item.title}
                </h3>
                <p style={{ color: '#a0aec0', lineHeight: '1.6' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Made Responsive */}
      <section id="contact" style={{ 
        padding: isMobile ? '4rem 0' : '6rem 0', 
        background: 'rgba(0, 0, 0, 0.2)' 
      }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          padding: isMobile ? '0 1rem' : '0 2rem' 
        }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '4rem' }}>
            <h2 style={{
              fontSize: isMobile ? '2.25rem' : '3rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Contact Us</h2>
            <p style={{ 
              fontSize: isMobile ? '1.1rem' : '1.2rem', 
              color: '#a0aec0', 
              maxWidth: '800px', 
              margin: '0 auto' 
            }}>
              Ready to join the global maritime community? Get in touch with us today.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
            gap: isMobile ? '2rem' : '4rem', 
            alignItems: 'start' 
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
              padding: isMobile ? '2rem' : '3rem',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)'
            }}>
              <h3 style={{ 
                fontSize: isMobile ? '1.3rem' : '1.5rem', 
                fontWeight: 'bold', 
                marginBottom: '2rem' 
              }}>
                Get in Touch
              </h3>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: isMobile ? 'flex-start' : 'center', 
                  gap: '1rem', 
                  marginBottom: '1.5rem',
                  flexDirection: isMobile ? 'column' : 'row'
                }}>
                  <MapPin style={{ 
                    color: '#00d4ff', 
                    width: '1.5rem', 
                    height: '1.5rem',
                    marginTop: isMobile ? '0.25rem' : '0'
                  }} />
                  <div>
                    <p style={{ fontWeight: 'bold' }}>Address</p>
                    <p style={{ color: '#a0aec0' }}>71-75 Shelton Street, London, United Kingdom, WC2H 9JQ</p>
                  </div>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem', 
                  marginBottom: '1.5rem' 
                }}>
                  <Phone style={{ color: '#00d4ff', width: '1.5rem', height: '1.5rem' }} />
                  <div>
                    <p style={{ fontWeight: 'bold' }}>Phone</p>
                    <p style={{ color: '#a0aec0' }}>+44 20 3286 6755</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Mail style={{ color: '#00d4ff', width: '1.5rem', height: '1.5rem' }} />
                  <div>
                    <p style={{ fontWeight: 'bold' }}>Email</p>
                    <p style={{ color: '#a0aec0' }}>info@ia-mp.org</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
              padding: isMobile ? '2rem' : '3rem',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)'
            }}>
              <h3 style={{ 
                fontSize: isMobile ? '1.3rem' : '1.5rem', 
                fontWeight: 'bold', 
                marginBottom: '2rem' 
              }}>
                Send us a Message
              </h3>
              
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '10px',
                    padding: isMobile ? '0.8rem' : '1rem',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '10px',
                    padding: isMobile ? '0.8rem' : '1rem',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
                <textarea
                  placeholder="Your Message"
                  rows={isMobile ? "4" : "5"}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '10px',
                    padding: isMobile ? '0.8rem' : '1rem',
                    color: 'white',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                    border: 'none',
                    padding: '1rem 2rem',
                    borderRadius: '10px',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0, 212, 255, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button - Made Responsive */}
      <div style={{
        position: 'fixed',
        bottom: isMobile ? '1.5rem' : '2rem',
        right: isMobile ? '1.5rem' : '2rem',
        zIndex: 1000
      }}>
        <button style={{
          width: isMobile ? '50px' : '60px',
          height: isMobile ? '50px' : '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
          border: 'none',
          color: 'white',
          fontSize: isMobile ? '1.25rem' : '1.5rem',
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

      {/* Footer */}
      <IAMPFooter />
      
      {/* Add a global style for mobile */}
      <style>
        {`
          @media (max-width: 768px) {
            body {
              overflow-x: hidden;
            }
          }
        `}
      </style>
    </div>
  );
};

export default About;