import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const slides = [
  {
    name: "The Edenvale Sofa",
    tagline: "Sink into sculptural comfort",
    price: "$4,890",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&q=80",
  },
  {
    name: "Carrara Dining Table",
    tagline: "Italian marble, infinite elegance",
    price: "$7,250",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1400&q=80",
  },
  {
    name: "The Monarch Bed",
    tagline: "Where dreams meet design",
    price: "$5,600",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400&q=80",
  },
  {
    name: "Atelier Bookshelf",
    tagline: "Stories deserve a stage",
    price: "$3,200",
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=1400&q=80",
  },
  {
    name: "The Noma Armchair",
    tagline: "A statement in every curve",
    price: "$2,450",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&q=80",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 400]);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = slides[current];

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 will-change-transform" style={{ y: bgY }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={slide.image}
              alt={slide.name}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-background/70" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rotate-45 hidden lg:block"
        style={{ y: useTransform(scrollY, [0, 800], [0, -150]) }}
      />
      <motion.div
        className="absolute bottom-40 left-16 w-20 h-20 border border-primary/10 rounded-full hidden lg:block"
        style={{ y: useTransform(scrollY, [0, 800], [0, -80]) }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-tight mb-6">
            Crafted for Living.
            <br />
            <span className="text-primary">Designed for Legacy.</span>
          </h1>
        </motion.div>

        {/* Rotating item info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="font-serif text-xl md:text-2xl text-primary mb-1">{slide.name}</p>
            <p className="text-muted-foreground text-sm tracking-wider mb-1">{slide.tagline}</p>
            <p className="text-cream font-serif text-lg">{slide.price}</p>
          </motion.div>
        </AnimatePresence>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          onClick={() => document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" })}
          className="relative border-2 border-primary text-primary px-10 py-4 text-sm tracking-widest uppercase overflow-hidden group"
        >
          <span className="relative z-10 transition-colors duration-500 group-hover:text-primary-foreground">
            Explore Collection
          </span>
          <span className="absolute inset-0 bg-primary scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
        </motion.button>

        {/* Slide indicators */}
        <div className="flex gap-2 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-8 h-[2px] transition-all duration-500 ${
                i === current ? "bg-primary w-12" : "bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
