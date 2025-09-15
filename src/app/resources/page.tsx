import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const studyGuides = [
  {
    title: "IELTS Preparation Guide",
    description: "Comprehensive guide covering all 4 skills with practice tests",
    icon: "📚",
    downloadLink: "#",
    type: "PDF Guide"
  },
  {
    title: "University Application Checklist",
    description: "Step-by-step checklist for international university applications",
    icon: "✅",
    downloadLink: "#",
    type: "Checklist"
  },
  {
    title: "Scholarship Search Guide",
    description: "How to find and apply for scholarships worldwide",
    icon: "💰",
    downloadLink: "#",
    type: "Guide"
  },
  {
    title: "CV/Resume Templates",
    description: "Professional templates for different countries and industries",
    icon: "📄",
    downloadLink: "#",
    type: "Templates"
  }
];

const webinars = [
  {
    title: "Study in Europe: Opportunities & Requirements",
    date: "March 15, 2025",
    time: "2:00 PM (Bangkok Time)",
    speaker: "Dr. Sarah Johnson",
    status: "upcoming",
    registrationLink: "#"
  },
  {
    title: "IELTS Speaking Masterclass",
    date: "March 22, 2025", 
    time: "3:00 PM (Bangkok Time)",
    speaker: "Prof. Yuki Tanaka",
    status: "upcoming",
    registrationLink: "#"
  },
  {
    title: "Career Development in Tech Industry",
    date: "February 28, 2025",
    time: "Recorded",
    speaker: "Michael Chen",
    status: "recorded",
    registrationLink: "#"
  }
];

const blogs = [
  {
    title: "Top 10 Universities in Sweden for International Students",
    excerpt: "Discover the best Swedish universities offering world-class education and research opportunities for international students.",
    date: "March 1, 2025",
    readTime: "5 min read",
    category: "Education",
    link: "#"
  },
  {
    title: "IELTS vs TOEFL: Which Test Should You Take?",
    excerpt: "A comprehensive comparison of IELTS and TOEFL to help you choose the right English proficiency test for your goals.",
    date: "February 25, 2025",
    readTime: "4 min read", 
    category: "Language",
    link: "#"
  },
  {
    title: "Scholarship Opportunities in Germany 2025",
    excerpt: "Explore various scholarship programs available for international students planning to study in Germany.",
    date: "February 20, 2025",
    readTime: "6 min read",
    category: "Scholarships", 
    link: "#"
  },
  {
    title: "Interview Tips for International Job Applications",
    excerpt: "Essential tips and strategies to excel in job interviews when applying for positions abroad.",
    date: "February 15, 2025",
    readTime: "7 min read",
    category: "Career",
    link: "#"
  }
];

const tools = [
  {
    title: "IELTS Score Calculator",
    description: "Calculate your overall IELTS band score",
    icon: "🧮",
    type: "Calculator",
    link: "#"
  },
  {
    title: "University Finder",
    description: "Find universities that match your criteria",
    icon: "🎓",
    type: "Search Tool",
    link: "#"
  },
  {
    title: "Cost of Living Calculator",
    description: "Compare living costs across different countries",
    icon: "💱",
    type: "Calculator", 
    link: "#"
  },
  {
    title: "Document Checklist Generator",
    description: "Generate customized document lists for your application",
    icon: "📋",
    type: "Generator",
    link: "#"
  }
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Resources & Tools
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Free resources to support your academic and career journey
            </p>
          </div>
        </div>
      </section>

      {/* Study Guides & Downloads */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Study Guides & Downloads
              </h2>
              <p className="text-xl text-gray-600">
                Free downloadable resources to help you succeed
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {studyGuides.map((guide, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-yellow-200 hover:border-yellow-400">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-3">{guide.icon}</div>
                    <CardTitle className="text-lg font-bold text-gray-900 mb-2">
                      {guide.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                      {guide.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                        {guide.type}
                      </span>
                      <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                        Download Free
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Webinars & Events */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Webinars & Events
              </h2>
              <p className="text-xl text-gray-600">
                Join our free educational webinars and events
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webinars.map((webinar, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-yellow-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-900 flex-1">
                        {webinar.title}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded ${
                        webinar.status === 'upcoming' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {webinar.status}
                      </span>
                    </div>
                    <div className="space-y-2 mb-4">
                      <p className="text-gray-600">📅 {webinar.date}</p>
                      <p className="text-gray-600">⏰ {webinar.time}</p>
                      <p className="text-gray-600">👨‍🏫 {webinar.speaker}</p>
                    </div>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                      {webinar.status === 'upcoming' ? 'Register Now' : 'Watch Recording'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Interactive Tools
              </h2>
              <p className="text-xl text-gray-600">
                Helpful tools to plan and prepare your journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-yellow-200 hover:border-yellow-400 text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{tool.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mb-4">
                      {tool.type}
                    </span>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                      Use Tool
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-600">
                Stay updated with our latest insights and tips
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogs.map((blog, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-yellow-200 hover:border-yellow-400">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                        {blog.category}
                      </span>
                      <span className="text-gray-500 text-sm">{blog.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{blog.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{blog.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{blog.date}</span>
                      <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3">
                View All Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-yellow-100 mb-8">
              Subscribe to our newsletter for the latest resources and opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-yellow-300"
              />
              <Button className="bg-white text-yellow-600 hover:bg-gray-100 px-6 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
