import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <h2 className="text-sm font-bold text-red-600 mb-4 tracking-wider uppercase">
              FROM THE OWNER
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-balance">
              Meet David Reynolds
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Hi, I'm <strong className="text-gray-900">David Reynolds</strong>,
              the proud founder of{" "}
              <strong className="text-red-600">Statewide Chimney</strong>.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              What began as a simple mission — helping homeowners save their
              chimneys and avoid costly repairs — has grown into a full-service
              chimney sweep and repair company built on trust, reliability, and
              a commitment to quality workmanship.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With decades of hands-on experience, I've seen and solved just
              about every chimney issue imaginable, and I still approach each
              project as if I were working on my own home.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Thank you for trusting us, and I look forward to the opportunity
              to serve you soon.
            </p>
            <p className="text-gray-900 font-semibold text-lg">
              — David Reynolds, Owner
            </p>
          </div>

          <div className="relative animate-slide-up animation-delay-200">
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 shadow-2xl">
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-8 border-white shadow-lg">
                <Image
                  src="/statewide-oener.jpg"
                  alt="David Reynolds, Owner of Statewide Chimney"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 200px, 256px"
                />
              </div>

              <div className="text-center mt-6">
                <div className="text-white font-bold text-xl">
                  David Reynolds
                </div>
                <div className="text-red-100 text-sm">
                  Owner & Master Technician
                </div>
                <div className="text-red-100 text-sm mt-2">
                  25+ Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
