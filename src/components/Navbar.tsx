"use client";

import { useState } from "react";
import Link from "next/link";
import { Flame, MessageCircle, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Varian Sambal", href: "#produk" },
  { name: "Paket Katering", href: "#katering" },
  { name: "Testimonial", href: "#testimoni" },
  { name: "Cara Pesan", href: "#order" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const waNumber = "6281234567890";
  const defaultWaMessage = encodeURIComponent(
    "Halo Bu Nur, saya mau pesan Sambal / info Katering Dapur Bu Nur. Boleh info pricelist dan ketersediaan stok?"
  );
  const waUrl = `https://wa.me/${waNumber}?text=${defaultWaMessage}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-xl"
          >
            <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-600 group-hover:scale-105 group-hover:bg-red-600/20 group-hover:border-red-600/50 transition-all duration-300">
              <Flame className="w-6 h-6 fill-red-600 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-wider text-zinc-50 leading-tight">
                DAPUR SAMBAL <span className="text-red-600">BU NUR</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-zinc-400 font-semibold">
                Autentik Resep Tradisional
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-red-500 transition-colors relative py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA & Mobile Menu Trigger */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-zinc-950 text-xs sm:text-sm font-bold tracking-wide transition-all shadow-[0_0_15px_rgba(37,211,102,0.3)] hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-zinc-950" />
              <span>Pesan WA</span>
            </a>

            {/* Hamburger Button (Mobile) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="md:hidden p-2 rounded-xl text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 border border-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600"
              aria-expanded={isOpen}
              aria-label="Buka menu navigasi"
            >
              {isOpen ? <X className="w-6 h-6 text-zinc-200" /> : <Menu className="w-6 h-6 text-zinc-200" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-t border-zinc-800/80 bg-zinc-950/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900/80 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] text-zinc-950 font-bold text-sm shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-zinc-950" />
                  Hubungi via WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
