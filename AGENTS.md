# 🤖 ANTIGRAVITY CLI AGENT RULES: Dapur Sambal Bu Nur Project

## 1. Project Context & Stack Overview
You are an expert Frontend Developer working on "Dapur Sambal Bu Nur", an interactive, ultra-fast landing page for an Indonesian culinary UMKM.

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React (`lucide-react`)
- **Primary Goal:** Lighthouse score > 95, zero CLS, smooth animations, and high WA order conversion.

---

## 2. Architecture & File Structure Rules
Follow this exact directory layout when generating files:

```text
src/
├── app/
│   ├── layout.tsx       # Root Layout, OpenGraph Metadata, Inter Font
│   └── page.tsx         # Main Landing Page Composition
├── components/
│   ├── ui/              # Reusable low-level UI (Button, Card, Accordion)
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── BentoProducts.tsx
│   ├── CateringMenu.tsx
│   ├── Testimonials.tsx
│   ├── OrderForm.tsx
│   └── Footer.tsx
├── data/
│   └── products.ts      # Strictly typed product & catering data
└── lib/
    ├── utils.ts         # cn() helper & formatRupiah()
    └── wa-link.ts       # WhatsApp URL Encoder function

---

## 3. Coding & Quality Guidelines
### A. Server Components vs Client Components
Use Server Components by default for static content (SEO & performance).

Only add 'use client' at the top of components requiring interactivity or animation (e.g., OrderForm.tsx, BentoProducts.tsx, Testimonials.tsx).

### B. Animations (Framer Motion)
Keep animations lightweight, subtle, and smooth (duration: 0.3 to 0.5).

Prefer whileHover, whileTap, and viewport={{ once: true }} for scroll triggers to save memory and avoid re-triggering overhead on scroll up.

### C. WhatsApp Form Helper Requirement
All WhatsApp redirects MUST use a helper function in lib/wa-link.ts using encodeURIComponent:

TypeScript```
export interface OrderPayload {
  name: string;
  product: string;
  qty: number;
  address: string;
  notes?: string;
}

export function generateWaOrderLink(data: OrderPayload): string {
  const phone = "6281234567890"; // Target client phone
  const message = `Halo Bu Nur, saya mau pesan:\n\n` +
    `• *Nama:* ${data.name}\n` +
    `• *Pesanan:* ${data.product} (${data.qty} qty)\n` +
    `• *Alamat:* ${data.address}\n` +
    `• *Catatan:* ${data.notes || '-'}\n\n` +
    `Apakah stok ready? Terima kasih!`;

  return `[https://wa.me/$](https://wa.me/$){phone}?text=${encodeURIComponent(message)}`;
}```

### D. Responsive & Image Rules
Always use next/image with explicit width, height, or fill with appropriate sizes attribute.

Mobile-first approach: use Tailwind mobile breakpoints (sm:, md:, lg:).

---

## 4. Execution Workflow for Agent Command Execution
When asked to build or refactor components:

First verify src/data/products.ts and src/lib/ utilities exist.

Ensure no inline heavy JS logic is blocking the main render thread.

Keep code clean, fully typed (no any), modular, and well-commented.