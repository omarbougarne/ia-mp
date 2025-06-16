"use client"
import IAMPNavbar from './IAMPNavbar'; // Import the navbar component
import IAMPFooter from './IAMPFooter'; // Import the footer component
import { useState, useEffect } from "react"
import { ArrowRight, Globe, Users, Award, Shield, ExternalLink, Building, Anchor, Waves, Mail } from "lucide-react"

const IAMPPartnersPage = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const partners = [
    {
      name: "SSN",
      title: "Sea Skills Network",
      description:
        "Sea Skills Network est une équipe de professionnels maritimes avec plus de 10 ans d'expérience, offrant un soutien unique en conception, construction et exploitation de navires. Leur expertise couvre les paquebots de prestige, les chantiers navals, les sociétés de classification, les opérateurs maritimes, les fournisseurs IT et l'ingénierie marine.",
      icon: <Waves className="partner-icon" />,
      logo: "/placeholder.svg?height=80&width=200",
      category: "Maritime Services",
      color: "#00d4ff",
    },
    {
      name: "UKRLP",
      title: "United Kingdom Register of Learning Providers",
      description:
        "IMT is registered with the United Kingdom Register of Learning Providers, as a verified UK learning provider. The United Kingdom Register of Learning Providers (UKRLP) is an official Government Register of Verified Learning Providers in the UK and is used by government departments agencies such as the Learning and Skills Council, Careers Advice Service, HESA, HEFCE and UCAS, and by learners and employers.",
      icon: <Shield className="partner-icon" />,
      logo: "/placeholder.svg?height=80&width=200",
      category: "Certification",
      color: "#0099cc",
    },
    {
      name: "CPD Certification Service",
      title: "The CPD Certification Service",
      description:
        "Continuing Professional Development is a commitment to ongoing lifelong learning. CPD encourages looking forward and identifying opportunities to learn something new, refresh existing knowledge, improve skills, or simply keep up-to-date with the latest developments within a particular profession or industry.",
      icon: <Award className="partner-icon" />,
      logo: "/placeholder.svg?height=80&width=200",
      category: "Professional Development",
      color: "#006699",
    },
    {
      name: "ECSA",
      title: "European Community Shipowners' Association",
      description:
        "The European Community Shipowners' Association (ECSA) is the voice of the European shipping industry. Founded in 1965 as \"Comité des Associations d'Armateurs des Communautés Européennes (CAACE)\", ECSA promotes the interests of 20 member associations of the EU and Norway.",
      icon: <Globe className="partner-icon" />,
      logo: "/placeholder.svg?height=80&width=200",
      category: "Industry Association",
      color: "#004466",
    },
    {
      name: "Maritime Academy Training",
      title: "Maritime Academy Training",
      description:
        "Maritime Academy Training has provided hundreds of thousands of students from more than 185 countries with essential maritime skills and knowledge. Our education has helped students achieve a variety of career goals, everything from getting a promotion to starting a maritime business to pursuing new interests.",
      icon: <Users className="partner-icon" />,
      logo: "/placeholder.svg?height=80&width=200",
      category: "Education & Training",
      color: "#002233",
    },
    {
      name: "DNV GL",
      title: "DNV GL",
      description:
        "We are an independent expert in assurance and risk management. Driven by our purpose, to safeguard life, property and the environment, we empower our customers and their stakeholders with facts and reliable insights so that critical decisions can be made with confidence.",
      icon: <Building className="partner-icon" />,
      logo: "/placeholder.svg?height=80&width=200",
      category: "Risk Management",
      color: "#001122",
    },
  ]

  const partnerCategories = [
    { name: "Maritime Services", count: 1, color: "#00d4ff" },
    { name: "Certification", count: 1, color: "#0099cc" },
    { name: "Professional Development", count: 1, color: "#006699" },
    { name: "Industry Association", count: 1, color: "#004466" },
    { name: "Education & Training", count: 1, color: "#002233" },
    { name: "Risk Management", count: 1, color: "#001122" },
  ]

  return (
    <div className="partners-page">
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
            <span className="hero-badge-text">Strategic Maritime Partnerships</span>
          </div>

          <h1 className="hero-title">Our Partners</h1>

          <p className="hero-subtitle">
            At IAMP, our mission comes to life through impactful partnerships that strengthen global maritime standards.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">6+</div>
              <div className="stat-label">Strategic Partners</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">185+</div>
              <div className="stat-label">Countries Reached</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Partnership Categories</h2>
            <p className="section-subtitle">Diverse expertise across the maritime industry spectrum</p>
          </div>

          <div className="categories-grid">
            {partnerCategories.map((category, index) => (
              <div key={index} className="category-card">
                <div
                  className="category-icon"
                  style={{ backgroundColor: `${category.color}20`, color: category.color }}
                >
                  {index === 0 && <Waves className="category-icon-svg" />}
                  {index === 1 && <Shield className="category-icon-svg" />}
                  {index === 2 && <Award className="category-icon-svg" />}
                  {index === 3 && <Globe className="category-icon-svg" />}
                  {index === 4 && <Users className="category-icon-svg" />}
                  {index === 5 && <Building className="category-icon-svg" />}
                </div>
                <h3 className="category-name">{category.name}</h3>
                <div className="category-count">
                  {category.count} Partner{category.count > 1 ? "s" : ""}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="partners-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Strategic Partners</h2>
            <p className="section-subtitle">
              Meet our trusted partners who share our commitment to maritime excellence and professional development
            </p>
          </div>

          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div key={index} className="partner-card">
                <div className="partner-card-header">
                  <div
                    className="partner-category-badge"
                    style={{ backgroundColor: `${partner.color}20`, color: partner.color }}
                  >
                    {partner.category}
                  </div>
                </div>

                <div className="partner-logo-container">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    className="partner-logo"
                    onError={(e) => {
                      e.target.style.display = "none"
                      e.target.nextSibling.style.display = "flex"
                    }}
                  />
                  <div className="partner-icon-fallback" style={{ color: partner.color }}>
                    {partner.icon}
                  </div>
                </div>

                <div className="partner-info">
                  <h3 className="partner-name">{partner.name}</h3>
                  <h4 className="partner-title">{partner.title}</h4>
                </div>

                <p className="partner-description">{partner.description}</p>

                <div className="partner-actions">
                  <button className="partner-action-btn primary">
                    <span>Learn More</span>
                    <ExternalLink className="action-icon" />
                  </button>
                  <button className="partner-action-btn secondary">
                    <span>Contact</span>
                    <Mail className="action-icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <div className="cta-icon">
                <Users className="cta-icon-svg" />
              </div>
              <h2 className="cta-title">Become a Partner</h2>
              <p className="cta-subtitle">
                Join our growing network of maritime industry leaders and help shape the future of maritime professional
                development.
              </p>

              <div className="cta-features">
                <div className="cta-feature">
                  <Globe className="feature-icon" />
                  <span>Global Network Access</span>
                </div>
                <div className="cta-feature">
                  <Award className="feature-icon" />
                  <span>Industry Recognition</span>
                </div>
                <div className="cta-feature">
                  <Shield className="feature-icon" />
                  <span>Quality Assurance</span>
                </div>
              </div>

              <div className="cta-actions">
                <button className="cta-btn primary">
                  <span>Partner With Us</span>
                  <ArrowRight className="btn-icon" />
                </button>
                <button className="cta-btn secondary">
                  <span>Learn More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <button
        className="floating-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          opacity: scrollY > 300 ? 1 : 0,
          transform: scrollY > 300 ? "translateY(0)" : "translateY(20px)",
        }}
      >
        ↑
      </button>

      <style jsx>{`
        .partners-page {
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
          top: 10%;
          right: 10%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
        }

        .bg-element-2 {
          bottom: 20%;
          left: 5%;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(45, 53, 97, 0.3) 0%, transparent 70%);
          animation: float 8s ease-in-out infinite reverse;
        }

        .bg-element-3 {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.03) 0%, transparent 70%);
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
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #0099cc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 3vw, 1.4rem);
          color: #a0aec0;
          margin-bottom: 3rem;
          font-weight: 300;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .stat-item {
          text-align: center;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }

        .stat-item:hover {
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

        .categories-section {
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

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .category-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(169, 174, 202, 0.1));
          padding: 2rem;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          text-align: center;
          transition: all 0.3s ease;
        }

        .category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 212, 255, 0.1);
        }

        .category-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }

        .category-icon-svg {
          width: 1.5rem;
          height: 1.5rem;
        }

        .category-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .category-count {
          font-size: 0.9rem;
          color: #cbd5e0;
        }

        .partners-section {
          padding: 6rem 0;
          position: relative;
          z-index: 1;
        }

        .partners-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .partners-grid {
            grid-template-columns: 1fr;
          }
        }

        .partner-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(169, 174, 202, 0.15));
          padding: 2.5rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(30px);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .partner-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 212, 255, 0.2);
        }

        .partner-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #00d4ff, #0099cc);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .partner-card:hover::before {
          opacity: 1;
        }

        .partner-card-header {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 1.5rem;
        }

        .partner-category-badge {
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }

        .partner-logo-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100px;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          position: relative;
        }

        .partner-logo {
          max-height: 80px;
          max-width: 200px;
          object-fit: contain;
          filter: brightness(1.1) contrast(1.1);
        }

        .partner-icon-fallback {
          display: none;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        .partner-icon {
          width: 3rem;
          height: 3rem;
        }

        .partner-info {
          margin-bottom: 1.5rem;
        }

        .partner-name {
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }

        .partner-title {
          font-size: 1.2rem;
          color: #00d4ff;
          margin-bottom: 0;
          font-weight: 600;
          line-height: 1.4;
        }

        .partner-description {
          color: #a0aec0;
          line-height: 1.6;
          margin-bottom: 2rem;
          font-size: 0.95rem;
        }

        .partner-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .partner-action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          flex: 1;
          min-width: 120px;
          justify-content: center;
        }

        .partner-action-btn.primary {
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          color: white;
        }

        .partner-action-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 212, 255, 0.3);
        }

        .partner-action-btn.secondary {
          background: rgba(255, 255, 255, 0.1);
          color: #cbd5e0;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .partner-action-btn.secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.3);
        }

        .action-icon {
          width: 1rem;
          height: 1rem;
        }

        .cta-section {
          padding: 6rem 0;
          background: rgba(0, 0, 0, 0.2);
          position: relative;
          z-index: 1;
        }

        .cta-card {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2));
          padding: 4rem 2rem;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(30px);
          text-align: center;
        }

        .cta-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
        }

        .cta-icon-svg {
          width: 2.5rem;
          height: 2.5rem;
          color: white;
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

        .cta-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          color: #a0aec0;
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        .cta-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .cta-feature {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .feature-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: #00d4ff;
        }

        .cta-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          min-width: 160px;
          justify-content: center;
        }

        .cta-btn.primary {
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          color: white;
          box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
        }

        .cta-btn.primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4);
        }

        .cta-btn.secondary {
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: white;
          backdrop-filter: blur(10px);
        }

        .cta-btn.secondary:hover {
          border-color: #00d4ff;
          background: rgba(0, 212, 255, 0.1);
          transform: translateY(-3px);
        }

        .btn-icon {
          width: 1.2rem;
          height: 1.2rem;
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
            transform: translate(-50%, -50%) scale(1); 
            opacity: 0.3;
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.1); 
            opacity: 0.1;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 4rem 1rem 2rem;
          }

          .container {
            padding: 0 1rem;
          }

          .categories-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }

          .partner-card {
            padding: 2rem;
          }

          .partner-actions {
            flex-direction: column;
          }

          .partner-action-btn {
            flex: none;
          }

          .cta-card {
            padding: 3rem 1.5rem;
          }

          .cta-features {
            grid-template-columns: 1fr;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .cta-btn {
            width: 100%;
            max-width: 300px;
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
          .hero-stats {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .stat-item {
            padding: 1rem;
          }

          .stat-number {
            font-size: 2rem;
          }
        }
      `}</style>
       <IAMPFooter />
    </div>
  )
}

export default IAMPPartnersPage
