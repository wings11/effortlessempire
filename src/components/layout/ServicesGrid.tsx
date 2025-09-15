import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

export default function ServicesGrid() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Our Services
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We Are Here to Help You Get Expert Guidance for Educational & Career Success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-yellow-200 hover:border-yellow-400 h-full flex flex-col">
              <CardHeader className="text-center pb-4 flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 lg:mb-4 bg-yellow-50 rounded-full flex items-center justify-center overflow-hidden border-2 border-yellow-200">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    width={60}
                    height={60}
                    className="object-cover rounded-full"
                  />
                </div>
                <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm sm:text-base lg:text-lg">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col flex-grow">
                <ul className="space-y-2 lg:space-y-3 mb-6 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto space-y-4">
                  <p className="text-lg font-semibold text-yellow-600 text-center">
                    {service.pricing}
                  </p>
                  <Button 
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white text-sm sm:text-base"
                    size="lg"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
