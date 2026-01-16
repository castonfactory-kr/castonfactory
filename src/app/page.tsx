import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import OurBusiness from '@/components/OurBusiness'
import Portfolio from '@/components/Portfolio'
import AboutUs from '@/components/AboutUs'
import LocationSection from '@/components/LocationSection'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <OurBusiness />
                <Portfolio />
                <AboutUs />
                <LocationSection />
            </main>
            <Footer />
        </>
    )
}
