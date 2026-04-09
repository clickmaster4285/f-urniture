import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Heart } from "lucide-react";

const products = [
  { name: "Verona Lounge Chair", category: "Seating", price: "$2,890", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80" },
  { name: "Oslo Coffee Table", category: "Tables", price: "$1,750", image: "https://images.unsplash.com/photo-1611486212355-d276af4581c0?w=600&q=80" },
  { name: "Milano Sideboard", category: "Storage", price: "$3,400", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80" },
  { name: "Kyoto Floor Lamp", category: "Lighting", price: "$980", image: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&q=80" },
  { name: "Atlas Dining Chair", category: "Seating", price: "$1,200", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&q=80" },
  { name: "Nero Console Table", category: "Tables", price: "$2,100", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80" },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [liked, setLiked] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      className="group bg-card border border-border rounded-lg overflow-hidden will-change-transform"
    >
      <div className="relative overflow-hidden aspect-[4/5]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Heart
            size={18}
            className={`transition-colors ${liked ? "fill-primary text-primary" : "text-foreground"}`}
          />
        </button>
      </div>
      <div className="p-5">
        <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">{product.category}</p>
        <h3 className="font-serif text-lg text-foreground mb-2">{product.name}</h3>
        <p className="text-primary font-serif text-lg">{product.price}</p>
      </div>
    </motion.div>
  );
};

const CollectionSection = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <section id="collection" className="py-24 md:py-32 px-6">
      <div className="container mx-auto">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, x: -80 }}
          animate={headingInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-3">Our Curation</p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground">The Collection</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
