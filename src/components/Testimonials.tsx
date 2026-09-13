"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  comment: string;
  avatarBg: string;
  initials: string;
  rating: number;
}

const testimonials: TestimonialItem[] = [
  {
    id: "1",
    name: "Eka Putri",
    role: "HRD PT Nusantara",
    comment:
      "Sambalnya luar biasa mantap! Katering untuk lunch kantor selalu bikin nambah nasi. Rekan-rekan sekantor selalu minta dipesankan lagi.",
    avatarBg: "bg-red-600/20 text-red-400 border-red-500/30",
    initials: "EP",
    rating: 5,
  },
  {
    id: "2",
    name: "Asri Kuncoro",
    role: "Event Organizer, Jakarta",
    comment:
      "Paket Prasmanannya praktis dan higienis. Tamu-tamu nikahan puji rasa sambal terasinya yang khas dan lauknya yang empuk meresap.",
    avatarBg: "bg-orange-600/20 text-orange-400 border-orange-500/30",
    initials: "AK",
    rating: 5,
  },
  {
    id: "3",
    name: "Santoso Wijaya",
    role: "Pecinta Kuliner Pedas",
    comment:
      "Sambal Cumi dan Bawangnya langganan saya. Pedasnya dapet, gurihnya dapet! Minyaknya juga sedap buat disiram ke nasi hangat.",
    avatarBg: "bg-amber-600/20 text-amber-400 border-amber-500/30",
    initials: "SW",
    rating: 5,
  },
  {
    id: "4",
    name: "Anita Rahayu",
    role: "Ibu Rumah Tangga",
    comment:
      "Tumpeng Mininya cantik banget buat ulang tahun anak, rasanya beneran resep warisan. Tamu keluarga pada kagum sama kerapian dan kelezatannya.",
    avatarBg: "bg-emerald-600/20 text-emerald-400 border-emerald-500/30",
    initials: "AR",
    rating: 5,
  },
  {
    id: "5",
    name: "Bagus Setiawan",
    role: "Pengusaha Kuliner, Bekasi",
    comment:
      "Kualitas bahan dan konsistensi rasa Bu Nur jempolan. Selalu fresh saat tiba, packing aman dan tidak bocor saat dikirim ke luar kota.",
    avatarBg: "bg-purple-600/20 text-purple-400 border-purple-500/30",
    initials: "BS",
    rating: 5,
  },
];

// Duplicate list for infinite seamless marquee loop
const marqueeTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="testimoni"
      className="py-20 bg-zinc-950/80 border-t border-b border-zinc-800/50 overflow-hidden relative"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header Container */}
      <div className="text-center max-w-2xl mx-auto px-4 sm:px-6 mb-12">
        <span className="text-xs uppercase font-bold text-amber-500 tracking-wider bg-amber-950/40 border border-amber-800/40 px-3 py-1 rounded-full inline-block mb-3">
          💬 TESTIMONI PELANGGAN
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-50 text-center tracking-tight">
          Apa Kata Mereka?
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base mt-2 leading-relaxed">
          Kepercayaan dan ulasan jujur dari ribuan penikmat kuliner pedas serta pelanggan katering Dapur Sambal Bu Nur.
        </p>
      </div>

      {/* Left and Right Fade Gradient Masks for Seamless Edge Effect */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent z-10" />

      {/* Horizontal Infinite Marquee Track */}
      <div
        className="flex overflow-hidden py-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex gap-6 shrink-0"
          animate={{
            x: isHovered ? undefined : ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 28,
              ease: "linear",
            },
          }}
        >
          {marqueeTestimonials.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 min-w-[300px] sm:min-w-[350px] max-w-[380px] flex flex-col justify-between shadow-lg hover:border-zinc-700 transition-colors group"
            >
              <div className="space-y-4">
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-500">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-500 text-amber-500"
                      />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-zinc-700 group-hover:text-amber-500/60 transition-colors" />
                </div>

                {/* Comment */}
                <p className="text-zinc-300 text-sm leading-relaxed italic">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              {/* Avatar & Customer Profile */}
              <div className="flex items-center gap-3 pt-5 mt-5 border-t border-zinc-800/80">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs border ${item.avatarBg} shrink-0`}
                >
                  {item.initials}
                </div>
                <div>
                  <h4 className="font-bold text-zinc-100 text-sm leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
