export default function About() {
    return (
      <section
        id="about"
        className="relative bg-white py-24 overflow-hidden"
      >
        {/* Soft background accents */}
        <div className="absolute -top-24 right-0 w-96 h-96 bg-[#c9a24d]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-96 h-96 bg-[#7a1f2a]/10 rounded-full blur-3xl" />
  
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Left – Text */}
          <div>
            <span className="block text-sm tracking-[0.35em] uppercase text-[#7a1f2a] mb-4">
              Our Story
            </span>
  
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
              Woven with <br />
              <span className="font-medium text-[#7a1f2a]">
                Tradition & Love
              </span>
            </h2>
  
            <p className="mt-6 text-gray-600 leading-relaxed">
              Our journey began with a deep respect for India’s rich weaving
              heritage. Each saree we create is not just a garment, but a story —
              of skilled artisans, timeless techniques, and generations of
              craftsmanship passed down with pride.
            </p>
  
            <p className="mt-4 text-gray-600 leading-relaxed">
              From luxurious bridal silks to elegant everyday wear, we curate
              sarees that celebrate womanhood, culture, and individuality —
              designed for those who value authenticity over trends.
            </p>
  
            {/* Highlights */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-3xl font-medium text-[#7a1f2a]">10+</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Years of Craftsmanship
                </p>
              </div>
  
              <div>
                <h4 className="text-3xl font-medium text-[#7a1f2a]">5,000+</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Happy Customers
                </p>
              </div>
  
              <div>
                <h4 className="text-3xl font-medium text-[#7a1f2a]">100%</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Premium Fabrics
                </p>
              </div>
  
              <div>
                <h4 className="text-3xl font-medium text-[#7a1f2a]">Pan-India</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Delivery Available
                </p>
              </div>
            </div>
          </div>
  
          {/* Right – Image */}
          <div className="relative">
            <img
              src="https://i.pinimg.com/1200x/c0/f8/10/c0f8106bc5c780c25fede3d0b9e9b7e6.jpg"
              alt="Saree craftsmanship"
              className="w-full h-[520px] object-cover rounded-3xl shadow-2xl"
            />
  
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-xl shadow-xl">
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Since 2013
              </p>
              <p className="text-lg font-medium text-[#7a1f2a]">
                Trusted Weaves
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  