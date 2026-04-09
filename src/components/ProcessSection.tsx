import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Compass, PenTool, Hammer, Truck } from "lucide-react";

const steps = [
  {
    icon: Compass,
    number: "01",
    title: "Consultation",
    desc: "We begin with your vision. Our design consultants explore your space, lifestyle, and aesthetic aspirations to craft a tailored blueprint.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design & Selection",
    desc: "Choose from our curated collections or collaborate on bespoke designs. Every material, finish, and contour is yours to define.",
  },
  {
    icon: Hammer,
    number: "03",
    title: "Master Craftsmanship",
    desc: "Our artisans bring your vision to life using time-honoured techniques and the finest sustainably sourced materials.",
  },
  {
    icon: Truck,
    number: "04",
    title: "White-Glove Delivery",
    desc: "Your pieces are delivered and placed with meticulous care. We don't leave until every detail is perfect.",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section className="relative py-28 md:py-40 overflow-hidden bg-background">
      {/* Floating parallax shapes */}
      <motion.div
        className="absolute top-[20%] right-10 w-24 h-24 border border-primary/10 rounded-full hidden lg:block will-change-transform"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
      />
      <motion.div
        className="absolute bottom-[30%] left-8 w-16 h-16 border border-primary/15 rotate-12 hidden lg:block will-change-transform"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 80]) }}
      />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-3">Our Process</p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground">From Vision to Reality</h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border/30 hidden md:block">
            <motion.div
              className="w-full bg-primary/40 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.25, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content card */}
                <div className={`md:w-5/12 ${isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <div className="bg-card/50 backdrop-blur-sm border border-border/40 rounded-xl p-8 hover:border-primary/30 transition-all duration-500 group hover:shadow-[0_0_30px_rgba(201,169,110,0.06)]">
                    <span className="font-serif text-primary text-3xl font-light">{step.number}</span>
                    <h3 className="font-serif text-xl text-foreground mt-2 mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Center icon */}
                <div className="md:w-2/12 flex justify-center my-4 md:my-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.25 + 0.3, type: "spring" }}
                    className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center z-10"
                  >
                    <step.icon size={18} className="text-primary" />
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="md:w-5/12 hidden md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
