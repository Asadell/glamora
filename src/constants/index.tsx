import { analisisGif, calendar, gaya1Analysis, gaya2Analysis, gaya3Analysis, health, kacamata1Analysis, kacamata2Analysis, kacamata3Analysis, kacamata4Analysis, kosmetik1Analysis, kosmetik2Analysis, kosmetik3Analysis, line1Beranda, line2Beranda, line3Beranda, progressGif, rekomendasi1Analysis, rekomendasi2Analysis, rekomendasi3Analysis, rekomendasi4Analysis, shape1KarakterAnalysis, shape1KondisiAnalysis, shape2KarakterAnalysis, shape2KondisiAnalysis, shape3KarakterAnalysis, shape3KondisiAnalysis, shape4KarakterAnalysis, shape4KondisiAnalysis, shapes, virtualGif } from "../assets";

export const NAV_LIST = [
  {
    id: '1',
    title: 'Analisis Wajah',
    url: '/analisis'
  },
  {
    id: '2',
    title: 'Progress Tracking',
    url: '/progress'
  },
  {
    id: '3',
    title: 'Virtual Try-on',
    url: '/virtual'
  },
];

export const INFO_BOX_BERANDA = [
  {
    icon: health,
    alt: 'Health',
    title: 'Rekomendasi Kandungan',
    text: 'Hyaluronic acid',
    bottom: 320,
    right: 0,
    left: 200,
  },
  {
    icon: shapes,
    alt: 'Shapes',
    title: 'Bentuk Wajah',
    text: 'Bulat',
    bottom: 346,
    right: 224,
    left: 0,
  },
  {
    icon: calendar,
    alt: 'Calendar',
    title: 'Usia Kulit',
    text: '20 tahun',
    bottom: 161,
    right: 282,
    left: 0,
  },
];

export const LINE_INFO_BOX_BERANDA = [
  {
    icon: line1Beranda,
    bottom: 256,
    right: 0,
    left: 409,
  },
  {
    icon: line2Beranda,
    bottom: 298,
    right: 350,
    left: 0,
  },
  {
    icon: line3Beranda,
    bottom: 186,
    right: 337,
    left: 0,
  },
];

export const ABOUT_INFO_LIST = [
  {
    text: 'Memberikan Solusi Kecantikan yang Tepat',
  },
  {
    text: 'Mendorong Kesadaran dan Pemahaman Diri',
  },
  {
    text: 'Menghadirkan Pengalaman Kecantikan Interaktif',
  },
];

export const FEATURE_BERANDA_LIST = [
  {
    isFeature: false,
    title: 'Fitur Utama',
    text: 'Kira-kira fitur apa aja ya yang tersedia di Glamora? Yuk, kepoin!',
    image: '',
  },
  {
    isFeature: true,
    title: 'Analisis Wajah',
    text: 'Ketahui bentuk wajah dan kondisi kulit untuk menemukan gaya dan perawatan yang sesuai.',
    image: analisisGif,
  },
  {
    isFeature: true,
    title: 'Progress Tracking',
    text: 'Lacak perkembangan kondisi kulitmu seiring waktu untuk mencapai hasil yang diinginkan.',
    image: progressGif,
  },
  {
    isFeature: true,
    title: 'Virtual Try-on',
    text: 'Dengan teknologi AR, coba berbagai gaya makeup, rambut, atau aksesoris secara virtual.',
    image: virtualGif,
  },
];

export const ANALISIS_WAJAH_LIST = [
  {
    title: 'Karakter Wajah',
    subtitle: 'Gaya yang cocok di kamu, nih!',
    text: 'Pilih gaya rambut layer panjang atau bob pendek, kacamata persegi, dan makeup dengan warna peach atau coral. Contouring di pipi dan rahang menambah definisi, dan anting panjang yang melengkapi tampilan.',
    data: [
      {
        image: shape1KarakterAnalysis,
        shapeType: 'Bentuk',
        shapeName: 'Oval',
      },
      {
        image: shape2KarakterAnalysis,
        shapeType: 'Undertone',
        shapeName: 'Hangat',
      },
      {
        image: shape3KarakterAnalysis,
        shapeType: 'Tekstur',
        shapeName: 'Halus',
      },
      {
        image: shape4KarakterAnalysis,
        shapeType: 'Proporsi',
        shapeName: 'Ideal',
      },
    ],
  },
  {
    title: 'Kondisi Kulit',
    subtitle: 'Ini dia perawatan khusus untukmu!',
    text: 'Kandungan hyaluronic acid dan glycerin baik untuk meningkatkan hidrasi, serta minyak jojoba untuk melembapkan.  Konsumsi makanan kaya omega-3 dan buah-buahan untuk mendukung kelembapan dari dalam.',
    data: [
      {
        image: shape1KondisiAnalysis,
        shapeType: 'Tipe',
        shapeName: 'Normal',
      },
      {
        image: shape2KondisiAnalysis,
        shapeType: 'kelembapan',
        shapeName: 'Kering',
      },
      {
        image: shape3KondisiAnalysis,
        shapeType: 'Sebum',
        shapeName: 'Kurang',
      },
      {
        image: shape4KondisiAnalysis,
        shapeType: 'Pori-pori',
        shapeName: 'Kecil',
      },
    ],
  },
];

export const REKOMENDASI_KANDUNGAN_LIST = [
  {
    image: rekomendasi1Analysis,
    title: 'Hyaluronic Acid',
    text: 'Meningkatkan hidrasi kulit dengan mengikat air dan menjaga kelembapan.',
  },
  {
    image: rekomendasi2Analysis,
    title: 'Ceramide',
    text: 'Meningkatkan kekuatan lapisan pelindung kulit dan mencegah kehilangan air.',
  },
  {
    image: rekomendasi3Analysis,
    title: 'Glycerin',
    text: 'Meningkatkan kandungan air dalam kulit dengan menarik kelembapan dari lingkungan.',
  },
  {
    image: rekomendasi4Analysis,
    title: 'Squalane',
    text: 'Meningkatkan kelembapan alami, cocok untuk kulit dengan sebum yang kurang.',
  },
];

export const REKOMENDASI_KACAMATA_LIST = [
  {
    image: kacamata1Analysis,
    title: 'Wayfarer',
    text: 'Bentuknya yang klasik dan sedikit persegi menyeimbangkan fitur wajah oval.',
  },
  {
    image: kacamata2Analysis,
    title: 'Aviator',
    text: 'Desain teardrop yang  melengkapi proporsi wajah oval memberikan tampilan kasual.',
  },
  {
    image: kacamata3Analysis,
    title: 'Round',
    text: 'Bingkai bulat menonjolkan kehalusan fitur wajah oval, cocok untuk tampilan vintage atau edgy.',
  },
  {
    image: kacamata4Analysis,
    title: 'Cat-Eye',
    text: 'Bingkai dengan sudut melengkung  ini memberikan sentuhan feminin dan mempertegas garis wajah oval.',
  },
];

export const KOSMETIK_LIST = [
  {
    title: 'Foundation Warna Hangat',
    text: 'Pilih foundation dengan undertone kuning, peach, atau emas untuk menyatu dengan warna kulit alami.',
    image: kosmetik1Analysis,
  },
  {
    title: 'Blush dan Bronzer',
    text: 'Warna peach, coral, atau terracotta cocok untuk memberikan rona dan menonjolkan kehangatan.',
    image: kosmetik2Analysis,
  },
  {
    title: 'Lipstik Nude',
    text: 'Pilih warna nude hangat, cokelat, atau merah bata yang melengkapi undertone hangat tampak alami.',
    image: kosmetik3Analysis,
  },
];

export const GAYA_RAMBUT_LIST = [
  {
    title: 'Layer Panjang',
    text: 'Menonjolkan bentuk wajah oval secara alami dengan memberikan dimensi dan gerakan pada rambut.',
    image: gaya1Analysis,
  },
  {
    title: 'Bob Pendek',
    text: 'Potongan ini membingkai wajah dengan baik, memberikan kesan modern dan stylish.',
    image: gaya2Analysis,
  },
  {
    title: 'Beachy Waves',
    text: 'Gelombang lembut yang menambahkan volume dan tekstur, cocok untuk  proporsi wajah oval.',
    image: gaya3Analysis,
  },
];
