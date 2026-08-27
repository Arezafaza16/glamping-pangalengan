import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MISSIONS_DATA } from '../data/adventureData';
import { Compass, Lightbulb, Handshake, Leaf, Quote, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const VisionMission: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const missionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Vision entrance
      gsap.fromTo(
        visionRef.current,
        { opacity: 0, x: -25 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        }
      );

      // Missions staggered entrance
      if (missionsRef.current) {
        gsap.fromTo(
          missionsRef.current.children,
          { opacity: 0, x: 25 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: missionsRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getMissionIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Lightbulb className="w-5 h-5 text-[#209eb6]" />;
      case '02':
        return <Handshake className="w-5 h-5 text-[#209eb6]" />;
      case '03':
        return <Leaf className="w-5 h-5 text-[#209eb6]" />;
      default:
        return <Compass className="w-5 h-5 text-[#209eb6]" />;
    }
  };

  return (
    <section id="vision-mission" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#209eb6]/10 border border-[#209eb6]/20 text-[#209eb6] text-xs font-bold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Fondasi & Arah Tujuan Kami</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Visi & Misi Perusahaan
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Vision Card with Solid Color */}
          <div
            ref={visionRef}
            className="lg:col-span-5 rounded-3xl bg-[#0d2822] text-white p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden border border-emerald-900/40"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#52bfd4] text-xs font-bold uppercase tracking-wider">
                  Visi Kami
                </span>
                <Quote className="w-8 h-8 text-[#209eb6]/40" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight mb-6 text-white">
                Menginspirasi Perubahan Positif Melalui Petualangan
              </h3>

              <blockquote className="text-slate-200 text-base sm:text-lg leading-relaxed font-light italic border-l-2 border-[#209eb6] pl-4 mb-6">
                “Menginspirasi perubahan positif dalam tim dan organisasi melalui pengalaman outbound, petualangan alam, dan gathering yang bermakna. Kami berkomitmen untuk terus memimpin melalui inovasi, pelayanan sepenuh hati, dan kelestarian alam Pangalengan.”
              </blockquote>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#52bfd4]" />
                <span>PT CASWIKA PUTRI MANDIRI</span>
              </div>
              <span className="font-semibold text-[#52bfd4]">Semangat Pangalengan</span>
            </div>
          </div>

          {/* Right Column: Mission Cards */}
          <div ref={missionsRef} className="lg:col-span-7 flex flex-col justify-between gap-5">
            {MISSIONS_DATA.map((mission) => (
              <div
                key={mission.number}
                className="p-7 rounded-2xl bg-slate-50 hover:bg-[#effafc] border border-slate-200/80 hover:border-[#209eb6]/40 shadow-sm hover:shadow-md transition-all duration-300 group flex items-start gap-5"
              >
                {/* Number Badge */}
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#209eb6] group-hover:text-white transition-all duration-300">
                  {getMissionIcon(mission.number)}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="text-xs font-bold text-[#209eb6] tracking-wider uppercase mb-1">
                    Misi {mission.number}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 font-display mb-2 group-hover:text-[#209eb6] transition-colors">
                    {mission.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {mission.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
