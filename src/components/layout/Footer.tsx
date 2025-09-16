import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">EE</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold">Effortless Empire Co.,Ltd</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md text-sm sm:text-base leading-relaxed">
              Turning Goals Into Reality. A trusted academic and career consultancy located in Bangkok, 
              committed to empowering individuals through innovative learning and career development solutions.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm sm:text-base w-full sm:w-auto"
              >
                Get Started Today
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white text-sm sm:text-base w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </div>
          </div>
          
          {/* Services */}
          <div className="mt-8 sm:mt-0">
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-yellow-400">Our Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li>
                <Link href="/about" className="hover:text-yellow-400 transition-colors">Education Support</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-400 transition-colors">Language Proficiency</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-400 transition-colors">Professional Development</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-400 transition-colors">University Application</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-400 transition-colors">Scholarship Consultation</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-400 transition-colors">Career Preparation</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="mt-8 lg:mt-0">
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-yellow-400">Contact</h4>
            <div className="space-y-2 text-gray-300 text-sm sm:text-base">
              <p>📍 Bangkok, Thailand</p>
              <p>📧 [Contact Email]</p>
              <p>📞 [Contact Phone]</p>
              <p>🌐 [Website URL]</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 lg:mt-12 pt-6 lg:pt-8 text-center text-gray-400">
          <p className="text-xs sm:text-sm">&copy; 2025 Effortless Empire Co.,Ltd. All rights reserved. | Turning Goals Into Reality</p>
        </div>
      </div>
    </footer>
  )
}
