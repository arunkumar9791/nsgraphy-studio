import { CheckCircle } from 'lucide-react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 bg-jasmine border-2 border-gold px-5 py-3 rounded-xl shadow-2xl flex items-center space-x-3 animate-bounce">
      <CheckCircle className="w-5 h-5 text-leaf" />
      <p className="text-sm font-medium text-ink">{message}</p>
    </div>
  );
}
