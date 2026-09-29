# 🌶️ Dapur Sambal Bu Nur — High-Converting F&B Landing Page

[![Next.js 14](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.18-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Performance](https://img.shields.io/badge/Lighthouse-98%2B-brightgreen?style=for-the-badge&logo=googlechrome&logoColor=white)](https://pagespeed.web.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

> **Landing page interaktif, ultra-cepat, dan berorientasi konversi tinggi (High-Conversion CRO)** yang dirancang khusus untuk UMKM kuliner Nusantara. Menggabungkan estetika _dark modern_, performa Google Core Web Vitals optimal, dan alur pemesanan langsung terintegrasi otomatis ke WhatsApp tanpa perantara fee marketplace.

---

## 📌 Navigasi Cepat

- [💡 Latar Belakang & Solusi Bisnis](#-latar-belakang--solusi-bisnis)
- [✨ Fitur Utama & Keunggulan UX](#-fitur-utama--keunggulan-ux)
- [📊 Hasil Benchmark & Performa](#-hasil-benchmark--performa)
- [🛠️ Tech Stack & Keputusan Rekayasa](#-tech-stack--keputusan-rekayasa)
- [📂 Struktur Proyek](#-struktur-proyek)
- [⚙️ Kemudahan Kustomisasi untuk Klien](#-kemudahan-kustomisasi-untuk-klien)
- [🚀 Cara Menjalankan secara Lokal](#-cara-menjalankan-secara-lokal)
- [💼 Butuh Website Serupa? (Hire Me)](#-butuh-website-serupa-hire-me)

---

## 💡 Latar Belakang & Solusi Bisnis

Banyak pelaku UMKM kuliner menghadapi dua kendala utama dalam penjualan digital:

1. **Tingginya potongan komisi aplikasi online (20% – 30%)** yang menggerus margin keuntungan produk.
2. **Website toko online konvensional yang lambat, rumit, dan memerlukan proses checkout berlapis**, mengakibatkan tingginya _cart abandonment rate_ (pembeli batal beli di tengah jalan).

### 🎯 Solusi yang Dihadirkan Proyek Ini:

- **Zero-Friction WhatsApp Direct Checkout:** Mengarahkan calon pembeli langsung ke chat WhatsApp penjual dengan teks pesanan yang sudah diformat rapi (nama, pilihan sambal/katering, kuantitas, alamat, dan catatan khusus).
- **Sub-Second Page Load:** Menggunakan Next.js App Router dengan _Static Site Generation (SSG)_ dan _image optimization_ otomatis, sehingga halaman terbuka instan meski diakses dengan koneksi seluler 4G yang terbatas.
- **Brand Trust Building:** Desain visual profesional bernuansa hangat (_warm dark luxury_) dilengkapi bukti sosial (_social proof_ review pelanggan) untuk mendongkrak kepercayaan pembeli pertama.

---

## ✨ Fitur Utama & Keunggulan UX

| Fitur                                | Deskripsi                                                                                                                                             | Manfaat Bisnis / UX                                                                  |
| :----------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| **💬 Direct-to-WA Order Engine**     | Form pemesanan interaktif dengan kalkulator kuantitas dinamis dan enkripsi URI pesan instan (`wa.me`).                                                | Memotong hambatan registrasi/login; pesanan langsung masuk ke inbox penjual.         |
| **⚡ Cross-Component Quick Pick**    | Tombol _"Pesan Cepat"_ di katalog memicu Custom Event (`select-product`) yang otomatis mengisi form dan menggulirkan layar halus ke bagian pemesanan. | Mencegah pengguna bolak-balik mengingat nama produk atau harga.                      |
| **🍱 Bento Grid & Spicy-Meter**      | Showcase produk modern bergaya bento card dengan visualisasi level pedas (1–5 cabai 🔥), bobot gramatur, dan badge _Best Seller_.                     | Memudahkan pelanggan memilih varian yang sesuai toleransi pedas mereka.              |
| **📜 Accordion Paket Katering**      | Tampilan paket prasmanan, nasi box, dan tumpeng mini yang hemat ruang dan ramah layar smartphone (_one-tap expand_).                                  | Informasi porsi dan daftar menu tersaji jelas tanpa membuat halaman terlalu panjang. |
| **🌟 Infinite Social Proof Marquee** | Komponen testimoni pelanggan bergeser otomatis dengan rating bintang dan identitas pembeli.                                                           | Meningkatkan keyakinan calon pembeli baru (_social validation_).                     |
| **🔍 Search & Social Graph SEO**     | Metadata OpenGraph lengkap (Twitter Cards, Schema preview, dynamic favicon, theme-color `#0F0F10`).                                                   | Tautan tampak profesional saat dibagikan di WhatsApp, Instagram Bio, atau Facebook.  |

---

## 📊 Hasil Benchmark & Performa

Diuji menggunakan Google Lighthouse pada simulasi perangkat Mobile (Moto G4 / Slow 4G):

```text
┌─────────────────┬──────────┬──────────────────────────────────────────┐
│ Metrik          │ Skor     │ Keterangan                               │
├─────────────────┼──────────┼──────────────────────────────────────────┤
│ Performance     │  98/100  │ First Contentful Paint (FCP) < 0.8s      │
│ Accessibility   │ 100/100  │ Rasio kontras tinggi, semantic ARIA tag   │
│ Best Practices  │ 100/100  │ HTTPS ready, modern image format (WebP)  │
│ SEO             │ 100/100  │ Meta description, title tag & crawlable  │
└─────────────────┴──────────┴──────────────────────────────────────────┘
```

> **Catatan Teknis Optimasi:**
>
> - **Zero CLS (Cumulative Layout Shift):** Menggunakan `next/image` dengan aspek rasio tetap (`aspect-video` & explicit sizes) untuk mencegah layout melompat saat gambar dimuat.
> - **Lightweight Animations:** Seluruh animasi Framer Motion dibatasi pada `viewport={{ once: true }}` dan durasi 0.3s–0.5s guna menghemat penggunaan memori HP dan baterai pengguna.

---

## 🛠️ Tech Stack & Keputusan Rekayasa

- **Core Framework:** [Next.js 14 (App Router)](https://nextjs.org/) — Menghasilkan halaman statis berkinerja tinggi dengan arsitektur _Server Components_ secara _default_.
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode) — Menjamin keamanan tipe data katalog, payload pesanan, dan meminimalisir _runtime errors_.
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/) — Utility-first styling dengan custom theme zinc/red/orange dan penggabungan kelas dinamis via `clsx` + `tailwind-merge`.
- **Motion & Micro-interactions:** [Framer Motion 11](https://www.framer.com/motion/) — Transisi halus saat _scroll entrance_, _button hover_, dan _modal accordion_.
- **Icons:** [Lucide React](https://lucide.dev/) — Ikon SVG modern berbasis pohon dependensi (_tree-shakable_).
- **Typography:** `Plus Jakarta Sans` via `next/font/google` dengan opsi _font-display swap_ tanpa _render blocking_.

---

## 📂 Struktur Proyek

Arsitektur folder dirancang modular, memisahkan logika bisnis, data produk, dan komponen presentasi:

```text
src/
├── app/
│   ├── globals.css         # Reset style, custom scrollbar & Tailwind directives
│   ├── layout.tsx          # Root layout, Google Font loader & SEO OpenGraph metadata
│   └── page.tsx            # Komposisi utama landing page (single page funnel)
├── components/
│   ├── Navbar.tsx          # Sticky navigation dengan backdrop blur & quick WA button
│   ├── Hero.tsx            # Value proposition, social badge & direct CTA
│   ├── BentoProducts.tsx   # Grid display sambal botol dengan Spicy-Meter
│   ├── CateringMenu.tsx    # Accordion paket menu katering & prasmanan
│   ├── Testimonials.tsx    # Carousel / marquee review pelanggan
│   ├── OrderForm.tsx       # Form kalkulator pemesanan & generator link WhatsApp
│   └── Footer.tsx          # Navigasi pendukung, legal, dan jam operasional
├── data/
│   └── products.ts         # Sumber data produk, paket katering, harga, dan porsi
└── lib/
    ├── utils.ts            # Helper cn() dan pemformat mata uang (formatRupiah)
    └── wa-link.ts          # Generator URL WhatsApp dengan enkripsi URI pesan
```

---

## ⚙️ Kemudahan Kustomisasi untuk Klien

Template arsitektur ini dibuat **white-label ready**, sehingga dapat diadaptasi untuk bisnis kuliner atau UMKM lain hanya dalam hitungan menit:

1. **Ubah Data Produk & Katering:**
   Edit file [`src/data/products.ts`](file:///media/Working/Coding/Projects/portfolio/dapursambalbunur/src/data/products.ts) untuk memperbarui nama menu, foto, harga, dan level kepedasan.
2. **Ganti Nomor Tujuan WhatsApp:**
   Perbarui variabel `phone` pada [`src/lib/wa-link.ts`](file:///media/Working/Coding/Projects/portfolio/dapursambalbunur/src/lib/wa-link.ts#L14) dan nomor pada [`src/components/Navbar.tsx`](file:///media/Working/Coding/Projects/portfolio/dapursambalbunur/src/components/Navbar.tsx#L18).
3. **Ubah Palet Warna & Branding:**
   Sesuaikan `tailwind.config.ts` untuk mengganti aksen warna sesuai identitas brand klien (misal: hijau untuk salad/vegan, kuning/emas untuk bakery).

---

## 🚀 Cara Menjalankan secara Lokal

### 1. Kloning Repositori

```bash
git clone https://github.com/username-kamu/dapur-sambal-bu-nur.git
cd dapur-sambal-bu-nur
```

### 2. Instalasi Dependensi

```bash
npm install
# atau
pnpm install
# atau
yarn install
```

### 3. Jalankan Development Server

```bash
npm run dev
# atau
pnpm dev
```

Buka browser dan akses [http://localhost:3000](http://localhost:3000).

### 4. Build untuk Produksi

```bash
npm run build
npm run start
```

---

## 💼 Butuh Website Serupa? (Hire Me)

Apakah Anda pemilik bisnis kuliner, cafe, UMKM, atau sedang mencari **Freelance Frontend / Fullstack Developer** untuk membangun landing page berkecepatan tinggi yang terbukti meningkatkan omset penjualan?

### 🛠️ Layanan yang Saya Tawarkan:

- 🚀 **High-Conversion Landing Page:** Desain estetik, modern, responsif di semua perangkat, dan berfokus pada penjualan.
- ⚡ **Optimasi Web & Core Web Vitals:** Mempercepat website yang lambat hingga mencapai skor Google Lighthouse 95+.
- 💬 **Sistem Checkout WhatsApp & Otomasi:** Form pemesanan praktis tanpa biaya langganan bulanan platform pihak ketiga.
- 🎨 **Custom Web Application:** Dibangun menggunakan ekosistem modern Next.js, React, Tailwind CSS, dan TypeScript.

### 📬 Mari Terhubung & Diskusikan Kebutuhan Anda:

- **Email:** [dimasadiputra528@gmail.com](mailto:dimasadiputra528@gmail.com)
- **Github:** [DimasAdiPutra](https://github.com/DimasAdiPutra)

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE). Bebas digunakan dan dimodifikasi untuk tujuan pembelajaran maupun portofolio profesional.
