import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Are the sarees exactly the same as shown in pictures?",
    answer:
      "Yes. All product images are shot in natural lighting to reflect true colors and fabric texture. Minor variations may occur due to screen resolution.",
  },
  {
    question: "What fabrics do you use for your sarees?",
    answer:
      "We work with premium fabrics including silk, cotton, linen, organza, and handloom blends sourced directly from trusted artisans.",
  },
  {
    question: "Do you offer Cash on Delivery (COD)?",
    answer:
      "Yes, Cash on Delivery is available across most locations in India. Availability may vary based on your pin code.",
  },
  {
    question: "What is the delivery time?",
    answer:
      "Orders are usually delivered within 4–7 business days. For custom or bridal sarees, delivery timelines may vary.",
  },
  {
    question: "What is your return or exchange policy?",
    answer:
      "We offer easy returns or exchanges within 7 days of delivery, provided the saree is unused and in original condition.",
  },
  {
    question: "How do I care for my saree?",
    answer:
      "We recommend dry cleaning for silk and handloom sarees. Detailed care instructions are included with every order.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="block text-sm tracking-[0.35em] uppercase text-[#7a1f2a] mb-3">
            FAQs
          </span>

          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            Frequently Asked <br />
            <span className="font-medium text-[#7a1f2a]">Questions</span>
          </h2>

          <p className="mt-6 text-gray-600">
            Everything you need to know before placing your order.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-gray-900 font-medium">
                  {item.question}
                </span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
