import { Link } from "react-router-dom";
import ReasonStack from "../components/ReasonStack";

/* TODO: ganti 3-6 alasan ini sesuai orangnya */
const REASONS = [
  "Karena senyummu bisa memperbaiki hari siapa pun.",
  "Karena kamu selalu ada, bahkan di hari-hari sulit.",
  "Karena caramu mencintai keluarga tulus sekali.",
  "Karena kamu terus bertumbuh jadi orang yang lebih baik.",
  "Karena kehadiranmu saja sudah bikin rumah terasa hangat.",
];

export default function Reasons() {
  return (
    <main className="page-enter min-h-dvh bg-gray-50 px-6 py-16">
      <section className="mx-auto flex max-w-md flex-col items-center text-center">
        <h1 className="oooh-baby text-4xl text-blue-950/80">
          Alasan Kamu Spesial
        </h1>
        <p className="mt-3 text-sm text-blue-950/50">
          geser kartunya, satu per satu
        </p>

        <div className="mt-10 w-full">
          <ReasonStack reasons={REASONS} />
        </div>

        <Link to="/our-songs" className="mt-10">
          <button className="h-10 rounded-full bg-white px-6 text-sm font-semibold text-black shadow-sm transition-transform duration-300 active:scale-95">
            Lanjut
          </button>
        </Link>
      </section>
    </main>
  );
}
