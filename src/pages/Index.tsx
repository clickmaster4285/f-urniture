import { motion } from "framer-motion";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CollectionSection from "@/components/CollectionSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProcessSection from "@/components/ProcessSection";
import GallerySection from "@/components/GallerySection";
import NewArrivalsSection from "@/components/NewArrivalsSection";
import CTABannerSection from "@/components/CTABannerSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
const Index = () => {
  return (
    <SmoothScroll>
      <CustomCursor />
      <ScrollProgress />

      {/* Page load animation wrapper */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Navbar />
        <HeroSection />
        <CollectionSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ProcessSection />
        <GallerySection />
        <NewArrivalsSection />
        <CTABannerSection />
        <ContactSection />
        <Footer />
      </motion.div>
    </SmoothScroll>
  );
};

export default Index;
