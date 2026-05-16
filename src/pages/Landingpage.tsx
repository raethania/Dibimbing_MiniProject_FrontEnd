import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import AboutUs from "../components/landing/AboutUs";
import Service from "../components/landing/Service";
import Banner from "../components/landing/Banner";
import Footer from "../components/landing/Footer";

export default function Landingpage() {
  return (
    <div className='max-w-420 w-full mx-auto my-8 px-10'>
      <Navbar/>
      <HeroSection/>
      <AboutUs/>
      <Service/>
      <Banner/>
      <Footer/>
    </div>
  )
}
