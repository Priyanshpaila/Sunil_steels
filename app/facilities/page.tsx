import Image from "next/image";
import { MapPin, Zap, Factory, Award, Gauge, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FacilitiesPage() {
  const facilities = [
    {
      name: "Siltara Plant",
      location: "Siltara, Raipur, Chhattisgarh",
      established: "1990",
      capacity: "150,000 MT/Year",
      image: "/Siltara.jpeg",
      units: [
        "Sponge Iron Plant (100 TPD)",
        "Induction Furnace (50 MT/Day)",
        "Rolling Mill (500 MT/Day)",
        "WHRB Power Plant (6 MW)",
      ],
      certifications: [
        "ISO 9001:2015",
        "BIS Certified",
        "Pollution Control Board",
      ],
      specialties: ["Channels", "Beams", "Flats"],
    },
    {
      name: "Urla Plant",
      location: "Urla, Raipur, Chhattisgarh",
      established: "2000",
      capacity: "200,000 MT/Year",
      image: "/Urla.jpeg",
      units: [
        "Sponge Iron Plant (150 TPD)",
        "Induction Furnace (75 MT/Day)",
        "Rolling Mill (750 MT/Day)",
        "WHRB Power Plant (8 MW)",
      ],
      certifications: [
        "ISO 9001:2015",
        "BIS Certified",
        "Green Building Certified",
      ],
      specialties: ["Rounds", "Squares", "Billets"],
    },
    {
      name: "Raigarh Plant",
      location: "Raigarh, Chhattisgarh",
      established: "2020",
      capacity: "300,000 MT/Year",
      image: "/Raigarh.png",
      units: [
        "Sponge Iron Plant (200 TPD)",
        "Induction Furnace (100 MT/Day)",
        "Rolling Mill (1000 MT/Day)",
        "WHRB Power Plant (12 MW)",
      ],
      certifications: ["ISO 9001:2015", "BIS Certified", "Industry 4.0 Ready"],
      specialties: ["All Products", "Custom Solutions", "Export Quality"],
    },
  ];

  const totalStats = {
    capacity: "650,000 MT/Year",
    power: "26 MW Green Power",
    employees: "2,500+",
    experience: "40+ Years",
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              World-Class Manufacturing Facilities
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Three state-of-the-art integrated steel plants across
              Chhattisgarh, equipped with modern technology and sustainable
              practices to deliver superior quality products.
            </p>
          </div>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Factory className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-800 mb-2">
                {totalStats.capacity}
              </div>
              <div className="text-gray-600">Total Capacity</div>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-800 mb-2">
                {totalStats.power}
              </div>
              <div className="text-gray-600">Green Power</div>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-800 mb-2">
                {totalStats.employees}
              </div>
              <div className="text-gray-600">Employees</div>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-800 mb-2">
                {totalStats.experience}
              </div>
              <div className="text-gray-600">Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Details */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
            Our Manufacturing Plants
          </h2>

          <div className="space-y-16">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Facility Image */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl w-full h-80 object-cover"
                  />
                </div>

                {/* Facility Details */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2 text-gradient">
                        {facility.name}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="h-5 w-5 mr-2" />
                        {facility.location}
                      </div>
                      <div className="text-sm text-gray-500">
                        Established: {facility.established} | Capacity:{" "}
                        {facility.capacity}
                      </div>
                    </div>

                    {/* Integrated Units */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Factory className="h-5 w-5 text-orange-500 mr-2" />
                          Integrated Units
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {facility.units.map((unit, unitIndex) => (
                            <div key={unitIndex} className="flex items-center">
                              <Gauge className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                              <span className="text-sm text-gray-700">
                                {unit}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Certifications */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Award className="h-5 w-5 text-orange-500 mr-2" />
                        Certifications
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {facility.certifications.map((cert, certIndex) => (
                          <Badge
                            key={certIndex}
                            className="bg-green-100 text-green-800"
                          >
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Specialties */}
                    <div>
                      <h4 className="font-semibold mb-3">
                        Product Specialties
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {facility.specialties.map((specialty, specIndex) => (
                          <Badge
                            key={specIndex}
                            variant="secondary"
                            className="bg-orange-100 text-orange-800"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
            Technology & Innovation
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-6 w-6 text-orange-500 mr-2" />
                  WHRB Technology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Waste Heat Recovery Boilers generate clean electricity from
                  waste heat, reducing carbon footprint and energy costs.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Factory className="h-6 w-6 text-orange-500 mr-2" />
                  Integrated Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Complete integration from sponge iron to finished products
                  ensures quality control and cost efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gauge className="h-6 w-6 text-orange-500 mr-2" />
                  Quality Control
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Advanced testing laboratories and automated quality monitoring
                  systems ensure consistent product quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Map Placeholder */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
            Our Locations
          </h2>

          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <MapPin className="h-16 w-16 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
            <p className="text-gray-600 mb-4">
              Explore our manufacturing facilities across Chhattisgarh
            </p>
            <div className="text-sm text-gray-500">
              Map integration would show exact locations of Siltara, Urla, and
              Raigarh plants
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
