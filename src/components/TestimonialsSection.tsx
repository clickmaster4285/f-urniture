import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Victoria Ashford",
    role: "Interior Designer, NYC",
    text: "LUXORA's pieces are not furniture — they are conversations waiting to happen. Every client I've paired with their collection has been utterly mesmerized.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    name: "James Whitfield",
    role: "Architect, London",
    text: "The craftsmanship is extraordinary. I specified their Carrara dining table for a Mayfair penthouse — it became the centrepiece of the entire home.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Elena Marchetti",
    role: "Homeowner, Milan",
    text: "From the moment I sat in the Noma Armchair, I knew this was different. It's art you can live in. Our home has never felt more alive.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      {/* Parallax background texture */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: bgY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
        <motion.div
          className="absolute top-10 left-[10%] w-64 h-64 border border-primary/5 rounded-full"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -120]) }}
        />
        <motion.div
          className="absolute bottom-20 right-[15%] w-40 h-40 border border-primary/8 rotate-45"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 60]) }}
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground">Voices of Distinction</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2, ease: "easeOut" }}
              className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 group hover:shadow-[0_0_40px_rgba(201,169,110,0.08)]"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  loading="lazy"
                />
                <div>
                  <p className="text-foreground font-medium text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
