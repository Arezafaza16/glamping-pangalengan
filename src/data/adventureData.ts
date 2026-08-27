import { PackageItem, GalleryItem, FeatureItem, ValueItem, MissionItem, TeamMember } from '../types';

export const COMPANY_INFO = {
  name: "PT CASWIKA PUTRI MANDIRI",
  shortName: "Caswika Adventure",
  tagline: "Petualangan, kerja sama tim, dan pengalaman tak terlupakan di Pangalengan.",
  establishedYear: "2016",
  phone: "0813 2283 4009",
  phoneClean: "6281322834009",
  email: "info@glampingpangalengan.com",
  website: "glampingpangalengan.com",
  address: "Hutan Pinus Rahong, Pulosari, Kec. Pangalengan, Kabupaten Bandung, Jawa Barat 40378, Indonesia",
  locationName: "Pangalengan, Bandung",
  legalNoticeUrl: "https://www.glampingpangalengan.com/legal-notice",
  privacyPolicyUrl: "https://www.glampingpangalengan.com/privacy",
};

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: "pkg-01",
    code: "Paket 01",
    name: "Holiday One",
    pricePerPerson: 195000,
    priceFormatted: "Rp 195.000",
    activities: "Rafting + Makan",
    tagline: "Sensasi arung jeram Sungai Palayangan yang memacu adrenalin dilengkapi santap kuliner khas.",
    imageUrl: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=800&q=80",
    includes: [
      "Rafting Sungai Palayangan (4,5 km)",
      "Pemandu / River Guide Bersertifikat",
      "Asuransi Keselamatan",
      "Fasilitator & Rescue Team",
      "Transportasi Lokal (Drop & Pick)",
      "Fasilitas Saung / Gazebo Basecamp",
      "Kamar Bilas & Toilet Bersih",
      "1x Makan (Prasmanan Khas Sunda)",
      "Dokumentasi Foto Aksi & Kegiatan"
    ]
  },
  {
    id: "pkg-02",
    code: "Paket 02",
    name: "Holiday Two",
    pricePerPerson: 285000,
    priceFormatted: "Rp 285.000",
    activities: "Rafting + Paintball + Makan",
    tagline: "Pertarungan taktik seru di hutan pinus dilanjutkan arung jeram deras yang menantang.",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    accentBadge: "Paket Favorit",
    includes: [
      "Rafting Sungai Palayangan (4,5 km)",
      "Paintball Battle (Arena Hutan Pinus Rahong)",
      "Pemandu & Wasit/Marshal Bersertifikat",
      "Perlindungan Asuransi Keselamatan",
      "Fasilitator Event Khusus",
      "Transportasi Lokal (Drop & Pick)",
      "Fasilitas Saung / Gazebo Basecamp",
      "Kamar Bilas & Toilet Bersih",
      "1x Makan (Prasmanan Khas Sunda)",
      "Dokumentasi Foto Aksi & Kegiatan"
    ]
  },
  {
    id: "pkg-03",
    code: "Paket 03",
    name: "Holiday Three",
    pricePerPerson: 230000,
    priceFormatted: "Rp 230.000",
    activities: "Rafting + Flying Fox + Makan",
    tagline: "Meluncur di atas danau Situ Cileunca yang menakjubkan, lalu taklukkan jeram sungai.",
    imageUrl: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80",
    includes: [
      "Rafting Sungai Palayangan (4,5 km)",
      "Wahana Flying Fox Lintas Danau",
      "Pemandu & Teknisi Bersertifikat",
      "Perlindungan Asuransi Keselamatan",
      "Fasilitator Event Khusus",
      "Transportasi Lokal (Drop & Pick)",
      "Fasilitas Saung / Gazebo Basecamp",
      "Kamar Bilas & Toilet Bersih",
      "1x Makan (Prasmanan Khas Sunda)",
      "Dokumentasi Foto Aksi & Kegiatan"
    ]
  },
  {
    id: "pkg-04",
    code: "Paket 04",
    name: "Holiday Four",
    pricePerPerson: 250000,
    priceFormatted: "Rp 250.000",
    activities: "Rafting + Fun Games + Makan",
    tagline: "Ice breaking seru dan games kekompakan untuk membakar semangat seluruh peserta.",
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
    includes: [
      "Rafting Sungai Palayangan (4,5 km)",
      "Program & Peralatan Fun Games Lengkap",
      "Game Master & Pemandu Profesional",
      "Perlindungan Asuransi Keselamatan",
      "Fasilitator Lapangan Khusus",
      "Transportasi Lokal (Drop & Pick)",
      "Fasilitas Saung / Gazebo Basecamp",
      "Kamar Bilas & Toilet Bersih",
      "1x Makan (Prasmanan Khas Sunda)",
      "Dokumentasi Foto Aksi & Kegiatan"
    ]
  },
  {
    id: "pkg-05",
    code: "Paket 05",
    name: "Holiday Five",
    pricePerPerson: 285000,
    priceFormatted: "Rp 285.000",
    activities: "Rafting + Team Building + Makan",
    tagline: "Modul kepemimpinan, sinergi, dan peningkatan rasa percaya untuk perusahaan & instansi.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    accentBadge: "Pilihan Corporate",
    includes: [
      "Rafting Sungai Palayangan (4,5 km)",
      "Modul Terstruktur Team Building Outbound",
      "Fasilitator Experiential Learning Bersertifikat",
      "Perlindungan Asuransi Keselamatan",
      "Pemandu & Safety Rescue Team",
      "Transportasi Lokal (Drop & Pick)",
      "Fasilitas Saung / Gazebo Basecamp",
      "Kamar Bilas & Toilet Bersih",
      "1x Makan (Prasmanan Khas Sunda)",
      "Dokumentasi Foto Aksi & Kegiatan"
    ]
  },
  {
    id: "pkg-06",
    code: "Paket 06",
    name: "Holiday Explore A",
    pricePerPerson: 325000,
    priceFormatted: "Rp 325.000",
    activities: "Rafting + ATV Tandem + Makan",
    tagline: "Kombinasi petualangan terbaik: rute offroad kebun teh berlumpur dan derasnya arung jeram.",
    imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    isPremium: true,
    accentBadge: "Pilihan Petualangan Premium",
    includes: [
      "Rafting Sungai Palayangan (4,5 km)",
      "ATV Tandem (Trek Perkebunan Teh)",
      "Instruktur ATV & Pemandu Rafting Bersertifikat",
      "Perlindungan Asuransi Keselamatan",
      "Fasilitator Event Khusus",
      "Transportasi Lokal (Drop & Pick)",
      "Fasilitas Saung / Gazebo Basecamp",
      "Kamar Bilas & Toilet Bersih",
      "1x Makan (Prasmanan Khas Sunda)",
      "Dokumentasi Foto Aksi & Kegiatan"
    ]
  }
];

export const VALUES_DATA: ValueItem[] = [
  {
    id: "val-1",
    title: "Keselamatan Utama",
    description: "Keselamatan Anda adalah prioritas tertinggi kami di setiap aktivitas. Kami menerapkan peralatan berstandar internasional, tim rescue bersertifikat, dan prosedur briefing keselamatan yang ketat.",
    iconName: "ShieldCheck"
  },
  {
    id: "val-2",
    title: "Pelayanan Profesional",
    description: "Kami berkomitmen menghadirkan pengalaman yang andal dan profesional. Mulai dari ketepatan jadwal dan keramahan layanan hingga fasilitator berpengalaman.",
    iconName: "Award"
  },
  {
    id: "val-3",
    title: "Pengalaman Berkesan",
    description: "Setiap petualangan dirancang untuk menciptakan momen berharga dan kenangan abadi. Aktivitas penuh semangat yang membangun kebersamaan dan kegembiraan sejati.",
    iconName: "Sparkles"
  }
];

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: "feat-1",
    title: "Fasilitasi Profesional",
    description: "Fasilitator berpengalaman yang siap memandu grup Anda dengan energi positif, arahan keselamatan jelas, serta manajemen dinamika kelompok yang ahli.",
    iconName: "Users"
  },
  {
    id: "feat-2",
    title: "Layanan Serba Lengkap",
    description: "Mulai dari transportasi lokal, konsumsi, peralatan, kegiatan, hingga dokumentasi lengkap. Anda cukup menikmati momen, biarkan kami yang mengurus semuanya.",
    iconName: "CheckCircle2"
  },
  {
    id: "feat-3",
    title: "Koneksi & Kekompakan Tim",
    description: "Aktivitas yang dirancang untuk mempererat komunikasi, kerja sama, dan solidaritas tim. Menghilangkan sekat dan membangun hubungan kerja yang solid.",
    iconName: "HeartHandshake"
  },
  {
    id: "feat-4",
    title: "Alam & Petualangan Asri",
    description: "Rasakan keindahan Pangalengan melalui aktivitas luar ruangan yang menyegarkan di tengah sejuknya udara pegunungan, hutan pinus asri, dan kebun teh berkabut.",
    iconName: "Compass"
  }
];

export const MISSIONS_DATA: MissionItem[] = [
  {
    number: "01",
    title: "Pengalaman Inovatif",
    description: "Menyediakan pengalaman outbound inovatif dan terpersonalisasi yang memberikan nilai tambah nyata bagi klien dengan program yang sesuai dengan tujuan tiap kelompok."
  },
  {
    number: "02",
    title: "Hubungan Kuat & Terpercaya",
    description: "Membangun hubungan erat dengan pelanggan berlandaskan kepercayaan, kolaborasi, dan dedikasi, memastikan setiap acara gathering maupun retret melampaui ekspektasi."
  },
  {
    number: "03",
    title: "Bisnis Berkelanjutan",
    description: "Mengintegrasikan keberlanjutan ke dalam praktik bisnis kami untuk senantiasa mendukung kelestarian alam dan masyarakat lokal di Pangalengan."
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Offroad Land Rover / ATV",
    category: "adventure",
    categoryLabel: "Offroad",
    location: "Kebun Teh Malabar",
    imageUrl: "/images/gallery1.jpeg"
  },
  {
    id: "gal-2",
    title: "Team Building & Sinergi Perusahaan",
    category: "teambuilding",
    categoryLabel: "Team Building",
    location: "Rahong Outdoor Camp",
    imageUrl: "/images/gallery2.jpg"
  },
  {
    id: "gal-3",
    title: "Flying Fox Lintas Danau Situ Cileunca",
    category: "adventure",
    categoryLabel: "Flying Fox",
    location: "Danau Situ Cileunca",
    imageUrl: "/images/hero3.jpeg"
  },
  {
    id: "gal-4",
    title: "Arena Paintball Hutan Pinus Rahong",
    category: "adventure",
    categoryLabel: "Paintball",
    location: "Hutan Pinus Rahong",
    imageUrl: "/images/gallery4.jpeg"
  },
  {
    id: "gal-5",
    title: "Arung Jeram Sungai Palayangan",
    category: "rafting",
    categoryLabel: "Rafting",
    location: "Sungai Palayangan",
    imageUrl: "/images/gallery5.jpeg"
  }
];

export const STATS_DATA = [
  { value: "2016", label: "Berdiri Sejak", detail: "Hampir satu dekade melayani" },
  { value: "15.000+", label: "Peserta Puas", detail: "Perusahaan, komunitas & keluarga" },
  { value: "100%", label: "Pemandu Bersertifikat", detail: "Standar keselamatan & rescue resmi" },
  { value: "4.9/5", label: "Kepuasan Klien", detail: "Dari 650+ ulasan terverifikasi" },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team-1",
    name: "Asep Hendra Caswika",
    role: "Founder & Operation Director",
    specialty: "Master Trainer Experiential Learning (AELI) & Manajemen Hospitality Alam Terbuka",
    experience: "15+ Tahun Pengalaman",
    imageUrl: "/images/team1.jpeg",
    badge: "Leadership & Safety"
  },
  {
    id: "team-2",
    name: "Rian Herdiana",
    role: "Head of Rafting & River Rescue",
    specialty: "Instruktur FAJI & Rescue 3 International, Ahli Jalur Sungai Palayangan",
    experience: "10+ Tahun Pengalaman",
    imageUrl: "/images/team2.jpeg",
    badge: "Water Rescue Lead"
  },
  {
    id: "team-3",
    name: "Siti Nurhaliza",
    role: "Event & Hospitality Manager",
    specialty: "Koordinator Acara Corporate Gathering, Manajemen Catering & Glamping",
    experience: "8+ Tahun Pengalaman",
    imageUrl: "/images/team3.jpeg",
    badge: "Hospitality Lead"
  },
  {
    id: "team-4",
    name: "Deni Kurniawan",
    role: "Lead Outbound Facilitator",
    specialty: "Team Dynamics, Capacity Building, Ice Breaking & Leadership Games",
    experience: "9+ Tahun Pengalaman",
    imageUrl: "/images/team4.jpeg",
    badge: "Certified Facilitator"
  },
  {
    id: "team-5",
    name: "Farhan Pratama",
    role: "Technical Guide & Safety Officer",
    specialty: "High Ropes, Flying Fox Safety, Paintball Marshall & Offroad Pilot",
    experience: "7+ Tahun Pengalaman",
    imageUrl: "/images/team5.jpeg",
    badge: "Adventure Marshall"
  },
  {
    id: "team-6",
    name: "Maya Anggraini",
    role: "Senior Trip Consultant",
    specialty: "Konsultasi Paket Custom, Perencanaan Itinerary & Reservasi Rombongan",
    experience: "6+ Tahun Pengalaman",
    imageUrl: "/images/team6.jpeg",
    badge: "Client Advisory"
  },
  {
    id: "team-7",
    name: "Budi Santoso",
    role: "Field Coordinator",
    specialty: "Logistik Lapangan & Manajemen Basecamp Pangalengan",
    experience: "5+ Tahun Pengalaman",
    imageUrl: "/images/team7.jpeg",
    badge: "Logistics Expert"
  }
];
