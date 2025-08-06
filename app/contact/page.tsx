"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, User, Truck, Heart, Briefcase } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    purpose: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactPersons = [
    {
      department: "Plant Issues",
      name: "Sachin",
      // position: "Sales Manager",
      phone: "+91-92293 32035",
      // email: "sales@sunilgroup.com",
      icon: Briefcase,
    },
    {
      department: "Sales Head",
      name: "Omprakash Nayak",
      // position: "Logistics Head",
      phone: "+91-9229336100",
      // email: "logistics@sunilgroup.com",
      icon: Truck,
    },
    {
      department: "Other Commercial Matter",
      name: "Sudhir Gupta",
      // position: "CSR Manager",
      phone: "+91-88788 79180",
      // email: "csr@sunilgroup.com",
      icon: Heart,
    },
    {
      department: "Accounting & GST Matters",
      name: "Praveen Chawda",
      // position: "Accounting & GST Matters",
      phone: "+91-91113 54300",
      // email: "technical@sunilgroup.com",
      icon: User,
    },
  ]

  const locations = [
    {
      name: "Head Office",
      address: "Sunil Bhawan, Ring Road No. 1, Raipur, Chhattisgarh - 492001",
      phone: "+91-0771-2439058",
      email: "sunilsponge@yahoo.co.in",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    },
    {
      name: "Siltara Plant",
      address: "Industrial Area, Siltara, Raipur, Chhattisgarh - 493111",
      phone: "+91-771-2345679",
      email: "siltara@sunilgroup.com",
      hours: "24/7 Operations",
    },
    {
      name: "Urla Plant",
      address: "Industrial Area, Urla, Raipur, Chhattisgarh - 493221",
      phone: "+91-771-2345680",
      email: "urla@sunilgroup.com",
      hours: "24/7 Operations",
    },
    {
      name: "Raigarh Plant",
      address: "Industrial Area, Raigarh, Chhattisgarh - 496001",
      phone: "+91-771-2345681",
      email: "raigarh@sunilgroup.com",
      hours: "24/7 Operations",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-300 mb-8">
              Ready to partner with India's leading steel manufacturer? Contact our team for custom solutions, bulk
              orders, or technical consultations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gradient">Send us a Message</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Form</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <Input
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number *</label>
                        <Input
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Purpose of Contact *</label>
                      <Select
                        value={formData.purpose}
                        onValueChange={(value) => setFormData({ ...formData, purpose: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select purpose" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rfq">Request for Quote</SelectItem>
                          <SelectItem value="visit">Plant Visit</SelectItem>
                          <SelectItem value="partnership">Business Partnership</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="csr">CSR Inquiry</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea
                        placeholder="Please provide details about your inquiry..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full btn-primary">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Interactive Map Placeholder */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gradient">Our Locations</h2>
              {/* <div className="bg-gray-100 rounded-lg p-8 h-96 flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Interactive Google Map</h3>
                  <p className="text-gray-600">Showing all our factory and office locations across Chhattisgarh</p>
                </div>
              </div> */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {locations.slice(0, 4).map((location, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow border">
                    <h4 className="font-semibold text-orange-600 mb-2">{location.name}</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{location.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{location.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{location.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Persons */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">Contact Our Team</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactPersons.map((person, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <person.icon className="h-8 w-8 text-orange-500" />
                  </div>
                  <CardTitle className="text-lg">{person.department}</CardTitle>
                  <CardDescription>{person.name}</CardDescription>
                  {/* <div className="text-sm text-gray-500">{person.position}</div> */}
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <div className="flex items-center justify-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-orange-500" />
                    <a href={`tel:${person.phone}`} className="hover:text-orange-500">
                      {person.phone}
                    </a>
                  </div>
                  {/* <div className="flex items-center justify-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-orange-500" />
                    <a href={`mailto:${person.email}`} className="hover:text-orange-500">
                      {person.email}
                    </a>
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="section-padding bg-industrial text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300 mb-2">For immediate assistance</p>
              <a href="tel:+91-0771-2439058" className="text-orange-400 hover:text-orange-300 font-semibold">
                +91-0771-2439058
              </a>
            </div>
            <div>
              <Mail className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300 mb-2">For detailed inquiries</p>
              <a href="mailto:sunilsponge@yahoo.co.in" className="text-orange-400 hover:text-orange-300 font-semibold">
                sunilsponge@yahoo.co.in
              </a>
            </div>
            <div>
              <Clock className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
              <p className="text-gray-300 mb-2">Monday to Saturday</p>
              <p className="text-orange-400 font-semibold">9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
