import React, { useState, useEffect } from 'react';
import { Star, ChevronDown, Users, Award, Globe, Shield, Anchor, Waves, ArrowRight, Mail, Phone, MapPin, Menu, X, Check, Crown, Building, User, GraduationCap } from 'lucide-react';
import IAMPFooter from './IAMPFooter'; // Import the footer component
import IAMPNavbar from './IAMPNavbar'; // Import the navbar component

const IAMPPricingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const membershipPlans = [
    {
      id: 'student',
      name: 'Student Member',
      type: 'MEMBER',
      subtitle: 'Maritime professionals',
      icon: <GraduationCap className="w-8 h-8" />,
      price: 'Sign up',
      idealFor: 'Maritime professionals',
      discount: '50% E-discount',
      certificate: 'Basic Certificate (1 included)',
      materials: 'Certificate + ID Card',
      platform: 'Digital community platform',
      events: 'Free access to all IAMP events',
      jobPlacement: false,
      logoUse: false,
      features: [
        '50% E-discount on training',
        'Basic Certificate included',
        'Digital community platform access',
        'Certificate + ID Card',
        'Free access to all IAMP events'
      ],
      popular: false,
      color: 'rgba(0, 212, 255, 0.1)'
    },
    {
      id: 'associate',
      name: 'Associate Member',
      type: 'MEMBER',
      subtitle: 'Aspiring professionals / mid-career',
      icon: <User className="w-8 h-8" />,
      price: 'Sign up',
      idealFor: 'Aspiring professionals / mid-career',
      discount: '50% E-discount',
      certificate: 'Advanced Certificate (1 included for 1 employee)',
      materials: 'Certificate + ID Card',
      platform: 'Digital community platform',
      events: 'Free access to all IAMP events',
      jobPlacement: false,
      logoUse: false,
      features: [
        '50% E-discount on training',
        'Advanced Certificate (1 included for 1 employee)',
        'Digital community platform access',
        'Certificate + ID Card',
        'Free access to all IAMP events'
      ],
      popular: true,
      color: 'rgba(0, 212, 255, 0.15)'
    },
    {
      id: 'fellow',
      name: 'Fellow Member',
      type: 'MEMBER',
      subtitle: 'Senior individuals / Experts',
      icon: <Crown className="w-8 h-8" />,
      price: 'Sign up',
      idealFor: 'Senior individuals / Experts',
      discount: '60% E-discount',
      certificate: 'Advanced Certificate (1 included)',
      materials: 'Certificate + ID Card',
      platform: 'Digital community platform',
      events: 'Free access to all IAMP events',
      jobPlacement: true,
      logoUse: true,
      features: [
        '60% E-discount on training',
        'Advanced Certificate included',
        'Digital community platform access',
        'Certificate + ID Card',
        'Free access to all IAMP events',
        'CV inserted into IAMP job network',
        'Logo usage rights'
      ],
      popular: false,
      color: 'rgba(255, 215, 0, 0.1)'
    },
    {
      id: 'corporate',
      name: 'Corporate Member',
      type: 'MEMBER',
      subtitle: 'Companies / Organizations',
      icon: <Building className="w-8 h-8" />,
      price: 'Sign up',
      idealFor: 'Companies / Organizations',
      discount: '60% E-discount',
      certificate: 'Advanced Certificate (1 included)',
      materials: 'Company Certificate + ID Card',
      platform: 'Digital community platform',
      events: 'Free access to all IAMP events',
      jobPlacement: true,
      logoUse: true,
      features: [
        '60% E-discount on training',
        'Advanced Certificate included',
        'Digital community platform access',
        'Company Certificate + ID Card',
        'Free access to all IAMP events',
        'CV inserted into IAMP job network',
        'Company branding allowed'
      ],
      popular: false,
      color: 'rgba(45, 53, 97, 0.2)'
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Globally Recognized Certification",
      description: "Earn certificates that are recognized and respected worldwide in the maritime industry."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Professional Network",
      description: "Connect with maritime professionals from around the globe through our exclusive platform."
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "International Events",
      description: "Free access to webinars, conferences, and networking events worldwide."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Career Support",
      description: "Get your CV featured in our job network and advance your maritime career."
    }
  ];

  const faqs = [
    {
      question: "What's included in the membership fee?",
      answer: "Each membership includes certification, ID card, platform access, event participation, and various discounts based on your membership level."
    },
    {
      question: "How do I upgrade my membership?",
      answer: "You can upgrade your membership at any time by contacting our support team. The price difference will be calculated based on your current membership duration."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No, there are no hidden fees. All costs are transparently displayed, and you only pay for additional services you choose to purchase."
    },
    {
      question: "Can I cancel my membership?",
      answer: "You can cancel your membership at any time. Please refer to our terms and conditions for specific cancellation policies."
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
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingTop: '120px',
        paddingBottom: '4rem'
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
            Our Membership Plans
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: '#a0aec0',
            marginBottom: '2rem',
            maxWidth: '800px',
            margin: '0 auto 2rem auto',
            lineHeight: '1.6'
          }}>
            Join the International Association of Maritime Professionals and unlock exclusive benefits, 
            training discounts, and networking opportunities tailored to your career stage.
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

      {/* Benefits Section */}
      <section style={{ padding: '4rem 0', background: 'rgba(0, 0, 0, 0.1)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Why Choose IAMP Membership?</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {benefits.map((benefit, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
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
                  {benefit.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{benefit.title}</h3>
                <p style={{ color: '#a0aec0', lineHeight: '1.5' }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
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
            }}>Choose Your Membership</h2>
            <p style={{ fontSize: '1.2rem', color: '#a0aec0', maxWidth: '800px', margin: '0 auto' }}>
              Select the membership that best fits your career stage and professional goals.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {membershipPlans.map((plan, index) => (
              <div key={plan.id} style={{
                background: plan.popular 
                  ? 'linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(45, 53, 97, 0.3))'
                  : 'linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(45, 53, 97, 0.15))',
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
                    MOST POPULAR
                  </div>
                )}

                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <div style={{ color: '#00d4ff', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                    {plan.icon}
                  </div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{plan.name}</h3>
                  <p style={{ color: '#a0aec0', marginBottom: '1rem' }}>{plan.subtitle}</p>
                  <div style={{ 
                    fontSize: '2.5rem', 
                    fontWeight: 'bold', 
                    color: '#00d4ff',
                    marginBottom: '0.5rem'
                  }}>
                    {plan.price}
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', color: '#ffffff' }}>
                    What's Included:
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {plan.features.map((feature, i) => (
                      <li key={i} style={{ 
                        padding: '0.5rem 0', 
                        color: '#cbd5e0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <Check style={{ color: '#00d4ff', width: '1rem', height: '1rem', flexShrink: 0 }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button style={{
                  width: '100%',
                  background: plan.popular 
                    ? 'linear-gradient(135deg, #00d4ff, #0099cc)'
                    : 'transparent',
                  border: plan.popular ? 'none' : '2px solid #00d4ff',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (!plan.popular) {
                    e.target.style.background = 'linear-gradient(135deg, #00d4ff, #0099cc)';
                  }
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(0, 212, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  if (!plan.popular) {
                    e.target.style.background = 'transparent';
                  }
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}>
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section style={{ padding: '6rem 0', background: 'rgba(0, 0, 0, 0.2)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Detailed Comparison</h2>
            <p style={{ fontSize: '1.1rem', color: '#a0aec0' }}>
              Compare all features across our membership tiers to find the perfect fit.
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(45, 53, 97, 0.1))',
            borderRadius: '20px',
            padding: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            overflowX: 'auto'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '1rem', fontSize: '1.1rem', fontWeight: 'bold', color: '#ffffff' }}>
                    Features
                  </th>
                  {membershipPlans.map((plan) => (
                    <th key={plan.id} style={{ 
                      textAlign: 'center', 
                      padding: '1rem', 
                      fontSize: '1.1rem', 
                      fontWeight: 'bold',
                      color: plan.popular ? '#00d4ff' : '#ffffff'
                    }}>
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Ideal For', key: 'idealFor' },
                  { label: 'Training Discount', key: 'discount' },
                  { label: 'Certificate Access', key: 'certificate' },
                  { label: 'Membership Materials', key: 'materials' },
                  { label: 'Platform Access', key: 'platform' },
                  { label: 'Event Access', key: 'events' },
                  { label: 'Job Placement', key: 'jobPlacement' },
                  { label: 'Logo Usage', key: 'logoUse' }
                ].map((feature, index) => (
                  <tr key={feature.key} style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <td style={{ padding: '1rem', fontWeight: '500', color: '#ffffff' }}>
                      {feature.label}
                    </td>
                    {membershipPlans.map((plan) => (
                      <td key={plan.id} style={{ 
                        textAlign: 'center', 
                        padding: '1rem', 
                        color: '#a0aec0',
                        fontSize: '0.9rem'
                      }}>
                        {feature.key === 'jobPlacement' || feature.key === 'logoUse' ? (
                          plan[feature.key] ? (
                            <Check style={{ color: '#00d4ff', width: '1.2rem', height: '1.2rem', margin: '0 auto' }} />
                          ) : (
                            <span style={{ color: '#666' }}>—</span>
                          )
                        ) : (
                          <span style={{ fontSize: '0.85rem', lineHeight: '1.3' }}>
                            {plan[feature.key]}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '6rem 0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Frequently Asked Questions</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(45, 53, 97, 0.1))',
                borderRadius: '15px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                overflow: 'hidden'
              }}>
                <div style={{
                  padding: '1.5rem',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 212, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    {faq.question}
                  </h3>
                  <p style={{ color: '#a0aec0', lineHeight: '1.5' }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
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

export default IAMPPricingPage;