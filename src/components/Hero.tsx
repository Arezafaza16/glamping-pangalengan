import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { MapPin, ArrowDown, Sparkles, Shield, Users } from 'lucide-react';

const heroImages = [
  '/images/hero2.jpeg',
  '/images/hero3.jpeg',
];

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);
  const imageBgRef = useRef<HTMLDivElement>(null);
  const floatingTagsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Image subtle scale entrance
      tl.fromTo(
        imageBgRef.current,
        { scale: 1.1, filter: 'brightness(0.6)' },
        { scale: 1.0, filter: 'brightness(0.85)', duration: 1.2, ease: 'power2.out' }
      );

      // Location badge entrance
      tl.fromTo(
        badgeRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        '-=1.0'
      );

      // Headline entrance
      tl.fromTo(
        headlineRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.8'
      );

      // Subtext entrance
      tl.fromTo(
        subtextRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        '-=0.5'
      );

      // CTA Buttons entrance
      tl.fromTo(
        ctaContainerRef.current?.children ? Array.from(ctaContainerRef.current.children) : [],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 },
        '-=0.4'
      );

      // Floating feature tags
      tl.fromTo(
        floatingTagsRef.current?.children ? Array.from(floatingTagsRef.current.children) : [],
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 0.4 },
        '-=0.3'
      );

      // Scroll indicator bouncing loop
      if (scrollIndicatorRef.current) {
        gsap.to(scrollIndicatorRef.current, {
          y: 8,
          repeat: -1,
          yoyo: true,
          duration: 1.2,
          ease: 'power1.inOut',
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 lg:py-0"
    >
      {/* Background Image Slider with Clean Solid Dark Overlay */}
      <div
        ref={imageBgRef}
        className="absolute inset-0 w-full h-full"
      >
        {heroImages.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${img}')`,
            }}
          />
        ))}
        {/* Clean solid overlay allowing background image to show clearly */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center my-auto">
        {/* Location Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium mb-6 shadow-lg"
          id="hero-location-badge"
        >
          <MapPin className="w-3.5 h-3.5 text-[#52bfd4]" />
          <span className="tracking-wide">Pangalengan, Bandung</span>
        </div>

        {/* Main Headline */}
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white font-display tracking-tight leading-[1.08] max-w-4xl drop-shadow-md mb-6"
          id="hero-main-headline"
        >
          CIPTAKAN MOMEN.{' '}
          <span className="text-[#52bfd4]">
            PERERAT KEBERSAMAAN.
          </span>
        </h1>

        {/* Supporting Text */}
        <p
          ref={subtextRef}
          className="text-base sm:text-xl text-slate-200 font-normal max-w-2xl leading-relaxed mb-9 drop-shadow-sm"
          id="hero-subtext"
        >
          Pengalaman petualangan alam, outbound, rafting, dan team building yang dirancang untuk
          memperkuat solidaritas di tengah keindahan alam Pangalengan.
        </p>

        {/* Action CTAs */}
        <div
          ref={ctaContainerRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12"
          id="hero-cta-container"
        >
          <a
            href="#packages"
            onClick={(e) => scrollToSection(e, '#packages')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#209eb6] hover:bg-[#19849a] text-white font-bold text-base shadow-brand transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group"
            id="hero-explore-packages-cta"
          >
            <span>Lihat Pilihan Paket</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </a>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-base transition-all duration-300 hover:scale-105 hover:border-white/50 flex items-center justify-center gap-2"
            id="hero-contact-us-cta"
          >
            <span>Hubungi Kami</span>
          </a>
        </div>

        {/* Micro Feature Highlights */}
        <div
          ref={floatingTagsRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl w-full text-left"
          id="hero-feature-tags"
        >
          <div className="px-3.5 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-[#209eb6]/30 text-[#52bfd4]">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <div>
              <div className="font-semibold">Arung Jeram / Rafting</div>
              <div className="text-[10px] text-slate-300">Grade 3-4 Palayangan</div>
            </div>
          </div>

          <div className="px-3.5 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-[#209eb6]/30 text-[#52bfd4]">
              <Users className="w-3.5 h-3.5" />
            </span>
            <div>
              <div className="font-semibold">Corporate Gathering</div>
              <div className="text-[10px] text-slate-300">Outbound Terpadu</div>
            </div>
          </div>

          <div className="px-3.5 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-[#209eb6]/30 text-[#52bfd4]">
              <Shield className="w-3.5 h-3.5" />
            </span>
            <div>
              <div className="font-semibold">100% Bersertifikat</div>
              <div className="text-[10px] text-slate-300">Termasuk Asuransi</div>
            </div>
          </div>

          <div className="px-3.5 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-[#209eb6]/30 text-[#52bfd4]">
              <MapPin className="w-3.5 h-3.5" />
            </span>
            <div>
              <div className="font-semibold">Hutan Pinus Rahong</div>
              <div className="text-[10px] text-slate-300">Basecamp Pangalengan</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <a
        ref={scrollIndicatorRef}
        href="#about"
        onClick={(e) => scrollToSection(e, '#about')}
        aria-label="Gulir ke bagian Tentang Kami"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/70 hover:text-white flex flex-col items-center gap-1 transition-colors"
        id="hero-scroll-indicator"
      >
        <span className="text-[10px] uppercase font-semibold tracking-widest text-slate-300">Gulir</span>
        <div className="w-5 h-8 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-[#209eb6] rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
};
