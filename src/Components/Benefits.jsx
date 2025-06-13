import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Globe, 
  Shield, 
  Award, 
  BookOpen, 
  TrendingUp, 
  Network, 
  Briefcase,
  Calendar,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import IAMPNavbar from './IAMPNavbar';
import IAMPFooter from './IAMPFooter';

export default function Benefits() {
  // Add mobile detection
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Your existing data stays the same
  const benefitCategories = [
    {
      title: "Professional Development",
      icon: <TrendingUp style={{ width: isMobile ? '2rem' : '2.5rem', height: isMobile ? '2rem' : '2.5rem' }} />,
      benefits: [
        "Access to exclusive maritime training programs",
        "Professional certification and continuing education",
        "Industry-recognized credentials and qualifications",
        "Career advancement opportunities",
        "Mentorship programs with industry leaders"
      ]
    },
    {
      title: "Networking & Community",
      icon: <Network style={{ width: isMobile ? '2rem' : '2.5rem', height: isMobile ? '2rem' : '2.5rem' }} />,
      benefits: [
        "Connect with 118+ maritime companies worldwide",
        "Access to exclusive industry events and conferences",
        "Professional networking opportunities",
        "Regional chapter meetings and local events",
        "Online community forums and discussions"
      ]
    },
    {
      title: "Industry Resources",
      icon: <BookOpen style={{ width: isMobile ? '2rem' : '2.5rem', height: isMobile ? '2rem' : '2.5rem' }} />,
      benefits: [
        "Comprehensive maritime industry publications",
        "Technical resources and best practices",
        "Market insights and industry reports",
        "Regulatory updates and compliance guidance",
        "Research papers and white papers"
      ]
    },
    {
      title: "Career Services",
      icon: <Briefcase style={{ width: isMobile ? '2rem' : '2.5rem', height: isMobile ? '2rem' : '2.5rem' }} />,
      benefits: [
        "Exclusive job board access",
        "Career counseling and guidance",
        "Resume review and optimization",
        "Interview preparation and coaching",
        "Salary benchmarking and negotiation support"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "IAMP membership has been instrumental in advancing my maritime career. The networking opportunities and professional development resources are unmatched.",
      author: "Sarah Johnson",
      position: "Port Operations Manager",
      company: "Global Maritime Solutions"
    },
    {
      quote: "As a corporate member, we've seen tremendous value in the training programs and industry connections IAMP provides to our team.",
      author: "Michael Chen",
      position: "VP of Operations",
      company: "Pacific Shipping Lines"
    },
    {
      quote: "The student membership program helped me transition from university to a successful career in maritime logistics.",
      author: "Alex Rodriguez",
      position: "Logistics Coordinator",
      company: "Atlantic Maritime Group"
    }
  ];

  return (
    <div style={{
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 25%, #2d3561 50%, #1a1f3a 75%, #0a0e27 100%)',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative',
      overflow: 'hidden', 
    }}>
      <div style={{
        marginBottom: isMobile ? '80px' : '200px'
      }}> 
        <IAMPNavbar /> 
      </div>
        
      {/* Background Elements - smaller on mobile */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: isMobile ? '150px' : '300px',
        height: isMobile ? '150px' : '300px',
        background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '5%',
        width: isMobile ? '100px' : '200px',
        height: isMobile ? '100px' : '200px',
        background: 'radial-gradient(circle, rgba(45, 53, 97, 0.3) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite reverse',
      }} />

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: isMobile ? '0 1rem' : '0 2rem' 
      }}>
        {/* Hero Section - Responsive text sizes */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: isMobile ? '3rem' : '5rem' 
        }}>
          <h1 style={{
            fontSize: isMobile ? '2.5rem' : '4rem',
            fontWeight: 'bold',
            lineHeight: '1.1',
            marginBottom: isMobile ? '1rem' : '1.5rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #0099cc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginTop: '50px'
          }}>
            Membership Benefits
          </h1>
          <p style={{
            fontSize: isMobile ? '1.1rem' : '1.3rem',
            color: '#cbd5e0',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Unlock exclusive opportunities, professional development, and industry connections that will accelerate your maritime career and business growth.
          </p>
        </div>

        {/* Key Statistics - Mobile responsive grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile 
            ? '1fr 1fr' 
            : 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: isMobile ? '1rem' : '2rem',
          marginBottom: isMobile ? '3rem' : '5rem'
        }}>
          {[
            { number: '118+', label: 'Maritime Companies' },
            { number: '5,000+', label: 'Active Members' },
            { number: '50+', label: 'Countries Represented' },
            { number: '25+', label: 'Years of Excellence' }
          ].map((stat, index) => (
            <div key={index} style={{
              textAlign: 'center',
              padding: isMobile ? '1.5rem' : '2rem',
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
              borderRadius: '15px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)'
            }}>
              <div style={{
                fontSize: isMobile ? '2rem' : '3rem',
                fontWeight: 'bold',
                color: '#00d4ff',
                marginBottom: '0.5rem'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: isMobile ? '0.9rem' : '1.1rem',
                color: '#cbd5e0'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Benefit Categories - Stack on mobile */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile 
            ? '1fr' 
            : 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: isMobile ? '1.5rem' : '3rem',
          marginBottom: isMobile ? '3rem' : '5rem'
        }}>
          {benefitCategories.map((category, index) => (
            <div key={index} style={{
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
              padding: isMobile ? '1.5rem' : '3rem',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: isMobile ? '1.25rem' : '2rem'
              }}>
                <div style={{ color: '#00d4ff' }}>
                  {category.icon}
                </div>
                <h3 style={{
                  fontSize: isMobile ? '1.4rem' : '1.8rem',
                  fontWeight: 'bold',
                  margin: 0
                }}>
                  {category.title}
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {category.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    marginBottom: '1rem',
                    color: '#cbd5e0',
                    fontSize: isMobile ? '1rem' : '1.1rem',
                    lineHeight: '1.5'
                  }}>
                    <CheckCircle style={{
                      width: '1.2rem',
                      height: '1.2rem',
                      color: '#00d4ff',
                      marginTop: '0.2rem',
                      flexShrink: 0
                    }} />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Testimonials - Stack on mobile */}
        <div style={{ marginBottom: isMobile ? '3rem' : '5rem' }}>
          <h2 style={{
            fontSize: isMobile ? '2rem' : '3rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: isMobile ? '2rem' : '3rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            What Our Members Say
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile 
              ? '1fr' 
              : 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: isMobile ? '1.5rem' : '2rem'
          }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
                padding: isMobile ? '1.5rem' : '2.5rem',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)'
              }}>
                <div style={{
                  display: 'flex',
                  gap: '0.25rem',
                  marginBottom: '1.5rem'
                }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} style={{
                      width: '1.2rem',
                      height: '1.2rem',
                      fill: '#00d4ff',
                      color: '#00d4ff'
                    }} />
                  ))}
                </div>
                <blockquote style={{
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  lineHeight: '1.6',
                  color: '#cbd5e0',
                  marginBottom: '1.5rem',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div style={{
                    fontWeight: 'bold',
                    color: '#ffffff',
                    marginBottom: '0.25rem'
                  }}>
                    {testimonial.author}
                  </div>
                  <div style={{
                    color: '#00d4ff',
                    fontSize: '0.9rem'
                  }}>
                    {testimonial.position}
                  </div>
                  <div style={{
                    color: '#a0aec0',
                    fontSize: '0.9rem'
                  }}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action - Responsive padding and buttons */}
        <div style={{
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
          padding: isMobile ? '2rem 1.5rem' : '4rem',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          marginBottom: '50px'
        }}>
          <h2 style={{
            fontSize: isMobile ? '1.8rem' : '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#ffffff', 
          }}>
            Ready to Join IAMP?
          </h2>
          <p style={{
            fontSize: isMobile ? '1.1rem' : '1.2rem',
            color: '#cbd5e0',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Take the next step in your maritime career and join thousands of professionals who are already benefiting from IAMP membership.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            flexDirection: isMobile ? 'column' : 'row'
          }}>
            <button style={{
              background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '10px',
              color: 'white',
              fontWeight: 'bold',
              fontSize: isMobile ? '1rem' : '1.1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              width: isMobile ? '100%' : 'auto'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(0, 212, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(0, 212, 255, 0.3)';
            }}>
              Become a Member <ArrowRight style={{ width: '1.2rem', height: '1.2rem' }} />
            </button>
            <button style={{
              background: 'transparent',
              border: '2px solid #00d4ff',
              padding: '1rem 2rem',
              borderRadius: '10px',
              color: '#00d4ff',
              fontWeight: 'bold',
              fontSize: isMobile ? '1rem' : '1.1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              width: isMobile ? '100%' : 'auto'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#00d4ff';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#00d4ff';
            }}>
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
        `}
      </style>
      
      {/* Footer */}
      <IAMPFooter />
    </div>
  );
}