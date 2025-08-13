import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Globe } from "lucide-react"

export function AboutSection() {
  const stats = [
    {
      icon: Users,
      number: "100+",
      label: "Happy Clients",
      description: "Satisfied customers worldwide",
    },
    {
      icon: Award,
      number: "5+",
      label: "Years Experience",
      description: "In WordPress development",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock assistance",
    },
    {
      icon: Globe,
      number: "Remote",
      label: "Work Capability",
      description: "Serving clients globally",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">About WebLogic</h2>
              <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                <span className="font-semibold text-blue-600">A Signature of Success</span> - WebLogic is your trusted
                partner for professional WordPress development services. We specialize in creating powerful, scalable,
                and user-friendly websites that drive business growth and deliver exceptional user experiences.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses with cutting-edge WordPress solutions that not only meet their current needs but
                  also scale with their growth. We believe in delivering quality, innovation, and exceptional service in
                  every project.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">Why Choose WebLogic?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Expert team with 5+ years of WordPress experience</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Custom solutions tailored to your business needs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Remote work capability serving clients globally</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>24/7 support and ongoing maintenance services</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>SEO-optimized and performance-focused development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Content - Logo and Stats */}
          <div className="space-y-8">
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-xl inline-block">
                <Image
                  src="/images/weblogic-logo.jpg"
                  alt="WebLogic Logo"
                  width={200}
                  height={200}
                  className="mx-auto rounded-lg"
                />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="space-y-3">
                      <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                        <div className="font-semibold text-gray-700">{stat.label}</div>
                        <div className="text-sm text-gray-500">{stat.description}</div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
