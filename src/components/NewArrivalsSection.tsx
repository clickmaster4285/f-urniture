import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const arrivals = [
  {
    name: "The Solstice Lounge",
    category: "Living Room",
    price: "$6,200",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
    tag: "New",
  },
  {
    name: "Obsidian Console",
    category: "Entryway",
    price: "$3,800",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    tag: "Limited",
  },
  {
    name: "The Atlas Desk",
    category: "Office",
    price: "$4,500",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
    tag: "New",
  },
];

const NewArrivalsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section className="relative py-28 md:py-40 overflow-hidden bg-card/30">
      {/* Parallax shapes */}
      <motion.div
        className="absolute top-[15%] right-[5%] w-56 h-56 border border-primary/5 rounded-full hidden lg:block will-change-transform"
        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -100]) }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[3%] w-20 h-20 border border-primary/10 rotate-45 hidden lg:block will-change-transform"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 70]) }}
      />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <p className="text-primary text-sm tracking-widest uppercase mb-3">Just Arrived</p>
            <h2 className="font-serif text-4xl md:text-6xl text-foreground">New Arrivals</h2>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-6 md:mt-0 flex items-center gap-2 text-primary text-sm tracking-wider uppercase group"
          >
            View All
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {arrivals.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 80 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2, ease: "easeOut" }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl mb-5 aspect-[4/5]">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  style={{ y: useTransform(scrollYProgress, [0, 1], [30, -30]) }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs tracking-wider uppercase px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              <p className="text-muted-foreground text-xs tracking-widest uppercase mb-1">{item.category}</p>
              <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                {item.name}
              </h3>
              <p className="font-serif text-primary text-lg mt-1">{item.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsSection;
