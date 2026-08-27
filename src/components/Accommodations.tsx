import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ACCOMMODATIONS_DATA } from '../data/adventureData';
import { Home, Users, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Accommodations: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 90%',
          },
        }
      );

      // Cards staggered entrance
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 90%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="accommodations" ref={sectionRef} className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#209eb6]/10 border border-[#209eb6]/20 text-[#209eb6] text-xs font-bold uppercase tracking-wider mb-4">
            <Home className="w-3.5 h-3.5" />
            <span>Pilihan Penginapan</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Penginapan & Glamping
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Berbagai pilihan akomodasi nyaman mulai dari cabin modern hingga tenda glamping tepi sungai untuk pengalaman menginap terbaik Anda di Pangalengan.
          </p>
        </div>

        {/* Accommodations Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {ACCOMMODATIONS_DATA.map((acc) => (
            <div
              key={acc.id}
              className="bg-white rounded-3xl overflow-hidden shadow-subtle border border-slate-200/80 hover:border-[#209eb6]/50 hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
            >
              {/* Image Container */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={acc.imageUrl}
                  alt={acc.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80" />
                
                {/* Capacity Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white font-display drop-shadow-md">
                    {acc.name}
                  </h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start gap-2 mb-4 pb-4 border-b border-slate-100">
                  <Users className="w-4 h-4 text-[#209eb6] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Kapasitas</div>
                    <div className="text-sm font-semibold text-slate-800">{acc.capacity}</div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3">Fasilitas Termasuk:</div>
                  <ul className="space-y-2.5 mb-6">
                    {acc.facilities.map((fac, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#209eb6] shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600 leading-snug">{fac}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer / Action */}
                <div className="pt-5 border-t border-slate-100 mt-auto">
                  <a
                    href="#contact"
                    className="w-full py-3 rounded-xl bg-slate-50 hover:bg-[#209eb6] text-slate-700 hover:text-white font-bold text-sm transition-colors flex items-center justify-center border border-slate-200 hover:border-[#209eb6]"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
