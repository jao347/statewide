import { CheckCircle, Shield, Wrench, Flame, Home, Search, Hammer, Zap } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Emergency Chimney Service",
    description: "24/7 emergency chimney repairs and inspections",
  },
  {
    icon: Wrench,
    title: "Chimney Cleaning & Sweeping",
    description: "Professional cleaning to remove creosote and debris",
  },
  {
    icon: Shield,
    title: "Chimney Inspections & Safety Checks",
    description: "Comprehensive safety inspections and assessments",
  },
  {
    icon: Home,
    title: "Chimney Leak Repair",
    description: "Expert leak detection and waterproofing solutions",
  },
  {
    icon: Hammer,
    title: "Chimney Relining & Resurfacing",
    description: "Professional relining and structural repairs",
  },
  {
    icon: Flame,
    title: "Fireplace & Stove Installation",
    description: "Installation of fireplaces and wood-burning stoves",
  },
  {
    icon: CheckCircle,
    title: "Chimney Cap & Damper Installation",
    description: "Protective caps and damper installation services",
  },
  {
    icon: Zap,
    title: "Masonry Repair & Repointing",
    description: "Brick and mortar repair and restoration",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              YOUR CHIMNEY. CLEAN & SAFE. GUARANTEED.
            </h2>
            <p className="text-gray-700 mb-4">
              Tired of dealing with smoke backing up, strange odors, or crumbling masonry? Whether it's a chimney that
              won't draft properly, a damper that's stuck, or you just want peace of mind, at{" "}
              <strong>Statewide Chimney</strong>, our certified technicians use advanced tools and proven techniques to
              restore your chimney's safety and efficiency.
            </p>
            <p className="text-gray-700 mb-4">
              We don't just cover up problems — we identify the root cause to ensure your chimney functions safely and
              efficiently. And with fast response times, flexible scheduling, and our satisfaction guarantee, you can
              trust <strong>Statewide Chimney</strong> to keep your fireplace and chimney working safely and reliably.
            </p>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">FULL-SERVICE CHIMNEY CARE. NO WORRIES, NO HASSLE.</h3>
            <div className="space-y-3">
              {services.slice(0, 8).map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <span className="text-gray-700">{service.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <service.icon className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
