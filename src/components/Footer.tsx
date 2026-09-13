import Link from "next/link";
import {
  Flame,
  MessageCircle,
  Instagram,
  MapPin,
  Clock,
  ShieldCheck,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/80 text-zinc-400 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      {/* 4-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
        {/* Kolom 1: Brand Info */}
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-600">
              <Flame className="w-5 h-5 fill-red-600" />
            </div>
            <span className="font-extrabold text-base tracking-wider text-zinc-50">
              DAPUR SAMBAL <span className="text-red-600">BU NUR</span>
            </span>
          </Link>

          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            UMKM kuliner Nusantara yang menghadirkan aneka varian sambal kemasan botol premium dan paket katering lezat tanpa pengawet sintetik.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-semibold text-orange-400">
            <span>🌶️</span>
            <span>100% Resep Asli Nusantara</span>
          </div>
        </div>

        {/* Kolom 2: Navigasi Pintar */}
        <div className="space-y-4">
          <h4 className="font-bold text-sm text-zinc-100 uppercase tracking-wider">
            Navigasi Menu
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li>
              <a
                href="#produk"
                className="hover:text-red-500 transition-colors block py-0.5"
              >
                Varian Sambal Botol
              </a>
            </li>
            <li>
              <a
                href="#katering"
                className="hover:text-red-500 transition-colors block py-0.5"
              >
                Paket Menu Katering
              </a>
            </li>
            <li>
              <a
                href="#testimoni"
                className="hover:text-red-500 transition-colors block py-0.5"
              >
                Testimonial Pelanggan
              </a>
            </li>
            <li>
              <a
                href="#order"
                className="hover:text-red-500 transition-colors block py-0.5"
              >
                Cara Pesan WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Kontak & Jam Buka */}
        <div className="space-y-4">
          <h4 className="font-bold text-sm text-zinc-100 uppercase tracking-wider">
            Kontak & Jam Dapur
          </h4>
          <ul className="space-y-3 text-xs sm:text-sm">
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors"
              >
                +62 812-3456-7890 (WhatsApp)
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-zinc-300">Senin – Sabtu</p>
                <p className="text-zinc-500">08.00 – 17.00 WIB</p>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>Dapur Utama: Jakarta Selatan, DKI Jakarta</span>
            </li>
          </ul>
        </div>

        {/* Kolom 4: Sosial Media & Keamanan */}
        <div className="space-y-4">
          <h4 className="font-bold text-sm text-zinc-100 uppercase tracking-wider">
            Sosial Media & Layanan
          </h4>
          <p className="text-xs text-zinc-400">
            Ikuti media sosial kami untuk promo, kuis pedas, dan rilis menu baru.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-red-500 hover:border-zinc-700 transition-colors"
              aria-label="Instagram Dapur Sambal Bu Nur"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#25D366] hover:border-zinc-700 transition-colors"
              aria-label="WhatsApp Dapur Sambal Bu Nur"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-orange-500 hover:border-zinc-700 transition-colors"
              aria-label="Google Maps Dapur Sambal Bu Nur"
            >
              <MapPin className="w-4 h-4" />
            </a>
          </div>

          {/* Security & Fast Response Badge */}
          <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800/80 flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
            <div>
              <p className="text-xs font-bold text-zinc-200">
                Pesan Mudah & Fast Response
              </p>
              <p className="text-[11px] text-zinc-400">
                Verifikasi pesanan resmi & terpercaya
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-900 pt-6 text-xs text-zinc-500 flex flex-col sm:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
        <p>© 2026 Dapur Sambal Bu Nur. All rights reserved.</p>
        <p className="text-zinc-600">
          Diracik sepenuh hati dengan rempah pilihan khas Indonesia.
        </p>
      </div>
    </footer>
  );
}
