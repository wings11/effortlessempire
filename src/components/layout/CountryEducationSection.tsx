import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const countries = [
  { name: "UK", flag: "🇬🇧" },
  { name: "Sweden", flag: "🇸🇪" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Japan", flag: "🇯🇵" },
  { name: "Korea", flag: "🇰🇷" }
]

const services = [
  "Education Consultation",
  "Language Proficiency Training",
  "Japanese Training class till N4",
  "Consultancy on Scholarship",
  "Proof of Funds",
  "Bank certificate",
  "Show money services",
  "Proposal Writing",
  "Documentation"
]

export default function CountryEducationSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Education Support
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-600 mb-6 lg:mb-8">
              University Application
            </h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Countries List */}
            <div className="space-y-4 lg:space-y-6">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 lg:mb-6 text-center lg:text-left">
                Countries We Support:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                {countries.map((country, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-3 sm:p-4 bg-white rounded-lg border-2 border-yellow-200 hover:border-yellow-400 transition-colors"
                  >
                    <span className="text-2xl sm:text-3xl">{country.flag}</span>
                    <span className="text-base sm:text-lg font-medium text-gray-800">
                      {country.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Services List */}
            <Card className="bg-white border-yellow-200 shadow-lg">
              <CardHeader className="bg-yellow-500 text-white rounded-t-lg">
                <CardTitle className="text-lg sm:text-xl font-bold text-center">
                  Our Services Include:
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <ul className="space-y-3 lg:space-y-4">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-3 h-3 bg-yellow-500 rounded-full mt-2 mr-3 lg:mr-4 flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
