"use client";

import { useState, useEffect } from "react";
import {
  MessageCircle,
  Plus,
  Minus,
  FileText,
  CreditCard,
  Truck,
  Send,
  Sparkles,
} from "lucide-react";
import { generateWaOrderLink, type OrderPayload } from "@/lib/wa-link";
import { sambalProducts, cateringPackages } from "@/data/products";
import { formatRupiah } from "@/lib/utils";

export default function OrderForm() {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("Sambal Terasi Legenda");
  const [qty, setQty] = useState(1);
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  // Listen to custom selection event from BentoProducts or CateringMenu
  useEffect(() => {
    const handleSelectProduct = (event: Event) => {
      const customEvent = event as CustomEvent<{
        productName?: string;
        minOrder?: number;
      }>;
      if (customEvent.detail?.productName) {
        setProduct(customEvent.detail.productName);
      }
      if (customEvent.detail?.minOrder) {
        setQty(customEvent.detail.minOrder);
      }
    };

    window.addEventListener("select-product", handleSelectProduct);
    return () => {
      window.removeEventListener("select-product", handleSelectProduct);
    };
  }, []);

  const handleDecrement = () => {
    setQty((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrement = () => {
    setQty((prev) => prev + 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !address.trim()) return;

    const payload: OrderPayload = {
      name: name.trim(),
      product,
      qty,
      address: address.trim(),
      notes: notes.trim() || undefined,
    };

    const waUrl = generateWaOrderLink(payload);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="order"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Kolom Kiri: 5 Kolom Informasi & Alur Pemesanan */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs uppercase font-bold text-emerald-500 tracking-wider bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded-full inline-block mb-3">
              📦 CARA PESAN PRAKTIS
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-50 tracking-tight leading-tight">
              PESAN VIA WHATSAPP
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mt-4 leading-relaxed">
              Pilih produk favoritmu, isi detail pengiriman, dan pesanan akan langsung terhubung ke WhatsApp Bu Nur tanpa repot!
            </p>
          </div>

          {/* Visual Step List */}
          <div className="space-y-4 pt-4 border-t border-zinc-800/80">
            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-600/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                1
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-200">Isi Formulir</h4>
                <p className="text-xs text-zinc-400">
                  Lengkapi data pemesan, pilihan produk, jumlah, dan alamat tujuan.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-600/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                2
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-200">Klik Kirim WA</h4>
                <p className="text-xs text-zinc-400">
                  Sistem otomatis menyusun pesan detail pesanan langsung ke nomor admin.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-600/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                3
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-200">Konfirmasi & Pembayaran</h4>
                <p className="text-xs text-zinc-400">
                  Admin memeriksa ketersediaan stok & ongkir, lalu mengonfirmasi pembayaran.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-600/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                4
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-200">Pesanan Dikirim</h4>
                <p className="text-xs text-zinc-400">
                  Produk segar dikemas rapi dan segera dikirim langsung ke alamat Anda.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: 7 Kolom Form Container */}
        <div className="lg:col-span-7">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-[0_0_30px_rgba(37,211,102,0.1)] relative overflow-hidden">
            {/* Subtle Top Glow Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-[#25D366] to-emerald-400" />

            <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-50">
                  Formulir Pemesanan Langsung
                </h3>
                <p className="text-xs text-zinc-400">
                  Terhubung aman ke WhatsApp resmi Dapur Bu Nur
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded-full">
                <Sparkles className="w-3 h-3" />
                Respon Cepat
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Field 1: Nama Lengkap */}
              <div>
                <label
                  htmlFor="customer-name"
                  className="block text-xs font-semibold text-zinc-300 mb-1.5"
                >
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  id="customer-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama Anda"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                />
              </div>

              {/* Field 2: Pilihan Produk / Paket */}
              <div>
                <label
                  htmlFor="product-select"
                  className="block text-xs font-semibold text-zinc-300 mb-1.5"
                >
                  Pilihan Produk / Paket <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="product-select"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors appearance-none cursor-pointer"
                  >
                    <optgroup label="🌶️ Varian Sambal Botol (150g)">
                      {sambalProducts.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} — {formatRupiah(p.price)}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="🍱 Paket Katering & Acara">
                      {cateringPackages.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name} — {formatRupiah(c.price)}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
                    ▼
                  </div>
                </div>
              </div>

              {/* Field 3: Jumlah (Qty) dengan Counter Button */}
              <div>
                <label
                  htmlFor="order-qty"
                  className="block text-xs font-semibold text-zinc-300 mb-1.5"
                >
                  Jumlah (Qty) <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleDecrement}
                    className="w-11 h-11 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 flex items-center justify-center transition-colors active:scale-95"
                    aria-label="Kurangi jumlah"
                  >
                    <Minus className="w-4 h-4" />
                  </button>

                  <input
                    id="order-qty"
                    type="number"
                    min={1}
                    value={qty}
                    onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-24 text-center py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-base font-bold text-zinc-100 focus:outline-none focus:border-emerald-500"
                  />

                  <button
                    type="button"
                    onClick={handleIncrement}
                    className="w-11 h-11 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 flex items-center justify-center transition-colors active:scale-95"
                    aria-label="Tambah jumlah"
                  >
                    <Plus className="w-4 h-4" />
                  </button>

                  <span className="text-xs text-zinc-400">
                    {product.toLowerCase().includes("tumpeng")
                      ? "Unit"
                      : product.toLowerCase().includes("paket")
                      ? "Pax/Box"
                      : "Botol"}
                  </span>
                </div>
              </div>

              {/* Field 4: Alamat Lengkap Pengiriman */}
              <div>
                <label
                  htmlFor="customer-address"
                  className="block text-xs font-semibold text-zinc-300 mb-1.5"
                >
                  Alamat Lengkap Pengiriman <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="customer-address"
                  required
                  rows={3}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Jalan, No. Rumah, RT/RW, Kecamatan, Kota"
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                />
              </div>

              {/* Field 5: Catatan Tambahan */}
              <div>
                <label
                  htmlFor="customer-notes"
                  className="block text-xs font-semibold text-zinc-300 mb-1.5"
                >
                  Catatan Tambahan <span className="text-zinc-500 font-normal">(Opsional)</span>
                </label>
                <input
                  id="customer-notes"
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Contoh: Level pedas ekstra, bungkus bubble wrap"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                />
              </div>

              {/* Submit Button Primary */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-zinc-950 font-bold w-full py-4 rounded-xl text-base transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 fill-zinc-950" />
                  <span>Kirim Pesanan ke WhatsApp Bu Nur</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
