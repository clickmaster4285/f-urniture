import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Designs Crafted" },
  { value: 12, suffix: "", label: "Years of Excellence" },
  { value: 10, suffix: "k+", label: "Happy Homes" },
];

const Counter = ({ target, suffix, label }: { target: number; suffix: string; label: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-serif text-4xl md:text-5xl text-primary">
        {count}{suffix}
      </p>
      <p className="text-muted-foreground text-sm tracking-wider mt-2">{label}</p>
    </div>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Parallax image */}
          <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
            <motion.img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
              alt="Luxora workshop"
              loading="lazy"
              className="w-full h-[120%] object-cover will-change-transform"
              style={{ y: imgY }}
            />
          </div>

          {/* Text content */}
          <div>
            <motion.div
              ref={headingRef}
              initial={{ opacity: 0, x: 80 }}
              animate={headingInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-primary text-sm tracking-widest uppercase mb-3">Our Story</p>
              <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-8">
                Where Craft
                <br />
                Meets Soul
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground leading-relaxed mb-6"
            >
              For over a decade, Luxora has been redefining what it means to live beautifully. 
              Every piece in our collection is born from a dialogue between heritage craftsmanship 
              and modern sensibility — handpicked materials shaped by artisans who believe 
              furniture should tell a story.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground leading-relaxed mb-12"
            >
              We don't follow trends. We create heirlooms. From sustainably sourced hardwoods 
              to hand-stitched upholstery, every detail is intentional — because your home 
              deserves nothing less than extraordinary.
            </motion.p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <Counter key={stat.label} target={stat.value} suffix={stat.suffix} label={stat.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
