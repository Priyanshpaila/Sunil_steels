"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Award, Zap } from "lucide-react"

export default function ProductsPage() {
  const products = [
    {
      name: "Channels",
      description: "ISMC & ISLC channels for structural applications",
      specifications: [
        { property: "Size Range", value: "75mm to 400mm" },
        { property: "Length", value: "6m to 12m" },
        { property: "Grade", value: "Fe 410, Fe 500" },
        { property: "Standard", value: "IS 808:1989" },
      ],
      applications: ["Construction", "Infrastructure", "Industrial Buildings", "Bridges"],
      certifications: ["BIS", "ISO 9001:2015"],
      images: "/channels.jpeg",
    },
    {
      name: "Beams",
      description: "ISMB & ISJB beams for heavy construction",
      specifications: [
        { property: "Size Range", value: "100mm to 600mm" },
        { property: "Length", value: "6m to 12m" },
        { property: "Grade", value: "Fe 410, Fe 500, Fe 550" },
        { property: "Standard", value: "IS 808:1989" },
      ],
      applications: ["Heavy Construction", "Industrial Structures", "High-rise Buildings", "Infrastructure"],
      certifications: ["BIS", "ISO 9001:2015"],
      images: "/beams.jpeg",
    },
    {
      name: "Flats",
      description: "Flat bars for various industrial uses",
      specifications: [
        { property: "Width Range", value: "20mm to 200mm" },
        { property: "Thickness", value: "3mm to 50mm" },
        { property: "Length", value: "6m to 12m" },
        { property: "Grade", value: "Fe 410, Fe 500" },
      ],
      applications: ["Manufacturing", "Fabrication", "Agricultural Equipment", "General Engineering"],
      certifications: ["BIS", "ISO 9001:2015"],
      images: "/flats.jpeg",
    },
    {
      name: "Rounds",
      description: "Round bars for construction and manufacturing",
      specifications: [
        { property: "Diameter Range", value: "6mm to 50mm" },
        { property: "Length", value: "6m to 12m" },
        { property: "Grade", value: "Fe 415, Fe 500, Fe 550" },
        { property: "Standard", value: "IS 1786:2008" },
      ],
      applications: ["Construction", "Reinforcement", "Manufacturing", "Automotive"],
      certifications: ["BIS", "ISO 9001:2015"],
      images: "/rounds.jpeg",
    },
    {
      name: "Squares",
      description: "Square bars for structural applications",
      specifications: [
        { property: "Size Range", value: "10mm to 100mm" },
        { property: "Length", value: "6m to 12m" },
        { property: "Grade", value: "Fe 410, Fe 500" },
        { property: "Tolerance", value: "±0.5mm" },
      ],
      applications: ["Structural Work", "Fabrication", "Industrial Applications", "Construction"],
      certifications: ["BIS", "ISO 9001:2015"],
      images: "/squares.jpeg",
    },
    {
      name: "Billets",
      description: "High-quality billets for further processing",
      specifications: [
        { property: "Size Range", value: "100x100mm to 150x150mm" },
        { property: "Length", value: "3m to 12m" },
        { property: "Grade", value: "Fe 410, Fe 500, Fe 550" },
        { property: "Carbon Content", value: "0.15% to 0.25%" },
      ],
      applications: ["Re-rolling Mills", "Wire Drawing", "Forging", "Further Processing"],
      certifications: ["BIS", "ISO 9001:2015"],
      images: "/billets.jpg",
    },
  ]

  const [activeProduct, setActiveProduct] = useState(products[0].name)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Steel Products</h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive range of high-quality steel products manufactured to international standards for
              construction, infrastructure, and industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding">
        <div className="container-custom">
          <Tabs value={activeProduct} onValueChange={setActiveProduct} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
              {products.map((product) => (
                <TabsTrigger key={product.name} value={product.name} className="text-sm">
                  {product.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {products.map((product) => (
              <TabsContent key={product.name} value={product.name}>
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Product Image */}
                  <div className="space-y-4">
                    <Image
                      src={product.images}
                      alt={product.name}
                      width={500}
                      height={300}
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold mb-4 text-gradient">{product.name}</h2>
                      <p className="text-gray-600 text-lg mb-6">{product.description}</p>
                    </div>

                    {/* Specifications */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-orange-500 mr-2" />
                          Technical Specifications
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {product.specifications.map((spec, index) => (
                            <div key={index} className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-gray-700">{spec.property}:</span>
                              <span className="text-gray-600">{spec.value}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Applications */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Zap className="h-5 w-5 text-orange-500 mr-2" />
                          Applications
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {product.applications.map((app, index) => (
                            <Badge key={index} variant="secondary" className="bg-orange-100 text-orange-800">
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Certifications */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Award className="h-5 w-5 text-orange-500 mr-2" />
                          Certifications
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {product.certifications.map((cert, index) => (
                            <Badge key={index} className="bg-green-100 text-green-800">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Quality Assurance</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every product undergoes rigorous quality testing to ensure it meets the highest standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Material Testing</h3>
              <p className="text-gray-600">
                Comprehensive chemical composition and mechanical property testing for every batch.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ISO Certified</h3>
              <p className="text-gray-600">
                ISO 9001:2015 certified manufacturing processes ensuring consistent quality.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">BIS Approved</h3>
              <p className="text-gray-600">
                All products meet Bureau of Indian Standards specifications and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
