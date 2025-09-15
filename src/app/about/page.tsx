import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Academic Director",
    image: "👩‍🎓",
    background: "PhD in Educational Psychology, 15+ years experience in international education"
  },
  {
    name: "Michael Chen",
    role: "Career Counselor",
    image: "👨‍💼",
    background: "MBA, Former HR Director at multinational corporations, 12+ years in career development"
  },
  {
    name: "Prof. Yuki Tanaka",
    role: "Language Specialist",
    image: "👩‍🏫",
    background: "Master's in Applied Linguistics, IELTS examiner, 10+ years teaching experience"
  }
];

const values = [
  {
    icon: "🎯",
    title: "Excellence",
    description: "We strive for the highest standards in everything we do"
  },
  {
    icon: "🤝",
    title: "Integrity",
    description: "We build trust through honest and transparent relationships"
  },
  {
    icon: "🌱",
    title: "Growth",
    description: "We are committed to continuous learning and development"
  },
  {
    icon: "🌍",
    title: "Global Perspective",
    description: "We embrace diversity and international opportunities"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About Effortless Empire
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Your trusted partner in academic and career success
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-20 h-20 mx-auto mb-6 bg-yellow-500 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Our Mission
              </h2>
            </div>
            
            <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200 shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center">
                    Our mission is to bridge the gap between education and the professional world by offering 
                    customized guidance and support to help our customers excel in their personal and professional 
                    lives and be peaceful in their minds.
                  </p>
                  
                  <div className="w-24 h-1 bg-yellow-500 mx-auto my-8"></div>
                  
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center">
                    Our focus remains on delivering exceptional service and creating long-lasting partnerships.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Founded on Excellence
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Effortless Empire Co., Ltd. is a trusted academic and career consultancy located in Bangkok. 
                  Founded on the principles of integrity and qualified services, we are dedicated to providing 
                  educational solutions, lifestyle enhancement, and professional development services.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We are committed to empowering individuals and organizations through innovative learning 
                  and career development solutions in today&apos;s rapidly evolving world.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-full flex items-center justify-center">
                  <div className="text-8xl">🏢</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-yellow-200">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600">
                Experienced professionals dedicated to your success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-yellow-200">
                  <CardContent className="p-6">
                    <div className="text-6xl mb-4">{member.image}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-yellow-600 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed">{member.background}</p>
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
              Join Our Success Stories
            </h2>
            <p className="text-xl text-yellow-100 mb-8">
              Ready to transform your academic and career journey with us?
            </p>
            <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-3">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
