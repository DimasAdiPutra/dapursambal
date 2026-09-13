export interface OrderPayload {
  name: string;
  product: string;
  qty: number;
  address: string;
  notes?: string;
}

/**
 * Generates an encrypted/encoded WhatsApp URL redirect to target seller number
 * for order processing.
 */
export function generateWaOrderLink(data: OrderPayload): string {
  const phone = "6281234567890";
  const message =
    `Halo Bu Nur, saya mau pesan:\n\n` +
    `• *Nama:* ${data.name}\n` +
    `• *Pesanan:* ${data.product} (${data.qty} qty)\n` +
    `• *Alamat:* ${data.address}\n` +
    `• *Catatan:* ${data.notes || "-"}\n\n` +
    `Apakah stok ready? Terima kasih!`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
