import React, { useState, useEffect } from 'react';
import { ArrowRight, Globe, Users, Award, Shield, ExternalLink, Building, Anchor, Waves, Phone, Mail, MapPin } from 'lucide-react';
import IAMPNavbar from './IAMPNavbar'; // Import the navbar component
import IAMPFooter from './IAMPFooter'; // Import the footer component

// Import partner images
import SSNLogo from '../assets/seaskillsNetwork.png';
import UKRLPLogo from '../assets/UKRLP.png';
import CPDLogo from '../assets/CPD.png';
import ECSALogo from '../assets/ECSA.png';
import MaritimeAcademyLogo from '../assets/MaritimeAcademyTraining.png';
import DNVGLLogo from '../assets/dnv-gl-certification-logo.png';

const IAMPPartnersPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const partners = [
    {
      name: "SSN",
      title: "Sea Skills Network",
      description: "Sea Skills Network est une équipe de professionnels maritimes avec plus de 10 ans d'expérience, offrant un soutien unique en conception, construction et exploitation de navires. Leur expertise couvre les paquebots de prestige, les chantiers navals, les sociétés de classification, les opérateurs maritimes, les fournisseurs IT et l'ingénierie marine.",
      icon: <Waves className="w-12 h-12" />,
      logo: SSNLogo,
      category: "Maritime Services"
    },
    {
      name: "UKRLP",
      title: "United Kingdom Register of Learning Providers",
      description: "IMT is registered with the United Kingdom Register of Learning Providers, as a verified UK learning provider. The United Kingdom Register of Learning Providers (UKRLP) is an official Government Register of Verified Learning Providers in the UK and is used by government departments agencies such as the Learning and Skills Council, Careers Advice Service, HESA, HEFCE and UCAS, and by learners and employers.",
      icon: <Shield className="w-12 h-12" />,
      logo: UKRLPLogo,
      category: "Certification"
    },
    {
      name: "CPD Certification Service",
      title: "The CPD Certification Service",
      description: "Continuing Professional Development is a commitment to ongoing lifelong learning. CPD encourages looking forward and identifying opportunities to learn something new, refresh existing knowledge, improve skills, or simply keep up-to-date with the latest developments within a particular profession or industry.",
      icon: <Award className="w-12 h-12" />,
      logo: CPDLogo,
      category: "Professional Development"
    },
    {
      name: "ECSA",
      title: "European Community Shipowners' Association",
      description: "The European Community Shipowners' Association (ECSA) is the voice of the European shipping industry. Founded in 1965 as \"Comité des Associations d'Armateurs des Communautés Européennes (CAACE)\", ECSA promotes the interests of 20 member associations of the EU and Norway.",
      icon: <Globe className="w-12 h-12" />,
      logo: ECSALogo,
      category: "Industry Association"
    },
    {
      name: "Maritime Academy Training",
      title: "Maritime Academy Training",
      description: "Maritime Academy Training has provided hundreds of thousands of students from more than 185 countries with essential maritime skills and knowledge. Our education has helped students achieve a variety of career goals, everything from getting a promotion to starting a maritime business to pursuing new interests.",
      icon: <Users className="w-12 h-12" />,
      logo: MaritimeAcademyLogo,
      category: "Education & Training"
    },
    {
      name: "DNV GL",
      title: "DNV GL",
      description: "We are an independent expert in assurance and risk management. Driven by our purpose, to safeguard life, property and the environment, we empower our customers and their stakeholders with facts and reliable insights so that critical decisions can be made with confidence.",
      icon: <Building className="w-12 h-12" />,
      logo: DNVGLLogo,
      category: "Risk Management"
    }
  ];

  const partnerCategories = [
    { name: "Maritime Services", count: 1, color: "#00d4ff" },
    { name: "Certification", count: 1, color: "#0099cc" },
    { name: "Professional Development", count: 1, color: "#006699" },
    { name: "Industry Association", count: 1, color: "#004466" },
    { name: "Education & Training", count: 1, color: "#002233" },
    { name: "Risk Management", count: 1, color: "#001122" }
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
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingTop: '80px'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
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
            Our Partners
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: '#a0aec0',
            marginBottom: '2rem',
            fontWeight: '300',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            At IAMP, our mission comes to life through impactful partnerships that strengthen global maritime standards.
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

    

      {/* Partners Grid */}
      <section style={{ padding: '6rem 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Strategic Partners</h2>
            <p style={{ fontSize: '1.2rem', color: '#a0aec0', maxWidth: '800px', margin: '0 auto' }}>
              Meet our trusted partners who share our commitment to maritime excellence and professional development
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
            {partners.map((partner, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(169, 174, 202, 0.2))',
                padding: '2.5rem',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(0, 212, 255, 0.2)',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  color: '#00d4ff',
                  fontWeight: 'bold'
                }}>
                  {partner.category}
                </div>
                
                {/* Partner Logo */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  height: '80px',
                  padding: '1rem',
                  background: 'none',
                  borderRadius: '15px',
                }}>
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    style={{ 
                      maxHeight: '150px',
                      maxWidth: '200px',
                      objectFit: 'contain',
                      filter: 'brightness(1.1) contrast(1.1)'
                    }}
                    onError={(e) => {
                      // Fallback to icon if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div style={{ 
                    color: '#00d4ff', 
                    display: 'none' 
                  }}>
                    {partner.icon}
                  </div>
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#ffffff' }}>
                    {partner.name}
                  </h3>
                  <h4 style={{ fontSize: '1.2rem', color: '#00d4ff', marginBottom: '1rem', fontWeight: '600' }}>
                    {partner.title}
                  </h4>
                </div>
                
                <p style={{ 
                  color: '#a0aec0', 
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  fontSize: '0.95rem'
                }}>
                  {partner.description}
                </p>
                
                <a href="/signup" style={{
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  color: '#00d4ff',
  fontWeight: 'bold',
  fontSize: '0.9rem',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'all 0.3s ease'
}}
onMouseEnter={(e) => {
  e.currentTarget.style.gap = '1rem';
}}
onMouseLeave={(e) => {
  e.currentTarget.style.gap = '0.5rem';
}}>
  Read More
  <ExternalLink style={{ width: '1rem', height: '1rem' }} />
</a>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={{ padding: '6rem 0', background: 'rgba(0, 0, 0, 0.2)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
            padding: '4rem 2rem',
            borderRadius: '20px',
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
              Become a Partner
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#a0aec0',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}>
              Join our growing network of maritime industry leaders and help shape the future of maritime professional development.
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
                boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 8px 25px rgba(0, 212, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(0, 212, 255, 0.3)';
              }}>
                Partner With Us
                <ArrowRight style={{ width: '1.2rem', height: '1.2rem' }} />
              </button>
              
              <button style={{
                background: 'transparent',
                border: '2px solid rgba(255, 255, 255, 0.2)',
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
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.target.style.background = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

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

export default IAMPPartnersPage;