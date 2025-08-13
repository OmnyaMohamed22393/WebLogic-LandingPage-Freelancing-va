"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Palette, ShoppingCart, Search, Settings, Zap } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Custom WordPress Development",
      description:
        "Tailored WordPress websites built from scratch to match your unique business requirements and brand identity.",
      features: ["Custom Post Types", "Advanced Functionality", "Responsive Design", "Performance Optimized"],
    },
    {
      icon: Palette,
      title: "Theme Customization",
      description:
        "Transform existing themes or create custom designs that perfectly represent your brand and engage your audience.",
      features: ["Visual Customization", "Code Modifications", "Mobile Optimization", "Brand Integration"],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description:
        "Complete WooCommerce stores with payment integration, inventory management, and conversion optimization.",
      features: ["WooCommerce Setup", "Payment Gateways", "Product Management", "Order Processing"],
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Comprehensive SEO strategies to improve your search rankings and drive organic traffic to your website.",
      features: ["On-Page SEO", "Technical SEO", "Content Optimization", "Performance Boost"],
    },
    {
      icon: Settings,
      title: "Website Maintenance",
      description:
        "Ongoing support and maintenance to keep your WordPress site secure, updated, and performing at its best.",
      features: ["Security Updates", "Backup Management", "Performance Monitoring", "Bug Fixes"],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Speed up your WordPress site with advanced optimization techniques for better user experience and SEO.",
      features: ["Speed Optimization", "Caching Solutions", "Image Optimization", "Database Cleanup"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our WordPress Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive WordPress solutions designed to elevate your online presence and drive business growth through
            expert development and optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center justify-center space-x-2 text-sm text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your WordPress Site?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution that drives results for your
              business.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors duration-300"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
