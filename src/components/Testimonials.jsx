import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Bride, Delhi",
    quote:
      "The saree quality was beyond expectations. Every detail felt luxurious and timeless. I received endless compliments.",
  },
  {
    name: "Ritika Mehta",
    role: "Fashion Blogger",
    quote:
      "Craftsmanship and elegance at its finest. Every saree feels thoughtfully designed and premium.",
  },
  {
    name: "Neha Verma",
    role: "Working Professional",
    quote:
      "Graceful, comfortable, and beautiful. It doesn’t feel mass-produced at all.",
  },
  {
    name: "Pooja Khanna",
    role: "Stylist",
    quote:
      "The fabric quality and finishing are outstanding. Perfect for modern Indian women.",
  },
  {
    name: "Sneha Patel",
    role: "Entrepreneur",
    quote:
      "Luxury that feels personal. I’ve never felt more confident wearing a saree.",
  },
];

export default function Testimonials() {
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const rafRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // screen check
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // infinite scroll (desktop)
  useEffect(() => {
    if (!isDesktop || !trackRef.current) return;

    const track = trackRef.current;
    let x = 0;

    const animate = () => {
      if (!pausedRef.current) {
        x -= 0.35;
        if (Math.abs(x) >= track.scrollWidth / 3) x = 0;
        track.style.transform = `translateX(${x}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isDesktop]);

  const desktopData = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="w-full bg-[#faf7f4] overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[650px]">
        
        {/* LEFT – FULL IMAGE */}
        <div className="relative h-[380px] lg:h-auto">
          <img
            src="https://i.pinimg.com/736x/e1/0c/b7/e10cb7f8cd102fc9aea70c58287191de.jpg"
            alt="Customer wearing saree"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* RIGHT – TESTIMONIALS */}
        <div className="flex flex-col justify-center py-24 px-6 lg:px-16">
          
          {/* Heading */}
          <div className="mb-14 max-w-xl">
            <span className="block text-sm tracking-[0.35em] uppercase text-[#7a1f2a] mb-3">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              Loved by women who
              <span className="block font-medium text-[#7a1f2a]">
                choose elegance
              </span>
            </h2>
          </div>

          {/* MOBILE STACK */}
          <div className="lg:hidden space-y-6">
            {testimonials.slice(0, 3).map((item, i) => (
              <TestimonialCard key={i} item={item} />
            ))}
          </div>

          {/* DESKTOP INFINITE */}
          <div className="hidden lg:block w-full overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-6 will-change-transform"
              onMouseEnter={() => (pausedRef.current = true)}
              onMouseLeave={() => (pausedRef.current = false)}
            >
              {desktopData.map((item, i) => (
                <TestimonialCard key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ item }) {
  return (
    <div
      className="
        flex-shrink-0
        w-[320px]
        bg-white rounded-3xl p-8
        transition-all duration-500
        hover:-translate-y-2 hover:shadow-xl
      "
    >
      {/* Quote */}
      <div className="mb-6">
        <span className="text-4xl font-serif text-[#7a1f2a]">“</span>
      </div>

      <p className="text-gray-700 text-lg font-light leading-relaxed mb-8">
        {item.quote}
      </p>

      <div>
        <p className="font-medium text-gray-900">{item.name}</p>
        <p className="text-sm text-gray-500">{item.role}</p>
      </div>
    </div>
  );
}
