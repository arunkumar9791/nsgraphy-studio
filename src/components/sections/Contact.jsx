import { Calendar, Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL } from '../../constants/site';

export default function Contact({ onBook }) {
  return (
    <section id="contact" className="py-24 bg-sandal relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-maroon via-kumkum to-silk text-center relative overflow-hidden shadow-2xl border-4 border-gold">
          <div className="absolute inset-0 kolam-bg pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-manjal/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative">
            <p className="text-xs uppercase tracking-widest text-manjal font-semibold mb-3">Let's Create Together</p>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight mb-6 text-jasmine">Ready to capture your story?</h2>
            <p className="text-sandal max-w-xl mx-auto text-sm sm:text-base mb-10 leading-relaxed">
              Get in touch with Nsgraphy studio for bookings, project inquiries, or custom photography packages. We reply within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={onBook} className="w-full sm:w-auto px-8 py-4 rounded-full bg-manjal text-maroon font-semibold text-sm uppercase tracking-wider hover:bg-jasmine transition-colors flex items-center justify-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Book Session Online</span>
              </button>
              <a href={PHONE_TEL} className="w-full sm:w-auto px-8 py-4 rounded-full border border-jasmine/50 hover:border-manjal hover:text-manjal text-jasmine font-semibold text-sm uppercase tracking-wider transition-colors flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4 text-manjal" />
                <span>Call {PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
