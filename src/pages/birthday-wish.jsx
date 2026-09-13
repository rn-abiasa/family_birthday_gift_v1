import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "../components/Confetti";

/* TODO: ganti dengan penutup aslinya */
const CLOSING = `Selamat ulang tahun, Dika.

Semoga tahun ini membawa lebih banyak tawa,
lebih banyak cerita, dan lebih banyak alasan
untuk bersyukur.

Kami menyayangimu, selalu.`;

export default function BirthdayWish() {
  const [burst, setBurst] = useState(0);
  const navigate = useNavigate();

  const makeWish = () => setBurst((n) => n + 1);

  return (
    <main className="page-enter relative min-h-dvh overflow-hidden bg-gray-50 px-6 py-16">
      {burst > 0 && <Confetti key={burst} />}

      <section className="relative mx-auto flex max-w-md flex-col items-center text-center">
        <h1 className="oooh-baby text-4xl text-blue-950/80">
          Untuk Hari Spesialmu
        </h1>
        <p className="oooh-baby mt-6 whitespace-pre-line text-xl leading-relaxed text-blue-950/80 sm:text-2xl">
          {CLOSING}
        </p>

        <button
          onClick={makeWish}
          className="mt-10 h-11 rounded-full bg-blue-900 px-6 text-sm font-semibold text-white shadow-md shadow-blue-950/20 transition-transform duration-300 active:scale-95"
        >
          Make a Wish 🎉
        </button>

        <button
          onClick={() => navigate("/")}
          className="mt-5 text-xs font-medium uppercase tracking-wide text-blue-900/40"
        >
          putar ulang
        </button>
      </section>
    </main>
  );
}
