import { analisisGif, calendar, health, line1Beranda, line2Beranda, line3Beranda, progressGif, shapes, virtualGif } from "../assets";

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
