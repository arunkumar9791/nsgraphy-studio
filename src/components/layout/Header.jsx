import { useState } from 'react';
import { Calendar, Menu, Phone, X } from 'lucide-react';
import MobileMenu from './MobileMenu';
import Logo from '../ui/Logo';
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from '../../constants/site';

export default function Header({ onBook }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 bg-jasmine/95 backdrop-blur-md border-t-4 border-maroon shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
            <Logo className="text-xl md:text-2xl" />
          </a>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted">
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className="hover:text-kumkum transition-colors">{label}</a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href={PHONE_TEL} className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-full border border-maroon/30 text-maroon hover:border-kumkum hover:text-kumkum transition-all">
              <Phone className="w-3.5 h-3.5" />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <button onClick={onBook} className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full bg-maroon text-jasmine hover:bg-kumkum transition-colors">
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Session</span>
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-maroon p-2">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {/* Thoranam garland hanging below the header */}
        <div className="thoranam absolute left-0 right-0 top-full h-[22px] pointer-events-none" aria-hidden="true"></div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} onBook={onBook} />
    </>
  );
}
