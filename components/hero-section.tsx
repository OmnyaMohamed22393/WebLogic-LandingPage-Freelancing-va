"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                We Are <span className="text-blue-600">Creative</span>
                <br />
                <span className="text-blue-600">WordPress</span>
                <br />
                Solution Providers
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your digital presence with custom WordPress solutions. We specialize in creating powerful,
                scalable websites that drive business growth.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">What we offer:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Custom WordPress Website Development",
                  "WordPress Theme Customization",
                  "WordPress E-Commerce Solutions",
                  "SEO Optimization for WordPress",
                  "WordPress Website Maintenance and Support",
                ].map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <p className="text-lg font-medium text-gray-900">Let's grow your business with us</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium"
                >
                  Secure Your Business Now!
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-medium bg-transparent"
                >
                  View Our Work
                </Button>
              </div>
            </div>

            {/* Remote Work Badge */}
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Remote Work Capability Available</span>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/weblogic-about.jpg"
                alt="WebLogic WordPress Development Services"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
