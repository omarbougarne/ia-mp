import { Eye, Heart, Clock, ArrowRight } from "lucide-react"

/**
 * Blog card component
 * @param {Object} props
 * @param {Object} props.post - Blog post data
 * @param {boolean} [props.featured=false] - Whether this is a featured post
 */
const BlogCard = ({ post, featured = false }) => {
  const getCategoryColor = (category) => {
    const colors = {
      Safety: "from-red-500 to-red-600",
      Technology: "from-purple-500 to-purple-600",
      Sustainability: "from-green-500 to-green-600",
      Security: "from-yellow-500 to-yellow-600",
      Innovation: "from-pink-500 to-pink-600",
      Regulations: "from-blue-500 to-blue-600",
    }
    return colors[category] || "from-cyan-400 to-blue-500"
  }

  if (featured) {
    return (
      <article className="bg-gradient-to-br from-cyan-400/10 to-slate-700/20 rounded-3xl overflow-hidden border-2 border-cyan-400 backdrop-blur-xl relative transition-all duration-300 hover:transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-400/30 cursor-pointer group">
        <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-2xl text-sm font-bold text-black z-10">
          ⭐ FEATURED
        </div>

        <div className="h-64 bg-cover bg-center relative" style={{ backgroundImage: `url('${post.image}')` }}>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <div
              className={`bg-gradient-to-r ${getCategoryColor(post.category)} px-3 py-1 rounded-xl text-sm font-bold inline-block mb-2`}
            >
              {post.category}
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
            {post.title}
          </h3>

          <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">{post.views}</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">{post.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">{post.readTime}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-cyan-400 font-bold">{post.author}</p>
              <p className="text-sm text-gray-400">{post.date}</p>
            </div>

            <button className="bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 rounded-full text-white font-bold flex items-center gap-2 transition-all duration-300 hover:transform hover:translate-x-1 hover:shadow-lg hover:shadow-cyan-400/40">
              Read More <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="bg-gradient-to-br from-cyan-400/5 to-slate-700/15 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-400/15 hover:border-cyan-400/30 cursor-pointer group">
      <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url('${post.image}')` }}>
        <div
          className={`absolute top-4 left-4 bg-gradient-to-r ${getCategoryColor(post.category)} px-3 py-1 rounded-xl text-xs font-bold`}
        >
          {post.category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-300 mb-4 text-sm line-clamp-3">{post.excerpt}</p>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-xs text-gray-400">{post.views}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-xs text-gray-400">{post.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-xs text-gray-400">{post.readTime}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-cyan-400 font-bold text-sm">{post.author}</p>
            <p className="text-xs text-gray-400">{post.date}</p>
          </div>

          <button className="bg-cyan-400/10 border border-cyan-400/30 px-4 py-2 rounded-full text-cyan-400 font-bold text-sm flex items-center gap-2 transition-all duration-300 hover:bg-cyan-400/20 hover:transform hover:translate-x-1">
            Read More <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  )
}

export default BlogCard
