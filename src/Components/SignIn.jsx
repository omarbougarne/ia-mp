import React, { useState } from 'react';
import IAMPNavbar from './IAMPNavbar'; // Import the navbar component
import { Anchor, Mail, Lock, Eye, EyeOff, ArrowRight, Shield, Users, Globe, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetEmailSent, setResetEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign in attempt:', { email, password, rememberMe });
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log('Password reset requested for:', resetEmail);
    setResetEmailSent(true);
    setTimeout(() => {
      setShowForgotPassword(false);
      setResetEmailSent(false);
      setResetEmail('');
    }, 3000);
  };

  // Function to navigate to signup page
  const goToSignUp = () => {
    navigate('/signup');
  };

  return (
    
    <div style={{
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 25%, #2d3561 50%, #1a1f3a 75%, #0a0e27 100%)',
      minHeight: '100vh',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 25%, #2d3561 50%, #1a1f3a 75%, #0a0e27 100%)',
      minHeight: '100vh',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Use the extracted navbar component */}
      <IAMPNavbar />
      {/* Animated Background Elements */}
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
        bottom: '10%',
        left: '5%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(45, 53, 97, 0.3) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite reverse'
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '0%',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle, rgba(0, 212, 255, 0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 10s ease-in-out infinite'
      }} />

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
            padding: '3rem',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            maxWidth: '500px',
            width: '90%',
            position: 'relative'
          }}>
            <button
              onClick={() => {
                setShowForgotPassword(false);
                setResetEmailSent(false);
                setResetEmail('');
              }}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                color: '#a0aec0',
                cursor: 'pointer',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#00d4ff'}
              onMouseLeave={(e) => e.target.style.color = '#a0aec0'}
            >
              <X style={{ width: '1.5rem', height: '1.5rem' }} />
            </button>

            {!resetEmailSent ? (
              <>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>
                  Forgot Password?
                </h3>
                <p style={{
                  color: '#a0aec0',
                  textAlign: 'center',
                  marginBottom: '2rem',
                  lineHeight: '1.6'
                }}>
                  Enter your email address and we'll send you a link to reset your password.
                </p>

                <form onSubmit={handleForgotPassword}>
                  <div style={{ marginBottom: '2rem' }}>
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
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        style={{
                          width: 'calc(100% - 2px)',
                          boxSizing: 'border-box',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '10px',
                          padding: '1rem 1rem 1rem 3rem',
                          color: 'white',
                          fontSize: '1rem',
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

                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                      border: 'none',
                      padding: '1rem',
                      borderRadius: '10px',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '1rem',
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
                    }}
                  >
                    Send Reset Link
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  fontSize: '2rem'
                }}>
                  ✓
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem'
                }}>
                  Reset Link Sent!
                </h3>
                <p style={{
                  color: '#a0aec0',
                  lineHeight: '1.6'
                }}>
                  We've sent a password reset link to <strong style={{ color: '#00d4ff' }}>{resetEmail}</strong>. 
                  Please check your email and follow the instructions.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        padding: '2rem',
        gap: '4rem',
        alignItems: 'center'
      }}>
        {/* Left Side - Branding and Info */}
        <div style={{ padding: '2rem 0' }}>
          
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            lineHeight: '1.1',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #0099cc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Welcome Back
          </h1>

          <p style={{
            fontSize: '1.2rem',
            color: '#cbd5e0',
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            Sign in to access your IAMP dashboard and connect with maritime professionals worldwide.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { icon: <Users style={{ width: '1.5rem', height: '1.5rem' }} />, text: '118+ Maritime Companies' },
              { icon: <Globe style={{ width: '1.5rem', height: '1.5rem' }} />, text: 'Global Network Access' },
              { icon: <Shield style={{ width: '1.5rem', height: '1.5rem' }} />, text: 'Secure Professional Platform' }
            ].map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: '#00d4ff' }}>{item.icon}</div>
                <span style={{ color: '#a0aec0', fontSize: '1.1rem' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Sign In Form */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
          padding: '3rem',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
          marginTop:'50px',
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
            textAlign: 'center'
          }}>Sign In</h2>
          
          <p style={{
            color: '#a0aec0',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            Enter your credentials to access your account
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  style={{
                    width: 'calc(100% - 2px)',
                    boxSizing: 'border-box',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '10px',
                    padding: '1rem 1rem 1rem 3rem',
                    color: 'white',
                    fontSize: '1rem',
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

            {/* Password Field */}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  style={{
                    width: 'calc(100% - 2px)',
                    boxSizing: 'border-box',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '10px',
                    padding: '1rem 3rem 1rem 3rem',
                    color: 'white',
                    fontSize: '1rem',
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

            {/* Remember Me & Forgot Password */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={{
                    width: '1rem',
                    height: '1rem',
                    accentColor: '#00d4ff'
                  }}
                />
                <span style={{ color: '#a0aec0', fontSize: '0.9rem' }}>Remember me</span>
              </label>
              <button
                type="button"
                onClick={() => setShowForgotPassword(true)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#00d4ff',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#0099cc'}
                onMouseLeave={(e) => e.target.style.color = '#00d4ff'}
              >
                Forgot Password?
              </button>
            </div>

            {/* Sign In Button */}
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
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(0, 212, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(0, 212, 255, 0.3)';
              }}
            >
              Sign In <ArrowRight style={{ width: '1.2rem', height: '1.2rem' }} />
            </button>

            {/* Divider */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              margin: '1rem 0'
            }}>
              <div style={{
                height: '1px',
                background: 'rgba(255, 255, 255, 0.2)',
                flex: 1
              }} />
              <span style={{ color: '#a0aec0', fontSize: '0.9rem' }}>or</span>
              <div style={{
                height: '1px',
                background: 'rgba(255, 255, 255, 0.2)',
                flex: 1
              }} />
            </div>

            {/* Create Account Link */}
            <div style={{ textAlign: 'center' }}>
              <span style={{ color: '#a0aec0', fontSize: '0.9rem' }}>
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={goToSignUp}
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
                  Create Account
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>

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
    </div>
  );
}