import { Link } from "react-router-dom";
import SongCard from "../components/SongCard";
import PolaroidPhoto from "../components/PolaroidPhoto";
import dika from "../assets/dika.webp";
import photoTwo from "../assets/2.webp";
import photoFive from "../assets/5.webp";

/* TODO: isi youtubeId dengan ID videonya — bagian setelah
   "v=" pada URL YouTube (contoh: youtu.be/XXXXXXXXXXX ->
   youtubeId: "XXXXXXXXXXX"). Kosongkan jika belum ada. */
const SONGS = [
  {
    title: "Raim Laode - Lesung Pipi",
    artist: "RAIM LAODE",
    youtubeId: "mJE0ROBWPvY",
  },
  {
    title: "Backstreet Boys - Shape Of My Heart",
    artist: "BACKSTREET BOYS",
    youtubeId: "OT5msu-dap8",
  },
  { title: "LANY - you!", artist: "LANY", youtubeId: "HEAn4FqXFY4" },
];

export default function OurSongs() {
  return (
    <main className="page-enter min-h-dvh bg-gray-50 px-6 py-16">
      <section className="mx-auto flex max-w-md flex-col items-center text-center">
        <h1 className="oooh-baby text-4xl text-blue-950/80">Our Songs</h1>
        <p className="mt-3 text-sm text-blue-950/50">
          lagu-lagu yang selalu mengingatkan kita padamu
        </p>

        {/* dekorasi foto polaroid, biar tidak monoton hanya kartu lagu */}
        <div className="mt-8 flex w-full items-end justify-center gap-6">
          <PolaroidPhoto
            src={photoTwo}
            alt="Kenangan"
            rotate={-7}
            lift={5}
            duration={5.4}
            caption="our vibe"
          />
          <PolaroidPhoto
            src={dika}
            alt="Dika"
            rotate={6}
            lift={7}
            duration={6.2}
            className="mt-6"
            caption="dika"
          />
        </div>

        <div className="mt-8 flex w-full gap-5">
          {SONGS.map((s) => (
            <SongCard key={s.title} {...s} />
          ))}
        </div>

        <PolaroidPhoto
          src={photoFive}
          alt="Kenangan"
          rotate={-4}
          lift={6}
          duration={5.8}
          caption="memories"
          className="mt-10"
        />

        <Link to="/birthday-wish" className="mt-10">
          <button className="h-10 rounded-full bg-white px-6 text-sm font-semibold text-black shadow-sm shadow-blue-950/10 transition-transform duration-300 active:scale-95">
            Lanjut
          </button>
        </Link>
      </section>
    </main>
  );
}
