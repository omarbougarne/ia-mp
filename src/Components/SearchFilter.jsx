"use client"
import { Search } from "lucide-react"

/**
 * Search and filter component
 * @param {Object} props
 * @param {string} props.searchTerm - Current search term
 * @param {Function} props.setSearchTerm - Function to update search term
 * @param {string} props.selectedCategory - Currently selected category
 * @param {Function} props.setSelectedCategory - Function to update selected category
 * @param {Array<string>} props.categories - List of available categories
 */
const SearchFilter = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, categories }) => {
  return (
    <div className="flex gap-4 justify-center items-center flex-wrap mt-8">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-white/10 border border-white/20 rounded-full py-4 pl-12 pr-4 text-white text-base w-80 backdrop-blur-md outline-none focus:border-cyan-400 transition-colors"
        />
      </div>

      <div className="flex gap-2 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-md ${
              selectedCategory === category
                ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold"
                : "bg-white/10 border border-white/20 text-white hover:bg-cyan-400/20 hover:border-cyan-400"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchFilter
