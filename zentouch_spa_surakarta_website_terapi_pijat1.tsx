// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { 
  Calendar, Clock, User, Phone, FileText, CheckCircle, 
  Sparkles, ShieldCheck, Star, HeartHandshake, ChevronRight, 
  Trash2, Filter, Search, Award, Activity, Info, MapPin, 
  Menu, X, Check, ArrowRight, MessageCircle, RefreshCw, 
  Home, Building, CreditCard, HelpCircle, Navigation, Eye, 
  Send, ExternalLink, ThumbsUp, DollarSign, TrendingUp, CheckSquare, Zap
} from 'lucide-react';

const WA_PHONE_RAW = '6289562221665004';
const WA_PHONE_DISPLAY = '0895-6222-1665004';
const ADDRESS_SURAKARTA = 'Jl. Slamet Riyadi No. 342, Sriwedari, Laweyan, Surakarta, Jawa Tengah 57141';

const SOLO_AREAS = [
  'Laweyan (Free Transport)',
  'Banjarsari (+ Rp 15.000)',
  'Jebres (+ Rp 15.000)',
  'Pasar Kliwon (+ Rp 15.000)',
  'Serengan (+ Rp 15.000)',
  'Kartasura & Colomadu (+ Rp 20.000)',
  'Solo Baru & Grogol (+ Rp 20.000)'
];

const SERVICES_DATA = [
  {
    id: 'jawa-kraton',
    name: 'Pijat Jawa Kraton Surakarta',
    category: 'Khas Solo & Relaksasi',
    tagline: 'Warisan teknik urut tradisional khas Karaton Surakarta Hadiningrat',
    description: 'Pijatan ritmis menggunakan kombinasi rempah hangat dan minyak herbal pilihan. Mengembalikan kebugaran fisik, melancarkan aliran darah, dan meredakan pegal linu mendalam.',
    durations: [
      { min: 60, price: 120000 },
      { min: 90, price: 165000 },
      { min: 120, price: 210000 }
    ],
    intensity: 'Sedang - Mantap',
    rating: 4.9,
    reviewsCount: 248,
    benefits: ['Membuang angin kram otot', 'Melancarkan peredaran darah', 'Meringankan pegal pinggang & bahu'],
    icon: '🏛️',
    popular: true
  },
  {
    id: 'refleksi-solo',
    name: 'Refleksologi Vitalitas Solo',
    category: 'Organ Dalam & Saraf',
    tagline: 'Penekanan presisi pada titik meridian telapak kaki & tangan',
    description: 'Terapi penekanan titik saraf refleksi yang terhubung langsung dengan fungsi organ dalam. Diakhiri dengan rendaman air hangat herbal garam Epsom.',
    durations: [
      { min: 60, price: 95000 },
      { min: 90, price: 135000 }
    ],
    intensity: 'Sedang',
    rating: 4.8,
    reviewsCount: 182,
    benefits: ['Detoksifikasi alami tubuh', 'Meningkatkan sirkulasi organ', 'Meredakan kelelahan kaki jalan jauh'],
    icon: '🦶',
    popular: false
  },
  {
    id: 'deep-tissue',
    name: 'Deep Tissue & Sports Massage',
    category: 'Terapi Otot Kencang',
    tagline: 'Penanganan khusus simpul otot kaku & kelelahan olahraga',
    description: 'Pijatan bertekanan kuat berfokus pada lapisan otot terdalam dan jaringan ikat. Ideal bagi pekerja keras, atlet, atau penderita kaku otot kronis.',
    durations: [
      { min: 60, price: 160000 },
      { min: 90, price: 220000 },
      { min: 120, price: 280000 }
    ],
    intensity: 'Kuat / Ekstra Tekanan',
    rating: 4.9,
    reviewsCount: 142,
    benefits: ['Melepas knot / simpul otot', 'Mempercepat pemulihan fisik', 'Postur tubuh lebih rileks'],
    icon: '💪',
    popular: true
  },
  {
    id: 'aromatherapy',
    name: 'Aromaterapi Bunga Melati & Kananga',
    category: 'Relaksasi Jiwa & Pikiran',
    tagline: 'Sensasi usapan lembut berbalut aroma essensial bunga khas Solo',
    description: 'Kombinasi usapan teratur (effleurage) dan balutan minyak esensial bunga melati atau kananga murni untuk meredakan stres, kecemasan, dan insomnia.',
    durations: [
      { min: 60, price: 140000 },
      { min: 90, price: 195000 },
      { min: 120, price: 250000 }
    ],
    intensity: 'Ringan - Halus',
    rating: 5.0,
    reviewsCount: 310,
    benefits: ['Memperbaiki kualitas tidur', 'Menenangkan pikiran tegang', 'Melembutkan kulit tubuh'],
    icon: '🌸',
    popular: true
  },
  {
    id: 'hot-stone',
    name: 'Hot Stone Volcanic Therapy',
    category: 'Penghangat & Energi',
    tagline: 'Kehangatan batu vulkanik hangat untuk mengurai ketegangan',
    description: 'Pemanfaatan batu basalt alami hangat yang diletakkan pada chakra pusat tubuh dikombinasikan dengan usapan pijatan lembut.',
    durations: [
      { min: 90, price: 230000 },
      { min: 120, price: 295000 }
    ],
    intensity: 'Sedang & Hangat',
    rating: 4.9,
    reviewsCount: 96,
    benefits: ['Meredakan nyeri sendi & tulang', 'Sensasi hangat menenangkan', 'Melancarkan aliran getah bening'],
    icon: '🌋',
    popular: false
  },
  {
    id: 'bekam-kerokan',
    name: 'Terapi Bekam Steril & Kerokan Jawa',
    category: 'Pengobatan Tradisional',
    tagline: 'Metode higienis buang angin, masuk angin, dan kolesterol tinggi',
    description: 'Pilihan terapi bekam angin steril disposable / kerokan minyak kelapa murni hangat. Membantu meredakan pegal berat, masuk angin, dan kepala berat.',
    durations: [
      { min: 60, price: 110000 },
      { min: 90, price: 150000 }
    ],
    intensity: 'Sesuaikan Kebutuhan',
    rating: 4.9,
    reviewsCount: 164,
    benefits: ['Mengeluarkan angin & racun', 'Meredakan pusing / leher kaku', 'Menjaga kebersihan & sterilitas 100%'],
    icon: '🍃',
    popular: false
  }
];

const REFLEXOLOGY_POINTS = [
  { id: 'head', title: 'Kepala, Saraf & Otak', area: 'Ujung Jempol Kaki', benefit: 'Meredakan migrain, pusing leher belakang, stres pikiran, dan ketegangan syaraf.', color: 'bg-emerald-500' },
  { id: 'neck', title: 'Leher & Pundak', area: 'Bawah Pangkal Jari Kaki', benefit: 'Mengatasi leher kaku akibat posisi tidur salah atau bekerja di depan komputer.', color: 'bg-teal-500' },
  { id: 'lung', title: 'Paru-paru & Dada', area: 'Bantalan Atas Telapak Kaki', benefit: 'Melancarkan pernapasan, meredakan sesak, dan meningkatkan kapasitas dada.', color: 'bg-green-600' },
  { id: 'stomach', title: 'Lambung & Pencernaan', area: 'Tengah Lengkungan Kaki', benefit: 'Meredakan kembung, asam lambung naik, mual, serta begah masuk angin.', color: 'bg-amber-500' },
  { id: 'kidney', title: 'Ginjal & Kemih', area: 'Tengah Pinggir Dalam', benefit: 'Membantu pengeluaran racun, memulihkan stamina fisik, dan meredakan pegal pinggang.', color: 'bg-emerald-700' },
  { id: 'lumbar', title: 'Pinggang & Saraf Ischias', area: 'Tumit Bagian Bawah', benefit: 'Meredakan nyeri pinggang bawah, bokong kaku, dan nyeri kelelahan berkendara.', color: 'bg-stone-600' }
];

const INITIAL_RESERVATIONS = [
  {
    id: 'ZT-8921',
    customerName: 'Bambang Sukoco',
    phone: '081223344556',
    serviceType: 'Studio',
    area: 'Studio Sriwedari',
    serviceId: 'jawa-kraton',
    serviceName: 'Pijat Jawa Kraton Surakarta',
    duration: 90,
    price: 165000,
    transportFee: 0,
    totalAmount: 165000,
    therapistGender: 'Pria',
    date: '2026-10-08',
    time: '14:00',
    notes: 'Pegal di punggung setelah perjalanan luar kota.',
    status: 'Dikonfirmasi',
    createdAt: '2026-10-07 09:30'
  },
  {
    id: 'ZT-8922',
    customerName: 'Anindya Putri',
    phone: '085799887766',
    serviceType: 'Home Service',
    area: 'Solo Baru & Grogol (+ Rp 20.000)',
    serviceId: 'aromatherapy',
    serviceName: 'Aromaterapi Bunga Melati & Kananga',
    duration: 90,
    price: 195000,
    transportFee: 20000,
    totalAmount: 215000,
    therapistGender: 'Wanita',
    date: '2026-10-08',
    time: '18:30',
    notes: 'Mohon terapis wanita profesional. Hotel Best Western Solo Baru.',
    status: 'Menunggu',
    createdAt: '2026-10-07 11:15'
  }
];

const FAQS = [
  {
    q: 'Apakah ZenTouch Spa melayani pijat panggil (Home / Hotel Service) di Surakarta?',
    a: 'Ya, kami melayani panggilan ke Rumah, Kost, Apartemen, maupun Hotel di seluruh Surakarta (Laweyan, Banjarsari, Jebres, Pasar Kliwon, Serengan, Kartasura, Solo Baru). Terapis kami membawa kelengkapan matras, alas bersih, dan minyak aromatherapy.'
  },
  {
    q: 'Apakah semua terapis profesional dan terstandarisasi?',
    a: '100% Benar. ZenTouch Spa adalah pusat pijat terapi & kesehatan keluarga yang sopan dan profesional. Seluruh terapis telah tersertifikasi dan menerapkan standar etika & kebersihan tinggi.'
  },
  {
    q: 'Bagaimana metode pembayaran di ZenTouch Spa Surakarta?',
    a: 'Kami menerima Pembayaran Tunai (Cash), Transfer Bank (BCA, Mandiri, BRI), serta Scan QRIS (GoPay, OVO, ShopeePay, Dana, LinkAja, Mobile Banking).'
  },
  {
    q: 'Berapa lama estimasi terapis tiba untuk Layanan Home Service?',
    a: 'Terapis kami akan tiba sekitar 30 - 45 menit setelah konfirmasi pesanan WhatsApp disetujui, tergantung pada kondisi lalu lintas wilayah Solo.'
  }
];

const REVIEWS = [
  { name: 'Kurniawan Prasetyo', role: 'Warga Laweyan, Solo', text: 'Pijat Jawa Kraton-nya mantap sekali. Terapis paham titik otot yang kaku. Tempatnya di Sriwedari juga bersih dan harum melati.', rating: 5 },
  { name: 'Dr. Ratna Sari', role: 'Pelanggan Home Service Solo Baru', text: 'Sangat terbantu dengan layanan panggilan ke rumah. Terapis wanita sangat ramah, bawa minyak & kain sendiri. Pijatan leher kaku langsung enteng.', rating: 5 },
  { name: 'Dimas Anggara', role: 'Wisatawan dari Jakarta', text: 'Lagi menginap di Solo, pesan Pijat Refleksi & Bekam via WA. Respon cepat, harga terjangkau dan jujur tanpa biaya tersembunyi.', rating: 5 }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [reservations, setReservations] = useState(() => {
    const saved = localStorage.getItem('zentouch_surakarta_res');
    return saved ? JSON.parse(saved) : INITIAL_RESERVATIONS;
  });

  // Public Booking Form State
  const [bookingForm, setBookingForm] = useState({
    serviceType: 'Studio',
    area: 'Laweyan (Free Transport)',
    serviceId: 'jawa-kraton',
    duration: 90,
    therapistGender: 'Bebas',
    date: new Date().toISOString().split('T')[0],
    time: '14:00',
    customerName: '',
    phone: '',
    notes: '',
    addressDetail: ''
  });

  // Modal Ticket / Confirmation State
  const [bookingSuccessModal, setBookingSuccessModal] = useState(null);
  
  // Public Order Lookup State
  const [lookupCode, setLookupCode] = useState('');
  const [lookupResult, setLookupResult] = useState(null);
  const [lookupAttempted, setLookupAttempted] = useState(false);

  // Admin Controls State
  const [adminFilter, setAdminFilter] = useState('Semua');
  const [adminSearch, setAdminSearch] = useState('');
  const [selectedPoint, setSelectedPoint] = useState(REFLEXOLOGY_POINTS[0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Persist reservations to localStorage
  useEffect(() => {
    localStorage.setItem('zentouch_surakarta_res', JSON.stringify(reservations));
  }, [reservations]);

  // Helpers
  const getService = (id) => SERVICES_DATA.find(s => s.id === id) || SERVICES_DATA[0];

  const currentService = getService(bookingForm.serviceId);
  const currentDurationObj = currentService.durations.find(d => d.min === Number(bookingForm.duration)) || currentService.durations[0];
  const servicePrice = currentDurationObj ? currentDurationObj.price : 0;

  // Calculate Transport Fee
  let transportFee = 0;
  if (bookingForm.serviceType === 'Home Service') {
    if (bookingForm.area.includes('15.000')) transportFee = 15000;
    else if (bookingForm.area.includes('20.000')) transportFee = 20000;
  }

  const grandTotal = servicePrice + transportFee;

  const formatIDR = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

  // Generate Direct WhatsApp URL for booking
  const createWhatsAppBookingURL = (resData) => {
    const text = 
      `*RESERVASI BARU - ZENTOUCH SPA SURAKARTA*\n` +
      `-------------------------------------------\n` +
      `🆔 *Kode Booking:* ${resData.id}\n` +
      `👤 *Nama:* ${resData.customerName}\n` +
      `📱 *No. HP/WA:* ${resData.phone}\n` +
      `📍 *Tipe Layanan:* ${resData.serviceType} ${resData.serviceType === 'Home Service' ? `(${resData.area})` : ''}\n` +
      `${resData.serviceType === 'Home Service' ? `🏠 *Alamat Panggilan:* ${resData.addressDetail}\n` : ''}` +
      `💆 *Paket:* ${resData.serviceName} (${resData.duration} Menit)\n` +
      `👨‍⚕️ *Terapis:* ${resData.therapistGender}\n` +
      `📅 *Tanggal & Jam:* ${resData.date} @ ${resData.time} WIB\n` +
      `💵 *Tarif Layanan:* ${formatIDR(resData.price)}\n` +
      `${resData.transportFee > 0 ? `🚗 *Biaya Transport:* ${formatIDR(resData.transportFee)}\n` : ''}` +
      `💰 *TOTAL BIAYA:* *${formatIDR(resData.totalAmount)}*\n` +
      `📝 *Catatan:* ${resData.notes}\n` +
      `-------------------------------------------\n` +
      `Mohon konfirmasi ketersediaan terapis untuk jadwal ini. Terima kasih!`;

    return `https://wa.me/${WA_PHONE_RAW}?text=${encodeURIComponent(text)}`;
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!bookingForm.customerName || !bookingForm.phone) {
      alert('Mohon isi Nama Lengkap dan Nomor WhatsApp Anda.');
      return;
    }
    if (bookingForm.serviceType === 'Home Service' && !bookingForm.addressDetail) {
      alert('Mohon isi alamat lengkap atau nama hotel tempat panggilan.');
      return;
    }

    const newRes = {
      id: `ZT-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName: bookingForm.customerName,
      phone: bookingForm.phone,
      serviceType: bookingForm.serviceType,
      area: bookingForm.serviceType === 'Home Service' ? bookingForm.area : 'Studio Sriwedari',
      addressDetail: bookingForm.addressDetail || '-',
      serviceId: currentService.id,
      serviceName: currentService.name,
      duration: Number(bookingForm.duration),
      price: servicePrice,
      transportFee: transportFee,
      totalAmount: grandTotal,
      therapistGender: bookingForm.therapistGender,
      date: bookingForm.date,
      time: bookingForm.time,
      notes: bookingForm.notes || 'Tidak ada catatan khusus.',
      status: 'Menunggu',
      createdAt: new Date().toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' })
    };

    setReservations([newRes, ...reservations]);
    setBookingSuccessModal(newRes);
  };

  const handleLookup = (e) => {
    e.preventDefault();
    setLookupAttempted(true);
    const found = reservations.find(r => r.id.trim().toUpperCase() === lookupCode.trim().toUpperCase());
    setLookupResult(found || null);
  };

  const updateReservationStatus = (id, newStatus) => {
    setReservations(reservations.map(r => r.id === id ? { ...r, status: newStatus } : r));
  };

  const deleteReservation = (id) => {
    if (window.confirm(`Hapus reservasi ${id}?`)) {
      setReservations(reservations.filter(r => r.id !== id));
    }
  };

  // Admin stats
  const totalRevenue = reservations.reduce((acc, curr) => acc + (curr.status === 'Selesai' ? curr.totalAmount : 0), 0);
  const totalPending = reservations.filter(r => r.status === 'Menunggu').length;
  const totalConfirmed = reservations.filter(r => r.status === 'Dikonfirmasi').length;

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans flex flex-col antialiased selection:bg-amber-200 selection:text-stone-900">
      
      {/* FLOATING WHATSAPP BUTTON FOR PUBLIC */}
      <a
        href={`https://wa.me/${WA_PHONE_RAW}?text=${encodeURIComponent('Halo ZenTouch Spa Surakarta, saya ingin bertanya mengenai layanan pijat terapi & reservasi.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center space-x-2 border-2 border-emerald-300 group"
        title="Chat WhatsApp Resmi ZenTouch Spa"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="hidden group-hover:inline-block font-bold text-xs pr-1">Chat WhatsApp</span>
      </a>

      {/* TOP EMERGENCY/ANNOUNCEMENT BAR */}
      <div className="bg-emerald-950 text-amber-300 text-xs py-2 px-4 text-center font-medium border-b border-emerald-800/80 flex items-center justify-center space-x-3">
        <span className="inline-flex items-center space-x-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Melayani Pijat Studio Sriwedari & Panggilan (Home/Hotel Service) Surakarta</span>
        </span>
        <span className="hidden sm:inline text-emerald-600">|</span>
        <a href={`tel:${WA_PHONE_RAW}`} className="hidden sm:inline hover:underline font-bold text-white">
          📞 WA Hotline: {WA_PHONE_DISPLAY}
        </a>
      </div>

      {/* MAIN NAVIGATION HEADER */}
      <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md text-stone-100 border-b border-stone-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 to-emerald-600 flex items-center justify-center text-stone-950 shadow-lg font-serif text-xl font-bold">
              ZT
            </div>
            <div>
              <span className="text-xl font-serif font-bold tracking-wider text-amber-400 block">ZEN<span className="text-emerald-400">TOUCH</span></span>
              <span className="text-[10px] text-stone-400 tracking-widest uppercase block -mt-1 font-medium">Spa Surakarta (Solo)</span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { id: 'home', label: 'Beranda' },
              { id: 'services', label: 'Layanan & Tarif' },
              { id: 'booking', label: 'Reservasi Online' },
              { id: 'lookup', label: 'Cek Status Booking' },
              { id: 'education', label: 'Titik Refleksi' },
              { id: 'dashboard', label: 'Akses Staf/Admin', badge: reservations.length }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center space-x-1.5 ${
                  activeTab === tab.id
                    ? 'bg-amber-500 text-stone-950 shadow-md font-bold'
                    : 'text-stone-300 hover:bg-stone-800 hover:text-white'
                }`}
              >
                <span>{tab.label}</span>
                {tab.badge !== undefined && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${activeTab === tab.id ? 'bg-stone-950 text-amber-300' : 'bg-stone-800 text-stone-400'}`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Action Call Header */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`https://wa.me/${WA_PHONE_RAW}?text=${encodeURIComponent('Halo ZenTouch Spa, saya mau langsung booking via WhatsApp.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold transition flex items-center space-x-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WA Quick Booking</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-300 hover:text-white hover:bg-stone-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-stone-900 border-b border-stone-800 px-4 pt-2 pb-6 space-y-2">
            {[
              { id: 'home', label: 'Beranda' },
              { id: 'services', label: 'Layanan & Tarif' },
              { id: 'booking', label: 'Reservasi Online' },
              { id: 'lookup', label: 'Cek Status Booking' },
              { id: 'education', label: 'Peta Titik Refleksi' },
              { id: 'dashboard', label: `Akses Staf Admin (${reservations.length})` }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition ${
                  activeTab === tab.id ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-300 hover:bg-stone-800'
                }`}
              >
                {tab.label}
              </button>
            ))}

            <div className="pt-2 border-t border-stone-800">
              <a
                href={`https://wa.me/${WA_PHONE_RAW}?text=${encodeURIComponent('Halo ZenTouch Spa Surakarta, saya mau pesan via WhatsApp.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold text-xs text-center flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Hubungi via WhatsApp ({WA_PHONE_DISPLAY})</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* CONTENT PAGES */}
      <main className="flex-grow">
        
        {/* TAB 1: HOME LANDING PAGE */}
        {activeTab === 'home' && (
          <div>
            {/* HERO BANNER */}
            <section className="relative bg-gradient-to-b from-stone-950 via-emerald-950 to-stone-900 text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
              <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                  <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-1.5 rounded-full text-xs font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>Resmi Hadir di Sriwedari, Surakarta (Solo)</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-100 leading-tight">
                    Pusat Pijat Terapi & <span className="text-amber-400 underline decoration-amber-500/50 underline-offset-8">Relaksasi Profesional</span> di Surakarta
                  </h1>

                  <p className="text-stone-300 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0 font-light">
                    Nikmati sentuhan pijatan tradisional khas Solo, refleksologi organ, hingga terapi otot mendalam. Melayani kunjungan langsung ke Studio Sriwedari maupun panggilan <strong className="text-emerald-400">Home Service</strong> ke rumah & hotel Anda.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <button
                      onClick={() => setActiveTab('booking')}
                      className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-2xl shadow-xl transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Reservasi Jadwal Sekarang</span>
                    </button>
                    <a
                      href={`https://wa.me/${WA_PHONE_RAW}?text=${encodeURIComponent('Halo ZenTouch Spa Surakarta, saya ingin tanya ketersediaan jadwal hari ini.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-8 py-4 bg-emerald-800/80 hover:bg-emerald-700 text-emerald-100 font-semibold rounded-2xl border border-emerald-600/60 transition flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="w-5 h-5 text-emerald-400" />
                      <span>Chat WA Hotline</span>
                    </a>
                  </div>

                  {/* Trust Highlights */}
                  <div className="pt-8 border-t border-stone-800 grid grid-cols-3 gap-4 text-center lg:text-left">
                    <div>
                      <div className="text-2xl font-bold text-amber-400 font-serif">100%</div>
                      <div className="text-xs text-stone-400">Terapis Terstandar</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-amber-400 font-serif">4.9 ★</div>
                      <div className="text-xs text-stone-400">Rating Warga Solo</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-amber-400 font-serif">2 Jenis</div>
                      <div className="text-xs text-stone-400">Studio & Panggilan</div>
                    </div>
                  </div>
                </div>

                {/* Hero Info Card */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-full max-w-md bg-stone-900/90 rounded-3xl border border-amber-500/30 p-6 sm:p-8 shadow-2xl space-y-6">
                    <div className="flex items-center space-x-4 border-b border-stone-800 pb-4">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl font-serif">
                        🏛️
                      </div>
                      <div>
                        <h3 className="text-lg font-serif font-bold text-stone-100">ZenTouch Studio Solo</h3>
                        <p className="text-xs text-emerald-400">100% Sehat, Sopan & Higienis</p>
                      </div>
                    </div>

                    <div className="space-y-3.5 text-xs">
                      <div className="bg-stone-800/80 p-3.5 rounded-xl border border-stone-700/60 flex items-start space-x-3">
                        <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-stone-200 block mb-0.5">Alamat Studio:</strong>
                          <span className="text-stone-400">{ADDRESS_SURAKARTA}</span>
                        </div>
                      </div>

                      <div className="bg-stone-800/80 p-3.5 rounded-xl border border-stone-700/60 flex items-center justify-between">
                        <span className="text-stone-300 flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-amber-400" />
                          <span>Jam Buka Praktik:</span>
                        </span>
                        <strong className="text-amber-300">08:00 - 22:00 WIB</strong>
                      </div>

                      <div className="bg-stone-800/80 p-3.5 rounded-xl border border-stone-700/60 flex items-center justify-between">
                        <span className="text-stone-300 flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-amber-400" />
                          <span>WhatsApp Official:</span>
                        </span>
                        <strong className="text-emerald-400">{WA_PHONE_DISPLAY}</strong>
                      </div>
                    </div>

                    <div className="bg-emerald-950/60 p-4 rounded-xl border border-emerald-800 text-xs text-emerald-200 space-y-1">
                      <div className="font-bold text-amber-300">📍 Jangkauan Home Service:</div>
                      <div>Banjarsari, Jebres, Laweyan, Pasar Kliwon, Serengan, Kartasura, & Solo Baru.</div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* SERVICE HIGHLIGHTS */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs uppercase tracking-widest font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                  Layanan Favorit
                </span>
                <h2 className="text-3xl font-serif font-bold text-stone-900">Pilihan Terapi Terbaik Khas Solo</h2>
                <p className="text-stone-600 text-sm">
                  Dikombinasikan dengan teknik pijat modern untuk menjaga tubuh selalu segar dan bebas pegal.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {SERVICES_DATA.filter(s => s.popular).map(service => (
                  <div key={service.id} className="bg-white rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
                    <div className="p-6 sm:p-8">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-4xl">{service.icon}</span>
                        <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center space-x-1">
                          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                          <span>{service.rating}</span>
                        </span>
                      </div>

                      <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">{service.name}</h3>
                      <p className="text-xs text-emerald-800 font-medium mb-4">{service.tagline}</p>
                      
                      <div className="space-y-2 mb-6">
                        {service.benefits.map((b, i) => (
                          <div key={i} className="flex items-center text-xs text-stone-700 space-x-2">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-stone-50 p-6 border-t border-stone-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-stone-400 block uppercase tracking-wider">Tarif Mulai</span>
                        <span className="text-lg font-bold text-emerald-900">{formatIDR(service.durations[0].price)}</span>
                      </div>
                      <button
                        onClick={() => {
                          setBookingForm(prev => ({ ...prev, serviceId: service.id }));
                          setActiveTab('booking');
                        }}
                        className="px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition flex items-center space-x-1"
                      >
                        <span>Pesan</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* TESTIMONIALS & FAQS */}
            <section className="bg-stone-100 py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center max-w-2xl mx-auto">
                  <h2 className="text-3xl font-serif font-bold text-stone-900">Ulasan & Pertanyaan Umum</h2>
                  <p className="text-stone-600 text-sm mt-1">Kepercayaan warga Solo dan wisatawan adalah kebanggaan kami.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {REVIEWS.map((rev, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-stone-200/80 space-y-3 shadow-sm">
                      <div className="flex text-amber-400">
                        {[...Array(rev.rating)].map((_, idx) => (
                          <Star key={idx} className="w-4 h-4 fill-amber-400" />
                        ))}
                      </div>
                      <p className="text-xs text-stone-700 italic leading-relaxed">"{rev.text}"</p>
                      <div className="pt-2 border-t border-stone-100">
                        <strong className="text-xs text-stone-900 block">{rev.name}</strong>
                        <span className="text-[10px] text-emerald-700">{rev.role}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm max-w-4xl mx-auto space-y-6">
                  <h3 className="text-xl font-serif font-bold text-stone-900 flex items-center space-x-2">
                    <HelpCircle className="w-5 h-5 text-emerald-700" />
                    <span>FAQ - Pertanyaan Umum Publik</span>
                  </h3>

                  <div className="space-y-4">
                    {FAQS.map((f, i) => (
                      <div key={i} className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80 space-y-1">
                        <h4 className="text-sm font-bold text-stone-900">Q: {f.q}</h4>
                        <p className="text-xs text-stone-600 leading-relaxed">A: {f.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: KATALOG LAYANAN & TARIF */}
        {activeTab === 'services' && (
          <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                Transparan & Terjangkau
              </span>
              <h2 className="text-3xl font-serif font-bold text-stone-900">Katalog Layanan & Daftar Tarif</h2>
              <p className="text-stone-600 text-sm">
                Harga berlaku sama untuk kunjungan Studio. Untuk Layanan Home Service terdapat penyesuaian biaya transport zona Surakarta.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES_DATA.map(service => (
                <div key={service.id} className="bg-white rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition flex flex-col justify-between overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl p-2 bg-stone-100 rounded-2xl">{service.icon}</span>
                      <span className="text-xs bg-emerald-50 text-emerald-800 font-semibold px-3 py-1 rounded-full border border-emerald-200">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-stone-900 mb-1">{service.name}</h3>
                    <p className="text-xs font-semibold text-amber-700 mb-3">{service.tagline}</p>
                    <p className="text-stone-600 text-xs leading-relaxed mb-6">{service.description}</p>

                    <div className="space-y-2 mb-6">
                      <div className="text-xs font-bold text-stone-800">Manfaat Utama:</div>
                      {service.benefits.map((b, i) => (
                        <div key={i} className="flex items-center text-xs text-stone-600 space-x-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-stone-50 p-6 border-t border-stone-100 space-y-4">
                    <div className="space-y-2">
                      <div className="text-xs text-stone-500 font-bold uppercase tracking-wider">Tarif Sesi Terapi:</div>
                      <div className="grid grid-cols-3 gap-2">
                        {service.durations.map((d, i) => (
                          <div key={i} className="bg-white p-2.5 rounded-xl border border-stone-200 text-center">
                            <div className="text-xs font-bold text-stone-800">{d.min} Menit</div>
                            <div className="text-xs font-bold text-emerald-800 mt-0.5">{formatIDR(d.price)}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setBookingForm(prev => ({ ...prev, serviceId: service.id }));
                        setActiveTab('booking');
                      }}
                      className="w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition flex items-center justify-center space-x-2"
                    >
                      <span>Pilih & Booking Online</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: FORMULIR RESERVASI ONLINE */}
        {activeTab === 'booking' && (
          <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                Pemesanan Langsung
              </span>
              <h2 className="text-3xl font-serif font-bold text-stone-900">Formulir Reservasi Janji Temu</h2>
              <p className="text-stone-600 text-sm">
                Isi formulir di bawah ini. Tiket pemesanan digital akan otomatis terbentuk dan siap dikirim via WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Form Input */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
                <form onSubmit={handleBookingSubmit} className="space-y-5">
                  
                  {/* Service Location Type */}
                  <div>
                    <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                      1. Tempat Layanan Pijat
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setBookingForm({ ...bookingForm, serviceType: 'Studio' })}
                        className={`p-3.5 rounded-2xl border text-left flex items-center space-x-3 transition ${
                          bookingForm.serviceType === 'Studio'
                            ? 'bg-emerald-950 text-white border-emerald-950 font-bold shadow-md'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        <Building className="w-5 h-5 text-amber-400" />
                        <div>
                          <div className="text-xs">Datang ke Studio</div>
                          <div className="text-[10px] opacity-75">Sriwedari, Laweyan</div>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setBookingForm({ ...bookingForm, serviceType: 'Home Service' })}
                        className={`p-3.5 rounded-2xl border text-left flex items-center space-x-3 transition ${
                          bookingForm.serviceType === 'Home Service'
                            ? 'bg-emerald-950 text-white border-emerald-950 font-bold shadow-md'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        <Home className="w-5 h-5 text-amber-400" />
                        <div>
                          <div className="text-xs">Panggilan / Home Service</div>
                          <div className="text-[10px] opacity-75">Rumah / Kost / Hotel</div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Area Selection for Home Service */}
                  {bookingForm.serviceType === 'Home Service' && (
                    <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200 space-y-3">
                      <label className="block text-xs font-bold text-amber-900 uppercase tracking-wider">
                        Pilih Wilayah Panggilan Surakarta:
                      </label>
                      <select
                        value={bookingForm.area}
                        onChange={(e) => setBookingForm({ ...bookingForm, area: e.target.value })}
                        className="w-full p-3 bg-white border border-amber-300 rounded-xl text-xs font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      >
                        {SOLO_AREAS.map(a => (
                          <option key={a} value={a}>{a}</option>
                        ))}
                      </select>

                      <textarea
                        rows={2}
                        placeholder="Alamat Lengkap / Nama Hotel & No. Kamar (Contoh: Hotel Novotel Solo, Kamar 304)"
                        value={bookingForm.addressDetail}
                        onChange={(e) => setBookingForm({ ...bookingForm, addressDetail: e.target.value })}
                        className="w-full p-3 bg-white border border-amber-300 rounded-xl text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                        required
                      />
                    </div>
                  )}

                  {/* Service Package */}
                  <div>
                    <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                      2. Pilih Paket Pijat Terapi
                    </label>
                    <select
                      value={bookingForm.serviceId}
                      onChange={(e) => {
                        const sId = e.target.value;
                        const s = getService(sId);
                        setBookingForm({
                          ...bookingForm,
                          serviceId: sId,
                          duration: s.durations[0].min
                        });
                      }}
                      className="w-full p-3.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    >
                      {SERVICES_DATA.map(s => (
                        <option key={s.id} value={s.id}>{s.name} ({s.category})</option>
                      ))}
                    </select>
                  </div>

                  {/* Duration Buttons */}
                  <div>
                    <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                      3. Sesi Durasi
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {currentService.durations.map(d => (
                        <button
                          type="button"
                          key={d.min}
                          onClick={() => setBookingForm({ ...bookingForm, duration: d.min })}
                          className={`p-3 rounded-xl border text-center transition ${
                            Number(bookingForm.duration) === d.min
                              ? 'bg-amber-500 text-stone-950 border-amber-500 font-bold shadow'
                              : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                          }`}
                        >
                          <div className="text-xs font-bold">{d.min} Menit</div>
                          <div className="text-[10px] opacity-80 mt-0.5">{formatIDR(d.price)}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Therapist Gender */}
                  <div>
                    <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                      4. Preferensi Terapis
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {['Bebas', 'Pria', 'Wanita'].map(gender => (
                        <button
                          type="button"
                          key={gender}
                          onClick={() => setBookingForm({ ...bookingForm, therapistGender: gender })}
                          className={`p-2.5 rounded-xl border text-center text-xs font-semibold transition ${
                            bookingForm.therapistGender === gender
                              ? 'bg-emerald-900 text-white border-emerald-900 font-bold'
                              : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                          }`}
                        >
                          Terapis {gender}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                        5. Tanggal Kedatangan
                      </label>
                      <input
                        type="date"
                        value={bookingForm.date}
                        onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                        className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl text-xs font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                        6. Jam Pertemuan
                      </label>
                      <select
                        value={bookingForm.time}
                        onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                        className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl text-xs font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      >
                        {['08:30', '10:00', '11:30', '13:00', '14:30', '16:00', '17:30', '19:00', '20:30'].map(t => (
                          <option key={t} value={t}>{t} WIB</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Customer Info */}
                  <div className="space-y-3 pt-2">
                    <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                      7. Data Pelanggan
                    </label>
                    <input
                      type="text"
                      placeholder="Nama Lengkap Anda"
                      value={bookingForm.customerName}
                      onChange={(e) => setBookingForm({ ...bookingForm, customerName: e.target.value })}
                      className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Nomor WhatsApp (misal: 089562221665004)"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      required
                    />
                    <textarea
                      rows={2}
                      placeholder="Catatan khusus keluhan tubuh (Contoh: Nyeri bahu kanan kaku, pegal betis)"
                      value={bookingForm.notes}
                      onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                      className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-2xl shadow-lg transition flex items-center justify-center space-x-2 text-sm"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Buat Tiket Reservasi Digital</span>
                  </button>
                </form>
              </div>

              {/* Order Summary Side Card */}
              <div className="lg:col-span-5">
                <div className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-8 shadow-xl sticky top-28 space-y-6 border border-stone-800">
                  <h3 className="text-xl font-serif font-bold text-amber-400 border-b border-stone-800 pb-3 flex items-center justify-between">
                    <span>Rincian Biaya</span>
                    <span className="text-xs text-stone-400 font-sans font-normal">Surakarta</span>
                  </h3>

                  <div className="space-y-3.5 text-xs">
                    <div className="flex justify-between items-start">
                      <span className="text-stone-400">Pilihan Layanan:</span>
                      <span className="font-semibold text-right text-stone-100 max-w-[180px]">{currentService.name}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-stone-400">Durasi Sesi:</span>
                      <span className="font-semibold text-stone-100">{bookingForm.duration} Menit</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-stone-400">Tipe & Lokasi:</span>
                      <span className="font-semibold text-amber-300">{bookingForm.serviceType}</span>
                    </div>

                    {bookingForm.serviceType === 'Home Service' && (
                      <div className="flex justify-between">
                        <span className="text-stone-400">Wilayah Panggilan:</span>
                        <span className="font-semibold text-stone-100">{bookingForm.area}</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span className="text-stone-400">Terapis:</span>
                      <span className="font-semibold text-stone-100">Terapis {bookingForm.therapistGender}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-stone-400">Jadwal Janji:</span>
                      <span className="font-semibold text-stone-100">{bookingForm.date} @ {bookingForm.time} WIB</span>
                    </div>

                    <div className="border-t border-stone-800 pt-3 space-y-1.5">
                      <div className="flex justify-between text-stone-400">
                        <span>Biaya Terapi:</span>
                        <span>{formatIDR(servicePrice)}</span>
                      </div>
                      {transportFee > 0 && (
                        <div className="flex justify-between text-stone-400">
                          <span>Transport Panggilan:</span>
                          <span>{formatIDR(transportFee)}</span>
                        </div>
                      )}
                      <div className="flex justify-between items-center text-sm font-bold pt-2 border-t border-stone-800">
                        <span className="text-amber-400">TOTAL BIAYA:</span>
                        <span className="text-2xl font-serif text-amber-400">{formatIDR(grandTotal)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-stone-800/80 p-4 rounded-xl text-[11px] text-stone-300 space-y-1 border border-stone-700">
                    <div className="font-bold text-emerald-400">💳 Bebas Pilih Pembayaran:</div>
                    <div>Bayar setelah sesi selesai via QRIS, Transfer Bank, atau Cash langsung ke terapis.</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 4: CEK STATUS RESERVASI PUBLIK */}
        {activeTab === 'lookup' && (
          <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                Layanan Publik
              </span>
              <h2 className="text-3xl font-serif font-bold text-stone-900">Cek Status Reservasi Anda</h2>
              <p className="text-stone-600 text-sm">
                Masukkan Kode Booking (contoh: <strong className="text-emerald-800">ZT-8921</strong>) untuk mengecek status konfirmasi jadwal Anda.
              </p>
            </div>

            <form onSubmit={handleLookup} className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Masukkan Kode Booking (ZT-XXXX)..."
                value={lookupCode}
                onChange={(e) => setLookupCode(e.target.value)}
                className="flex-grow p-3.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-bold text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                required
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-2"
              >
                <Search className="w-4 h-4" />
                <span>Cari Pesanan</span>
              </button>
            </form>

            {lookupAttempted && (
              lookupResult ? (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-emerald-200 shadow-md space-y-6">
                  <div className="flex justify-between items-center border-b border-stone-100 pb-4">
                    <div>
                      <span className="text-xs text-stone-400 block">Kode Reservasi:</span>
                      <strong className="text-2xl font-serif text-emerald-900">{lookupResult.id}</strong>
                    </div>
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                      lookupResult.status === 'Menunggu' ? 'bg-amber-100 text-amber-800' :
                      lookupResult.status === 'Dikonfirmasi' ? 'bg-blue-100 text-blue-800' :
                      lookupResult.status === 'Selesai' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                    }`}>
                      {lookupResult.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-stone-400 block">Nama Pelanggan:</span>
                      <strong className="text-stone-800 text-sm">{lookupResult.customerName}</strong>
                    </div>
                    <div>
                      <span className="text-stone-400 block">Nomor HP/WA:</span>
                      <strong className="text-stone-800">{lookupResult.phone}</strong>
                    </div>
                    <div>
                      <span className="text-stone-400 block">Paket Layanan:</span>
                      <strong className="text-emerald-800">{lookupResult.serviceName} ({lookupResult.duration} Menit)</strong>
                    </div>
                    <div>
                      <span className="text-stone-400 block">Jadwal Janji Temu:</span>
                      <strong className="text-stone-800">{lookupResult.date} @ {lookupResult.time} WIB</strong>
                    </div>
                    <div>
                      <span className="text-stone-400 block">Tipe Layanan:</span>
                      <strong className="text-stone-800">{lookupResult.serviceType} ({lookupResult.area})</strong>
                    </div>
                    <div>
                      <span className="text-stone-400 block">Total Biaya:</span>
                      <strong className="text-stone-900 text-sm">{formatIDR(lookupResult.totalAmount)}</strong>
                    </div>
                  </div>

                  <a
                    href={createWhatsAppBookingURL(lookupResult)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Konfirmasi via WhatsApp hotline ({WA_PHONE_DISPLAY})</span>
                  </a>
                </div>
              ) : (
                <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 text-center space-y-2">
                  <p className="text-amber-900 text-sm font-bold">Kode booking tidak ditemukan.</p>
                  <p className="text-amber-800 text-xs">Pastikan Anda memasukkan kode yang benar seperti "ZT-8921" atau langsung chat WhatsApp hotline kami.</p>
                </div>
              )
            )}
          </div>
        )}

        {/* TAB 5: EDUKASI TITIK REFLEKSI */}
        {activeTab === 'education' && (
          <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                Panduan Terapi Kesehatan
              </span>
              <h2 className="text-3xl font-serif font-bold text-stone-900">Peta Titik Refleksi Telapak Kaki</h2>
              <p className="text-stone-600 text-sm">
                Pelajari hubungan stimulasi saraf telapak kaki dengan pemulihan kesehatan organ tubuh Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-10 rounded-3xl border border-stone-200 shadow-sm">
              <div className="lg:col-span-6 flex flex-col items-center">
                <div className="relative w-80 h-[420px] bg-stone-100 rounded-3xl border-2 border-dashed border-stone-300 p-6 flex flex-col justify-between items-center shadow-inner">
                  <div className="text-xs font-bold text-stone-400 uppercase tracking-widest">Zona Refleksi Kaki</div>

                  <div className="w-full space-y-2.5 my-auto">
                    {REFLEXOLOGY_POINTS.map((pt) => (
                      <button
                        key={pt.id}
                        onClick={() => setSelectedPoint(pt)}
                        className={`w-full py-2.5 px-3.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all ${
                          selectedPoint.id === pt.id
                            ? 'bg-emerald-950 text-white shadow-md scale-105'
                            : 'bg-white hover:bg-emerald-50 text-stone-700 border border-stone-200'
                        }`}
                      >
                        <span className="flex items-center space-x-2">
                          <span className={`w-3 h-3 rounded-full ${pt.color}`}></span>
                          <span>{pt.title}</span>
                        </span>
                        <span className="text-[10px] text-stone-400">{pt.area}</span>
                      </button>
                    ))}
                  </div>

                  <div className="text-[11px] text-stone-400">Klik titik untuk detail manfaat</div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className={`w-4 h-4 rounded-full ${selectedPoint.color}`}></span>
                    <h3 className="text-2xl font-serif font-bold text-stone-900">{selectedPoint.title}</h3>
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Lokasi Saraf Telapak:</div>
                    <div className="text-xs font-semibold text-stone-800 bg-white p-3 rounded-xl border border-stone-200">
                      📍 {selectedPoint.area}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Manfaat Kesehatan Terapi:</div>
                    <p className="text-xs text-stone-700 leading-relaxed bg-white p-4 rounded-xl border border-stone-200">
                      {selectedPoint.benefit}
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-950 text-emerald-100 p-5 rounded-2xl border border-emerald-900 space-y-2">
                  <h4 className="text-sm font-serif font-bold text-amber-400">Ingin Mengatasi Nyeri Tubuh Anda Hari Ini?</h4>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Sampaikan keluhan fisik Anda saat membuat reservasi. Terapis kami akan memfokuskan pemijatan pada titik meridian terkait.
                  </p>
                  <button
                    onClick={() => setActiveTab('booking')}
                    className="mt-2 px-4 py-2 bg-amber-500 text-stone-950 font-bold rounded-xl text-xs"
                  >
                    Booking Sesi Refleksi
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: DASHBOARD AKSES STAF/ADMIN */}
        {activeTab === 'dashboard' && (
          <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                  Area Internal Staf
                </span>
                <h2 className="text-3xl font-serif font-bold text-stone-900 mt-2">Dashboard Operasional ZenTouch Solo</h2>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-stone-500">Staf Hotline: {WA_PHONE_DISPLAY}</span>
              </div>
            </div>

            {/* Admin Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-400 block">Total Reservasi</span>
                  <strong className="text-2xl font-serif text-stone-900">{reservations.length} Orders</strong>
                </div>
                <FileText className="w-8 h-8 text-emerald-700" />
              </div>

              <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-400 block">Menunggu Konfirmasi</span>
                  <strong className="text-2xl font-serif text-amber-600">{totalPending} Antrean</strong>
                </div>
                <Clock className="w-8 h-8 text-amber-500" />
              </div>

              <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-400 block">Pendapatan Selesai</span>
                  <strong className="text-2xl font-serif text-emerald-900">{formatIDR(totalRevenue)}</strong>
                </div>
                <TrendingUp className="w-8 h-8 text-emerald-600" />
              </div>
            </div>

            {/* Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-stone-200">
              <div className="flex items-center space-x-2 overflow-x-auto w-full sm:w-auto">
                {['Semua', 'Menunggu', 'Dikonfirmasi', 'Selesai', 'Dibatalkan'].map(st => (
                  <button
                    key={st}
                    onClick={() => setAdminFilter(st)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                      adminFilter === st ? 'bg-stone-900 text-white font-bold' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Cari nama / kode..."
                  value={adminSearch}
                  onChange={(e) => setAdminSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>
            </div>

            {/* Reservations Table */}
            <div className="space-y-4">
              {reservations
                .filter(r => adminFilter === 'Semua' || r.status === adminFilter)
                .filter(r => r.customerName.toLowerCase().includes(adminSearch.toLowerCase()) || r.id.toLowerCase().includes(adminSearch.toLowerCase()))
                .map(res => (
                  <div key={res.id} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-3 gap-2">
                      <div className="flex items-center space-x-3">
                        <strong className="text-lg font-serif text-emerald-900">{res.id}</strong>
                        <span className={`text-[11px] font-bold px-3 py-0.5 rounded-full ${
                          res.status === 'Menunggu' ? 'bg-amber-100 text-amber-800' :
                          res.status === 'Dikonfirmasi' ? 'bg-blue-100 text-blue-800' :
                          res.status === 'Selesai' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                        }`}>
                          {res.status}
                        </span>
                      </div>
                      <span className="text-xs text-stone-400">Diorder: {res.createdAt}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                      <div>
                        <span className="text-stone-400 block mb-0.5">Pelanggan:</span>
                        <strong className="text-stone-900 text-sm block">{res.customerName}</strong>
                        <span className="text-stone-500">{res.phone}</span>
                      </div>

                      <div>
                        <span className="text-stone-400 block mb-0.5">Layanan & Terapis:</span>
                        <strong className="text-stone-800 block">{res.serviceName} ({res.duration} Min)</strong>
                        <span className="text-emerald-700 font-semibold">{res.serviceType} ({res.area})</span>
                      </div>

                      <div>
                        <span className="text-stone-400 block mb-0.5">Jadwal & Total:</span>
                        <strong className="text-stone-900 block">{res.date} @ {res.time} WIB</strong>
                        <strong className="text-emerald-900 text-sm block mt-0.5">{formatIDR(res.totalAmount)}</strong>
                      </div>
                    </div>

                    {res.notes && (
                      <div className="bg-stone-50 p-3 rounded-xl text-xs text-stone-600 border border-stone-200">
                        <strong>Catatan:</strong> {res.notes} {res.addressDetail !== '-' && `| Alamat: ${res.addressDetail}`}
                      </div>
                    )}

                    <div className="flex flex-wrap items-center justify-between pt-2 gap-3 border-t border-stone-100">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-stone-400">Status:</span>
                        {['Menunggu', 'Dikonfirmasi', 'Selesai', 'Dibatalkan'].map(st => (
                          <button
                            key={st}
                            onClick={() => updateReservationStatus(res.id, st)}
                            disabled={res.status === st}
                            className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition ${
                              res.status === st ? 'bg-stone-900 text-white' : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                            }`}
                          >
                            {st}
                          </button>
                        ))}
                      </div>

                      <div className="flex items-center space-x-2">
                        <a
                          href={createWhatsAppBookingURL(res)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-xl text-xs font-bold flex items-center space-x-1"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Kirim WA Konfirmasi</span>
                        </a>
                        <button
                          onClick={() => deleteReservation(res.id)}
                          className="p-1.5 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

      </main>

      {/* MODAL TICKET TIKET CONFIRMATION */}
      {bookingSuccessModal && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white max-w-lg w-full rounded-3xl shadow-2xl border border-emerald-300 p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in duration-200">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto text-3xl font-serif">
                ✓
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900">Struk Tiket Booking Digital</h3>
              <p className="text-xs text-stone-500">
                ZenTouch Spa Surakarta - Kode Booking: <strong className="text-emerald-800 font-serif text-sm">{bookingSuccessModal.id}</strong>
              </p>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs space-y-2.5">
              <div className="flex justify-between border-b border-stone-200 pb-2">
                <span className="text-stone-500">Nama Pelanggan:</span>
                <strong className="text-stone-900">{bookingSuccessModal.customerName}</strong>
              </div>
              <div className="flex justify-between border-b border-stone-200 pb-2">
                <span className="text-stone-500">Layanan Pijat:</span>
                <strong className="text-emerald-800">{bookingSuccessModal.serviceName} ({bookingSuccessModal.duration} Min)</strong>
              </div>
              <div className="flex justify-between border-b border-stone-200 pb-2">
                <span className="text-stone-500">Jadwal Pertemuan:</span>
                <strong className="text-stone-900">{bookingSuccessModal.date} @ {bookingSuccessModal.time} WIB</strong>
              </div>
              <div className="flex justify-between border-b border-stone-200 pb-2">
                <span className="text-stone-500">Tipe & Lokasi:</span>
                <strong className="text-stone-900">{bookingSuccessModal.serviceType} ({bookingSuccessModal.area})</strong>
              </div>
              <div className="flex justify-between pt-1 text-sm font-bold">
                <span className="text-stone-700">Total Tagihan:</span>
                <span className="text-emerald-900 font-serif text-lg">{formatIDR(bookingSuccessModal.totalAmount)}</span>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={createWhatsAppBookingURL(bookingSuccessModal)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold text-xs flex items-center justify-center space-x-2 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Kirim Tiket Ini Langsung ke WA Official ({WA_PHONE_DISPLAY})</span>
              </a>

              <button
                onClick={() => setBookingSuccessModal(null)}
                className="w-full py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl font-semibold text-xs"
              >
                Tutup Struk
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-stone-950 text-stone-400 border-t border-stone-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-xs">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-xl bg-amber-500 flex items-center justify-center text-stone-950 font-serif font-bold text-sm">
                ZT
              </div>
              <span className="text-lg font-serif font-bold text-stone-100">ZenTouch Surakarta</span>
            </div>
            <p className="leading-relaxed text-stone-400">
              Pusat pijat kesehatan keluarga & terapi tradisional Jawa Kraton terpercaya di Surakarta (Solo).
            </p>
          </div>

          <div>
            <h4 className="text-stone-200 font-bold mb-3">Wilayah Panggilan Home Service</h4>
            <ul className="space-y-1.5 text-stone-400">
              <li>Laweyan & Sriwedari</li>
              <li>Banjarsari & Jebres</li>
              <li>Pasar Kliwon & Serengan</li>
              <li>Kartasura, Colomadu & Solo Baru</li>
            </ul>
          </div>

          <div>
            <h4 className="text-stone-200 font-bold mb-3">Jam Operasional & Kontak</h4>
            <p className="leading-relaxed text-stone-400 space-y-1">
              <div>Buka Setiap Hari: 08:00 - 22:00 WIB</div>
              <div>Hotline WA: <strong className="text-emerald-400">{WA_PHONE_DISPLAY}</strong></div>
              <div>Layanan 100% Pijat Sehat & Sopan</div>
            </p>
          </div>

          <div>
            <h4 className="text-stone-200 font-bold mb-3">Alamat Studio</h4>
            <p className="leading-relaxed text-stone-400">
              {ADDRESS_SURAKARTA}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-stone-800 pt-6 text-center text-[11px] text-stone-500">
          © {new Date().getFullYear()} ZenTouch Spa Surakarta. All Rights Reserved. Siap Dipublikasikan untuk Umum.
        </div>
      </footer>

    </div>
  );
}