import React from "react"

/**
 * Topic card component for displaying popular topics
 * @param {Object} props
 * @param {string} props.name - Topic name
 * @param {React.ReactNode} props.icon - Icon component
 * @param {string} props.color - Topic color
 * @param {number} props.articleCount - Number of articles
 */
const TopicCard = ({ name, icon, color, articleCount }) => {
  return (
    <div className="bg-gradient-to-br from-cyan-400/5 to-slate-700/10 rounded-2xl p-8 text-center border border-white/10 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-400/10 hover:border-cyan-400/30 cursor-pointer">
      <div
        className={`w-16 h-16 rounded-full bg-opacity-15 flex items-center justify-center mx-auto mb-6`}
        style={{ backgroundColor: `${color}20` }}
      >
        {React.cloneElement(icon, { style: { color: color }, className: "w-8 h-8" })}
      </div>

      <h3 className="text-lg font-bold text-white mb-2">{name}</h3>
      <p className="text-sm text-gray-400">{articleCount} articles</p>
    </div>
  )
}

export default TopicCard
