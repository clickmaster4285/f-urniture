import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const CTABannerSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section className="relative py-32 md:py-48 overflow-hidden" ref={ref}>
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: bgY }}
      >
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
          alt="Luxury interior"
          className="w-full h-[120%] object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/80" />
      </motion.div>

      {/* Floating geometric decorations */}
      <motion.div
        className="absolute top-10 left-[10%] w-40 h-40 border border-primary/10 rotate-45 hidden lg:block will-change-transform"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -80]) }}
      />
      <motion.div
        className="absolute bottom-10 right-[10%] w-28 h-28 border border-primary/15 rounded-full hidden lg:block will-change-transform"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 60]) }}
      />

      <motion.div
        className="relative z-10 text-center px-6"
        style={{ y: textY }}
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-primary text-sm tracking-widest uppercase mb-4"
        >
          Exclusive Offer
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif text-4xl md:text-7xl text-foreground max-w-4xl mx-auto leading-tight mb-6"
        >
          Transform Your Space
          <br />
          <span className="text-primary">This Season</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground max-w-xl mx-auto mb-10 text-sm md:text-base leading-relaxed"
        >
          Enjoy complimentary interior consultation and white-glove delivery on all orders above $5,000. Limited availability — book your private viewing today.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.45, type: "spring" }}
          className="relative border-2 border-primary text-primary px-12 py-4 text-sm tracking-widest uppercase overflow-hidden group"
        >
          <span className="relative z-10 transition-colors duration-500 group-hover:text-primary-foreground">
            Book a Consultation
          </span>
          <span className="absolute inset-0 bg-primary scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CTABannerSection;
