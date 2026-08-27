import React, { useState, useEffect, useRef } from 'react';
import { COMPANY_INFO, PACKAGES_DATA } from '../data/adventureData';
import { PackageItem, ContactFormState } from '../types';
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Globe,
  MessageSquare,
  CheckCircle2,
  Calendar,
  Building,
  User,
  Users,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

interface ContactSectionProps {
  selectedPackage: PackageItem | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedPackage }) => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    company: '',
    phone: '',
    participants: '',
    packageId: selectedPackage ? selectedPackage.id : 'pkg-06',
    date: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (selectedPackage) {
      setFormData((prev) => ({
        ...prev,
        packageId: selectedPackage.id,
      }));
    }
  }, [selectedPackage]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getPackageNameById = (id: string) => {
    const found = PACKAGES_DATA.find((p) => p.id === id);
    return found ? `${found.code} — ${found.name} (${found.activities})` : 'Custom Package';
  };

  const generateWhatsAppMessage = () => {
    const packageName = getPackageNameById(formData.packageId);
    const msg = `Halo PT CASWIKA PUTRI MANDIRI,
Saya ingin konsultasi paket outbound / gathering di Pangalengan:

• Nama: ${formData.name || '-'}
• Perusahaan/Komunitas: ${formData.company || '-'}
• No. WhatsApp: ${formData.phone || '-'}
• Jumlah Peserta: ${formData.participants ? `${formData.participants} orang` : '-'}
• Paket Pilihan: ${packageName}
• Rencana Tanggal: ${formData.date || 'Fleksibel'}
• Catatan Tambahan: ${formData.message || 'Mohon kirimkan detail penawaran resmi.'}

Terima kasih!`;

    return encodeURIComponent(msg);
  };

  const handleWhatsAppDirect = () => {
    const url = `https://wa.me/${COMPANY_INFO.phoneClean}?text=${generateWhatsAppMessage()}`;
    window.open(url, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate inquiry transmission
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#209eb6]/10 border border-[#209eb6]/20 text-[#209eb6] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Reservasi & Penawaran Kustom</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Rencanakan Petualangan Anda
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Hubungi tim perencana event kami. Kami siap membantu penyusunan jadwal acara, penawaran harga resmi,
            serta kebutuhan khusus kelompok atau perusahaan Anda di Pangalengan.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Company Information & Contact Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Company Card */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-subtle flex flex-col gap-6">
              <div>
                <div className="text-xs font-bold text-[#209eb6] tracking-wider uppercase mb-1">
                  Kantor & Basecamp Utama
                </div>
                <h3 className="text-2xl font-black text-slate-900 font-display">
                  {COMPANY_INFO.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Jasa Perjalanan Wisata • Event Organizer Outbound & Gathering
                </p>
              </div>

              {/* Contact Info Items */}
              <div className="space-y-4 pt-4 border-t border-slate-200/60 text-sm">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center text-[#209eb6] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-xs uppercase tracking-wide">Alamat Basecamp</div>
                    <p className="text-slate-600 text-xs sm:text-sm mt-0.5 leading-relaxed">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                {/* WhatsApp / Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center text-[#209eb6] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-xs uppercase tracking-wide">Telepon / WhatsApp</div>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.phoneClean}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#209eb6] font-bold text-base hover:underline block mt-0.5"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <span className="text-[11px] text-emerald-600 font-medium">Buka Setiap Hari (08:00 – 21:00 WIB)</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center text-[#209eb6] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-xs uppercase tracking-wide">Email Resmi</div>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-slate-700 font-medium text-xs sm:text-sm hover:text-[#209eb6] transition-colors block mt-0.5"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center text-[#209eb6] shrink-0 mt-0.5">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-xs uppercase tracking-wide">Portal Resmi</div>
                    <a
                      href={`https://${COMPANY_INFO.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 font-medium text-xs sm:text-sm hover:text-[#209eb6] transition-colors flex items-center gap-1 mt-0.5"
                    >
                      <span>{COMPANY_INFO.website}</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Fast WhatsApp CTA */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Chat WhatsApp Langsung ({COMPANY_INFO.phone})</span>
                </button>
              </div>
            </div>

            {/* Google Map / Location Preview */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-subtle flex flex-col justify-between overflow-hidden relative">
              <div className="relative z-10">
                <div className="text-xs font-bold text-[#52bfd4] uppercase tracking-wider mb-1">
                  Lokasi & Akses
                </div>
                <h4 className="text-lg font-bold font-display mb-2">Hutan Pinus Rahong Pangalengan</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Terletak sekitar 45 km di selatan Kota Bandung. Sangat mudah diakses melalui Tol Soroja (Exit Soreang), dilanjutkan perjalanan berpemandangan indah melewati kebun teh.
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=Hutan+Pinus+Rahong+Pangalengan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-xs font-semibold text-white transition-colors"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#52bfd4]" />
                  <span>Petunjuk Arah Google Maps</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl relative">
              {isSubmitted ? (
                <div className="py-12 px-4 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mb-3">
                    Permintaan Terkirim!
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base max-w-md mb-6 leading-relaxed">
                    Terima kasih, <strong className="text-slate-900">{formData.name}</strong>. Tim kami di{' '}
                    <strong>PT CASWIKA PUTRI MANDIRI</strong> akan segera menghubungi Anda melalui WhatsApp atau email dalam 1–2 jam.
                  </p>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left w-full max-w-md mb-8 text-xs text-slate-700 space-y-1.5">
                    <div>
                      <span className="font-semibold text-slate-500">Paket: </span>
                      <strong className="text-slate-900">{getPackageNameById(formData.packageId)}</strong>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-500">Jumlah Peserta: </span>
                      <strong>{formData.participants || 'Grup'} orang</strong>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-500">Kontak: </span>
                      <strong>{formData.phone}</strong>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Teruskan ke WhatsApp Sekarang</span>
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
                    >
                      Kirim Permintaan Lain
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="adventure-inquiry-form">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
                        Formulir Pemesanan & Konsultasi
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Isi detail kebutuhan acara Anda di bawah ini atau hubungi langsung melalui WhatsApp.
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#209eb6] px-3 py-1 rounded-full bg-[#effafc]">
                      Respon Cepat
                    </span>
                  </div>

                  {/* Name & Company Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="contoh: Budi Gunawan"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-[#209eb6] focus:ring-2 focus:ring-[#209eb6]/20 text-sm transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                        Perusahaan / Instansi / Komunitas
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="contoh: PT Maju Bersama / Rombongan Keluarga"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-[#209eb6] focus:ring-2 focus:ring-[#209eb6]/20 text-sm transition-all outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone & Participants Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                        Nomor Telepon / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="0812-XXXX-XXXX"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-[#209eb6] focus:ring-2 focus:ring-[#209eb6]/20 text-sm transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                        Perkiraan Jumlah Peserta
                      </label>
                      <div className="relative">
                        <Users className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="number"
                          name="participants"
                          min="1"
                          value={formData.participants}
                          onChange={handleChange}
                          placeholder="contoh: 35"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-[#209eb6] focus:ring-2 focus:ring-[#209eb6]/20 text-sm transition-all outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Preferred Package & Estimated Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                        Pilihan Paket <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="packageId"
                        value={formData.packageId}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#209eb6] focus:ring-2 focus:ring-[#209eb6]/20 text-sm bg-white transition-all outline-none"
                      >
                        {PACKAGES_DATA.map((pkg) => (
                          <option key={pkg.id} value={pkg.id}>
                            {pkg.code}: {pkg.name} — {pkg.priceFormatted}/orang
                          </option>
                        ))}
                        <option value="custom">Paket Kustom Outbound / Gathering Menginap</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                        Rencana Tanggal Pelaksanaan
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-[#209eb6] focus:ring-2 focus:ring-[#209eb6]/20 text-sm transition-all outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Pesan Tambahan & Kebutuhan Khusus
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tuliskan rencana agenda, preferensi glamping/villa, kambing guling, bus, atau pertanyaan lainnya..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#209eb6] focus:ring-2 focus:ring-[#209eb6]/20 text-sm transition-all outline-none resize-none"
                    />
                  </div>

                  {/* Form Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex-1 py-3.5 px-6 rounded-xl bg-[#209eb6] hover:bg-[#19849a] text-white font-bold text-sm shadow-brand transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitting ? 'Mengirim...' : 'Kirim Formulir Permintaan'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Buka Chat WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
