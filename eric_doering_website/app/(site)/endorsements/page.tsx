/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import testimonials from "./endorsmentHelper.json";
import { ArrowUp, ArrowDown } from "lucide-react";
import { useState } from "react";

export default function EndorsementsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  const handlePrev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const getTestimonial = (offset: number) =>
    testimonials[
      (currentIndex + offset + testimonials.length) % testimonials.length
    ];

  return (
    <div className="flex flex-col items-center justify-center text-gray-200">
      <h1 className="mt-2 mb-4 font-bold text-3xl">Endorsements</h1>
      <p className="text-xl max-w-3xl text-center mb-12 px-4">
        Discover what colleagues, clients, and collaborators have to say about
        working with me. These testimonials offer honest, first-hand insights
        into my work ethic, skills, and impact. Helping you understand why I am
        the right person for your next role.
      </p>

      <div className="relative h-[400px] w-full max-w-2xl overflow-hidden">
        {[-1, 0, 1].map((offset) => {
          const testimonial = getTestimonial(offset);
          const position = offset;

          const scale = position === 0 ? "scale-120" : "scale-90";
          const blur = position === 0 ? "blur-0" : "blur-sm";
          const opacity = position === 0 ? "opacity-100" : "opacity-60";
          const translateY =
            position === 0
              ? "translate-y-0"
              : position === -1
              ? "-translate-y-[40px]"
              : "-translate-y-[100px]";
          const zIndex =
            position === 0 ? "z-30" : position === -1 ? "z-20" : "z-10";

          return (
            <div
              key={testimonial.name}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${scale} ${blur} ${opacity} ${translateY} ${zIndex}`}
            >
              <div className="flex items-center gap-4 bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-md max-w-xl w-full">
                <Image
                  src={testimonial.image}
                  alt={testimonial.alt}
                  width={80}
                  height={80}
                  className="rounded-xl border border-white"
                />
                <div className="max-h-[240px] overflow-y-auto pr-2">
                  <p className="mb-2 text-lg italic">{testimonial.quote}</p>
                  <p className="text-sm mt-4">
                    <span className="font-bold">{testimonial.name}</span> –{" "}
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-4 -mt-[30px] z-50">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition"
        >
          <ArrowUp size={24} />
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </div>
  );
}
