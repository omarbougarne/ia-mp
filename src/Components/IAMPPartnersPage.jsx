"use client"

import { useState, useEffect } from "react"
import {
  Anchor,
  Menu,
  X,
  Search,
  Users,
  Globe,
  Award,
  ArrowRight,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowUp,
  Shield,
  BookOpen,
  GraduationCap,
  Building,
  Handshake,
  Star,
  CheckCircle,
  Calendar,
  Target,
} from "lucide-react"

const IAMPPartnersPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  const partners = [
    {
      id: 1,
      name: "Sea Skills Network",
      shortName: "SSN",
      logo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=120&fit=crop&crop=center",
      category: "Training",
      type: "Premium",
      description:
        "Sea Skills Network est une équipe de professionnels maritimes avec plus de 10 ans d'expérience, offrant un soutien unique en conception, construction et exploitation de navires.",
      services: ["Formation Maritime", "Certification", "Consultation"],
      established: "2010",
      location: "France",
      website: "https://seaskills.network",
      featured: true,
      rating: 4.9,
      projects: 150,
    },
    {
      id: 2,
      name: "UK Register of Learning Providers",
      shortName: "UKRLP",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=120&fit=crop&crop=center",
      category: "Certification",
      type: "Government",
      description:
        "IAMT is registered with the United Kingdom Register of Learning Providers, as a verified UK learning provider. Official Government Register of Verified Learning Providers in the UK.",
      services: ["Accreditation", "Quality Assurance", "Compliance"],
      established: "2008",
      location: "United Kingdom",
      website: "https://ukrlp.co.uk",
      featured: true,
      rating: 5.0,
      projects: 500,
    },
    {
      id: 3,
      name: "The CPD Certification Service",
      shortName: "CPD",
      logo: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=200&h=120&fit=crop&crop=center",
      category: "Professional Development",
      type: "Premium",
      description:
        "Continuing Professional Development is a commitment to ongoing lifelong learning. CPD encourages looking forward and identifying opportunities to learn something new, refresh existing knowledge, improve skills.",
      services: ["CPD Certification", "Professional Development", "Skills Assessment"],
      established: "2012",
      location: "United Kingdom",
      website: "https://cpdcertification.com",
      featured: false,
      rating: 4.8,
      projects: 300,
    },
    {
      id: 4,
      name: "Maritime Safety Institute",
      shortName: "MSI",
      logo: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&h=120&fit=crop&crop=center",
      category: "Safety",
      type: "Premium",
      description:
        "Leading provider of maritime safety training and certification programs, ensuring the highest standards of safety at sea through comprehensive education and practical training.",
      services: ["Safety Training", "Emergency Response", "Risk Assessment"],
      established: "2005",
      location: "Norway",
      website: "https://maritimesafety.org",
      featured: true,
      rating: 4.9,
      projects: 400,
    },
    {
      id: 5,
      name: "Global Shipping Academy",
      shortName: "GSA",
      logo: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=200&h=120&fit=crop&crop=center",
      category: "Training",
      type: "Standard",
      description:
        "Comprehensive maritime education provider offering courses in navigation, engineering, and maritime law. Preparing the next generation of maritime professionals.",
      services: ["Navigation Training", "Engineering Courses", "Maritime Law"],
      established: "2015",
      location: "Singapore",
      website: "https://globalshipping.edu",
      featured: false,
      rating: 4.7,
      projects: 200,
    },
    {
      id: 6,
      name: "Port Operations Consortium",
      shortName: "POC",
      logo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&h=120&fit=crop&crop=center",
      category: "Operations",
      type: "Standard",
      description:
        "Specialized in port management and logistics optimization. Providing cutting-edge solutions for efficient port operations and cargo handling systems.",
      services: ["Port Management", "Logistics", "Cargo Handling"],
      established: "2018",
      location: "Netherlands",
      website: "https://portops.com",
      featured: false,
      rating: 4.6,
      projects: 120,
    },
    {
      id: 7,
      name: "Marine Technology Solutions",
      shortName: "MTS",
      logo: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=200&h=120&fit=crop&crop=center",
      category: "Technology",
      type: "Premium",
      description:
        "Innovative technology solutions for the maritime industry, including AI-powered navigation systems, IoT sensors, and digital transformation services.",
      services: ["AI Navigation", "IoT Solutions", "Digital Transformation"],
      established: "2020",
      location: "Germany",
      website: "https://marinetech.de",
      featured: true,
      rating: 4.8,
      projects: 80,
    },
    {
      id: 8,
      name: "Environmental Maritime Group",
      shortName: "EMG",
      logo: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=200&h=120&fit=crop&crop=center",
      category: "Sustainability",
      type: "Standard",
      description:
        "Dedicated to promoting sustainable practices in the maritime industry through green technology implementation and environmental compliance consulting.",
      services: ["Environmental Consulting", "Green Technology", "Compliance"],
      established: "2017",
      location: "Denmark",
      website: "https://envmaritime.dk",
      featured: false,
      rating: 4.7,
      projects: 160,
    },
  ]

  const categories = [
    "All",
    "Training",
    "Certification",
    "Professional Development",
    "Safety",
    "Operations",
    "Technology",
    "Sustainability",
  ]
  const navItems = ["Home", "About", "Partners", "Training", "Blog", "Contact"]
  const quickLinks = ["Home", "About Us", "Membership", "Events", "Training", "Certification", "Blog", "Contact"]
  const socialIcons = [Facebook, Twitter, Linkedin, Instagram, Youtube]

  const filteredPartners = partners.filter((partner) => {
    const matchesCategory = selectedCategory === "All" || partner.category === selectedCategory
    const matchesSearch =
      partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.services.some((service) => service.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPartners = filteredPartners.filter((partner) => partner.featured)
  const regularPartners = filteredPartners.filter((partner) => !partner.featured)

  const getPartnerTypeClass = (type) => {
    const classes = {
      Premium: "partner-premium",
      Government: "partner-government",
      Standard: "partner-standard",
    }
    return classes[type] || "partner-standard"
  }

  const getCategoryIcon = (category) => {
    const icons = {
      Training: GraduationCap,
      Certification: Award,
      "Professional Development": Target,
      Safety: Shield,
      Operations: Building,
      Technology: Globe,
      Sustainability: BookOpen,
    }
    return icons[category] || Building
  }

  // Partner Card Component
  const PartnerCard = ({ partner, featured = false }) => {
    const CardIcon = getCategoryIcon(partner.category)

    return (
      <article className={`partner-card ${featured ? "featured" : "regular"} ${getPartnerTypeClass(partner.type)}`}>
        {featured && <div className="featured-badge">⭐ FEATURED PARTNER</div>}

        <div className="partner-header">
          <div className="partner-logo">
            <img src={partner.logo || "/placeholder.svg"} alt={`${partner.name} logo`} />
          </div>
          <div className="partner-type-badge">
            <CardIcon className="type-icon" />
            <span>{partner.type}</span>
          </div>
        </div>

        <div className="partner-content">
          <div className="partner-title-section">
            <h3 className="partner-name">{partner.name}</h3>
            <span className="partner-short-name">({partner.shortName})</span>
          </div>

          <div className="partner-category">
            <span className={`category-tag category-${partner.category.toLowerCase().replace(" ", "-")}`}>
              {partner.category}
            </span>
          </div>

          <p className="partner-description">{partner.description}</p>

          <div className="partner-services">
            <h4>Services:</h4>
            <div className="services-list">
              {partner.services.map((service, index) => (
                <span key={index} className="service-tag">
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="partner-stats">
            <div className="stat-item">
              <Calendar className="stat-icon" />
              <span>Est. {partner.established}</span>
            </div>
            <div className="stat-item">
              <MapPin className="stat-icon" />
              <span>{partner.location}</span>
            </div>
            <div className="stat-item">
              <Star className="stat-icon" />
              <span>{partner.rating}/5</span>
            </div>
            <div className="stat-item">
              <CheckCircle className="stat-icon" />
              <span>{partner.projects} Projects</span>
            </div>
          </div>

          <div className="partner-actions">
            <button className="learn-more-btn">
              Learn More <ArrowRight className="btn-icon" />
            </button>
            <a href={partner.website} className="visit-website-btn" target="_blank" rel="noopener noreferrer">
              Visit Website <ExternalLink className="btn-icon" />
            </a>
          </div>
        </div>
      </article>
    )
  }

  return (
    <div className="partners-page">
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .partners-page {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%);
          min-height: 100vh;
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        /* Navigation Styles */
        .nav {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 50;
          transition: all 0.3s ease;
        }

        .nav.scrolled {
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav.transparent {
          background: transparent;
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .logo-icon {
          color: #00d4ff;
          width: 2rem;
          height: 2rem;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: bold;
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .desktop-nav {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          padding: 0.5rem 0;
        }

        .nav-link:hover {
          color: #00d4ff;
        }

        .nav-link.active {
          color: #00d4ff;
          font-weight: bold;
        }

        .join-button {
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
        }

        .join-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4);
        }

        .mobile-menu-button {
          background: transparent;
          border: none;
          color: white;
          cursor: pointer;
          display: none;
        }

        .mobile-nav {
          position: fixed;
          top: 4rem;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.98);
          backdrop-filter: blur(20px);
          z-index: 40;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .mobile-nav-link {
          color: white;
          text-decoration: none;
          font-weight: 500;
          font-size: 1.5rem;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: color 0.3s ease;
        }

        .mobile-nav-link:hover {
          color: #00d4ff;
        }

        .mobile-nav-link.active {
          color: #00d4ff;
          font-weight: bold;
        }

        .mobile-join-button {
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          color: white;
          font-weight: bold;
          font-size: 1.2rem;
          margin-top: 1rem;
          cursor: pointer;
        }

        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 6rem;
        }

        .hero-bg-1 {
          position: absolute;
          top: 20%;
          right: 10%;
          width: 20rem;
          height: 20rem;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 8s ease-in-out infinite;
        }

        .hero-bg-2 {
          position: absolute;
          bottom: 20%;
          left: 5%;
          width: 15rem;
          height: 15rem;
          background: radial-gradient(circle, rgba(45, 53, 97, 0.4) 0%, transparent 70%);
          border-radius: 50%;
          animation: float-reverse 6s ease-in-out infinite;
        }

        .hero-bg-3 {
          position: absolute;
          top: 60%;
          left: 75%;
          width: 10rem;
          height: 10rem;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          animation: pulse 4s ease-in-out infinite;
        }

        .hero-container {
          max-width: 87.5rem;
          margin: 0 auto;
          padding: 0 2rem;
          width: 100%;
        }

        .hero-content {
          text-align: center;
          margin-bottom: 4rem;
        }

        .hero-icons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .hero-icon {
          color: #00d4ff;
          width: 3rem;
          height: 3rem;
        }

        .hero-title {
          font-size: 4.5rem;
          font-weight: bold;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.8rem;
          color: #a0aec0;
          margin-bottom: 2rem;
          font-weight: 300;
        }

        .hero-description {
          font-size: 1.3rem;
          color: #cbd5e0;
          margin-bottom: 3rem;
          line-height: 1.6;
          max-width: 56.25rem;
          margin-left: auto;
          margin-right: auto;
        }

        /* Search Filter */
        .search-filter {
          display: flex;
          gap: 1rem;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        .search-container {
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          width: 1.25rem;
          height: 1.25rem;
        }

        .search-input {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 1rem 1rem 1rem 3rem;
          color: white;
          font-size: 1rem;
          width: 300px;
          backdrop-filter: blur(10px);
          outline: none;
          transition: border-color 0.3s ease;
        }

        .search-input:focus {
          border-color: #00d4ff;
        }

        .search-input::placeholder {
          color: #9ca3af;
        }

        .categories {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .category-button {
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: none;
          color: white;
        }

        .category-button.active {
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          font-weight: bold;
        }

        .category-button.inactive {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .category-button.inactive:hover {
          background: rgba(0, 212, 255, 0.2);
          border-color: #00d4ff;
        }

        /* Stats Section */
        .stats-section {
          padding: 4rem 0;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(45, 53, 97, 0.1));
        }

        .stats-container {
          max-width: 87.5rem;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          text-align: center;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 2rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
        }

        .stat-number {
          font-size: 3rem;
          font-weight: bold;
          color: #00d4ff;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1.1rem;
          color: #a0aec0;
        }

        /* Sections */
        .section {
          padding: 4rem 0;
          position: relative;
        }

        .section-container {
          max-width: 87.5rem;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-description {
          font-size: 1.1rem;
          color: #a0aec0;
        }

        /* Grid Layouts */
        .featured-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .partners-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }

        /* Partner Card Styles */
        .partner-card {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.08), rgba(45, 53, 97, 0.15));
          border-radius: 20px;
          overflow: hidden;
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .partner-card.featured {
          border: 2px solid #00d4ff;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.12), rgba(45, 53, 97, 0.2));
        }

        .partner-card.partner-premium {
          border-left: 4px solid #ffd700;
        }

        .partner-card.partner-government {
          border-left: 4px solid #10b981;
        }

        .partner-card.partner-standard {
          border-left: 4px solid #6366f1;
        }

        .partner-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 212, 255, 0.15);
          border-color: rgba(0, 212, 255, 0.3);
        }

        .partner-card.featured:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0, 212, 255, 0.3);
        }

        .featured-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: linear-gradient(135deg, #ffd700, #ffa500);
          padding: 0.5rem 1rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: bold;
          color: black;
          z-index: 10;
        }

        .partner-header {
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .partner-logo {
          width: 80px;
          height: 50px;
          border-radius: 10px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.1);
        }

        .partner-logo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .partner-type-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0, 212, 255, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
          color: #00d4ff;
        }

        .type-icon {
          width: 1rem;
          height: 1rem;
        }

        .partner-content {
          padding: 1.5rem;
        }

        .partner-title-section {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .partner-name {
          font-size: 1.4rem;
          font-weight: bold;
          color: white;
        }

        .partner-short-name {
          font-size: 1rem;
          color: #00d4ff;
          font-weight: 500;
        }

        .partner-category {
          margin-bottom: 1rem;
        }

        .category-tag {
          padding: 0.3rem 0.8rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: bold;
          display: inline-block;
        }

        .category-training {
          background: linear-gradient(135deg, #8b5cf6, #7c3aed);
        }

        .category-certification {
          background: linear-gradient(135deg, #f59e0b, #d97706);
        }

        .category-professional-development {
          background: linear-gradient(135deg, #ec4899, #db2777);
        }

        .category-safety {
          background: linear-gradient(135deg, #ef4444, #dc2626);
        }

        .category-operations {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
        }

        .category-technology {
          background: linear-gradient(135deg, #10b981, #059669);
        }

        .category-sustainability {
          background: linear-gradient(135deg, #06b6d4, #0891b2);
        }

        .partner-description {
          color: #a0aec0;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        .partner-services {
          margin-bottom: 1.5rem;
        }

        .partner-services h4 {
          color: #00d4ff;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          font-weight: bold;
        }

        .services-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .service-tag {
          background: rgba(0, 212, 255, 0.1);
          border: 1px solid rgba(0, 212, 255, 0.3);
          color: #00d4ff;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .partner-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.8rem;
          margin-bottom: 1.5rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: #a0aec0;
        }

        .stat-icon {
          width: 1rem;
          height: 1rem;
          color: #00d4ff;
        }

        .partner-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .learn-more-btn {
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 25px;
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
        }

        .learn-more-btn:hover {
          transform: translateX(5px);
          box-shadow: 0 5px 15px rgba(0, 212, 255, 0.4);
        }

        .visit-website-btn {
          background: rgba(0, 212, 255, 0.1);
          border: 1px solid rgba(0, 212, 255, 0.3);
          color: #00d4ff;
          padding: 0.8rem 1.5rem;
          border-radius: 25px;
          text-decoration: none;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
        }

        .visit-website-btn:hover {
          background: rgba(0, 212, 255, 0.2);
          transform: translateX(5px);
        }

        .btn-icon {
          width: 1rem;
          height: 1rem;
          transition: transform 0.3s ease;
        }

        /* Partnership CTA Section */
        .partnership-cta {
          padding: 6rem 0;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2));
          position: relative;
          overflow: hidden;
        }

        .cta-bg-1 {
          position: absolute;
          top: -2rem;
          right: -2rem;
          width: 25rem;
          height: 25rem;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
          border-radius: 50%;
        }

        .cta-bg-2 {
          position: absolute;
          bottom: -3rem;
          left: -3rem;
          width: 30rem;
          height: 30rem;
          background: radial-gradient(circle, rgba(45, 53, 97, 0.2) 0%, transparent 70%);
          border-radius: 50%;
        }

        .cta-container {
          max-width: 64rem;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 10;
        }

        .cta-card {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(45, 53, 97, 0.8));
          border-radius: 30px;
          padding: 4rem;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          text-align: center;
        }

        .cta-icon {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .handshake-icon {
          color: #00d4ff;
          width: 4rem;
          height: 4rem;
        }

        .cta-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #ffffff, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-description {
          font-size: 1.2rem;
          color: #a0aec0;
          margin-bottom: 3rem;
          max-width: 50rem;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-primary-btn {
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          border: none;
          padding: 1.2rem 2.5rem;
          border-radius: 50px;
          color: white;
          font-weight: bold;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
        }

        .cta-primary-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4);
        }

        .cta-secondary-btn {
          background: transparent;
          border: 2px solid #00d4ff;
          padding: 1.2rem 2.5rem;
          border-radius: 50px;
          color: #00d4ff;
          font-weight: bold;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-secondary-btn:hover {
          background: rgba(0, 212, 255, 0.1);
          transform: translateY(-3px);
        }

        /* Newsletter Styles */
        .newsletter-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(45, 53, 97, 0.1));
        }

        .newsletter-container {
          max-width: 64rem;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .newsletter-card {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.6), rgba(45, 53, 97, 0.6));
          border-radius: 25px;
          padding: 3rem;
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }

        .newsletter-icon {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .mail-icon {
          color: #00d4ff;
          width: 3rem;
          height: 3rem;
        }

        .newsletter-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .newsletter-description {
          font-size: 1.1rem;
          color: #a0aec0;
          margin-bottom: 2rem;
          max-width: 43.75rem;
          margin-left: auto;
          margin-right: auto;
        }

        .newsletter-form {
          display: flex;
          max-width: 37.5rem;
          margin: 0 auto;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .newsletter-input {
          flex: 1;
          min-width: 16rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 1rem 1.5rem;
          color: white;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .newsletter-input:focus {
          border-color: #00d4ff;
        }

        .newsletter-input::placeholder {
          color: #a0aec0;
        }

        .newsletter-button {
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          color: white;
          font-weight: bold;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
          white-space: nowrap;
        }

        .newsletter-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4);
        }

        .newsletter-privacy {
          font-size: 0.85rem;
          color: #718096;
          margin-top: 1.5rem;
        }

        /* Footer Styles */
        .footer {
          background: linear-gradient(135deg, #0f172a, #1e293b);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 5rem 0 2rem;
        }

        .footer-container {
          max-width: 87.5rem;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .footer-logo-icon {
          color: #00d4ff;
          width: 2rem;
          height: 2rem;
        }

        .footer-logo-text {
          font-size: 1.5rem;
          font-weight: bold;
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-description {
          color: #d1d5db;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-link:hover {
          background: rgba(0, 212, 255, 0.2);
          transform: translateY(-3px);
        }

        .social-icon {
          color: #00d4ff;
          width: 1.25rem;
          height: 1.25rem;
        }

        .footer-title {
          font-size: 1.2rem;
          font-weight: bold;
          color: white;
          margin-bottom: 1.5rem;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-link-item {
          margin-bottom: 0.75rem;
        }

        .footer-link {
          color: #d1d5db;
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-link:hover {
          color: #00d4ff;
          padding-left: 0.3125rem;
        }

        .footer-link-icon {
          width: 0.75rem;
          height: 0.75rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .footer-link:hover .footer-link-icon {
          opacity: 1;
        }

        .contact-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .contact-item {
          margin-bottom: 1.2rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .contact-item.center {
          align-items: center;
        }

        .contact-icon {
          color: #00d4ff;
          width: 1.25rem;
          height: 1.25rem;
          flex-shrink: 0;
        }

        .contact-icon.top {
          margin-top: 0.25rem;
        }

        .contact-text {
          color: #d1d5db;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright {
          color: #9ca3af;
          font-size: 0.9rem;
        }

        .footer-bottom-links {
          display: flex;
          gap: 1.5rem;
        }

        .footer-bottom-link {
          color: #9ca3af;
          font-size: 0.9rem;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-bottom-link:hover {
          color: #00d4ff;
        }

        /* Scroll to Top Button */
        .scroll-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 50;
          box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
        }

        .scroll-top:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4);
        }

        .scroll-top-icon {
          color: white;
          width: 1.25rem;
          height: 1.25rem;
        }

        /* Animations */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
          }
        }

        @keyframes float-reverse {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(30px) rotate(-180deg);
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

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-title {
            font-size: 3.5rem;
          }

          .featured-grid {
            grid-template-columns: 1fr;
          }

          .partners-grid {
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu-button {
            display: block;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.5rem;
          }

          .hero-description {
            font-size: 1.1rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .partners-grid {
            grid-template-columns: 1fr;
          }

          .featured-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .newsletter-title {
            font-size: 2rem;
          }

          .newsletter-card {
            padding: 2rem;
          }

          .newsletter-form {
            flex-direction: column;
            align-items: center;
          }

          .newsletter-input {
            width: 100%;
            min-width: auto;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .search-filter {
            flex-direction: column;
            gap: 1rem;
          }

          .search-input {
            width: 100%;
            max-width: 300px;
          }

          .cta-title {
            font-size: 2.2rem;
          }

          .cta-card {
            padding: 2.5rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .partner-stats {
            grid-template-columns: 1fr;
          }

          .partner-actions {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .hero-container {
            padding: 0 1rem;
          }

          .section-container {
            padding: 0 1rem;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .featured-grid {
            grid-template-columns: 1fr;
          }

          .partners-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className={`nav ${scrollY > 50 ? "scrolled" : "transparent"}`}>
        <div className="nav-container">
          <div className="logo">
            <Anchor className="logo-icon" />
            <span className="logo-text">IAMP</span>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`nav-link ${item === "Partners" ? "active" : ""}`}
              >
                {item}
              </a>
            ))}
            <button className="join-button">Join IAMP</button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu-button">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`mobile-nav-link ${item === "Partners" ? "active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="mobile-join-button">Join IAMP</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-1" />
        <div className="hero-bg-2" />
        <div className="hero-bg-3" />

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-icons">
              <Users className="hero-icon" />
              <Handshake className="hero-icon" />
              <Globe className="hero-icon" />
            </div>

            <h1 className="hero-title">Our Trusted Partners</h1>
            <h2 className="hero-subtitle">BUILDING THE MARITIME FUTURE TOGETHER</h2>
            <p className="hero-description">
              Discover our network of world-class partners who share our commitment to excellence, innovation, and
              advancement in the maritime industry. Together, we're shaping the future of maritime professionals
              worldwide.
            </p>

            {/* Search and Filter */}
            <div className="search-filter">
              <div className="search-container">
                <Search className="search-icon" />
                <input
                  type="text"
                  placeholder="Search partners..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>

              <div className="categories">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`category-button ${selectedCategory === category ? "active" : "inactive"}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Global Partners</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">25</div>
              <div className="stat-label">Countries</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Joint Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      {featuredPartners.length > 0 && (
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Featured Partners</h2>
              <p className="section-description">Our premier partnerships driving maritime excellence</p>
            </div>

            <div className="featured-grid">
              {featuredPartners.map((partner) => (
                <PartnerCard key={partner.id} partner={partner} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Partners Grid */}
      <section className="section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">All Partners</h2>
            <p className="section-description">Explore our complete network of maritime industry partners</p>
          </div>

          <div className="partners-grid">
            {regularPartners.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA Section */}
      <section className="partnership-cta">
        <div className="cta-bg-1" />
        <div className="cta-bg-2" />

        <div className="cta-container">
          <div className="cta-card">
            <div className="cta-icon">
              <Handshake className="handshake-icon" />
            </div>

            <h2 className="cta-title">Become Our Partner</h2>

            <p className="cta-description">
              Join our prestigious network of maritime industry leaders. Partner with IAMP to expand your reach, enhance
              your credibility, and contribute to the advancement of maritime professionals worldwide.
            </p>

            <div className="cta-buttons">
              <button className="cta-primary-btn">Apply for Partnership</button>
              <button className="cta-secondary-btn">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-card">
            <div className="newsletter-icon">
              <Mail className="mail-icon" />
            </div>

            <h2 className="newsletter-title">Stay Connected</h2>

            <p className="newsletter-description">
              Get updates on new partnerships, collaborative opportunities, and exclusive maritime industry insights.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">
                Subscribe Now
              </button>
            </form>

            <p className="newsletter-privacy">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Logo and About */}
            <div className="footer-section">
              <div className="footer-logo">
                <Anchor className="footer-logo-icon" />
                <span className="footer-logo-text">IAMP</span>
              </div>

              <p className="footer-description">
                The International Association of Maritime Professionals is dedicated to advancing excellence, safety,
                and innovation in the maritime industry through education, advocacy, and collaboration.
              </p>

              <div className="social-links">
                {socialIcons.map((Icon, index) => (
                  <a key={index} href="#" className="social-link">
                    <Icon className="social-icon" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index} className="footer-link-item">
                    <a href="#" className="footer-link">
                      <ArrowRight className="footer-link-icon" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partner Categories */}
            <div className="footer-section">
              <h3 className="footer-title">Partner Categories</h3>
              <ul className="footer-links">
                {categories
                  .filter((cat) => cat !== "All")
                  .map((category, index) => (
                    <li key={index} className="footer-link-item">
                      <a href="#" className="footer-link">
                        <ArrowRight className="footer-link-icon" />
                        {category}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3 className="footer-title">Contact Us</h3>
              <ul className="contact-list">
                <li className="contact-item">
                  <MapPin className="contact-icon top" />
                  <span className="contact-text">123 Maritime Avenue, Harbor City, Ocean State, 45678</span>
                </li>
                <li className="contact-item center">
                  <Phone className="contact-icon" />
                  <span className="contact-text">+1 (555) 123-4567</span>
                </li>
                <li className="contact-item center">
                  <Mail className="contact-icon" />
                  <span className="contact-text">partnerships@iamp.org</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer-bottom">
            <p className="copyright">
              © {new Date().getFullYear()} International Association of Maritime Professionals. All rights reserved.
            </p>

            <div className="footer-bottom-links">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (
                <a key={index} href="#" className="footer-bottom-link">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button onClick={scrollToTop} className="scroll-top">
          <ArrowUp className="scroll-top-icon" />
        </button>
      )}
    </div>
  )
}

export default IAMPPartnersPage
