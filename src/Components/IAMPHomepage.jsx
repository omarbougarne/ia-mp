import React, { useState, useEffect } from 'react';
import { Star, ChevronDown, Users, Award, Globe, Shield, Anchor, Waves, ArrowRight, Mail, Phone, MapPin, Menu, X, Building, Truck, BookOpen, Calendar, Plus, Minus, ShoppingCart } from 'lucide-react';
import IAMPNavbar from './IAMPNavbar'; // Import the navbar component
import IAMPFooter from './IAMPFooter'; // Import the footer component
import { Link } from 'react-router-dom';
import ypsnLogo from '../assets/ypsn-logo.png';
import smmLogo from '../assets/smm_logo_1_175-1.png';
import fpsLogo from '../assets/fpslimited_logo.png';
import iccLogo from '../assets/international-chamber-of-commerce.png';
import marineLogo from '../assets/logo_Marine_nationale.png';

const IAMPHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
      text: "IAMP's programs provided exactly the compliance training we needed. Clear, comprehensive, and globally recognized.",
      author: "John Walker",
      company: "Atlantic Marine",
      rating: 5
    },
    {
      text: "Their guidance on international certifications helped our entire team scale their competencies across ISM and MLC standards.",
      author: "Paul Newman",
      company: "CEO, OceanGuard Ltd",
      rating: 4
    },
    {
      text: "Professional, responsive, and deeply rooted in the maritime sector. IAMP is a true partner in global safety.",
      author: "Anna Doe",
      company: "Senior Officer, Port Safety Association",
      rating: 5
    }
  ];

  const projects = [
    {
      title: "Capacity Building Programs",
      description: "Comprehensive training for seafarers and shore staff",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Sustainability Projects",
      description: "Protecting the marine environment for future generations",
      icon: <Waves className="w-8 h-8" />
    },
    {
      title: "Educational Initiatives",
      description: "Global partnerships with leading maritime academies",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Safety & Compliance",
      description: "Raising awareness through worldwide campaigns",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const workItems = [
    {
      title: "Port and Terminal Safety Projects",
      description: "Comprehensive safety protocols and training for port operations",
      icon: <Building className="w-8 h-8" />
    },
    {
      title: "Marine Environment Protection Initiatives",
      description: "Programs focused on preserving marine ecosystems and biodiversity",
      icon: <Waves className="w-8 h-8" />
    },
    {
      title: "Certification and Compliance Training Programs",
      description: "Industry-standard certifications meeting international maritime requirements",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Workshops, Seminars & Industry Conferences",
      description: "Knowledge sharing events bringing together maritime professionals worldwide",
      icon: <Calendar className="w-8 h-8" />
    }
  ];

  const trustedPartners = [
    { name: "YPSN", logoUrl: ypsnLogo },
    { name: "SMM", logoUrl: smmLogo },
    { name: "FPS Limited", logoUrl: fpsLogo },
    { name: "International Chamber of Commerce", logoUrl: iccLogo },
    { name: "Marine Nationale", logoUrl: marineLogo }
  ];

  const faqItems = [
    {
      question: "Who can join IAMP?",
      answer: "The International Association of Maritime Professionals is open to seafarers, maritime students, officers, and institutions worldwide. We welcome anyone passionate about advancing maritime excellence."
    },
    {
      question: "Are IAMP certifications internationally recognized?",
      answer: "Yes. Our training and certifications follow IMO standards and are accepted by maritime institutions globally. Our programs meet international compliance requirements."
    },
    {
      question: "How long do certification programs take?",
      answer: "Most programs take 1–4 weeks depending on the course level. Certification is issued immediately after successful completion of assessments."
    },
    {
      question: "Do you support maritime students?",
      answer: "Absolutely. We support students and aspiring professionals through mentorship, training, and networking opportunities. Special rates available for students."
    },
    {
      question: "What does membership include?",
      answer: "Membership includes a digital certificate, training discounts, event access, and inclusion in the IAMP member directory. Additional benefits vary by membership tier."
    }
  ];

  const pricingPlans = [
    {
      name: "Associate",
      type: "MEMBER",
      subtitle: "Aspiring professionals / mid-career",
      price: "Basic",
      features: [
        "50% E-discount",
        "Advanced Certificate (1 included)",
        "Digital community platform",
        "Certificate + ID Card",
        "Free access to all IAMP events"
      ],
      popular: false
    },
    {
      name: "Fellow",
      type: "MEMBER",
      subtitle: "Senior individuals / Experts",
      price: "Professional",
      features: [
        "60% E-discount",
        "Advanced Certificate (1 included)",
        "Certificate + ID Card",
        "Digital community platform",
        "Free access to all IAMP events",
        "CV inserted into IAMP job network"
      ],
      popular: true
    },
    {
      name: "Corporate",
      type: "MEMBER",
      subtitle: "Companies / Organizations",
      price: "Premium",
      features: [
        "60% E-discount",
        "Advanced Certificate (1 included)",
        "Company Certificate + ID Card",
        "Free Access to 3 Webinars / Year",
        "Free access to all IAMP events",
        "CV inserted into IAMP job network",
        "Company branding allowed"
      ],
      popular: false
    }
  ];

  const portfolioItems = [
    {
      title: "Port Safety Training",
      location: "Casablanca, Morocco",
      image: "https://i.pinimg.com/736x/35/fa/b5/35fab5d7a9abb7a39307568afe54aa1c.jpg"
    },
    {
      title: "Maritime Environment Campaign",
      location: "West Africa",
      image: "https://i.pinimg.com/736x/1f/55/e6/1f55e66a0cbe03715b5c23b317d39b68.jpg"
    },
    {
      title: "Global Certification Program",
      location: "Marine Institute Partnership",
      image: "https://i.pinimg.com/736x/4c/f4/4a/4cf44abedc7a0514c6417005105c2f21.jpg"
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
      <section id="home" style={{
        minHeight: '100vh',
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
        
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h1 style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              lineHeight: '1.1',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #0099cc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              WELCOME TO IAMP
            </h1>
            <h2 style={{
              fontSize: '1.5rem',
              color: '#a0aec0',
              marginBottom: '2rem',
              fontWeight: '300'
            }}>
              Empowering the Next Generation of Maritime Professionals
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#cbd5e0',
              marginBottom: '3rem',
              lineHeight: '1.6'
            }}>
              Whether you're just starting or advancing in your career, IAMP offers globally recognized certifications and a support network designed to help you succeed in the maritime industry.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
            <a
              href="/pricing"
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
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
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
              View Programs & Pricing<ArrowRight style={{ width: '1.2rem', height: '1.2rem' }} />
            </a>
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
          
          <div style={{ position: 'relative' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
              borderRadius: '20px',
              padding: '2rem',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
            }}>
              <img 
                src="https://i.pinimg.com/736x/e1/2b/27/e12b272ed309f9432f791340c4257a94.jpg"
                alt="Maritime Professional"
                style={{
                  width: '100%',
                  height: '400px',
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

      {/* About Section */}
      <section id="about" style={{ padding: '6rem 0', position: 'relative' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>About Us</h2>
            <p style={{ fontSize: '1.2rem', color: '#a0aec0', maxWidth: '800px', margin: '0 auto' }}>
              Founded in 2015, the International Association of Maritime Professionals (IAMP) is a global initiative dedicated to advancing excellence, safety, and professionalism across the maritime sector.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {[
              { icon: <Globe className="w-12 h-12" />, title: "Global Network", desc: "Connecting maritime professionals worldwide" },
              { icon: <Award className="w-12 h-12" />, title: "Excellence", desc: "Upholding the highest industry standards" },
              { icon: <Shield className="w-12 h-12" />, title: "Safety First", desc: "Promoting maritime safety and compliance" }
            ].map((item, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(45, 53, 97, 0.1))',
                padding: '2rem',
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
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: '#a0aec0' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="our-work" style={{ padding: '6rem 0', background: 'rgba(0, 0, 0, 0.2)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Our Work</h2>
            <p style={{ fontSize: '1.2rem', color: '#a0aec0', maxWidth: '800px', margin: '0 auto' }}>
              From industry training to international collaborations, IAMP's work spans across the global maritime sector. We proudly support:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {workItems.map((item, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
                padding: '2rem',
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
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: '#a0aec0' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '6rem 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Our Projects</h2>
            <p style={{ fontSize: '1.2rem', color: '#a0aec0', maxWidth: '800px', margin: '0 auto' }}>
              At IAMP, our mission comes to life through impactful projects that strengthen global maritime standards.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {projects.map((project, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
                padding: '2rem',
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
                  {project.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ color: '#a0aec0' }}>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: '6rem 0', background: 'rgba(0, 0, 0, 0.2)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>What People Say About Us</h2>

          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
            padding: '3rem',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} style={{ color: '#ffd700', width: '1.5rem', height: '1.5rem', fill: 'currentColor' }} />
              ))}
            </div>
            <p style={{ fontSize: '1.3rem', fontStyle: 'italic', marginBottom: '2rem', color: '#ffffff' }}>
              "{testimonials[currentTestimonial].text}"
            </p>
            <div>
              <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{testimonials[currentTestimonial].author}</p>
              <p style={{ color: '#a0aec0' }}>{testimonials[currentTestimonial].company}</p>
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

      {/* Pricing Section */}
      <section id="membership" style={{ padding: '6rem 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Our Pricing</h2>
            <p style={{ fontSize: '1.2rem', color: '#a0aec0', maxWidth: '800px', margin: '0 auto' }}>
              Become part of a global network of maritime professionals. Whether you're a student, officer, or institutional partner — there's a membership for you.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {pricingPlans.map((plan, index) => (
              <div key={index} style={{
                background: plan.popular 
                  ? 'linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(45, 53, 97, 0.3))'
                  : 'linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(45, 53, 97, 0.1))',
                padding: '2.5rem',
                borderRadius: '20px',
                border: plan.popular ? '2px solid #00d4ff' : '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                position: 'relative',
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
                {plan.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    MOST POPULAR
                  </div>
                )}
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{plan.price}</h3>
                  <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#00d4ff', marginBottom: '0.5rem' }}>{plan.name} {plan.type}</p>
                  <p style={{ color: '#a0aec0', marginBottom: '2rem' }}>{plan.subtitle}</p>
                  
                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                    {plan.features.map((feature, i) => (
                      <li key={i} style={{ padding: '0.5rem 0', color: '#cbd5e0' }}>✓ {feature}</li>
                    ))}
                  </ul>
                  
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" style={{ padding: '6rem 0', background: 'rgba(0, 0, 0, 0.2)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Our Portfolio</h2>
            <p style={{ fontSize: '1.2rem', color: '#a0aec0', maxWidth: '800px', margin: '0 auto' }}>
              Discover some of our flagship achievements and impactful collaborations that reflect IAMP's global commitment to maritime excellence.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
            {portfolioItems.map((item, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
                borderRadius: '20px',
                overflow: 'hidden',
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
                <img 
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: '#a0aec0' }}>{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section id="trusted-by" style={{ padding: '6rem 0' }}>
  <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
      <h2 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>Trusted By</h2>
      <p style={{ fontSize: '1.2rem', color: '#a0aec0', maxWidth: '800px', margin: '0 auto' }}>
        Leading maritime organizations worldwide rely on IAMP for professional development and certification.
      </p>
    </div>

    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
      gap: '2rem',
      alignItems: 'center'
    }}>
      {trustedPartners.map((partner, index) => (
        // Update the gradient in the trusted partners section
<div 
  key={index} 
  style={{
    background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(52, 61, 110, 0.25))',
    borderRadius: '15px',
    padding: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease',
    aspectRatio: '4/3',
    height: '150px'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-10px)';
    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.3)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
  }}
>
          <img 
            src={partner.logoUrl} 
            alt={partner.name} 
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain'
            }}
          />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section id="faq" style={{ padding: '6rem 0', background: 'rgba(0, 0, 0, 0.2)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Our F.A.Q.</h2>
            <p style={{ fontSize: '1.2rem', color: '#a0aec0', maxWidth: '800px', margin: '0 auto' }}>
              Here are some common questions about our membership, certifications, and services.
            </p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                style={{
                  background: openFaq === index 
                    ? 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))'
                    : 'linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(45, 53, 97, 0.1))',
                  borderRadius: '15px',
                  marginBottom: '1rem',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease'
                }}
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    padding: '1.5rem',
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    cursor: 'pointer'
                  }}
                >
                  {item.question}
                  <div style={{ transition: 'transform 0.3s ease', transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    {openFaq === index ? <Minus size={20} color="#00d4ff" /> : <Plus size={20} color="#00d4ff" />}
                  </div>
                </button>
                
                {openFaq === index && (
                  <div 
                    style={{
                      padding: '0 1.5rem 1.5rem',
                      color: '#a0aec0',
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      animation: 'fadeIn 0.3s ease-in-out'
                    }}
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step into Excellence CTA Section */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          padding: '3rem 2rem',
          background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Step into Excellence</h2>
          
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#a0aec0', 
            maxWidth: '800px', 
            margin: '0 auto 2rem auto' 
          }}>
            Join the international community of maritime professionals. Get recognized, stay updated, and advance your career.
          </p>
          
          <Link
            to="/signup"
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
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
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
            Become a Member Today <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section id="contact" style={{ padding: '6rem 0', background: 'rgba(0, 0, 0, 0.2)' }}>
  <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
      <h2 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>Contact Us</h2>
      <p style={{ fontSize: '1.2rem', color: '#a0aec0', maxWidth: '800px', margin: '0 auto' }}>
        Feel free to visit us at our location or contact us by phone or email. Whether it's about a project, a partnership, or just a question — we'd be happy to hear from you.
      </p>
    </div>

    {/* Two-column layout for contact info and form */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start', marginBottom: '4rem' }}>
      <div style={{
        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
        padding: '3rem',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)'
      }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>Get in Touch</h3>
        
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <MapPin style={{ color: '#00d4ff', width: '1.5rem', height: '1.5rem' }} />
            <div>
              <p style={{ fontWeight: 'bold' }}>Address</p>
              <p style={{ color: '#a0aec0' }}>71-75 Shelton Street, London, United Kingdom, WC2H 9JQ</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <Phone style={{ color: '#00d4ff', width: '1.5rem', height: '1.5rem' }} />
            <div>
              <p style={{ fontWeight: 'bold' }}>Phone</p>
              <p style={{ color: '#a0aec0' }}>+123 465 789</p>
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
        padding: '3rem',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)'
      }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>Send us a Message</h3>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <input
            type="text"
            placeholder="Your Name"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              padding: '1rem',
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
              padding: '1rem',
              color: 'white',
              fontSize: '1rem'
            }}
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              padding: '1rem',
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

    {/* Full-width map section */}
    <div style={{
      background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
      overflow: 'hidden',
      height: '450px',
      width: '100%',
      position: 'relative'
    }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.904291333163!2d-0.12542672392006585!3d51.51489101477579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ccaaa0b0a7%3A0xb1d31e024c84b040!2s71-75%20Shelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e0!3m2!1sen!2sus!4v1718188037063!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="IAMP London Office Location"
      ></iframe>
      
      {/* Optional: Add a subtle overlay for design consistency */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, transparent 100%)',
        pointerEvents: 'none' // Makes the overlay non-interactive so map clicks work
      }}></div>
    </div>
  </div>
</section>

      {/* Footer */}
      <IAMPFooter />

      {/* Floating Action Button */}
      <div style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 990
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

export default IAMPHomepage;