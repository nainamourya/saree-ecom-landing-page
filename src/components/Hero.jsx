import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Sparkles, Gem, Feather, Crown } from "lucide-react";

export default function Hero() {
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const typeRef = useRef(null);

  const images = [
    "https://images.unsplash.com/photo-1618354691438-25bc04584c23?q=80&w=1200",
    "https://kasthuribaicompany.com/wp-content/uploads/2021/04/1.jpg",
    "https://m.media-amazon.com/images/I/91p3pm3vSQL._AC_UY1100_.jpg",
  ];

  const [index, setIndex] = useState(0);

  // 🔁 Auto image slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // 🎬 Hero intro animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // 🖼 Image fade animation
  useEffect(() => {
    if (!imgRef.current) return;
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 1.08 },
      { opacity: 1, scale: 1, duration: 1.1, ease: "power3.out" }
    );
  }, [index]);

  // ⌨️ Typewriter
  useEffect(() => {
    if (!typeRef.current) return;

    const words = [
      "Timeless Elegance",
      "Handwoven Luxury",
      "Tradition Redefined",
    ];
    let wordIndex = 0;

    const type = () => {
      const word = words[wordIndex];
      let i = 0;

      const typing = setInterval(() => {
        typeRef.current.textContent = word.slice(0, i + 1);
        i++;
        if (i === word.length) {
          clearInterval(typing);
          setTimeout(erase, 1400);
        }
      }, 80);
    };

    const erase = () => {
      const word = typeRef.current.textContent;
      let i = word.length;

      const erasing = setInterval(() => {
        typeRef.current.textContent = word.slice(0, i - 1);
        i--;
        if (i === 0) {
          clearInterval(erasing);
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(type, 400);
        }
      }, 50);
    };

    type();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full bg-gradient-to-br from-[#faf7f4] via-white to-[#f3ece6] overflow-hidden"
    >
      {/* Floating Icons */}
      <Sparkles className="absolute top-24 left-16 text-[#c9a24d] w-8 h-8 opacity-30" />
      <Gem className="absolute top-1/3 right-24 text-[#7a1f2a] w-9 h-9 opacity-30" />
      <Feather className="absolute bottom-32 left-24 text-gray-400 w-9 h-9 opacity-30" />
      <Crown className="absolute bottom-24 right-32 text-[#c9a24d] w-8 h-8 opacity-30" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <span className="hero-text inline-block mb-5 tracking-[0.35em] text-[#7a1f2a] text-sm font-medium uppercase">
            Handcrafted Sarees
          </span>

          <h1 className="hero-text text-5xl md:text-6xl font-light leading-tight text-gray-900">
            Draped in <br />
            <span className="font-medium text-[#7a1f2a]">
              Art, Culture <br /> & Grace
            </span>
          </h1>

          <p className="hero-text mt-6 text-lg text-gray-600 max-w-xl">
            Discover premium sarees woven with heritage, crafted for women who
            appreciate elegance beyond trends.
          </p>

          <div className="hero-text mt-10 flex gap-6">
            <a
              href="#collections"
              className="px-8 py-3 bg-[#7a1f2a] text-white uppercase tracking-widest text-sm hover:bg-[#651923] transition"
            >
              Explore Collection
            </a>

            <a
              href="#about"
              className="px-8 py-3 border border-[#c9a24d] text-[#7a1f2a] uppercase tracking-widest text-sm hover:bg-[#c9a24d]/10 transition"
            >
              Our Story
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative hero-text flex justify-center items-center h-full">
          <img
            ref={imgRef}
            src={images[index]}
            alt="Luxury Saree"
            className="w-full max-w-md h-[70vh] object-cover rounded-3xl"
          />
        </div>
      </div>

      {/* Bottom Typewriter */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-6 px-10 py-5 bg-white/70 backdrop-blur-md rounded-full shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1618354691438-25bc04584c23?q=80&w=200"
            alt="Fabric texture"
            className="w-10 h-10 rounded-full object-cover opacity-90"
          />

          <span className="text-xl md:text-2xl font-medium text-gray-700 whitespace-nowrap">
            Experience
          </span>

          <div className="relative w-[260px] md:w-[320px]">
            <span
              ref={typeRef}
              className="block text-2xl md:text-3xl font-semibold text-[#7a1f2a]"
            />
          </div>
        </div>
      </div>

      {/* Bottom Fade (Luxury touch) */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#faf7f4] to-transparent pointer-events-none" />
    </section>
  );
}
