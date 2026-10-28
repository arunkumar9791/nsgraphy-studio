import { useState } from 'react';
import InstagramIcon from '../ui/InstagramIcon';
import Lightbox from '../ui/Lightbox';
import { portfolioItems, categories } from '../../data/portfolio';
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../../constants/site';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredPortfolio = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-jasmine relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-kumkum font-semibold mb-3">Curated Portfolio</p>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-maroon">Featured Works</h2>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  activeFilter === cat
                    ? 'bg-maroon text-jasmine shadow-md'
                    : 'bg-sandal text-muted hover:text-maroon hover:bg-manjal/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPortfolio.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-sandal cursor-pointer ring-1 ring-gold/40 hover:ring-4 hover:ring-gold transition-all"
            >
              <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/90 via-maroon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-widest text-manjal font-semibold mb-1">{item.category}</span>
                <h3 className="font-serif text-xl font-medium text-jasmine">{item.title}</h3>
                <p className="text-xs text-sandal mt-1">Nsgraphy Archive • {item.year}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-3 px-8 py-4 rounded-full border-2 border-maroon/30 text-maroon hover:border-kumkum hover:text-kumkum text-sm font-semibold uppercase tracking-wider transition-all">
            <InstagramIcon className="w-4 h-4 text-silk" />
            <span>View More on Instagram ({INSTAGRAM_HANDLE})</span>
          </a>
        </div>
      </div>

      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
}
