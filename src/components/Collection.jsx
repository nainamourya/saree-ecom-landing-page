import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const collections = [
  {
    title: "Bridal Collection",
    subtitle: "For timeless weddings",
    image:
      "https://images.pexels.com/photos/13204632/pexels-photo-13204632.jpeg",
  },
  {
    title: "Casual Sarees",
    subtitle: "Everyday elegance",
    image:
      "https://images.pexels.com/photos/26971272/pexels-photo-26971272.jpeg",
  },
  {
    title: "Party Wear",
    subtitle: "Make every moment shine",
    image:
      "https://images.pexels.com/photos/28943570/pexels-photo-28943570.jpeg",
  },
  {
    title: "Festive Edit",
    subtitle: "Celebrate tradition",
    image:
      "https://getbinks.com/cdn/shop/files/Binks_Saree_NoorSilken-Lavender-Tissue_8.jpg?v=1758006164",
  },
  {
    title: "Silk Sarees",
    subtitle: "Pure heritage weaves",
    image:
      "https://www.vastranand.in/cdn/shop/files/4_50076c69-16f3-4ca5-9c0d-680cea282ae4.jpg?v=1743078764&width=1080",
  },
];

export default function Collection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".collection-card", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="collections"
      className="bg-[#faf7f4] py-24"
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <span className="block text-sm tracking-[0.35em] uppercase text-[#7a1f2a] mb-3">
          Our Collections
        </span>

        <h2 className="text-4xl md:text-5xl font-light text-gray-900 max-w-xl">
          Crafted for <br />
          <span className="font-medium text-[#7a1f2a]">
            Every Occasion
          </span>
        </h2>

        <p className="mt-6 text-gray-600 max-w-xl">
          Explore curated saree collections designed to celebrate tradition,
          elegance, and modern femininity.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {collections.map((item, index) => (
          <div
            key={index}
            className="collection-card group relative overflow-hidden rounded-3xl shadow-xl bg-white"
          >
            {/* Image */}
            <div
              className="h-[420px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${item.image})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

            {/* Text */}
            <div className="absolute bottom-0 p-8 text-white">
              <h3 className="text-2xl font-medium mb-1">
                {item.title}
              </h3>
              <p className="text-sm tracking-wide opacity-90">
                {item.subtitle}
              </p>

              <span className="inline-block mt-4 text-sm uppercase tracking-widest border-b border-white/60 pb-1 px-4 PY-4 rounded transition-all duration-300 hover:bg-[#7a1f2a] hover:border-transparent">
  View Collection
</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
