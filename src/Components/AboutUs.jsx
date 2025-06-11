import React from 'react';

// Styles defined within the component file
const styles = {
  aboutUsContainer: {
    width: '70%',
    // margin: '0 auto',
    // padding: '40px 20px',
    backgroundColor: '#FFFFFF', 
  },
  aboutSection: {
    display: 'flex',
    marginBottom: '80px',
    alignItems: 'center',
    gap: '40px',
  },
  aboutImageContainer: {
    flex: 1,
  },
  aboutImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  },
  aboutContent: {
    flex: 1,
  },
  sectionTitle: {
    color: '#a85400',
    fontSize: '2rem',
    marginBottom: '20px',
  },
  organizationName: {
    fontSize: '2.5rem',
    marginBottom: '30px',
    color: '#222',
  },
  organizationDescription: {
    fontSize: '1.1rem',
    lineHeight: 1.6,
    color: '#555',
  },
  testimonialsSection: {
    marginTop: '60px',
  },
  testimonialsTitle: {
    color: '#a85400',
    fontSize: '2rem',
    marginBottom: '40px',
    textAlign: 'center',
  },
  testimonialsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'space-between',
  },
  testimonialCard: {
    backgroundColor: '#f9f9f9',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    flex: 1,
    minWidth: '250px',
  },
  testimonialText: {
    fontSize: '1.1rem',
    color: '#333',
    lineHeight: 1.5,
  },
};

// For responsive styles
const useResponsiveStyles = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const isMobile = windowWidth <= 768;
  
  return {
    aboutSection: {
      ...styles.aboutSection,
      flexDirection: isMobile ? 'column' : 'row',
    },
    testimonialCard: {
      ...styles.testimonialCard,
      minWidth: isMobile ? '100%' : '250px',
    }
  };
};

export default function AboutUs() {
  const responsiveStyles = useResponsiveStyles();
  
  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: '#FFFFFF',
      display: 'flex',
      justifyContent: 'center',
      margin: 0,
      padding: 0,
    }}>
      <div style={styles.aboutUsContainer}>
        {/* About Us Section */}
        <div style={responsiveStyles.aboutSection}>
          <div style={styles.aboutImageContainer}>
            <img 
              src="/images/maritime-worker.jpg" 
              alt="Maritime professional climbing ladder on ship" 
              style={styles.aboutImage} 
            />
          </div>
          
          <div style={styles.aboutContent}>
            <h2 style={styles.sectionTitle}>Who We Are</h2>
            
            <h1 style={styles.organizationName}>
              The International Association of Maritime Professionals
            </h1>
            
            <p style={styles.organizationDescription}>
              Since 2011, the International Association of Maritime Professionals (IAMP) has 
              empowered a global network of over 118 maritime companies and experts. 
              We represent, connect, and support professionals across all sectors of the maritime 
              industry – from port operations and shipping to offshore services and training.
            </p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div style={styles.testimonialsSection}>
          <h2 style={styles.testimonialsTitle}>What Our Clients Are Saying</h2>
          
          <div style={styles.testimonialsContainer}>
            <div style={responsiveStyles.testimonialCard}>
              <p style={styles.testimonialText}>
                Being part of IAMP has transformed how we operate in the maritime sector.
              </p>
            </div>
            
            <div style={responsiveStyles.testimonialCard}>
              <p style={styles.testimonialText}>
                IAMP is the most valuable professional network in the maritime industry.
              </p>
            </div>
            
            <div style={responsiveStyles.testimonialCard}>
              <p style={styles.testimonialText}>
                Joining IAMP gave me access to resources I couldn't find anywhere else.
              </p>
            </div>
            
            <div style={responsiveStyles.testimonialCard}>
              <p style={styles.testimonialText}>
                Thanks to IAMP, I accessed key industry connections that advanced my career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
