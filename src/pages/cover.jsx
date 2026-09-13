import { Link } from "react-router-dom";
import dika from "../assets/dika.webp";

export default function Cover() {
  return (
    <main className="relative min-h-dvh w-full overflow-hidden bg-gray-50">
      {/* dekorasi lembut, murni CSS, tidak menambah bobot */}
      <div className="pointer-events-none absolute -left-12 -top-12 h-56 w-56 rounded-full bg-blue-900/5 blur-2xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-64 w-64 rounded-full bg-blue-900/5 blur-2xl" />

      <section className="relative flex h-dvh flex-col items-center justify-center px-6 text-center">
        <h1 className="cover-title oooh-baby text-3xl text-blue-950/80 sm:text-4xl md:text-5xl">
          Happy Birthday Dika Prasetya
        </h1>

        <div className="relative mt-6 flex items-center justify-center">
          {/* ledakan lembut di belakang angka, bagian dari
              "kejutan" saat halaman dibuka */}
          <span
            aria-hidden="true"
            className="cover-burst pointer-events-none absolute h-40 w-40 rounded-full bg-blue-400/30 blur-xl sm:h-56 sm:w-56"
          />
          <p className="cover-number pacifico select-none leading-none text-blue-900 text-[clamp(6.5rem,32vw,17rem)]">
            20
          </p>
          <img
            src={dika}
            alt="Dika Prasetya"
            className="cover-photo absolute z-10 h-auto w-[34%] max-w-[190px] rounded-2xl object-cover shadow-xl shadow-blue-950/15"
          />
        </div>

        <Link to="/memories" className="cover-btn mt-14 sm:mt-20">
          <button className="h-10 rounded-full bg-white px-5 text-sm font-semibold text-black shadow-md shadow-blue-950/10 transition-transform duration-300 active:scale-95">
            OPEN
          </button>
        </Link>
      </section>
    </main>
  );
}
