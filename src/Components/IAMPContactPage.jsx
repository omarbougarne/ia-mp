"use client"
import IAMPNavbar from './IAMPNavbar'; // Import the navbar component
import IAMPFooter from './IAMPFooter'; // Import the footer component
import { useState, useEffect } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Anchor,
  ArrowRight,
  Globe,
  Shield,
  Users,
  Award,
  CheckCircle,
  AlertCircle,
  ExternalLink,
} from "lucide-react"

const IAMPContactPage = () => {
  const [scrollY, setScrollY] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    category: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState({ type: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("general")

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear status when user starts typing
    if (formStatus.message) {
      setFormStatus({ type: "", message: "" })
    }
  }

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required"
    if (!formData.email.trim()) return "Email is required"
    if (!/\S+@\S+\.\S+/.test(formData.email)) return "Email is invalid"
    if (!formData.subject.trim()) return "Subject is required"
    if (!formData.message.trim()) return "Message is required"
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const error = validateForm()
    if (error) {
      setFormStatus({ type: "error", message: error })
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setFormStatus({
        type: "success",
        message: "Thank you for your message! We'll get back to you within 24 hours.",
      })
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        category: "",
        message: "",
      })
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <MapPin className="contact-icon" />,
      title: "Address",
      details: "71-75 Shelton Street, London, United Kingdom, WC2H 9JQ",
      gradient: "linear-gradient(135deg, #00d4ff, #0099cc)",
      color: "#00d4ff",
      action: "Get Directions",
    },
    {
      icon: <Clock className="contact-icon" />,
      title: "Business Hours",
      details: "Mon-Fri 9:00AM - 5:00PM GMT",
      gradient: "linear-gradient(135deg, #10b981, #059669)",
      color: "#10b981",
      action: "View Calendar",
    },
    {
      icon: <Phone className="contact-icon" />,
      title: "Phone",
      details: "+44 (0) 20 7123 4567",
      gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
      color: "#8b5cf6",
      action: "Call Now",
    },
    {
      icon: <Mail className="contact-icon" />,
      title: "Email",
      details: "info@ia-mp.org",
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
      color: "#f59e0b",
      action: "Send Email",
    },
  ]

  const contactCategories = [
    { value: "general", label: "General Inquiry", icon: <MessageSquare className="category-icon" /> },
    { value: "membership", label: "Membership", icon: <Users className="category-icon" /> },
    { value: "training", label: "Training Programs", icon: <Award className="category-icon" /> },
    { value: "partnership", label: "Partnership", icon: <Globe className="category-icon" /> },
    { value: "support", label: "Technical Support", icon: <Shield className="category-icon" /> },
  ]

  const quickLinks = [
    {
      title: "Membership Categories",
      icon: <Users className="quick-icon" />,
      description: "Explore our membership options",
      color: "#00d4ff",
    },
    {
      title: "Training Programs",
      icon: <Award className="quick-icon" />,
      description: "Professional development courses",
      color: "#10b981",
    },
    {
      title: "Professional Standards",
      icon: <Shield className="quick-icon" />,
      description: "Industry standards and guidelines",
      color: "#8b5cf6",
    },
    {
      title: "Global Network",
      icon: <Globe className="quick-icon" />,
      description: "Connect with maritime professionals",
      color: "#f59e0b",
    },
  ]

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="contact-page">
      {/* Animated Background Elements */}
         <IAMPNavbar />
      <div className="bg-element bg-element-1" />
      <div className="bg-element bg-element-2" />
      <div className="bg-element bg-element-3" />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <Anchor className="hero-badge-icon" />
            <span className="hero-badge-text">Professional Maritime Support</span>
          </div>

          <h1 className="hero-title">Contact Us</h1>
          <h2 className="hero-subtitle">GET IN TOUCH WITH IAMP</h2>
          <p className="hero-description">
            At IAMP, our mission comes to life through impactful projects that strengthen global maritime standards.
            We're here to support your maritime career journey and answer any questions you may have.
          </p>

          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-number">24h</div>
              <div className="stat-label">Response Time</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Countries Served</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Online Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How to Reach Us</h2>
            <p className="section-subtitle">Multiple ways to connect with our maritime professionals</p>
          </div>

          <div className="contact-cards-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-card">
                <div className="contact-card-header">
                  <div className="contact-icon-container" style={{ background: info.gradient }}>
                    {info.icon}
                  </div>
                  <h3 className="contact-title" style={{ color: info.color }}>
                    {info.title}
                  </h3>
                </div>

                <p className="contact-details">{info.details}</p>

                <button className="contact-action-btn" style={{ borderColor: info.color, color: info.color }}>
                  <span>{info.action}</span>
                  <ExternalLink className="action-icon" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="form-section">
        <div className="container">
          <div className="form-layout">
            {/* Contact Form */}
            <div className="form-container">
              <div className="form-header">
                <h2 className="form-title">Send us a Message</h2>
                <p className="form-subtitle">
                  Have questions about membership, training programs, or our services? We'd love to hear from you.
                </p>
              </div>

              {/* Category Selection */}
              <div className="category-selection">
                <h4 className="category-title">What can we help you with?</h4>
                <div className="category-grid">
                  {contactCategories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`category-btn ${selectedCategory === category.value ? "active" : ""}`}
                    >
                      {category.icon}
                      <span className="category-label">{category.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Status */}
              {formStatus.message && (
                <div className={`form-status ${formStatus.type}`}>
                  {formStatus.type === "success" ? (
                    <CheckCircle className="status-icon" />
                  ) : (
                    <AlertCircle className="status-icon" />
                  )}
                  <span className="status-message">{formStatus.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className="form-input"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="form-input"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="form-input"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Company/Organization</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleFormChange}
                      className="form-input"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    required
                    className="form-input"
                    placeholder="Enter the subject of your inquiry"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows="5"
                    className="form-textarea"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button type="submit" disabled={isSubmitting} className="submit-btn">
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="btn-icon" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Sidebar Info */}
            <div className="sidebar-info">
              {/* Academy Section */}
              <div className="academy-card">
                <div className="academy-header">
                  <div className="academy-logo">
                    <Anchor className="academy-icon" />
                  </div>
                  <h3 className="academy-title">IAMP Academy</h3>
                  <p className="academy-description">
                    At IAMP, our mission comes to life through impactful projects that strengthen global maritime
                    standards.
                  </p>
                  <button className="academy-btn">
                    <span>Discover our academy</span>
                    <ArrowRight className="btn-icon" />
                  </button>
                </div>
              </div>

              {/* Office Hours */}
              <div className="hours-card">
                <h4 className="hours-title">Office Hours</h4>
                <div className="hours-list">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="hours-item">
                      <span className="hours-day">{schedule.day}</span>
                      <span className="hours-time">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="quick-links-card">
                <h4 className="quick-links-title">Quick Links</h4>
                <div className="quick-links-list">
                  {quickLinks.map((link, index) => (
                    <button key={index} className="quick-link-item">
                      <div className="quick-link-icon" style={{ color: link.color }}>
                        {link.icon}
                      </div>
                      <div className="quick-link-content">
                        <span className="quick-link-title">{link.title}</span>
                        <span className="quick-link-description">{link.description}</span>
                      </div>
                      <ArrowRight className="quick-link-arrow" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Quick answers to common questions about contacting IAMP</p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h4 className="faq-question">How quickly will I receive a response?</h4>
              <p className="faq-answer">
                We typically respond to all inquiries within 24 hours during business days. For urgent matters, please
                call our office directly.
              </p>
            </div>

            <div className="faq-item">
              <h4 className="faq-question">What information should I include in my message?</h4>
              <p className="faq-answer">
                Please include your full name, contact information, and a detailed description of your inquiry. This
                helps us provide you with the most accurate and helpful response.
              </p>
            </div>

            <div className="faq-item">
              <h4 className="faq-question">Can I schedule a phone consultation?</h4>
              <p className="faq-answer">
                Yes! We offer phone consultations for membership inquiries and training programs. Please mention your
                preferred time in your message, and we'll coordinate a suitable time.
              </p>
            </div>

            <div className="faq-item">
              <h4 className="faq-question">Do you offer support in multiple languages?</h4>
              <p className="faq-answer">
                Our primary language is English, but we have team members who can assist in several other languages.
                Please let us know your preferred language when contacting us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <button
        onClick={scrollToTop}
        className="floating-btn"
        style={{
          opacity: scrollY > 300 ? 1 : 0,
          transform: scrollY > 300 ? "translateY(0)" : "translateY(20px)",
        }}
      >
        ↑
      </button>

      <style jsx>{`
        .contact-page {
          background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 25%, #2d3561 50%, #1a1f3a 75%, #0a0e27 100%);
          min-height: 100vh;
          color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        .bg-element {
          position: absolute;
          border-radius: 50%;
          filter: blur(1px);
          animation: float 8s ease-in-out infinite;
          z-index: 0;
        }

        .bg-element-1 {
          top: 15%;
          right: 5%;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
        }

        .bg-element-2 {
          bottom: 10%;
          left: 10%;
          width: 180px;
          height: 180px;
          background: radial-gradient(circle, rgba(45, 53, 97, 0.3) 0%, transparent 70%);
          animation: float 8s ease-in-out infinite reverse;
        }

        .bg-element-3 {
          top: 50%;
          left: 80%;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%);
          animation: pulse 6s ease-in-out infinite;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        .hero-section {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 6rem 2rem 4rem;
        }

        .hero-content {
          text-align: center;
          max-width: 1000px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2));
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 2rem;
          backdrop-filter: blur(20px);
        }

        .hero-badge-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: #00d4ff;
        }

        .hero-badge-text {
          color: #cbd5e0;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .hero-title {
          font-size: clamp(3rem, 8vw, 4rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #0099cc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 4vw, 1.8rem);
          color: #00d4ff;
          margin-bottom: 1.5rem;
          font-weight: 600;
          letter-spacing: 0.1em;
        }

        .hero-description {
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          color: #cbd5e0;
          margin-bottom: 3rem;
          line-height: 1.6;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          background: rgba(0, 212, 255, 0.1);
          border-color: rgba(0, 212, 255, 0.3);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 900;
          color: #00d4ff;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #cbd5e0;
          font-weight: 500;
        }

        .contact-info-section {
          padding: 6rem 0;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          color: #a0aec0;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .contact-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .contact-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(169, 174, 202, 0.15));
          border-radius: 20px;
          padding: 2.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(30px);
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .contact-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0, 212, 255, 0.2);
        }

        .contact-card-header {
          margin-bottom: 2rem;
        }

        .contact-icon-container {
          border-radius: 15px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          display: inline-block;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .contact-icon {
          width: 2rem;
          height: 2rem;
          color: white;
        }

        .contact-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .contact-details {
          color: #cbd5e0;
          line-height: 1.6;
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }

        .contact-action-btn {
          background: transparent;
          border: 2px solid;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          justify-content: center;
          margin: 0 auto;
        }

        .contact-action-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .action-icon {
          width: 1rem;
          height: 1rem;
        }

        .form-section {
          padding: 6rem 0;
          background: rgba(0, 0, 0, 0.2);
          position: relative;
          z-index: 1;
        }

        .form-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .form-container {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2));
          border-radius: 25px;
          padding: 3rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(30px);
        }

        .form-header {
          margin-bottom: 2rem;
        }

        .form-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .form-subtitle {
          color: #a0aec0;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .category-selection {
          margin-bottom: 2rem;
        }

        .category-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .category-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1rem;
          color: #cbd5e0;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          text-align: center;
        }

        .category-btn:hover {
          background: rgba(0, 212, 255, 0.1);
          border-color: rgba(0, 212, 255, 0.3);
        }

        .category-btn.active {
          background: rgba(0, 212, 255, 0.2);
          border-color: #00d4ff;
          color: #00d4ff;
        }

        .category-icon {
          width: 1.5rem;
          height: 1.5rem;
        }

        .category-label {
          font-size: 0.9rem;
          font-weight: 500;
        }

        .form-status {
          padding: 1rem;
          border-radius: 12px;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .form-status.success {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #10b981;
        }

        .form-status.error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #ef4444;
        }

        .status-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .status-message {
          font-weight: 500;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          color: #cbd5e0;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 1rem;
          border-radius: 12px;
          border: 2px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          color: white;
          font-size: 1rem;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #00d4ff;
          box-shadow: 0 0 0 4px rgba(0, 212, 255, 0.1);
          background: rgba(255, 255, 255, 0.08);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #9ca3af;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .btn-icon {
          width: 1.2rem;
          height: 1.2rem;
        }

        .loading-spinner {
          width: 1.2rem;
          height: 1.2rem;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .sidebar-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .academy-card,
        .hours-card,
        .quick-links-card {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2));
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(30px);
        }

        .academy-header {
          text-align: center;
        }

        .academy-logo {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          border-radius: 50%;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
        }

        .academy-icon {
          color: white;
          width: 2.5rem;
          height: 2.5rem;
        }

        .academy-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .academy-description {
          color: #a0aec0;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .academy-btn {
          background: transparent;
          border: 2px solid #00d4ff;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          color: #00d4ff;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0 auto;
        }

        .academy-btn:hover {
          background: rgba(0, 212, 255, 0.1);
          transform: translateY(-2px);
        }

        .hours-title,
        .quick-links-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.5rem;
        }

        .hours-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .hours-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hours-day {
          color: #cbd5e0;
          font-weight: 500;
        }

        .hours-time {
          color: #00d4ff;
          font-weight: 600;
        }

        .quick-links-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .quick-link-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #cbd5e0;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }

        .quick-link-item:hover {
          background: rgba(0, 212, 255, 0.1);
          border-color: rgba(0, 212, 255, 0.3);
          transform: translateX(5px);
        }

        .quick-link-icon {
          width: 2rem;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .quick-icon {
          width: 1.2rem;
          height: 1.2rem;
        }

        .quick-link-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .quick-link-title {
          font-weight: 600;
          color: #ffffff;
        }

        .quick-link-description {
          font-size: 0.85rem;
          color: #a0aec0;
        }

        .quick-link-arrow {
          width: 1rem;
          height: 1rem;
          color: #00d4ff;
        }

        .faq-section {
          padding: 6rem 0;
          position: relative;
          z-index: 1;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .faq-item {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          background: rgba(0, 212, 255, 0.05);
          border-color: rgba(0, 212, 255, 0.3);
        }

        .faq-question {
          font-size: 1.1rem;
          font-weight: 600;
          color: #00d4ff;
          margin-bottom: 1rem;
        }

        .faq-answer {
          color: #a0aec0;
          line-height: 1.6;
          margin: 0;
        }

        .floating-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          border: none;
          color: white;
          font-size: 1.5rem;
          font-weight: bold;
          cursor: pointer;
          box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4);
          transition: all 0.3s ease;
          z-index: 1000;
        }

        .floating-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 35px rgba(0, 212, 255, 0.5);
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
          }
        }

        @keyframes pulse {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.7;
          }
          50% { 
            transform: scale(1.1); 
            opacity: 1;
          }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 1024px) {
          .form-layout {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .category-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 4rem 1rem 2rem;
          }

          .container {
            padding: 0 1rem;
          }

          .hero-stats {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .contact-cards-grid {
            grid-template-columns: 1fr;
          }

          .form-container {
            padding: 2rem;
          }

          .academy-card,
          .hours-card,
          .quick-links-card {
            padding: 1.5rem;
          }

          .faq-grid {
            grid-template-columns: 1fr;
          }

          .floating-btn {
            width: 50px;
            height: 50px;
            bottom: 1rem;
            right: 1rem;
            font-size: 1.2rem;
          }
        }

        @media (max-width: 480px) {
          .stat-number {
            font-size: 2rem;
          }

          .contact-icon {
            width: 1.5rem;
            height: 1.5rem;
          }

          .academy-logo {
            width: 80px;
            height: 80px;
          }

          .academy-icon {
            width: 2rem;
            height: 2rem;
          }

          .form-container {
            padding: 1.5rem;
          }
        }
      `}</style>
      <IAMPFooter />
    </div>
  )
}

export default IAMPContactPage
