import Link from "next/link"
import { Factory, Phone, Mail, MapPin, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
             <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Sunil Group Logo" className="h-15 w-35" />
            {/* <div className="flex flex-col">
    <span className="text-xl font-bold text-gray-800">Sunil Group</span>
    <span className="text-xs text-gray-600 -mt-1">of Industries</span>
  </div> */}
          </Link>
            <p className="text-gray-400 text-sm">
              India's trusted integrated steel manufacturer since 1983, delivering quality, strength, and
              sustainability.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Products", "Facilities", "Sustainability", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {["Channels", "Beams", "Flats", "Rounds", "Squares", "Billets"].map((item) => (
                <li key={item}>
                  <Link href="/products" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <p>Head Office: Raipur, Chhattisgarh</p>
                  <p>Plants: Siltara, Urla, Raigarh</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-sm text-gray-400">+91-0771-2439058</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-sm text-gray-400">sunilsponge@yahoo.co.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6">
              <div className="bg-white px-3 py-1 rounded text-xs font-semibold text-gray-800">ISO 9001:2015</div>
              <div className="bg-white px-3 py-1 rounded text-xs font-semibold text-gray-800">BIS Certified</div>
              <div className="bg-white px-3 py-1 rounded text-xs font-semibold text-gray-800">Green Power</div>
            </div>
            <div className="text-sm text-gray-400">
              <p>GST: 22XXXXXXXXXXXXX | CIN: U27109CT1983PLC123456</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Sunil Group of Industries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
