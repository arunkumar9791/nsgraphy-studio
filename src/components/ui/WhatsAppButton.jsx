import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../../constants/site';

export default function WhatsAppButton() {
  return (
    <a href={whatsappLink('Hi Nsgraphy, I would like to book a photography session.')} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group">
      <MessageCircle className="w-7 h-7 fill-white" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-medium text-sm px-0 group-hover:px-2">Chat with us</span>
    </a>
  );
}
