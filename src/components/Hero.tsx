"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Flame,
  ArrowRight,
  ShieldCheck,
  Leaf,
  Award,
  Sparkles,
  Star,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center py-12 lg:py-20">
      {/* Background Ambience Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Kolom Kiri: Teks & Dual CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold bg-red-950/60 text-red-500 border border-red-800/50 shadow-[0_0_15px_rgba(217,43,39,0.2)]">
              <Flame className="w-3.5 h-3.5 fill-red-500 animate-pulse text-red-500" />
              <span>🔥 Resep Autentik Warisan Bu Nur</span>
            </div>

            {/* Headline Utama */}
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-zinc-50 leading-[1.12]">
              Sensasi Sambal Segar & Pedas Juara,{" "}
              <span className="bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                Autentik Citarasa Nusantara
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Sambal Kemasan Premium & Katering Lezat buatan rumah tanpa pengawet sintetik. Sensasi pedas gurih yang selalu bikin nambah nasi!
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#produk"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white rounded-full px-8 py-3.5 font-bold shadow-[0_0_25px_rgba(217,43,39,0.4)] hover:shadow-[0_0_35px_rgba(217,43,39,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>BELI SEKARANG</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#katering"
                className="w-full sm:w-auto inline-flex items-center justify-center border border-zinc-700 hover:border-zinc-500 text-zinc-200 hover:bg-zinc-900 rounded-full px-8 py-3.5 font-semibold transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                PAKET KATERING
              </a>
            </div>

            {/* Trust Elements Badges */}
            <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-1.5 text-center lg:text-left">
                <div className="p-2 rounded-xl bg-red-600/10 text-red-500 border border-red-600/20">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-200">100% Halal MUI</p>
                  <p className="text-[11px] text-zinc-400">Bahan Alami</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-1.5 text-center lg:text-left">
                <div className="p-2 rounded-xl bg-orange-600/10 text-orange-500 border border-orange-600/20">
                  <Leaf className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-200">Tanpa Pengawet</p>
                  <p className="text-[11px] text-zinc-400">Segar Tiap Hari</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-1.5 text-center lg:text-left">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-200">Terjual 1.000+</p>
                  <p className="text-[11px] text-zinc-400">Botol / Bulan</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Kolom Kanan: Visual Hero 3D Floating */}
          <div className="relative flex justify-center items-center">
            {/* Glow Sphere Effect */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-red-600/25 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute w-60 h-60 bg-orange-500/20 rounded-full blur-2xl -z-10 translate-x-8 -translate-y-6" />

            {/* Floating Container */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-[420px] sm:max-w-[460px] aspect-[4/5] rounded-3xl p-3 bg-gradient-to-b from-zinc-800/80 to-zinc-900/90 border border-zinc-700/60 shadow-2xl backdrop-blur-sm"
            >
              {/* Inner Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-950">
                <Image
                  src="https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1000&q=85"
                  alt="Dapur Sambal Bu Nur - Sambal Tradisional Premium"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 460px"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle vignette gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-black/20" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-semibold tracking-wider text-orange-400 uppercase">
                      Varian Andalan
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      Sambal Terasi & Bawang Juara
                    </h4>
                  </div>
                  <div className="flex items-center gap-1 text-red-500 bg-red-950/70 border border-red-800/40 px-2.5 py-1 rounded-lg text-xs font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Best Pick</span>
                  </div>
                </div>
              </div>

              {/* Floating Mini Badge 1: Top-Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -top-4 -left-3 sm:-left-6 rounded-2xl bg-zinc-900/95 backdrop-blur-md border border-zinc-700/70 px-4 py-2.5 shadow-xl flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center font-bold text-base">
                  🌶️
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-100">Pedas Nampol!</p>
                  <p className="text-[10px] text-zinc-400">100% Cabai Segar</p>
                </div>
              </motion.div>

              {/* Floating Mini Badge 2: Bottom-Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-4 -right-3 sm:-right-6 rounded-2xl bg-zinc-900/95 backdrop-blur-md border border-zinc-700/70 px-4 py-2.5 shadow-xl flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-base">
                  ⭐
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-100">4.9/5 Rating</p>
                  <p className="text-[10px] text-zinc-400">1.200+ Ulasan Puas</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
