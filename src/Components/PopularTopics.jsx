import { Shield, Globe, BookOpen, Users, GraduationCap, Crown, Anchor } from "lucide-react"
import TopicCard from "./TopicCard"

/**
 * Popular topics section component
 */
const PopularTopics = () => {
  const topics = [
    { name: "Maritime Safety", icon: <Shield />, color: "#ef4444", articles: Math.floor(Math.random() * 50) + 10 },
    { name: "Green Technology", icon: <Globe />, color: "#10b981", articles: Math.floor(Math.random() * 50) + 10 },
    {
      name: "Shipping Regulations",
      icon: <BookOpen />,
      color: "#f59e0b",
      articles: Math.floor(Math.random() * 50) + 10,
    },
    { name: "Crew Welfare", icon: <Users />, color: "#8b5cf6", articles: Math.floor(Math.random() * 50) + 10 },
    {
      name: "Maritime Education",
      icon: <GraduationCap />,
      color: "#ec4899",
      articles: Math.floor(Math.random() * 50) + 10,
    },
    { name: "Industry Leadership", icon: <Crown />, color: "#00d4ff", articles: Math.floor(Math.random() * 50) + 10 },
    { name: "Port Operations", icon: <Anchor />, color: "#6366f1", articles: Math.floor(Math.random() * 50) + 10 },
    { name: "Maritime Security", icon: <Shield />, color: "#dc2626", articles: Math.floor(Math.random() * 50) + 10 },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Popular Topics
          </h2>
          <p className="text-lg text-gray-300">Explore the most discussed subjects in the maritime industry</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topics.map((topic, index) => (
            <TopicCard
              key={index}
              name={topic.name}
              icon={topic.icon}
              color={topic.color}
              articleCount={topic.articles}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularTopics
