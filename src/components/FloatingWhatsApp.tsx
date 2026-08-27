import React from 'react';
import { COMPANY_INFO } from '../data/adventureData';
import { MessageSquare, PhoneCall } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneClean}?text=Halo%20PT%20CASWIKA%20PUTRI%20MANDIRI,%20saya%20tertarik%20untuk%20konsultasi%20paket%20outbound%20/%20rafting%20di%20Pangalengan.`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on desktop hover */}
      <div className="hidden sm:flex items-center mr-3 px-3.5 py-2 bg-slate-900 text-white text-xs font-semibold rounded-xl shadow-xl border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        <span>Chat CS Pangalengan ({COMPANY_INFO.phone})</span>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Consultation"
        id="floating-whatsapp-btn"
        className="w-14 h-14 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ring-4 ring-emerald-500/20"
      >
        <MessageSquare className="w-7 h-7 fill-white" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" />
      </a>
    </div>
  );
};
