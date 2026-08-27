import React from 'react';
import { Building2 } from 'lucide-react';

export const ClientSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-slate-100 relative overflow-hidden" id="clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-6">
          <Building2 className="w-4 h-4 text-[#209eb6]" />
          <span>Kepercayaan Perusahaan</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
          CLIENT KAMI
        </h2>
        
        <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-12">
          Kami bangga telah dipercaya oleh berbagai instansi, perusahaan, dan organisasi untuk menyelenggarakan kegiatan outbound dan petualangan yang tak terlupakan di Pangalengan.
        </p>

        {/* Client Logos Image */}
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-0">
          <img 
            src="/images/client.png" 
            alt="Daftar Client Glamping Pangalengan" 
            className="w-full h-auto object-contain mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
