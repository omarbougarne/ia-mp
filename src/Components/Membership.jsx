"use client"
import IAMPNavbar from './IAMPNavbar'; // Import the navbar component
import IAMPFooter from './IAMPFooter'; // Import the footer component
import { useState } from "react"
import {
  Search,
  MapPin,
  Users,
  Globe,
  Shield,
  Eye,
  ChevronDown,
  ArrowUpDown,
  Filter,
  Star,
  Award,
  TrendingUp,
} from "lucide-react"

export default function Membership() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedGrade, setSelectedGrade] = useState("All Grades")
  const [selectedCountry, setSelectedCountry] = useState("All Countries")
  const [sortBy, setSortBy] = useState("name")
  const [sortOrder, setSortOrder] = useState("asc")

  // Enhanced member data with more details
  const members = [
    {
      id: 1,
      name: "Marine Surveyor",
      country: "Italy",
      flag: "🇮🇹",
      category: "Maritime",
      grade: "Professional",
      experience: "15+ years",
      specialization: "Ship Inspection",
      rating: 4.9,
      projects: 127,
      status: "Active",
    },
    {
      id: 2,
      name: "Awg Abdul Rahman",
      country: "Malaysia",
      flag: "🇲🇾",
      category: "Security",
      grade: "Professional",
      experience: "12+ years",
      specialization: "Port Security",
      rating: 4.8,
      projects: 89,
      status: "Active",
    },
    {
      id: 3,
      name: "Freda Peterson",
      country: "Nigeria",
      flag: "🇳🇬",
      category: "Maritime",
      grade: "Associate",
      experience: "8+ years",
      specialization: "Cargo Operations",
      rating: 4.7,
      projects: 64,
      status: "Active",
    },
    {
      id: 4,
      name: "David Velasquez",
      country: "Nigeria",
      flag: "🇳🇬",
      category: "Security",
      grade: "Professional",
      experience: "10+ years",
      specialization: "Maritime Security",
      rating: 4.9,
      projects: 95,
      status: "Active",
    },
    {
      id: 5,
      name: "Sarah Johnson",
      country: "United Kingdom",
      flag: "🇬🇧",
      category: "Maritime",
      grade: "Professional",
      experience: "20+ years",
      specialization: "Naval Architecture",
      rating: 5.0,
      projects: 156,
      status: "Active",
    },
    {
      id: 6,
      name: "Carlos Rodriguez",
      country: "Spain",
      flag: "🇪🇸",
      category: "Security",
      grade: "Associate",
      experience: "6+ years",
      specialization: "Cybersecurity",
      rating: 4.6,
      projects: 43,
      status: "Active",
    },
    {
      id: 7,
      name: "Anna Kowalski",
      country: "Poland",
      flag: "🇵🇱",
      category: "Maritime",
      grade: "Student",
      experience: "2+ years",
      specialization: "Marine Engineering",
      rating: 4.5,
      projects: 18,
      status: "Active",
    },
    {
      id: 8,
      name: "Ahmed Hassan",
      country: "Egypt",
      flag: "🇪🇬",
      category: "Security",
      grade: "Professional",
      experience: "14+ years",
      specialization: "Risk Assessment",
      rating: 4.8,
      projects: 112,
      status: "Active",
    },
  ]

  const categories = ["All Categories", "Maritime", "Security"]
  const grades = ["All Grades", "Professional", "Associate", "Student"]
  const countries = ["All Countries", "Italy", "Malaysia", "Nigeria", "United Kingdom", "Spain", "Poland", "Egypt"]

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All Categories" || member.category === selectedCategory
    const matchesGrade = selectedGrade === "All Grades" || member.grade === selectedGrade
    const matchesCountry = selectedCountry === "All Countries" || member.country === selectedCountry

    return matchesSearch && matchesCategory && matchesGrade && matchesCountry
  })

  const sortedMembers = [...filteredMembers].sort((a, b) => {
    let aValue = a[sortBy]
    let bValue = b[sortBy]

    if (sortBy === "rating" || sortBy === "projects") {
      aValue = Number.parseFloat(aValue)
      bValue = Number.parseFloat(bValue)
    }

    if (sortOrder === "asc") {
      return aValue > bValue ? 1 : -1
    } else {
      return aValue < bValue ? 1 : -1
    }
  })

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(column)
      setSortOrder("asc")
    }
  }

  const totalMembers = 120
  const securityMembers = 50
  const maritimeMembers = 70

  return (
    
    <div className="membership-container">
      {/* Enhanced Animated Background Elements */}
      <IAMPNavbar />
      <div className="bg-element bg-element-1" />
      <div className="bg-element bg-element-2" />
      <div className="bg-element bg-element-3" />

      <div className="content-wrapper">
              

        {/* Enhanced Header Section */}
        <div className="header-section">
          <div className="header-badge">
            <Award className="badge-icon" />
            <span className="badge-text">Professional Network Directory</span>
          </div>

          <h1 className="main-title">Membership Directory</h1>

          <p className="subtitle">"Connecting professionals worldwide to drive excellence."</p>

          <div className="welcome-card">
            <p className="welcome-text">
              🌍 Welcome to our global membership directory! Explore our talented members from all over the world.
            </p>
          </div>
        </div>

        <div className="main-layout">
          {/* Main Content */}
          <div className="main-content">
            {/* Enhanced Search and Filters */}
            <div className="filters-section">
              <div className="filters-header">
                <Filter className="filters-icon" />
                <h3 className="filters-title">Search & Filter Members</h3>
              </div>

              {/* Search Bar */}
              <div className="search-container">
                <Search className="search-icon" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name, country, or specialization..."
                  className="search-input"
                />
              </div>

              {/* Filter Dropdowns */}
              <div className="filters-grid">
                <div className="filter-group">
                  <Globe className="filter-icon" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="filter-select"
                  >
                    {categories.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="chevron-icon" />
                </div>

                <div className="filter-group">
                  <Award className="filter-icon" />
                  <select
                    value={selectedGrade}
                    onChange={(e) => setSelectedGrade(e.target.value)}
                    className="filter-select"
                  >
                    {grades.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="chevron-icon" />
                </div>

                <div className="filter-group">
                  <MapPin className="filter-icon" />
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="filter-select"
                  >
                    {countries.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="chevron-icon" />
                </div>
              </div>
            </div>

            {/* Modern Table Section */}
            <div className="table-section">
              <div className="table-header">
                <div className="table-title-group">
                  <Users className="table-icon" />
                  <h2 className="table-title">Our Partners</h2>
                  <div className="member-count-badge">{sortedMembers.length} Members</div>
                </div>
              </div>

              {/* Responsive Table/Cards */}
              <div className="table-container">
                {/* Desktop Table View */}
                <div className="desktop-table">
                  <table className="members-table">
                    <thead>
                      <tr className="table-header-row">
                        {[
                          { key: "name", label: "Member", sortable: true },
                          { key: "country", label: "Location", sortable: true },
                          { key: "category", label: "Category", sortable: true },
                          { key: "grade", label: "Grade", sortable: true },
                          { key: "specialization", label: "Specialization", sortable: false },
                          { key: "experience", label: "Experience", sortable: false },
                          { key: "rating", label: "Rating", sortable: true },
                          { key: "projects", label: "Projects", sortable: true },
                          { key: "actions", label: "Actions", sortable: false },
                        ].map((column) => (
                          <th
                            key={column.key}
                            className={`table-header-cell ${column.sortable ? "sortable" : ""}`}
                            onClick={() => column.sortable && handleSort(column.key)}
                          >
                            <div className="header-content">
                              {column.label}
                              {column.sortable && (
                                <ArrowUpDown className={`sort-icon ${sortBy === column.key ? "active" : ""}`} />
                              )}
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {sortedMembers.map((member, index) => (
                        <tr key={member.id} className={`table-row ${index % 2 === 0 ? "even" : "odd"}`}>
                          <td className="table-cell">
                            <div className="member-info">
                              <div className="avatar">{member.name.charAt(0)}</div>
                              <div className="member-details">
                                <div className="member-name">{member.name}</div>
                                <div className="member-id">ID: #{member.id.toString().padStart(3, "0")}</div>
                              </div>
                            </div>
                          </td>
                          <td className="table-cell">
                            <div className="location-info">
                              <span className="flag">{member.flag}</span>
                              <span className="country">{member.country}</span>
                            </div>
                          </td>
                          <td className="table-cell">
                            <span className={`category-badge ${member.category.toLowerCase()}`}>{member.category}</span>
                          </td>
                          <td className="table-cell">
                            <span className="grade-badge">{member.grade}</span>
                          </td>
                          <td className="table-cell specialization">{member.specialization}</td>
                          <td className="table-cell experience">{member.experience}</td>
                          <td className="table-cell">
                            <div className="rating-info">
                              <Star className="star-icon" />
                              <span className="rating-value">{member.rating}</span>
                            </div>
                          </td>
                          <td className="table-cell">
                            <div className="projects-info">
                              <TrendingUp className="trend-icon" />
                              <span className="projects-value">{member.projects}</span>
                            </div>
                          </td>
                          <td className="table-cell">
                            <button className="view-button">
                              <Eye className="eye-icon" />
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards View */}
                <div className="mobile-cards">
                  {sortedMembers.map((member) => (
                    <div key={member.id} className="member-card">
                      <div className="card-header">
                        <div className="avatar">{member.name.charAt(0)}</div>
                        <div className="member-info">
                          <div className="member-name">{member.name}</div>
                          <div className="member-id">ID: #{member.id.toString().padStart(3, "0")}</div>
                        </div>
                        <button className="view-button">
                          <Eye className="eye-icon" />
                          View
                        </button>
                      </div>

                      <div className="card-content">
                        <div className="detail-row">
                          <span className="detail-label">Location:</span>
                          <div className="location-info">
                            <span className="flag">{member.flag}</span>
                            <span className="country">{member.country}</span>
                          </div>
                        </div>

                        <div className="detail-row">
                          <span className="detail-label">Category:</span>
                          <span className={`category-badge ${member.category.toLowerCase()}`}>{member.category}</span>
                        </div>

                        <div className="detail-row">
                          <span className="detail-label">Grade:</span>
                          <span className="grade-badge">{member.grade}</span>
                        </div>

                        <div className="detail-row">
                          <span className="detail-label">Specialization:</span>
                          <span className="detail-value">{member.specialization}</span>
                        </div>

                        <div className="detail-row">
                          <span className="detail-label">Experience:</span>
                          <span className="detail-value">{member.experience}</span>
                        </div>

                        <div className="stats-row">
                          <div className="stat-item">
                            <div className="rating-info">
                              <Star className="star-icon" />
                              <span className="rating-value">{member.rating}</span>
                            </div>
                            <span className="stat-label">Rating</span>
                          </div>
                          <div className="stat-item">
                            <div className="projects-info">
                              <TrendingUp className="trend-icon" />
                              <span className="projects-value">{member.projects}</span>
                            </div>
                            <span className="stat-label">Projects</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Sidebar */}
          <div className="sidebar">
            <div className="sidebar-content">
              <div className="sidebar-header">
                <TrendingUp className="sidebar-icon" />
                <h3 className="sidebar-title">Live Statistics</h3>
              </div>

              <div className="stats-grid">
                {[
                  {
                    icon: <Users className="stat-icon" />,
                    label: "Total Members",
                    value: totalMembers,
                    change: "+12%",
                    color: "#00d4ff",
                  },
                  {
                    icon: <Shield className="stat-icon" />,
                    label: "Security Specialists",
                    value: securityMembers,
                    change: "+8%",
                    color: "#d2691e",
                  },
                  {
                    icon: <Globe className="stat-icon" />,
                    label: "Maritime Experts",
                    value: maritimeMembers,
                    change: "+15%",
                    color: "#0099cc",
                  },
                ].map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="stat-header">
                      {stat.icon}
                      <div className="stat-label">{stat.label}</div>
                    </div>
                    <div className="stat-content">
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-change" style={{ color: stat.color }}>
                        {stat.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="quick-actions">
                <h4 className="actions-title">Quick Actions</h4>
                <div className="actions-list">
                  {["Export Directory", "Add New Member", "Send Invitation"].map((action, index) => (
                    <button key={index} className="action-button">
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .membership-container {
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
        }

        .bg-element-1 {
          top: 5%;
          right: 5%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, rgba(45, 53, 97, 0.1) 50%, transparent 70%);
        }

        .bg-element-2 {
          bottom: 5%;
          left: 0%;
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(210, 105, 30, 0.1) 0%, rgba(184, 134, 11, 0.05) 50%, transparent 70%);
          animation: float 12s ease-in-out infinite reverse;
        }

        .bg-element-3 {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.03) 0%, transparent 70%);
          animation: pulse 6s ease-in-out infinite;
        }

        .content-wrapper {
          padding: 2rem;
          max-width: 1600px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .header-section {
          text-align: center;
          margin-bottom: 4rem;
        }

        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2));
          padding: 1rem 2rem;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 2rem;
          margin-top: 3rem;
        }

        .badge-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: #00d4ff;
        }

        .badge-text {
          color: #cbd5e0;
          font-size: 1rem;
          font-weight: 500;
        }

        .main-title {
          font-size: clamp(2.5rem, 8vw, 4rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #00d4ff 30%, #0099cc 70%, #ffffff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.02em;
        }

        .subtitle {
          font-size: clamp(1rem, 3vw, 1.4rem);
          color: #cbd5e0;
          margin-bottom: 3rem;
          font-style: italic;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .welcome-card {
          background: linear-gradient(135deg, #d2691e, #b8860b);
          padding: 1.5rem 3rem;
          border-radius: 20px;
          margin-bottom: 3rem;
          box-shadow: 0 8px 30px rgba(210, 105, 30, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
        }

        .welcome-text {
          margin: 0;
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          font-weight: 600;
          line-height: 1.5;
        }

        .main-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 1200px) {
          .main-layout {
            grid-template-columns: 1fr 350px;
          }
        }

        .main-content {
          min-width: 0;
        }

        .filters-section {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2));
          padding: 2.5rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(30px);
          margin-bottom: 2rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }

        .filters-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .filters-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: #00d4ff;
        }

        .filters-title {
          margin: 0;
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
        }

        .search-container {
          position: relative;
          margin-bottom: 2rem;
        }

        .search-icon {
          position: absolute;
          left: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
          color: #00d4ff;
          width: 1.3rem;
          height: 1.3rem;
        }

        .search-input {
          width: 100%;
          box-sizing: border-box;
          background: rgba(255, 255, 255, 0.08);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 1.2rem 1.5rem 1.2rem 4rem;
          color: white;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .search-input:focus {
          outline: none;
          border-color: #00d4ff;
          box-shadow: 0 0 0 4px rgba(0, 212, 255, 0.1);
          background: rgba(255, 255, 255, 0.12);
        }

        .search-input::placeholder {
          color: #cbd5e0;
        }

        .filters-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .filters-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .filter-group {
          position: relative;
        }

        .filter-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #00d4ff;
          width: 1.2rem;
          height: 1.2rem;
          z-index: 1;
        }

        .filter-select {
          width: 100%;
          background: rgba(255, 255, 255, 0.08);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1rem 3rem;
          color: white;
          font-size: 1rem;
          cursor: pointer;
          appearance: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .filter-select:focus {
          outline: none;
          border-color: #00d4ff;
          background: rgba(255, 255, 255, 0.12);
        }

        .filter-select option {
          background: #1a1f3a;
          color: white;
          padding: 0.5rem;
        }

        .chevron-icon {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #00d4ff;
          width: 1.2rem;
          height: 1.2rem;
          pointer-events: none;
        }

        .table-section {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(45, 53, 97, 0.15));
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(30px);
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }

        .table-header {
          padding: 2rem 2.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          background: linear-gradient(135deg, rgba(210, 105, 30, 0.1), rgba(184, 134, 11, 0.05));
        }

        .table-title-group {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .table-icon {
          width: 1.8rem;
          height: 1.8rem;
          color: #d2691e;
        }

        .table-title {
          margin: 0;
          font-size: 1.8rem;
          font-weight: 800;
          color: #d2691e;
          flex: 1;
        }

        .member-count-badge {
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .table-container {
          overflow-x: auto;
        }

        .desktop-table {
          display: block;
        }

        @media (max-width: 1024px) {
          .desktop-table {
            display: none;
          }
        }

        .members-table {
          width: 100%;
          border-collapse: collapse;
        }

        .table-header-row {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2));
          border-bottom: 2px solid rgba(255, 255, 255, 0.1);
        }

        .table-header-cell {
          padding: 1.5rem 1rem;
          text-align: left;
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: all 0.3s ease;
          position: relative;
        }

        .table-header-cell.sortable {
          cursor: pointer;
        }

        .table-header-cell.sortable:hover {
          color: #00d4ff;
        }

        .header-content {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .sort-icon {
          width: 0.8rem;
          height: 0.8rem;
          opacity: 0.5;
          color: #cbd5e0;
        }

        .sort-icon.active {
          opacity: 1;
          color: #00d4ff;
        }

        .table-row {
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .table-row.even {
          background: rgba(255, 255, 255, 0.02);
        }

        .table-row:hover {
          background: rgba(0, 212, 255, 0.05);
          transform: scale(1.01);
          box-shadow: 0 4px 20px rgba(0, 212, 255, 0.1);
        }

        .table-cell {
          padding: 1.5rem 1rem;
          vertical-align: middle;
        }

        .member-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: bold;
          color: white;
        }

        .member-details {
          flex: 1;
        }

        .member-name {
          color: #ffffff;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.2rem;
        }

        .member-id {
          color: #cbd5e0;
          font-size: 0.8rem;
        }

        .location-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .flag {
          font-size: 1.2rem;
        }

        .country {
          color: #cbd5e0;
          font-size: 0.9rem;
        }

        .category-badge {
          color: white;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .category-badge.maritime {
          background: linear-gradient(135deg, #00d4ff, #0099cc);
        }

        .category-badge.security {
          background: linear-gradient(135deg, #d2691e, #b8860b);
        }

        .grade-badge {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          padding: 0.4rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .specialization,
        .experience {
          color: #cbd5e0;
          font-size: 0.9rem;
        }

        .rating-info,
        .projects-info {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .star-icon {
          width: 1rem;
          height: 1rem;
          color: #ffd700;
          fill: #ffd700;
        }

        .trend-icon {
          width: 1rem;
          height: 1rem;
          color: #00d4ff;
        }

        .rating-value,
        .projects-value {
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .view-button {
          background: linear-gradient(135deg, #d2691e, #b8860b);
          border: none;
          color: white;
          padding: 0.6rem 1.2rem;
          border-radius: 10px;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .view-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(210, 105, 30, 0.4);
        }

        .eye-icon {
          width: 0.9rem;
          height: 0.9rem;
        }

        .mobile-cards {
          display: none;
          padding: 1rem;
          gap: 1rem;
        }

        @media (max-width: 1024px) {
          .mobile-cards {
            display: flex;
            flex-direction: column;
          }
        }

        .member-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .member-card:hover {
          background: rgba(0, 212, 255, 0.05);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 212, 255, 0.1);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .card-content {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .detail-label {
          color: #cbd5e0;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .detail-value {
          color: #ffffff;
          font-size: 0.9rem;
          text-align: right;
        }

        .stats-row {
          display: flex;
          justify-content: space-around;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
        }

        .stat-label {
          color: #cbd5e0;
          font-size: 0.8rem;
        }

        .sidebar {
          order: -1;
        }

        @media (min-width: 1200px) {
          .sidebar {
            order: 0;
          }
        }

        .sidebar-content {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2));
          padding: 2.5rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(30px);
          position: sticky;
          top: 2rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }

        .sidebar-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .sidebar-icon {
          width: 1.8rem;
          height: 1.8rem;
          color: #00d4ff;
        }

        .sidebar-title {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 800;
          color: #00d4ff;
        }

        .stats-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .stat-card {
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-2px);
        }

        .stat-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .stat-icon {
          width: 1.8rem;
          height: 1.8rem;
        }

        .stat-label {
          color: #cbd5e0;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .stat-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .stat-value {
          color: #ffffff;
          font-size: 2rem;
          font-weight: 900;
        }

        .stat-change {
          font-size: 0.8rem;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.3rem 0.6rem;
          border-radius: 10px;
        }

        .quick-actions {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .actions-title {
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .actions-list {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .action-button {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #cbd5e0;
          padding: 0.8rem 1rem;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }

        .action-button:hover {
          background: rgba(0, 212, 255, 0.1);
          color: #00d4ff;
          border-color: #00d4ff;
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.8;
          }
          50% { 
            transform: translateY(-30px) rotate(180deg); 
            opacity: 1;
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
          .content-wrapper {
            padding: 1rem;
          }

          .filters-section {
            padding: 1.5rem;
          }

          .sidebar-content {
            padding: 1.5rem;
          }

          .table-header {
            padding: 1.5rem;
          }

          .welcome-card {
            padding: 1rem 1.5rem;
          }
        }
      `}</style>
       <IAMPFooter />
    </div>
  )
}
