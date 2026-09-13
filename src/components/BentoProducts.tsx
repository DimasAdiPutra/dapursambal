"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Flame, ShoppingBag, Sparkles, Check } from "lucide-react";
import { sambalProducts, type SambalProduct } from "@/data/products";
import { formatRupiah } from "@/lib/utils";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

interface ProductCardProps {
  product: SambalProduct;
  onOrderClick: (product: SambalProduct) => void;
}

function ProductCard({ product, onOrderClick }: ProductCardProps) {
  const [imgSrc, setImgSrc] = useState(product.image);
  const [isOrdered, setIsOrdered] = useState(false);

  const handleOrder = () => {
    setIsOrdered(true);
    setTimeout(() => setIsOrdered(false), 1200);
    onOrderClick(product);
  };

  return (
    <motion.div
      variants={cardVariants}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden p-5 flex flex-col justify-between hover:border-zinc-700 hover:shadow-[0_0_25px_rgba(217,43,39,0.15)] transition-all duration-300"
    >
      {/* Top Badge: Best Seller */}
      {product.isBestSeller && (
        <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-red-600 to-orange-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
          <Sparkles className="w-3 h-3 fill-current" />
          <span>🔥 Best Seller</span>
        </div>
      )}

      <div>
        {/* Product Image Container */}
        <div className="w-full h-48 relative overflow-hidden rounded-xl bg-zinc-950/60 mb-4 flex items-center justify-center border border-zinc-800/50 p-2">
          <Image
            src={imgSrc}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
            onError={() => {
              setImgSrc("/images/products/sambal-terasi.webp");
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/30 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity pointer-events-none" />
        </div>

        {/* Product Info */}
        <h3 className="text-lg font-bold text-zinc-50 mb-1 group-hover:text-red-500 transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-zinc-400 mb-2">Kemasan {product.weight}</p>
        <p className="text-xs text-zinc-400 line-clamp-2 mb-4 leading-relaxed">
          {product.description}
        </p>

        {/* Spicy-Meter Component (🌶️) */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, index) => {
              const isHot = index < product.spicyLevel;
              return (
                <Flame
                  key={index}
                  className={`w-3.5 h-3.5 transition-colors ${
                    isHot
                      ? "text-red-500 fill-red-500"
                      : "text-zinc-700 fill-transparent"
                  }`}
                />
              );
            })}
          </div>
          <span className="bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded text-[10px] font-semibold">
            Pedas {product.spicyLevel}/5
          </span>
        </div>
      </div>

      {/* Card Footer (Harga & CTA) */}
      <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
        <div>
          <span className="text-[11px] text-zinc-500 block -mb-0.5">Harga</span>
          <span className="font-bold text-zinc-50 text-base md:text-lg">
            {formatRupiah(product.price)}
          </span>
        </div>

        <button
          type="button"
          onClick={handleOrder}
          className="bg-red-600 hover:bg-red-500 text-white font-medium text-xs px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 shadow-sm hover:shadow-[0_0_15px_rgba(217,43,39,0.35)] active:scale-95"
        >
          {isOrdered ? (
            <>
              <Check className="w-3.5 h-3.5 text-white" />
              <span>Dipilih</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Pesan Cepat</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}

export default function BentoProducts() {
  const handleSelectProduct = (product: SambalProduct) => {
    if (typeof window !== "undefined") {
      // Set URL hash and dispatch event for OrderForm
      window.location.hash = "order";
      window.dispatchEvent(
        new CustomEvent("select-product", {
          detail: {
            productId: product.id,
            productName: product.name,
            price: product.price,
          },
        })
      );

      // Smooth scroll to order section
      const orderEl = document.getElementById("order");
      if (orderEl) {
        orderEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="produk"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs uppercase font-bold text-red-500 tracking-wider bg-red-950/40 border border-red-800/40 px-3 py-1 rounded-full inline-block mb-3">
          🌶️ VARIANS SAMBAL BOTOLAN
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-50 tracking-tight">
          Produk Sambal Pilihan
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base mt-2 leading-relaxed">
          Sensasi pedas gurih autentik dari bahan-bahan segar pilihan tanpa pengawet sintetik.
        </p>
      </div>

      {/* Grid Bento Products */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
      >
        {sambalProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onOrderClick={handleSelectProduct}
          />
        ))}
      </motion.div>
    </section>
  );
}
