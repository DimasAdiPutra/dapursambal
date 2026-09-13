# 🌶️ Dapur Sambal Bu Nur — Interactive & Fast Landing Page

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=for-the-badge&logo=framer)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

Landing page interaktif, estetik, dan berkinerja tinggi yang dirancang khusus untuk UMKM kuliner **Dapur Sambal Bu Nur**. Berfokus pada kecepatan akses seluler (*Core Web Vitals*), animasi halus, serta sistem pemesanan langsung terintegrasi ke WhatsApp.

---

## 🌟 Fitur Utama

- **🚀 High Performance & Speed:** Dibangun di atas Next.js App Router dengan *Static Site Generation* (SSG) dan optimasi gambar bawaan (`next/image`) untuk skor Google Lighthouse 95+.
- **✨ Animasi Halus & Interaktif:** Efek *scroll-driven*, *hover tilt*, dan mikro-interaksi menggunakan **Framer Motion**.
- **🍱 Bento Grid Product Showcase:** Display produk varian sambal modern lengkap dengan indikator kepedasan (*Spicy-Meter*) dan filter kategori dinamis.
- **📜 Menu Katering Accordion:** Penataan paket katering yang rapi dan *space-saving* untuk layar seluler.
- **💬 Auto-Formatted WhatsApp Order Form:** Form pemesanan yang otomatis menyusun teks detail pesanan (Nama, Produk, Jumlah, Alamat, Catatan) menjadi link `wa.me` siap kirim.
- **📱 Responsive & Mobile-First:** Desain yang dioptimalkan penuh untuk kenyamanan navigasi dari perangkat HP.
- **🔍 SEO & Social Media Ready:** Dilengkapi OpenGraph Metadata lengkap agar kartu *preview* muncul menarik saat tautan dibagikan di media sosial atau WhatsApp.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📂 Struktur Proyek

```text
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── layout.tsx       # Root layout & Metadata SEO/OpenGraph
│   │   └── page.tsx         # Main Landing Page
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky Navigation bar
│   │   ├── Hero.tsx         # Hero section dengan animasi entrance
│   │   ├── BentoProducts.tsx# Grid produk sambal & filter tab
│   │   ├── CateringMenu.tsx # Accordion paket menu katering
│   │   ├── Testimonials.tsx # Infinite Marquee review pelanggan
│   │   ├── OrderForm.tsx    # Interactive WA Form Generator
│   │   └── Footer.tsx       # Informasi kontak & hak cipta
│   ├── data/
│   │   └── products.ts      # Data produk sambal & katering
│   └── lib/
│       └── utils.ts         # Utility function (Formatter Rupiah & WA Link)
└── public/
    └── images/              # Aset gambar & ilustrasi produk

---

## ⚡ Cara Menjalankan secara Lokal
### 1. Prasyarat
Pastikan Anda sudah menginstal Node.js (v18.x atau yang lebih baru) serta pnpm/npm/yarn.

### 2. Kloning Repositori
Bash```
git clone [https://github.com/username-kamu/dapur-sambal-bu-nur.git](https://github.com/username-kamu/dapur-sambal-bu-nur.git)
cd dapur-sambal-bu-nur```

### 3. Instal Dependensi
Bash```
npm install
# atau
pnpm install```

### 4. Jalankan Server Pengembang
Bash```
npm run dev
# atau
pnpm dev```
Buka http://localhost:3000 di peramban Anda untuk melihat hasilnya.

## 📊 Hasil Optimasi Kecepatan (Lighthouse Score)
Performance: 98/100 🟢

Accessibility: 100/100 🟢

Best Practices: 100/100 🟢

SEO: 100/100 🟢

## 📄 Lisensi
Proyek ini dibuat untuk keperluan portofolio pengembangan web. Bebas digunakan di bawah lisensi MIT.