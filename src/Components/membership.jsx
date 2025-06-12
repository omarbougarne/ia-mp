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

export default function membership() {
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
    <div
      style={{
        background: "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 25%, #2d3561 50%, #1a1f3a 75%, #0a0e27 100%)",
        minHeight: "100vh",
        color: "#ffffff",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Enhanced Animated Background Elements */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          right: "5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, rgba(45, 53, 97, 0.1) 50%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 8s ease-in-out infinite",
          filter: "blur(1px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "0%",
          width: "350px",
          height: "350px",
          background:
            "radial-gradient(circle, rgba(210, 105, 30, 0.1) 0%, rgba(184, 134, 11, 0.05) 50%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 12s ease-in-out infinite reverse",
          filter: "blur(1px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(0, 212, 255, 0.03) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "pulse 6s ease-in-out infinite",
        }}
      />

      {/* Modern Navigation */}
    <IAMPNavbar />

      <div style={{ padding: "3rem", maxWidth: "1600px", margin: "0 auto" }}>
        {/* Enhanced Header Section */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              background: "linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))",
              padding: "1rem 2rem",
              borderRadius: "50px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              marginBottom: "2rem",
              marginTop: "3rem"
         
            }}
          >
            <Award style={{ width: "1.5rem", height: "1.5rem", color: "#00d4ff" }} />
            <span style={{ color: "#cbd5e0", fontSize: "1rem", fontWeight: "500" }}>
              Professional Network Directory
            </span>
          </div>

          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "900",
              lineHeight: "1.1",
              marginBottom: "1.5rem",
              background: "linear-gradient(135deg, #ffffff 0%, #00d4ff 30%, #0099cc 70%, #ffffff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.02em",
            }}
          >
            Membership Directory
          </h1>

          <p
            style={{
              fontSize: "1.4rem",
              color: "#cbd5e0",
              marginBottom: "3rem",
              fontStyle: "italic",
              maxWidth: "600px",
              margin: "0 auto 3rem",
              lineHeight: "1.6",
            }}
          >
            "Connecting professionals worldwide to drive excellence."
          </p>

          <div
            style={{
              background: "linear-gradient(135deg, #d2691e, #b8860b)",
              padding: "1.5rem 3rem",
              borderRadius: "20px",
              marginBottom: "3rem",
              boxShadow: "0 8px 30px rgba(210, 105, 30, 0.3)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(20px)",
            }}
          >
            <p style={{ margin: 0, fontSize: "1.2rem", fontWeight: "600" }}>
              🌍 Welcome to our global membership directory! Explore our talented members from all over the world.
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 350px", gap: "3rem" }}>
          {/* Main Content */}
          <div>
            {/* Enhanced Search and Filters */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))",
                padding: "2.5rem",
                borderRadius: "20px",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(30px)",
                marginBottom: "2rem",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                <Filter style={{ width: "1.5rem", height: "1.5rem", color: "#00d4ff" }} />
                <h3 style={{ margin: 0, fontSize: "1.3rem", fontWeight: "700", color: "#ffffff" }}>
                  Search & Filter Members
                </h3>
              </div>

              {/* Search Bar */}
              <div style={{ position: "relative", marginBottom: "2rem" }}>
                <Search
                  style={{
                    position: "absolute",
                    left: "1.5rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#00d4ff",
                    width: "1.3rem",
                    height: "1.3rem",
                  }}
                />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name, country, or specialization..."
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "2px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "15px",
                    padding: "1.2rem 1.5rem 1.2rem 4rem",
                    color: "white",
                    fontSize: "1.1rem",
                    transition: "all 0.3s ease",
                    fontWeight: "500",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#00d4ff"
                    e.target.style.boxShadow = "0 0 0 4px rgba(0, 212, 255, 0.1)"
                    e.target.style.background = "rgba(255, 255, 255, 0.12)"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.1)"
                    e.target.style.boxShadow = "none"
                    e.target.style.background = "rgba(255, 255, 255, 0.08)"
                  }}
                />
              </div>

              {/* Filter Dropdowns */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem" }}>
                {[
                  {
                    value: selectedCategory,
                    setValue: setSelectedCategory,
                    options: categories,
                    placeholder: "All Categories",
                    icon: <Globe style={{ width: "1.2rem", height: "1.2rem" }} />,
                  },
                  {
                    value: selectedGrade,
                    setValue: setSelectedGrade,
                    options: grades,
                    placeholder: "All Grades",
                    icon: <Award style={{ width: "1.2rem", height: "1.2rem" }} />,
                  },
                  {
                    value: selectedCountry,
                    setValue: setSelectedCountry,
                    options: countries,
                    placeholder: "All Countries",
                    icon: <MapPin style={{ width: "1.2rem", height: "1.2rem" }} />,
                  },
                ].map((filter, index) => (
                  <div key={index} style={{ position: "relative" }}>
                    <div
                      style={{
                        position: "absolute",
                        left: "1rem",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#00d4ff",
                        zIndex: 1,
                      }}
                    >
                      {filter.icon}
                    </div>
                    <select
                      value={filter.value}
                      onChange={(e) => filter.setValue(e.target.value)}
                      style={{
                        width: "100%",
                        background: "rgba(255, 255, 255, 0.08)",
                        border: "2px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "12px",
                        padding: "1rem 3rem 1rem 3rem",
                        color: "white",
                        fontSize: "1rem",
                        cursor: "pointer",
                        appearance: "none",
                        fontWeight: "500",
                        transition: "all 0.3s ease",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#00d4ff"
                        e.target.style.background = "rgba(255, 255, 255, 0.12)"
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(255, 255, 255, 0.1)"
                        e.target.style.background = "rgba(255, 255, 255, 0.08)"
                      }}
                    >
                      {filter.options.map((option) => (
                        <option key={option} value={option} style={{ background: "#1a1f3a", color: "white" }}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      style={{
                        position: "absolute",
                        right: "1rem",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#00d4ff",
                        width: "1.2rem",
                        height: "1.2rem",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Modern Table Section */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(45, 53, 97, 0.15))",
                borderRadius: "20px",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(30px)",
                overflow: "hidden",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div
                style={{
                  padding: "2rem 2.5rem",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  background: "linear-gradient(135deg, rgba(210, 105, 30, 0.1), rgba(184, 134, 11, 0.05))",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <Users style={{ width: "1.8rem", height: "1.8rem", color: "#d2691e" }} />
                  <h2
                    style={{
                      margin: 0,
                      fontSize: "1.8rem",
                      fontWeight: "800",
                      color: "#d2691e",
                    }}
                  >
                    Our Partners
                  </h2>
                  <div
                    style={{
                      background: "linear-gradient(135deg, #00d4ff, #0099cc)",
                      color: "white",
                      padding: "0.3rem 0.8rem",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                    }}
                  >
                    {sortedMembers.length} Members
                  </div>
                </div>
              </div>

              {/* Table */}
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr
                      style={{
                        background: "linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))",
                        borderBottom: "2px solid rgba(255, 255, 255, 0.1)",
                      }}
                    >
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
                          style={{
                            padding: "1.5rem 1rem",
                            textAlign: "left",
                            color: "#ffffff",
                            fontSize: "0.9rem",
                            fontWeight: "700",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            cursor: column.sortable ? "pointer" : "default",
                            transition: "all 0.3s ease",
                            position: "relative",
                          }}
                          onClick={() => column.sortable && handleSort(column.key)}
                          onMouseEnter={(e) => {
                            if (column.sortable) {
                              e.target.style.color = "#00d4ff"
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (column.sortable) {
                              e.target.style.color = "#ffffff"
                            }
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            {column.label}
                            {column.sortable && (
                              <ArrowUpDown
                                style={{
                                  width: "0.8rem",
                                  height: "0.8rem",
                                  opacity: sortBy === column.key ? 1 : 0.5,
                                  color: sortBy === column.key ? "#00d4ff" : "#cbd5e0",
                                }}
                              />
                            )}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sortedMembers.map((member, index) => (
                      <tr
                        key={member.id}
                        style={{
                          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                          transition: "all 0.3s ease",
                          background: index % 2 === 0 ? "rgba(255, 255, 255, 0.02)" : "transparent",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(0, 212, 255, 0.05)"
                          e.currentTarget.style.transform = "scale(1.01)"
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background =
                            index % 2 === 0 ? "rgba(255, 255, 255, 0.02)" : "transparent"
                          e.currentTarget.style.transform = "scale(1)"
                        }}
                      >
                        <td style={{ padding: "1.5rem 1rem" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                            <div
                              style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, #00d4ff, #0099cc)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "1.2rem",
                                fontWeight: "bold",
                                color: "white",
                              }}
                            >
                              {member.name.charAt(0)}
                            </div>
                            <div>
                              <div style={{ color: "#ffffff", fontSize: "1rem", fontWeight: "600" }}>{member.name}</div>
                              <div style={{ color: "#cbd5e0", fontSize: "0.8rem" }}>
                                ID: #{member.id.toString().padStart(3, "0")}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td style={{ padding: "1.5rem 1rem" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <span style={{ fontSize: "1.2rem" }}>{member.flag}</span>
                            <span style={{ color: "#cbd5e0", fontSize: "0.9rem" }}>{member.country}</span>
                          </div>
                        </td>
                        <td style={{ padding: "1.5rem 1rem" }}>
                          <span
                            style={{
                              background:
                                member.category === "Maritime"
                                  ? "linear-gradient(135deg, #00d4ff, #0099cc)"
                                  : "linear-gradient(135deg, #d2691e, #b8860b)",
                              color: "white",
                              padding: "0.4rem 0.8rem",
                              borderRadius: "20px",
                              fontSize: "0.8rem",
                              fontWeight: "600",
                            }}
                          >
                            {member.category}
                          </span>
                        </td>
                        <td style={{ padding: "1.5rem 1rem" }}>
                          <span
                            style={{
                              background: "rgba(255, 255, 255, 0.1)",
                              color: "#ffffff",
                              padding: "0.4rem 0.8rem",
                              borderRadius: "15px",
                              fontSize: "0.8rem",
                              fontWeight: "500",
                              border: "1px solid rgba(255, 255, 255, 0.2)",
                            }}
                          >
                            {member.grade}
                          </span>
                        </td>
                        <td style={{ padding: "1.5rem 1rem", color: "#cbd5e0", fontSize: "0.9rem" }}>
                          {member.specialization}
                        </td>
                        <td style={{ padding: "1.5rem 1rem", color: "#cbd5e0", fontSize: "0.9rem" }}>
                          {member.experience}
                        </td>
                        <td style={{ padding: "1.5rem 1rem" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                            <Star style={{ width: "1rem", height: "1rem", color: "#ffd700", fill: "#ffd700" }} />
                            <span style={{ color: "#ffffff", fontSize: "0.9rem", fontWeight: "600" }}>
                              {member.rating}
                            </span>
                          </div>
                        </td>
                        <td style={{ padding: "1.5rem 1rem" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                            <TrendingUp style={{ width: "1rem", height: "1rem", color: "#00d4ff" }} />
                            <span style={{ color: "#ffffff", fontSize: "0.9rem", fontWeight: "600" }}>
                              {member.projects}
                            </span>
                          </div>
                        </td>
                        <td style={{ padding: "1.5rem 1rem" }}>
                          <button
                            style={{
                              background: "linear-gradient(135deg, #d2691e, #b8860b)",
                              border: "none",
                              color: "white",
                              padding: "0.6rem 1.2rem",
                              borderRadius: "10px",
                              fontSize: "0.8rem",
                              fontWeight: "600",
                              cursor: "pointer",
                              transition: "all 0.3s ease",
                              display: "flex",
                              alignItems: "center",
                              gap: "0.4rem",
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.transform = "translateY(-2px)"
                              e.target.style.boxShadow = "0 4px 15px rgba(210, 105, 30, 0.4)"
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.transform = "translateY(0)"
                              e.target.style.boxShadow = "none"
                            }}
                          >
                            <Eye style={{ width: "0.9rem", height: "0.9rem" }} />
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Enhanced Sidebar */}
          <div>
            <div
              style={{
                background: "linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2))",
                padding: "2.5rem",
                borderRadius: "20px",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(30px)",
                position: "sticky",
                top: "6rem",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                <TrendingUp style={{ width: "1.8rem", height: "1.8rem", color: "#00d4ff" }} />
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1.5rem",
                    fontWeight: "800",
                    color: "#00d4ff",
                  }}
                >
                  Live Statistics
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  {
                    icon: <Users style={{ width: "1.8rem", height: "1.8rem", color: "#00d4ff" }} />,
                    label: "Total Members",
                    value: totalMembers,
                    change: "+12%",
                    color: "#00d4ff",
                  },
                  {
                    icon: <Shield style={{ width: "1.8rem", height: "1.8rem", color: "#d2691e" }} />,
                    label: "Security Specialists",
                    value: securityMembers,
                    change: "+8%",
                    color: "#d2691e",
                  },
                  {
                    icon: <Globe style={{ width: "1.8rem", height: "1.8rem", color: "#0099cc" }} />,
                    label: "Maritime Experts",
                    value: maritimeMembers,
                    change: "+15%",
                    color: "#0099cc",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "1.5rem",
                      background: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "15px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)"
                      e.currentTarget.style.transform = "translateY(-2px)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"
                      e.currentTarget.style.transform = "translateY(0)"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                      {stat.icon}
                      <div style={{ color: "#cbd5e0", fontSize: "0.9rem", fontWeight: "500" }}>{stat.label}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ color: "#ffffff", fontSize: "2rem", fontWeight: "900" }}>{stat.value}</div>
                      <div
                        style={{
                          color: stat.color,
                          fontSize: "0.8rem",
                          fontWeight: "600",
                          background: `${stat.color}20`,
                          padding: "0.3rem 0.6rem",
                          borderRadius: "10px",
                        }}
                      >
                        {stat.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <h4 style={{ color: "#ffffff", fontSize: "1.1rem", fontWeight: "700", marginBottom: "1rem" }}>
                  Quick Actions
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                  {["Export Directory", "Add New Member", "Send Invitation"].map((action, index) => (
                    <button
                      key={index}
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "#cbd5e0",
                        padding: "0.8rem 1rem",
                        borderRadius: "10px",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        textAlign: "left",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = "rgba(0, 212, 255, 0.1)"
                        e.target.style.color = "#00d4ff"
                        e.target.style.borderColor = "#00d4ff"
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "rgba(255, 255, 255, 0.05)"
                        e.target.style.color = "#cbd5e0"
                        e.target.style.borderColor = "rgba(255, 255, 255, 0.1)"
                      }}
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <IAMPFooter />
      {/* Enhanced Animations */}
      <style>
        {`
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
          
          select option {
            background: #1a1f3a !important;
            color: white !important;
            padding: 0.5rem !important;
          }
          
          table {
            border-spacing: 0;
          }
          
          tbody tr:hover {
            box-shadow: 0 4px 20px rgba(0, 212, 255, 0.1);
          }
        `}
      </style>
    </div>
  )
}
