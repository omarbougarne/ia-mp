import React, { useState, useEffect } from 'react';
import { Star, ChevronDown, ChevronUp, Users, Award, Globe, Shield, Anchor, Waves, ArrowRight, Mail, Phone, MapPin, Menu, X, Crown, Building, User, GraduationCap, CheckCircle } from 'lucide-react';

const IAMPCategoriesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const membershipCategories = [
    {
      id: 'fellow',
      title: 'Fellow',
      subtitle: 'Senior Leadership Position',
      icon: <Crown className="w-12 h-12" />,
      gradient: 'linear-gradient(135deg, #FFD700, #FFA500)',
      requirements: [
        'Has held for at least eight (8) years consecutively a high position of responsibility in shipping or related business',
        'Has distinguished himself/herself in shipping practice',
        'Is a principal in a firm or a director of a company in the business or profession'
      ],
      benefits: [
        'Highest level of recognition',
        'Executive networking opportunities',
        'Leadership development programs',
        'Industry influence and advocacy'
      ],
      popular: true
    },
    {
      id: 'associate-fellow',
      title: 'Associate Fellow',
      subtitle: 'Senior Maritime Professional',
      icon: <Award className="w-12 h-12" />,
      gradient: 'linear-gradient(135deg, #00d4ff, #0099cc)',
      requirements: [
        'Command of a commercial or naval sea-going vessel',
        'Other senior position at sea',
        'Senior management position ashore'
      ],
      benefits: [
        'Professional recognition',
        'Advanced training access',
        'Industry connections',
        'Career advancement support'
      ],
      popular: false
    },
    {
      id: 'corporate',
      title: 'Corporate',
      subtitle: 'Organizations & Companies',
      icon: <Building className="w-12 h-12" />,
      gradient: 'linear-gradient(135deg, #9333ea, #7c3aed)',
      requirements: [
        'Organisations that encourage and approve of the aims of the association',
        'Have staff who are members of the association',
        'Committed to maritime industry advancement'
      ],
      benefits: [
        'Company-wide benefits',
        'Bulk registration discounts',
        'Corporate training programs',
        'Brand recognition opportunities'
      ],
      popular: false
    },
    {
      id: 'full-member',
      title: 'Full Member',
      subtitle: 'Qualified Maritime Professional',
      icon: <User className="w-12 h-12" />,
      gradient: 'linear-gradient(135deg, #10b981, #059669)',
      requirements: [
        'Individuals holding an internationally recognised marine qualification',
        'Minimum of five (5) years full-time practice as consultant or marine surveyor',
        'Demonstrated marine surveying or consultancy experience with written reports',
        'Qualifications deemed appropriate by the Professional Assessment Committee'
      ],
      benefits: [
        'Professional certification',
        'Industry recognition',
        'Networking opportunities',
        'Continuing education access'
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: "How long does the application process take?",
      answer: "The process typically takes 2-4 weeks after all documents are received. Our assessment committee reviews each application thoroughly to ensure all requirements are met."
    },
    {
      question: "Can I upgrade my membership later?",
      answer: "Yes, members can apply for an upgrade at any time by submitting an updated application with additional qualifications and experience documentation."
    },
    {
      question: "Are there any discounts for companies?",
      answer: "Yes, corporate members receive significant discounts on bulk registrations. We offer tiered pricing based on the number of employees being registered. Please contact us for detailed pricing information."
    },
    {
      question: "What documents do I need to provide?",
      answer: "Required documents vary by membership category but typically include: CV/Resume, educational certificates, professional qualifications, letters of recommendation, and proof of experience."
    },
    {
      question: "Is there a renewal process?",
      answer: "Yes, memberships are typically renewed annually. Members receive renewal notices with updated benefits and continuing education requirements."
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 25%, #2d3561 50%, #1a1f3a 75%, #0a0e27 100%)',
      minHeight: '100vh',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Navigation */}
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
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Anchor style={{ color: '#00d4ff', width: '2rem', height: '2rem' }} />
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', background: 'linear-gradient(135deg, #00d4ff, #0099cc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>IAMP</span>
          </div>
          
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {['Home', 'About', 'Categories', 'Training', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{
                color: item === 'Categories' ? '#00d4ff' : '#ffffff',
                textDecoration: 'none',
                fontWeight: item === 'Categories' ? 'bold' : '500',
                transition: 'all 0.3s ease',
                position: 'relative',
                padding: '0.5rem 0'
              }}
              onMouseEnter={(e) => e.target.style.color = '#00d4ff'}
              onMouseLeave={(e) => e.target.style.color = item === 'Categories' ? '#00d4ff' : '#ffffff'}>
                {item}
              </a>
            ))}
            <button style={{
              background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(0, 212, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(0, 212, 255, 0.3)';
            }}>
              Apply Now
            </button>
          </div>
        </div>
      </nav>

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
            Categories and Fees
          </h1>
          <h2 style={{
            fontSize: '1.8rem',
            color: '#a0aec0',
            marginBottom: '2rem',
            fontWeight: '300'
          }}>
            MEMBERSHIP GRADES
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#cbd5e0',
            marginBottom: '3rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            Choose the membership category that best fits your professional experience and career goals. Each grade offers unique benefits and recognition within the maritime community.
          </p>
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

      {/* Membership Categories */}
      <section style={{ padding: '6rem 0', position: 'relative' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gap: '3rem' }}>
            {membershipCategories.map((category, index) => (
              <div key={category.id} style={{
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
                borderRadius: '25px',
                padding: '3rem',
                border: category.popular ? '2px solid #00d4ff' : '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                position: 'relative',
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
                {category.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '25px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)'
                  }}>
                    MOST PRESTIGIOUS
                  </div>
                )}
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'start' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ 
                      background: category.gradient,
                      borderRadius: '20px',
                      padding: '2rem',
                      marginBottom: '1.5rem',
                      display: 'inline-block',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                    }}>
                      <div style={{ color: 'white' }}>
                        {category.icon}
                      </div>
                    </div>
                    <h3 style={{ 
                      fontSize: '2.5rem', 
                      fontWeight: 'bold', 
                      marginBottom: '0.5rem',
                      background: category.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {category.title}
                    </h3>
                    <p style={{ 
                      fontSize: '1.1rem', 
                      color: '#a0aec0', 
                      marginBottom: '2rem',
                      fontWeight: '500'
                    }}>
                      {category.subtitle}
                    </p>
                    
                    <button style={{
                      background: category.gradient,
                      border: 'none',
                      padding: '1rem 2rem',
                      borderRadius: '50px',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                    }}>
                      Apply for {category.title}
                    </button>
                  </div>
                  
                  <div>
                    <div style={{ marginBottom: '2rem' }}>
                      <h4 style={{ 
                        fontSize: '1.5rem', 
                        fontWeight: 'bold', 
                        marginBottom: '1rem',
                        color: '#00d4ff'
                      }}>
                        Requirements
                      </h4>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {category.requirements.map((req, i) => (
                          <li key={i} style={{ 
                            display: 'flex', 
                            alignItems: 'flex-start', 
                            gap: '1rem',
                            marginBottom: '1rem',
                            padding: '1rem',
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '10px',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                          }}>
                            <CheckCircle style={{ 
                              color: '#10b981', 
                              width: '1.5rem', 
                              height: '1.5rem',
                              flexShrink: 0,
                              marginTop: '0.1rem'
                            }} />
                            <span style={{ color: '#cbd5e0', lineHeight: '1.5' }}>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 style={{ 
                        fontSize: '1.5rem', 
                        fontWeight: 'bold', 
                        marginBottom: '1rem',
                        color: '#00d4ff'
                      }}>
                        Benefits
                      </h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                        {category.benefits.map((benefit, i) => (
                          <div key={i} style={{
                            background: 'rgba(0, 212, 255, 0.1)',
                            padding: '1rem',
                            borderRadius: '10px',
                            border: '1px solid rgba(0, 212, 255, 0.2)',
                            textAlign: 'center'
                          }}>
                            <span style={{ color: '#ffffff', fontWeight: '500' }}>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '6rem 0', background: 'rgba(0, 0, 0, 0.2)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Frequently Asked Questions</h2>
            <p style={{ fontSize: '1.2rem', color: '#a0aec0' }}>
              Get answers to common questions about our membership categories and application process.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
                borderRadius: '15px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}>
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: '100%',
                    padding: '1.5rem',
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(0, 212, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                  }}
                >
                  <span style={{ textAlign: 'left' }}>{faq.question}</span>
                  {expandedFAQ === index ? 
                    <ChevronUp style={{ color: '#00d4ff', width: '1.5rem', height: '1.5rem' }} /> : 
                    <ChevronDown style={{ color: '#00d4ff', width: '1.5rem', height: '1.5rem' }} />
                  }
                </button>
                
                {expandedFAQ === index && (
                  <div style={{
                    padding: '0 1.5rem 1.5rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    animation: 'fadeIn 0.3s ease'
                  }}>
                    <p style={{ 
                      color: '#a0aec0', 
                      lineHeight: '1.6',
                      margin: '1rem 0 0 0'
                    }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ padding: '6rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(45, 53, 97, 0.3))',
            padding: '4rem',
            borderRadius: '25px',
            border: '1px solid rgba(0, 212, 255, 0.3)',
            backdropFilter: 'blur(20px)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              animation: 'pulse 4s ease-in-out infinite'
            }} />
            
            <div className="relative z-10">
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Ready to Join IAMP?
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#a0aec0',
                marginBottom: '2rem',
                maxWidth: '600px',
                margin: '0 auto 2rem'
              }}>
                Take the next step in your maritime career. Our team is ready to help you choose the right membership category and guide you through the application process.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button style={{
                  background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(0, 212, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(0, 212, 255, 0.3)';
                }}>
                  Start Application <ArrowRight style={{ marginLeft: '0.5rem', width: '1.2rem', height: '1.2rem' }} />
                </button>
                
                <button style={{
                  background: 'transparent',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#00d4ff';
                  e.target.style.background = 'rgba(0, 212, 255, 0.1)';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.target.style.background = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                }}>
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(10, 14, 39, 0.9))',
        padding: '3rem 0 1rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Anchor style={{ color: '#00d4ff', width: '2rem', height: '2rem' }} />
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', background: 'linear-gradient(135deg, #00d4ff, #0099cc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>IAMP</span>
              </div>
              <p style={{ color: '#a0aec0', lineHeight: '1.6' }}>
                At IAMP, our mission comes to life through impactful projects that strengthen global maritime standards.
              </p>
              <div style={{ marginTop: '1rem' }}>
                <a href="#" style={{ color: '#00d4ff', textDecoration: 'none', fontWeight: 'bold' }}>
                  Discover our academy
                </a>
              </div>
            </div>
            
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Contact Information</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <Mail style={{ color: '#00d4ff', width: '1.2rem', height: '1.2rem' }} />
                <span style={{ color: '#a0aec0' }}>info@ia-mp.org</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <MapPin style={{ color: '#00d4ff', width: '1.2rem', height: '1.2rem' }} />
                <span style={{ color: '#a0aec0' }}>71-75 Shelton Street, London, United Kingdom, WC2H 9JQ</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Phone style={{ color: '#00d4ff', width: '1.2rem', height: '1.2rem' }} />
                <span style={{ color: '#a0aec0' }}>123-456-7890</span>
              </div>
            </div>
          </div>
          
          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '2rem',
            textAlign: 'center'
          }}>
           <p style={{ color: '#a0aec0' }}>
              © 2025 International Association of Maritime Professionals (IAMP). All rights reserved.
            </p>
          </div>
        </div>
      </footer>

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

export default IAMPCategoriesPage;