import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoProducts from "@/components/BentoProducts";
import CateringMenu from "@/components/CateringMenu";
import Testimonials from "@/components/Testimonials";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-red-600 selection:text-white font-sans">
      <Navbar />
      <Hero />
      <BentoProducts />
      <CateringMenu />
      <Testimonials />
      <OrderForm />
      <Footer />
    </main>
  );
}
