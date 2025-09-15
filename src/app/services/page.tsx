import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const services = [
  {
    image: "/education-support.png",
    title: "Education Support",
    description: "Comprehensive educational consultation and support services",
    features: [
      "Education Consultation",
      "Consultancy on Scholarship",
      "Global University Application",
      "Proof of Funds/Bank Certificate/Show Money services", 
      "Proposal Writing",
      "Documentation"
    ],
    pricing: "Starting from ฿5,000"
  },
  {
    image: "/language-proficiency.png", 
    title: "Language Proficiency",
    description: "Professional language training and certification preparation",
    features: [
      "IELTS 4 skills Training & Mock Test Practice",
      "TOEFL, Duolingo Training Classes", 
      "English Group Training & One-on-One Sessions",
      "Japanese Language Training"
    ],
    pricing: "Starting from ฿3,000"
  },
  {
    image: "/professional-development.png",
    title: "Professional Development", 
    description: "Career advancement and professional growth services",
    features: [
      "Job Training Classes",
      "Intern Opportunities",
      "Career Preparation",
      "Interview Practice",
      "Wellbeing and Mental Support",
      "Wellness Camps"
    ],
    pricing: "Starting from ฿4,000"
  }
];

const countries = [
  { name: "United Kingdom", flag: "🇬🇧", universities: "150+ Partner Universities" },
  { name: "Sweden", flag: "🇸🇪", universities: "50+ Partner Universities" },
  { name: "Germany", flag: "🇩🇪", universities: "100+ Partner Universities" },
  { name: "Canada", flag: "🇨🇦", universities: "80+ Partner Universities" },
  { name: "Japan", flag: "🇯🇵", universities: "60+ Partner Universities" },
  { name: "Korea", flag: "🇰🇷", universities: "40+ Partner Universities" }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive solutions for your academic and career success
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              What We Offer
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-yellow-200 hover:border-yellow-400 h-full flex flex-col">
                  <CardHeader className="text-center flex-shrink-0">
                    <div className="w-20 h-20 mx-auto mb-4 bg-yellow-50 rounded-full flex items-center justify-center overflow-hidden border-2 border-yellow-200">
                      <Image 
                        src={service.image}
                        alt={service.title}
                        width={60}
                        height={60}
                        className="object-cover rounded-full"
                      />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-lg">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <ul className="space-y-3 mb-6 flex-grow">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto space-y-4">
                      <p className="text-lg font-semibold text-yellow-600 text-center">{service.pricing}</p>
                      <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Countries We Support */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Countries We Support
              </h2>
              <p className="text-xl text-gray-600">
                Global education opportunities across multiple countries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {countries.map((country, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-yellow-200">
                  <CardContent className="p-6">
                    <div className="text-5xl mb-4">{country.flag}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{country.name}</h3>
                    <p className="text-gray-600">{country.universities}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-yellow-100 mb-8">
              Get personalized consultation and take the first step towards your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-3">
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-3">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
