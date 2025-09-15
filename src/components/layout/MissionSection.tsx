import { Card, CardContent } from '@/components/ui/card'

export default function MissionSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-yellow-100 to-amber-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 lg:mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 lg:mb-6 bg-yellow-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 lg:mb-8">
              Our Mission
            </h2>
          </div>
          
          <Card className="bg-white/80 backdrop-blur-sm border-yellow-200 shadow-lg">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <div className="space-y-4 lg:space-y-6">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                  Our mission is to bridge the gap between education and the professional world by offering 
                  customized guidance and support to help our customers excel in their personal and professional 
                  lives and be peaceful in their minds.
                </p>
                
                <div className="w-16 sm:w-20 lg:w-24 h-1 bg-yellow-500 mx-auto my-6 lg:my-8"></div>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Our focus remains on delivering exceptional service and creating long-lasting partnerships.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
