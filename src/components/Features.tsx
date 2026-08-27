import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FEATURES_DATA } from '../data/adventureData';
import { Users, CheckCircle2, HeartHandshake, Compass, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Features: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
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

      // Staggered Cards reveal
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 90%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getFeatureIcon = (name: string) => {
    switch (name) {
      case 'Users':
        return <Users className="w-6 h-6 text-[#209eb6]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-[#209eb6]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#209eb6]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#209eb6]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#209eb6]" />;
    }
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#209eb6]/10 border border-[#209eb6]/20 text-[#209eb6] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Keunggulan PT Caswika Putri Mandiri</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Lebih Dari Sekadar Petualangan
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Kami memadukan sensasi petualangan alam terbuka di Pangalengan dengan standar manajemen event
            organizer profesional untuk menjamin kelancaran dan keseruan acara kelompok Anda.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {FEATURES_DATA.map((feat, index) => (
            <div
              key={feat.id}
              className="bg-white rounded-2xl p-7 shadow-subtle border border-slate-200/80 hover:border-[#209eb6]/50 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                {/* Feature Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#effafc] border border-[#209eb6]/20 flex items-center justify-center mb-6 group-hover:bg-[#209eb6] transition-all duration-300">
                  <div className="transition-colors group-hover:text-white">
                    {getFeatureIcon(feat.iconName)}
                  </div>
                </div>

                {/* Step Marker */}
                <div className="text-[11px] font-bold text-[#209eb6] tracking-wider uppercase mb-1">
                  Keunggulan 0{index + 1}
                </div>

                {/* Feature Title */}
                <h3 className="text-xl font-bold text-slate-900 font-display mb-3 group-hover:text-[#209eb6] transition-colors">
                  {feat.title}
                </h3>

                {/* Feature Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#209eb6] opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Termasuk dalam setiap paket</span>
                <span className="ml-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
