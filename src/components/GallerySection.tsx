import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const images = [
  { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80", span: "col-span-2 row-span-2", alt: "Modern living room" },
  { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80", span: "col-span-1 row-span-1", alt: "Minimalist bedroom" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", span: "col-span-1 row-span-1", alt: "Luxury dining" },
  { src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80", span: "col-span-1 row-span-2", alt: "Designer study" },
  { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80", span: "col-span-1 row-span-1", alt: "Accent furniture" },
  { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80", span: "col-span-1 row-span-1", alt: "Armchair detail" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const decorY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      {/* Parallax decorative elements */}
      <motion.div
        className="absolute top-16 left-[5%] w-48 h-48 border border-primary/5 rotate-12 hidden lg:block will-change-transform"
        style={{ y: decorY }}
      />
      <motion.div
        className="absolute bottom-24 right-[8%] w-32 h-32 border border-primary/8 rounded-full hidden lg:block will-change-transform"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 80]) }}
      />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-3">Inspiration</p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground">Spaces We've Shaped</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[260px] gap-4 max-w-6xl mx-auto">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
              className={`${img.span} relative rounded-xl overflow-hidden group cursor-pointer`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-500 flex items-end p-5">
                <motion.p
                  className="text-cream font-serif text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0"
                >
                  {img.alt}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
