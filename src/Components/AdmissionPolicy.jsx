import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  DollarSign,
  User,
  Building,
  GraduationCap,
  Shield,
  Award,
  Anchor,
  Camera,
  CreditCard,
  Users
} from 'lucide-react';
import IAMPNavbar from './IAMPNavbar';
import IAMPFooter from './IAMPFooter';

export default function AdmissionPolicy() {
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

  // Your existing data remains unchanged
  const policyItems = [
    {
      title: "Access to Events",
      icon: <Shield style={{ width: isMobile ? '1.5rem' : '2rem', height: isMobile ? '1.5rem' : '2rem' }} />,
      description: "Admission is strictly limited to pre-registered individuals including members, invited guests, hosts, and IAMP board members. No walk-ins will be permitted without prior registration.",
      highlight: true
    },
    {
      title: "Guest Registration & Fees",
      icon: <CreditCard style={{ width: isMobile ? '1.5rem' : '2rem', height: isMobile ? '1.5rem' : '2rem' }} />,
      description: "Non-members attending as guests are subject to a standard fee of $15, applicable for both online and in-person participation. Event organizers reserve the right to set or waive fees based on event type.",
      highlight: false
    },
    {
      title: "Identification Protocol",
      icon: <FileText style={{ width: isMobile ? '1.5rem' : '2rem', height: isMobile ? '1.5rem' : '2rem' }} />,
      description: "All attendees must present a valid photo ID (passport, driver's license, or national ID). Business cards or digital identification may be accepted as alternatives for corporate guests.",
      highlight: false
    },
    {
      title: "Student Attendance",
      icon: <GraduationCap style={{ width: isMobile ? '1.5rem' : '2rem', height: isMobile ? '1.5rem' : '2rem' }} />,
      description: "Students are welcome to attend IAMP events upon pre-registration as Guests unless they hold active membership. Professional attire and respectful conduct are mandatory. Failure to comply may result in denied access.",
      highlight: false
    },
    {
      title: "Media Release & Consent",
      icon: <Camera style={{ width: isMobile ? '1.5rem' : '2rem', height: isMobile ? '1.5rem' : '2rem' }} />,
      description: "By attending, participants grant IAMP permission to photograph or record them during the event. These materials may be used for promotional, educational, or archival purposes.",
      highlight: false
    }
  ];

  const keyPoints = [
    {
      icon: <Users style={{ width: '1.5rem', height: '1.5rem' }} />,
      text: "Pre-registration required for all events"
    },
    {
      icon: <DollarSign style={{ width: '1.5rem', height: '1.5rem' }} />,
      text: "$15 guest fee for non-members"
    },
    {
      icon: <FileText style={{ width: '1.5rem', height: '1.5rem' }} />,
      text: "Valid photo ID required for entry"
    },
    {
      icon: <GraduationCap style={{ width: '1.5rem', height: '1.5rem' }} />,
      text: "Students welcome with professional conduct"
    }
  ];

  return (
    <div style={{
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 25%, #2d3561 50%, #1a1f3a 75%, #0a0e27 100%)',
      minHeight: '100vh',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        marginBottom: isMobile ? '80px' : '200px'
      }}> 
        <IAMPNavbar /> 
      </div>
      
      {/* Background Elements - responsive sizes */}
      <div style={{
        position: 'absolute',
        top: '10%',
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

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '0 1rem' : '0 2rem' }}>
        {/* Hero Section - responsive text */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '5rem' }}>
          <h1 style={{
            fontSize: isMobile ? '2.5rem' : '4rem',
            fontWeight: 'bold',
            lineHeight: '1.1',
            marginBottom: isMobile ? '1rem' : '1.5rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #0099cc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Admission Policy
          </h1>
          <p style={{
            fontSize: isMobile ? '1.1rem' : '1.3rem',
            color: '#cbd5e0',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            To ensure a secure and professional environment at all IAMP events, the following admission guidelines apply:
          </p>
        </div>

        {/* Key Points Overview - responsive grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile 
            ? 'repeat(auto-fit, minmax(150px, 1fr))' 
            : 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: isMobile ? '1rem' : '2rem',
          marginBottom: isMobile ? '3rem' : '5rem'
        }}>
          {keyPoints.map((point, index) => (
            <div key={index} style={{
              textAlign: 'center',
              padding: isMobile ? '1.5rem' : '2rem',
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
              borderRadius: '15px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <div style={{ color: '#00d4ff', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                {point.icon}
              </div>
              <p style={{
                color: '#cbd5e0',
                fontSize: isMobile ? '0.9rem' : '1rem',
                fontWeight: '500',
                lineHeight: '1.4'
              }}>
                {point.text}
              </p>
            </div>
          ))}
        </div>

        {/* Policy Details - responsive */}
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
            Event Admission Guidelines
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '1.5rem' : '2rem'
          }}>
            {policyItems.map((policy, index) => (
              <div key={index} style={{
                background: policy.highlight 
                  ? 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(45, 53, 97, 0.3))'
                  : 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
                padding: isMobile ? '1.5rem' : '3rem',
                borderRadius: '20px',
                border: policy.highlight 
                  ? '2px solid #00d4ff'
                  : '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = isMobile ? 'translateY(-5px)' : 'translateX(10px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: isMobile ? '1rem' : '2rem',
                  flexDirection: isMobile ? 'column' : 'row'
                }}>
                  {isMobile && (
                    <div style={{ 
                      color: '#00d4ff',
                      marginBottom: '0.5rem'
                    }}>
                      {policy.icon}
                    </div>
                  )}
                  
                  {!isMobile && (
                    <div style={{ 
                      color: '#00d4ff',
                      flexShrink: 0,
                      marginTop: '0.5rem'
                    }}>
                      {policy.icon}
                    </div>
                  )}
                  
                  <div>
                    <h3 style={{
                      fontSize: isMobile ? '1.4rem' : '1.8rem',
                      fontWeight: 'bold',
                      margin: '0 0 1rem 0',
                      color: '#ffffff'
                    }}>
                      {policy.title}
                    </h3>
                    <p style={{
                      color: '#cbd5e0',
                      fontSize: isMobile ? '1rem' : '1.1rem',
                      lineHeight: '1.6',
                      margin: 0
                    }}>
                      {policy.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About IAMP Section - responsive padding */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
          padding: isMobile ? '2rem 1.5rem' : '4rem',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          marginBottom: isMobile ? '2rem' : '3rem'
        }}>
          <h2 style={{
            fontSize: isMobile ? '1.8rem' : '2.5rem',
            fontWeight: 'bold',
            marginBottom: isMobile ? '1.5rem' : '2rem',
            color: '#ffffff',
            textAlign: 'center'
          }}>
            About IAMP
          </h2>
          <p style={{
            fontSize: isMobile ? '1.1rem' : '1.3rem',
            color: '#cbd5e0',
            lineHeight: '1.7',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            IAMP is committed to supporting the next generation of maritime leaders, especially young professionals (aged 25–35), 
            by offering networking, career advancement, and international exposure opportunities.
          </p>
        </div>

        {/* Contact Section - responsive layout */}
        <div style={{
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
          padding: isMobile ? '2rem 1.5rem' : '3rem',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          marginBottom: isMobile ? '3rem' : '5rem'
        }}>
          <h3 style={{
            fontSize: isMobile ? '1.5rem' : '1.8rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#ffffff'
          }}>
            Questions About Event Admission?
          </h3>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.1rem',
            color: '#cbd5e0',
            marginBottom: '2rem'
          }}>
            Contact our events team for clarification on admission requirements or registration assistance.
          </p>
          <div style={{
            display: 'flex',
            gap: isMobile ? '1rem' : '2rem',
            justifyContent: 'center',
            flexDirection: isMobile ? 'column' : 'row',
            flexWrap: isMobile ? 'nowrap' : 'wrap'
          }}>
            <div style={{
              background: 'rgba(0, 212, 255, 0.1)',
              padding: isMobile ? '0.75rem 1.5rem' : '1rem 2rem',
              borderRadius: '10px',
              border: '1px solid rgba(0, 212, 255, 0.3)'
            }}>
              <strong style={{ color: '#00d4ff' }}>Email:</strong><br />
              <span style={{ color: '#cbd5e0' }}>events@iamp.org</span>
            </div>
            <div style={{
              background: 'rgba(0, 212, 255, 0.1)',
              padding: isMobile ? '0.75rem 1.5rem' : '1rem 2rem',
              borderRadius: '10px',
              border: '1px solid rgba(0, 212, 255, 0.3)'
            }}>
              <strong style={{ color: '#00d4ff' }}>Phone:</strong><br />
              <span style={{ color: '#cbd5e0' }}>+1 (555) 123-4567</span>
            </div>
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
      <IAMPFooter />
    </div>
  );
}