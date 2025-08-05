import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Shield,
  Award,
  Zap,
  Users,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Steel manufacturing plant"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white container-custom px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            India's Trusted
            <br />
            <span className="text-orange-500">Integrated Steel</span>
            <br />
            Manufacturer Since 1983
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Delivering quality, strength, and sustainability from ore to steel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="btn-primary inline-flex items-center"
            >
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">40+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">3</div>
              <div className="text-gray-600">Manufacturing Plants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">
                500K+
              </div>
              <div className="text-gray-600">MT Annual Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">
                1000+
              </div>
              <div className="text-gray-600">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                Building India's Infrastructure with Quality Steel
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                For over four decades, Sunil Group of Industries has been at the
                forefront of India's steel manufacturing sector. From our
                integrated plants in Chhattisgarh, we produce high-quality steel
                products that power the nation's growth.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-orange-500" />
                  <span className="text-gray-700">Quality Assured</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-orange-500" />
                  <span className="text-gray-700">ISO Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-6 w-6 text-orange-500" />
                  <span className="text-gray-700">Green Energy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-orange-500" />
                  <span className="text-gray-700">Expert Team</span>
                </div>
              </div>
              <Link
                href="/about"
                className="btn-primary inline-flex items-center"
              >
                Learn More About Us
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/hero2.png"
                alt="Steel manufacturing facility"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Our Steel Products
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive range of high-quality steel products for
              construction, infrastructure, and industrial applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Channels",
                desc: "ISMC & ISLC channels for structural applications",
                image: "/channels.jpeg",
              },
              {
                name: "Beams",
                desc: "ISMB & ISJB beams for heavy construction",
                image: "/beams.jpeg",
              },
              {
                name: "Flats",
                desc: "Flat bars for various industrial uses",
                image: "/flats.jpeg",
              },
              {
                name: "Rounds",
                desc: "Round bars for construction and manufacturing",
                image: "/rounds.jpeg",
              },
              {
                name: "Squares",
                desc: "Square bars for structural applications",
                image: "/squares.jpeg",
              },
              {
                name: "Billets",
                desc: "High-quality billets for further processing",
                image: "/billets.jpg",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Image
                  src={`${product.image}`}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.desc}</p>
                  <Link
                    href="/products"
                    className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center"
                  >
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-industrial text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner with India's Leading Steel Manufacturer?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Get in touch with our team for custom solutions, bulk orders, or
            technical consultations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Request Quote
            </Link>
            <Link
              href="/facilities"
              className="btn-secondary border-white text-white hover:bg-white hover:text-gray-900"
            >
              Visit Our Facilities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
