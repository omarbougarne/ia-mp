"use client"
import IAMPNavbar from './IAMPNavbar'; // Import the navbar component
import IAMPFooter from './IAMPFooter'; // Import the footer component
import { useState, useEffect } from "react"
import {
  BookOpen,
  Compass,
  Waves,
  ArrowUp,
  Search,
  Eye,
  Heart,
  Clock,
  ArrowRight,
  Mail,
  Filter,
  Calendar,
  User,
  TrendingUp,
  Star,
} from "lucide-react"

const IAMPBlogPage = () => {
  const [scrollY, setScrollY] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [email, setEmail] = useState("")
  const [sortBy, setSortBy] = useState("date")

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

  const blogPosts = [
    {
      id: 1,
      title: "Maritime Safety Trends in 2025",
      excerpt:
        "A comprehensive overview of the latest safety measures adopted across the shipping industry to enhance crew and cargo security in the modern maritime landscape.",
      author: "Jane Smith",
      date: "2025-04-15",
      category: "Safety",
      readTime: "5 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
      views: 1248,
      likes: 89,
      tags: ["Safety", "Regulations", "Technology"],
    },
    {
      id: 2,
      title: "Green Technology in Maritime",
      excerpt:
        "Discover how innovative green technology is reshaping the maritime sector, from fuel efficiency improvements to comprehensive emissions reduction strategies.",
      author: "John Doe",
      date: "2025-03-20",
      category: "Technology",
      readTime: "7 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      views: 892,
      likes: 67,
      tags: ["Technology", "Sustainability", "Innovation"],
    },
    {
      id: 3,
      title: "International Shipping Regulations Update",
      excerpt:
        "Understanding the new international shipping regulations and how they affect global trade, maritime operations, and compliance requirements.",
      author: "Alice Brown",
      date: "2025-05-10",
      category: "Regulations",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      views: 1056,
      likes: 78,
      tags: ["Regulations", "Compliance", "Trade"],
    },
    {
      id: 4,
      title: "Climate Change and Maritime Adaptation",
      excerpt:
        "Exploring how the maritime industry is adapting to the challenges of climate change through sustainable practices, innovation, and strategic planning.",
      author: "Michael Johnson",
      date: "2025-06-05",
      category: "Sustainability",
      readTime: "8 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
      views: 1432,
      likes: 103,
      tags: ["Sustainability", "Climate", "Innovation"],
    },
    {
      id: 5,
      title: "AI Revolution in Maritime Navigation",
      excerpt:
        "How artificial intelligence is revolutionizing ship navigation, port operations, and logistics management for the global maritime industry.",
      author: "Sarah Lee",
      date: "2025-02-28",
      category: "Technology",
      readTime: "9 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      views: 1689,
      likes: 124,
      tags: ["AI", "Technology", "Navigation"],
    },
    {
      id: 6,
      title: "Cybersecurity in Maritime Operations",
      excerpt:
        "Why cybersecurity is a critical concern for the maritime sector and how companies can safeguard against growing cyber threats and vulnerabilities.",
      author: "David Clark",
      date: "2025-04-02",
      category: "Security",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      views: 934,
      likes: 71,
      tags: ["Security", "Cybersecurity", "Risk Management"],
    },
  ]

  const categories = ["All", "Safety", "Technology", "Regulations", "Sustainability", "Security", "Innovation"]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date) - new Date(a.date)
    } else if (sortBy === "views") {
      return b.views - a.views
    } else if (sortBy === "likes") {
      return b.likes - a.likes
    }
    return 0
  })

  const featuredPosts = sortedPosts.filter((post) => post.featured)
  const regularPosts = sortedPosts.filter((post) => !post.featured)

  const getCategoryColor = (category) => {
    const colors = {
      Safety: "#ef4444",
      Technology: "#8b5cf6",
      Sustainability: "#10b981",
      Security: "#f59e0b",
      Innovation: "#ec4899",
      Regulations: "#3b82f6",
    }
    return colors[category] || "#00d4ff"
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }

  const BlogCard = ({ post, featured = false }) => (
    <article className={`blog-card ${featured ? "featured" : "regular"}`}>
      {featured && (
        <div className="featured-badge">
          <Star className="featured-star" />
          <span>Featured</span>
        </div>
      )}

      <div className="blog-image-container">
        <img src={post.image || "/placeholder.svg"} alt={post.title} className="blog-image" />
        <div className="image-overlay">
          <div className="category-tag" style={{ backgroundColor: getCategoryColor(post.category), color: "white" }}>
            {post.category}
          </div>
        </div>
      </div>

      <div className="blog-content">
        <div className="blog-meta">
          <div className="meta-item">
            <Calendar className="meta-icon" />
            <span className="meta-text">{formatDate(post.date)}</span>
          </div>
          <div className="meta-item">
            <User className="meta-icon" />
            <span className="meta-text">{post.author}</span>
          </div>
          <div className="meta-item">
            <Clock className="meta-icon" />
            <span className="meta-text">{post.readTime}</span>
          </div>
        </div>

        <h3 className="blog-title">{post.title}</h3>
        <p className="blog-excerpt">{post.excerpt}</p>

        <div className="blog-tags">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="blog-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="blog-footer">
          <div className="blog-stats">
            <div className="stat-item">
              <Eye className="stat-icon" />
              <span className="stat-text">{post.views.toLocaleString()}</span>
            </div>
            <div className="stat-item">
              <Heart className="stat-icon" />
              <span className="stat-text">{post.likes}</span>
            </div>
          </div>

          <button className="read-more-btn">
            <span>Read More</span>
            <ArrowRight className="btn-icon" />
          </button>
        </div>
      </div>
    </article>
  )

  return (
    <div className="blog-page">
      {/* Animated Background Elements */}
      <IAMPNavbar />
      <div className="bg-element bg-element-1" />
      <div className="bg-element bg-element-2" />
      <div className="bg-element bg-element-3" />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <BookOpen className="hero-badge-icon" />
            <span className="hero-badge-text">Maritime Knowledge Hub</span>
          </div>

          <div className="hero-icons">
            <BookOpen className="hero-icon" />
            <Compass className="hero-icon" />
            <Waves className="hero-icon" />
          </div>

          <h1 className="hero-title">Maritime Insights & Trends</h1>
          <h2 className="hero-subtitle">EXPLORE THE FUTURE OF MARITIME</h2>
          <p className="hero-description">
            Stay ahead of the curve with expert insights, industry analysis, and the latest developments shaping the
            maritime world. From cutting-edge technology to sustainability initiatives, discover what's driving the
            industry forward.
          </p>

          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Expert Articles</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Monthly Readers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">6</div>
              <div className="stat-label">Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="filters-section">
        <div className="container">
          <div className="filters-header">
            <Filter className="filters-icon" />
            <h3 className="filters-title">Find Your Perfect Read</h3>
          </div>

          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search articles, authors, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-controls">
            <div className="categories-filter">
              <label className="filter-label">Category:</label>
              <div className="categories-grid">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`category-btn ${selectedCategory === category ? "active" : ""}`}
                    style={{
                      borderColor: selectedCategory === category ? getCategoryColor(category) : "transparent",
                      backgroundColor:
                        selectedCategory === category ? `${getCategoryColor(category)}20` : "transparent",
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="sort-filter">
              <label className="filter-label">Sort by:</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select">
                <option value="date">Latest</option>
                <option value="views">Most Viewed</option>
                <option value="likes">Most Liked</option>
              </select>
            </div>
          </div>

          <div className="results-summary">
            <span className="results-count">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
            </span>
            {searchTerm && (
              <span className="search-term">
                for "<strong>{searchTerm}</strong>"
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredPosts.length > 0 && (
        <section className="featured-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Featured Articles</h2>
              <p className="section-subtitle">Discover our most impactful insights and trending topics</p>
            </div>

            <div className="featured-grid">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="articles-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Latest Insights</h2>
            <p className="section-subtitle">Stay informed with our comprehensive maritime industry coverage</p>
          </div>

          <div className="articles-grid">
            {regularPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {regularPosts.length === 0 && (
            <div className="no-results">
              <Search className="no-results-icon" />
              <h3 className="no-results-title">No articles found</h3>
              <p className="no-results-text">Try adjusting your search terms or filters</p>
            </div>
          )}

          {regularPosts.length > 0 && (
            <div className="load-more-container">
              <button className="load-more-btn">
                <span>Load More Articles</span>
                <TrendingUp className="load-more-icon" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-card">
            <div className="newsletter-content">
              <div className="newsletter-icon">
                <Mail className="mail-icon" />
              </div>

              <h2 className="newsletter-title">Stay Updated with Maritime Insights</h2>
              <p className="newsletter-description">
                Subscribe to our newsletter and receive the latest maritime industry news, trends, and exclusive content
                directly to your inbox.
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
                <button type="submit" className="newsletter-btn">
                  Subscribe Now
                </button>
              </form>

              <div className="newsletter-features">
                <div className="feature-item">
                  <BookOpen className="feature-icon" />
                  <span>Weekly Industry Updates</span>
                </div>
                <div className="feature-item">
                  <TrendingUp className="feature-icon" />
                  <span>Exclusive Market Insights</span>
                </div>
                <div className="feature-item">
                  <Star className="feature-icon" />
                  <span>Expert Analysis</span>
                </div>
              </div>

              <p className="newsletter-privacy">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button onClick={scrollToTop} className="scroll-top-btn">
          <ArrowUp className="scroll-icon" />
        </button>
      )}

      <style jsx>{`
        .blog-page {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%);
          min-height: 100vh;
          color: white;
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
          right: 5%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%);
        }

        .bg-element-2 {
          bottom: 20%;
          left: 8%;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(45, 53, 97, 0.4) 0%, transparent 70%);
          animation: float 6s ease-in-out infinite reverse;
        }

        .bg-element-3 {
          top: 50%;
          right: 80%;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
          animation: pulse 4s ease-in-out infinite;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        .hero-section {
          min-height: 90vh;
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

        .hero-icons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .hero-icon {
          width: 2.5rem;
          height: 2.5rem;
          color: #00d4ff;
          opacity: 0.8;
        }

        .hero-title {
          font-size: clamp(3rem, 8vw, 4.5rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #3b82f6 100%);
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
          font-size: clamp(1rem, 2.5vw, 1.3rem);
          color: #cbd5e0;
          margin-bottom: 3rem;
          line-height: 1.6;
          max-width: 900px;
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

        .filter-controls {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 2rem;
          align-items: start;
          margin-bottom: 2rem;
        }

        .filter-label {
          display: block;
          color: #cbd5e0;
          font-weight: 600;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        .categories-filter {
          flex: 1;
        }

        .categories-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .category-btn {
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 2px solid transparent;
          color: white;
          background: rgba(255, 255, 255, 0.1);
          font-size: 0.9rem;
        }

        .category-btn:hover {
          background: rgba(0, 212, 255, 0.2);
          border-color: rgba(0, 212, 255, 0.5);
        }

        .category-btn.active {
          font-weight: 700;
        }

        .sort-filter {
          min-width: 200px;
        }

        .sort-select {
          width: 100%;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 0.75rem 1rem;
          color: white;
          font-size: 0.9rem;
          cursor: pointer;
          outline: none;
          transition: all 0.3s ease;
        }

        .sort-select:focus {
          border-color: #00d4ff;
        }

        .sort-select option {
          background: #1e293b;
          color: white;
        }

        .results-summary {
          text-align: center;
          color: #cbd5e0;
          font-size: 0.9rem;
        }

        .results-count {
          font-weight: 600;
        }

        .search-term {
          margin-left: 0.5rem;
          color: #00d4ff;
        }

        .featured-section,
        .articles-section {
          padding: 4rem 0;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 2.5rem);
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.1rem);
          color: #a0aec0;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 2rem;
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .blog-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(169, 174, 202, 0.15));
          border-radius: 20px;
          overflow: hidden;
          backdrop-filter: blur(30px);
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .blog-card.featured {
          border: 2px solid #00d4ff;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2));
        }

        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 212, 255, 0.15);
        }

        .blog-card.featured:hover {
          box-shadow: 0 25px 50px rgba(0, 212, 255, 0.3);
        }

        .featured-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: linear-gradient(135deg, #ffd700, #ffa500);
          padding: 0.5rem 1rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 700;
          color: #000;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .featured-star {
          width: 0.8rem;
          height: 0.8rem;
        }

        .blog-image-container {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .blog-card.featured .blog-image-container {
          height: 300px;
        }

        .blog-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .blog-card:hover .blog-image {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          padding: 2rem 1.5rem 1rem;
        }

        .category-tag {
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
          display: inline-block;
        }

        .blog-content {
          padding: 2rem;
        }

        .blog-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1rem;
          opacity: 0.8;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .meta-icon {
          width: 0.9rem;
          height: 0.9rem;
          color: #00d4ff;
        }

        .meta-text {
          font-size: 0.8rem;
          color: #cbd5e0;
        }

        .blog-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
          line-height: 1.3;
          transition: color 0.3s ease;
        }

        .blog-card.featured .blog-title {
          font-size: 1.6rem;
        }

        .blog-card:hover .blog-title {
          color: #00d4ff;
        }

        .blog-excerpt {
          color: #a0aec0;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        .blog-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .blog-tag {
          background: rgba(0, 212, 255, 0.1);
          color: #00d4ff;
          padding: 0.3rem 0.8rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
          border: 1px solid rgba(0, 212, 255, 0.3);
        }

        .blog-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .blog-stats {
          display: flex;
          gap: 1rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .stat-icon {
          width: 0.9rem;
          height: 0.9rem;
          color: #a0aec0;
        }

        .stat-text {
          font-size: 0.8rem;
          color: #a0aec0;
        }

        .read-more-btn {
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          border: none;
          padding: 0.7rem 1.2rem;
          border-radius: 25px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
        }

        .read-more-btn:hover {
          transform: translateX(5px);
          box-shadow: 0 5px 15px rgba(0, 212, 255, 0.4);
        }

        .btn-icon {
          width: 0.9rem;
          height: 0.9rem;
          transition: transform 0.3s ease;
        }

        .read-more-btn:hover .btn-icon {
          transform: translateX(3px);
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

        .load-more-container {
          text-align: center;
          margin-top: 3rem;
        }

        .load-more-btn {
          background: transparent;
          border: 2px solid #00d4ff;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          color: #00d4ff;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .load-more-btn:hover {
          background: rgba(0, 212, 255, 0.1);
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 212, 255, 0.2);
        }

        .load-more-icon {
          width: 1rem;
          height: 1rem;
        }

        .newsletter-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2));
          position: relative;
          z-index: 1;
        }

        .newsletter-card {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(45, 53, 97, 0.8));
          border-radius: 30px;
          padding: 4rem 3rem;
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          max-width: 800px;
          margin: 0 auto;
        }

        .newsletter-content {
          text-align: center;
        }

        .newsletter-icon {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .mail-icon {
          color: #00d4ff;
          width: 3rem;
          height: 3rem;
        }

        .newsletter-title {
          font-size: clamp(2rem, 5vw, 2.5rem);
          font-weight: 800;
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
          line-height: 1.6;
        }

        .newsletter-form {
          display: flex;
          max-width: 500px;
          margin: 0 auto 2rem;
          gap: 1rem;
        }

        .newsletter-input {
          flex: 1;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          padding: 1rem 1.5rem;
          color: white;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
        }

        .newsletter-input:focus {
          border-color: #00d4ff;
          box-shadow: 0 0 0 4px rgba(0, 212, 255, 0.1);
        }

        .newsletter-input::placeholder {
          color: #a0aec0;
        }

        .newsletter-btn {
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          color: white;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
          white-space: nowrap;
        }

        .newsletter-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4);
        }

        .newsletter-features {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #cbd5e0;
          font-size: 0.9rem;
        }

        .feature-icon {
          width: 1rem;
          height: 1rem;
          color: #00d4ff;
        }

        .newsletter-privacy {
          font-size: 0.85rem;
          color: #718096;
        }

        .scroll-top-btn {
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
          z-index: 1000;
          box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
          opacity: ${showScrollTop ? 1 : 0};
          transform: ${showScrollTop ? "translateY(0)" : "translateY(20px)"};
        }

        .scroll-top-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4);
        }

        .scroll-icon {
          color: white;
          width: 1.25rem;
          height: 1.25rem;
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-30px) rotate(180deg); 
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

        @media (max-width: 1024px) {
          .featured-grid {
            grid-template-columns: 1fr;
          }

          .filter-controls {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .sort-filter {
            min-width: auto;
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

          .articles-grid {
            grid-template-columns: 1fr;
          }

          .categories-grid {
            justify-content: center;
          }

          .newsletter-form {
            flex-direction: column;
          }

          .newsletter-input {
            margin-bottom: 1rem;
          }

          .newsletter-features {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .newsletter-card {
            padding: 3rem 2rem;
          }

          .blog-meta {
            flex-direction: column;
            gap: 0.5rem;
          }

          .blog-footer {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }

          .scroll-top-btn {
            width: 2.5rem;
            height: 2.5rem;
            bottom: 1rem;
            right: 1rem;
          }

          .scroll-icon {
            width: 1rem;
            height: 1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-icons {
            gap: 1rem;
          }

          .hero-icon {
            width: 2rem;
            height: 2rem;
          }

          .stat-number {
            font-size: 2rem;
          }

          .blog-content {
            padding: 1.5rem;
          }

          .newsletter-card {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
       <IAMPFooter />
    </div>
  )
}

export default IAMPBlogPage
