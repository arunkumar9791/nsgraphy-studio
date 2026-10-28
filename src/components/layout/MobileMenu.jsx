import { Phone, X } from 'lucide-react';
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from '../../constants/site';

export default function MobileMenu({ isOpen, onClose, onBook }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-jasmine flex flex-col justify-center px-8 md:hidden">
      <div className="absolute inset-0 kolam-bg opacity-60 pointer-events-none"></div>
      <button onClick={onClose} className="absolute top-6 right-6 text-maroon p-2">
        <X className="w-8 h-8" />
      </button>
      <div className="relative flex flex-col space-y-6 text-center text-maroon">
        {NAV_LINKS.map(({ href, label }) => (
          <a key={href} href={href} onClick={onClose} className="font-serif text-3xl hover:text-kumkum">{label}</a>
        ))}
      </div>
      <div className="relative mt-12 flex flex-col space-y-4 max-w-xs mx-auto w-full">
        <a href={PHONE_TEL} className="flex items-center justify-center space-x-2 py-3 rounded-full border border-maroon/30 text-maroon text-sm font-medium">
          <Phone className="w-4 h-4 text-kumkum" />
          <span>{PHONE_DISPLAY}</span>
        </a>
        <button onClick={() => { onClose(); onBook(); }} className="py-3 rounded-full bg-maroon text-jasmine font-semibold text-sm hover:bg-kumkum transition-colors">
          Book a Session
        </button>
      </div>
    </div>
  );
}
