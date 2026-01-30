import { useEffect, useRef, useState } from "react";

const sarees = [
  {
    title: "Bridal Silk Saree",
    category: "Bridal Collection",
    image:
      "https://images.pexels.com/photos/13204632/pexels-photo-13204632.jpeg",
  },
  {
    title: "Elegant Cotton Saree",
    category: "Casual Wear",
    image:
      "https://images.pexels.com/photos/26971272/pexels-photo-26971272.jpeg",
  },
  {
    title: "Designer Party Saree",
    category: "Party Wear",
    image:
      "https://images.pexels.com/photos/28943570/pexels-photo-28943570.jpeg",
  },
  {
    title: "Festive Traditional Saree",
    category: "Festive Edit",
    image:
      "https://getbinks.com/cdn/shop/files/Binks_Saree_NoorSilken-Lavender-Tissue_8.jpg?v=1758006164",
  },
  {
    title: "Pure Kanchipuram Silk",
    category: "Silk Sarees",
    image:
      "https://www.vastranand.in/cdn/shop/files/4_50076c69-16f3-4ca5-9c0d-680cea282ae4.jpg?v=1743078764&width=1080",
  },
];

export default function InfiniteSareeSlider() {
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const pausedRef = useRef(false);

  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen size
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Desktop auto-scroll (pause-aware)
  useEffect(() => {
    if (!isDesktop || !trackRef.current) return;

    const track = trackRef.current;
    let x = 0;

    const animate = () => {
      if (!pausedRef.current) {
        x -= 0.3;
        if (Math.abs(x) >= track.scrollWidth / 3) {
          x = 0;
        }
        track.style.transform = `translateX(${x}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isDesktop]);

  const desktopData = [...sarees, ...sarees, ...sarees];

  return (
    <section className="relative overflow-hidden bg-[#faf7f4] py-24">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <span className="block text-sm tracking-[0.35em] uppercase text-[#7a1f2a] mb-3">
          Featured Sarees
        </span>
        <h2 className="text-4xl md:text-5xl font-light text-gray-900">
          Loved by <br />
          <span className="font-medium text-[#7a1f2a]">
            Our Customers
          </span>
        </h2>
      </div>

      {/* ===== MOBILE (SCROLL) ===== */}
      <div className="lg:hidden px-6 overflow-x-auto flex gap-6">
        {sarees.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>

      {/* ===== DESKTOP (INFINITE + PAUSE ON HOVER) ===== */}
      <div className="hidden lg:block w-full overflow-hidden">
        <div
          ref={trackRef}
          className="
            flex gap-8
            px-[max(1.5rem,calc((100vw-80rem)/2))]
            will-change-transform
          "
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          {desktopData.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ item }) {
  return (
    <div
      className="
        flex-shrink-0
        w-[90vw] sm:w-[45vw]
        md:w-[320px]
        lg:w-[280px]
        bg-white rounded-3xl overflow-hidden
        transition-transform duration-500
        hover:-translate-y-2
      "
    >
      <div
        className="h-[360px] bg-cover bg-center"
        style={{ backgroundImage: `url(${item.image})` }}
      />

      <div className="p-5">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
          {item.category}
        </p>

        <h3 className="text-lg font-medium text-gray-900 mb-4">
          {item.title}
        </h3>

        <button
          className="
            w-full py-2 text-sm uppercase tracking-widest
            rounded-full border border-[#7a1f2a]
            text-[#7a1f2a]
            hover:bg-[#7a1f2a] hover:text-white
            transition
          "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
