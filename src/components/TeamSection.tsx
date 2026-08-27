import React, { useRef, useEffect } from 'react';
import { TEAM_MEMBERS, COMPANY_INFO } from '../data/adventureData';
import { Award, ShieldCheck, PhoneCall, Users, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const TeamSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(headerRef.current.children,
          { y: 25, opacity: 0 },
          {
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 90%',
            },
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
          }
        );
      }

      if (cardsRef.current) {
        gsap.fromTo(cardsRef.current.children,
          { y: 35, opacity: 0 },
          {
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 90%',
            },
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: 'power2.out',
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#209eb6]/10 border border-[#209eb6]/20 text-[#126374] text-xs font-bold uppercase tracking-wider mb-4">
            <Users className="w-4 h-4 text-[#209eb6]" />
            <span>Fasilitator & Instruktur Resmi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight mb-4">
            TIM FASILITATOR & PEMANDU KAMI
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Dikelola langsung oleh instruktur rafting berstandar keselamatan nasional, fasilitator experiential learning bersertifikat (AELI & FAJI), serta tim pendamping profesional di Pangalengan.
          </p>
        </div>

        {/* Team Members Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              id={`team-card-${member.id}`}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-14 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#209eb6] text-white flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Pemandu & Fasilitator Siap Dampingi Rombongan Anda
              </h4>
              <p className="text-xs sm:text-sm text-slate-500">
                Didukung standar Pertolongan Pertama (P3K), River Guide FAJI, dan Experiential Learning AELI.
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=Halo%20GLAMPING%20PANGALENGAN,%20saya%20ingin%20jadwalkan%20fasilitator%20untuk%20event%20outbound.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#209eb6] hover:bg-[#19849a] text-white text-xs sm:text-sm font-bold shadow-md transition-all whitespace-nowrap text-center"
          >
            Jadwalkan Tim Fasilitator
          </a>
        </div>
      </div>
    </section>
  );
};
