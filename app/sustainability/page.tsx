import Image from "next/image"
import { Leaf, Zap, Users, Award, TrendingUp, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function SustainabilityPage() {
  const greenPowerStats = [
    { metric: "Green Power Generated", value: "26 MW", description: "From WHRB technology" },
    { metric: "CO₂ Emissions Reduced", value: "45,000 tons/year", description: "Environmental impact" },
    { metric: "Energy Efficiency", value: "85%", description: "Heat recovery rate" },
    { metric: "Clean Energy Usage", value: "60%", description: "Of total power consumption" },
  ]

  const csrPrograms = [
    {
      title: "DDUGKY Skill Development",
      description: "Training programs for youth in steel industry skills",
      beneficiaries: "2,500+",
      impact: "Youth trained and employed",
      image: "/DDUGKY-2.jpg",
    },
    {
      title: "Community Healthcare",
      description: "Mobile health clinics and medical camps",
      beneficiaries: "10,000+",
      impact: "People served annually",
      image: "/med.jpg",
    },
    {
      title: "Education Support",
      description: "School infrastructure and scholarship programs",
      beneficiaries: "1,200+",
      impact: "Students supported",
      image: "/edusp.jpg",
    },
  ]

  const sustainabilityMetrics = [
    { label: "Water Recycling", value: 90, unit: "%" },
    { label: "Waste Reduction", value: 75, unit: "%" },
    { label: "Green Energy Usage", value: 60, unit: "%" },
    { label: "Employee Safety Score", value: 95, unit: "%" },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sustainability & Corporate Social Responsibility</h1>
            <p className="text-xl text-green-100 mb-8">
              Committed to responsible manufacturing, environmental stewardship, and community development for a
              sustainable future.
            </p>
          </div>
        </div>
      </section>

      {/* Green Power Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Green Power Generation</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our Waste Heat Recovery Boiler (WHRB) technology converts waste heat into clean electricity, significantly
              reducing our carbon footprint.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {greenPowerStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Zap className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <CardTitle className="text-2xl font-bold text-green-600">{stat.value}</CardTitle>
                  <CardDescription className="font-semibold">{stat.metric}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* WHRB Infographic */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-8">How WHRB Technology Works</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-red-500" />
                </div>
                <h4 className="font-semibold mb-2">Waste Heat Capture</h4>
                <p className="text-sm text-gray-600">
                  High-temperature waste gases from steel production are captured instead of being released.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-500" />
                </div>
                <h4 className="font-semibold mb-2">Steam Generation</h4>
                <p className="text-sm text-gray-600">
                  Waste heat converts water into high-pressure steam through heat recovery boilers.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-green-500" />
                </div>
                <h4 className="font-semibold mb-2">Clean Electricity</h4>
                <p className="text-sm text-gray-600">
                  Steam drives turbines to generate clean electricity, reducing grid dependency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Metrics */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">Environmental Performance</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {sustainabilityMetrics.map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">{metric.label}</h3>
                  <span className="text-2xl font-bold text-green-600">
                    {metric.value}
                    {metric.unit}
                  </span>
                </div>
                <Progress value={metric.value} className="h-3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Programs */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Corporate Social Responsibility</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Empowering communities through education, healthcare, and skill development programs that create lasting
              positive impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {csrPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={`${program.image}`}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-5 w-5 text-red-500 mr-2" />
                    {program.title}
                  </CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-orange-500">{program.beneficiaries}</div>
                      <div className="text-sm text-gray-600">{program.impact}</div>
                    </div>
                    <Users className="h-8 w-8 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">Impact Stories</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Transforming Lives Through Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="text-gray-600 italic mb-4">
                  "The DDUGKY program gave me the technical skills I needed to secure a good job in the steel industry.
                  Today, I'm supporting my family and building a better future."
                </blockquote>
                <div className="text-sm text-gray-500">- Rajesh Kumar, Program Graduate</div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Healthcare Reaching Rural Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="text-gray-600 italic mb-4">
                  "The mobile health clinic has been a blessing for our village. Regular check-ups and medicines are now
                  accessible to everyone, improving our community's health significantly."
                </blockquote>
                <div className="text-sm text-gray-500">- Sita Devi, Village Resident</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Commitments */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Sustainability Commitments</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <Leaf className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Carbon Neutral by 2030</h3>
              <p className="text-green-100">
                Achieving net-zero carbon emissions through renewable energy and efficiency improvements.
              </p>
            </div>
            <div>
              <Users className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Development</h3>
              <p className="text-green-100">Expanding our CSR programs to reach 50,000 beneficiaries by 2025.</p>
            </div>
            <div>
              <Award className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Industry Leadership</h3>
              <p className="text-green-100">Setting new benchmarks for sustainable steel manufacturing in India.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
