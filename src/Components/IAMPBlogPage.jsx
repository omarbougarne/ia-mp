"use client"
import IAMPNavbar from './IAMPNavbar'; // Import the navbar component
import IAMPFooter from './IAMPFooter'; // Import the footer component
import { useState, useEffect } from "react"
import {
  BookOpen,
  Compass,
  Waves,
  ArrowUp,
  Anchor,
  Menu,
  X,
  Search,
  Eye,
  Heart,
  Clock,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react"

const IAMPBlogPage = () => {
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

  const blogPosts = [
    {
      id: 1,
      title: "Maritime Safety Trends in 2025",
      excerpt:
        "A quick overview of the latest safety measures adopted across the shipping industry to enhance crew and cargo security.",
      author: "Jane Smith",
      date: "April 2025",
      category: "Safety",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&crop=center",
      featured: true,
      views: 1248,
      likes: 89,
    },
    {
      id: 2,
      title: "Green Technology in Maritime",
      excerpt:
        "Discover how innovative green tech is reshaping the maritime sector, from fuel efficiency to emissions reduction.",
      author: "John Doe",
      date: "March 2025",
      category: "Technology",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=250&fit=crop&crop=center",
      featured: false,
      views: 892,
      likes: 67,
    },
    {
      id: 3,
      title: "International Shipping Regulations Update",
      excerpt:
        "Understanding the new international shipping regulations and how they affect global trade and maritime operations.",
      author: "Alice Brown",
      date: "May 2025",
      category: "Regulations",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop&crop=center",
      featured: false,
      views: 1056,
      likes: 78,
    },
    {
      id: 4,
      title: "Climate Change and Maritime Adaptation",
      excerpt:
        "Exploring how the maritime industry is adapting to the challenges of climate change through sustainable practices and innovation.",
      author: "Michael Johnson",
      date: "June 2025",
      category: "Sustainability",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop&crop=center",
      featured: true,
      views: 1432,
      likes: 103,
    },
    {
      id: 5,
      title: "AI Revolution in Maritime Navigation",
      excerpt:
        "How AI is revolutionizing ship navigation, port operations, and logistics management for the global maritime industry.",
      author: "Sarah Lee",
      date: "February 2025",
      category: "Technology",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&crop=center",
      featured: false,
      views: 1689,
      likes: 124,
    },
    {
      id: 6,
      title: "Cybersecurity in Maritime Operations",
      excerpt:
        "Why cybersecurity is a critical concern for the maritime sector and how companies can safeguard against growing cyber threats.",
      author: "David Clark",
      date: "April 2025",
      category: "Security",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&crop=center",
      featured: false,
      views: 934,
      likes: 71,
    },
    {
      id: 7,
      title: "Sustainable Fuel Alternatives for Shipping",
      excerpt:
        "Exploring new technologies and alternatives to reduce carbon footprints in the shipping industry through sustainable fuel options.",
      author: "Laura White",
      date: "July 2025",
      category: "Sustainability",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=250&fit=crop&crop=center",
      featured: false,
      views: 756,
      likes: 58,
    },
    {
      id: 8,
      title: "The Future of Autonomous Vessels",
      excerpt:
        "How autonomous vessels are reshaping the future of shipping and what challenges lie ahead for their widespread adoption.",
      author: "Robert Green",
      date: "August 2025",
      category: "Innovation",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop&crop=center",
      featured: true,
      views: 2134,
      likes: 156,
    },
  ]

  const categories = ["All", "Safety", "Technology", "Regulations", "Sustainability", "Security", "Innovation"]
  const navItems = ["Home", "About", "Categories", "Training", "Blog", "Contact"]
  const quickLinks = ["Home", "About Us", "Membership", "Events", "Training", "Certification", "Blog", "Contact"]
  const socialIcons = [Facebook, Twitter, Linkedin, Instagram, Youtube]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  const getCategoryClass = (category) => {
    const classes = {
      Safety: "category-safety",
      Technology: "category-technology",
      Sustainability: "category-sustainability",
      Security: "category-security",
      Innovation: "category-innovation",
      Regulations: "category-regulations",
    }
    return classes[category] || "category-default"
  }

  // Blog Card Component
  const BlogCard = ({ post, featured = false }) => {
    const cardClass = featured ? "blog-card featured" : "blog-card regular"
    const imageClass = featured ? "blog-image featured" : "blog-image regular"
    const titleClass = featured ? "blog-title featured" : "blog-title regular"
    const excerptClass = featured ? "blog-excerpt featured" : "blog-excerpt regular"
    const authorClass = featured ? "author-name featured" : "author-name regular"
    const dateClass = featured ? "post-date featured" : "post-date regular"
    const buttonClass = featured ? "read-more-button featured" : "read-more-button regular"
    const iconClass = featured ? "button-icon featured" : "button-icon regular"
    const statIconClass = featured ? "stat-icon featured" : "stat-icon regular"
    const statTextClass = featured ? "stat-text featured" : "stat-text regular"

    return (
      <article className={cardClass}>
        {featured && <div className="featured-badge">⭐ FEATURED</div>}

        <div className={imageClass} style={{ backgroundImage: `url('${post.image}')` }}>
          {featured ? (
            <div className="image-overlay">
              <div className={`category-tag ${getCategoryClass(post.category)}`}>{post.category}</div>
            </div>
          ) : (
            <div className={`category-tag regular ${getCategoryClass(post.category)}`}>{post.category}</div>
          )}
        </div>

        <div className="blog-content">
          <h3 className={titleClass}>{post.title}</h3>
          <p className={excerptClass}>{post.excerpt}</p>

          <div className="blog-stats">
            <div className="stats-group">
              <div className="stat-item">
                <Eye className={statIconClass} />
                <span className={statTextClass}>{post.views}</span>
              </div>
              <div className="stat-item">
                <Heart className={statIconClass} />
                <span className={statTextClass}>{post.likes}</span>
              </div>
              <div className="stat-item">
                <Clock className={statIconClass} />
                <span className={statTextClass}>{post.readTime}</span>
              </div>
            </div>
          </div>

          <div className="blog-footer">
            <div className="author-info">
              <p className={authorClass}>{post.author}</p>
              <p className={dateClass}>{post.date}</p>
            </div>

            <button className={buttonClass}>
              Read More <ArrowRight className={iconClass} />
            </button>
          </div>
        </div>
      </article>
    )
  }

  return (
    <div className="blog-page">
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .blog-page {
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
          top: 25%;
          right: 5%;
          width: 18rem;
          height: 18rem;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 8s ease-in-out infinite;
        }

        .hero-bg-2 {
          position: absolute;
          bottom: 25%;
          left: 8.33%;
          width: 12rem;
          height: 12rem;
          background: radial-gradient(circle, rgba(45, 53, 97, 0.4) 0%, transparent 70%);
          border-radius: 50%;
          animation: float-reverse 6s ease-in-out infinite;
        }

        .hero-bg-3 {
          position: absolute;
          top: 50%;
          left: 80%;
          width: 9rem;
          height: 9rem;
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

        .hero-icon-1 {
          color: #00d4ff;
          width: 3rem;
          height: 3rem;
        }

        .hero-icon-2 {
          color: #3b82f6;
          width: 2.5rem;
          height: 2.5rem;
        }

        .hero-icon-3 {
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
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        /* Blog Card Styles */
        .blog-card {
          border-radius: 18px;
          overflow: hidden;
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
        }

        .blog-card.regular {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.08), rgba(45, 53, 97, 0.15));
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .blog-card.featured {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2));
          border: 2px solid #00d4ff;
          border-radius: 20px;
        }

        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 212, 255, 0.15);
          border-color: rgba(0, 212, 255, 0.3);
        }

        .blog-card.featured:hover {
          transform: translateY(-10px);
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
          font-weight: bold;
          color: black;
          z-index: 10;
        }

        .blog-image {
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .blog-image.regular {
          height: 200px;
        }

        .blog-image.featured {
          height: 250px;
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
          padding: 0.3rem 0.8rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: bold;
          display: inline-block;
          margin-bottom: 0.5rem;
        }

        .category-tag.regular {
          position: absolute;
          top: 1rem;
          left: 1rem;
          font-size: 0.75rem;
          padding: 0.4rem 0.8rem;
        }

        .category-safety {
          background: linear-gradient(135deg, #ef4444, #dc2626);
        }

        .category-technology {
          background: linear-gradient(135deg, #8b5cf6, #7c3aed);
        }

        .category-sustainability {
          background: linear-gradient(135deg, #10b981, #059669);
        }

        .category-security {
          background: linear-gradient(135deg, #f59e0b, #d97706);
        }

        .category-innovation {
          background: linear-gradient(135deg, #ec4899, #db2777);
        }

        .category-regulations {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
        }

        .category-default {
          background: linear-gradient(135deg, #00d4ff, #0099cc);
        }

        .blog-content {
          padding: 1.5rem;
        }

        .blog-title {
          font-weight: bold;
          color: white;
          margin-bottom: 0.8rem;
          line-height: 1.3;
          transition: color 0.3s ease;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .blog-title.regular {
          font-size: 1.3rem;
        }

        .blog-title.featured {
          font-size: 1.4rem;
        }

        .blog-card:hover .blog-title {
          color: #00d4ff;
        }

        .blog-excerpt {
          color: #a0aec0;
          line-height: 1.5;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .blog-excerpt.regular {
          font-size: 0.9rem;
        }

        .blog-excerpt.featured {
          font-size: 0.95rem;
        }

        .blog-stats {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .stats-group {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .stat-icon {
          color: #a0aec0;
        }

        .stat-icon.regular {
          width: 0.9rem;
          height: 0.9rem;
        }

        .stat-icon.featured {
          width: 1rem;
          height: 1rem;
        }

        .stat-text {
          color: #a0aec0;
        }

        .stat-text.regular {
          font-size: 0.75rem;
        }

        .stat-text.featured {
          font-size: 0.8rem;
        }

        .blog-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .author-info {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          color: #00d4ff;
          font-weight: bold;
        }

        .author-name.regular {
          font-size: 0.85rem;
        }

        .author-name.featured {
          font-size: 0.9rem;
        }

        .post-date {
          color: #a0aec0;
        }

        .post-date.regular {
          font-size: 0.75rem;
        }

        .post-date.featured {
          font-size: 0.8rem;
        }

        .read-more-button {
          border: none;
          border-radius: 25px;
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .read-more-button.featured {
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          padding: 0.7rem 1.2rem;
          font-size: 0.9rem;
        }

        .read-more-button.regular {
          background: rgba(0, 212, 255, 0.1);
          border: 1px solid rgba(0, 212, 255, 0.3);
          color: #00d4ff;
          padding: 0.6rem 1rem;
          font-size: 0.85rem;
        }

        .read-more-button:hover {
          transform: translateX(5px);
        }

        .read-more-button.featured:hover {
          box-shadow: 0 5px 15px rgba(0, 212, 255, 0.4);
        }

        .read-more-button.regular:hover {
          background: rgba(0, 212, 255, 0.2);
        }

        .button-icon {
          transition: transform 0.3s ease;
        }

        .button-icon.regular {
          width: 0.9rem;
          height: 0.9rem;
        }

        .button-icon.featured {
          width: 1rem;
          height: 1rem;
        }

        /* Newsletter Styles */
        .newsletter-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(45, 53, 97, 0.2));
          position: relative;
          overflow: hidden;
        }

        .newsletter-bg-1 {
          position: absolute;
          top: -2.5rem;
          right: -1.25rem;
          width: 24rem;
          height: 24rem;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
          border-radius: 50%;
        }

        .newsletter-bg-2 {
          position: absolute;
          bottom: -3.75rem;
          left: -2rem;
          width: 31.25rem;
          height: 31.25rem;
          background: radial-gradient(circle, rgba(45, 53, 97, 0.2) 0%, transparent 70%);
          border-radius: 50%;
        }

        .newsletter-container {
          max-width: 64rem;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 10;
        }

        .newsletter-card {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(45, 53, 97, 0.8));
          border-radius: 30px;
          padding: 3rem;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
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

        /* Load More Button */
        .load-more-container {
          text-align: center;
          margin-top: 3rem;
        }

        .load-more-button {
          background: transparent;
          border: 2px solid #00d4ff;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          color: #00d4ff;
          font-weight: bold;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .load-more-button:hover {
          background: rgba(0, 212, 255, 0.1);
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 212, 255, 0.2);
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
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(30px) rotate(-180deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
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

          .articles-grid {
            grid-template-columns: 1fr;
          }

          .hero-icons {
            gap: 0.5rem;
          }

          .hero-icon-1,
          .hero-icon-3 {
            width: 2rem;
            height: 2rem;
          }

          .hero-icon-2 {
            width: 1.5rem;
            height: 1.5rem;
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

          .articles-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>


        {/* Use the extracted navbar component */}
        <IAMPNavbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-1" />
        <div className="hero-bg-2" />
        <div className="hero-bg-3" />

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-icons">
              <BookOpen className="hero-icon-1" />
              <Compass className="hero-icon-2" />
              <Waves className="hero-icon-3" />
            </div>

            <h1 className="hero-title">Maritime Insights & Trends</h1>
            <h2 className="hero-subtitle">EXPLORE THE FUTURE OF MARITIME</h2>
            <p className="hero-description">
              Stay ahead of the curve with expert insights, industry analysis, and the latest developments shaping the
              maritime world. From cutting-edge technology to sustainability initiatives, discover what's driving the
              industry forward.
            </p>

            {/* Search and Filter */}
            <div className="search-filter">
              <div className="search-container">
                <Search className="search-icon" />
                <input
                  type="text"
                  placeholder="Search articles..."
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

      {/* Featured Articles */}
      {featuredPosts.length > 0 && (
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Featured Articles</h2>
              <p className="section-description">Discover our most impactful insights and trending topics</p>
            </div>

            <div className="featured-grid">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles Grid */}
      <section className="section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Latest Insights</h2>
            <p className="section-description">Stay informed with our comprehensive maritime industry coverage</p>
          </div>

          <div className="articles-grid">
            {regularPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {regularPosts.length > 0 && (
            <div className="load-more-container">
              <button className="load-more-button">Load More Articles</button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-bg-1" />
        <div className="newsletter-bg-2" />

        <div className="newsletter-container">
          <div className="newsletter-card">
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
              <button type="submit" className="newsletter-button">
                Subscribe Now
              </button>
            </form>

            <p className="newsletter-privacy">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
     <IAMPFooter />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button onClick={scrollToTop} className="scroll-top">
          <ArrowUp className="scroll-top-icon" />
        </button>
      )}
    </div>
  )
}

export default IAMPBlogPage
