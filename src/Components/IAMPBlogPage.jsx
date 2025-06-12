"use client"

import { useState, useEffect } from "react"
import { BookOpen, Compass, Waves, ArrowUp } from "lucide-react"
import Navigation from "./Navigation"
import SearchFilter from "./SearchFilter"
import BlogCard from "./BlogCard"
import Newsletter from "./Newsletter"
import PopularTopics from "./PopularTopics"
import CallToAction from "./CallToAction"
import Footer from "./Footer"

const IAMPBlogPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [showScrollTop, setShowScrollTop] = useState(false)

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

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen text-white">
      <Navigation scrollY={scrollY} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden pt-24">
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 right-1/20 w-72 h-72 bg-gradient-radial from-cyan-400/15 to-transparent rounded-full animate-float" />
        <div className="absolute bottom-1/4 left-1/12 w-48 h-48 bg-gradient-radial from-slate-700/40 to-transparent rounded-full animate-float-reverse" />
        <div className="absolute top-1/2 left-4/5 w-36 h-36 bg-gradient-radial from-cyan-400/10 to-transparent rounded-full animate-pulse" />

        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <BookOpen className="text-cyan-400 w-12 h-12" />
              <Compass className="text-blue-500 w-10 h-10" />
              <Waves className="text-cyan-400 w-12 h-12" />
            </div>

            <h1 className="text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Maritime Insights & Trends
            </h1>

            <h2 className="text-3xl text-gray-300 mb-8 font-light">EXPLORE THE FUTURE OF MARITIME</h2>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Stay ahead of the curve with expert insights, industry analysis, and the latest developments shaping the
              maritime world. From cutting-edge technology to sustainability initiatives, discover what's driving the
              industry forward.
            </p>

            <SearchFilter
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              categories={categories}
            />
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredPosts.length > 0 && (
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                Featured Articles
              </h2>
              <p className="text-lg text-gray-300">Discover our most impactful insights and trending topics</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              Latest Insights
            </h2>
            <p className="text-lg text-gray-300">Stay informed with our comprehensive maritime industry coverage</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Load More Button */}
          {regularPosts.length > 0 && (
            <div className="text-center mt-12">
              <button className="bg-transparent border-2 border-cyan-400 px-10 py-4 rounded-full text-cyan-400 font-bold text-lg transition-all duration-300 hover:bg-cyan-400/10 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-400/20">
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>

      <Newsletter />
      <PopularTopics />
      <CallToAction />
      <Footer categories={categories} />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-400/30 z-50"
        >
          <ArrowUp className="text-white w-5 h-5" />
        </button>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(30px) rotate(-180deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 6s ease-in-out infinite;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

export default IAMPBlogPage
