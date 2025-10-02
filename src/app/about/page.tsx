import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Statewide Chimney</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With decades of experience in chimney services, we are your trusted partner for all fireplace and chimney
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Image
              src="/professional-chimney-service-owner-portrait.jpg"
              alt="Professional chimney service owner"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded with a commitment to safety and excellence, Statewide Chimney has been serving homeowners across
              the state for over 25 years. Our team of certified professionals brings expertise, reliability, and peace
              of mind to every job.
            </p>
            <p className="text-gray-600 mb-6">
              We understand that your home is your sanctuary, and your fireplace is often the heart of your living
              space. That's why we approach every project with meticulous attention to detail and unwavering commitment
              to quality.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <div className="text-2xl font-bold text-red-600">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <div className="text-2xl font-bold text-red-600">5000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
