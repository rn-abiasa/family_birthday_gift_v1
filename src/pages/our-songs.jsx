import { Link } from "react-router-dom";
import SongCard from "../components/SongCard";

/* TODO: isi youtubeId dengan ID videonya — bagian setelah
   "v=" pada URL YouTube (contoh: youtu.be/XXXXXXXXXXX ->
   youtubeId: "XXXXXXXXXXX"). Kosongkan jika belum ada. */
const SONGS = [
  { title: "Judul Lagu 1", artist: "Artis 1", youtubeId: "" },
  { title: "Judul Lagu 2", artist: "Artis 2", youtubeId: "" },
  { title: "Judul Lagu 3", artist: "Artis 3", youtubeId: "" },
];

export default function OurSongs() {
  return (
    <main className="page-enter min-h-screen bg-gray-50 px-6 py-16">
      <section className="mx-auto flex max-w-md flex-col items-center text-center">
        <h1 className="oooh-baby text-4xl text-blue-950/80">Our Songs</h1>
        <p className="mt-3 text-sm text-blue-950/50">
          lagu-lagu yang selalu mengingatkan kita padamu
        </p>

        <div className="mt-10 flex w-full flex-col gap-5">
          {SONGS.map((s) => (
            <SongCard key={s.title} {...s} />
          ))}
        </div>

        <Link to="/birthday-wish" className="mt-10">
          <button className="h-10 rounded-full bg-white px-6 text-sm font-semibold text-black shadow-sm transition-transform duration-300 active:scale-95">
            Lanjut
          </button>
        </Link>
      </section>
    </main>
  );
}
