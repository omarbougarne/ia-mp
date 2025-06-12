import React from 'react';
import { 
  Calendar, 
  Award, 
  Globe, 
  Users, 
  Ship, 
  Anchor,
  TrendingUp,
  MapPin,
  Clock
} from 'lucide-react';
import IAMPNavbar from './IAMPNavbar'; // Import the navbar component
import IAMPFooter from './IAMPFooter'; // Import the footer component
export default function OurHistory() {
  const timelineEvents = [
    {
      year: "1998",
      title: "Foundation",
      description: "IAMP was established to create a unified voice for maritime professionals and promote excellence in the industry.",
      icon: <Anchor style={{ width: '1.5rem', height: '1.5rem' }} />,
      highlight: true
    },
    {
      year: "2001",
      title: "First International Conference",
      description: "Hosted our inaugural international maritime conference, bringing together industry leaders from 15 countries.",
      icon: <Globe style={{ width: '1.5rem', height: '1.5rem' }} />
    },
    {
      year: "2005",
      title: "Certification Program Launch",
      description: "Introduced comprehensive professional certification programs for maritime professionals worldwide.",
      icon: <Award style={{ width: '1.5rem', height: '1.5rem' }} />
    },
    {
      year: "2008",
      title: "Global Expansion",
      description: "Established regional chapters across Europe, Asia, and the Americas, expanding our global reach.",
      icon: <MapPin style={{ width: '1.5rem', height: '1.5rem' }} />
    },
    {
      year: "2012",
      title: "Digital Transformation",
      description: "Launched our digital platform, enabling online learning and virtual networking for members worldwide.",
      icon: <TrendingUp style={{ width: '1.5rem', height: '1.5rem' }} />
    },
    {
      year: "2015",
      title: "Industry Partnerships",
      description: "Formed strategic partnerships with leading maritime companies and educational institutions globally.",
      icon: <Users style={{ width: '1.5rem', height: '1.5rem' }} />
    },
    {
      year: "2018",
      title: "Sustainability Initiative",
      description: "Launched the Maritime Sustainability Initiative, promoting environmental responsibility in the industry.",
      icon: <Ship style={{ width: '1.5rem', height: '1.5rem' }} />
    },
    {
      year: "2023",
      title: "25 Years of Excellence",
      description: "Celebrating 25 years of serving the maritime community with over 118 corporate members and 5,000+ professionals.",
      icon: <Calendar style={{ width: '1.5rem', height: '1.5rem' }} />,
      highlight: true
    }
  ];

  const milestones = [
    { number: "25+", label: "Years of Service", icon: <Clock style={{ width: '2rem', height: '2rem' }} /> },
    { number: "118+", label: "Corporate Members", icon: <Users style={{ width: '2rem', height: '2rem' }} /> },
    { number: "5,000+", label: "Professional Members", icon: <Globe style={{ width: '2rem', height: '2rem' }} /> },
    { number: "50+", label: "Countries Served", icon: <MapPin style={{ width: '2rem', height: '2rem' }} /> }
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
        marginBottom:'200px'
      }} 
      > <IAMPNavbar /> 
      </div>
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '5%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(45, 53, 97, 0.3) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite reverse'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        
          
          <h1 style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #0099cc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Our History
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: '#cbd5e0',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            From humble beginnings to global leadership - discover the journey that has shaped IAMP into the world's premier maritime professional association.
          </p>
        </div>

        {/* Key Milestones */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '5rem'
        }}>
          {milestones.map((milestone, index) => (
            <div key={index} style={{
              textAlign: 'center',
              padding: '2.5rem',
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
              borderRadius: '20px',
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
                {milestone.icon}
              </div>
              <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#00d4ff',
                marginBottom: '0.5rem'
              }}>
                {milestone.number}
              </div>
              <div style={{
                fontSize: '1.1rem',
                color: '#cbd5e0',
                fontWeight: '500'
              }}>
                {milestone.label}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Section */}
        <div style={{ marginBottom: '5rem' }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Our Journey Through Time
          </h2>

          <div style={{ position: 'relative' }}>
            {/* Timeline Line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '4px',
              height: '100%',
              background: 'linear-gradient(180deg, #00d4ff, #0099cc)',
              borderRadius: '2px'
            }} />

            {timelineEvents.map((event, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '4rem',
                position: 'relative',
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
              }}>
                {/* Content */}
                <div style={{
                  width: '45%',
                  padding: index % 2 === 0 ? '0 3rem 0 0' : '0 0 0 3rem'
                }}>
                  <div style={{
                    background: event.highlight 
                      ? 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(45, 53, 97, 0.3))'
                      : 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
                    padding: '2.5rem',
                    borderRadius: '20px',
                    border: event.highlight 
                      ? '2px solid #00d4ff'
                      : '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    textAlign: index % 2 === 0 ? 'right' : 'left'
                  }}>
                    <div style={{
                      fontSize: '2rem',
                      fontWeight: 'bold',
                      color: '#00d4ff',
                      marginBottom: '1rem'
                    }}>
                      {event.year}
                    </div>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: '#ffffff',
                      marginBottom: '1rem'
                    }}>
                      {event.title}
                    </h3>
                    <p style={{
                      color: '#cbd5e0',
                      fontSize: '1.1rem',
                      lineHeight: '1.6'
                    }}>
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Center Icon */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '4rem',
                  height: '4rem',
                  background: event.highlight 
                    ? 'linear-gradient(135deg, #00d4ff, #0099cc)'
                    : 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(45, 53, 97, 0.3))',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '4px solid #0a0e27',
                  color: event.highlight ? '#ffffff' : '#00d4ff',
                  zIndex: 1
                }}>
                  {event.icon}
                </div>

                {/* Spacer */}
                <div style={{ width: '45%' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div style={{
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
          padding: '4rem',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            color: '#ffffff'
          }}>
            Our Mission Continues
          </h2>
          <p style={{
            fontSize: '1.3rem',
            color: '#cbd5e0',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            For over 25 years, IAMP has been dedicated to advancing the maritime industry through professional development, 
            networking, and knowledge sharing. As we look to the future, we remain committed to supporting maritime 
            professionals and fostering innovation in our ever-evolving industry.
          </p>
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