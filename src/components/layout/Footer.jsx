import { MessageCircle } from 'lucide-react';
import InstagramIcon from '../ui/InstagramIcon';
import Logo from '../ui/Logo';
import { INSTAGRAM_URL, whatsappLink } from '../../constants/site';

export default function Footer() {
  return (
    <footer className="bg-maroon text-sandal text-sm relative">
      <div className="temple-border" aria-hidden="true"></div>
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <Logo className="text-xl" />
          <p className="text-xs mt-2">© 2026 Nsgraphy Studio. All rights reserved.</p>
        </div>

        <div className="flex items-center space-x-6">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-manjal transition-colors flex items-center space-x-1 text-xs uppercase tracking-widest">
            <InstagramIcon className="w-4 h-4" />
            <span>Instagram</span>
          </a>
          <a href={whatsappLink('Hi Nsgraphy, I would like to know more about your services.')} target="_blank" rel="noopener noreferrer" className="hover:text-manjal transition-colors flex items-center space-x-1 text-xs uppercase tracking-widest">
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
