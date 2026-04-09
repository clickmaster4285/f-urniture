import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Send, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    venue: "",
    email: "",
    phone: "",
    city: "",
    message: ""
  });

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-background">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center mb-8">
              <Mail className="text-muted-foreground w-6 h-6" />
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Let's Make Your Venue <span className="text-primary">Smarter</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-12 max-w-md leading-relaxed">
              Start your journey towards seamless wedding management today. Fill out the form and our team will reach out to schedule your personalized demo.
            </p>

            <div className="flex flex-col gap-6 mt-4">
              <div className="flex items-center gap-4">
                <Phone className="text-muted-foreground w-5 h-5 flex-shrink-0" />
                <a href="tel:+923331116842" className="text-foreground hover:text-primary transition-colors font-medium">
                  +92 333-1116842
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-muted-foreground w-5 h-5 flex-shrink-0" />
                <a href="mailto:marketing@clickmasters.pk" className="text-foreground hover:text-primary transition-colors font-medium">
                  marketing@clickmasters.pk
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-muted-foreground w-5 h-5 flex-shrink-0" />
                <span className="text-foreground font-medium">
                  Main PWD Rd, Islamabad, Punjab, Pakistan
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-card border border-border p-8 md:p-10 rounded-2xl shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input
                type="text"
                placeholder="Venue Name"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                value={formData.venue}
                onChange={(e) => setFormData({...formData, venue: e.target.value})}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            
            <div className="mb-5">
              <input
                type="text"
                placeholder="City"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
              />
            </div>

            <div className="mb-6">
              <textarea
                placeholder="Message (optional)"
                rows={4}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <button className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
              <Send className="w-4 h-4" />
              Request Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
