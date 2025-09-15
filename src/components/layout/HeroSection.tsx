'use client'

import { useState, useEffect } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const heroSlides = [
  {
    title: "Effortless Empire Co.,Ltd",
    subtitle: "Turning Goals Into Reality",
    description: "Effortless Empire Co., Ltd. is a trusted academic and career consultancy located in Bangkok. It is committed to empowering individuals and organizations through innovative learning and career development solutions.",
    cta: "Start Your Journey"
  },
  {
    title: "Comprehensive Solutions for",
    subtitle: "Academic and Career Success", 
    description: "Founded on the principles of integrity and qualified services, it is dedicated to providing educational solutions, lifestyle enhancement, and professional development services.",
    cta: "Explore Services"
  },
  {
    title: "Expert Guidance for",
    subtitle: "Educational & Career Success",
    description: "Get customized plans and personalized support for your academic and career goals with our expert consultation and strategic development services.",
    cta: "Get Started"
  }
]

export default function HeroSection() {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="relative bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100 py-10 sm:py-16 lg:py-20 xl:py-32 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Carousel 
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <Card className="border-0 bg-transparent">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                      <div className="flex-1 text-center lg:text-left space-y-4 lg:space-y-6 w-full">
                        <div className="space-y-3 lg:space-y-4">
                          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight break-words">
                            {slide.title}
                          </h1>
                          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-yellow-600 font-semibold break-words">
                            {slide.subtitle}
                          </p>
                        </div>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                          {slide.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
                          <Button 
                            size="lg" 
                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg w-full sm:w-auto"
                          >
                            {slide.cta}
                          </Button>
                          <Button 
                            variant="outline" 
                            size="lg"
                            className="border-yellow-500 text-yellow-700 hover:bg-yellow-50 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg w-full sm:w-auto"
                          >
                            Learn More
                          </Button>
                        </div>
                      </div>
                      <div className="flex-1 flex justify-center w-full lg:w-auto">
                        <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-full flex items-center justify-center">
                          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">📚</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
        
        {/* Carousel indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === current ? 'bg-yellow-500' : 'bg-yellow-200'
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
