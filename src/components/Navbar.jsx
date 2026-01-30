import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { gsap } from "gsap";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const dropdownRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    if (showMenu && dropdownRef.current) {
      const items = dropdownRef.current.querySelectorAll(".dd-item");

      gsap.fromTo(
        dropdownRef.current,
        { y: 14, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
      );

      gsap.fromTo(
        items,
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          stagger: 0.07,
          delay: 0.12,
          ease: "power2.out",
        }
      );
    }
  }, [showMenu]);

  useEffect(() => {
    if (showSearch && searchRef.current) {
      gsap.fromTo(
        searchRef.current,
        { width: 0, opacity: 0 },
        { width: 200, opacity: 1, duration: 0.35, ease: "power2.out" }
      );
    }
  }, [showSearch]);

  const links = [
    { name: "Home", href: "#" },
    { name: "Collections", href: "#collections" },
    { name: "About", href: "#about" },
    { name: "Craftsmanship", href: "#craft" },
    { name: "Contact", href: "#contact" },
  ];

  const collections = [
    { name: "Silk Sarees", href: "#silk" },
    { name: "Cotton Sarees", href: "#cotton" },
    { name: "Festive Wear", href: "#festive" },
    { name: "Bridal Collection", href: "#bridal" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl md:text-2xl tracking-[0.3em] font-light text-black">
          <span className="text-[#7a1f2a] font-medium">SAREE</span> STUDIO
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-widest text-gray-700 relative">
          {links.map((l) =>
            l.name === "Collections" ? (
              <div
                key={l.name}
                className="relative"
                onMouseEnter={() => setShowMenu(true)}
                onMouseLeave={() => setShowMenu(false)}
              >
                <button className="flex items-center gap-1 hover:text-[#7a1f2a] transition">
                  Collections
                  <ChevronDown size={16} />
                </button>

                <div
                  ref={dropdownRef}
                  className={`absolute left-1/2 -translate-x-1/2 mt-6 w-72 bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 ${
                    showMenu
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-3"
                  }`}
                >
                  <div className="px-6 pt-5 pb-3 border-b border-black/10">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[#7a1f2a]">
                      Our Collection
                    </p>
                    <h4 className="mt-1 text-lg text-black">
                      Handpicked Sarees
                    </h4>
                  </div>

                  <div className="py-3">
                    {collections.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="dd-item group flex items-center justify-between px-6 py-3 text-sm tracking-wide text-gray-700 hover:text-[#7a1f2a] transition"
                      >
                        <span>{item.name}</span>
                        <span className="text-[#c9a24d] opacity-0 group-hover:opacity-100 transition">
                          →
                        </span>
                      </a>
                    ))}
                  </div>

                  <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#c9a24d] to-transparent opacity-70" />
                </div>
              </div>
            ) : (
              <a
                key={l.name}
                href={l.href}
                className="relative hover:text-[#7a1f2a] transition"
              >
                {l.name}
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#c9a24d] transition-all duration-300 hover:w-full" />
              </a>
            )
          )}

          {/* Search */}
          <div className="relative flex items-center">
            {showSearch && (
              <input
                ref={searchRef}
                type="text"
                placeholder="Search sarees..."
                className="bg-transparent border-b border-[#c9a24d] text-black text-sm px-2 py-1 outline-none placeholder-gray-500"
              />
            )}
            <button
              onClick={() => setShowSearch((p) => !p)}
              className="ml-3 text-gray-600 hover:text-[#7a1f2a] transition"
            >
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-black">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-[80%] bg-white/95 backdrop-blur-2xl p-8 transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-10">
          <button onClick={() => setOpen(false)} className="text-black">
            <X />
          </button>
        </div>

        <div className="flex flex-col gap-8 text-lg text-gray-800 uppercase tracking-widest">
          {links.map((l) =>
            l.name === "Collections" ? (
              <div key={l.name} className="space-y-4">
                <span className="text-black">Collections</span>
                <div className="pl-4 space-y-3 text-sm text-gray-600">
                  {collections.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block hover:text-black transition"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setOpen(false)}
                className="hover:text-black transition"
              >
                {l.name}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
