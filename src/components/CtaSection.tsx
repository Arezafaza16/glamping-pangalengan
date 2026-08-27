import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MessageSquare, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/adventureData';

gsap.registerPlugin(ScrollTrigger);

export const CtaSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, scale: 0.95, y: 25 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.querySelector('#contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden bg-slate-900 flex items-center justify-center text-center text-white"
    >
      {/* High-res background image with clean solid overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('/images/hero2.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-slate-950/80" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        {/* Subtle Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#52bfd4] text-xs font-bold uppercase tracking-widest mb-6">
          <span>Siap Untuk Gathering yang Tak Terlupakan?</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight leading-tight max-w-3xl mb-6 drop-shadow-md">
          PETUALANGAN TERBAIK ANDA{' '}
          <span className="text-[#52bfd4]">
            DIMULAI DARI SINI.
          </span>
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-xl text-slate-200 font-light max-w-2xl leading-relaxed mb-10 drop-shadow-sm">
          Ajak tim dan keluarga Anda menjelajahi keindahan alam Pangalengan serta ciptakan kenangan penuh inspirasi.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#209eb6] hover:bg-[#19849a] text-white font-bold text-base shadow-brand transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
          >
            <span>Rencanakan Acara Anda</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=Halo%20PT%20Caswika%20Putri%20Mandiri,%20saya%20ingin%20berkonsultasi%20mengenai%20acara%20outbound/gathering%20di%20Pangalengan.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-base transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-[#52bfd4]" />
            <span>Chat Langsung via WhatsApp</span>
          </a>
        </div>

        {/* Quick Phone Banner */}
        <div className="text-xs sm:text-sm text-slate-300 flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
          <PhoneCall className="w-3.5 h-3.5 text-[#52bfd4]" />
          <span>Hotline & Layanan Reservasi:</span>
          <strong className="text-white font-bold">{COMPANY_INFO.phone}</strong>
        </div>
      </div>
    </section>
  );
};
