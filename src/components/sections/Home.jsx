import InstagramIcon from '../ui/InstagramIcon';
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../../constants/site';

const stats = [
  { value: '75+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Captured' },
  { value: '100%', label: 'Client Delight' },
  { value: '24/7', label: 'Support & Booking' },
];

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-maroon via-kumkum to-silk text-jasmine">
      <div className="absolute inset-0 kolam-bg"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,180,0,0.25)_0,transparent_65%)]"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 text-center flex flex-col items-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-manjal/50 bg-maroon/40 backdrop-blur-md mb-6">
          <span className="w-2 h-2 rounded-full bg-manjal animate-pulse"></span>
          <span className="text-xs uppercase tracking-widest text-sandal font-medium">Professional Visual Studio</span>
        </div>

        <p className="font-tamil text-manjal text-lg sm:text-xl mb-4">திருமண தருணங்கள் • என்றும் நினைவில்</p>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight max-w-5xl leading-[1.1] mb-8 text-jasmine">
          Capturing Moments, <br/><span className="italic font-light text-manjal">Preserving Eternity</span>
        </h1>

        <p className="text-sandal text-base sm:text-lg md:text-xl max-w-2xl font-light mb-12 leading-relaxed">
          High-end portraiture, emotive editorial spreads, timeless weddings, and unforgettable commercial events crafted with precision and artistry.
        </p>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5 w-full sm:w-auto">
          <a href="#gallery" className="w-full sm:w-auto px-8 py-4 rounded-full bg-manjal text-maroon font-semibold text-sm tracking-wider uppercase hover:bg-jasmine transition-all duration-300 shadow-xl text-center">
            Explore Portfolio
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full border border-jasmine/50 text-jasmine font-semibold text-sm tracking-wider uppercase hover:border-manjal hover:text-manjal transition-all duration-300 flex items-center justify-center space-x-2">
            <InstagramIcon className="w-4 h-4" />
            <span>{INSTAGRAM_HANDLE}</span>
          </a>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-24 pt-16 border-t border-manjal/40 w-full max-w-4xl text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-manjal mb-1">{value}</h3>
              <p className="text-xs uppercase tracking-widest text-sandal">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="temple-border absolute bottom-0 left-0 right-0 rotate-180" aria-hidden="true"></div>
    </section>
  );
}
