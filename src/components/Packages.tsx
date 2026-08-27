import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PACKAGES_DATA, COMPANY_INFO } from '../data/adventureData';
import { PackageItem } from '../types';
import { Check, ArrowRight, Sparkles, MessageSquare, ShieldCheck, Flame, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface PackagesProps {
  onSelectPackage: (pkg: PackageItem) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [filterCategory, setFilterCategory] = useState<'all' | 'popular' | 'adventure'>('all');

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

      // Package Cards staggered entrance
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
  }, [filterCategory]);

  const handleBookPackage = (pkg: PackageItem) => {
    onSelectPackage(pkg);
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickWhatsApp = (pkg: PackageItem) => {
    const text = encodeURIComponent(
      `Halo PT CASWIKA PUTRI MANDIRI, saya ingin reservasi/tanya paket: ${pkg.code} — ${pkg.name} (${pkg.activities}) seharga ${pkg.priceFormatted}/orang.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.phoneClean}?text=${text}`, '_blank');
  };

  const filteredPackages = PACKAGES_DATA.filter((pkg) => {
    if (filterCategory === 'popular') return pkg.isPopular || pkg.isPremium;
    if (filterCategory === 'adventure') return pkg.id === 'pkg-02' || pkg.id === 'pkg-03' || pkg.id === 'pkg-06';
    return true;
  });

  return (
    <section id="packages" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#209eb6]/10 border border-[#209eb6]/20 text-[#209eb6] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Paket Wisata & Outbound Pangalengan</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Pilihan Paket Petualangan
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
            Paket petualangan fleksibel untuk rombongan perusahaan, instansi, komunitas, maupun keluarga.
            Semua paket sudah termasuk asuransi, pemandu & fasilitator, makan prasmanan, dan dokumentasi.
          </p>

          {/* Filter Pills */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 gap-1.5">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filterCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua 6 Paket
            </button>
            <button
              onClick={() => setFilterCategory('popular')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filterCategory === 'popular'
                  ? 'bg-[#209eb6] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Paling Populer & Premium
            </button>
            <button
              onClick={() => setFilterCategory('adventure')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filterCategory === 'adventure'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Adrenalin & Multi-Aktivitas
            </button>
          </div>
        </div>

        {/* 6 Packages Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {filteredPackages.map((pkg) => {
            const isPremiumHighlight = pkg.isPremium;

            return (
              <div
                key={pkg.id}
                id={`package-card-${pkg.id}`}
                className={`relative rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 ${
                  isPremiumHighlight
                    ? 'bg-slate-900 text-white border-2 border-[#209eb6] shadow-2xl ring-4 ring-[#209eb6]/20'
                    : 'bg-white text-slate-900 border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-[#209eb6]/50'
                }`}
              >
                {/* Top Badge for Highlighted Cards */}
                {isPremiumHighlight ? (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-[#209eb6] text-white font-extrabold text-xs tracking-wider uppercase shadow-md flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>Pilihan Utama • Holiday Explore A</span>
                  </div>
                ) : pkg.isPopular ? (
                  <div className="absolute -top-3.5 right-6 z-20 px-3.5 py-1 rounded-full bg-[#effafc] border border-[#209eb6]/40 text-[#209eb6] font-bold text-xs flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{pkg.accentBadge}</span>
                  </div>
                ) : null}

                {/* Card Header & Content */}
                <div className="p-7 sm:p-8 flex-1 flex flex-col">
                  {/* Package Code & Activities */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`text-xs font-bold uppercase tracking-widest ${
                        isPremiumHighlight ? 'text-[#52bfd4]' : 'text-[#209eb6]'
                      }`}
                    >
                      {pkg.code}
                    </span>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                        isPremiumHighlight
                          ? 'bg-white/10 text-slate-300'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      Bisa Rombongan
                    </span>
                  </div>

                  {/* Package Name */}
                  <h3
                    className={`text-2xl font-black font-display tracking-tight mb-2 ${
                      isPremiumHighlight ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {pkg.name}
                  </h3>

                  {/* Activity Combination */}
                  <div
                    className={`inline-block text-sm font-bold px-3 py-1.5 rounded-xl mb-4 self-start ${
                      isPremiumHighlight
                        ? 'bg-[#209eb6]/20 text-[#52bfd4] border border-[#209eb6]/40'
                        : 'bg-[#effafc] text-[#126374] border border-[#209eb6]/20'
                    }`}
                  >
                    {pkg.activities}
                  </div>

                  {/* Pricing Box */}
                  <div className="my-2 pb-5 border-b border-dashed border-slate-200/50">
                    <div className="flex items-baseline gap-1.5">
                      <span
                        className={`text-3xl sm:text-4xl font-extrabold font-display ${
                          isPremiumHighlight ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {pkg.priceFormatted}
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          isPremiumHighlight ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        / orang
                      </span>
                    </div>
                    <p
                      className={`text-xs mt-1.5 leading-snug ${
                        isPremiumHighlight ? 'text-slate-300' : 'text-slate-500'
                      }`}
                    >
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Facilities Included List */}
                  <div className="mt-4 flex-1">
                    <div
                      className={`text-xs font-bold uppercase tracking-wider mb-3 ${
                        isPremiumHighlight ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      Fasilitas Termasuk:
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                              isPremiumHighlight
                                ? 'bg-[#209eb6] text-white'
                                : 'bg-[#effafc] text-[#209eb6]'
                            }`}
                          >
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span
                            className={
                              isPremiumHighlight ? 'text-slate-200 font-normal' : 'text-slate-600'
                            }
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div
                  className={`p-6 sm:p-7 pt-0 border-t ${
                    isPremiumHighlight
                      ? 'border-white/10 bg-slate-950/40 rounded-b-3xl'
                      : 'border-slate-100 bg-slate-50/70 rounded-b-3xl'
                  }`}
                >
                  <div className="flex flex-col gap-2.5">
                    <button
                      onClick={() => handleBookPackage(pkg)}
                      className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm shadow-md transition-all duration-200 flex items-center justify-center gap-2 group ${
                        isPremiumHighlight
                          ? 'bg-[#209eb6] hover:bg-[#19849a] text-white shadow-brand hover:scale-[1.02]'
                          : 'bg-[#209eb6] hover:bg-[#19849a] text-white hover:scale-[1.02]'
                      }`}
                    >
                      <span>Pilih & Pesan Paket Ini</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    <button
                      onClick={() => handleQuickWhatsApp(pkg)}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                        isPremiumHighlight
                          ? 'text-slate-300 hover:text-white bg-white/5 hover:bg-white/10'
                          : 'text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#209eb6]" />
                      <span>Tanya Cepat via WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Value Assurance Note */}
        <div className="mt-14 p-6 rounded-2xl bg-[#effafc] border border-[#209eb6]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#209eb6] text-white flex items-center justify-center shrink-0 shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Kustomisasi Paket & Acara Multi-Hari / Menginap</div>
              <div className="text-xs text-slate-600">
                Membutuhkan akomodasi glamping/villa, kambing guling, electone, atau sewa bus pariwisata dari Jakarta / Bandung?
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors shrink-0"
          >
            Minta Penawaran Kustom
          </a>
        </div>
      </div>
    </section>
  );
};
