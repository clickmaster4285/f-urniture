import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12 px-6">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <p className="font-serif text-xl text-primary tracking-wider mb-1">LUXORA</p>
        <p className="text-muted-foreground text-xs tracking-wider">Crafted for Living. Designed for Legacy.</p>
      </div>

      <div className="flex gap-5">
        {[Instagram, Facebook, Twitter].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>

      <p className="text-muted-foreground text-xs">© {new Date().getFullYear()} Luxora. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
