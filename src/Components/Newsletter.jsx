"use client"

import { useState } from "react"
import { Mail } from "lucide-react"

/**
 * Newsletter subscription component
 */
const Newsletter = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <section className="py-24 bg-gradient-to-br from-cyan-400/10 to-slate-700/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-10 -right-5 w-96 h-96 bg-gradient-radial from-cyan-400/10 to-transparent rounded-full" />
      <div className="absolute -bottom-15 -left-8 w-[500px] h-[500px] bg-gradient-radial from-slate-700/20 to-transparent rounded-full" />

      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-700/80 rounded-3xl p-12 backdrop-blur-xl border border-white/10 shadow-2xl text-center">
          <div className="flex justify-center mb-6">
            <Mail className="text-cyan-400 w-12 h-12" />
          </div>

          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Stay Updated with Maritime Insights
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive the latest maritime industry news, trends, and exclusive content
            directly to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex max-w-2xl mx-auto gap-4 flex-wrap justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 min-w-64 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white text-base outline-none focus:border-cyan-400 transition-colors"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 rounded-full text-white font-bold text-base transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/30 whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>

          <p className="text-sm text-gray-400 mt-6">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
