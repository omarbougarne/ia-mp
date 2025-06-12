import { Ship } from "lucide-react"

/**
 * Call to action section component
 */
const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
        <div className="flex justify-center mb-8">
          <Ship className="text-cyan-400 w-16 h-16" />
        </div>

        <h2 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Ready to Navigate the Future of Maritime?
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Join the International Association of Maritime Professionals and become part of a global network dedicated to
          excellence, innovation, and the advancement of the maritime industry.
        </p>

        <div className="flex gap-6 justify-center flex-wrap">
          <button className="bg-gradient-to-r from-cyan-400 to-blue-500 px-10 py-5 rounded-full text-white font-bold text-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/30">
            Become a Member
          </button>

          <button className="bg-transparent border-2 border-cyan-400 px-10 py-5 rounded-full text-cyan-400 font-bold text-lg transition-all duration-300 hover:bg-cyan-400/10">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
