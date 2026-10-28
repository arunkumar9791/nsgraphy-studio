import { ArrowRight } from 'lucide-react';
import { services } from '../../data/services';

export default function Services({ onBook }) {
  return (
    <section id="services" className="py-24 bg-jasmine">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-kumkum font-semibold mb-3">Tailored Offerings</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight mb-4 text-maroon">Our Services</h2>
          <p className="text-muted text-sm sm:text-base">Comprehensive photography solutions tailored to your unique requirements.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ title, description, icon: Icon, borderClass, iconClass, hoverTextClass }) => (
            <div key={title} className={`p-8 rounded-2xl bg-white border-t-4 ${borderClass} shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all group flex flex-col justify-between`}>
              <div>
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${iconClass}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-medium mb-3 text-maroon">{title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">{description}</p>
              </div>
              <button onClick={onBook} className={`inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-maroon transition-colors ${hoverTextClass}`}>
                <span>Book Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
