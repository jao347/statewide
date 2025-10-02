import Image from "next/image"
import { CheckCircle, Clock, Shield, Award } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Chimney Cleaning",
      description: "Professional cleaning to remove creosote, debris, and blockages for safe operation.",
      image: "/professional-chimney-cleaning-service-in-action.jpg",
      features: ["Creosote removal", "Debris clearing", "Safety inspection", "Before/after photos"],
    },
    {
      title: "Chimney Inspection",
      description: "Comprehensive inspections to identify potential issues before they become problems.",
      image: "/chimney-inspection-with-professional-equipment.jpg",
      features: ["Level 1 & 2 inspections", "Camera inspection", "Detailed reports", "Safety assessment"],
    },
    {
      title: "Chimney Repair",
      description: "Expert repairs for masonry, liners, caps, and all chimney components.",
      image: "/brick-chimney-repair-and-restoration-work.jpg",
      features: ["Masonry repair", "Liner replacement", "Crown repair", "Waterproofing"],
    },
    {
      title: "Fireplace Installation",
      description: "Professional installation of new fireplaces and fireplace inserts.",
      image: "/modern-fireplace-installation-in-living-room.jpg",
      features: ["Gas fireplaces", "Wood inserts", "Electric units", "Custom installations"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive chimney and fireplace services to keep your home safe and comfortable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600 text-sm">Fully licensed and insured for your peace of mind.</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Emergency</h3>
              <p className="text-gray-600 text-sm">Emergency services available when you need us most.</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Certified Professionals</h3>
              <p className="text-gray-600 text-sm">Our team is certified and continuously trained.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
