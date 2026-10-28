import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { quote, client, role } = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-24 bg-leaf relative overflow-hidden">
      <div className="absolute inset-0 kolam-bg pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <p className="text-xs uppercase tracking-widest text-manjal font-semibold mb-3">Client Praise</p>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight mb-12 text-jasmine">Words from Our Patrons</h2>

        <div className="p-8 sm:p-12 rounded-3xl bg-jasmine border-4 border-gold relative shadow-2xl">
          <div className="flex justify-center space-x-1 mb-6 text-marigold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-marigold" />
            ))}
          </div>

          <p className="font-serif text-xl sm:text-2xl text-ink italic mb-8 leading-relaxed">
            "{quote}"
          </p>

          <h4 className="font-semibold text-lg text-maroon">{client}</h4>
          <p className="text-xs text-muted uppercase tracking-wider mt-1">{role}</p>

          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="p-3 rounded-full bg-sandal text-maroon hover:bg-manjal border border-gold/50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="p-3 rounded-full bg-sandal text-maroon hover:bg-manjal border border-gold/50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
