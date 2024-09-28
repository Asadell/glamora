import { calendar, health, line1Beranda, line2Beranda, line3Beranda, shapes } from "../assets";

export const NAV_LIST = [
  {
    id: '0',
    title: 'Beranda',
    url: '/'
  },
  {
    id: '1',
    title: 'Fitur',
    url: '/fitur'
  },
  {
    id: '2',
    title: 'Survey',
    url: '/survey'
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
