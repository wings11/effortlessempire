import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sakura Tanaka",
    role: "University Student in Sweden",
    image: "👩‍🎓",
    country: "🇯🇵 → 🇸🇪",
    rating: 5,
    testimonial: "Effortless Empire made my dream of studying in Sweden come true! Their guidance through the university application process was exceptional. I&apos;m now pursuing my Master&apos;s degree at KTH Royal Institute of Technology.",
    service: "Education Support & University Application"
  },
  {
    name: "Michael Rodriguez",
    role: "Software Engineer",
    image: "👨‍💻",
    country: "🇹🇭 → 🇨🇦",
    rating: 5,
    testimonial: "The career preparation and interview coaching I received was outstanding. They helped me land my dream job at a tech company in Toronto. The professional development program really boosted my confidence.",
    service: "Professional Development & Career Preparation"
  },
  {
    name: "Emma Thompson",
    role: "Master&apos;s Student in Germany",
    image: "👩‍🔬",
    country: "🇬🇧 → 🇩🇪",
    rating: 5,
    testimonial: "Amazing IELTS preparation! I scored 8.5 overall thanks to their comprehensive training program. The mock tests and personalized feedback were incredibly helpful for my university admission.",
    service: "IELTS Training & Language Proficiency"
  },
  {
    name: "David Kim",
    role: "PhD Candidate",
    image: "👨‍🎓",
    country: "🇰🇷 → 🇬🇧",
    rating: 5,
    testimonial: "Their scholarship consultation was a game-changer. I received a full scholarship for my PhD at Oxford University. The proposal writing guidance and documentation support were exceptional.",
    service: "Scholarship Consultation & Documentation"
  },
  {
    name: "Lisa Chen",
    role: "Marketing Manager",
    image: "👩‍💼",
    country: "🇨🇳 → 🇯🇵",
    rating: 5,
    testimonial: "The Japanese language training program helped me secure a position at a leading company in Tokyo. The cultural preparation and business communication skills were invaluable.",
    service: "Japanese Language Training & Cultural Preparation"
  },
  {
    name: "Ahmed Hassan",
    role: "Engineering Student",
    image: "👨‍🔧",
    country: "🇪🇬 → 🇨🇦",
    rating: 5,
    testimonial: "From university application to visa guidance, they supported me every step of the way. I&apos;m now studying Mechanical Engineering at University of Toronto with a partial scholarship.",
    service: "Complete Education Package"
  }
];

const stats = [
  { number: "500+", label: "Success Stories" },
  { number: "95%", label: "Success Rate" },
  { number: "50+", label: "Partner Universities" },
  { number: "15+", label: "Countries Supported" }
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Real stories from students and professionals who achieved their dreams with our support
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-yellow-100 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600">
                Discover how we&apos;ve helped transform lives and careers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-yellow-200 hover:border-yellow-400 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-3">{testimonial.image}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <div className="flex items-center mt-1">
                          <span className="text-sm mr-2">{testimonial.country}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-lg">⭐</span>
                      ))}
                    </div>
                    
                    {/* Testimonial Text */}
                    <blockquote className="text-gray-700 italic mb-4 flex-grow leading-relaxed">
                      &quot;{testimonial.testimonial}&quot;
                    </blockquote>
                    
                    {/* Service Tag */}
                    <div className="mt-auto">
                      <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">
                        {testimonial.service}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Video Testimonials
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Coming Soon - Hear directly from our successful clients
            </p>
            <div className="bg-white rounded-lg shadow-lg p-12">
              <div className="text-6xl mb-4">🎬</div>
              <p className="text-gray-600">
                We&apos;re currently preparing video testimonials from our clients around the world. 
                Check back soon to see their inspiring stories!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of students and professionals who have achieved their dreams
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3">
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3">
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
