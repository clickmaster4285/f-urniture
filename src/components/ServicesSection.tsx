import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Paintbrush, Armchair, Truck, Wrench } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Interior Design",
    description: "Our in-house designers craft bespoke spatial narratives — transforming rooms into experiences that reflect your personality and lifestyle.",
  },
  {
    icon: Armchair,
    title: "Custom Furniture",
    description: "Dream it, and we'll build it. From concept sketches to final finish, every custom piece is made to your exact specifications.",
  },
  {
    icon: Truck,
    title: "White-Glove Delivery",
    description: "We handle every piece like a work of art. Our delivery team ensures your furniture arrives in perfect condition, placed exactly where you want it.",
  },
  {
    icon: Wrench,
    title: "Assembly & Setup",
    description: "Our expert technicians assemble and install every item with precision, so you can enjoy your new space without lifting a finger.",
  },
];

const ServicesSection = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-card">
      <div className="container mx-auto">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, x: -80 }}
          animate={headingInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground">Our Services</h2>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <ServiceCard key={service.title} service={service} Icon={Icon} index={i} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, Icon, index }: { service: typeof services[0]; Icon: typeof Paintbrush; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="min-w-[280px] snap-center flex-shrink-0 md:min-w-0 md:flex-shrink group p-8 border border-border rounded-lg transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.15)]"
    >
      <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
        <Icon size={22} className="text-primary" />
      </div>
      <h3 className="font-serif text-xl text-foreground mb-3">{service.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
    </motion.div>
  );
};

export default ServicesSection;
