import { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/sections/Home';
import Gallery from './components/sections/Gallery';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import BookingModal from './components/ui/BookingModal';
import Toast from './components/ui/Toast';
import WhatsAppButton from './components/ui/WhatsAppButton';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const openBooking = () => setBookingModalOpen(true);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <div className="bg-jasmine text-ink font-sans antialiased selection:bg-manjal selection:text-maroon min-h-screen">
      <Toast message={toastMessage} />
      <Header onBook={openBooking} />

      <main>
        <Home />
        <Gallery />
        <About />
        <Services onBook={openBooking} />
        <Testimonials />
        <Contact onBook={openBooking} />
      </main>

      <Footer />
      <WhatsAppButton />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        onSubmitted={showToast}
      />
    </div>
  );
}
