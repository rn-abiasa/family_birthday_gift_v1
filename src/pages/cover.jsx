import { Link } from "react-router-dom";
import dika from "../assets/dika.png";

export default function Cover() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gray-50">
      {/* dekorasi lembut, murni CSS, tidak menambah bobot */}
      <div className="pointer-events-none absolute -left-12 -top-12 h-56 w-56 rounded-full bg-blue-900/5 blur-2xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-64 w-64 rounded-full bg-blue-900/5 blur-2xl" />

      <section className="relative flex h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="oooh-baby text-3xl text-blue-950/80 sm:text-4xl md:text-5xl">
          Happy Birthday Dika Prasetya
        </h1>

        <div className="relative mt-6 flex items-center justify-center">
          <p className="pacifico -rotate-5 select-none leading-none text-blue-900 text-[clamp(6.5rem,32vw,17rem)]">
            20
          </p>
          <img
            src={dika}
            alt="Dika Prasetya"
            className="absolute z-10 h-auto w-[34%] max-w-[190px] -rotate-10 rounded-2xl object-cover shadow-xl shadow-blue-950/15"
          />
        </div>

        <a href="/memories" className="mt-14 sm:mt-20">
          <button className="h-10 rounded-full bg-white px-5 text-sm font-semibold text-black shadow-md shadow-blue-950/10 transition-transform duration-300 active:scale-95">
            OPEN
          </button>
        </a>
      </section>
    </main>
  );
}
