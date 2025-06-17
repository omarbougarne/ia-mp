import React, { useState, useEffect } from 'react';
import { Anchor, Mail, Lock, Eye, EyeOff, ArrowRight, Shield, Users, Globe, User, Phone, Building, AlertCircle, Check, X } from 'lucide-react';
import IAMPNavbar from './IAMPNavbar';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    password: '',
    confirmPassword: ''
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
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

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      setError('Please fill in all required fields');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (!agreeToTerms) {
      setError('Please agree to the Terms of Service and Privacy Policy');
      return;
    }
    
    setLoading(true);
    setError('');
  
    try {
      const response = await fetch(`${apiUrl}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subscribeNewsletter
        }),
      });
  
      const data = await response.json();
      console.log('Server response:', data);
      
      if (response.ok) {
        // Success - show the success modal
        setShowSuccessModal(true);
        
        // Optionally clear the form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          password: '',
          confirmPassword: ''
        });
        setAgreeToTerms(false);
        setSubscribeNewsletter(true);
      } else {
        // Handle server errors
        setError(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };
  const goToSignIn = () => {
    navigate('/signin');
  };

  // Success Modal Component with responsiveness
  const SuccessModal = () => (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(10, 14, 39, 0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      backdropFilter: 'blur(5px)'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #1a1f3a 0%, #2d3561 100%)',
        borderRadius: '20px',
        padding: isMobile ? '2rem' : '3rem',
        maxWidth: '500px',
        width: isMobile ? '90%' : '80%',
        border: '1px solid rgba(0, 212, 255, 0.3)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        animation: 'fadeIn 0.3s ease-out'
      }}>
        <button 
          onClick={() => setShowSuccessModal(false)}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            color: '#a0aec0',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
        >
          <X size={20} />
        </button>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div style={{
            background: 'rgba(0, 212, 255, 0.1)',
            borderRadius: '50%',
            width: isMobile ? '60px' : '80px',
            height: isMobile ? '60px' : '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem'
          }}>
            <Check style={{ color: '#00d4ff', width: isMobile ? '30px' : '40px', height: isMobile ? '30px' : '40px' }} />
          </div>
          
          <h2 style={{
            fontSize: isMobile ? '1.5rem' : '1.8rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Account Created Successfully!
          </h2>
          
          <p style={{
            fontSize: isMobile ? '1rem' : '1.1rem',
            color: '#cbd5e0',
            marginBottom: '1.5rem',
            lineHeight: '1.6'
          }}>
            Thank you for joining IAMP. We've sent a verification email to your email address.
            Please verify your email to complete the registration process.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            width: '100%',
            justifyContent: 'center',
            flexDirection: isMobile ? 'column' : 'row'
          }}>
            <button
              onClick={() => setShowSuccessModal(false)}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '0.75rem 1.5rem',
                borderRadius: '10px',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              Close
            </button>
            
            <button
              onClick={goToSignIn}
              style={{
                background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '10px',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
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
              Sign In <ArrowRight style={{ width: '0.9rem', height: '0.9rem' }} />
            </button>
          </div>
        </div>
      </div>

      {/* Animation for modal */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );

  return (
    <div style={{
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 25%, #2d3561 50%, #1a1f3a 75%, #0a0e27 100%)',
      minHeight: '100vh',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Use the navbar component */}
      <IAMPNavbar />
      
      {/* Animated Background Elements - smaller on mobile */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: isMobile ? '150px' : '300px',
        height: isMobile ? '150px' : '300px',
        background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite',
        marginTop: '50px'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: isMobile ? '120px' : '200px',
        height: isMobile ? '120px' : '200px',
        background: 'radial-gradient(circle, rgba(45, 53, 97, 0.3) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite reverse'
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '0%',
        width: isMobile ? '100px' : '150px',
        height: isMobile ? '100px' : '150px',
        background: 'radial-gradient(circle, rgba(0, 212, 255, 0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 10s ease-in-out infinite'
      }} />

      <div style={{
        display: isMobile ? 'flex' : 'grid',
        gridTemplateColumns: '1fr 1fr',
        flexDirection: isMobile ? 'column' : 'row',
        maxWidth: '1400px',
        width: '100%',
        margin: '0 auto',
        padding: isMobile ? '1rem 0.5rem 1rem 0' : '2rem',  // Added right padding on mobile
        gap: isMobile ? '2rem' : '4rem',
        alignItems: isMobile ? 'stretch' : 'center'
      }}>
        {/* Left Side - Branding and Info */}
        <div style={{ 
          padding: isMobile ? '1rem 0 1rem 0.75rem' : '2rem 0',  // Added left padding to move right
          marginTop: isMobile ? '1.5rem' : '0'  // Push down from top on mobile
        }}>
          <h1 style={{
            fontSize: isMobile ? '2.2rem' : '3rem',
            fontWeight: 'bold',
            lineHeight: '1.1',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #0099cc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Join IAMP Today
          </h1>

          <p style={{
            fontSize: isMobile ? '1.1rem' : '1.2rem',
            color: '#cbd5e0',
            marginBottom: isMobile ? '1.5rem' : '2rem',
            lineHeight: '1.6'
          }}>
            Create your account and become part of the world's leading maritime professional network.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { icon: <Users style={{ width: '1.5rem', height: '1.5rem' }} />, text: 'Join 118+ Maritime Companies' },
              { icon: <Globe style={{ width: '1.5rem', height: '1.5rem' }} />, text: 'Access Global Opportunities' },
              { icon: <Shield style={{ width: '1.5rem', height: '1.5rem' }} />, text: 'Professional Certifications' }
            ].map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: '#00d4ff' }}>{item.icon}</div>
                <span style={{ color: '#a0aec0', fontSize: isMobile ? '1rem' : '1.1rem' }}>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Only show this on desktop or at the bottom on mobile */}
          {!isMobile && (
            <div style={{
              marginTop: '3rem',
              padding: '1.5rem',
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(45, 53, 97, 0.1))',
              borderRadius: '15px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <p style={{ color: '#00d4ff', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                Already have an account?
              </p>
              <button
                onClick={goToSignIn}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  padding: 0
                }}
                onMouseEnter={(e) => e.target.style.color = '#00d4ff'}
                onMouseLeave={(e) => e.target.style.color = '#ffffff'}
              >
                Sign in to your existing account →
              </button>
            </div>
          )}
        </div>

        {/* Right Side - Sign Up Form */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
          padding: isMobile ? '1.5rem' : '3rem',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
          maxHeight: isMobile ? 'none' : '90vh',
          overflowY: isMobile ? 'visible' : 'auto',
          margin: isMobile ? '0' : '60px 20px 0 0'
        }}>
          <h2 style={{
            fontSize: isMobile ? '1.5rem' : '2rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
            textAlign: 'center'
          }}>Create Account</h2>
          
          <p style={{
            color: '#a0aec0',
            textAlign: 'center',
            marginBottom: isMobile ? '1.5rem' : '2rem',
            fontSize: isMobile ? '0.9rem' : '1rem'
          }}>
            Fill in your information to get started
          </p>

          {/* Error message display */}
          {error && (
            <div style={{
              background: 'rgba(255, 59, 48, 0.1)',
              border: '1px solid rgba(255, 59, 48, 0.3)',
              borderRadius: '10px',
              padding: '1rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <AlertCircle style={{ color: '#ff3b30', width: '1.2rem', height: '1.2rem', flexShrink: 0 }} />
              <span style={{ color: '#ff3b30', fontSize: '0.95rem' }}>{error}</span>
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '1rem' : '1.5rem' }}>
            {/* Name Fields - Stack on small mobile */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile && window.innerWidth <= 480 ? '1fr' : '1fr 1fr', 
              gap: '1rem' 
            }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: '#cbd5e0'
                }}>
                  First Name
                </label>
                <div style={{ position: 'relative' }}>
                  <User style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#00d4ff',
                    width: '1.2rem',
                    height: '1.2rem'
                  }} />
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="First name"
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '10px',
                      padding: isMobile ? '0.75rem 1rem 0.75rem 3rem' : '1rem 1rem 1rem 3rem',
                      color: 'white',
                      fontSize: isMobile ? '0.95rem' : '1rem',
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
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: '#cbd5e0'
                }}>
                  Last Name
                </label>
                <div style={{ position: 'relative' }}>
                  <User style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#00d4ff',
                    width: '1.2rem',
                    height: '1.2rem'
                  }} />
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Last name"
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '10px',
                      padding: isMobile ? '0.75rem 1rem 0.75rem 3rem' : '1rem 1rem 1rem 3rem',
                      color: 'white',
                      fontSize: isMobile ? '0.95rem' : '1rem',
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
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontSize: '0.9rem',
                fontWeight: '500',
                color: '#cbd5e0'
              }}>
                Email Address
              </label>
              <div style={{ position: 'relative' }}>
                <Mail style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#00d4ff',
                  width: '1.2rem',
                  height: '1.2rem'
                }} />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email"
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '10px',
                    padding: isMobile ? '0.75rem 1rem 0.75rem 3rem' : '1rem 1rem 1rem 3rem',
                    color: 'white',
                    fontSize: isMobile ? '0.95rem' : '1rem',
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
            </div>

            {/* Phone and Company Fields - Stack on small mobile */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile && window.innerWidth <= 480 ? '1fr' : '1fr 1fr', 
              gap: '1rem' 
            }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: '#cbd5e0'
                }}>
                  Phone Number
                </label>
                <div style={{ position: 'relative' }}>
                  <Phone style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#00d4ff',
                    width: '1.2rem',
                    height: '1.2rem'
                  }} />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Phone number"
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '10px',
                      padding: isMobile ? '0.75rem 1rem 0.75rem 3rem' : '1rem 1rem 1rem 3rem',
                      color: 'white',
                      fontSize: isMobile ? '0.95rem' : '1rem',
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
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: '#cbd5e0'
                }}>
                  Company
                </label>
                <div style={{ position: 'relative' }}>
                  <Building style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#00d4ff',
                    width: '1.2rem',
                    height: '1.2rem'
                  }} />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Your company"
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '10px',
                      padding: isMobile ? '0.75rem 1rem 0.75rem 3rem' : '1rem 1rem 1rem 3rem',
                      color: 'white',
                      fontSize: isMobile ? '0.95rem' : '1rem',
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
              </div>
            </div>

            {/* Password Fields */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontSize: '0.9rem',
                fontWeight: '500',
                color: '#cbd5e0'
              }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <Lock style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#00d4ff',
                  width: '1.2rem',
                  height: '1.2rem'
                }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  placeholder="Create password"
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '10px',
                    padding: isMobile ? '0.75rem 3rem 0.75rem 3rem' : '1rem 3rem 1rem 3rem',
                    color: 'white',
                    fontSize: isMobile ? '0.95rem' : '1rem',
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
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#a0aec0',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#00d4ff'}
                  onMouseLeave={(e) => e.target.style.color = '#a0aec0'}
                >
                  {showPassword ? <EyeOff style={{ width: '1.2rem', height: '1.2rem' }} /> : <Eye style={{ width: '1.2rem', height: '1.2rem' }} />}
                </button>
              </div>
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontSize: '0.9rem',
                fontWeight: '500',
                color: '#cbd5e0'
              }}>
                Confirm Password
              </label>
              <div style={{ position: 'relative' }}>
                <Lock style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#00d4ff',
                  width: '1.2rem',
                  height: '1.2rem'
                }} />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  placeholder="Confirm password"
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '10px',
                    padding: isMobile ? '0.75rem 3rem 0.75rem 3rem' : '1rem 3rem 1rem 3rem',
                    color: 'white',
                    fontSize: isMobile ? '0.95rem' : '1rem',
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
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#a0aec0',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#00d4ff'}
                  onMouseLeave={(e) => e.target.style.color = '#a0aec0'}
                >
                  {showConfirmPassword ? <EyeOff style={{ width: '1.2rem', height: '1.2rem' }} /> : <Eye style={{ width: '1.2rem', height: '1.2rem' }} />}
                </button>
              </div>
            </div>

            {/* Checkboxes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  style={{
                    width: '1rem',
                    height: '1rem',
                    accentColor: '#00d4ff',
                    marginTop: '0.25rem'
                  }}
                />
                <span style={{ color: '#a0aec0', fontSize: '0.9rem', lineHeight: '1.4' }}>
                  I agree to the{' '}
                  <a href="#" style={{ color: '#00d4ff', textDecoration: 'none' }}>Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" style={{ color: '#00d4ff', textDecoration: 'none' }}>Privacy Policy</a>
                </span>
              </label>
              
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={subscribeNewsletter}
                  onChange={(e) => setSubscribeNewsletter(e.target.checked)}
                  style={{
                    width: '1rem',
                    height: '1rem',
                    accentColor: '#00d4ff',
                    marginTop: '0.25rem'
                  }}
                />
                <span style={{ color: '#a0aec0', fontSize: '0.9rem', lineHeight: '1.4' }}>
                  Subscribe to our newsletter for industry updates and maritime insights
                </span>
              </label>
            </div>

            {/* Create Account Button */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              style={{
                background: loading ? '#a0aec0' : 'linear-gradient(135deg, #00d4ff, #0099cc)',
                border: 'none',
                padding: isMobile ? '0.75rem 1.5rem' : '1rem 2rem',
                borderRadius: '10px',
                color: 'white',
                fontWeight: 'bold',
                fontSize: isMobile ? '0.95rem' : '1rem',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)',
                marginTop: '1rem'
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(0, 212, 255, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!loading) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(0, 212, 255, 0.3)';
                }
              }}
            >
              {loading ? 'Creating Account...' : 'Create Account'} 
              {!loading && <ArrowRight style={{ width: '1.2rem', height: '1.2rem' }} />}
            </button>

            {/* Sign In Link - Only show on mobile */}
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <span style={{ color: '#a0aec0', fontSize: '0.9rem' }}>
                Already have an account?{' '}
                <button
                  onClick={goToSignIn}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#00d4ff',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#0099cc'}
                  onMouseLeave={(e) => e.target.style.color = '#00d4ff'}
                >
                  Sign In
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Show success modal if showSuccessModal is true */}
      {showSuccessModal && <SuccessModal />}

      {/* Floating Animation Keyframes */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
        `}
      </style>
    </div>   
  );
}