import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InfoBar from "@/components/InfoBar";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import ReservationSection from "@/components/ReservationSection";
import HoursSection from "@/components/HoursSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <InfoBar />
      <AboutSection />
      <MenuSection />
      <ReservationSection />
      <HoursSection />
      <Footer />
    </div>
  );
}
