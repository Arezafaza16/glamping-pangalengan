import React from 'react';
import { COMPANY_INFO } from '../data/adventureData';
import { Compass, Phone, Mail, MapPin, ExternalLink, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Paket Petualangan', href: '#packages' },
    { name: 'Penginapan', href: '#accommodations' },
    { name: 'Galeri Visual', href: '#gallery' },
    { name: 'Visi & Misi', href: '#vision-mission' },
    { name: 'Kontak & Reservasi', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-900 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#209eb6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-850">
          {/* Brand & Tagline */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img 
                src="/images/icon.png" 
                alt="Glamping Pangalengan Logo" 
                className="w-10 h-10 rounded-xl shadow-md object-cover" 
              />
              <div>
                <span className="font-bold text-lg tracking-tight font-display text-white">
                  {COMPANY_INFO.name}
                </span>
                <div className="text-xs text-[#52bfd4] font-medium">
                  Jasa Perjalanan Wisata & Event Organizer Outbound
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mt-2">
              "{COMPANY_INFO.tagline}"
            </p>

            <div className="flex items-center gap-3 mt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#209eb6]" />
                Event Organizer Resmi & Berbadan Hukum
              </span>
              <span>•</span>
              <span>Est. {COMPANY_INFO.establishedYear}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#52bfd4] mb-4">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-400 hover:text-[#52bfd4] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#52bfd4] mb-2">
              Basecamp & Kontak
            </h4>

            <div className="flex items-start gap-2.5 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-[#209eb6] shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address}</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <Phone className="w-4 h-4 text-[#209eb6] shrink-0" />
              <a
                href={`https://wa.me/${COMPANY_INFO.phoneClean}`}
                className="hover:text-white transition-colors font-bold text-slate-200"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <Mail className="w-4 h-4 text-[#209eb6] shrink-0" />
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="hover:text-white transition-colors"
              >
                {COMPANY_INFO.email}
              </a>
            </div>

            <div className="mt-3">
              <a
                href={`https://${COMPANY_INFO.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 transition-colors"
              >
                <span>{COMPANY_INFO.website}</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Legal Links and Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-slate-300 font-semibold">{COMPANY_INFO.name}</strong>. Hak cipta dilindungi undang-undang.
          </div>

          <div className="flex items-center gap-6">
            <a
              href={COMPANY_INFO.legalNoticeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#52bfd4] transition-colors"
            >
              Legal Notice
            </a>
            <a
              href={COMPANY_INFO.privacyPolicyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#52bfd4] transition-colors"
            >
              Kebijakan Privasi
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/10 hover:bg-[#209eb6] text-white transition-colors ml-2"
              aria-label="Kembali ke atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
