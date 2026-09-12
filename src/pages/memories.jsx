import { Link } from "react-router-dom";
import { Carousel } from "../components/Carousel";

export default function Memories() {
  return (
    <main className="page-enter relative min-h-screen overflow-hidden bg-gray-50 px-5 py-14">
      <div className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full bg-blue-900/5 blur-2xl" />
      <div className="pointer-events-none absolute -right-8 bottom-24 h-48 w-48 rounded-full bg-blue-900/5 blur-2xl" />

      <section className="relative mx-auto flex max-w-md flex-col items-center text-center">
        <h1 className="oooh-baby mb-2 text-4xl text-blue-950/80">
          Our Memories
        </h1>
        <p className="mb-10 text-sm text-blue-950/50">
          sepenggal cerita yang kita lewati bersama
        </p>

        <Carousel />

        <p className="mt-8 text-xs uppercase tracking-widest text-blue-900/30">
          geser untuk lihat lainnya
        </p>

        <Link to="/special-message" className="mt-12">
          <button className="h-10 rounded-full bg-white px-6 text-sm font-semibold text-black shadow-sm shadow-blue-950/10 transition-transform duration-300 active:scale-95">
            Lanjut
          </button>
        </Link>
      </section>
    </main>
  );
}
