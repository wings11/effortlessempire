import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    icon: "📧",
    title: "Email Us",
    description: "Send us an email and we&apos;ll respond within 24 hours",
    contact: "info@effortlessempire.co.th",
    action: "Send Email"
  },
  {
    icon: "📞",
    title: "Call Us",
    description: "Speak with our consultants directly",
    contact: "+66 (0) 2-XXX-XXXX",
    action: "Call Now"
  },
  {
    icon: "💬",
    title: "Live Chat", 
    description: "Chat with us in real-time during business hours",
    contact: "Available Mon-Fri, 9 AM - 6 PM",
    action: "Start Chat"
  },
  {
    icon: "📍",
    title: "Visit Our Office",
    description: "Meet us in person at our Bangkok office",
    contact: "Bangkok, Thailand",
    action: "Get Directions"
  }
];

const offices = [
  {
    city: "Bangkok",
    country: "Thailand",
    address: "123 Business District\nSilom Road, Bangrak\nBangkok 10500, Thailand",
    phone: "+66 (0) 2-XXX-XXXX",
    email: "bangkok@effortlessempire.co.th",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM\nSun: Closed"
  }
];

const faqs = [
  {
    question: "How long does the university application process take?",
    answer: "The application process typically takes 3-6 months, depending on the country and university. We recommend starting at least 8-12 months before your intended start date."
  },
  {
    question: "Do you guarantee admission to universities?",
    answer: "While we cannot guarantee admission, our success rate is 95%. We carefully assess your profile and only recommend universities where you have a strong chance of acceptance."
  },
  {
    question: "What are your consultation fees?",
    answer: "We offer a free initial consultation. Our service packages start from ฿5,000 depending on the services required. Contact us for a personalized quote."
  },
  {
    question: "Do you help with visa applications?",
    answer: "Yes, we provide comprehensive visa guidance and documentation support for all the countries we serve."
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Ready to start your journey? Get in touch with our expert consultants
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600">
                Choose your preferred way to reach us
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {contactMethods.map((method, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-yellow-200 hover:border-yellow-400 h-full flex">
                  <CardContent className="p-6 h-full flex flex-col w-full">
                    <div className="text-4xl mb-4">{method.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                    <div className="flex flex-col gap-2 flex-grow">
                      <p className="text-gray-600 text-sm">{method.description}</p>
                      <p className="text-yellow-600 font-semibold">{method.contact}</p>
                    </div>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white mt-auto">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="border-yellow-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      Send Us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                        placeholder="+66 XX XXX XXXX"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interest
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500">
                        <option value="">Select a service</option>
                        <option value="education">Education Support</option>
                        <option value="language">Language Proficiency</option>
                        <option value="career">Professional Development</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea 
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                        placeholder="Tell us about your goals and how we can help you..."
                      ></textarea>
                    </div>
                    
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 text-lg">
                      Send Message
                    </Button>
                    
                    <p className="text-sm text-gray-600 text-center">
                      We&apos;ll respond to your inquiry within 24 hours
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Office Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Office</h3>
                  {offices.map((office, index) => (
                    <Card key={index} className="border-yellow-200 shadow-lg">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">
                          {office.city}, {office.country}
                        </h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-gray-700 mb-1">Address:</h5>
                            <p className="text-gray-600 whitespace-pre-line">{office.address}</p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-700 mb-1">Phone:</h5>
                            <p className="text-gray-600">{office.phone}</p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-700 mb-1">Email:</h5>
                            <p className="text-gray-600">{office.email}</p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-700 mb-1">Hours:</h5>
                            <p className="text-gray-600 whitespace-pre-line">{office.hours}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {/* Google Map */}
                <Card className="border-yellow-200 shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Find Us</h4>
                    <div className="rounded-lg overflow-hidden border border-yellow-200">
                      <iframe
                        title="Effortless Empire Bangkok Map"
                        src="https://www.google.com/maps?q=Silom+Road,+Bangrak,+Bangkok+10500,+Thailand&output=embed"
                        className="w-full h-64 md:h-80"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to common questions
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-yellow-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
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
              Start Your Free Consultation
            </h2>
            <p className="text-xl text-yellow-100 mb-8">
              Book a free 30-minute consultation to discuss your goals and how we can help
            </p>
            <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-3">
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
