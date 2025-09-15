import HeroSection from '@/components/layout/HeroSection'
import MissionSection from '@/components/layout/MissionSection'
import ServicesGrid from '@/components/layout/ServicesGrid'
import CountryEducationSection from '@/components/layout/CountryEducationSection'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionSection />
      <ServicesGrid />
      <CountryEducationSection />
    </div>
  )
}
