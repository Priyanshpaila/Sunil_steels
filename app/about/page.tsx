import Image from "next/image"
import { Calendar, MapPin, Users, Award, Target, Eye, Heart } from "lucide-react"

export default function AboutPage() {
  const timeline = [
    { year: "1983", event: "Company founded with vision to serve India's steel needs" },
    { year: "1990", event: "First manufacturing plant established in Siltara" },
    { year: "2000", event: "Expanded operations with Urla facility" },
    { year: "2010", event: "Achieved ISO 9001:2015 certification" },
    { year: "2015", event: "Launched green energy initiatives with WHRB" },
    { year: "2020", event: "Opened state-of-the-art Raigarh plant" },
    { year: "2023", event: "Celebrating 40 years of excellence" },
  ]

  const leadership = [
    {
      name: "MR. ASHISH NACHRANI",
      position: "Managing Director",
      image: "/ashish.jpg",
    },
    {
      name: "MR. DHRUV NACHRANI",
      position: "Director",
      image: "/dhruv.jpg",
    },
    {
      name: "MR. RISHI NACHRANI",
      position: "Director",
      image: "/rishi.jpg",
    },
  ]

  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Uncompromising commitment to delivering superior steel products that meet international standards.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Building lasting relationships through reliable service and customized solutions.",
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "Responsible manufacturing practices that protect our environment for future generations.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Continuous improvement and adoption of cutting-edge technologies in steel production.",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Four Decades of Steel Excellence</h1>
            <p className="text-xl text-gray-300 mb-8">
              From humble beginnings in 1983 to becoming one of India's most trusted integrated steel manufacturers, our
              journey is built on quality, innovation, and unwavering commitment to our customers.
            </p>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">Our Journey Through Time</h2>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-orange-200 transform -translate-y-1/2"></div>
              <div className="flex justify-between items-center relative">
                {timeline.map((item, index) => (
                  <div key={index} className="flex flex-col items-center group">
                    <div className="w-4 h-4 bg-orange-500 rounded-full mb-4 group-hover:scale-125 transition-transform"></div>
                    <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs text-center border-2 border-transparent group-hover:border-orange-500 transition-colors">
                      <div className="text-2xl font-bold text-orange-500 mb-2">{item.year}</div>
                      <p className="text-sm text-gray-600">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  {index < timeline.length - 1 && <div className="w-0.5 h-16 bg-orange-200 mt-2"></div>}
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg flex-1">
                  <div className="text-xl font-bold text-orange-500 mb-2">{item.year}</div>
                  <p className="text-gray-600">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <Target className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To be India's most trusted integrated steel manufacturer, delivering superior quality products while
                maintaining sustainable and responsible business practices.
              </p>
            </div>
            <div className="text-center">
              <Eye className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To lead the transformation of India's steel industry through innovation, quality excellence, and
                commitment to environmental sustainability.
              </p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-gray-600">
                Integrity, quality, innovation, and sustainability form the foundation of everything we do, ensuring
                long-term value for all stakeholders.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <value.icon className="h-10 w-10 text-orange-500 mb-4" />
                <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={`${leader.image}`}
                    alt={leader.name}
                    width={300}
                    height={300}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                <p className="text-orange-500 font-medium">{leader.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Locations */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
            Our Manufacturing Locations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Siltara Plant", location: "Siltara, Raipur, Chhattisgarh", established: "1990" },
              { name: "Urla Plant", location: "Urla, Raipur, Chhattisgarh", established: "2000" },
              { name: "Raigarh Plant", location: "Raigarh, Chhattisgarh", established: "2020" },
            ].map((plant, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <MapPin className="h-8 w-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{plant.name}</h3>
                <p className="text-gray-600 mb-2">{plant.location}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  Established {plant.established}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
