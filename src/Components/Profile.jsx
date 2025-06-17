
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import IAMPNavbar from './IAMPNavbar';
import { 
  User, 
  Mail, 
  Phone, 
  Building, 
  Calendar, 
  LogOut, 
  Edit, 
  Save,
  X,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/profile', {
        method: 'GET',
        credentials: 'include', // Important for session cookies
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 401) {
        // Not authenticated, redirect to sign-in
        navigate('/signin');
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }

      const data = await response.json();
      setUser(data.user);
      setEditedUser(data.user);
    } catch (error) {
      console.error('Error fetching profile:', error);
      setError('Failed to load profile');
      // If there's an auth error, redirect to sign-in
      navigate('/signin');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('http://localhost:5000/api/logout', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Always redirect to sign-in after logout attempt
      navigate('/signin');
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setError('');
    setSuccess('');
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedUser(user);
    setError('');
    setSuccess('');
  };

  const handleSave = async () => {
    setIsSaving(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:5000/api/profile', {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedUser),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          navigate('/signin');
          return;
        }
        
        if (data.details && Array.isArray(data.details)) {
          // Validation errors
          setError(data.details.join('; '));
        } else {
          setError(data.error || 'Failed to update profile');
        }
        return;
      }

      // Success
      setUser(data.user);
      setEditedUser(data.user);
      setIsEditing(false);
      setSuccess(data.message || 'Profile updated successfully!');
      
      setTimeout(() => setSuccess(''), 5000);
    } catch (error) {
      console.error('Profile update error:', error);
      setError('Failed to update profile. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleInputChange = (field, value) => {
    setEditedUser(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (isLoading) {
    return (
      <div style={{
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 25%, #2d3561 50%, #1a1f3a 75%, #0a0e27 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '50px',
            height: '50px',
            border: '3px solid rgba(0, 212, 255, 0.3)',
            borderTop: '3px solid #00d4ff',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 1rem'
          }} />
          <p>Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 25%, #2d3561 50%, #1a1f3a 75%, #0a0e27 100%)',
      minHeight: '100vh',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative',
      overflow: 'hidden',
    }}>
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
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
        marginTop: '2rem'
      }}>
        {/* Success/Error Messages */}
        {success && (
          <div style={{
            background: 'rgba(34, 197, 94, 0.1)',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            borderRadius: '10px',
            padding: '1rem',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#22c55e'
          }}>
            <CheckCircle style={{ width: '1.2rem', height: '1.2rem' }} />
            {success}
          </div>
        )}

        {error && (
          <div style={{
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '10px',
            padding: '1rem',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#ef4444'
          }}>
            <AlertCircle style={{ width: '1.2rem', height: '1.2rem' }} />
            {error}
          </div>
        )}

        {/* Profile Header */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))',
          padding: '2rem',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
          marginBottom: '2rem', 
          marginTop:'2rem', 
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
            <div>
              <h1 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #0099cc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Welcome, {user.firstName}!
              </h1>
              <p style={{
                color: '#a0aec0',
                fontSize: '1.1rem'
              }}>
                IAMP Member Profile
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              {!isEditing ? (
                <button
                  onClick={handleEdit}
                  style={{
                    background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '10px',
                    color: 'white',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  <Edit style={{ width: '1rem', height: '1rem' }} />
                  Edit Profile
                </button>
              ) : (
                <>
                  <button
                    onClick={handleSave}
                    disabled={isSaving}
                    style={{
                      background: isSaving 
                        ? 'rgba(34, 197, 94, 0.5)' 
                        : 'linear-gradient(135deg, #22c55e, #16a34a)',
                      border: 'none',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '10px',
                      color: 'white',
                      fontWeight: 'bold',
                      cursor: isSaving ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.3s ease',
                      opacity: isSaving ? 0.7 : 1
                    }}
                    onMouseEnter={(e) => !isSaving && (e.target.style.transform = 'translateY(-2px)')}
                    onMouseLeave={(e) => !isSaving && (e.target.style.transform = 'translateY(0)')}
                  >
                    <Save style={{ width: '1rem', height: '1rem' }} />
                    {isSaving ? 'Saving...' : 'Save'}
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    disabled={isSaving}
                    style={{
                      background: 'rgba(239, 68, 68, 0.2)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '10px',
                      color: '#ef4444',
                      fontWeight: 'bold',
                      cursor: isSaving ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.3s ease',
                      opacity: isSaving ? 0.5 : 1
                    }}
                    onMouseEnter={(e) => !isSaving && (e.target.style.transform = 'translateY(-2px)')}
                    onMouseLeave={(e) => !isSaving && (e.target.style.transform = 'translateY(0)')}
                  >
                    <X style={{ width: '1rem', height: '1rem' }} />
                    Cancel
                  </button>
                </>
              )}

             
            </div>
          </div>

          {/* Profile Information */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {/* Personal Information */}
            <div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                color: '#00d4ff'
              }}>
                Personal Information
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* First Name */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <User style={{ color: '#00d4ff', width: '1.2rem', height: '1.2rem', minWidth: '1.2rem' }} />
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedUser.firstName || ''}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="First Name"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        padding: '0.5rem',
                        color: 'white',
                        flex: 1
                      }}
                    />
                  ) : (
                    <span style={{ color: '#ffffff' }}>{user.firstName}</span>
                  )}
                </div>

                {/* Last Name */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <User style={{ color: '#00d4ff', width: '1.2rem', height: '1.2rem', minWidth: '1.2rem' }} />
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedUser.lastName || ''}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Last Name"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        padding: '0.5rem',
                        color: 'white',
                        flex: 1
                      }}
                    />
                  ) : (
                    <span style={{ color: '#ffffff' }}>{user.lastName}</span>
                  )}
                </div>

                {/* Email */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Mail style={{ color: '#00d4ff', width: '1.2rem', height: '1.2rem', minWidth: '1.2rem' }} />
                  <span style={{ color: '#ffffff' }}>{user.email}</span>
                </div>

                {/* Phone */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Phone style={{ color: '#00d4ff', width: '1.2rem', height: '1.2rem', minWidth: '1.2rem' }} />
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editedUser.phone || ''}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Phone Number"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        padding: '0.5rem',
                        color: 'white',
                        flex: 1
                      }}
                    />
                  ) : (
                    <span style={{ color: '#ffffff' }}>{user.phone || 'Not provided'}</span>
                  )}
                </div>

                {/* Company */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Building style={{ color: '#00d4ff', width: '1.2rem', height: '1.2rem', minWidth: '1.2rem' }} />
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedUser.company || ''}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Company"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        padding: '0.5rem',
                        color: 'white',
                        flex: 1
                      }}
                    />
                  ) : (
                    <span style={{ color: '#ffffff' }}>{user.company || 'Not specified'}</span>
                  )}
                </div>

                {/* Registration Date */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Calendar style={{ color: '#00d4ff', width: '1.2rem', height: '1.2rem', minWidth: '1.2rem' }} />
                  <span style={{ color: '#ffffff' }}>
                    Member since {new Date(user.registrationDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Account Status */}
            <div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                color: '#00d4ff'
              }}>
                Account Status
              </h3>

              <div style={{
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                borderRadius: '10px',
                padding: '1.5rem',
                marginBottom: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <CheckCircle style={{ color: '#22c55e', width: '1.2rem', height: '1.2rem' }} />
                  <span style={{ color: '#22c55e', fontWeight: 'bold' }}>Profile Complete</span>
                </div>
                <p style={{ color: '#a0aec0', fontSize: '0.9rem' }}>
                  Your profile is complete and verified. You have full access to IAMP features.
                </p>
              </div>

              <div style={{
                background: user.subscribeNewsletter ? 'rgba(34, 197, 94, 0.1)' : 'rgba(107, 114, 128, 0.1)',
                border: `1px solid ${user.subscribeNewsletter ? 'rgba(34, 197, 94, 0.3)' : 'rgba(107, 114, 128, 0.3)'}`,
                borderRadius: '10px',
                padding: '1.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Mail style={{ 
                    color: user.subscribeNewsletter ? '#22c55e' : '#6b7280', 
                    width: '1.2rem', 
                    height: '1.2rem' 
                  }} />
                  <span style={{ 
                    color: user.subscribeNewsletter ? '#22c55e' : '#6b7280', 
                    fontWeight: 'bold' 
                  }}>
                    Newsletter {user.subscribeNewsletter ? 'Subscribed' : 'Not Subscribed'}
                  </span>
                </div>
                <p style={{ color: '#a0aec0', fontSize: '0.9rem' }}>
                  {user.subscribeNewsletter 
                    ? 'You will receive our maritime industry newsletter and updates.'
                    : 'You have opted out of newsletter communications.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}