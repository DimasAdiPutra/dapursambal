export type SpicyLevel = 1 | 2 | 3 | 4 | 5;

export interface SambalProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  spicyLevel: SpicyLevel;
  isBestSeller: boolean;
  image: string;
  weight: string;
}

export interface CateringPackage {
  id: string;
  name: string;
  description: string;
  price: number;
  minOrder: number;
  image: string;
  items: string[];
}

export const sambalProducts: SambalProduct[] = [
  {
    id: "sambal-terasi-legenda",
    name: "Sambal Terasi Legenda",
    description: "Sambal terasi resep turun-temurun dengan aroma terasi bakar khas dan sensasi pedas mantap.",
    price: 35000,
    spicyLevel: 4,
    isBestSeller: true,
    image: "/images/products/sambal-terasi.webp",
    weight: "150g",
  },
  {
    id: "sambal-bawang-gurih",
    name: "Sambal Bawang Gurih",
    description: "Paduan cabai rawit merah segar dan bawang gurih melimpah, pedas nendang bikin nafsu makan bertambah.",
    price: 32000,
    spicyLevel: 5,
    isBestSeller: true,
    image: "/images/products/sambal-bawang.webp",
    weight: "150g",
  },
  {
    id: "sambal-ijo-cumi",
    name: "Sambal Ijo Cumi",
    description: "Sambal cabai hijau gurih dengan potongan cumi asin empuk dan aroma daun jeruk yang segar.",
    price: 30000,
    spicyLevel: 3,
    isBestSeller: false,
    image: "/images/products/sambal-ijo-cumi.webp",
    weight: "150g",
  },
  {
    id: "sambal-matah-bali",
    name: "Sambal Matah Bali",
    description: "Sambal iris rempah khas Bali dengan irisan serai wangi, bawang merah, dan siraman minyak kelapa murni.",
    price: 38000,
    spicyLevel: 3,
    isBestSeller: false,
    image: "/images/products/sambal-matah-bali.webp",
    weight: "150g",
  },
];

export const cateringPackages: CateringPackage[] = [
  {
    id: "paket-nasi-box-komplit",
    name: "Paket Nasi Box Komplit",
    description: "Pilihan praktis dan higienis untuk rapat kantor, seminar, atau santap bersama dengan lauk komplet lezat.",
    price: 45000,
    minOrder: 10,
    image: "/images/catering/nasi-box-komplit.jpeg",
    items: [
      "Nasi Putih Pulen / Nasi Uduk",
      "Ayam Goreng Lengkuas / Bakar Madu",
      "Sambal Terasi Legenda Bu Nur",
      "Tahu & Tempe Bacem Gurih",
      "Lalapan Segar & Kerupuk Udang",
    ],
  },
  {
    id: "paket-prasmanan-syukuran",
    name: "Paket Prasmanan Syukuran",
    description: "Hidangan prasmanan lengkap aneka lauk tradisional favorit untuk momen hajatan, syukuran, dan reuni akbar.",
    price: 75000,
    minOrder: 30,
    image: "/images/catering/prasmanan-syukuran.jpeg",
    items: [
      "Nasi Putih Pandan Wangi",
      "Rendang Daging Sapi Empuk",
      "Ayam Suwir Pedas Manis",
      "Capcay Sayur Segar Bakso Sapi",
      "Pilihan 2 Varian Sambal Bu Nur",
      "Puding Buah Segar & Es Teh Melati",
    ],
  },
  {
    id: "paket-nasi-tumpeng-mini",
    name: "Paket Nasi Tumpeng Mini",
    description: "Tumpeng mini personal estetis dan menggugah selera untuk perayaan ulang tahun atau acara syukuran khusus.",
    price: 450000,
    minOrder: 1,
    image: "/images/catering/nasi-tumpeng-mini.jpeg",
    items: [
      "Nasi Kuning Gurih Rempah Alami",
      "Ayam Suwir Bumbu Rujak",
      "Perkedel Kentang Daging Gurih",
      "Sambal Goreng Kentang Ati",
      "Telur Dadar Rawis & Orek Tempe Manis",
      "Sambal Bawang Bu Nur & Garnis Cantik",
    ],
  },
];
