export default function About() {
  return (
    <section id="about" className="py-24 bg-sandal relative overflow-hidden">
      <div className="absolute inset-0 kolam-bg opacity-60 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl border-4 border-gold">
              <img src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=1000&q=80" alt="Photographer at work" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-kumkum/15 rounded-2xl -z-0 hidden sm:block border-2 border-kumkum/30"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-leaf/15 rounded-2xl -z-0 hidden sm:block border-2 border-leaf/30"></div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-kumkum font-semibold mb-3">The Vision Behind Nsgraphy</p>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight mb-6 text-maroon">Artistry meets technical precision.</h2>
            <p className="text-muted leading-relaxed mb-6">
              Founded with a deep passion for visual poetry, Nsgraphy has grown into a premier photography studio dedicated to capturing authentic emotions, striking aesthetics, and timeless stories. Every frame is treated as an individual canvas.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Whether it is an intimate high-fashion editorial, a grand destination wedding, or a professional branding portfolio, our approach combines unobtrusive documentary techniques with master-level lighting and composition.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gold/50">
              <div>
                <h4 className="font-serif text-xl font-medium text-maroon mb-1">Equipment</h4>
                <p className="text-xs text-muted">Flagship mirrorless systems & prime optics.</p>
              </div>
              <div>
                <h4 className="font-serif text-xl font-medium text-maroon mb-1">Editing</h4>
                <p className="text-xs text-muted">Bespoke color grading & natural retouching.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
