import Image from "next/image"
import Link from "next/link"
import { Facebook, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/weblogic-logo.jpg"
                alt="WebLogic Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <h3 className="font-serif font-bold text-xl text-blue-400">WebLogic</h3>
                <p className="text-sm text-gray-400">A Signature of Success</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Professional WordPress development services that transform your digital presence. We create powerful,
              scalable websites that drive business growth and deliver exceptional user experiences.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://www.facebook.com/weblogicofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors duration-300">
                  Custom WordPress Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors duration-300">
                  Theme Customization
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors duration-300">
                  E-Commerce Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors duration-300">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors duration-300">
                  Website Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+2 01099811246</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>info@weblogic.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Remote Work Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© {currentYear} WebLogic. All rights reserved.</p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </a>
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>24/7 Support Available</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
