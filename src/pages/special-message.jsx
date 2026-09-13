import { useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from "../components/Typewriter";

/* TODO: ganti dengan surat aslinya. `\n\n` = jarak antar
   paragraf, ditampilkan lewat whitespace-pre-line di bawah. */
const LETTER = `Dika,

Ada begitu banyak hal yang ingin aku sampaikan,
tapi rasanya tidak ada kata yang cukup untuk
menggambarkan betapa berartinya kamu.

Terima kasih sudah menjadi dirimu sendiri —
yang selalu hangat, selalu ada, dan selalu
membuat orang-orang di sekitarmu merasa cukup.

Semoga di usia yang baru ini, semua hal baik
yang kamu tabur selama ini kembali padamu
berkali-kali lipat.

Selamat ulang tahun.
Dengan sayang,
Keluarga`;

export default function SpecialMessage() {
  const [skip, setSkip] = useState(false);
  const [done, setDone] = useState(false);

  return (
    <main className="page-enter min-h-dvh bg-gray-50 px-6 py-16">
      <section className="mx-auto flex max-w-xl flex-col items-center text-center">
        <h1 className="oooh-baby text-4xl text-blue-950/80">Untukmu</h1>

        <div className="oooh-baby mt-8 w-full whitespace-pre-line text-left text-xl leading-relaxed text-blue-950/80 sm:text-2xl">
          <Typewriter
            text={LETTER}
            speed={22}
            skip={skip}
            onDone={() => setDone(true)}
          />
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          {!done && (
            <button
              onClick={() => setSkip(true)}
              className="text-xs font-medium uppercase tracking-wide text-blue-900/40"
            >
              lewati
            </button>
          )}

          {done && (
            <Link to="/reasons">
              <button className="h-10 rounded-full bg-white px-6 text-sm font-semibold text-black shadow-sm transition-transform duration-300 active:scale-95">
                Lanjut
              </button>
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
