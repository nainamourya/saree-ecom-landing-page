import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-4">
        
        {/* Brand */}
        <div>
          <h3 className="text-xl tracking-[0.3em] uppercase text-white mb-4">
            Saree<span className="text-[#c9a24d]">Aura</span>
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Celebrating timeless Indian craftsmanship through premium sarees
            designed for elegance, tradition, and modern women.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-white mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#collections" className="hover:text-white">Collections</a></li>
            <li><a href="#about" className="hover:text-white">Our Story</a></li>
            <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
            <li><a href="#" className="hover:text-white">Shop</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-white mb-5">
            Policies
          </h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Return Policy</a></li>
            <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-white mb-5">
            Contact
          </h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-[#c9a24d]" />
              India
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[#c9a24d]" />
              +91 9XXXXXXXXX
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#c9a24d]" />
              support@sareeaura.com
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} SareeAura. All rights reserved.
        </p>

        {/* Socials */}
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-white">
            <Instagram size={18} />
          </a>
          <a href="#" className="hover:text-white">
            <Facebook size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
