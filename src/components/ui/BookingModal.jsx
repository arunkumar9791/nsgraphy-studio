import { useState } from 'react';
import { X } from 'lucide-react';
import { services } from '../../data/services';
import { whatsappLink } from '../../constants/site';

const inputClass = 'w-full bg-white border border-gold/50 rounded-xl px-4 py-3 text-sm text-ink focus:outline-none focus:border-kumkum';
const labelClass = 'block text-xs uppercase tracking-wider text-muted mb-1';

export default function BookingModal({ isOpen, onClose, onSubmitted }) {
  const [formData, setFormData] = useState({ name: '', phone: '', service: services[0].title, notes: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = whatsappLink(`Hi Nsgraphy, I'm ${formData.name} (${formData.phone}). I would like to book a session for ${formData.service}. Notes: ${formData.notes}`);
    // Open synchronously within the click handler so popup blockers allow it
    const win = window.open(url, '_blank');
    if (win) win.opener = null;
    else window.location.href = url;
    onClose();
    onSubmitted('Booking request sent successfully! Opening WhatsApp...');
  };

  return (
    <div className="fixed inset-0 z-50 bg-maroon/70 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-jasmine border-4 border-gold rounded-3xl max-w-lg w-full p-8 relative shadow-2xl">
        <button onClick={onClose} className="absolute top-6 right-6 text-muted hover:text-kumkum">
          <X className="w-6 h-6" />
        </button>
        <h3 className="font-serif text-2xl font-medium mb-2 text-maroon">Book a Session</h3>
        <p className="text-xs text-muted mb-6">Fill in your details and we will reach out instantly via WhatsApp.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={labelClass}>Your Full Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className={inputClass}
              placeholder="Alex Morgan"
            />
          </div>
          <div>
            <label className={labelClass}>Phone Number / WhatsApp</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className={inputClass}
              placeholder="+91 86670 85764"
            />
          </div>
          <div>
            <label className={labelClass}>Service Required</label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({...formData, service: e.target.value})}
              className={inputClass}
            >
              {services.map(({ title }) => (
                <option key={title} value={title}>{title}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Preferred Date & Notes</label>
            <textarea
              rows="3"
              value={formData.notes}
              onChange={(e) => setFormData({...formData, notes: e.target.value})}
              className={inputClass}
              placeholder="Tell us about your shoot vision..."
            ></textarea>
          </div>
          <button type="submit" className="w-full py-3.5 rounded-xl bg-maroon text-jasmine font-semibold text-sm uppercase tracking-wider hover:bg-kumkum transition-colors">
            Confirm Booking Request
          </button>
        </form>
      </div>
    </div>
  );
}
