"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { CheckCircle2, Utensils, ArrowRight } from "lucide-react";
import { cateringPackages, type CateringPackage } from "@/data/products";
import { formatRupiah } from "@/lib/utils";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

interface CateringCardProps {
  pkg: CateringPackage;
  onOrderClick: (pkg: CateringPackage) => void;
}

function CateringCard({ pkg, onOrderClick }: CateringCardProps) {
  const [imgSrc, setImgSrc] = useState(pkg.image);

  const getUnitLabel = (id: string) => {
    if (id.includes("tumpeng")) return "Unit";
    if (id.includes("box")) return "Box";
    return "Pax";
  };

  return (
    <motion.div
      variants={cardVariants}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden p-6 flex flex-col justify-between hover:border-orange-500/50 hover:shadow-[0_0_25px_rgba(234,88,12,0.15)] transition-all duration-300"
    >
      <div>
        {/* Image Container aspect-video */}
        <div className="w-full aspect-video relative overflow-hidden rounded-xl bg-zinc-950/60 mb-5 border border-zinc-800/50 flex items-center justify-center">
          <Image
            src={imgSrc}
            alt={pkg.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
            onError={() => {
              setImgSrc("/images/catering/nasi-box-komplit.jpeg");
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity pointer-events-none" />

          {/* Min Order Badge overlay */}
          <div className="absolute top-3 right-3 bg-zinc-900/90 backdrop-blur-md border border-zinc-700/60 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
            Min. {pkg.minOrder} {getUnitLabel(pkg.id)}
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-2 mb-5">
          <h3 className="text-xl font-bold text-zinc-50 group-hover:text-orange-400 transition-colors">
            {pkg.name}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            {pkg.description}
          </p>
        </div>

        {/* Included Items List with red-500 CheckCircle2 */}
        <div className="space-y-2.5 pt-4 border-t border-zinc-800/80 mb-6">
          <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
            Menu Termasuk:
          </span>
          <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
            {pkg.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Footer: Price & CTA Button */}
      <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
        <div>
          <span className="text-[11px] text-zinc-500 block -mb-0.5">
            Mulai dari / {getUnitLabel(pkg.id).toLowerCase()}
          </span>
          <span className="font-extrabold text-zinc-50 text-lg sm:text-xl">
            {formatRupiah(pkg.price)}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onOrderClick(pkg)}
          className="bg-orange-600 hover:bg-orange-500 text-white rounded-xl px-4 py-2.5 text-xs font-bold transition-all shadow-sm hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] active:scale-95 flex items-center gap-1.5"
        >
          <Utensils className="w-3.5 h-3.5" />
          <span>Pesan Paket</span>
        </button>
      </div>
    </motion.div>
  );
}

export default function CateringMenu() {
  const handleSelectPackage = (pkg: CateringPackage) => {
    if (typeof window !== "undefined") {
      window.location.hash = "order";
      window.dispatchEvent(
        new CustomEvent("select-product", {
          detail: {
            productId: pkg.id,
            productName: pkg.name,
            price: pkg.price,
            minOrder: pkg.minOrder,
          },
        })
      );

      const orderEl = document.getElementById("order");
      if (orderEl) {
        orderEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="katering"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs uppercase font-bold text-orange-500 tracking-wider bg-orange-950/40 border border-orange-800/40 px-3 py-1 rounded-full inline-block mb-3">
          🍱 LAYANAN CATERING & ACARA
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-50 tracking-tight">
          Menu Katering Spesial
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base mt-2 leading-relaxed">
          Pilihan santapan lezat untuk acara kantor, syukuran, hingga hajatan keluarga dengan cita rasa autentik Bu Nur.
        </p>
      </div>

      {/* Card Grid Layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
      >
        {cateringPackages.map((pkg) => (
          <CateringCard
            key={pkg.id}
            pkg={pkg}
            onOrderClick={handleSelectPackage}
          />
        ))}
      </motion.div>
    </section>
  );
}
