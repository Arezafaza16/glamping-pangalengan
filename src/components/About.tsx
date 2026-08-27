import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { VALUES_DATA, STATS_DATA } from '../data/adventureData';
import { ShieldCheck, Award, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left Column Image reveal
      gsap.fromTo(
        leftColRef.current,
        { opacity: 0, x: -30 },
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

      // Right Column Content reveal
      gsap.fromTo(
        rightColRef.current,
        { opacity: 0, x: 30 },
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

      // Values Staggered entrance
      if (valuesRef.current) {
        gsap.fromTo(
          valuesRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: valuesRef.current,
              start: 'top 90%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#209eb6]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#209eb6]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#209eb6]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#209eb6]" />;
    }
  };

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background ambient details */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#209eb6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-0.5 bg-[#209eb6]" />
          <span className="text-[#209eb6] text-xs sm:text-sm font-bold tracking-wider uppercase font-sans">
            Tentang PT CASWIKA PUTRI MANDIRI
          </span>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Visual Showcase */}
          <div ref={leftColRef} className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="PT Caswika Putri Mandiri Outbound Team Building di Pangalengan"
                className="w-full h-[460px] sm:h-[520px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40" />

              {/* In-image Caption Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Kantor & Basecamp Utama</div>
                    <div className="text-sm font-bold text-slate-900">Hutan Pinus Rahong, Pangalengan</div>
                  </div>
                  <span className="px-2.5 py-1 bg-[#209eb6] text-white text-[11px] font-bold rounded-lg">
                    Est. 2016
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-slate-900 text-white p-4 sm:p-5 rounded-2xl shadow-xl border-2 border-white max-w-[200px] sm:max-w-[230px] hidden sm:block">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#52bfd4] font-display">15.000+</div>
              <div className="text-xs text-slate-300 font-medium mt-0.5 leading-snug">
                Peserta terlayani dengan penuh kepuasan di seluruh Indonesia
              </div>
            </div>
          </div>

          {/* Right Column: Company Story & Values */}
          <div ref={rightColRef} className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display mb-6">
              Petualangan yang Mempersatukan Kebersamaan
            </h2>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              <p>
                <strong className="text-slate-900 font-semibold">PT CASWIKA PUTRI MANDIRI</strong> adalah
                perusahaan yang bergerak di bidang jasa perjalanan wisata dan event organizer. Berdiri sejak tahun{' '}
                <strong className="text-[#209eb6] font-semibold">2016</strong>, kami berkomitmen untuk
                menghadirkan pengalaman berkualitas dan pelayanan terbaik bagi setiap pelanggan.
              </p>
              <p>
                Kami menciptakan pengalaman gathering dan outbound yang berkesan dengan mengajak setiap kelompok
                menjelajahi keindahan alam Pangalengan sekaligus memperkuat kerja sama tim, kolaborasi, dan keharmonisan.
              </p>
              <p className="text-slate-700 font-medium">
                Keselamatan dan pelayanan adalah prioritas utama kami. Setiap kegiatan dirancang untuk memberikan
                momen berharga, mengasah keterampilan tim, mempererat hubungan, dan menciptakan kenangan abadi.
              </p>
            </div>

            {/* Three Key Values Highlight */}
            <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {VALUES_DATA.map((val) => (
                <div
                  key={val.id}
                  className="p-5 rounded-2xl bg-slate-50 hover:bg-[#effafc] border border-slate-200/80 hover:border-[#209eb6]/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#209eb6] group-hover:text-white transition-all">
                    {getIcon(val.iconName)}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1.5 font-display group-hover:text-[#209eb6] transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.description}</p>
                </div>
              ))}
            </div>

            {/* Quick Action */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#packages"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#209eb6] hover:bg-[#19849a] text-white font-semibold text-sm shadow-md transition-all duration-200 hover:shadow-lg"
              >
                <span>Lihat Semua Paket Petualangan</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors"
              >
                <span>Konsultasi dengan Event Specialist</span>
              </a>
            </div>
          </div>
        </div>

        {/* Key Metrics Bar */}
        <div className="mt-16 pt-12 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS_DATA.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#209eb6] font-display mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-800">{stat.label}</div>
              <div className="text-xs text-slate-500 mt-0.5">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
