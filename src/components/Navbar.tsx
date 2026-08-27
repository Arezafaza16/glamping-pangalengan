import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/adventureData';
import { Compass, Menu, X, PhoneCall, ArrowRight, MapPin } from 'lucide-react';

interface NavbarProps {
  onSelectPackage?: (pkgId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Paket Wisata', href: '#packages' },
    { name: 'Penginapan', href: '#accommodations' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Visi & Misi', href: '#vision-mission' },
    { name: 'Tim Kami', href: '#team' },
    { name: 'Kontak & Reservasi', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3.5'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between flex-nowrap gap-2 sm:gap-4">
          {/* Brand Logo - Strictly Single Line */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0"
            id="nav-brand-link"
          >
            <img 
              src="/images/icon.png" 
              alt="Glamping Pangalengan Logo" 
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105 shrink-0 object-cover" 
            />
            <div className="flex flex-col whitespace-nowrap leading-none">
              <span
                className={`font-black text-sm sm:text-base lg:text-lg tracking-tight font-display transition-colors whitespace-nowrap leading-tight ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}
              >
                GLAMPING PANGALENGAN
              </span>
              <span
                className={`text-[10px] sm:text-[11px] tracking-wider uppercase font-semibold transition-colors flex items-center gap-1 leading-none mt-0.5 whitespace-nowrap ${
                  isScrolled ? 'text-[#209eb6]' : 'text-[#52bfd4]'
                }`}
              >
                <MapPin className="w-2.5 h-2.5 shrink-0" />
                <span>PANGALENGAN ADVENTURE</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 shrink-0" id="desktop-nav-menu">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                id={`nav-link-${link.href.replace('#', '')}`}
                className={`text-xs xl:text-sm font-semibold transition-colors duration-200 relative group py-1.5 whitespace-nowrap shrink-0 ${
                  isScrolled
                    ? 'text-slate-700 hover:text-[#209eb6]'
                    : 'text-slate-100 hover:text-white'
                }`}
              >
                <span className="whitespace-nowrap">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#209eb6] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Action Phone Link */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=Halo%20GLAMPING%20PANGALENGAN,%20saya%20tertarik%20untuk%20konsultasi%20paket%20outbound%20di%20Pangalengan.`}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap border transition-all ${
                isScrolled
                  ? 'text-slate-700 hover:text-[#209eb6] bg-slate-50 hover:bg-slate-100 border-slate-200'
                  : 'text-white/90 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20'
              }`}
              id="nav-quick-wa-btn"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#209eb6] shrink-0" />
              <span className="whitespace-nowrap">{COMPANY_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile / Tablet Menu Button (Only Brand on left, Hamburger on right) */}
          <div className="flex lg:hidden items-center shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-xl transition-colors shrink-0 ${
                isScrolled
                  ? 'text-slate-800 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10 bg-black/20 backdrop-blur-sm'
              }`}
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 w-[82%] max-w-sm h-full bg-white shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 transform ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <img 
                  src="/images/icon.png" 
                  alt="Glamping Pangalengan Logo" 
                  className="w-9 h-9 rounded-lg shadow-sm shrink-0 object-cover" 
                />
                <div className="flex flex-col whitespace-nowrap">
                  <div className="font-bold text-xs text-slate-900 font-display whitespace-nowrap leading-tight">GLAMPING PANGALENGAN</div>
                  <div className="text-[10px] text-[#209eb6] font-medium whitespace-nowrap leading-tight mt-0.5">Pangalengan Adventure</div>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 text-slate-700 hover:text-[#209eb6] hover:bg-[#209eb6]/5 rounded-xl font-semibold text-base transition-colors flex items-center justify-between whitespace-nowrap"
                >
                  <span className="whitespace-nowrap">{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=Halo%20GLAMPING%20PANGALENGAN,%20saya%20tertarik%20konsultasi%20paket%20outbound%20Pangalengan.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl border border-slate-200 text-slate-800 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4 text-[#209eb6] shrink-0" />
              <span className="whitespace-nowrap">WhatsApp: {COMPANY_INFO.phone}</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full py-3 px-4 rounded-xl bg-[#209eb6] hover:bg-[#19849a] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md transition-all whitespace-nowrap"
            >
              <span className="whitespace-nowrap">Pesan Petualangan</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
