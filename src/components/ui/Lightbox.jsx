import { X } from 'lucide-react';

export default function Lightbox({ image, onClose }) {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 bg-maroon/95 backdrop-blur-md flex items-center justify-center p-4">
      <button onClick={onClose} className="absolute top-6 right-6 text-jasmine p-3 rounded-full bg-jasmine/10 hover:bg-jasmine/20 transition-colors">
        <X className="w-6 h-6" />
      </button>
      <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
        <img src={image.url} alt={image.title} className="max-h-[75vh] max-w-full rounded-xl object-contain shadow-2xl mb-4 border-4 border-gold" />
        <p className="font-serif text-xl text-jasmine text-center">{image.title} ({image.category})</p>
      </div>
    </div>
  );
}
