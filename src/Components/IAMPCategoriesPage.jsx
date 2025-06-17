"use client"
import IAMPNavbar from './IAMPNavbar'; // Import the navbar component
import IAMPFooter from './IAMPFooter'; // Import the footer component
import { useState, useEffect } from "react"
import {
  Star,
  ChevronDown,
  ChevronUp,
  Users,
  Award,
  Globe,
  Anchor,
  ArrowRight,
  Crown,
  Building,
  User,
  CheckCircle,
  Filter,
  Search,
  TrendingUp,
  Calendar,
  Mail,
  Phone,
} from "lucide-react"

const IAMPCategoriesPage = () => {
  const [scrollY, setScrollY] = useState(0)
  const [expandedFAQ, setExpandedFAQ] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const membershipCategories = [
    {
      id: "fellow",
      title: "Fellow",
      subtitle: "Senior Leadership Position",
      icon: <Crown className="category-icon" />,
      gradient: "linear-gradient(135deg, #FFD700, #FFA500)",
      color: "#FFD700",
      requirements: [
        "Has held for at least eight (8) years consecutively a high position of responsibility in shipping or related business",
        "Has distinguished himself/herself in shipping practice",
        "Is a principal in a firm or a director of a company in the business or profession",
      ],
      benefits: [
        "Highest level of recognition",
        "Executive networking opportunities",
        "Leadership development programs",
        "Industry influence and advocacy",
        "Priority event access",
        "Mentorship opportunities",
      ],
      popular: true,
      level: "Executive",
      experience: "8+ years",
      type: "Individual",
    },
    {
      id: "associate-fellow",
      title: "Associate Fellow",
      subtitle: "Senior Maritime Professional",
      icon: <Award className="category-icon" />,
      gradient: "linear-gradient(135deg, #00d4ff, #0099cc)",
      color: "#00d4ff",
      requirements: [
        "Command of a commercial or naval sea-going vessel",
        "Other senior position at sea",
        "Senior management position ashore",
        "Demonstrated leadership in maritime operations",
      ],
      benefits: [
        "Professional recognition",
        "Advanced training access",
        "Industry connections",
        "Career advancement support",
        "Technical resources",
        "Certification programs",
      ],
      popular: false,
      level: "Senior",
      experience: "5+ years",
      type: "Individual",
    },
    {
      id: "corporate",
      title: "Corporate",
      subtitle: "Organizations & Companies",
      icon: <Building className="category-icon" />,
      gradient: "linear-gradient(135deg, #9333ea, #7c3aed)",
      color: "#9333ea",
      requirements: [
        "Organisations that encourage and approve of the aims of the association",
        "Have staff who are members of the association",
        "Committed to maritime industry advancement",
        "Established maritime business operations",
      ],
      benefits: [
        "Company-wide benefits",
        "Bulk registration discounts",
        "Corporate training programs",
        "Brand recognition opportunities",
        "Industry partnerships",
        "Custom solutions",
      ],
      popular: false,
      level: "Corporate",
      experience: "Established",
      type: "Organization",
    },
    {
      id: "full-member",
      title: "Full Member",
      subtitle: "Qualified Maritime Professional",
      icon: <User className="category-icon" />,
      gradient: "linear-gradient(135deg, #10b981, #059669)",
      color: "#10b981",
      requirements: [
        "Individuals holding an internationally recognised marine qualification",
        "Minimum of five (5) years full-time practice as consultant or marine surveyor",
        "Demonstrated marine surveying or consultancy experience with written reports",
        "Qualifications deemed appropriate by the Professional Assessment Committee",
      ],
      benefits: [
        "Professional certification",
        "Industry recognition",
        "Networking opportunities",
        "Continuing education access",
        "Technical support",
        "Career development",
      ],
      popular: false,
      level: "Professional",
      experience: "5+ years",
      type: "Individual",
    },
  ]

  const faqs = [
    {
      question: "How long does the application process take?",
      answer:
        "The process typically takes 2-4 weeks after all documents are received. Our assessment committee reviews each application thoroughly to ensure all requirements are met.",
      category: "Application",
    },
    {
      question: "Can I upgrade my membership later?",
      answer:
        "Yes, members can apply for an upgrade at any time by submitting an updated application with additional qualifications and experience documentation.",
      category: "Membership",
    },
    {
      question: "Are there any discounts for companies?",
      answer:
        "Yes, corporate members receive significant discounts on bulk registrations. We offer tiered pricing based on the number of employees being registered.",
      category: "Pricing",
    },
    {
      question: "What documents do I need to provide?",
      answer:
        "Required documents vary by membership category but typically include: CV/Resume, educational certificates, professional qualifications, letters of recommendation, and proof of experience.",
      category: "Documentation",
    },
    {
      question: "Is there a renewal process?",
      answer:
        "Yes, memberships are typically renewed annually. Members receive renewal notices with updated benefits and continuing education requirements.",
      category: "Renewal",
    },
    {
      question: "What are the membership fees?",
      answer:
        "Membership fees vary by category and are reviewed annually. Please contact us for current pricing information and available payment plans.",
      category: "Pricing",
    },
  ]

  const filteredCategories = membershipCategories.filter((category) => {
    const matchesSearch =
      category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.benefits.some((benefit) => benefit.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesFilter =
      selectedCategory === "all" ||
      (selectedCategory === "individual" && category.type === "Individual") ||
      (selectedCategory === "corporate" && category.type === "Organization")

    return matchesSearch && matchesFilter
  })

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="categories-page">
      <IAMPNavbar />
      {/* Animated Background Elements */}
      <div className="bg-element bg-element-1" />
      <div className="bg-element bg-element-2" />
      <div className="bg-element bg-element-3" />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <Anchor className="hero-badge-icon" />
            <span className="hero-badge-text">Professional Maritime Membership</span>
          </div>

          <h1 className="hero-title">Categories and Fees</h1>
          <h2 className="hero-subtitle">MEMBERSHIP GRADES</h2>
          <p className="hero-description">
            Choose the membership category that best fits your professional experience and career goals. Each grade
            offers unique benefits and recognition within the maritime community.
          </p>

          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-number">4</div>
              <div className="stat-label">Membership Categories</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Countries Represented</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Active Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="filters-section">
        <div className="container">
          <div className="filters-header">
            <Filter className="filters-icon" />
            <h3 className="filters-title">Find Your Perfect Membership</h3>
          </div>

          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search membership categories, benefits, or requirements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-buttons">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`filter-btn ${selectedCategory === "all" ? "active" : ""}`}
            >
              All Categories
            </button>
            <button
              onClick={() => setSelectedCategory("individual")}
              className={`filter-btn ${selectedCategory === "individual" ? "active" : ""}`}
            >
              Individual
            </button>
            <button
              onClick={() => setSelectedCategory("corporate")}
              className={`filter-btn ${selectedCategory === "corporate" ? "active" : ""}`}
            >
              Corporate
            </button>
          </div>

          <div className="results-summary">
            <span className="results-count">
              {filteredCategories.length} categor{filteredCategories.length !== 1 ? "ies" : "y"} available
            </span>
          </div>
        </div>
      </section>

      {/* Membership Categories */}
      <section className="categories-section">
        <div className="container">
          <div className="categories-grid">
            {filteredCategories.map((category) => (
              <div key={category.id} className={`category-card ${category.popular ? "popular" : ""}`}>
                {category.popular && (
                  <div className="popular-badge">
                    <Star className="popular-star" />
                    <span>MOST PRESTIGIOUS</span>
                  </div>
                )}

                <div className="category-header">
                  <div className="category-icon-container" style={{ background: category.gradient }}>
                    {category.icon}
                  </div>

                  <div className="category-info">
                    <h3 className="category-title" style={{ color: category.color }}>
                      {category.title}
                    </h3>
                    <p className="category-subtitle">{category.subtitle}</p>

                    <div className="category-meta">
                      <div className="meta-item">
                        <TrendingUp className="meta-icon" />
                        <span className="meta-text">{category.level}</span>
                      </div>
                      <div className="meta-item">
                        <Calendar className="meta-icon" />
                        <span className="meta-text">{category.experience}</span>
                      </div>
                      <div className="meta-item">
                        <Users className="meta-icon" />
                        <span className="meta-text">{category.type}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="category-content">
                  <div className="requirements-section">
                    <h4 className="section-title">Requirements</h4>
                    <ul className="requirements-list">
                      {category.requirements.map((req, i) => (
                        <li key={i} className="requirement-item">
                          <CheckCircle className="check-icon" />
                          <span className="requirement-text">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="benefits-section">
                    <h4 className="section-title">Benefits</h4>
                    <div className="benefits-grid">
                      {category.benefits.map((benefit, i) => (
                        <div key={i} className="benefit-item" style={{ borderColor: `${category.color}40` }}>
                          <span className="benefit-text">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="category-footer">
                  <button className="apply-btn" style={{ background: category.gradient }}>
                    <span>Apply for {category.title}</span>
                    <ArrowRight className="btn-icon" />
                  </button>

                  <button className="info-btn">
                    <span>Learn More</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="no-results">
              <Search className="no-results-icon" />
              <h3 className="no-results-title">No categories found</h3>
              <p className="no-results-text">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Get answers to common questions about our membership categories and application process.
            </p>
          </div>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button onClick={() => toggleFAQ(index)} className="faq-question">
                  <span className="question-text">{faq.question}</span>
                  <div className="question-icon">
                    {expandedFAQ === index ? <ChevronUp className="chevron" /> : <ChevronDown className="chevron" />}
                  </div>
                </button>

                {expandedFAQ === index && (
                  <div className="faq-answer">
                    <p className="answer-text">{faq.answer}</p>
                    <div className="answer-category">
                      <span className="category-tag">{faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <div className="cta-icon">
                <Anchor className="cta-icon-svg" />
              </div>

              <h2 className="cta-title">Ready to Join IAMP?</h2>
              <p className="cta-description">
                Take the next step in your maritime career. Our team is ready to help you choose the right membership
                category and guide you through the application process.
              </p>

              <div className="cta-features">
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <span>Expert Guidance</span>
                </div>
                <div className="feature-item">
                  <Award className="feature-icon" />
                  <span>Professional Recognition</span>
                </div>
                <div className="feature-item">
                  <Globe className="feature-icon" />
                  <span>Global Network</span>
                </div>
              </div>

              <div className="cta-actions">
                <button className="cta-btn primary">
                  <span>Start Application</span>
                  <ArrowRight className="btn-icon" />
                </button>

                <button className="cta-btn secondary">
                  <Mail className="btn-icon" />
                  <span>Contact Us</span>
                </button>
              </div>

              <div className="contact-info">
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <span>membership@iamp.org</span>
                </div>
              </div>
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
        .categories-page {
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
          background: radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%);
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

        .filters-section {
          padding: 4rem 0;
          background: rgba(0, 0, 0, 0.2);
          position: relative;
          z-index: 1;
        }

        .filters-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          justify-content: center;
        }

        .filters-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: #00d4ff;
        }

        .filters-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }

        .search-container {
          position: relative;
          max-width: 600px;
          margin: 0 auto 2rem;
        }

        .search-icon {
          position: absolute;
          left: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          width: 1.25rem;
          height: 1.25rem;
        }

        .search-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          padding: 1.2rem 1.5rem 1.2rem 4rem;
          color: white;
          font-size: 1rem;
          backdrop-filter: blur(10px);
          outline: none;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          border-color: #00d4ff;
          box-shadow: 0 0 0 4px rgba(0, 212, 255, 0.1);
        }

        .search-input::placeholder {
          color: #9ca3af;
        }

        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 2px solid transparent;
          color: white;
          background: rgba(255, 255, 255, 0.1);
          font-size: 0.9rem;
        }

        .filter-btn:hover {
          background: rgba(0, 212, 255, 0.2);
          border-color: rgba(0, 212, 255, 0.5);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          border-color: #00d4ff;
          font-weight: 700;
        }

        .results-summary {
          text-align: center;
          color: #cbd5e0;
          font-size: 0.9rem;
        }

        .results-count {
          font-weight: 600;
        }

        .categories-section {
          padding: 6rem 0;
          position: relative;
          z-index: 1;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
          gap: 3rem;
        }

        .category-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(169, 174, 202, 0.15));
          border-radius: 25px;
          padding: 3rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(30px);
          position: relative;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .category-card.popular {
          border: 2px solid #00d4ff;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2));
        }

        .category-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0, 212, 255, 0.2);
        }

        .popular-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #FFD700, #FFA500);
          padding: 0.5rem 1.5rem;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 700;
          color: #000;
          box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .popular-star {
          width: 1rem;
          height: 1rem;
        }

        .category-header {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
          margin-bottom: 2rem;
        }

        .category-icon-container {
          border-radius: 20px;
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          min-width: 100px;
        }

        .category-icon {
          width: 3rem;
          height: 3rem;
          color: white;
        }

        .category-info {
          flex: 1;
        }

        .category-title {
          font-size: 2.5rem;
          font-weight: 900;
          margin-bottom: 0.5rem;
        }

        .category-subtitle {
          font-size: 1.1rem;
          color: #a0aec0;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .category-meta {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem 1rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .meta-icon {
          width: 1rem;
          height: 1rem;
          color: #00d4ff;
        }

        .meta-text {
          font-size: 0.9rem;
          color: #cbd5e0;
          font-weight: 500;
        }

        .category-content {
          margin-bottom: 2rem;
        }

        .requirements-section,
        .benefits-section {
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #00d4ff;
          margin-bottom: 1rem;
        }

        .requirements-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .requirement-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .requirement-item:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(0, 212, 255, 0.3);
        }

        .check-icon {
          color: #10b981;
          width: 1.5rem;
          height: 1.5rem;
          flex-shrink: 0;
          margin-top: 0.1rem;
        }

        .requirement-text {
          color: #cbd5e0;
          line-height: 1.5;
          font-size: 0.95rem;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .benefit-item {
          background: rgba(0, 212, 255, 0.05);
          padding: 1rem;
          border-radius: 12px;
          border: 1px solid;
          text-align: center;
          transition: all 0.3s ease;
        }

        .benefit-item:hover {
          background: rgba(0, 212, 255, 0.1);
          transform: translateY(-2px);
        }

        .benefit-text {
          color: #ffffff;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .category-footer {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .apply-btn {
          flex: 1;
          min-width: 200px;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          color: white;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .apply-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .info-btn {
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.3);
          padding: 1rem 2rem;
          border-radius: 50px;
          color: white;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .info-btn:hover {
          border-color: #00d4ff;
          background: rgba(0, 212, 255, 0.1);
          transform: translateY(-3px);
        }

        .btn-icon {
          width: 1rem;
          height: 1rem;
        }

        .no-results {
          text-align: center;
          padding: 4rem 2rem;
          color: #a0aec0;
        }

        .no-results-icon {
          width: 4rem;
          height: 4rem;
          color: #4a5568;
          margin-bottom: 1rem;
        }

        .no-results-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #cbd5e0;
        }

        .no-results-text {
          font-size: 1rem;
        }

        .faq-section {
          padding: 6rem 0;
          background: rgba(0, 0, 0, 0.2);
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

        .faq-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .faq-item {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2));
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-color: rgba(0, 212, 255, 0.3);
        }

        .faq-question {
          width: 100%;
          padding: 1.5rem;
          background: transparent;
          border: none;
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .faq-question:hover {
          background: rgba(0, 212, 255, 0.1);
        }

        .question-text {
          text-align: left;
          flex: 1;
        }

        .question-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background: rgba(0, 212, 255, 0.2);
        }

        .chevron {
          color: #00d4ff;
          width: 1.2rem;
          height: 1.2rem;
        }

        .faq-answer {
          padding: 0 1.5rem 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          animation: fadeIn 0.3s ease;
        }

        .answer-text {
          color: #a0aec0;
          line-height: 1.6;
          margin: 1rem 0;
          font-size: 0.95rem;
        }

        .answer-category {
          display: flex;
          justify-content: flex-end;
        }

        .category-tag {
          background: rgba(0, 212, 255, 0.2);
          color: #00d4ff;
          padding: 0.3rem 0.8rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .cta-section {
          padding: 6rem 0;
          position: relative;
          z-index: 1;
        }

        .cta-card {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(45, 53, 97, 0.3));
          padding: 4rem;
          border-radius: 25px;
          border: 1px solid rgba(0, 212, 255, 0.3);
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
          max-width: 1000px;
          margin: 0 auto;
        }

        .cta-content {
          text-align: center;
          position: relative;
          z-index: 10;
        }

        .cta-icon {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .cta-icon-svg {
          color: #00d4ff;
          width: 4rem;
          height: 4rem;
        }

        .cta-title {
          font-size: clamp(2rem, 5vw, 2.5rem);
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-description {
          font-size: 1.2rem;
          color: #a0aec0;
          margin-bottom: 2rem;
          line-height: 1.6;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-features {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #cbd5e0;
          font-weight: 500;
        }

        .feature-icon {
          width: 1.2rem;
          height: 1.2rem;
          color: #00d4ff;
        }

        .cta-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .cta-btn {
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          min-width: 180px;
          justify-content: center;
        }

        .cta-btn.primary {
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          border: none;
          color: white;
          box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
        }

        .cta-btn.primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4);
        }

        .cta-btn.secondary {
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
          backdrop-filter: blur(10px);
        }

        .cta-btn.secondary:hover {
          border-color: #00d4ff;
          background: rgba(0, 212, 255, 0.1);
          transform: translateY(-3px);
        }

        .contact-info {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #cbd5e0;
          font-size: 0.9rem;
        }

        .contact-icon {
          width: 1rem;
          height: 1rem;
          color: #00d4ff;
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

        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(-10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @media (max-width: 1024px) {
          .categories-grid {
            grid-template-columns: 1fr;
          }

          .category-header {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .category-meta {
            justify-content: center;
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

          .category-card {
            padding: 2rem;
          }

          .category-footer {
            flex-direction: column;
          }

          .apply-btn,
          .info-btn {
            min-width: auto;
          }

          .cta-features {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .cta-btn {
            width: 100%;
            max-width: 300px;
          }

          .contact-info {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .cta-card {
            padding: 3rem 2rem;
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

          .category-icon-container {
            padding: 1.5rem;
          }

          .category-icon {
            width: 2.5rem;
            height: 2.5rem;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
          }

          .cta-card {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
       <IAMPFooter />
    </div>
  )
}

export default IAMPCategoriesPage
