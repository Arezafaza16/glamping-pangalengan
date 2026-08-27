import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GALLERY_DATA } from '../data/adventureData';
import { GalleryItem } from '../types';
import { Camera, Maximize2, X, MapPin, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const galleryGridRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
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

      // Gallery items reveal
      if (galleryGridRef.current) {
        gsap.fromTo(
          galleryGridRef.current.children,
          { opacity: 0, scale: 0.95, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: galleryGridRef.current,
              start: 'top 90%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  const categories = [
    { id: 'all', label: 'Semua Foto' },
    { id: 'rafting', label: 'Arung Jeram' },
    { id: 'adventure', label: 'ATV & Paintball' },
    { id: 'teambuilding', label: 'Team Building' },
    { id: 'glamping', label: 'Glamping & Camp' },
    { id: 'nature', label: 'Pesona Alam' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => {
        if (activeCategory === 'adventure') {
          return item.category === 'adventure';
        }
        return item.category === activeCategory;
      });

  return (
    <section id="gallery" ref={sectionRef} className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#209eb6]/10 border border-[#209eb6]/20 text-[#209eb6] text-xs font-bold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Dokumentasi Visual Pangalengan</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Momen Seru di Pangalengan
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
            Rasakan keseruan gemuruh jeram sungai, sejuknya ketenangan hutan pinus Rahong, dan
            semangat kekompakan peserta yang menaklukkan setiap tantangan bersama.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-[#209eb6] text-white shadow-md shadow-[#209eb6]/25'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Gallery Grid */}
        <div
          ref={galleryGridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {filteredItems.map((item, index) => {
            // Span configuration for a 5-item bento grid layout
            const isLarge = index === 0;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-subtle border border-slate-200/80 bg-slate-900 ${
                  isLarge ? 'sm:col-span-2 sm:row-span-2 h-[340px] sm:h-[440px]' : 'h-[260px]'
                }`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-90"
                  loading="lazy"
                />

                {/* Dark Solid Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-lg bg-black/40 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold tracking-wide">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Zoom Icon Button */}
                <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Caption Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-white font-bold text-base sm:text-lg font-display mb-1 drop-shadow-sm">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-[#52bfd4]" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Footer Note */}
        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-[#209eb6]" />
          <span>Fotografer profesional dan dokumentasi foto/video sudah termasuk di seluruh paket.</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedPhoto.imageUrl}
              alt={selectedPhoto.title}
              className="w-full max-h-[70vh] object-cover"
            />

            <div className="p-6 bg-slate-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#52bfd4] uppercase tracking-wider">
                  {selectedPhoto.categoryLabel}
                </span>
                <h3 className="text-xl font-bold font-display mt-0.5">{selectedPhoto.title}</h3>
                <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#209eb6]" />
                  <span>{selectedPhoto.location}</span>
                </p>
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedPhoto(null)}
                className="px-5 py-2.5 rounded-xl bg-[#209eb6] hover:bg-[#19849a] text-white text-xs font-bold transition-all shadow-md shrink-0"
              >
                Pesan / Tanya Paket Ini
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
